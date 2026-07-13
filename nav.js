/* ═══════════════════════════════════════════════════
   CONVITTO "COSTAGGINI" — RIETI
   shared.js — header, footer, drawer, reveal
═══════════════════════════════════════════════════ */

(function () {
  /* ── PA banner + Header + skip-link + drawer: ora iniettati da nav-header.js,
     caricato PRIMA di questo script per evitare il Cumulative Layout Shift ── */

  /* ── Inietta Footer ── */
  const footerHTML = `
<footer>
  <div class="fw">
    <div class="ftop">

      <div class="fbrand">
        <p class="fn">Convitto "Costaggini"<br><span style="font-size:.72rem;font-weight:400;opacity:.7">IPSSEOA "R. A. Costaggini" · Rieti</span></p>
        <p>Residenza educativa di eccellenza per la formazione professionale nell'ospitalità e nelle arti culinarie. Ente pubblico — vigilanza MIM.</p>
        <div style="margin-top:1rem;display:flex;flex-direction:column;gap:.3rem">
          <p style="font-family:var(--fu);font-size:.62rem;color:rgba(245,240,232,.50);line-height:1.7">
            <strong style="color:rgba(245,240,232,.6)">C.F.</strong> 80008130579 &nbsp;·&nbsp;
            <strong style="color:rgba(245,240,232,.6)">Cod. mecc.</strong> RIRH010007<br>
            <strong style="color:rgba(245,240,232,.6)">PEC</strong> <a href="mailto:rirh010007@pec.istruzione.it" style="color:var(--oro2)">rirh010007@pec.istruzione.it</a><br>
            <strong style="color:rgba(245,240,232,.6)">Email</strong> <a href="mailto:rirh010007@istruzione.it" style="color:var(--oro2)">rirh010007@istruzione.it</a><br>
            <strong style="color:rgba(245,240,232,.6)">Convitto</strong> <a href="mailto:convitto@alberghierorieti.it" style="color:var(--oro2)">convitto@alberghierorieti.it</a>
          </p>
        </div>
      </div>

      <div class="fcols">

        <div class="fc"><h4>Il Convitto</h4><ul>
          <li><a href="il-convitto.html">Chi siamo</a></li>
          <li><a href="educatori.html">Gli Educatori</a></li>
          <li><a href="giornata-tipo.html">Giornata tipo</a></li>
          <li><a href="servizi.html">Servizi</a></li>
          <li><a href="tour-virtuale.html">🏛️ Tour Virtuale</a></li>
          <li><a href="semiconvitto.html">🌅 Semiconvitto</a></li>
          <li><a href="alumni.html"><em>Alumni</em></a></li>
          <li><a href="ricordi.html">🕯️ Muro dei Ricordi</a></li>
        </ul></div>

        <div class="fc"><h4>Servizi &amp; Ammissione</h4><ul>
          <li><a href="openday.html">🗓 Open Day</a></li>
          <li><a href="ammissione.html">Come iscriversi</a></li>
          <li><a href="domanda-ammissione.html">📋 Domanda online</a></li>
          <li><a href="ammissione.html#tariffe">Tariffe e rette</a></li>
          <li><a href="scopri-talento.html">✨ Scopri il tuo Talento</a></li>
          <li><a href="come-arrivare.html">🚌 Come arrivare</a></li>
        <li><a href="contatti.html">Contattaci</a></li>
        <li><a href="contatti.html?oggetto=segnalazione-tecnica">🛠️ Segnala un problema</a></li>
        </ul></div>

        <div class="fc"><h4>Contatti Uffici</h4><ul>
          <li style="font-size:.7rem;color:rgba(245,240,232,.5);line-height:1.6">
            <strong style="color:rgba(245,240,232,.7);display:block">Centralino</strong>
            <a href="tel:+390746201113" style="color:var(--oro2)">0746 201113</a>
          </li>
          <li style="font-size:.7rem;color:rgba(245,240,232,.5);line-height:1.6;margin-top:.4rem">
            <strong style="color:rgba(245,240,232,.7);display:block">Convitto</strong>
            <a href="tel:+390746296862" style="color:var(--oro2)">0746 296862</a>
          </li>
          <li style="font-size:.7rem;color:rgba(245,240,232,.5);line-height:1.6;margin-top:.4rem">
            <strong style="color:rgba(245,240,232,.7);display:block">Segreteria Didattica</strong>
            Lun–Ven 8:00–13:30<br>solo su appuntamento
          </li>
          <li style="font-size:.7rem;color:rgba(245,240,232,.5);line-height:1.6;margin-top:.4rem">
            <strong style="color:rgba(245,240,232,.7);display:block">Sede centrale</strong>
            Via dei Salici, 62 — Rieti
          </li>
        </ul></div>

        <div class="fc"><h4>Amministrazione</h4><ul>
          <li><a href="trasparenza.html">Amm. Trasparente</a></li>
          <li><a href="organizzazione.html">Organizzazione</a></li>
          <li><a href="ptof-guida.html">PTOF</a></li>
          <li><a href="regolamento.html">Regolamento</a></li>
          <li><a href="privacy.html">Privacy &amp; GDPR</a></li>
          <li><a href="cookie-policy.html">Cookie Policy</a></li>
          <li><a href="trasparenza.html#accessibilita">Accessibilità</a></li>
          <li><a href="mappa-sito.html">🗺️ Mappa del Sito</a></li>
        </ul></div>

      </div>
    </div>
    <div class="fbot">
      <p>© 2025 Convitto Annesso — IPSSEOA "R. A. Costaggini" — Via Salaria s.n.c. — 02100 Rieti (RI) — C.F. 80008130579 — Cod. mecc. RIRH010007</p>
     <p><a href="trasparenza.html#accessibilita">Dichiarazione di Accessibilità</a> · <a href="privacy.html">Privacy</a> · <a href="cookie-policy.html">Cookie Policy</a> · <a href="trasparenza.html">Amm. Trasparente</a> · <a href="mappa-sito.html">Mappa del Sito</a></p>
      <p style="font-size:.68rem;color:rgba(245,240,232,.50);margin-top:.35rem;font-style:italic">⏳ Sito in fase di staging — in attesa di attivazione del dominio istituzionale convitto.alberghierorieti.edu.it a seguito delle procedure amministrative di competenza. I contenuti sono autentici e prodotti dall'IPSSEOA "Costaggini" di Rieti.</p>
    </div>
  </div>
</footer>`;

  /* ── Inserimento nel DOM ── */
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Caricamento chatbot (differito) ──
     Il bottone #cc-fab è già visibile (creato più sotto), ma il file
     chatbot.js (36 KB) non viene più scaricato subito su ogni pagina:
     parte solo al primo click sul bottone, oppure dopo 4s di inattività
     come rete di sicurezza — così non pesa sulla finestra critica di
     caricamento per chi non usa mai l'assistente. */
  let chatbotLoaded = false;
  function loadChatbot(reopenOnLoad) {
    if (chatbotLoaded) return;
    chatbotLoaded = true;
    const cbScript = document.createElement('script');
    cbScript.src = 'chatbot.js';
    if (reopenOnLoad) {
      cbScript.onload = function () {
        const fab = document.getElementById('cc-fab');
        if (fab) fab.click();
      };
    }
    document.body.appendChild(cbScript);
  }
  function armChatbotFab() {
    const fab = document.getElementById('cc-fab');
    if (fab) fab.addEventListener('click', function () { loadChatbot(true); }, { once: true });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', armChatbotFab);
  } else {
    armChatbotFab();
  }
  setTimeout(function () { loadChatbot(false); }, 4000);

  /* Inietta modale PEC */
  const pecModal = document.createElement('div');
  pecModal.id = 'pec-modal';
  pecModal.setAttribute('role','dialog');
  pecModal.setAttribute('aria-modal','true');
  pecModal.setAttribute('aria-label','Indirizzo PEC');
  pecModal.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;align-items:flex-start;justify-content:flex-end;padding:68px 1rem 0;pointer-events:none';
  pecModal.innerHTML = `
    <div style="pointer-events:auto;background:#1a2e1b;border:1px solid rgba(184,146,42,.35);border-radius:10px;padding:1.25rem 1.5rem;min-width:280px;box-shadow:0 12px 36px rgba(0,0,0,.45);animation:pecIn .2s ease both">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem">
        <span style="font-family:var(--fu);font-size:.58rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--oro2)">📧 Indirizzo PEC</span>
        <button onclick="document.getElementById('pec-modal').style.display='none'" style="background:none;border:none;color:rgba(245,240,232,.55);cursor:pointer;font-size:1rem;line-height:1">✕</button>
      </div>
      <p style="font-family:var(--fu);font-size:.92rem;font-weight:600;color:#fff;margin-bottom:.35rem">rirh010007@pec.istruzione.it</p>
      <p style="font-family:var(--fu);font-size:.65rem;color:rgba(245,240,232,.55);line-height:1.5">Posta Elettronica Certificata<br>IPSSEOA "R. A. Costaggini" — Rieti</p>
      <a href="mailto:rirh010007@pec.istruzione.it" style="display:inline-block;margin-top:.85rem;font-family:var(--fu);font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--oro2);text-decoration:none;border-bottom:1px solid rgba(184,146,42,.3);padding-bottom:1px">Copia indirizzo →</a>
    </div>
  `;
  document.body.appendChild(pecModal);
  // Chiudi cliccando fuori
  pecModal.addEventListener('click', e => { if(e.target===pecModal) pecModal.style.display='none'; });
  // CSS animazione
  const pecStyle = document.createElement('style');
  pecStyle.textContent = '@keyframes pecIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(pecStyle);

  /* Admin: accessibile solo dal menu navigazione */

  /* ── Evidenzia voce di menu attiva ── */
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('[data-page="' + page + '"]').forEach(el => {
      el.classList.add('active');
      el.setAttribute('aria-current', 'page');
    });
  }

  /* ── Drawer ── */
  const brg = document.getElementById('brg');
  const drw = document.getElementById('drw');
  function openD() { if(!drw||!brg) return; drw.classList.add('on'); brg.setAttribute('aria-expanded','true'); brg.setAttribute('aria-label','Chiudi menu'); document.body.style.overflow='hidden'; }
  function closeD() { if(!drw||!brg) return; drw.classList.remove('on'); brg.setAttribute('aria-expanded','false'); brg.setAttribute('aria-label','Apri menu'); document.body.style.overflow=''; }
  if (brg && drw) {
    brg.addEventListener('click', () => drw.classList.contains('on') ? closeD() : openD());
    drw.querySelectorAll('a').forEach(a => a.addEventListener('click', closeD));
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeD(); });

  /* ── FAB — 3 cerchi fissi, sempre visibili ── */
  (function(){
    const isHome = !document.body.dataset.page || document.body.dataset.page === 'home';

    const CSS = `
      .dd-menu{max-height:calc(100vh - 80px) !important;overflow-y:auto !important;}.dd-menu::-webkit-scrollbar{width:3px}.dd-menu::-webkit-scrollbar-thumb{background:rgba(184,146,42,.3);border-radius:2px}#fab-wrap{position:fixed;bottom:1.5rem;right:1.25rem;z-index:8900;display:flex;flex-direction:column;align-items:center;gap:.45rem;}
      .fab-c{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:1.5px solid rgba(184,146,42,.35);box-shadow:0 3px 12px rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;cursor:pointer;text-decoration:none;color:#fff;font-size:1rem;position:relative;transition:transform .18s,box-shadow .18s;-webkit-tap-highlight-color:transparent;flex-shrink:0;}
      .fab-c:hover{transform:scale(1.12);box-shadow:0 5px 18px rgba(0,0,0,.38),0 0 0 2px rgba(184,146,42,.45);}
      .fab-c svg{width:17px;height:17px;fill:#D4AA4A;flex-shrink:0;}
      .fab-c[data-tip]:hover::after{content:attr(data-tip);position:absolute;right:46px;top:50%;transform:translateY(-50%);background:rgba(12,20,13,.9);color:#D4AA4A;font-family:'Source Sans 3',sans-serif;font-size:.58rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.25rem .55rem;border-radius:4px;white-space:nowrap;border:1px solid rgba(184,146,42,.2);pointer-events:none;}
      #fab-top{opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;transform:translateY(4px);}
      #fab-top.vis{opacity:1;pointer-events:auto;transform:translateY(0);}
      @media(max-width:700px){.fab-c[data-tip]:hover::after{display:none;}}
    `;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    const wrap = document.createElement('div'); wrap.id = 'fab-wrap'; document.body.appendChild(wrap);

    // 1. Torna su — appare solo dopo scroll
    const fTop = document.createElement('button');
    fTop.id = 'fab-top'; fTop.className = 'fab-c';
    fTop.setAttribute('aria-label','Torna in cima'); fTop.setAttribute('data-tip','Torna su');
    fTop.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    fTop.onclick = () => window.scrollTo({top:0,behavior:'smooth'});
    wrap.appendChild(fTop);
    window.addEventListener('scroll', () => fTop.classList.toggle('vis', window.scrollY > 300), {passive:true});

    // 2. Home — solo su pagine interne
    if (!isHome) {
      const fHome = document.createElement('a');
      fHome.id = 'fab-home'; fHome.className = 'fab-c';
      fHome.href = 'index.html';
      fHome.setAttribute('aria-label','Torna alla Home'); fHome.setAttribute('data-tip','Home');
      fHome.innerHTML = '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
      wrap.appendChild(fHome);
    }

    // 3. Chatbot — creato qui, usato da chatbot.js
    const fChat = document.createElement('button');
    fChat.id = 'cc-fab'; fChat.className = 'fab-c';
    fChat.setAttribute('aria-label','Apri assistente virtuale'); fChat.setAttribute('data-tip','Assistente');
    fChat.innerHTML = '🎓<span id="cc-badge" style="position:absolute;top:-2px;right:-2px;width:11px;height:11px;border-radius:50%;background:#B8922A;border:2px solid #fff;display:none" aria-hidden="true"></span>';
    wrap.appendChild(fChat);
  })();

  try {
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
  } catch (err) {
    // Fallback: se IntersectionObserver non è disponibile o fallisce,
    // mostra comunque i contenuti invece di lasciarli invisibili per sempre.
    console.error('Reveal observer non disponibile, mostro i contenuti direttamente:', err);
    document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
  }



  /* ── Progress bar di lettura ── */
  (function(){
    const bar = document.createElement('div');
    bar.id = 'read-progress';
    bar.style.cssText =
      'position:fixed;top:0;left:0;z-index:9999;height:2px;width:0%;' +
      'background:linear-gradient(90deg,var(--oro2,#B8922A),var(--oro3,#D4AA4A));' +
      'transition:width .1s linear;pointer-events:none;';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;
      bar.style.width = pct + '%';
    }, {passive:true});
  })();


  /* ── Accordion drawer mobile ── */
  document.querySelectorAll('.drw-acc').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // chiudi tutti
      document.querySelectorAll('.drw-acc').forEach(b => {
        b.setAttribute('aria-expanded','false');
        b.nextElementSibling && b.nextElementSibling.classList.remove('open');
      });
      // apri questo se era chiuso
      if (!isOpen) {
        btn.setAttribute('aria-expanded','true');
        btn.nextElementSibling && btn.nextElementSibling.classList.add('open');
      }
    });
  });

  /* ── Dropdown desktop: chiudi cliccando fuori ── */
  document.addEventListener('click', e => {
    if (!e.target.closest('.dd-wrap')) {
      document.querySelectorAll('.dd-btn').forEach(b => b.setAttribute('aria-expanded','false'));
    }
  });


  /* ── Fix colore testo "Contattaci" al click — il CSS :active viene ignorato da alcuni browser ── */
  (function(){
    function fixNC() {
      document.querySelectorAll('#dnav a.nc, #dnav .nc').forEach(el => {
        el.addEventListener('mousedown', () => {
          el.style.color = '#ffffff';
          el.style.setProperty('color','#ffffff','important');
        });
        el.addEventListener('mouseup',   () => { el.style.color = ''; });
        el.addEventListener('mouseleave',() => { el.style.color = ''; });
        // Touch
        el.addEventListener('touchstart',() => {
          el.style.color = '#ffffff';
          el.style.setProperty('color','#ffffff','important');
        }, {passive:true});
        el.addEventListener('touchend',  () => {
          setTimeout(() => { el.style.color = ''; }, 300);
        });
      });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixNC);
    } else {
      fixNC();
    }
  })();

  /* ── Frecce sezione-per-sezione ── */
  (function(){
    // Attende che il DOM sia pronto
    function initSectionNav() {
      const sections = Array.from(document.querySelectorAll('main > section, main > div.page-hero, main > div[style]'))
        .filter(el => {
          // Esclude elementi troppo piccoli o non visibili
          return el.offsetHeight > 80;
        });

      if (sections.length < 2) return;

      // CSS freccia
      const style = document.createElement('style');
      style.textContent = `
        .sec-nav-arrow {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(184,146,42,.15);
          border: 1.5px solid rgba(184,146,42,.35);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background .2s, border-color .2s, transform .2s;
          animation: secBounce 2s ease-in-out infinite;
          backdrop-filter: blur(4px);
        }
        .sec-nav-arrow:hover {
          background: rgba(184,146,42,.3);
          border-color: rgba(184,146,42,.7);
          animation: none;
          transform: translateX(-50%) translateY(3px);
        }
        .sec-nav-arrow svg { fill: #D4AA4A; width: 18px; height: 18px; }
        @keyframes secBounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(5px); }
        }
        /* Nasconde l'ultima freccia */
        .sec-nav-arrow.last { display: none !important; }
      `;
      document.head.appendChild(style);

      // Aggiunge freccia a ogni sezione tranne l'ultima
      sections.forEach((sec, i) => {
        if (i >= sections.length - 1) return; // non aggiunge all'ultima
        // La sezione deve avere position relative per posizionare la freccia
        const pos = getComputedStyle(sec).position;
        if (pos === 'static') sec.style.position = 'relative';

        const arrow = document.createElement('button');
        arrow.className = 'sec-nav-arrow';
        arrow.setAttribute('aria-label', 'Sezione successiva');
        arrow.title = 'Sezione successiva';
        arrow.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>';

        arrow.addEventListener('click', (e) => {
          e.stopPropagation();
          const next = sections[i + 1];
          if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });

        sec.appendChild(arrow);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initSectionNav);
    } else {
      // Piccolo delay per attendere il render delle sezioni
      setTimeout(initSectionNav, 200);
    }
  })();

  /* ── TRADUZIONE — Google Translate widget ── */
  (function(){
    const LANGS=[{code:'it',flag:'🇮🇹',name:'Italiano'},{code:'en',flag:'🇬🇧',name:'English'},{code:'es',flag:'🇪🇸',name:'Español'},{code:'ar',flag:'🇸🇦',name:'العربية'},{code:'ro',flag:'🇷🇴',name:'Română'}];
    const CSS=`
    /* Protegge footer e layout da Google Translate */
    .goog-te-banner-frame,.skiptranslate{display:none!important;}
    body{top:0!important;}
    footer .ftop,.footer .fcols{transform:none!important;}
    #tr-btn{position:fixed;top:68px;right:1rem;z-index:8500;@media(max-width:700px){display:none}background:linear-gradient(135deg,#2C3E2D,#1a3a1b);border:1.5px solid rgba(184,146,42,.3);border-radius:8px;padding:.38rem .7rem;display:flex;align-items:center;gap:.35rem;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,.22);font-family:'Source Sans 3',sans-serif;font-size:.7rem;font-weight:700;color:rgba(245,240,232,.7);transition:all .2s;white-space:nowrap;}
#tr-btn:hover{border-color:rgba(184,146,42,.6);color:#fff;}
#tr-menu{position:fixed;top:102px;right:1rem;z-index:8950;background:#fff;border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.16);border:1px solid #e5e7eb;overflow:hidden;display:none;flex-direction:column;max-height:70vh;overflow-y:auto;}@media(max-width:700px){#tr-btn{display:none!important;}#tr-menu{top:auto;bottom:1.5rem;right:4.9rem;left:auto;}}@media(min-width:701px){#tr-fab{display:none!important;}}
#tr-menu.open{display:flex;}
.tr-opt{display:flex;align-items:center;gap:.55rem;padding:.55rem .9rem;cursor:pointer;font-family:'Source Sans 3',sans-serif;font-size:.78rem;color:#374151;transition:background .15s;border-bottom:1px solid #f3f4f6;}
.tr-opt:last-child{border-bottom:none;}.tr-opt:hover{background:#f3f4f6;}.tr-opt.act{background:rgba(44,62,45,.06);color:#2C3E2D;font-weight:700;}
#tr-fab{font-size:1.05rem;}
#tr-fab.act{background:linear-gradient(135deg,#B8922A,#9a7a1f)!important;border-color:#EDD98A!important;}`;
    const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);

    const btn=document.createElement('button');btn.id='tr-btn';btn.setAttribute('aria-label','Cambia lingua');btn.innerHTML='🌐 IT';document.body.appendChild(btn);
    const menu=document.createElement('div');menu.id='tr-menu';menu.setAttribute('role','menu');
    LANGS.forEach(l=>{
      const o=document.createElement('div');o.className='tr-opt'+(l.code==='it'?' act':'');o.setAttribute('role','menuitem');
      o.innerHTML=`<span>${l.flag}</span><span>${l.name}</span>`;
      o.onclick=()=>{selectLang(l);menu.classList.remove('open');};
      menu.appendChild(o);
    });
    document.body.appendChild(menu);

    // Fab lingua (mobile/tablet): apre lo STESSO menu, impilato nella colonna #fab-wrap
    const fab=document.createElement('button');
    fab.id='tr-fab';fab.type='button';fab.className='fab-c';
    fab.setAttribute('aria-label','Cambia lingua');fab.setAttribute('aria-haspopup','true');fab.setAttribute('aria-expanded','false');
    fab.setAttribute('data-tip','Lingua');fab.innerHTML='\uD83C\uDF10';
    fab.onclick=e=>{e.stopPropagation();const open=menu.classList.toggle('open');fab.setAttribute('aria-expanded',open?'true':'false');};
    (function(){
      const wrap=document.getElementById('fab-wrap');
      const top=document.getElementById('fab-top');
      if(top&&top.parentNode){top.parentNode.insertBefore(fab,top.nextSibling);}
      else if(wrap){wrap.insertBefore(fab,wrap.firstChild);}
      else{fab.style.cssText='position:fixed;bottom:1.5rem;right:1.25rem;z-index:8900;';document.body.appendChild(fab);}
    })();

    btn.onclick=e=>{e.stopPropagation();menu.classList.toggle('open');};
    document.addEventListener('click',()=>{menu.classList.remove('open');fab.setAttribute('aria-expanded','false');});

    function trConsent(onYes){
      const ov=document.createElement('div');
      ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','tr-dlg-t');
      ov.style.cssText="position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:1rem;background:rgba(12,20,13,.55);opacity:0;transition:opacity .2s ease;font-family:'Source Sans 3',system-ui,sans-serif";
      ov.innerHTML=
        '<div style="max-width:430px;width:100%;background:#FDFAF5;border:1px solid rgba(184,146,42,.35);border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.35);overflow:hidden;transform:translateY(8px);transition:transform .2s ease">'
        +'<div style="background:linear-gradient(135deg,#2C3E2D,#1a3a1b);color:#fff;padding:1rem 1.25rem;display:flex;align-items:center;gap:.6rem">'
          +'<span style="font-size:1.25rem" aria-hidden="true">🌐</span>'
          +'<span id="tr-dlg-t" style="font-family:\'Cormorant Garamond\',serif;font-size:1.25rem;font-weight:400">Traduzione automatica</span>'
        +'</div>'
        +'<div style="padding:1.1rem 1.25rem;color:#1A1A18;font-size:.9rem;line-height:1.6">La traduzione utilizza il servizio Google Translate: il testo delle pagine verr\u00e0 elaborato dai server di Google. Vuoi continuare?</div>'
        +'<div style="display:flex;justify-content:flex-end;gap:.6rem;padding:0 1.25rem 1.2rem">'
          +'<button id="tr-no" style="font-family:inherit;font-size:.8rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:.6rem 1.1rem;border-radius:30px;cursor:pointer;border:1.5px solid #2C3E2D;background:transparent;color:#2C3E2D">Annulla</button>'
          +'<button id="tr-yes" style="font-family:inherit;font-size:.8rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:30px;cursor:pointer;border:none;background:linear-gradient(135deg,#B8922A,#D4AA4A);color:#2C3E2D">Continua</button>'
        +'</div>'
        +'</div>';
      document.body.appendChild(ov);
      requestAnimationFrame(()=>{ov.style.opacity='1';ov.firstChild.style.transform='translateY(0)';});
      const close=()=>{ov.style.opacity='0';setTimeout(()=>ov.remove(),200);document.removeEventListener('keydown',onKey);};
      const yes=()=>{close();onYes();};
      function onKey(e){if(e.key==='Escape')close();else if(e.key==='Enter')yes();}
      ov.querySelector('#tr-no').onclick=close;
      ov.querySelector('#tr-yes').onclick=yes;
      ov.addEventListener('click',e=>{if(e.target===ov)close();});
      document.addEventListener('keydown',onKey);
      setTimeout(()=>ov.querySelector('#tr-yes').focus(),50);
    }

    function selectLang(l){
      if (l.code !== 'it' && !sessionStorage.getItem('tr_consent')) {
        trConsent(function(){ sessionStorage.setItem('tr_consent','1'); doSelectLang(l); });
        return;
      }
      doSelectLang(l);
    }
    function doSelectLang(l){
      btn.innerHTML='🌐 '+l.code.toUpperCase();
      fab.classList.toggle('act',l.code!=='it');
      menu.querySelectorAll('.tr-opt').forEach((o,i)=>o.classList.toggle('act',LANGS[i].code===l.code));
      if(l.code==='it'){
        document.cookie='googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie='googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.'+location.hostname;
        location.reload();return;
      }
      if(!document.getElementById('gt-div')){const d=document.createElement('div');d.id='gt-div';d.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none';document.body.appendChild(d);}
      if(!document.getElementById('gt-sc')){
        window.googleTranslateElementInit=function(){new google.translate.TranslateElement({pageLanguage:'it',includedLanguages:'en,es,ar,ro',autoDisplay:false},'gt-div');setTimeout(()=>applyLang(l.code),800);};
        const sc=document.createElement('script');sc.id='gt-sc';sc.src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';document.body.appendChild(sc);
      } else {setTimeout(()=>applyLang(l.code),300);}
    }
    function applyLang(code){const s=document.querySelector('.goog-te-combo');if(s){s.value=code;s.dispatchEvent(new Event('change'));}}
  })();

    /* ── 🌟 SCHERMATA DI BENVENUTO ── */
  (function(){
    if (sessionStorage.getItem('cc-welcomed')) return; // solo la prima volta per sessione
    sessionStorage.setItem('cc-welcomed', '1');

    const CSS = `
    #welcome-screen {
      position:fixed; inset:0; z-index:99990;
      background:linear-gradient(135deg,#0a0f0a,#1a2e1b);
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      gap:1.25rem; animation:wsFadeOut .6s ease 2.4s forwards;
    }
    @keyframes wsFadeOut { to { opacity:0; pointer-events:none; visibility:hidden; } }
    .ws-logo { width:80px; height:80px; animation:wsZoom .5s ease; }
    @keyframes wsZoom { from{transform:scale(.7);opacity:0} to{transform:scale(1);opacity:1} }
    .ws-line { width:48px; height:2px; background:linear-gradient(90deg,transparent,#B8922A,transparent); animation:wsLine .6s ease .3s both; }
    @keyframes wsLine { from{width:0;opacity:0} to{width:48px;opacity:1} }
    .ws-title { font-family:'Cormorant Garamond',serif; font-size:clamp(1.4rem,5vw,2.2rem); font-weight:300; color:#fff; text-align:center; animation:wsFadeUp .5s ease .4s both; }
    .ws-title em { font-style:italic; color:#D4AA4A; }
    .ws-sub { font-family:'Source Sans 3',sans-serif; font-size:.72rem; font-weight:400; letter-spacing:.2em; text-transform:uppercase; color:rgba(245,240,232,.50); animation:wsFadeUp .5s ease .7s both; }
    @keyframes wsFadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
    `;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    const ws = document.createElement('div'); ws.id = 'welcome-screen';
    ws.innerHTML = `
      <picture><source type="image/webp" srcset="img/logo.webp"/><img src="img/logo.png" class="ws-logo" alt="Logo Convitto Costaggini" width="120" height="107"/></picture>
      <div class="ws-line"></div>
      <h1 class="ws-title">Dal <em>Terminillo</em> al mondo</h1>
      <p class="ws-sub">Convitto "Costaggini" · Rieti · dal 1971</p>
    `;
    document.body.appendChild(ws);
    ws.addEventListener('animationend', () => ws.remove());
    ws.addEventListener('click', () => ws.style.animation = 'wsFadeOut .3s ease forwards');
  })();

  /* ── 📊 CONTATORI ANIMATI ── */
  try { (function(){
    const noMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function finalText(el) {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const num = el.dataset.plain ? String(target) : target.toLocaleString('it-IT');
      return prefix + num + suffix;
    }

    function animateCounter(el) {
      if (noMotion) { el.textContent = finalText(el); return; }
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const plain = !!el.dataset.plain;
      const duration = 1800;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        // Easing ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * target);
        el.textContent = prefix + (plain ? String(current) : current.toLocaleString('it-IT')) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const cObs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = '1';
        animateCounter(e.target);
        cObs.unobserve(e.target);
      }
    }), { threshold: 0.5 });

    // Osserva tutti gli elementi con data-count
    document.querySelectorAll('[data-count]').forEach(el => cObs.observe(el));

    // Riprova dopo il DOM (nel caso nav.js carichi prima del contenuto)
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-count]').forEach(el => cObs.observe(el));
    });
  })(); } catch (err) {
    console.error('Contatori animati non disponibili:', err);
  }

  /* ── 🌄 PARALLAX DISCRETO ── */
  // Applica un leggero spostamento verticale agli elementi [data-parallax]
  // in base allo scroll. Disattivato del tutto se l'utente ha impostato
  // "riduci movimento" (vedi anche la regola globale in style.css).
  try { (function(){
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = document.querySelectorAll('[data-parallax]');
    if (!els.length) return;
    let ticking = false;
    function update(){
      const vh = window.innerHeight;
      els.forEach(el => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        const host = el.parentElement;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return; // fuori dallo schermo: non calcolare
        const offset = rect.top * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    function onScroll(){
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  })(); } catch (err) {
    console.error('Parallax non disponibile:', err);
  }

})();

/* ═══════════════════════════════════════════════════
   LETTURA FACILITATA — toggle accessibilità (tutte le pagine)
   Pulsante nella colonna fab in basso a destra: SEMPRE visibile,
   anche su mobile (la barra #pa e il pulsante lingua sono desktop-only).
   Attiva font ad alta leggibilità (Atkinson Hyperlegible), interlinea
   e spaziatura maggiori, link sottolineati, focus evidente.
   Scelta ricordata in localStorage. Pienamente reversibile.
═══════════════════════════════════════════════════ */
(function () {
  var KEY = 'lf-convitto';
  var root = document.documentElement;

  /* font ad alta leggibilità */
  var fl = document.createElement('link');
  fl.rel = 'stylesheet';
  fl.href = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  document.head.appendChild(fl);

  /* regole attive SOLO quando html.lettura-facilitata è presente */
  var CSS = [
    'html.lettura-facilitata{font-size:106.25%;}',
    'html.lettura-facilitata, html.lettura-facilitata body,',
    'html.lettura-facilitata h1, html.lettura-facilitata h2, html.lettura-facilitata h3,',
    'html.lettura-facilitata h4, html.lettura-facilitata h5, html.lettura-facilitata p,',
    'html.lettura-facilitata li, html.lettura-facilitata a, html.lettura-facilitata span,',
    'html.lettura-facilitata label, html.lettura-facilitata button, html.lettura-facilitata input,',
    'html.lettura-facilitata td, html.lettura-facilitata th, html.lettura-facilitata dd,',
    'html.lettura-facilitata dt, html.lettura-facilitata blockquote',
    '{font-family:"Atkinson Hyperlegible",system-ui,"Segoe UI",sans-serif !important;}',
    'html.lettura-facilitata body{line-height:1.8 !important;letter-spacing:.012em !important;word-spacing:.04em !important;}',
    'html.lettura-facilitata p, html.lettura-facilitata li{font-size:1.06em !important;}',
    'html.lettura-facilitata a{text-decoration:underline !important;text-underline-offset:.18em;}',
    'html.lettura-facilitata *:focus-visible{outline:3px solid #B8922A !important;outline-offset:2px !important;}',
    /* il pulsante eredita .fab-c (tondo verde/oro); qui solo testo "Aa" e stato attivo */
    '#lf-fab{font-family:"Source Sans 3",system-ui,sans-serif;font-weight:800;font-size:.95rem;letter-spacing:-.02em;color:#D4AA4A;}',
    '#lf-fab[aria-pressed="true"]{background:linear-gradient(135deg,#B8922A,#9a7a1f);border-color:#EDD98A;color:#fff;}'
  ].join('');
  var st = document.createElement('style'); st.id = 'lf-style'; st.textContent = CSS;
  document.head.appendChild(st);

  var btn = document.createElement('button');
  btn.id = 'lf-fab'; btn.type = 'button'; btn.className = 'fab-c';
  btn.setAttribute('aria-pressed', 'false');
  btn.setAttribute('aria-label', 'Attiva o disattiva la lettura facilitata');
  btn.setAttribute('data-tip', 'Lettura facilitata');
  btn.textContent = 'Aa';

  function apply(on) {
    root.classList.toggle('lettura-facilitata', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.title = on ? 'Disattiva lettura facilitata' : 'Attiva lettura facilitata';
  }
  btn.addEventListener('click', function () {
    var now = !root.classList.contains('lettura-facilitata');
    apply(now);
    try { localStorage.setItem(KEY, now ? '1' : '0'); } catch (e) {}
  });

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  function place() {
    var wrap = document.getElementById('fab-wrap');
    if (wrap) {
      wrap.appendChild(btn);
    } else {
      btn.style.cssText = 'position:fixed;bottom:1.5rem;left:1.25rem;z-index:8900;width:40px;height:40px;border-radius:50%;';
      document.body.appendChild(btn);
    }
    apply(saved === '1');
  }

  if (document.getElementById('fab-wrap') || (document.body && document.readyState !== 'loading')) place();
  else document.addEventListener('DOMContentLoaded', place);
})();

/* ═══════════════════════════════════════════════════
   RICERCA SITEWIDE — icona 🔍 in header, su ogni pagina
   Un solo indice condiviso: la barra grande in home
   (#search-input) e il pannello a comparsa qui sotto
   usano entrambi window.ConvittoSearch, così i contenuti
   indicizzati restano un'unica fonte da aggiornare.
═══════════════════════════════════════════════════ */
(function () {
  var INDICE = [
    { titolo: 'Chi siamo — Storia del Convitto', pagina: 'il-convitto.html', ancora: '#storia', cat: 'Il Convitto', keywords: ['storia','convitto','costaggini','fondazione','rieti','tradizione','comunità','educante','origine','anni','decenni'] },
    { titolo: 'Missione e valori', pagina: 'il-convitto.html', ancora: '#mission', cat: 'Il Convitto', keywords: ['missione','valori','sicurezza','eccellenza','responsabilità','cura','formazione','educare'] },
    { titolo: 'Staff educativo e organigramma', pagina: 'il-convitto.html', ancora: '#staff', cat: 'Il Convitto', keywords: ['staff','rettore','coordinatore','educatore','personale','direzione','organigramma','docenti'] },
    { titolo: 'Cronologia storica', pagina: 'il-convitto.html', ancora: '#cronologia', cat: 'Il Convitto', keywords: ['cronologia','storia','timeline','anni 70','pnrr','modernizzazione','espansione'] },
    { titolo: 'Ristorazione e pasti', pagina: 'servizi.html', ancora: '#ristorazione', cat: 'Servizi', keywords: ['ristorazione','mensa','pasti','colazione','pranzo','cena','merenda','menu','menù','cucina','mangiare','vitto','allergie','intolleranze','dieta'] },
    { titolo: 'Alloggi e camere', pagina: 'servizi.html', ancora: '#alloggi', cat: 'Servizi', keywords: ['camera','camere','alloggio','alloggi','singola','doppia','bagno','letto','dormitorio','wifi','wi-fi','armadietto','biancheria','climatizzazione'] },
    { titolo: 'Studio guidato', pagina: 'servizi.html', ancora: '#studio', cat: 'Servizi', keywords: ['studio','studiare','tutoraggio','compiti','pomeriggio','15.30'] },
    { titolo: 'Sport, palestra e benessere', pagina: 'servizi.html', ancora: '#sport', cat: 'Servizi', keywords: ['palestra','sport','calcio','basket','yoga','pilates','tornei','campo','ping pong','calciobalilla','attività','fisico','benessere','pnrr'] },
    { titolo: 'Tecnologia e connettività', pagina: 'servizi.html', ancora: '#tecnologia', cat: 'Servizi', keywords: ['wifi','wi-fi','internet','tecnologia','laboratorio','computer','digitale','pnsd','multimediale','software','alberghiero','pms','lim'] },
    { titolo: 'Salute e assistenza sanitaria', pagina: 'servizi.html', ancora: '#salute', cat: 'Servizi', keywords: ['infermeria','salute','medico','psicologico','emergenza','118','ospedale','farmaci','sanitaria','assistenza','asl'] },
    { titolo: 'Orari dei servizi', pagina: 'servizi.html', ancora: '#orari', cat: 'Servizi', keywords: ['orari','orario','apertura','chiusura','quando','ore','mattina','pomeriggio','sera'] },
    { titolo: 'Come iscriversi al Convitto', pagina: 'ammissione.html', ancora: '#procedura', cat: 'Ammissione', keywords: ['iscriversi','iscrizione','ammissione','domanda','come','procedura','miur','portale','modulo','candidatura','entrare'] },
    { titolo: 'Tariffe e rette 2025/26', pagina: 'ammissione.html', ancora: '#tariffe', cat: 'Ammissione', keywords: ['tariffa','retta','costo','prezzo','quanto','pagare','isee','riduzione','agevolazione','contributo','pagopa','rata','mensile','euro'] },
    { titolo: 'Moduli e documenti da scaricare', pagina: 'ammissione.html', ancora: '#moduli', cat: 'Ammissione', keywords: ['modulo','moduli','scaricare','download','pdf','documenti','stampare','compilare','domanda','allegati'] },
    { titolo: 'Domande frequenti — FAQ', pagina: 'ammissione.html', ancora: '#faq', cat: 'Ammissione', keywords: ['faq','domande','frequenti','dubbi','risposta','chiarimenti','uscita','malattia','rimborso','ritiro','camera','compagno'] },
    { titolo: 'Scadenze e calendario iscrizioni', pagina: 'ammissione.html', ancora: '#procedura', cat: 'Ammissione', keywords: ['scadenza','calendario','quando','data','settembre','ottobre','novembre','gennaio','marzo','maggio','giugno','termine'] },
    { titolo: 'Regolamento del Convitto', pagina: 'trasparenza.html', ancora: '#disposizioni', cat: 'Trasparenza', keywords: ['regolamento','regole','norme','disciplina','comportamento','patto','convivenza'] },
    { titolo: 'P.T.O.F. — Piano Triennale Offerta Formativa', pagina: 'trasparenza.html', ancora: '#disposizioni', cat: 'Trasparenza', keywords: ['ptof','piano','triennale','offerta','formativa','progetto','educativo','programma'] },
    { titolo: 'Dichiarazione di accessibilità AGID', pagina: 'trasparenza.html', ancora: '#accessibilita', cat: 'Trasparenza', keywords: ['accessibilità','agid','wcag','disabilità','legge stanca','dichiarazione','conformità'] },
    { titolo: 'Privacy e trattamento dati GDPR', pagina: 'trasparenza.html', ancora: '#privacy', cat: 'Trasparenza', keywords: ['privacy','gdpr','dati','personali','trattamento','titolare','cookie','consenso','reg ue'] },
    { titolo: 'Tutte le notizie e comunicati', pagina: 'notizie.html', ancora: '', cat: 'Notizie', keywords: ['notizie','news','comunicato','aggiornamento','avviso','circolare','delibera','comunicazioni'] },
    { titolo: 'Trionfo al Concorso Nazionale di Cucina', pagina: 'notizie.html', ancora: '', cat: 'Notizie', keywords: ['concorso','cucina','regionale','nazionale','junior','fipe','primo posto','gara','competizione','cuoco','chef'] },
    { titolo: 'Open Day — Porte aperte alle famiglie', pagina: 'notizie.html', ancora: '', cat: 'Notizie', keywords: ['open day','porte aperte','visita','famiglia','famiglie','presentazione','tour','scoprire'] },
    { titolo: 'Inaugurazione nuova palestra PNRR', pagina: 'notizie.html', ancora: '', cat: 'Notizie', keywords: ['palestra','inaugurazione','pnrr','fondi','nuovo','inaugurata','sport','apertura'] },
    { titolo: 'Prossimi eventi e agenda', pagina: 'notizie.html', ancora: '#eventi', cat: 'Notizie', keywords: ['eventi','agenda','calendario','prossimo','quando','programma','cerimonia','diplomi','cena','gala'] },
    { titolo: 'Telefono, email e PEC', pagina: 'contatti.html', ancora: '', cat: 'Contatti', keywords: ['telefono','email','pec','contatto','contattare','chiamare','scrivere','recapito','numero'] },
    { titolo: 'Orari dello sportello', pagina: 'contatti.html', ancora: '#orari', cat: 'Contatti', keywords: ['sportello','orario','apertura','segreteria','ricevimento','quando','ore','mattina','pomeriggio'] },
    { titolo: 'Dove siamo — Indirizzo e mappa', pagina: 'contatti.html', ancora: '#mappa', cat: 'Contatti', keywords: ['indirizzo','dove','mappa','come arrivare','rieti','sede','posizione','via','strada','percorso','gps'] },
    { titolo: 'Scrivi un messaggio al Convitto', pagina: 'contatti.html', ancora: '#form', cat: 'Contatti', keywords: ['messaggio','scrivere','modulo','form','contatto','richiedere','informazioni','domanda','quesito'] },
    { titolo: 'Il Laboratorio Musicale', pagina: 'laboratorio-musicale.html', ancora: '', cat: 'Comunità', keywords: ['musica','laboratorio','chitarra','voce','canto','concerto','ensemble','strumenti'] },
    { titolo: 'Il Vinile del Convitto', pagina: 'vinile.html', ancora: '', cat: 'Comunità', keywords: ['vinile','disco','musica','ascolta','esibizioni','registrazioni'] },
    { titolo: 'La Solidarietà — il brano', pagina: 'solidarieta.html', ancora: '', cat: 'Comunità', keywords: ['solidarietà','brano','canzone','musica','2019'] },
    { titolo: 'Quando Rieti abbracciò Amatrice', pagina: 'abbraccio-amatrice.html', ancora: '', cat: 'Comunità', keywords: ['amatrice','terremoto','stelle tornano a scuola','chef','solidarietà','2016','bottura','cracco'] },
    { titolo: 'Un riconoscimento che ci onora', pagina: 'riconoscimento-frassinetti.html', ancora: '', cat: 'Comunità', keywords: ['frassinetti','sottosegretario','ministero','istruzione','visita','podcast','raffaele castaldo','2026'] },
    { titolo: 'Il Costaggini nel Mondo', pagina: 'mondo.html', ancora: '', cat: 'Comunità', keywords: ['mondo','alumni','ex convittori','mappa','estero'] },
    { titolo: 'Da dove vengono i convittori', pagina: 'provenienza.html', ancora: '', cat: 'Comunità', keywords: ['provenienza','province','regioni','da dove vengono','mappa','statistiche'] },
    { titolo: 'Bullismo e Cyberbullismo', pagina: 'bullismo.html', ancora: '', cat: 'Sicurezza', keywords: ['bullismo','cyberbullismo','molestie','prepotenze','sicurezza','segnalare','aiuto','protezione','genitori','studenti'] },
    { titolo: 'Come arrivare al Convitto', pagina: 'come-arrivare.html', ancora: '', cat: 'Contatti', keywords: ['come arrivare','indicazioni','autobus','cotral','treno','auto','salaria','roma','biglietti','orari','trasporti','viaggio','raggiungere'] },
    { titolo: 'Premio al Merito del Convitto', pagina: 'premio-merito.html', ancora: '', cat: 'Il Convitto', keywords: ['premio','merito','riconoscimento','premiare','progresso','valutazione','incentivo'] },
    { titolo: 'Alumni — le storie', pagina: 'alumni.html', ancora: '', cat: 'Comunità', keywords: ['alumni','ex convittori','storie','testimonianze','ricordi','passato'] },
    { titolo: "L'Anno al Convitto", pagina: 'anno.html', ancora: '', cat: 'Il Convitto', keywords: ['anno','scolastico','calendario','eventi','vissuto'] },
    { titolo: 'Calendario Eventi', pagina: 'calendario.html', ancora: '', cat: 'Notizie', keywords: ['calendario','eventi','open day','feste','uscite','concerti','appuntamenti'] },
    { titolo: 'Collegio Educatori', pagina: 'collegio-educatori.html', ancora: '', cat: 'Il Convitto', keywords: ['collegio','educatori','riunione','organo','collegiale'] },
    { titolo: 'La Nostra Comunità', pagina: 'comunita.html', ancora: '', cat: 'Comunità', keywords: ['comunità','alumni','muro dei ricordi','lab musicale','vinile','solidarietà'] },
    { titolo: 'Cookie Policy', pagina: 'cookie-policy.html', ancora: '', cat: 'Trasparenza', keywords: ['cookie','policy','privacy','profilazione'] },
    { titolo: 'Domanda di Ammissione', pagina: 'domanda-ammissione.html', ancora: '', cat: 'Ammissione', keywords: ['domanda','ammissione','iscrizione','modulo','online','segreteria','compilare'] },
    { titolo: 'Gli Educatori', pagina: 'educatori.html', ancora: '', cat: 'Il Convitto', keywords: ['educatori','staff','ccnl','competenze','schede','personale'] },
    { titolo: 'Il Convitto fa per me?', pagina: 'fa-per-me.html', ancora: '', cat: 'Orientamento', keywords: ['fa per me','quiz','scelta','giusta','vita convittuale','decidere'] },
    { titolo: 'Per i Genitori', pagina: 'genitori.html', ancora: '', cat: 'Famiglie', keywords: ['genitori','famiglie','famiglia','vicini','informazioni'] },
    { titolo: 'Una giornata al Convitto', pagina: 'giornata-tipo.html', ancora: '', cat: 'Il Convitto', keywords: ['giornata','tipo','sveglia','studio','sport','cena','quotidiana','routine'] },
    { titolo: 'In 2 Minuti', pagina: 'in-2-minuti.html', ancora: '', cat: 'Orientamento', keywords: ['2 minuti','veloce','faq','domande frequenti','riassunto'] },
    { titolo: 'Menu della Settimana', pagina: 'menu-settimana.html', ancora: '', cat: 'Novità', keywords: ['menu','mensa','cibo','pasti','primo','secondo','contorno','settimana','cucina'] },
    { titolo: 'Lettera a un Futuro Convittore', pagina: 'lettera.html', ancora: '', cat: 'Comunità', keywords: ['lettera','futuro','convittore','testimonianza','consigli'] },
    { titolo: 'Open Day Digitale', pagina: 'openday.html', ancora: '', cat: 'Orientamento', keywords: ['open day','digitale','tour','spazi','faq','prenotazione','visita'] },
    { titolo: 'Organizzazione del Convitto', pagina: 'organizzazione.html', ancora: '', cat: 'Trasparenza', keywords: ['organizzazione','organigramma','personale','patto educativo','corresponsabilità'] },
    { titolo: 'Orientamento al Convitto', pagina: 'orientamento.html', ancora: '', cat: 'Orientamento', keywords: ['orientamento','open day','tour virtuale','fa per me','faq','prenotazione'] },
    { titolo: 'Elenco del Personale', pagina: 'personale.html', ancora: '', cat: 'Il Convitto', keywords: ['personale','elenco','educativo','amministrativo','staff'] },
    { titolo: 'Informativa Privacy', pagina: 'privacy.html', ancora: '', cat: 'Trasparenza', keywords: ['privacy','informativa','dati personali','gdpr','reg ue 2016/679'] },
    { titolo: 'Il PTOF spiegato', pagina: 'ptof-guida.html', ancora: '', cat: 'Trasparenza', keywords: ['ptof','piano triennale','offerta formativa','spiegato','sezioni tematiche'] },
    { titolo: 'Leggi il Regolamento — guida', pagina: 'regolamento-guida.html', ancora: '', cat: 'Trasparenza', keywords: ['regolamento','guida','articoli','leggere','chiaro','diretto'] },
    { titolo: 'Regolamento di Convitto — versione interattiva', pagina: 'regolamento.html', ancora: '', cat: 'Trasparenza', keywords: ['regolamento','convitto','norme','regole','versione','aggiornata'] },
    { titolo: 'Il Muro dei Ricordi', pagina: 'ricordi.html', ancora: '', cat: 'Comunità', keywords: ['muro','ricordi','ex convittori','emozione','frase','momento'] },
    { titolo: 'Scopri il tuo Talento', pagina: 'scopri-talento.html', ancora: '', cat: 'Orientamento', keywords: ['scopri','talento','giochi','quiz','simulatori','futuri studenti'] },
    { titolo: 'Semiconvitto', pagina: 'semiconvitto.html', ancora: '', cat: 'Servizi', keywords: ['semiconvitto','richiesta','partecipazione','studio guidato','pranzo','pomeridiane'] },
    { titolo: 'Una Settimana in Numeri', pagina: 'settimana-in-numeri.html', ancora: '', cat: 'Il Convitto', keywords: ['settimana','numeri','pasti','statistiche','dati'] },
    { titolo: 'Tour Virtuale 360°', pagina: 'tour-virtuale.html', ancora: '', cat: 'Orientamento', keywords: ['tour','virtuale','360','esplora','ambienti','prima di arrivare'] }
  ];

  function escReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function highlight(text, query) {
    if (!query) return text;
    return text.replace(new RegExp('(' + escReg(query) + ')', 'gi'), '<mark>$1</mark>');
  }
  function badgeColor(cat) {
    if (cat === 'Servizi') return 'oro';
    if (cat === 'Ammissione') return 'verde';
    return '';
  }
  function pageLabel(p) {
    return p.replace('.html', '').replace(/-/g, ' ').replace(/^\w/, function (c) { return c.toUpperCase(); }).replace('Index', 'Home');
  }
  function cerca(query) {
    var tokens = query.split(/\s+/).filter(function (t) { return t.length > 1; });
    return INDICE.filter(function (item) {
      var hay = (item.titolo + ' ' + item.cat + ' ' + item.keywords.join(' ')).toLowerCase();
      return tokens.every(function (t) { return hay.indexOf(t) !== -1; });
    });
  }
  function renderHTML(query) {
    var q = query.trim().toLowerCase();
    if (q.length < 2) return '';
    var trovati = cerca(q);
    if (trovati.length === 0) {
      return '<div class="sr-header">Risultati per "' + q + '"</div>' +
        '<div class="sr-empty">Nessun risultato trovato. Prova con parole diverse.</div>' +
        '<div class="sr-footer">Hai bisogno di aiuto? <a href="contatti.html">Contattaci →</a></div>';
    }
    var items = trovati.slice(0, 8).map(function (item, i) {
      return '<a class="sr-item" href="' + item.pagina + item.ancora + '" role="option" id="sr-' + i + '" tabindex="-1">' +
        '<span class="sr-badge ' + badgeColor(item.cat) + '">' + item.cat + '</span>' +
        '<span><span class="sr-title">' + highlight(item.titolo, q) + '</span>' +
        '<span class="sr-page">' + pageLabel(item.pagina) + '</span></span></a>';
    }).join('');
    var extra = trovati.length > 8 ? '<div class="sr-footer">Trovati ' + trovati.length + ' risultati — <a href="notizie.html">Vedi tutte le notizie →</a></div>' : '';
    return '<div class="sr-header">' + trovati.length + ' risultat' + (trovati.length === 1 ? 'o' : 'i') + ' per "' + q + '"</div>' + items + extra;
  }

  window.ConvittoSearch = { cerca: cerca, renderHTML: renderHTML };

  function announceCount(query, statusEl) {
    if (!statusEl) return;
    var q = query.trim().toLowerCase();
    if (q.length < 2) { statusEl.textContent = ''; return; }
    var n = cerca(q).length;
    statusEl.textContent = n === 0
      ? 'Nessun risultato trovato per "' + q + '"'
      : n + ' risultat' + (n === 1 ? 'o' : 'i') + ' trovat' + (n === 1 ? 'o' : 'i') + ' per "' + q + '"';
  }

  /* ── Pannello a comparsa, raggiungibile da ogni pagina ── */
  var modal = document.createElement('div');
  modal.id = 'gsearch-modal';
  modal.innerHTML =
    '<div class="gsearch-backdrop"></div>' +
    '<div class="gsearch-box" role="dialog" aria-modal="true" aria-label="Cerca nel sito">' +
      '<div class="gsearch-input-wrap">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>' +
        '<input type="search" id="gsearch-input" placeholder="Cerca nel sito…" aria-label="Cerca nel sito del Convitto Costaggini" autocomplete="off" autocorrect="off" spellcheck="false"/>' +
        '<button id="gsearch-close" type="button" aria-label="Chiudi ricerca">✕</button>' +
      '</div>' +
      '<div id="gsearch-results" role="listbox" aria-label="Risultati della ricerca"></div>' +
      '<div id="gsearch-status" class="sr-only" aria-live="polite" role="status"></div>' +
      '<div id="gsearch-hint">Premi <kbd>Esc</kbd> per chiudere</div>' +
    '</div>';
  document.body.appendChild(modal);

  var gInput = document.getElementById('gsearch-input');
  var gResults = document.getElementById('gsearch-results');
  var gClose = document.getElementById('gsearch-close');
  var gBackdrop = modal.querySelector('.gsearch-backdrop');
  var lastFocus = null;

  function openSearch() {
    lastFocus = document.activeElement;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    gInput.value = '';
    gResults.innerHTML = '';
    setTimeout(function () { gInput.focus(); }, 30);
  }
  function closeSearch() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }
  var gStatus = document.getElementById('gsearch-status');
  gInput.addEventListener('input', function () {
    gResults.innerHTML = renderHTML(gInput.value);
    announceCount(gInput.value, gStatus);
  });
  gClose.addEventListener('click', closeSearch);
  gBackdrop.addEventListener('click', closeSearch);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); modal.classList.contains('open') ? closeSearch() : openSearch(); }
  });

  /* ── Icona 🔍 in header, sempre visibile (mobile + desktop) ── */
  var hdrIn = document.querySelector('.hdr-in');
  var dnav = document.getElementById('dnav');
  if (hdrIn && dnav) {
    var trigger = document.createElement('button');
    trigger.id = 'gsearch-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-label', 'Cerca nel sito');
    trigger.setAttribute('data-tip', 'Cerca');
    trigger.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
    trigger.addEventListener('click', openSearch);
    hdrIn.insertBefore(trigger, dnav);
  }

  /* ── Se la pagina ha già una barra di ricerca propria (home),
        la colleghiamo allo stesso indice invece di aprire il pannello ── */
  var homeInput = document.getElementById('search-input');
  var homeResults = document.getElementById('search-results');
  var homeBtn = document.getElementById('search-btn');
  var homeStatus = document.getElementById('search-status');
  if (homeInput && homeResults) {
    var lastQuery = '';
    var focusIdx = -1;
    function cercaHome(query) {
      var q = query.trim().toLowerCase();
      if (q === lastQuery) return;
      lastQuery = q;
      focusIdx = -1;
      if (q.length < 2) {
        homeResults.innerHTML = '';
        homeResults.classList.remove('open');
        homeInput.setAttribute('aria-expanded', 'false');
        if (homeStatus) homeStatus.textContent = '';
        return;
      }
      homeResults.innerHTML = renderHTML(q);
      homeResults.classList.add('open');
      homeInput.setAttribute('aria-expanded', 'true');
      announceCount(q, homeStatus);
    }
    homeInput.addEventListener('keydown', function (e) {
      var items = homeResults.querySelectorAll('.sr-item');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusIdx = Math.min(focusIdx + 1, items.length - 1);
        items.forEach(function (el, i) { el.classList.toggle('focused', i === focusIdx); });
        if (items[focusIdx]) items[focusIdx].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusIdx = Math.max(focusIdx - 1, -1);
        items.forEach(function (el, i) { el.classList.toggle('focused', i === focusIdx); });
        if (focusIdx === -1) homeInput.focus(); else if (items[focusIdx]) items[focusIdx].focus();
      } else if (e.key === 'Escape') {
        homeResults.classList.remove('open');
        homeInput.setAttribute('aria-expanded', 'false');
        lastQuery = '';
      } else if (e.key === 'Enter' && focusIdx === -1 && homeResults.classList.contains('open')) {
        var first = homeResults.querySelector('.sr-item');
        if (first) first.click();
      }
    });
    homeInput.addEventListener('input', function () { cercaHome(homeInput.value); });
    if (homeBtn) homeBtn.addEventListener('click', function () { cercaHome(homeInput.value); if (homeInput.value.trim()) homeInput.focus(); });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#ricerca')) {
        homeResults.classList.remove('open');
        lastQuery = '';
      }
    });
  }
})();
