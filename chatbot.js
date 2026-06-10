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

  // ISCRIZIONI
  {k:['iscri','ammission','come si fa per entrare','come faccio ad iscrivermi','procedura iscrizione',
      'come entro','voglio iscrivermi','come si entra','modulistica iscrizione','domanda di ammissione',
      'portale mim','unica','quando ci si iscrive','iscrizioni aperte','scadenza iscrizioni'],
   r:'Per iscriversi al Convitto occorre prima iscriversi all\'<strong>IPSSEOA Costaggini</strong> tramite il portale MIM (<a href="https://unica.istruzione.gov.it" target="_blank">unica.istruzione.gov.it</a>) entro fine gennaio. A giugno la segreteria comunica la conferma del posto in Convitto.<br><br>📋 Moduli e istruzioni: <a href="ammissione.html">Come iscriversi →</a>'},

  // RETTE E COSTI
  {k:['retta','costo','quanto si paga','quanto costa','tariffa','prezzo','pagamento','euro','spesa',
      'quanto viene','costo mensile','rata','canone','agevolazion','isee','borsa di studio',
      'riduzioni','sconto','esonero','esenzione','paga','affordabl'],
   r:'Le rette sono deliberate ogni anno dal Consiglio d\'Istituto in base all\'ISEE familiare. Sono previste riduzioni per situazioni economiche certificate.<br><br>💶 Tariffe aggiornate: <a href="ammissione.html#tariffe">Rette e agevolazioni →</a><br>✉️ Per un preventivo personalizzato: <a href="contatti.html">Contattaci →</a>'},

  // ORARI E GIORNATA
  {k:['orario','sveglia','luce','quando','orari','mattina','pomeriggio','sera','notte','programma',
      'giornata','orario giornata','cosa si fa','routine','sveglia','alzarsi','andare a letto',
      'luci spente','timetable','schedule','cosa succede'],
   r:'<strong>La giornata tipo al Convitto:</strong><br>🌅 06:30 Sveglia · 07:00 Colazione<br>🎒 08:00 Scuola fino alle 13:30<br>🍝 13:30 Pranzo<br>📚 15:30–17:15 Studio guidato<br>⚽ 17:15–19:15 Tempo libero<br>🍽️ 19:15 Cena<br>🌙 22:30 Luci spente<br><br>Dettagli: <a href="giornata-tipo.html">Giornata tipo →</a>'},

  // PRANZO / CENA / COLAZIONE
  {k:['pranzo','cena','colazione','pasti','si mangia','cosa si mangia','mangiare','vitto',
      'mensa','ristorante','ristorazion','cibo','cucina','km zero','locale','qualita'],
   r:'La cucina prepara colazione, pranzo e cena ogni giorno con prodotti locali a <strong>km zero</strong>. I menù sono concordati con la <strong>ASL di Rieti</strong> e sono personalizzabili per allergie e intolleranze.<br><br>🥗 Modulo allergie: <a href="ammissione.html#moduli">Modulistica →</a>'},

  // ALLERGIE E DIETE SPECIALI
  {k:['allergi','intolleran','celiaco','celiachia','vegano','vegetarian','dieta','senza glutine',
      'dieta speciale','senza lattosio','frutta secca','arachidi','diabete','diabetic'],
   r:'Il Convitto gestisce diete speciali e allergie alimentari documentate. Occorre presentare certificato medico e compilare il modulo allergie.<br><br>📋 Modulo allergie: <a href="ammissione.html#moduli">Modulistica →</a><br>✉️ Per casi particolari: <a href="contatti.html">Contattaci →</a>'},

  // CAMERE E STRUTTURA
  {k:['camera','stanza','letto','bagno','dormitor','dove si dorme','alloggio','posto letto',
      'struttura','edificio','palazzina','piano','doppia','tripla','singola','arredat'],
   r:'Camere principalmente triple con <strong>bagno privato</strong>, distribuite su 5 piani (3 maschili, 2 femminili). Ogni stanza è arredata con letti, armadi e scrivanie personali.<br><br>🔭 Visita virtualmente: <a href="tour-virtuale.html">Tour Virtuale 360° →</a>'},

  // WIFI E TECNOLOGIA
  {k:['wifi','internet','connession','rete','smartphone','telefon','cellulare','tablet','pc',
      'computer','connettivita','banda larga','navigar','online','streaming'],
   r:'<strong>Wi-Fi</strong> disponibile in tutte le aree comuni e nelle camere. L\'uso dello smartphone è libero nelle ore di tempo libero (17:15–22:30). Durante lo studio e le ore notturne valgono le regole del Regolamento.'},

  // EDUCATORI E STAFF
  {k:['educatori','educator','chi sono','personale','staff','chi segue','adulti','sorveglianza',
      'chi controlla','professori','insegnanti','tutor','responsabile','figura','chi lavora'],
   r:'Il Convitto è presidiato da <strong>educatori di ruolo</strong>, selezionati per concorso pubblico MIUR, presenti in ogni turno <strong>H24</strong> inclusa la notte.<br><br>👥 Conosci il team: <a href="educatori.html">Gli Educatori →</a>'},

  // SICUREZZA E NOTTE
  {k:['sicur','emergenza','notte','sorveglianza notturna','protocollo','pericolo',
      'incendio','pronto soccorso','infermeria','medico','male','malato','malata'],
   r:'Sorveglianza <strong>H24</strong> con educatori presenti in ogni turno, inclusa la notte. In caso di malessere è disponibile un\'infermeria interna. Protocolli di emergenza conformi al <strong>D.Lgs. 81/2008</strong>.<br><br>📞 Emergenze: <a href="contatti.html">Contatti →</a>'},

  // LABORATORIO MUSICALE
  {k:['musica','laborator musicale','chitarra','canto','strument','lab musicale','pianoforte',
      'tastiera','percussioni','coro','gaggiano','barba','dino','laboratorio','band','suonare'],
   r:'Il <strong>Laboratorio Musicale</strong> si tiene ogni giovedì pomeriggio. Fondato da Michele Gaggiano e Dino Barba, è aperto a tutti i convittori — anche senza esperienza musicale pregressa.<br><br>🎵 Scopri di più: <a href="laboratorio-musicale.html">Laboratorio Musicale →</a>'},

  // SPORT E ATTIVITÀ
  {k:['sport','palestra','calcio','basket','ping pong','calciobalilla','attivit','pomeriggio libero',
      'tempo libero','svago','hobby','gioco','uscit','passeggiata','extrascolastic'],
   r:'Nel <strong>tempo libero</strong> (17:15–19:15) si possono praticare sport, frequentare il Lab. Musicale, o uscire autonomamente con apposita autorizzazione.<br><br>📅 Programma: <a href="giornata-tipo.html">Giornata tipo →</a>'},

  // SEMICONVITTO
  {k:['semiconvitto','semi convitto','non alloggi','solo pranzo','giornaliero','parziale',
      'solo i pasti','senza dormire','non dormo','mezza pensione'],
   r:'Il <strong>Semiconvitto</strong> (pranzo + studio guidato + attività pomeridiane, senza pernottamento) è attivo dall\'a.s. 2026/27.<br><br>📋 Info e iscrizioni: <a href="semiconvitto.html">Semiconvitto →</a>'},

  // VISITE E OPEN DAY
  {k:['open day','visit','venire a vedere','prenotar','visita guidata','vedere il convitto',
      'posso venire','tour','sopralluogo','evento','giornata porte aperte','aperto'],
   r:'Puoi prenotare una <strong>visita guidata</strong> o partecipare all\'Open Day dalla pagina orientamento.<br><br>📅 Prenota: <a href="orientamento.html">Orientamento →</a><br>🔭 Oppure esplora virtualmente: <a href="tour-virtuale.html">Tour Virtuale →</a>'},

  // DOVE SI TROVA
  {k:['dove','indirizzo','come arrivare','via','rieti','sede','posizione','mappa','percorso',
      'gps','navigatore','autobus','treno','pullman','distanza','km da'],
   r:'Il Convitto si trova in <strong>Via Salaria s.n.c., 02100 Rieti</strong>, nella sede dell\'IPSSEOA "R. A. Costaggini".<br><br>📍 Mappa e indicazioni: <a href="contatti.html">Contatti →</a>'},

  // CONTATTI
  {k:['telefono','email','contatt','scriver','segreteria','info','informazioni','rispond',
      'numero','chiamare','mandate','mail','pec','indirizzo email'],
   r:'Puoi contattarci tramite:<br>📧 <a href="mailto:convitto@alberghierorieti.it">convitto@alberghierorieti.it</a><br>📋 <a href="contatti.html">Modulo di contatto →</a><br><br>La segreteria risponde solitamente entro 24-48 ore nei giorni scolastici.'},

  // CORREDO
  {k:['corredo','cosa portare','cosa devo portare','lista','valigia','portare','biancheria',
      'lenzuola','asciugamani','abbigliamento','vestiti','scarpe','necessaire','bagagli'],
   r:'La lista completa del corredo obbligatorio è disponibile con possibilità di stampa.<br><br>📋 <a href="ammissione.html#moduli">Lista corredo →</a>'},

  // REGOLAMENTO
  {k:['regolamento','regole','norm','disciplin','vietato','permesso','cosa non si puo',
      'articol','sanzioni','punizioni','provvediment','comportamento','convenzion'],
   r:'Il <strong>Regolamento di Convitto</strong> (35 articoli, aggiornato 30/01/2025) è consultabile in formato interattivo con ricerca per parola chiave.<br><br>📜 <a href="regolamento.html">Leggi il Regolamento →</a>'},

  // QUIZ E ORIENTAMENTO
  {k:['quiz','gioco','talent','fa per me','percorso scolastico','orientamento','indirizzo',
      'enogastronomia','ospitalita','pasticceria','sala','cucina','accoglienza'],
   r:'Prova i <strong>6 quiz interattivi</strong> per scoprire quale percorso fa per te — incluso il quiz "Il Convitto fa per me?"!<br><br>🎮 <a href="scopri-talento.html">Scopri il tuo Talento →</a>'},

  // CERTIFICATI E DOCUMENTI
  {k:['certificat','frequenza','documento','attestato','dichiarazion','iscrizione','modulo',
      'stampare','pdf','scaricare'],
   r:'Puoi richiedere e stampare il <strong>certificato di frequenza</strong> e altri moduli direttamente online.<br><br>📄 <a href="ammissione.html#moduli">Modulistica →</a>'},

  // ALUMNI
  {k:['alumni','ex convittor','ex student','diplomati','ex allievi','sono stato convittore',
      'ho frequentato','anni fa','ricordi','comunità'],
   r:'La community degli <strong>Alumni</strong> cresce ogni anno. Puoi aggiungere la tua scheda e ritrovare i compagni di convitto.<br><br>🌍 <a href="comunita.html">La nostra Comunità →</a><br>✍️ <a href="iscriviti-alumni.html">Unisciti agli Alumni →</a>'},

  // AREA RISERVATA FAMIGLIE
  {k:['area riservata','famiglie','genitore','genitori','accesso famiglie','dashboard',
      'seguire il figlio','mio figlio','come vedo','presenze online','registro famiglie',
      'area genitori','notifiche','aggiornamenti'],
   r:'L\'<strong>Area Riservata Famiglie</strong> permette ai genitori di seguire in tempo reale presenze ai pasti, valutazioni, note degli educatori e comunicazioni formali.<br><br>Per richiedere l\'accesso: <a href="area-riservata.html">Richiedi accesso →</a>'},

  // DSA E BES
  {k:['dsa','bes','disturbo','dislessia','disgrafia','discalculia','deficit attenzione','adhd',
      'bisogni educativi','sostegno','pdp','piano didattico'],
   r:'Il Convitto accoglie studenti con <strong>DSA e BES</strong> con piani personalizzati coordinati con il Consiglio di Classe. Il personale educativo è formato per supportare le specifiche esigenze.<br><br>✉️ Per un colloquio: <a href="contatti.html">Contattaci →</a>'},

  // STRANIERI E LINGUE
  {k:['straniero','straniera','altra nazionalit','non italiano','non parlo italiano',
      'italiano limitato','traduzione','arabo','romeno','inglese','spagnolo','altra lingua'],
   r:'Il sito è disponibile in <strong>5 lingue</strong>: italiano, inglese, spagnolo, arabo, romeno. Usa il selettore in basso a sinistra per cambiare lingua.<br><br>Per assistenza nella tua lingua: <a href="contatti.html">Contattaci →</a>'},

  // PERMESSI DI USCITA
  {k:['uscire','permesso uscita','uscita autonoma','possono uscire','escort','rientrare tardi',
      'tornare','ritiro','chi ritira','delega','delegato','autorizzazion uscita'],
   r:'Le uscite autonome richiedono l\'<strong>autorizzazione firmata dei genitori</strong>. È possibile delegare persone di fiducia per il ritiro. Il modulo si compila online.<br><br>📋 <a href="ammissione.html#moduli">Modulo autorizzazione →</a>'},

  // STUDIO GUIDATO
  {k:['studio guidato','compiti','aiuto studio','ripetizioni','recupero','insufficiente',
      'pomeriggio studio','ore studio','studiare','doposcuola'],
   r:'Dalle <strong>15:30 alle 17:15</strong> gli educatori affiancano i convittori durante lo studio guidato. Per i casi di difficoltà scolastica persistente è possibile attivare supporti aggiuntivi in accordo con la famiglia.<br><br>📚 <a href="giornata-tipo.html">Giornata tipo →</a>'},

  // PTOF E PROGETTO EDUCATIVO
  {k:['ptof','progetto educativo','piano','offerta formativa','filosofia','metodo','valori',
      'mission','obiettivi','cosa insegnate','come educate','stile educativo'],
   r:'Il progetto educativo del Convitto è descritto nel <strong>PTOF</strong> e nelle sezioni dedicate del sito.<br><br>📖 <a href="ptof.html">PTOF →</a> · <a href="progetto-educativo.html">Progetto Educativo →</a>'},

  // COSTO ZERO / GRATUITO
  {k:['gratuito','gratis','senza pagare','agevolazion','esenzione totale','esonero totale',
      'non pago niente','non si paga'],
   r:'L\'esenzione totale dalla retta è possibile in casi di particolare disagio economico documentato con ISEE. Sono inoltre previste borse di studio regionali.<br><br>💶 <a href="ammissione.html#tariffe">Rette e agevolazioni →</a>'},

  // CONVITTO VS COLLEGIO
  {k:['differenza convitto collegio','cos\'è un convitto','cosa è un convitto','convitto o collegio',
      'che differenza','collegio','privatista'],
   r:'Il <strong>Convitto Nazionale</strong> è una struttura pubblica statale (MIUR), non un collegio privato. Le rette sono calibrate sull\'ISEE familiare. Offre lo stesso livello di cura educativa dei collegi privati, ma con una vocazione pubblica e inclusiva.'},

  // TOUR VIRTUALE
  {k:['tour virtuale','360','foto','vedere gli spazi','com\'è','visitare online','stanze video',
      'video convitto','immagini','galleria','foto convitto'],
   r:'Il Convitto è visitabile virtualmente a 360° direttamente dallo smartphone, senza installare nulla.<br><br>🔭 <a href="tour-virtuale.html">Tour Virtuale →</a>'},

  // LABORATORIO MUSICALE — VINILE
  {k:['vinile','disco','solidariet','canzone','brano','registrazione','studio','musica prodotta',
      'album','cd','la solidarieta'],
   r:'Nel 2019 il Laboratorio Musicale ha registrato e prodotto il brano <em>"La Solidarietà"</em> in uno studio professionale, pubblicandolo su vinile. Una produzione interamente autoprodotta dai convittori.<br><br>🎵 <a href="laboratorio-musicale.html">Laboratorio Musicale →</a>'},

  // ASSISTENTE VIRTUALE
  {k:['cosa sai','cosa puoi','come funzioni','sei un robot','sei un ai','intelligenza artificiale',
      'chatbot','bot','automatico','chi sei','come ti chiami'],
   r:'Sono l\'<strong>assistente virtuale</strong> del Convitto "Costaggini". Funziono completamente in locale — nessuna domanda viene trasmessa a server esterni. So rispondere a domande su iscrizioni, orari, rette, servizi, attività e vita convittuale.<br><br>Per domande specifiche o fuori dalla mia base di conoscenza usa il <a href="contatti.html">modulo di contatto →</a>'},

  // SALUTI
  {k:['ciao','salve','buongiorno','buonasera','hey','hola','hello','saluto','aiuto','help'],
   r:'Ciao! 👋 Sono l\'assistente virtuale del Convitto "Costaggini" di Rieti. Posso rispondere a domande su iscrizioni, orari, rette, servizi e vita convittuale. Come posso aiutarti?'},

  // GRAZIE
  {k:['grazie','graziee','thanks','thank you','perfetto','ottimo','benissimo','capito'],
   r:'Prego! 😊 Se hai altre domande sono qui. Puoi anche scrivere direttamente alla segreteria dal <a href="contatti.html">modulo di contatto →</a>'},

  // ETA MINIMA / CLASSI AMMESSE
  {k:['quanti anni','che eta','prima media','seconda media','terza media','prima superiore',
      'seconda superiore','terza superiore','quarta','quinta','classe ammessa','età minima'],
   r:'Al Convitto possono iscriversi studenti dalle <strong>classi prime</strong> dell\'IPSSEOA Costaggini. Non c\'è un\'età minima anagrafica, ma l\'iscrizione è legata all\'iscrizione alla scuola.<br><br>📋 <a href="ammissione.html">Tutti i dettagli →</a>'},

  // AUTORIZZAZIONE FARMACI
  {k:['farmaci','medicine','pillole','terapia','somministrazion farmaci','medicinale',
      'chi somministra','prendere farmaci'],
   r:'La somministrazione di farmaci durante la permanenza al Convitto richiede apposita autorizzazione medica e dei genitori. Contattare la segreteria per il modulo specifico.<br><br>✉️ <a href="contatti.html">Contattaci →</a>'},

];

// ── SUGGERIMENTI CONTESTUALI ──────────────────────────────────────────────
// Cambiano in base all'ultimo argomento discusso
const SUGS_DEFAULT=['Come ci si iscrive?','Quanto costa la retta?','Orari della giornata','C\'è il Wi-Fi?','Posso fare una visita?'];
const SUGS_MAP={
  iscri:  ['Quanto costa la retta?','Cosa devo portare?','Come si fa la domanda?'],
  retta:  ['Ci sono agevolazioni ISEE?','Come ci si iscrive?','Quando si paga?'],
  orario: ['Cosa si fa nel pomeriggio?','C\'è studio guidato?','A che ora si cena?'],
  camera: ['C\'è il Wi-Fi?','Posso vedere le camere?','Come sono i bagni?'],
  musica: ['Chi sono gli educatori?','Cosa si fa nel pomeriggio?','C\'è sport?'],
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
