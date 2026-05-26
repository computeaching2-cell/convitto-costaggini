// ASSISTENTE VIRTUALE CONVITTO COSTAGGINI — FAQ locale, nessuna API
(function(){
'use strict';

const CSS=`
#cc-fab{cursor:pointer;}
#cc-fab:hover{transform:scale(1.08);}
#cc-badge{position:absolute;top:-3px;right:-3px;width:14px;height:14px;border-radius:50%;background:#B8922A;border:2px solid #fff;display:none;}
#cc-badge.show{display:block;}
#cc-panel{position:fixed;bottom:9rem;right:1.25rem;z-index:8999;width:min(370px,calc(100vw - 2rem));height:min(520px,calc(100vh - 7rem));background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,.22);display:flex;flex-direction:column;transform:scale(.92) translateY(12px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .25s;overflow:hidden;}
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
.cc-sugs{padding:.3rem .85rem .4rem;display:flex;flex-wrap:wrap;gap:.25rem;flex-shrink:0;max-height:52px;overflow:hidden;}
.cc-sug{font-family:'Source Sans 3',sans-serif;font-size:.66rem;font-weight:600;padding:.28rem .65rem;border-radius:12px;background:#f3f4f6;color:#374151;border:1px solid #e5e7eb;cursor:pointer;transition:all .15s;white-space:nowrap;}
.cc-sug:hover{background:rgba(44,62,45,.08);border-color:#2C3E2D;color:#2C3E2D;}
.cc-foot{padding:.6rem .85rem;border-top:1px solid #f3f4f6;display:flex;gap:.45rem;align-items:flex-end;flex-shrink:0;}
#cc-inp{flex:1;min-height:34px;max-height:90px;padding:.45rem .75rem;border:1.5px solid #e5e7eb;border-radius:18px;font-family:'Source Sans 3',sans-serif;font-size:.83rem;color:#1a1a1a;outline:none;resize:none;line-height:1.5;overflow-y:auto;transition:border-color .15s;}
#cc-inp:focus{border-color:#2C3E2D;}#cc-inp::placeholder{color:#aaa;}
#cc-go{width:34px;height:34px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:none;cursor:pointer;color:#fff;font-size:.85rem;display:flex;align-items:center;justify-content:center;transition:opacity .2s;}
#cc-go:disabled{opacity:.35;cursor:default;}
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
  // ── ALUMNI ──
  {k:['alumni','ex convittor','ex student','diplomati','community'],
   r:'Community degli <em>Alumni</em>: <a href="comunita.html">La nostra Comunità →</a><br>Se sei ex convittore: <a href="iscriviti-alumni.html">Unisciti →</a>'},
  // ── SALUTO ──
  {k:['ciao','salve','buongiorno','buonasera','hey','help','aiuto','cosa sai','cosa puoi'],
   r:'Ciao! 👋 Sono l\'assistente del Convitto "Costaggini" di Rieti. Posso aiutarti su: iscrizioni, orari, contatti, rette, camere, servizi e vita convittuale. Cosa ti serve?'},
];

const SUGS=['Numero di telefono','Come ci si iscrive?','Orari della giornata','Quanto costa?','Visita guidata'];

function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function match(q){
  const n=norm(q);let best=null,top=0;
  for(const e of KB){let s=0;for(const k of e.k){if(n.includes(norm(k)))s++;}if(s>top){top=s;best=e;}}
  return best&&top>0?best.r:null;
}
function fallback(){return'Non ho trovato una risposta precisa. Puoi scriverci dal <a href="contatti.html">modulo di contatto →</a> e ti risponderemo direttamente.';}

function build(){
  const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
  // #cc-fab è già creato da nav.js — lo usiamo direttamente
  const fab = document.getElementById('cc-fab');
  if (fab) { fab.onclick = ccToggle; }
  const panel=document.createElement('div');
  panel.id='cc-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Assistente virtuale');panel.setAttribute('aria-modal','true');
  panel.innerHTML=`<div class="cc-head"><div class="cc-avatar">🎓</div><div class="cc-info"><div class="cc-name">Assistente del Convitto</div><div class="cc-sub">Sistema automatico locale · nessun dato trasmesso</div></div><button class="cc-x" onclick="document.getElementById('cc-panel').classList.remove('open')" aria-label="Chiudi">✕</button></div><div class="cc-notice" role="note">🤖 <strong>Sistema automatico.</strong> Nessun dato viene trasmesso a servizi esterni. Per assistenza diretta usa il <a href="contatti.html">modulo di contatto</a>.</div><div class="cc-msgs" id="cc-msgs" role="log" aria-live="polite"></div><div class="cc-sugs" id="cc-sugs"></div><div class="cc-foot"><textarea id="cc-inp" placeholder="Scrivi la tua domanda…" rows="1" aria-label="Domanda"></textarea><button id="cc-go" onclick="ccSend()" aria-label="Invia">➤</button></div>`;
  document.body.appendChild(panel);
  const inp=document.getElementById('cc-inp');
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ccSend();}});
  inp.addEventListener('input',()=>{inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,90)+'px';});
  addMsg('bot','Ciao! 👋 Sono l\'assistente del Convitto "Costaggini" di Rieti. Posso rispondere a domande su iscrizioni, orari, contatti, rette e vita convittuale.');
  buildSugs();
  setTimeout(()=>{if(!document.getElementById('cc-panel').classList.contains('open'))document.getElementById('cc-badge').classList.add('show');},4000);
}

function ccToggle(){const p=document.getElementById('cc-panel');p.classList.toggle('open');document.getElementById('cc-badge').classList.remove('show');if(p.classList.contains('open'))setTimeout(()=>document.getElementById('cc-inp').focus(),300);}

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
