// ASSISTENTE VIRTUALE CONVITTO COSTAGGINI — FAQ locale, nessuna API
(function(){
'use strict';

const CSS=`
#cc-fab{cursor:pointer;}
#cc-fab:hover{transform:scale(1.08);}
#cc-badge{position:absolute;top:-3px;right:-3px;width:14px;height:14px;border-radius:50%;background:#B8922A;border:2px solid #fff;display:none;}
#cc-badge.show{display:block;}
#cc-panel{position:fixed;bottom:9rem;right:1.25rem;z-index:8999;width:min(370px,calc(100vw - 2rem));height:min(520px,calc(100vh - 7rem));max-height:calc(100vh - 11rem);background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,.22);display:flex;flex-direction:column;transform:scale(.92) translateY(12px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .25s;overflow:hidden;}
#cc-panel.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
.cc-head{background:linear-gradient(135deg,#2C3E2D,#1a3a1b);padding:.8rem 1rem;display:flex;align-items:center;gap:.6rem;flex-shrink:0;}
.cc-avatar{width:34px;height:34px;border-radius:50%;background:rgba(184,146,42,.2);border:1.5px solid rgba(184,146,42,.4);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;}
.cc-info{flex:1;min-width:0;}
.cc-name{font-family:'Source Sans 3',sans-serif;font-size:.8rem;font-weight:700;color:#fff;}
.cc-sub{font-family:'Source Sans 3',sans-serif;font-size:.64rem;color:rgba(245,240,232,.5);}
.cc-x{background:none;border:none;cursor:pointer;color:rgba(245,240,232,.5);font-size:1rem;padding:0;line-height:1;}
.cc-x:hover{color:#fff;}
.cc-notice{background:#fef9ec;border-bottom:1px solid #fde68a;padding:.4rem .85rem;font-family:'Source Sans 3',sans-serif;font-size:.64rem;color:#78350f;flex-shrink:0;}
.cc-msgs{flex:1;overflow-y:auto;padding:.85rem;display:flex;flex-direction:column;gap:.55rem;-webkit-overflow-scrolling:touch;scroll-behavior:smooth;}
.cc-msgs::-webkit-scrollbar{width:3px;}.cc-msgs::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:2px;}
.cc-msg{max-width:88%;font-family:'Source Sans 3',sans-serif;font-size:.82rem;padding:.55rem .8rem;border-radius:12px;line-height:1.65;word-break:break-word;}
.cc-msg.bot{background:#f3f4f6;color:#1a1a1a;border-radius:4px 12px 12px 12px;align-self:flex-start;}
.cc-msg.user{background:linear-gradient(135deg,#2C3E2D,#1a3a1b);color:#fff;border-radius:12px 4px 12px 12px;align-self:flex-end;}
.cc-msg a{color:#2C3E2D;font-weight:700;text-decoration:underline;}.cc-msg.user a{color:#D4AA4A;}
.cc-typing{align-self:flex-start;background:#f3f4f6;border-radius:4px 12px 12px 12px;padding:.55rem .85rem;}
.cc-dots{display:flex;gap:4px;align-items:center;height:14px;}
.cc-dots span{width:6px;height:6px;border-radius:50%;background:#9ca3af;animation:ccb .9s infinite;}
.cc-dots span:nth-child(2){animation-delay:.15s}.cc-dots span:nth-child(3){animation-delay:.3s}
@keyframes ccb{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
@media(max-width:600px){
  #cc-panel{
    bottom:auto!important;
    top:60px!important;
    left:.75rem!important;
    right:.75rem!important;
    width:auto!important;
    height:calc(100dvh - 75px)!important;
    max-height:calc(100dvh - 75px)!important;
    border-radius:12px!important;
  }
}
.cc-sugs{padding:.3rem .85rem .4rem;display:flex;flex-wrap:wrap;gap:.25rem;flex-shrink:0;max-height:52px;overflow:hidden;}
.cc-sug{font-family:'Source Sans 3',sans-serif;font-size:.66rem;font-weight:600;padding:.28rem .65rem;border-radius:12px;background:#f3f4f6;color:#374151;border:1px solid #e5e7eb;cursor:pointer;transition:all .15s;white-space:nowrap;}
.cc-sug:hover{background:rgba(44,62,45,.08);border-color:#2C3E2D;color:#2C3E2D;}
.cc-foot{padding:.6rem .85rem;border-top:1px solid #f3f4f6;display:flex;gap:.45rem;align-items:flex-end;flex-shrink:0;}
#cc-inp{flex:1;min-height:34px;max-height:90px;padding:.45rem .75rem;border:1.5px solid #e5e7eb;border-radius:18px;font-family:'Source Sans 3',sans-serif;font-size:.83rem;color:#1a1a1a;outline:none;resize:none;line-height:1.5;overflow-y:auto;transition:border-color .15s;}
#cc-inp:focus{border-color:#2C3E2D;}#cc-inp::placeholder{color:#aaa;}
#cc-go{width:34px;height:34px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:none;cursor:pointer;color:#fff;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:opacity .2s;}
#cc-go:disabled{opacity:.35;cursor:default;}
a.cc-sug{text-decoration:none;display:inline-block;color:#374151;}
a.cc-sug:hover{color:#2C3E2D;}
`;

const KB=[
  // ── CONTATTI ──
  {k:['telefono','numero','chiamare','tel ','0746','cell'],
   r:'📞 <strong>Convitto:</strong> <a href="tel:+390746296862">0746 296862</a><br>📞 <strong>Istituto (centralino):</strong> <a href="tel:+390746201113">0746 201113</a>'},
  {k:['email','mail','posta elettronica','indirizzo email','pec'],
   r:'📧 <a href="mailto:convitto@alberghierorieti.it">convitto@alberghierorieti.it</a><br>📧 <a href="mailto:rirh010007@istruzione.it">rirh010007@istruzione.it</a><br>📮 PEC: rirh010007@pec.istruzione.it'},
  {k:['contatt','come vi contatto','parlare con','segreteria','scrivere'],
   r:'Puoi contattarci così:<br>📞 Convitto: <a href="tel:+390746296862">0746 296862</a><br>📧 <a href="mailto:convitto@alberghierorieti.it">convitto@alberghierorieti.it</a><br>📋 <a href="contatti.html">Modulo di contatto →</a>'},
  // ── INDIRIZZO ──
  {k:['dove','indirizzo','via ','come arrivare','sede','posizione','mappa','strada'],
   r:'📍 <strong>Convitto:</strong> Via Salaria s.n.c., 02100 Rieti<br>📍 <strong>Istituto:</strong> Via dei Salici, 62 — Rieti<br><a href="contatti.html">Mappa →</a>'},
  // ── ORARI GIORNATA ──
  {k:['orario','sveglia','luci','pasto','pranzo','cena','colazione','studio','giornata','orari'],
   r:'⏰ <strong>La giornata tipo:</strong><br>🌅 Sveglia 06:30<br>☕ Colazione 07:00–07:30<br>📚 Scuola 08:00–13:30<br>🍽️ Pranzo 13:30–14:30<br>📖 Studio guidato 15:30–17:15<br>🎵 Tempo libero 17:15–19:15<br>🌙 Cena 19:15–20:00<br>💤 Luci spente 22:30<br><a href="giornata-tipo.html">Dettagli →</a>'},
  // ── WEEKEND ──
  {k:['venerd','sabato','domenica','weekend','fine settimana','chiude','chiuso','rientr','tornare a casa'],
   r:'Il Convitto chiude ogni <strong>venerdì alle 13:30</strong>. Sabato e domenica è chiuso. Il rientro è la <strong>domenica alle 20:00</strong>, previa richiesta della famiglia.'},
  // ── ISCRIZIONI ──
  {k:['iscri','ammission','entrar','come si fa','procedura','domanda di ammissione'],
   r:'La procedura:<br>1️⃣ <strong>Nov–Dic:</strong> Open Day<br>2️⃣ <strong>Gen–Feb:</strong> Iscrizione su <a href="https://unica.istruzione.gov.it" target="_blank">unica.istruzione.gov.it</a><br>3️⃣ <strong>Mar–Apr:</strong> Colloquio<br>4️⃣ <strong>Giu–Lug:</strong> Conferma e prima rata<br>5️⃣ <strong>Settembre:</strong> Benvenuto!<br><a href="ammissione.html">Guida completa →</a>'},
  // ── RETTE ──
  {k:['retta','costo','quanto costa','tariffa','prezzo','pagamento','euro','soldi'],
   r:'Le rette sono deliberate annualmente dal Consiglio d\'Istituto. Per i valori aggiornati: <a href="ammissione.html#tariffe">Tariffe e rette →</a>'},
  // ── CAMERE ──
  {k:['camera','stanza','letto','bagno','dormire','piani','singola','doppia','tripla'],
   r:'Camere <strong>triple con bagno privato</strong>, su 5 piani: 3 maschili e 2 femminili. <a href="tour-virtuale.html">Tour Virtuale 360° →</a>'},
  // ── CIBO ──
  {k:['mangi','cucina','menu','menù','cibo','mensa','ristor','vitto','pasti'],
   r:'Tre pasti al giorno con prodotti locali a km zero, concordati con la ASL di Rieti.<br>☕ Colazione 07:00 · 🍽️ Pranzo 13:30 · 🌙 Cena 19:15'},
  // ── ALLERGIE ──
  {k:['allergi','intolleran','celiachia','lattosio','dieta','vegetarian','halal'],
   r:'I menù sono personalizzabili per allergie, intolleranze o esigenze religiose. Modulo allergie su <a href="ammissione.html#moduli">Modulistica →</a>'},
  // ── WI-FI ──
  {k:['wifi','wi-fi','internet','connession','rete'],
   r:'Wi-Fi disponibile in tutte le aree comuni. Uso libero durante le ore di tempo libero.'},
  // ── SMARTPHONE ──
  {k:['smartphone','cellulare','iphone','android','uso telefono','telefono mio'],
   r:'Il cellulare è libero durante il tempo libero (17:15–19:15) e la serata (20:00–22:30). Durante lo studio guidato e la notte è richiesto il rispetto della quiete.'},
  // ── EDUCATORI ──
  {k:['educatori','educator','personale','staff','chi segue','adulti','accompagn'],
   r:'Educatori di ruolo selezionati per concorso pubblico, presenti H24. Non solo sorveglianza: tutoraggio, mediazione, supporto. <a href="educatori.html">Chi sono →</a>'},
  // ── DIRIGENTE ──
  {k:['dirigente','preside','barbonetti','montorselli','coordinatore','direttore'],
   r:'<strong>Dirigente Scolastico:</strong> prof. Giovanni Luca Barbonetti (reggenza)<br><strong>Coordinatore Convitto:</strong> Gianfranco Montorselli<br><strong>Collaboratrice DS:</strong> prof.ssa Annalisa Mazzeo'},
  // ── CODICE MECCANOGRAFICO ──
  {k:['codice','meccanografi','fiscale','rirh','codice scuola','cf scuola'],
   r:'<strong>Cod. meccanografico:</strong> RIRH010007<br><strong>Codice fiscale:</strong> 80008130579'},
  // ── LABORATORIO MUSICALE ──
  {k:['musica','laborator','chitarra','canto','strument','gaggiano','barba'],
   r:'Il <strong>Laboratorio Musicale</strong> è ogni giovedì pomeriggio. Fondato da Michele Gaggiano e Dino Barba, aperto a tutti — anche senza esperienza. <a href="laboratorio-musicale.html">Info →</a>'},
  // ── SPORT ──
  {k:['sport','palestra','calcio','basket','attività fisica','ginnastica'],
   r:'Nel pomeriggio libero (17:15–19:15) si può fare sport o attività fisica. È in costruzione la nuova palestra polifunzionale (fondi PNRR).'},
  // ── USCITE ──
  {k:['uscita','uscire','autonoma','permesso uscita','libera uscita'],
   r:'Le uscite autonome (17:15–19:15) sono consentite con <strong>autorizzazione scritta dei genitori</strong>. Modulo su <a href="ammissione.html#moduli">Modulistica →</a>'},
  // ── SEMICONVITTO ──
  {k:['semiconvitto','semi convitto','non alloggio','solo pranzo','senza dormire','esterno'],
   r:'Il <strong>Semiconvitto</strong> — pranzo + studio + attività, senza pernottamento — è attivo dall\'a.s. 2026/27. Giornata di prova gratuita disponibile. <a href="semiconvitto.html">Info →</a>'},
  // ── OPEN DAY ──
  {k:['open day','visita guidata','venire a vedere','prenotar','vedere dal vivo'],
   r:'Prenota una visita guidata su <a href="orientamento.html">Orientamento →</a> o esplora virtualmente su <a href="tour-virtuale.html">Tour 360° →</a>'},
  // ── SICUREZZA ──
  {k:['sicur','emergenza','sorveglianza','notte','notturna','pericolo'],
   r:'Sorveglianza H24 con educatori su ogni turno inclusa la notte. Protocolli D.Lgs. 81/2008. Collegamento con PS Ospedale de\' Lellis di Rieti.'},
  // ── SALUTE ──
  {k:['medico','infermier','malato','farmaci','ospedale','salute','dottore','asl'],
   r:'Il Convitto coordina con la ASL di Rieti. Farmaci prescritti gestiti dal personale. Emergenze: collegamento con PS Ospedale de\' Lellis.'},
  // ── CORREDO ──
  {k:['corredo','cosa portare','valigia','lenzuola','biancheria','pigiama'],
   r:'Corredo obbligatorio: lenzuola, coperte, asciugamani, pigiama, ciabatte, abbigliamento, materiale scolastico e documenti. Lista completa: <a href="ammissione.html#moduli">Modulistica →</a>'},
  // ── REGOLAMENTO ──
  {k:['regolamento','regole','norm','disciplin','vietato','permesso','articolo'],
   r:'Regolamento di Convitto (35 articoli, agg. 30/01/2025): <a href="regolamento.html">Leggi →</a>'},
  // ── CERTIFICATO ──
  {k:['certificat','frequenza','attestato','dichiarazione'],
   r:'Richiesta certificato di frequenza: compila e stampa su <a href="ammissione.html#moduli">Modulistica →</a>'},
  // ── QUIZ ──
  {k:['quiz','gioco','talent','fa per me','percorso','cucina','pasticceria','accoglienza'],
   r:'6 quiz interattivi per scoprire il tuo percorso: <a href="scopri-talento.html">Scopri il tuo Talento →</a>'},
  // ── STORIA ──
  {k:['storia','quando è nato','fondato','1971','quanti anni'],
   r:'Il Convitto "Costaggini" è attivo dal <strong>1971</strong>. Oltre 50 anni di storia educativa. <a href="il-convitto.html">Scopri la storia →</a>'},
  // ── PROVENIENZA ──
  {k:['da dove vengono','provenienza','regioni','province','quanti studenti','nazional'],
   r:'I convittori vengono da tutta Italia. Vedi la mappa su <a href="provenienza.html">Da dove vengono →</a>'},
  // ── DSA / BES ──
  {k:['dsa','bes','bisogni educativi','disturbi apprendimento','dislessia','discalculia','disgrafia','handicap','inclus','sostegno','difficoltà apprendimento'],
   r:'Il Convitto dispone di educatori con specifiche competenze in <strong>DSA</strong> (Disturbi Specifici dell\'Apprendimento) e <strong>BES</strong> (Bisogni Educativi Speciali). Il personale educativo è formato su metodologie didattiche inclusive, apprendimento cooperativo e strategie compensative. Per informazioni sulle misure di supporto disponibili: <a href="contatti.html">Contattaci →</a>'},
  // ── BULLISMO / CYBERBULLISMO ──
  {k:['bullism','cyberbull','bullo','bulli','prepotenz','vessazion','molest','minacc','vittima','escluso','esclusa','deris','insult','offes','offend','picchia','prevaricazion','preso in giro'],
   r:'Al Convitto la sicurezza di ogni ragazzo è una priorità. Se subisci o assisti a episodi di <strong>bullismo o cyberbullismo</strong>:<br>1️⃣ Parlane subito con un <strong>educatore</strong> (presenti H24)<br>2️⃣ Vengono informati il <strong>Dirigente</strong> e il <strong>Referente Antibullismo</strong><br>3️⃣ Puoi chiedere un colloquio formale con il Referente e la dirigenza<br>📞 Numeri utili: <strong>114</strong> (Emergenza Infanzia) · <strong>19696</strong> (Polizia Postale)<br><a href="bullismo.html">Guida completa: riconoscere e agire →</a>'},
  // ── ALUMNI ──
  {k:['alumni','ex convittor','ex student','diplomati','community'],
   r:'Community degli <em>Alumni</em>: <a href="comunita.html">La nostra Comunità →</a><br>Se sei ex convittore: <a href="iscriviti-alumni.html">Unisciti →</a>'},
  // ── SALUTO ──
  {k:['ciao','salve','buongiorno','buonasera','hey','help','aiuto','grazie','prego','cosa sai','cosa puoi'],
   r:'Ciao! 👋 Sono l\'assistente del Convitto "Costaggini" di Rieti. Posso aiutarti su: iscrizioni, orari, contatti, rette, camere, servizi e vita convittuale. Cosa ti serve?'},
];

const SUGS=['Numero di telefono','Come ci si iscrive?','Orari della giornata','Quanto costa?','Bullismo: cosa fare','Visita guidata'];

/* ── MOTORE DI RICERCA (Strada A) ─────────────────────────────────────────
 * Due livelli:
 *  1) KB curata (sopra) — risposte esatte e autorevoli (contatti, orari,
 *     rette, bullismo…). Vince sempre quando intercetta un intento.
 *  2) INDICE del sito (kb-index.json, generato da build-index.js) — copre
 *     TUTTE le pagine: quando la KB non sa rispondere, indirizza alla pagina
 *     giusta invece di arrendersi.
 * Tutto in locale: l'indice è servito dallo stesso sito, nessun dato esce.
 * ------------------------------------------------------------------------- */

let INDEX=[];      // voci da kb-index.json
let IDF={};        // peso "rarità" di ogni token (token raro = più informativo)

function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}

const STOPQ=new Set('di a da in con su per tra fra il lo la le un uno una del dello della dei degli delle al allo alla come dove quando quanto quale quali questo questa che chi cui non sono vorrei voglio posso cosa piu meno mio mia miei fare avere essere ci si mi ti ho hai abbiamo avete hanno'.split(/\s+/));
function toks(s){let n=norm(s).replace(/wi[\s-]?fi/g,"wifi");const o=[];for(const w of n.split(/[^a-z0-9]+/)){if(w.length>=3&&!STOPQ.has(w))o.push(w);}return o;}

// Sinonimi per TEMA: ogni gruppo collega tra loro i modi diversi di dire la
// stessa cosa, così la domanda dell'utente raggiunge le pagine anche quando
// usano parole diverse (es. "guida rapida" → pagina "In 2 Minuti").
const SYNG=[
  ['costo','costi','prezzo','prezzi','retta','rette','tariffa','tariffe','pagamento','quota','isee','spesa','spese','pagare'],
  ['mensa','cibo','cibi','cucina','mangiare','pasto','pasti','menu','colazione','pranzo','cena','merenda','vitto','ristorazione','alimentazione'],
  ['allergia','allergie','intolleranza','intolleranze','dieta','diete','celiaco','celiachia','vegetariano','vegano'],
  ['dormire','camera','camere','stanza','stanze','alloggio','letto','pernottare','residenziale','convitto'],
  ['telefono','numero','recapito','chiamare','telefonare','email','contattare'],
  ['orario','orari','giornata','sveglia','routine'],
  ['iscrizione','iscrizioni','iscriversi','ammissione','ammissioni','iscritto','graduatoria','registrarsi'],
  ['guida','guide','panoramica','introduzione','sintesi','riepilogo','riassunto','breve','rapido','rapida','veloce','minuti','fretta','faq'],
  ['uscita','uscite','uscire','permesso','permessi','rientro','rientri','weekend','venerdi','delega','delegare','prelevare','ritiro'],
  ['educatore','educatori','personale','staff','sorveglianza','tutor','equipe'],
  ['regolamento','regola','regole','norma','norme','divieto','divieti','disciplina','sanzioni'],
  ['musica','musicale','strumento','strumenti','chitarra','vinile','coro','canto','suonare'],
  ['sport','sportiva','sportive','palestra','calcio','allenamento'],
  ['studio','studiare','compiti','doposcuola','ripetizioni'],
  ['wifi','internet','connessione','smartphone','cellulare','telefonino'],
  ['salute','medico','medica','infermeria','malessere','farmaco','farmaci','sanitaria'],
  ['dsa','bes','sostegno','inclusione','disabilita','disabile'],
  ['bullismo','bullo','bulli','prepotenza','prepotenze','cyberbullismo'],
  ['storia','fondazione','anniversario','origini','tradizione'],
  ['provenienza','regioni','territorio','provincia','province'],
  ['corredo','valigia','biancheria','vestiti','abbigliamento','lenzuola','pigiama'],
  ['solidarieta','volontariato'],
  ['genitore','genitori','famiglia','famiglie'],
  ['openday','visita','visitare'],
  ['calendario','vacanze','festivita','feste','ferie','natale'],
  ['semiconvitto','semiconvittore','diurno'],
  ['talento','talenti','orientamento','attitudine'],
  ['lettera','testimonianza'],
];
const SYNIDX={};
for(const g of SYNG)for(const w of g){if(!SYNIDX[w])SYNIDX[w]=new Set();for(const x of g)if(x!==w)SYNIDX[w].add(x);}
function expand(tk){const out=new Set(tk);for(const t of tk){const g=SYNIDX[t];if(g)for(const x of g)out.add(x);}return [...out];}

// Distanza di Levenshtein "<=1" (tollera un refuso). True se a e b differiscono
// per al più un carattere (sostituzione, inserimento o cancellazione).
function near(a,b){
  if(a===b)return true;
  const la=a.length,lb=b.length;if(Math.abs(la-lb)>1)return false;
  let i=0,j=0,diff=0;
  while(i<la&&j<lb){
    if(a[i]===b[j]){i++;j++;continue;}
    if(++diff>1)return false;
    if(la>lb)i++;else if(lb>la)j++;else{i++;j++;}
  }
  if(i<la||j<lb)diff++;
  return diff<=1;
}

// Quanto un token della domanda (q) "centra" un token bersaglio (t):
// 1 esatto, 0.8 prefisso (uno inizia con l'altro), 0.6 refuso. 0 altrimenti.
// NB: è un match per inizio-parola, quindi "vitto" NON combacia con "convitto"
// (sta in mezzo), mentre lo stem "iscri" combacia con "iscrizione".
function tokHit(q,t){
  if(q===t)return 1;
  if(q.length>=4&&t.length>=4){
    if(q.startsWith(t)||t.startsWith(q))return .8;
    if(near(q,t))return .6;
  }
  return 0;
}

// Punteggio di una voce KB. Keyword di una parola → match per inizio-parola
// sui token della domanda; keyword-frase (con spazio) → sottostringa, e pesa
// di più perché è molto specifica.
function scoreKB(qNorm,qtok,entry){
  let s=0;
  for(const k of entry.k){
    const nk=norm(k).trim();
    if(nk.includes(' ')){if(qNorm.includes(nk))s+=2;continue;}
    let best=0;
    for(const q of qtok){
      if(q===nk){best=1;break;}
      if(nk.length>=4&&q.length>=4&&(q.startsWith(nk)||nk.startsWith(q))){best=Math.max(best,1);}
      else if(nk.length>=4&&q.length>=4&&near(q,nk)){best=Math.max(best,.6);}
    }
    s+=best;
  }
  return s;
}

// Punteggio di una pagina: per ogni token della domanda prendo il miglior
// match nel titolo/intestazioni (peso pieno) o nel corpo (peso ridotto),
// moltiplicato per la rarità (IDF) del token. Titolo/heading contano doppio.
function scorePage(qbase,qsyn,qNorm,p){
  let s=0,tw=0,phr=false;
  for(const ph of p._aphr){if(ph&&qNorm.includes(ph)){phr=true;s+=3.2;break;}}
  for(const q of qbase){
    let ti=0,he=0,bo=0;
    for(const w of p._tital){const h=tokHit(q,w);if(h>ti)ti=h;}
    for(const w of p._head){const h=tokHit(q,w);if(h>he)he=h;}
    for(const w of p.tokens){const h=tokHit(q,w);if(h>bo)bo=h;}
    const idf=IDF[q]||1.2;
    const full=Math.max(ti*1,he*.7,bo*.45)*idf;
    if(full>0)s+=full;
    if(ti>=.8)tw++;            // parola della domanda intercettata dal TITOLO/alias
  }
  for(const q of qsyn){
    let ti=0,he=0,bo=0;
    for(const w of p._tital){const h=tokHit(q,w);if(h>ti)ti=h;}
    for(const w of p._head){const h=tokHit(q,w);if(h>he)he=h;}
    for(const w of p.tokens){const h=tokHit(q,w);if(h>bo)bo=h;}
    const idf=IDF[q]||1.2;
    const full=Math.max(ti*1,he*.7,bo*.45)*idf*.5;
    if(full>0)s+=full;
  }
  return {s,tw,phr};
}

function pageCard(p){
  return '\uD83D\uDCC4 <strong>'+p.title+'</strong><br>'+p.snippet+'<br><a href="'+p.url+'">Apri la pagina \u2192</a>';
}

function match(q){
  const qNorm=norm(q);
  const qbase=toks(q);
  const qsyn=expand(qbase).filter(x=>!qbase.includes(x));

  let kbBest=null,kbTop=0;
  for(const e of KB){const sc=scoreKB(qNorm,qbase,e);if(sc>kbTop){kbTop=sc;kbBest=e;}}

  let ranked=[];
  if(qbase.length&&INDEX.length){
    ranked=INDEX.map(p=>{const r=scorePage(qbase,qsyn,qNorm,p);return{p,s:r.s,tw:r.tw,phr:r.phr};}).filter(x=>x.s>0).sort((a,b)=>b.s-a.s);
  }
  const top=ranked[0];

  // L'utente ha NOMINATO una pagina (frase-alias, o titolo che intercetta >=2
  // parole della domanda): la pagina vince anche sulla KB. Gli intenti "a
  // parola singola" (es. bullismo, contatti) restano invece alla KB curata.
  const named=ranked.filter(x=>(x.phr||x.tw>=2)&&x.s>=1.8).sort((a,b)=>b.s-a.s)[0];
  if(named)return cardWith(named,ranked);

  // KB autorevole se ha intercettato un intento.
  if(kbBest&&kbTop>=1)return kbBest.r;

  // Indice: risposta diretta se robusta, altrimenti chip.
  if(top){
    const strong=top.s>=1.9||(top.s>=1.2&&(!ranked[1]||top.s>=ranked[1].s*1.5));
    if(strong)return cardWith(top,ranked);
    const sug=ranked.slice(0,3);
    return 'Non sono sicuro della risposta esatta. Forse cercavi una di queste pagine?<br><div class="cc-sugs" style="padding:.5rem 0 0">'+
      sug.map(x=>'<a class="cc-sug" href="'+x.p.url+'">'+x.p.title+'</a>').join('')+'</div>';
  }
  return null;
}
function cardWith(top,ranked){
  let html=pageCard(top.p);
  const more=ranked.filter(x=>x!==top&&x.s>=top.s*.5).slice(0,2);
  if(more.length)html+='<br><br>Forse \u00E8 utile anche: '+more.map(x=>'<a href="'+x.p.url+'">'+x.p.title+'</a>').join(' \u00B7 ');
  return html;
}

function fallback(){return'Non ho trovato una risposta precisa. Puoi scriverci dal <a href="contatti.html">modulo di contatto \u2192</a> e ti risponderemo direttamente.';}

// Carica l'indice del sito (stessa origine: resta tutto locale).
function loadIndex(){
  fetch('kb-index.json',{cache:'no-cache'}).then(r=>r.ok?r.json():null).then(j=>{
    if(!j||!j.voci)return;
    INDEX=j.voci;
    for(const p of INDEX){
      const al=p.aliases||[];
      p._tital=[...new Set(toks((p.title||'')+' '+al.join(' ')))];
      p._head=[...new Set(toks((p.headings||[]).join(' ')))];
      p._aphr=al.map(a=>norm(a)).filter(a=>a.includes(' '));
    }
    const df={},N=INDEX.length;
    for(const p of INDEX){for(const t of new Set(p.tokens))df[t]=(df[t]||0)+1;}
    for(const t in df)IDF[t]=Math.log(1+N/df[t]);
  }).catch(()=>{});
}

function build(){
  const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
  loadIndex(); // carica indice del sito (kb-index.json) - tutto in locale
  // #cc-fab è creato da nav.js — aspettiamo che esista
  function agganciafab(tentativi) {
    const fab = document.getElementById('cc-fab');
    if (fab) {
      fab.onclick = ccToggle;
    } else if (tentativi > 0) {
      setTimeout(function(){ agganciafab(tentativi - 1); }, 100);
    }
  }
  agganciafab(20); // riprova fino a 2 secondi
  const panel=document.createElement('div');
  panel.id='cc-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Assistente virtuale');panel.setAttribute('aria-modal','true');
  panel.innerHTML=`<div class="cc-head"><div class="cc-avatar">🎓</div><div class="cc-info"><div class="cc-name">Assistente del Convitto</div><div class="cc-sub">Sistema automatico locale · nessun dato trasmesso</div></div><button class="cc-x" onclick="document.getElementById('cc-panel').classList.remove('open')" aria-label="Chiudi">✕</button></div><div class="cc-notice" role="note">🤖 <strong>Sistema automatico.</strong> Nessun dato viene trasmesso a servizi esterni. Per assistenza diretta usa il <a href="contatti.html">modulo di contatto</a>.</div><div class="cc-msgs" id="cc-msgs" role="log" aria-live="polite"></div><div class="cc-sugs" id="cc-sugs"></div><div class="cc-foot"><textarea id="cc-inp" placeholder="Scrivi la tua domanda…" rows="1" aria-label="Domanda" inputmode="text"></textarea><button id="cc-go" onclick="ccSend()" aria-label="Invia">➤</button></div>`;
  document.body.appendChild(panel);
  const inp=document.getElementById('cc-inp');
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ccSend();}});
  inp.addEventListener('input',()=>{inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,90)+'px';});
  addMsg('bot','Ciao! 👋 Sono l\'assistente del Convitto "Costaggini" di Rieti. Posso rispondere a domande su iscrizioni, orari, contatti, rette e vita convittuale.');
  buildSugs();
  setTimeout(()=>{if(!document.getElementById('cc-panel').classList.contains('open'))document.getElementById('cc-badge').classList.add('show');},4000);
}

