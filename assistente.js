// ══════════════════════════════════════════════════════════════
// ASSISTENTE VIRTUALE CONVITTO COSTAGGINI
// FAQ intelligente locale — nessuna API esterna, GDPR compliant
// ══════════════════════════════════════════════════════════════
(function(){
'use strict';

const CSS=`
#cc-fab{position:fixed;bottom:1.5rem;right:1.5rem;z-index:9000;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:2px solid rgba(184,146,42,.45);box-shadow:0 4px 20px rgba(0,0,0,.35);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;font-size:1.35rem;color:#fff;}
#cc-fab:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(0,0,0,.45);}
#cc-badge{position:absolute;top:-3px;right:-3px;width:14px;height:14px;border-radius:50%;background:#B8922A;border:2px solid #fff;display:none;}
#cc-badge.show{display:block;}
#cc-panel{position:fixed;bottom:5rem;right:1.5rem;z-index:8999;width:min(370px,calc(100vw - 2rem));height:min(500px,calc(100vh - 7rem));background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,.22);display:flex;flex-direction:column;transform:scale(.92) translateY(12px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .25s;overflow:hidden;}
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
.cc-msg{max-width:86%;font-family:'Source Sans 3',sans-serif;font-size:.82rem;padding:.55rem .8rem;border-radius:12px;line-height:1.6;word-break:break-word;}
.cc-msg.bot{background:#f3f4f6;color:#1a1a1a;border-radius:4px 12px 12px 12px;align-self:flex-start;}
.cc-msg.user{background:linear-gradient(135deg,#2C3E2D,#1a3a1b);color:#fff;border-radius:12px 4px 12px 12px;align-self:flex-end;}
.cc-msg a{color:#2C3E2D;font-weight:700;}.cc-msg.user a{color:#D4AA4A;}
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
  {k:['iscri','ammission','entrar','venire','come si fa','procedura','domanda'],r:'Per iscriversi al Convitto occorre prima iscriversi alla scuola tramite il portale MIM (<a href="https://unica.istruzione.gov.it" target="_blank">unica.istruzione.gov.it</a>) a gennaio-febbraio. Poi a giugno arriva l\'avviso di conferma iscrizione al Convitto. Tutti i dettagli su <a href="ammissione.html">Come iscriversi →</a>'},
  {k:['retta','costo','quanto costa','tariffa','prezzo','pagamento','euro'],r:'Le rette sono deliberate ogni anno dal Consiglio d\'Istituto. Per le tariffe aggiornate consulta <a href="ammissione.html#tariffe">Tariffe e rette →</a> oppure scrivici dal <a href="contatti.html">modulo contatti →</a>'},
  {k:['orario','sveglia','luce','pasto','pranzo','cena','colazione','studio','quando','orari'],r:'La giornata: sveglia 06:30 · colazione 07:00-07:30 · scuola 08:00-13:30 · pranzo 13:30-14:30 · studio guidato 15:30-17:15 · tempo libero 17:15-19:15 · cena 19:15-20:00 · luci spente 22:30. Dettagli su <a href="giornata-tipo.html">Giornata tipo →</a>'},
  {k:['camera','stanza','letto','bagno','dormit','dove si dorme','stanze'],r:'Camere triple con bagno privato, su 5 piani (3 maschili, 2 femminili). Visita virtualmente su <a href="tour-virtuale.html">Tour Virtuale 360° →</a>'},
  {k:['wifi','internet','connession','rete','smartphone','telefon'],r:'Wi-Fi disponibile in tutte le aree comuni. L\'uso dello smartphone è libero nelle ore di tempo libero.'},
  {k:['mangi','cucina','menu','menù','allergi','intolleran','cibo','vitto','ristoraz','pasti'],r:'La cucina prepara colazione, pranzo e cena ogni giorno con prodotti locali a km zero. I menù sono concordati con la ASL di Rieti e personalizzabili per allergie o intolleranze. Modulo allergie su <a href="ammissione.html#moduli">Modulistica →</a>'},
  {k:['educatori','educator','chi sono','personale','staff','chi segue','adulti'],r:'Educatori di ruolo selezionati per concorso pubblico, presenti in ogni turno H24. Scopri chi sono su <a href="educatori.html">Gli Educatori →</a>'},
  {k:['musica','laborator','chitarra','canto','strument','lab musicale'],r:'Il Laboratorio Musicale è ogni giovedì pomeriggio, fondato da Michele Gaggiano e Dino Barba. Aperto a tutti, anche senza esperienza. Info su <a href="laboratorio-musicale.html">Laboratorio Musicale →</a>'},
  {k:['sport','palestra','attività','pomeriggio','tempo libero','uscit','svago'],r:'Nel pomeriggio libero (17:15-19:15) si può fare sport, partecipare al Lab. Musicale o uscire autonomamente (con autorizzazione). Vedi <a href="giornata-tipo.html">Giornata tipo →</a>'},
  {k:['semiconvitto','semi convitto','non alloggi','solo pranzo','giornaliero'],r:'Il Semiconvitto (pranzo + studio + attività pomeridiane) è attivo dall\'a.s. 2026/27. Info e iscrizioni su <a href="semiconvitto.html">Semiconvitto →</a>'},
  {k:['open day','visit','venire a vedere','prenotar','visita guidata','vedere'],r:'Prenota una visita guidata o partecipa all\'Open Day da <a href="orientamento.html">Orientamento →</a>. Oppure esplora virtualmente su <a href="tour-virtuale.html">Tour Virtuale →</a>'},
  {k:['dove','indirizzo','come arrivare','via','rieti','sede','posizione','mappa'],r:'Il Convitto è in Via Salaria s.n.c., 02100 Rieti. Mappa e contatti su <a href="contatti.html">Contatti →</a>'},
  {k:['telefono','email','contatt','scriver','segreteria','info','informazioni','rispond'],r:'Scrivici dal <a href="contatti.html">modulo di contatto →</a> oppure direttamente a <a href="mailto:convitto@alberghierorieti.it">convitto@alberghierorieti.it</a>'},
  {k:['corredo','cosa portare','list','valigia','portare'],r:'La lista corredo obbligatorio è su <a href="ammissione.html#moduli">Modulistica →</a> con possibilità di stampa.'},
  {k:['regolamento','regole','norm','disciplin','vietato','permesso'],r:'Il Regolamento di Convitto (35 articoli, aggiornato 30/01/2025) è su <a href="regolamento.html">Regolamento →</a>'},
  {k:['sicur','emergenza','notte','sorveglianza','notturna'],r:'Sorveglianza H24 con educatori presenti su ogni turno inclusa la notte. Protocolli di emergenza conformi al D.Lgs. 81/2008.'},
  {k:['quiz','gioco','talent','fa per me','percorso','orientamento','indirizzo'],r:'Prova i 6 quiz interattivi su <a href="scopri-talento.html">Scopri il tuo Talento →</a> per capire quale percorso fa per te.'},
  {k:['certificat','frequenza','documento','attestato'],r:'Compila e stampa la richiesta di certificato di frequenza su <a href="ammissione.html#moduli">Modulistica →</a>'},
  {k:['alumni','ex convittor','ex student','diplomati'],r:'La community degli <em>Alumni</em> è su <a href="comunita.html">La nostra Comunità →</a>. Aggiungi la tua scheda su <a href="iscriviti-alumni.html">Unisciti agli Alumni →</a>'},
  {k:['venerdì','sabato','domenica','weekend','chiude','chiuso','rientra','rientro','fine settimana','uscita','casa'],r:'Il Convitto chiude ogni venerdì alle 13:30. I convittori rientrano a casa per il fine settimana. Il sabato e la domenica il Convitto è chiuso. Il rientro è fissato alla domenica alle 20:00, previa specifica richiesta della famiglia.'},
];

const SUGS=['Come ci si iscrive?','Quanto costa la retta?','Orari della giornata','C\'è il Wi-Fi?','Visita guidata'];

function match(q){
  const low=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  let best=null,top=0;
  for(const e of KB){let s=0;for(const k of e.k){if(low.includes(k.normalize('NFD').replace(/[\u0300-\u036f]/g,'')))s++;}if(s>top){top=s;best=e;}}
  return best&&top>0?best.r:null;
}

function fallback(){return'Non ho trovato una risposta precisa. Puoi scriverci direttamente dal <a href="contatti.html">modulo di contatto →</a> e ti risponderemo al più presto.';}

function build(){
  const s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s);
  const fab=document.createElement('button');
  fab.id='cc-fab';fab.setAttribute('aria-label','Apri assistente virtuale');fab.setAttribute('aria-haspopup','dialog');
  fab.innerHTML='🎓<span id="cc-badge" class="cc-badge" aria-hidden="true"></span>';
  fab.onclick=toggle;document.body.appendChild(fab);
  const panel=document.createElement('div');
  panel.id='cc-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Assistente virtuale');panel.setAttribute('aria-modal','true');
  panel.innerHTML=`<div class="cc-head"><div class="cc-avatar">🎓</div><div class="cc-info"><div class="cc-name">Assistente del Convitto</div><div class="cc-sub">Sistema automatico locale · nessun dato trasmesso</div></div><button class="cc-x" onclick="document.getElementById('cc-panel').classList.remove('open')" aria-label="Chiudi">✕</button></div><div class="cc-notice" role="note">🤖 <strong>Questo è un sistema automatico.</strong> Le risposte provengono da una base di conoscenza locale. Nessun dato viene trasmesso a servizi esterni. Per assistenza diretta usa il <a href="contatti.html">modulo di contatto</a>.</div><div class="cc-msgs" id="cc-msgs" role="log" aria-live="polite"></div><div class="cc-sugs" id="cc-sugs"></div><div class="cc-foot"><textarea id="cc-inp" placeholder="Scrivi la tua domanda…" rows="1" aria-label="Domanda"></textarea><button id="cc-go" onclick="ccSend()" aria-label="Invia">➤</button></div>`;
  document.body.appendChild(panel);
  const inp=document.getElementById('cc-inp');
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ccSend();}});
  inp.addEventListener('input',()=>{inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,90)+'px';});
  addMsg('bot','Ciao! 👋 Sono l\'assistente virtuale del Convitto "Costaggini" di Rieti. Posso aiutarti con domande su iscrizioni, orari, servizi e vita convittuale.');
  buildSugs();
  setTimeout(()=>{if(!document.getElementById('cc-panel').classList.contains('open'))document.getElementById('cc-badge').classList.add('show');},4000);
}

function toggle(){const p=document.getElementById('cc-panel');p.classList.toggle('open');document.getElementById('cc-badge').classList.remove('show');if(p.classList.contains('open'))setTimeout(()=>document.getElementById('cc-inp').focus(),300);}

function addMsg(role,html){const m=document.getElementById('cc-msgs');const d=document.createElement('div');d.className='cc-msg '+role;d.innerHTML=html;m.appendChild(d);m.scrollTop=m.scrollHeight;}

function buildSugs(){const c=document.getElementById('cc-sugs');c.innerHTML=SUGS.map(s=>`<button class="cc-sug" onclick="ccQuick(this)">${s}</button>`).join('');}

window.ccQuick=function(btn){document.getElementById('cc-inp').value=btn.textContent;ccSend();};

window.ccSend=function(){
  const inp=document.getElementById('cc-inp');const q=inp.value.trim();if(!q)return;
  inp.value='';inp.style.height='auto';document.getElementById('cc-go').disabled=true;document.getElementById('cc-sugs').innerHTML='';
  addMsg('user',q);
  const m=document.getElementById('cc-msgs');const t=document.createElement('div');t.className='cc-typing';t.id='cc-t';t.innerHTML='<div class="cc-dots"><span></span><span></span><span></span></div>';m.appendChild(t);m.scrollTop=m.scrollHeight;
  setTimeout(()=>{t.remove();addMsg('bot',match(q)||fallback());document.getElementById('cc-go').disabled=false;buildSugs();const m=document.getElementById('cc-msgs');setTimeout(()=>{m.scrollTop=m.scrollHeight;},50);},500+Math.random()*400);
};

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();
