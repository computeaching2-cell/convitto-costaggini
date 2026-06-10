// ══════════════════════════════════════════════════════════════
// ASSISTENTE VIRTUALE CONVITTO COSTAGGINI — v2.0
// FAQ intelligente locale — nessuna API esterna, GDPR compliant
// Miglioramenti v2: KB espansa, sinonimi, scoring pesato,
// normalizzazione avanzata, fallback intelligente
// ══════════════════════════════════════════════════════════════
(function(){
'use strict';

const CSS=`
#cc-badge{position:absolute;top:-3px;right:-3px;width:14px;height:14px;border-radius:50%;background:#B8922A;border:2px solid #fff;display:none;}
#cc-badge.show{display:block;}
#cc-panel{position:fixed;bottom:5rem;right:1.5rem;z-index:8999;width:min(370px,calc(100vw - 2rem));height:min(520px,calc(100vh - 7rem));background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,.22);display:flex;flex-direction:column;transform:scale(.92) translateY(12px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .25s;overflow:hidden;}
#cc-panel.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
.cc-head{background:linear-gradient(135deg,#2C3E2D,#1a3a1b);padding:.8rem 1rem;display:flex;align-items:center;gap:.6rem;flex-shrink:0;}
.cc-avatar{width:34px;height:34px;border-radius:50%;background:rgba(184,146,42,.2);border:1.5px solid rgba(184,146,42,.4);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
.cc-info{flex:1;min-width:0;}
.cc-name{font-family:'Source Sans 3',sans-serif;font-size:.8rem;font-weight:700;color:#fff;}
.cc-sub{font-family:'Source Sans 3',sans-serif;font-size:.64rem;color:rgba(245,240,232,.5);}
.cc-x{background:none;border:none;cursor:pointer;color:rgba(245,240,232,.5);font-size:1rem;padding:0;line-height:1;}
.cc-x:hover{color:#fff;}
.cc-notice{background:#fef9ec;border-bottom:1px solid #fde68a;padding:.4rem .85rem;font-family:'Source Sans 3',sans-serif;font-size:.64rem;color:#78350f;flex-shrink:0;}
.cc-msgs{flex:1;overflow-y:auto;padding:.85rem;display:flex;flex-direction:column;gap:.55rem;-webkit-overflow-scrolling:touch;}
.cc-msgs::-webkit-scrollbar{width:3px;}.cc-msgs::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:2px;}
.cc-msg{max-width:86%;font-family:'Source Sans 3',sans-serif;font-size:.82rem;padding:.55rem .8rem;border-radius:12px;line-height:1.6;word-break:break-word;}
.cc-msg.bot{background:#f3f4f6;color:#1a1a1a;border-radius:4px 12px 12px 12px;align-self:flex-start;}
.cc-msg.user{background:linear-gradient(135deg,#2C3E2D,#1a3a1b);color:#fff;border-radius:12px 4px 12px 12px;align-self:flex-end;}
.cc-msg a{color:#2C3E2D;font-weight:700;}.cc-msg.user a{color:#D4AA4A;}
.cc-typing{align-self:flex-start;background:#f3f4f6;border-radius:4px 12px 12px 12px;padding:.55rem .85rem;}
.cc-dots{display:flex;gap:4px;align-items:center;height:14px;}
.cc-dots span{width:6px;height:6px;border-radius:50%;background:#9ca3af;animation:ccb .9s infinite;}
.cc-dots span:nth-child(2){animation-delay:.15s}.cc-dots span:nth-child(3){animation-delay:.3s}
@keyframes ccb{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
.cc-sugs{padding:.5rem .85rem .65rem;display:flex;flex-wrap:wrap;gap:.3rem;flex-shrink:0;border-top:1px solid #f3f4f6;}
.cc-sug{font-family:'Source Sans 3',sans-serif;font-size:.66rem;font-weight:600;padding:.28rem .65rem;border-radius:12px;background:#f3f4f6;color:#374151;border:1px solid #e5e7eb;cursor:pointer;transition:all .15s;white-space:nowrap;}
.cc-sug:hover{background:rgba(44,62,45,.08);border-color:#2C3E2D;color:#2C3E2D;}
.cc-foot{padding:.6rem .85rem;border-top:1px solid #f3f4f6;display:flex;gap:.45rem;align-items:flex-end;flex-shrink:0;}
#cc-inp{flex:1;min-height:34px;max-height:90px;padding:.45rem .75rem;border:1.5px solid #e5e7eb;border-radius:18px;font-family:'Source Sans 3',sans-serif;font-size:.83rem;color:#1a1a1a;outline:none;resize:none;line-height:1.5;overflow-y:auto;transition:border-color .15s;}
#cc-inp:focus{border-color:#2C3E2D;}#cc-inp::placeholder{color:#aaa;}
#cc-go{width:34px;height:34px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:none;cursor:pointer;color:#fff;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:opacity .2s;}
#cc-go:disabled{opacity:.35;cursor:default;}
`;

// ── BASE DI CONOSCENZA ESPANSA ─────────────────────────────────────────────
// Struttura: k = keyword/frasi chiave, r = risposta HTML, w = peso (opzionale, default 1)
// Le keyword possono essere stringhe singole o frasi: più è specifica la frase, più peso ha
const KB=[

  // ── SALUTI ──
  {k:['ciao','salve','buongiorno','buonasera','hey','hello','aiuto','help','cosa puoi','cosa sai'],
   r:'Ciao! 👋 Sono l'assistente virtuale del Convitto "Costaggini" di Rieti. Posso rispondere a domande su iscrizioni, rette, orari, educatori, servizi e vita convittuale. Come posso aiutarti?'},
  {k:['grazie','graziee','perfetto','ottimo','benissimo','capito','ok grazie'],
   r:'Prego! 😊 Se hai altre domande sono qui. Puoi anche scrivere direttamente alla segreteria: <a href="contatti.html">modulo di contatto →</a>'},
  {k:['sei un robot','sei un ai','intelligenza artificiale','chi sei','come funzioni','chatbot','bot','automatico'],
   r:'Sono l'assistente virtuale del Convitto "Costaggini" — funziono completamente in locale, nessuna domanda viene trasmessa a server esterni. So rispondere su iscrizioni, orari, rette, educatori e vita convittuale. Per domande specifiche usa il <a href="contatti.html">modulo di contatto →</a>'},

  // ── ISCRIZIONI ──
  {k:['iscri','ammission','come si fa','come faccio','domanda di ammissione','entrare al convitto',
      'portale miur','unica','scadenza','7 luglio','modulo domanda','procedura'],
   r:'La procedura di ammissione si svolge in <strong>4 passi</strong>:<br>1. Iscrizione online sul portale MIUR + modulo al Convitto entro il <strong>7 luglio</strong><br>2. Consegna documentazione in segreteria e versamento quota<br>3. Colloquio con il Dirigente e gli educatori<br>4. A settembre: arrivo, assegnazione camera, accoglienza<br><br>📋 <a href="ammissione.html">Guida completa all'ammissione →</a>'},

  // ── RETTE E COSTI ──
  {k:['retta','costo','quanto costa','quanto si paga','tariffa','prezzo','euro','pagamento',
      'isee','agevolazion','riduzion','sconto','esonero','borsa di studio','rata'],
   r:'Le rette sono deliberate ogni anno dal Consiglio d'Istituto e calibrate sull'<strong>ISEE familiare</strong>. Sono previste riduzioni per situazioni economiche certificate e borse di studio regionali.<br><br>💶 <a href="ammissione.html#tariffe">Tariffe e agevolazioni →</a><br>✉️ Per un preventivo: <a href="contatti.html">Contattaci →</a>'},

  // ── ORARI E GIORNATA ──
  {k:['orario','sveglia','quando','orari','giornata','cosa si fa','routine','programma',
      'sveglia','alzarsi','luci spente','luce','mattina','pomeriggio','sera','notte'],
   r:'<strong>La giornata tipo al Convitto:</strong><br>🌅 06:30 Sveglia · 07:00 Colazione (prodotti km zero)<br>🚌 07:40 Trasporto alla scuola<br>📚 08:00–14:00 Lezioni IPSSEOA<br>🍝 14:00 Pranzo<br>🏃 15:00–15:30 Tempo libero<br>📖 15:30–17:15 Studio guidato<br>⚽ 17:15–19:15 Tempo libero / sport / Lab Musicale<br>🍽️ 19:15 Cena<br>🌙 22:30 Luci spente<br><br>📅 <a href="giornata-tipo.html">Leggi la giornata completa →</a>'},

  // ── PASTI E MENSA ──
  {k:['pranzo','cena','colazione','pasti','mensa','si mangia','cosa si mangia','cucina',
      'menù','menu','km zero','prodotti locali','reatino','quattro pasti','vitto'],
   r:'La cucina prepara <strong>quattro pasti al giorno</strong> con prodotti locali a <strong>km zero</strong> del territorio reatino. I menù sono concordati con la ASL di Rieti. La mensa è presidiata dagli educatori — un momento di convivialità vera.<br><br>🥗 Allergie e intolleranze gestite con menù dedicati.'},

  // ── ALLERGIE E DIETE ──
  {k:['allergi','intolleran','celiaco','celiachia','vegano','vegetarian','dieta speciale',
      'senza glutine','senza lattosio','arachidi','diabete','religiosa','etica','halal'],
   r:'Il Convitto gestisce allergie, intolleranze e diete particolari — anche per esigenze culturali o religiose — con <strong>menù dedicati</strong>, senza che il ragazzo debba chiedere due volte. Va segnalato al momento dell'iscrizione.<br><br>📋 <a href="ammissione.html#moduli">Modulo allergie →</a>'},

  // ── CAMERE E STRUTTURA ──
  {k:['camera','stanza','letto','bagno','dormitor','alloggio','posto letto','struttura',
      'dove si dorme','tripla','doppia','piano','arredat'],
   r:'Camere principalmente <strong>triple con bagno privato</strong>, su 5 piani (3 maschili, 2 femminili). Ogni stanza ha letti, armadi e scrivanie personali. I ragazzi riordinano la camera ogni mattina prima di andare a scuola.<br><br>🔭 <a href="tour-virtuale.html">Visita gli spazi a 360° →</a>'},

  // ── WIFI E SMARTPHONE ──
  {k:['wifi','internet','connession','smartphone','telefono','cellulare','tablet','pc',
      'computer','navigar','online','streaming','social'],
   r:'<strong>Wi-Fi</strong> disponibile in tutte le aree comuni. Lo smartphone è libero nelle ore di tempo libero (17:15–22:30). Durante lo studio guidato e le ore notturne si applicano le regole del Regolamento.'},

  // ── EDUCATORI ──
  {k:['educatori','educator','chi sono','personale','staff','chi segue','adulti',
      'chi controlla','chi vigila','chi lavora','contratto','ccnl','profilo professionale',
      'sono qualificati','figure educative','h24'],
   r:'Gli educatori del Convitto sono <strong>personale educativo di ruolo</strong>, selezionati per concorso pubblico MIUR e tutelati dal CCNL Istruzione e Ricerca (artt. 127–129). Non sono sorveglianti — hanno competenze psicopedagogiche e lavorano in coordinamento con i docenti. Presenti <strong>H24</strong>, inclusa la notte.<br><br>👥 <a href="educatori.html">Conosci il team →</a>'},

  // ── SICUREZZA E NOTTE ──
  {k:['sicur','notte','sorveglianza','chi c'è di notte','emergenza','pronto soccorso',
      'infermeria','malato','malata','si ammala','mi fa male'],
   r:'Gli educatori sono presenti <strong>H24</strong>, inclusa la notte. Per qualsiasi malessere è disponibile assistenza immediata. Protocolli di emergenza conformi al D.Lgs. 81/2008.<br><br>📞 Per urgenze: <a href="contatti.html">Contattaci →</a>'},

  // ── AMBIENTAMENTO ──
  {k:['ambientamento','si ambienterà','lontano da casa','nostalgia','non conosce nessuno',
      'primo giorno','prima settimana','paura','ansioso','ansia','timido','solo'],
   r:'È la preoccupazione più comune. I primi giorni gli educatori dedicano un'attenzione particolare ai nuovi arrivati: li affiancano, li presentano, li aiutano a costruire le prime amicizie. <strong>La maggior parte dei ragazzi, dopo due o tre settimane, dice di sentirsi "a casa".</strong> Il gruppo dei pari e la routine quotidiana sono i due alleati più potenti.<br><br>💬 <a href="ammissione.html">Leggi le risposte dei genitori →</a>'},

  // ── STUDIO GUIDATO ──
  {k:['studio guidato','compiti','aiuto studio','ore studio','15:30','studiare','pomeriggio studio',
      'doposcuola','metodo di studio','riuscirà a studiare','insufficiente','recupero'],
   r:'Ogni pomeriggio dalle <strong>15:30 alle 17:15</strong> c'è lo studio guidato con gli educatori. Non solo "fare i compiti" — gli educatori lavorano sul metodo, sull'autonomia e sull'abitudine allo studio. Per difficoltà persistenti si attivano supporti aggiuntivi in accordo con la famiglia.'},

  // ── COMPAGNO DI CAMERA / CONFLITTI ──
  {k:['compagno di camera','litiga','conflitti','non va d'accordo','spostamento camera',
      'mediazione','se litigano','convivenza'],
   r:'L'educatore interviene subito per mediare. Se il problema persiste, il Collaboratore del Dirigente valuta uno <strong>spostamento di camera</strong>. La convivenza è parte del percorso educativo: imparare a gestire i conflitti è uno degli obiettivi espliciti del Convitto.'},

  // ── BULLISMO ──
  {k:['bullismo','cyberbullismo','cyber bullismo','prevaricazione','viene preso in giro',
      'viene bullizzato','bullizzata','molestie','insulti','minacce online','prendono in giro',
      'esclusione','violenza','sopraffazion','sicurezza','ambiente sicuro','protezione',
      'segnalare bullismo','cosa fate contro il bullismo'],
   r:'Il Convitto adotta una politica <strong>zero tolerance</strong> su bullismo e cyberbullismo. Gli educatori sono presenti H24 e formati per intervenire. È in vigore il <strong>Codice Interno di Prevenzione e Contrasto al Bullismo e Cyberbullismo</strong> (Legge 71/2017).<br><br>🛡️ <a href="bullismo.html">Guida completa per genitori →</a><br>📞 Per segnalazioni immediate: <a href="contatti.html">Contattaci →</a>'},

  // ── LABORATORIO MUSICALE ──
  {k:['musica','laboratorio musicale','chitarra','canto','strumenti','lab musicale',
      'tastiera','percussioni','gaggiano','barba','dino','band','suonare','giovedì'],
   r:'Il <strong>Laboratorio Musicale</strong> si svolge ogni <strong>giovedì pomeriggio</strong>. Fondato da Michele Gaggiano e Dino Barba, è aperto a tutti i convittori — anche senza esperienza. Nel 2019 i ragazzi hanno prodotto e registrato il brano <em>"La Solidarietà"</em> su vinile.<br><br>🎵 <a href="laboratorio-musicale.html">Scopri il Lab Musicale →</a>'},

  // ── VINILE E LA SOLIDARIETÀ ──
  {k:['vinile','disco','solidariet','brano','canzone','registrazione','studio di registrazione',
      'album','cd','la solidarietà','produzione musicale'],
   r:'Nel 2019 il Laboratorio Musicale ha registrato il brano <em>"La Solidarietà"</em> in uno studio professionale, pubblicandolo su <strong>vinile autoprodotto</strong> dai convittori. Una delle produzioni più belle della storia del Convitto.<br><br>🎶 <a href="solidarieta.html">Guarda il video →</a>'},

  // ── SPORT E ATTIVITÀ POMERIDIANE ──
  {k:['sport','palestra','calcio','basket','ping pong','calciobalilla','attività pomeridiane',
      'tempo libero','17:15','svago','hobby','cosa si fa nel pomeriggio'],
   r:'Nel <strong>tempo libero (17:15–19:15)</strong> si può fare sport, partecipare al Lab Musicale, uscire autonomamente con autorizzazione o semplicemente rilassarsi. La sala ricreativa ha calciobalilla, ping pong e divani.<br><br>📅 <a href="giornata-tipo.html">Giornata tipo →</a>'},

  // ── SEMICONVITTO ──
  {k:['semiconvitto','semi convitto','solo pranzo','non alloggia','giornaliero','senza dormire',
      'non dormo','mezza pensione'],
   r:'Il <strong>Semiconvitto</strong> (pranzo + studio guidato + attività pomeridiane, senza pernottamento) è attivo dall'a.s. 2026/27.<br><br>📋 <a href="semiconvitto.html">Info Semiconvitto →</a>'},

  // ── VISITE E OPEN DAY ──
  {k:['open day','visita guidata','venire a vedere','prenotare','vedere il convitto',
      'posso venire','sopralluogo','porte aperte','tour dal vivo'],
   r:'Puoi prenotare una <strong>visita guidata</strong> o partecipare all'Open Day.<br><br>📅 <a href="orientamento.html">Orientamento e visite →</a><br>🔭 Oppure esplora virtualmente: <a href="tour-virtuale.html">Tour Virtuale 360° →</a>'},

  // ── TOUR VIRTUALE ──
  {k:['tour virtuale','tour','360','foto','vedere gli spazi','visitare online','stanze',
      'video convitto','immagini','galleria','com'è','panorama'],
   r:'Il Convitto è visitabile virtualmente a <strong>360°</strong> direttamente dallo smartphone, senza installare nulla. Puoi esplorare ingresso, corridoi, sala ricreativa, ufficio educatori e molto altro.<br><br>🔭 <a href="tour-virtuale.html">Apri il Tour Virtuale →</a>'},

  // ── DOVE SI TROVA ──
  {k:['dove','indirizzo','come arrivare','via','rieti','sede','posizione','mappa','gps',
      'navigatore','autobus','treno','pullman','distanza','km da','percorso'],
   r:'Il Convitto si trova in <strong>Via Salaria s.n.c., 02100 Rieti</strong>, nella sede dell'IPSSEOA "R. A. Costaggini".<br><br>📍 <a href="contatti.html">Mappa e indicazioni →</a>'},

  // ── CONTATTI ──
  {k:['telefono','email','contatto','scrivere','segreteria','informazioni','risponde',
      'numero','chiamare','mail','pec','indirizzo email','come contatto'],
   r:'Puoi contattarci tramite:<br>📧 <a href="mailto:convitto@alberghierorieti.it">convitto@alberghierorieti.it</a><br>📋 <a href="contatti.html">Modulo di contatto →</a><br><br>La segreteria risponde entro 24-48 ore nei giorni scolastici.'},

  // ── CORREDO ──
  {k:['corredo','cosa portare','cosa devo portare','lista','valigia','biancheria',
      'lenzuola','asciugamani','vestiti','necessaire','bagagli','cosa serve'],
   r:'La lista completa del corredo obbligatorio è disponibile con possibilità di stampa.<br><br>📋 <a href="ammissione.html#moduli">Lista corredo →</a>'},

  // ── REGOLAMENTO ──
  {k:['regolamento','regole','norme','disciplina','vietato','permesso','cosa non si può',
      'articoli','sanzioni','punizioni','provvedimento','comportamento','35 articoli'],
   r:'Il <strong>Regolamento del Convitto</strong> conta 35 articoli (versione 30/01/2025). Disciplina diritti, doveri, orari, uscite, sanzioni e molto altro. È consultabile in formato interattivo con ricerca per parola chiave.<br><br>📜 <a href="regolamento.html">Leggi il Regolamento →</a>'},

  // ── USCITE E PERMESSI ──
  {k:['uscire','permesso uscita','uscita autonoma','possono uscire','chi ritira',
      'delega','delegato','autorizzazione uscita','libera uscita','rientrare tardi'],
   r:'Le uscite autonome richiedono l'<strong>autorizzazione firmata dei genitori</strong>. È possibile delegare persone di fiducia per il ritiro. La libera uscita si regola secondo il Regolamento (Art. 28–29).<br><br>📋 <a href="ammissione.html#moduli">Modulo autorizzazione →</a>'},

  // ── DSA E BES ──
  {k:['dsa','bes','dislessia','disgrafia','discalculia','adhd','bisogni educativi',
      'sostegno','pdp','piano didattico personalizzato','disturbo apprendimento'],
   r:'Il Convitto accoglie studenti con <strong>DSA e BES</strong> con piani personalizzati coordinati con il Consiglio di Classe. Il personale educativo è formato per supportare le specifiche esigenze.<br><br>✉️ <a href="contatti.html">Per un colloquio →</a>'},

  // ── STRANIERI E LINGUE ──
  {k:['straniero','altra nazionalità','non parlo italiano','traduzione','arabo','romeno',
      'inglese','spagnolo','altra lingua','cinque lingue'],
   r:'Il sito è disponibile in <strong>5 lingue</strong>: italiano, inglese, spagnolo, arabo, romeno. Usa il selettore in basso a sinistra.<br><br>✉️ Per assistenza nella tua lingua: <a href="contatti.html">Contattaci →</a>'},

  // ── FARMACI ──
  {k:['farmaci','medicine','terapia','somministrazione farmaci','medicinale',
      'chi somministra','prendere farmaci','pillole'],
   r:'La somministrazione di farmaci richiede apposita autorizzazione medica e dei genitori. Contattare la segreteria per il modulo specifico.<br><br>✉️ <a href="contatti.html">Contattaci →</a>'},

  // ── QUIZ E ORIENTAMENTO ──
  {k:['quiz','gioco','talento','fa per me','percorso scolastico','orientamento',
      'enogastronomia','ospitalità','pasticceria','sala','cucina','accoglienza','indirizzo'],
   r:'Prova i <strong>6 quiz interattivi</strong> per scoprire quale percorso fa per te: sai già cucinare? Cucina, Sala, Pasticceria o Accoglienza? C'è anche un cruciverba del Costaggini!<br><br>🎮 <a href="scopri-talento.html">Scopri il tuo Talento →</a>'},

  // ── ALUMNI E COMMUNITY ──
  {k:['alumni','ex convittore','ex studente','diplomati','ex allievi','sono stato convittore',
      'ho frequentato','community','mappa del mondo','muro dei ricordi','lettere'],
   r:'La community degli <strong>Alumni</strong> cresce ogni anno. Puoi aggiungere la tua scheda, lasciare un ricordo nel Muro dei Ricordi e apparire sulla mappa del mondo degli ex convittori.<br><br>🌍 <a href="comunita.html">La nostra Comunità →</a><br>✍️ <a href="iscriviti-alumni.html">Unisciti agli Alumni →</a>'},

  // ── AREA RISERVATA FAMIGLIE ──
  {k:['area riservata','famiglie','genitore','genitori','accesso famiglie','dashboard',
      'seguire mio figlio','presenze online','registro famiglie','notifiche genitori'],
   r:'L'<strong>Area Riservata Famiglie</strong> permette ai genitori di seguire in tempo reale: presenze ai pasti, valutazioni giornaliere, note degli educatori, colloqui e comunicazioni formali.<br><br>🔐 <a href="area-riservata.html">Richiedi accesso →</a>'},

  // ── AGGIORNAMENTI / NEWS ──
  {k:['novità','news','aggiornamenti','notizie','comunicazioni','avvisi','bacheca',
      'cosa c'è di nuovo','ultime notizie'],
   r:'Tutte le comunicazioni, gli avvisi e le novità del Convitto sono sulla bacheca aggiornamenti.<br><br>📢 <a href="aggiornamenti.html">Leggi gli aggiornamenti →</a>'},

  // ── PTOF E PROGETTO EDUCATIVO ──
  {k:['ptof','progetto educativo','piano offerta formativa','filosofia','metodo',
      'mission','obiettivi','valori','come educate','stile educativo'],
   r:'Il progetto educativo del Convitto mira alla crescita umana, civile e culturale dei ragazzi — in coordinamento con i docenti dell'Istituto.<br><br>📖 <a href="ptof.html">PTOF →</a> · <a href="progetto-educativo.html">Progetto Educativo →</a>'},

  // ── CERTIFICATI ──
  {k:['certificato','frequenza','documento','attestato','dichiarazione','modulo',
      'stampare','pdf','scaricare','modulistica'],
   r:'Puoi richiedere e stampare online certificati di frequenza e altri moduli.<br><br>📄 <a href="ammissione.html#moduli">Modulistica →</a>'},

  // ── CONVITTO VS COLLEGIO PRIVATO ──
  {k:['differenza','cos'è un convitto','collegio privato','privatista','pubblico',
      'statale','costo rispetto a','convitto o collegio'],
   r:'Il Convitto "Costaggini" è una struttura <strong>pubblica statale</strong> (MIUR), non un collegio privato. Le rette sono calibrate sull'ISEE. Offre lo stesso livello di cura educativa dei collegi privati — ma con una vocazione pubblica e inclusiva.'},

  // ── TRASPORTO ──
  {k:['trasporto','pullman','bus','navetta','come vanno a scuola','accompagnati',
      'mezzi','ci accompagnano','7:40','come raggiungono la scuola'],
   r:'Il Convitto dispone di <strong>mezzi propri</strong> che accompagnano i ragazzi all'IPSSEOA ogni mattina (ore 7:40). Un educatore è sempre presente sul mezzo.'},

  // ── AUTONOMIA DEL RAGAZZO ──
  {k:['autonomia','diventerà autonomo','impara ad arrangiarsi','crescerà','responsabilità',
      'indipendenza','imparerà a vivere da solo'],
   r:'La conquista progressiva dell'autonomia è uno degli <strong>obiettivi espliciti</strong> del progetto educativo. I ragazzi imparano a gestire il tempo, i rapporti, lo studio e gli spazi — con la guida degli educatori, non nonostante di essa.'},

  // ── PATTO EDUCATIVO ──
  {k:['patto educativo','patto di corresponsabilità','firmare','accordo','impegno'],
   r:'Prima dell'inizio dell'anno scolastico, le famiglie partecipano a un <strong>colloquio con il Dirigente e gli educatori</strong> durante il quale viene presentato il Regolamento e firmato il Patto Educativo di Corresponsabilità.'},

];

// ── SUGGERIMENTI CONTESTUALI ──────────────────────────────────────────────
// Cambiano in base all'ultimo argomento discusso
const SUGS_DEFAULT=['Come ci si iscrive?','Quanto costa la retta?','Orari della giornata','Chi sono gli educatori?','C\'è il bullismo?'];
const SUGS_MAP={
  iscri:    ['Quanto costa la retta?','Cosa devo portare?','Come si fa la domanda?'],
  retta:    ['Ci sono agevolazioni ISEE?','Come ci si iscrive?','Borsa di studio?'],
  orario:   ['Cosa si fa nel pomeriggio?','C\'è studio guidato?','A che ora si cena?'],
  camera:   ['C\'è il Wi-Fi?','Posso vedere le camere?','Posso cambiare camera?'],
  musica:   ['Chi sono gli educatori?','Cosa si fa nel pomeriggio?','Gli alumni?'],
  bullismo: ['Come segnalo un caso?','Chi contatto di notte?','C\'è sicurezza H24?'],
  educatori:['Chi vigila di notte?','Come ci si iscrive?','Il progetto educativo?'],
  alumni:   ['Il Lab Musicale?','Il vinile del Convitto?','La community degli ex?'],
};

// ── NORMALIZZAZIONE ───────────────────────────────────────────────────────
// Gestisce accenti, apostrofi, errori ortografici comuni, abbreviazioni
const NORM_MAP={
  "iscriversi":"iscri","iscrizione":"iscri","iscritto":"iscri","iscritta":"iscri",
  "rette":"retta","pagare":"paga","pagamento":"pagamento","costo":"costo",
  "mangiare":"mangi","mangio":"mangi","mangiano":"mangi",
  "telefono":"telefono","numero di telefono":"telefono",
  "educatrice":"educatori","educatrici":"educatori",
  "convittore":"iscri","convittori":"iscri",
  "c'e'":"c'è","ce'":"c'è","wifi":"wifi","wi fi":"wifi","wi-fi":"wifi",
  "devo":"","dovrei":"","vorrei":"","voglio":"","puoi dirmi":"","puoi spiegarmi":"",
  "ho bisogno di sapere":"","mi puoi dire":"","vorrei sapere":"","dimmi":"",
  "qual è":"","quale":"","quando":"quando","dove":"dove","come":"come","chi":"chi",
  "l'":"","dell'":"","all'":"","nell'":"","un'":"","un ":"","una ":"","il ":"","la ":"","lo ":"","i ":"","le ":"","gli ":"",
};

function normalize(q){
  let s=q.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'') // rimuove accenti
    .replace(/['"''""]/g,'') // rimuove apostrofi e virgolette
    .replace(/[^a-z0-9\s]/g,' ') // rimuove punteggiatura
    .replace(/\s+/g,' ').trim();
  // Applica sostituzioni
  for(const[from,to] of Object.entries(NORM_MAP)){
    s=s.replace(new RegExp(from,'g'),to);
  }
  return s.replace(/\s+/g,' ').trim();
}

// ── MOTORE DI MATCHING ────────────────────────────────────────────────────
// Scoring: +2 per corrispondenza di frase intera, +1 per keyword singola
function match(q){
  const norm=normalize(q);
  let best=null,top=0;
  for(const e of KB){
    let score=0;
    for(const k of e.k){
      const kn=k.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').trim();
      if(kn.length>4&&norm.includes(kn)){
        // Le frasi più lunghe pesano di più
        score+=kn.includes(' ')?2:1;
      }
    }
    if(score>top){top=score;best=e;}
  }
  return best&&top>0?{r:best.r,k:best.k[0]}:null;
}

// ── SUGGERIMENTI CONTESTUALI ──────────────────────────────────────────────
function getSugs(firstKey){
  if(!firstKey)return SUGS_DEFAULT;
  const fk=firstKey.toLowerCase();
  for(const[cat,sugs] of Object.entries(SUGS_MAP)){
    if(fk.includes(cat))return sugs;
  }
  return SUGS_DEFAULT;
}

// ── FALLBACK INTELLIGENTE ─────────────────────────────────────────────────
// Prova a identificare parole importanti nella domanda e suggerisce
function smartFallback(q){
  const norm=normalize(q);
  const hints=[
    {w:['quant','soldi','euro','pag'],s:'Potresti intendere la <a href="ammissione.html#tariffe">retta del Convitto →</a>?'},
    {w:['scuol','liceo','istitut','class'],s:'Stai cercando informazioni sulla scuola? Visita il <a href="https://www.alberghierorieti.edu.it" target="_blank">sito dell\'IPSSEOA →</a>'},
    {w:['mangi','pasto','cibo','nutriz'],s:'Vuoi sapere della <a href="giornata-tipo.html">mensa e dei pasti →</a>?'},
    {w:['sport','gioc','palestra','calcio'],s:'Ti interessano le <a href="giornata-tipo.html">attività del pomeriggio →</a>?'},
  ];
  for(const h of hints){
    if(h.w.some(w=>norm.includes(w))){
      return 'Non ho trovato una risposta precisa alla tua domanda. '+h.s+'<br><br>Oppure scrivi direttamente alla segreteria: <a href="contatti.html">modulo di contatto →</a>';
    }
  }
  return 'Non ho trovato una risposta precisa. Puoi scriverci direttamente: <a href="contatti.html">modulo di contatto →</a> — rispondiamo entro 24-48 ore nei giorni scolastici.';
}

// ── COSTRUZIONE UI ────────────────────────────────────────────────────────
function build(){
  const s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s);


  // Usa il fab già creato da nav.js; lo crea solo se assente (pagine senza nav.js)
  let fab = document.getElementById('cc-fab');
  if (!fab) {
    fab = document.createElement('button');
    fab.id = 'cc-fab';
    fab.style.cssText = 'position:fixed;bottom:1.5rem;right:1.25rem;z-index:8900;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:1.5px solid rgba(184,146,42,.35);box-shadow:0 3px 12px rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;color:#fff;';
    fab.setAttribute('aria-label', 'Apri assistente virtuale');
    fab.innerHTML = '🎓<span id="cc-badge" aria-hidden="true"></span>';
    document.body.appendChild(fab);
  } else {
    fab.setAttribute('aria-haspopup', 'dialog');
    if (!document.getElementById('cc-badge')) {
      const badge = document.createElement('span');
      badge.id = 'cc-badge'; badge.setAttribute('aria-hidden', 'true');
      fab.appendChild(badge);
    }
  }
  fab.onclick = toggle;


  const panel=document.createElement('div');
  panel.id='cc-panel';
  panel.setAttribute('role','dialog');
  panel.setAttribute('aria-label','Assistente virtuale');
  panel.setAttribute('aria-modal','true');
  panel.innerHTML=`
    <div class="cc-head">
      <div class="cc-avatar">🎓</div>
      <div class="cc-info">
        <div class="cc-name">Assistente del Convitto</div>
        <div class="cc-sub">Sistema automatico locale · nessun dato trasmesso</div>
      </div>
      <button class="cc-x" onclick="document.getElementById('cc-panel').classList.remove('open')" aria-label="Chiudi">✕</button>
    </div>
    <div class="cc-notice" role="note">🤖 <strong>Sistema automatico locale.</strong> Nessun dato viene trasmesso a servizi esterni. Per assistenza diretta usa il <a href="contatti.html">modulo di contatto</a>.</div>
    <div class="cc-msgs" id="cc-msgs" role="log" aria-live="polite"></div>
    <div class="cc-sugs" id="cc-sugs"></div>
    <div class="cc-foot">
      <textarea id="cc-inp" placeholder="Scrivi la tua domanda…" rows="1" aria-label="Domanda"></textarea>
      <button id="cc-go" onclick="ccSend()" aria-label="Invia">➤</button>
    </div>`;
  document.body.appendChild(panel);

  const inp=document.getElementById('cc-inp');
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ccSend();}});
  inp.addEventListener('input',()=>{inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,90)+'px';});

  addMsg('bot','Ciao! 👋 Sono l\'assistente virtuale del Convitto "Costaggini" di Rieti. Posso aiutarti con domande su iscrizioni, orari, servizi e vita convittuale.');
  buildSugs(null);

  setTimeout(()=>{
    if(!document.getElementById('cc-panel').classList.contains('open'))
      document.getElementById('cc-badge').classList.add('show');
  },4000);
}

function toggle(){
  const p=document.getElementById('cc-panel');
  p.classList.toggle('open');
  document.getElementById('cc-badge').classList.remove('show');
  if(p.classList.contains('open'))setTimeout(()=>document.getElementById('cc-inp').focus(),300);
}

function addMsg(role,html){
  const m=document.getElementById('cc-msgs');
  const d=document.createElement('div');
  d.className='cc-msg '+role;
  d.innerHTML=html;
  m.appendChild(d);
  m.scrollTop=m.scrollHeight;
}

function buildSugs(firstKey){
  const c=document.getElementById('cc-sugs');
  const sugs=getSugs(firstKey);
  c.innerHTML=sugs.map(s=>`<button class="cc-sug" onclick="ccQuick(this)">${s}</button>`).join('');
}

window.ccQuick=function(btn){
  document.getElementById('cc-inp').value=btn.textContent;
  ccSend();
};

window.ccSend=function(){
  const inp=document.getElementById('cc-inp');
  const q=inp.value.trim();
  if(!q)return;
  inp.value='';
  inp.style.height='auto';
  document.getElementById('cc-go').disabled=true;
  document.getElementById('cc-sugs').innerHTML='';
  addMsg('user',q);

  const m=document.getElementById('cc-msgs');
  const t=document.createElement('div');
  t.className='cc-typing';t.id='cc-t';
  t.innerHTML='<div class="cc-dots"><span></span><span></span><span></span></div>';
  m.appendChild(t);m.scrollTop=m.scrollHeight;

  setTimeout(()=>{
    t.remove();
    const res=match(q);
    addMsg('bot', res?res.r:smartFallback(q));
    document.getElementById('cc-go').disabled=false;
    buildSugs(res?res.k:null);
  },400+Math.random()*350);
};

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();