function ccToggle(){
  const p=document.getElementById('cc-panel');
  p.classList.toggle('open');
  document.getElementById('cc-badge').classList.remove('show');
  if(p.classList.contains('open')){
    // Desktop: focus automatico sulla textarea
    if(window.innerWidth > 600) setTimeout(()=>document.getElementById('cc-inp').focus(),300);
    // Mobile: aggiusta posizione panel per evitare che la tastiera lo copra
    if(window.innerWidth <= 600){
      setTimeout(function(){
        const panel = document.getElementById('cc-panel');
        if(panel){
          // Posiziona il panel in alto quando aperto su mobile
          panel.style.bottom = 'auto';
          panel.style.top = '60px';
          panel.style.right = '.75rem';
          panel.style.left = '.75rem';
          panel.style.width = 'auto';
          panel.style.height = 'calc(100vh - 75px)';
          panel.style.maxHeight = 'calc(100vh - 75px)';
        }
      }, 50);
    }
  } else {
    // Reset stile mobile alla chiusura
    if(window.innerWidth <= 600){
      const panel = document.getElementById('cc-panel');
      if(panel){
        panel.style.bottom = '';
        panel.style.top = '';
        panel.style.right = '';
        panel.style.left = '';
        panel.style.width = '';
        panel.style.height = '';
        panel.style.maxHeight = '';
      }
    }
  }
}

