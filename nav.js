/* ═══════════════════════════════════════════════════
   CONVITTO "COSTAGGINI" — RIETI
   shared.js — header, footer, drawer, reveal
═══════════════════════════════════════════════════ */

(function () {
  /* ── Inietta PA banner + Header ── */
  const headerHTML = `
<a class="skip" href="#main">Salta al contenuto</a>
<div id="pa" role="banner" aria-label="Intestazione istituzionale">
  <div class="pa-b">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.09v7.82L12 19.82 4 15.91V8.09L12 4.18z"/></svg>
    Repubblica Italiana — Istruzione Pubblica
  </div>
  <div><a href="trasparenza.html">Trasparenza</a> · <a href="area-riservata.html">Area riservata</a> · <a href="#" onclick="document.getElementById('pec-modal').style.display='flex';return false" aria-label="Mostra indirizzo PEC">PEC</a></div>
</div>
<header id="hdr">
  <div class="hdr-in">
    <a class="logo" href="index.html" aria-label="Home — Convitto Costaggini Rieti">
      <div class="logo-d" aria-hidden="true">
        <img src="img/logo.png" alt="Logo Alberghiero Costaggini Rieti" style="height:44px;width:auto;display:block"/>
      </div>
      <div class="logo-t">
        <span class="n">Convitto "Costaggini"</span>
        <span class="s">Istituto Alberghiero · Rieti</span>
        <span style="font-family:var(--fu);font-size:.52rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--oro2);opacity:.75;margin-top:1px;display:block">← Home</span>
      </div>
    </a>

    <!-- DESKTOP NAV CON DROPDOWN -->
    <nav id="dnav" aria-label="Principale">

      <!-- 1. IL CONVITTO -->
      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Il Convitto <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="il-convitto.html" data-page="il-convitto">Chi siamo &amp; storia</a></li>
          <li><a href="educatori.html" data-page="educatori">Gli Educatori</a></li>
          <li><a href="giornata-tipo.html" data-page="giornata-tipo">Una giornata tipo</a></li>
          <li><a href="laboratorio-musicale.html" data-page="laboratorio-musicale">♪ Laboratorio Musicale</a></li>
          <li><a href="comunita.html" data-page="comunita">🌟 La nostra Comunità</a></li>
        </ul>
      </div>

      <!-- 2. SERVIZI -->
      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Servizi <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="servizi.html" data-page="servizi">Servizi &amp; spazi</a></li>
          <li><a href="semiconvitto.html" data-page="semiconvitto">🌅 Semiconvitto</a></li>
          <li><a href="ammissione.html" data-page="ammissione">Come iscriversi</a></li>
          <li><a href="orientamento.html" data-page="orientamento">🗓 Orientamento &amp; Open Day</a></li>
          <li><a href="contatti.html" data-page="contatti">Contattaci</a></li>
        </ul>
      </div>

      <!-- 3. NOVITÀ -->
      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Novità <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="notizie.html" data-page="notizie">Ultime notizie</a></li>
          <li><a href="avvisi.html" data-page="avvisi">Avvisi &amp; circolari</a></li>
          <li><a href="calendario.html" data-page="calendario">Calendario eventi</a></li>
          <li><a href="natale2024.html" data-page="natale2024">🎄 Natale 2024</a></li>
        </ul>
      </div>

      <!-- 4. DIDATTICA -->
      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Didattica <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="scopri-talento.html" data-page="scopri-talento">🎮 Giochi &amp; Orientamento</a></li>
          <li><a href="ptof-guida.html" data-page="ptof-guida">Il PTOF spiegato</a></li>
          <li><a href="regolamento.html" data-page="regolamento">Regolamento di Convitto</a></li>
          <li><a href="trasparenza.html" data-page="trasparenza">Amministrazione Trasparente</a></li>
          <li><a href="organizzazione.html" data-page="organizzazione">Organizzazione</a></li>
        </ul>
      </div>

      <a href="#" id="nav-admin-btn" style="margin-left:.3rem;background:rgba(184,146,42,.18);border:1px solid rgba(184,146,42,.4);border-radius:4px;color:#D4AA4A !important;font-size:.72rem !important;padding:.4rem .75rem !important;display:inline-flex;align-items:center;gap:.3rem;" title="Pannello amministratori">
        <svg viewBox="0 0 24 24" width="13" height="13" style="fill:#D4AA4A" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1z"/></svg>
        Admin
      </a>
    </nav>

    <button id="brg" aria-label="Apri menu" aria-expanded="false" aria-controls="drw">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- MOBILE DRAWER CON ACCORDION -->
<nav id="drw" aria-label="Menu" role="navigation">
  <ul>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Il Convitto <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="il-convitto.html">Chi siamo &amp; storia</a></li>
        <li><a href="educatori.html">Gli Educatori</a></li>
        <li><a href="giornata-tipo.html">Una giornata tipo</a></li>
        <li><a href="laboratorio-musicale.html">♪ Laboratorio Musicale</a></li>
        <li><a href="comunita.html">🌟 La nostra Comunità</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Servizi <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="servizi.html">Servizi &amp; spazi</a></li>
        <li><a href="semiconvitto.html">🌅 Semiconvitto</a></li>
        <li><a href="ammissione.html">Come iscriversi</a></li>
        <li><a href="orientamento.html">🗓 Orientamento &amp; Open Day</a></li>
        <li><a href="contatti.html">Contattaci</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Novità <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="notizie.html">Ultime notizie</a></li>
        <li><a href="avvisi.html">Avvisi &amp; circolari</a></li>
        <li><a href="calendario.html">Calendario eventi</a></li>
        <li><a href="natale2024.html">🎄 Natale 2024</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Didattica <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="scopri-talento.html">🎮 Giochi &amp; Orientamento</a></li>
        <li><a href="ptof-guida.html">Il PTOF spiegato</a></li>
        <li><a href="regolamento.html">Regolamento di Convitto</a></li>
        <li><a href="trasparenza.html">Amministrazione Trasparente</a></li>
        <li><a href="organizzazione.html">Organizzazione</a></li>
      </ul>
    </li>

    <li><a href="#" id="drw-admin-btn" style="color:#D4AA4A;display:flex;align-items:center;gap:.5rem;">
      <svg viewBox="0 0 24 24" width="15" height="15" style="fill:#D4AA4A;flex-shrink:0"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1z"/></svg>
      Pannello Admin
    </a></li>

  </ul>
  <a href="contatti.html" class="cta">Contattaci</a>
</nav>`;

  /* ── Inietta Footer ── */
  const footerHTML = `
<footer>
  <div class="fw">
    <div class="ftop">

      <div class="fbrand">
        <p class="fn">Convitto "Costaggini"<br><span style="font-size:.72rem;font-weight:400;opacity:.7">IPSSEOA "R. A. Costaggini" · Rieti</span></p>
        <p>Residenza educativa di eccellenza per la formazione professionale nell'ospitalità e nelle arti culinarie. Ente pubblico — vigilanza MIM.</p>
        <!-- Dati istituzionali -->
        <div style="margin-top:1rem;display:flex;flex-direction:column;gap:.3rem">
          <p style="font-family:var(--fu);font-size:.62rem;color:rgba(245,240,232,.45);line-height:1.7">
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
          <li><a href="contatti.html">Contattaci</a></li>
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
          <li><a href="gestionale.html" style="color:var(--oro2);font-weight:700">🔐 Gestionale</a></li>
        </ul></div>

      </div>
    </div>
    <div class="fbot">
      <p>© 2025 Convitto Annesso — IPSSEOA "R. A. Costaggini" — Via Salaria s.n.c. — 02100 Rieti (RI) — C.F. 80008130579 — Cod. mecc. RIRH010007</p>
      <p><a href="trasparenza.html#accessibilita">Dichiarazione di Accessibilità</a> · <a href="privacy.html">Privacy</a> · <a href="cookie-policy.html">Cookie Policy</a> · <a href="trasparenza.html">Amm. Trasparente</a></p>
    </div>
  </div>
</footer>`;

  /* ── Inserimento nel DOM ── */
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Caricamento chatbot ── */
  function loadChatbot() {
    const cbScript = document.createElement('script');
    cbScript.src = 'chatbot.js';
    document.body.appendChild(cbScript);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadChatbot);
  } else {
    setTimeout(loadChatbot, 100);
  }

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
        <button onclick="document.getElementById('pec-modal').style.display='none'" style="background:none;border:none;color:rgba(245,240,232,.4);cursor:pointer;font-size:1rem;line-height:1">✕</button>
      </div>
      <p style="font-family:var(--fu);font-size:.92rem;font-weight:600;color:#fff;margin-bottom:.35rem">rirh010007@pec.istruzione.it</p>
      <p style="font-family:var(--fu);font-size:.65rem;color:rgba(245,240,232,.4);line-height:1.5">Posta Elettronica Certificata<br>IPSSEOA "R. A. Costaggini" — Rieti</p>
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

  /* ── FAB Admin: iniettato DOPO il footer, sempre ultimo nel body ── */
  /* Visibile solo sulla pagina avvisi */
  if (document.body.dataset.page === 'avvisi') {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="admin-fab-bar" style="
        position:fixed; bottom:1.5rem; right:1.25rem; z-index:9000;
      ">
        <button id="open-admin-btn" aria-label="Pannello amministratore" style="
          display:flex; align-items:center; gap:.55rem;
          background:linear-gradient(135deg,#2C3E2D,#3D5C3E);
          color:#F5F0E8; border:none; border-radius:50px; cursor:pointer;
          font-family:'Source Sans 3',sans-serif; font-size:.78rem; font-weight:700;
          letter-spacing:.06em; text-transform:uppercase;
          padding:.75rem 1.2rem .75rem 1rem; min-height:48px;
          box-shadow:0 4px 20px rgba(0,0,0,.4), 0 0 0 2px rgba(212,170,74,.35);
          white-space:nowrap; -webkit-tap-highlight-color:transparent;
        ">
          <svg viewBox="0 0 24 24" width="18" height="18" style="fill:#D4AA4A;flex-shrink:0" aria-hidden="true">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
          <span>Admin</span>
        </button>
      </div>`);
  }

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
  function openD() { drw.classList.add('on'); brg.setAttribute('aria-expanded','true'); brg.setAttribute('aria-label','Chiudi menu'); document.body.style.overflow='hidden'; }
  function closeD() { drw.classList.remove('on'); brg.setAttribute('aria-expanded','false'); brg.setAttribute('aria-label','Apri menu'); document.body.style.overflow=''; }
  brg.addEventListener('click', () => drw.classList.contains('on') ? closeD() : openD());
  drw.querySelectorAll('a').forEach(a => a.addEventListener('click', closeD));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeD(); });

  /* ── Bottone Admin nel menu ── */
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('#nav-admin-btn, #drw-admin-btn');
    if (!btn) return;
    e.preventDefault();
    window.location.href = 'admin.html';
  });

  /* ── Bottone fluttuante "Home" su tutte le pagine interne ── */
  (function() {
    const pg = document.body.dataset.page;
    if (pg && pg !== 'home') {
      const a = document.createElement('a');
      a.href = 'index.html';
      a.id = 'fab-home';
      a.setAttribute('aria-label', 'Torna alla Home');
      a.title = 'Home';
      a.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true" style="width:17px;height:17px;fill:#D4AA4A;flex-shrink:0">' +
        '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>' +
        '<span style="font-family:\'Source Sans 3\',sans-serif;font-size:.76rem;font-weight:700;' +
        'letter-spacing:.06em;text-transform:uppercase;color:#F5F0E8">Home</span>';
      a.style.cssText =
        'position:fixed;bottom:1.5rem;right:1.25rem;z-index:8000;' +
        'display:flex;align-items:center;gap:.42rem;' +
        'background:linear-gradient(135deg,#2C3E2D,#3D5C3E);' +
        'text-decoration:none;border-radius:50px;' +
        'padding:.62rem 1.05rem .62rem .85rem;min-height:44px;' +
        'box-shadow:0 4px 18px rgba(0,0,0,.32),0 0 0 2px rgba(184,146,42,.28);' +
        'transition:transform .18s,box-shadow .18s;' +
        '-webkit-tap-highlight-color:transparent;';
      a.addEventListener('mouseenter', () => {
        a.style.transform = 'translateY(-2px)';
        a.style.boxShadow = '0 8px 24px rgba(0,0,0,.4),0 0 0 2px rgba(184,146,42,.42)';
      });
      a.addEventListener('mouseleave', () => {
        a.style.transform = '';
        a.style.boxShadow = '0 4px 18px rgba(0,0,0,.32),0 0 0 2px rgba(184,146,42,.28)';
      });
      document.body.appendChild(a);
    }
  })();

  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));

  /* ── Bottone Torna in cima ── */
  (function(){
    const btn = document.createElement('button');
    btn.id = 'fab-top';
    btn.setAttribute('aria-label', 'Torna in cima');
    btn.title = 'Torna su';
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>' +
      '<span id="fab-top-label" style="' +
        'position:absolute;right:52px;top:50%;transform:translateY(-50%);' +
        'background:rgba(12,20,13,.88);color:#D4AA4A;' +
        'font-family:var(--fu,\'Source Sans 3\',sans-serif);font-size:.62rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;' +
        'padding:.3rem .7rem;border-radius:4px;white-space:nowrap;' +
        'opacity:0;transition:opacity .2s;pointer-events:none;' +
        'border:1px solid rgba(184,146,42,.25);backdrop-filter:blur(4px)' +
      '">Torna su</span>';
    btn.style.cssText =
      'position:fixed;bottom:6rem;right:1.25rem;z-index:8000;' +
      'width:44px;height:44px;border-radius:50%;border:none;cursor:pointer;' +
      'background:linear-gradient(135deg,#2C3E2D,#3D5C3E);' +
      'box-shadow:0 4px 14px rgba(0,0,0,.3),0 0 0 2px rgba(184,146,42,.25);' +
      'display:flex;align-items:center;justify-content:center;' +
      'opacity:0;transform:translateY(12px);' +
      'transition:opacity .3s,transform .3s,box-shadow .2s;' +
      'pointer-events:none;';
    btn.querySelector('svg').style.cssText = 'width:20px;height:20px;fill:#D4AA4A;flex-shrink:0;';
    btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 8px 22px rgba(0,0,0,.4),0 0 0 2px rgba(184,146,42,.45)';
      document.getElementById('fab-top-label').style.opacity = '1';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = '0 4px 14px rgba(0,0,0,.3),0 0 0 2px rgba(184,146,42,.25)';
      document.getElementById('fab-top-label').style.opacity = '0';
    });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
        btn.style.pointerEvents = 'auto';
      } else {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(12px)';
        btn.style.pointerEvents = 'none';
      }
    }, {passive:true});
  })();

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

})();