function addMsg(role,html){const m=document.getElementById('cc-msgs');const d=document.createElement('div');d.className='cc-msg '+role;d.innerHTML=html;m.appendChild(d);setTimeout(()=>{m.scrollTop=m.scrollHeight;},50);}

function buildSugs(){const c=document.getElementById('cc-sugs');c.innerHTML=SUGS.map(s=>`<button class="cc-sug" onclick="ccQuick(this)">${s}</button>`).join('');}

window.ccQuick=function(btn){document.getElementById('cc-inp').value=btn.textContent;ccSend();};

window.ccSend=function(){
  const inp=document.getElementById('cc-inp');const q=inp.value.trim();if(!q)return;
  inp.value='';inp.style.height='auto';document.getElementById('cc-go').disabled=true;document.getElementById('cc-sugs').innerHTML='';
  addMsg('user',q);
  const m=document.getElementById('cc-msgs');const t=document.createElement('div');t.className='cc-typing';t.id='cc-t';t.innerHTML='<div class="cc-dots"><span></span><span></span><span></span></div>';m.appendChild(t);m.scrollTop=m.scrollHeight;
  setTimeout(()=>{t.remove();addMsg('bot',match(q)||fallback());document.getElementById('cc-go').disabled=false;buildSugs();},500+Math.random()*350);
};

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();
