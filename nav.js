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
          <li><a href="vinile.html" data-page="vinile">🎵 Il Vinile del Convitto</a></li>
          <li><a href="solidarieta.html" data-page="solidarieta">🎶 La Solidarietà — 2019</a></li>
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
          <li><a href="genitori.html" data-page="genitori">👨‍👩‍👧 Per i Genitori</a></li>
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
          <li><a href="aggiornamenti.html" data-page="aggiornamenti">📢 Aggiornamenti</a></li>
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

      <a href="area-riservata.html" style="margin-left:.3rem;background:rgba(44,62,45,.35);border:1px solid rgba(184,146,42,.5);border-radius:4px;color:#D4AA4A !important;font-size:.72rem !important;padding:.4rem .75rem !important;display:inline-flex;align-items:center;gap:.3rem;" title="Area riservata famiglie">
        <svg viewBox="0 0 24 24" width="13" height="13" style="fill:#D4AA4A" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
        Famiglie
      </a>
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
        <li><a href="vinile.html">🎵 Il Vinile del Convitto</a></li>
        <li><a href="solidarieta.html">🎶 La Solidarietà — 2019</a></li>
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
        <li><a href="genitori.html">👨‍👩‍👧 Per i Genitori</a></li>
        <li><a href="contatti.html">Contattaci</a></li>
        <li><a href="area-riservata.html" style="color:var(--oro2);font-weight:700;">🔐 Area Riservata Famiglie</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Novità <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="notizie.html">Ultime notizie</a></li>
        <li><a href="aggiornamenti.html">📢 Aggiornamenti</a></li>
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
      <p style="font-size:.68rem;color:rgba(245,240,232,.3);margin-top:.35rem;font-style:italic">⏳ Sito in fase di staging — in attesa di attivazione del dominio istituzionale convitto.alberghierorieti.edu.it a seguito delle procedure amministrative di competenza. I contenuti sono autentici e prodotti dall'IPSSEOA "Costaggini" di Rieti.</p>
    </div>
  </div>
</footer>`;

  /* ── Inserimento nel DOM ── */
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  /* ── Skip link accessibilità ── */
  const skipCSS = document.createElement('style');
  skipCSS.textContent = '#skip-link{position:absolute;top:-40px;left:1rem;z-index:99999;background:var(--bosco,#2C3E2D);color:#fff;padding:.5rem 1rem;border-radius:0 0 6px 6px;font-family:sans-serif;font-size:.85rem;text-decoration:none;transition:top .15s;}#skip-link:focus{top:0;}';
  document.head.appendChild(skipCSS);
  const skipLink = document.createElement('a');
  skipLink.id = 'skip-link';
  skipLink.href = '#main';
  skipLink.textContent = 'Salta al contenuto principale';
  skipLink.setAttribute('tabindex','0');
  document.body.insertBefore(skipLink, document.body.firstChild);

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Caricamento chatbot ── */
  function loadChatbot() {
    const cbScript = document.createElement('script');
    cbScript.src = 'assistente.js';
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

  /* ── FAB — 3 cerchi fissi, sempre visibili ── */
  (function(){
    const isHome = !document.body.dataset.page || document.body.dataset.page === 'home';

    const CSS = `
      #fab-wrap{position:fixed;bottom:1.5rem;right:1.25rem;z-index:8900;display:flex;flex-direction:column;align-items:center;gap:.45rem;}
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

    // 3. Chatbot — creato qui, usato da assistente.js
    const fChat = document.createElement('button');
    fChat.id = 'cc-fab'; fChat.className = 'fab-c';
    fChat.setAttribute('aria-label','Apri assistente virtuale'); fChat.setAttribute('data-tip','Assistente');
    fChat.innerHTML = '🎓<span id="cc-badge" style="position:absolute;top:-2px;right:-2px;width:11px;height:11px;border-radius:50%;background:#B8922A;border:2px solid #fff;display:none" aria-hidden="true"></span>';
    wrap.appendChild(fChat);
  })();

  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));



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
#tr-menu{position:fixed;top:102px;right:1rem;z-index:8499;background:#fff;border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.16);border:1px solid #e5e7eb;overflow:hidden;display:none;flex-direction:column;}@media(max-width:700px){#tr-btn{top:60px;right:.6rem;padding:.3rem .55rem;font-size:.62rem;}#tr-menu{top:95px;right:.6rem;}}
#tr-menu.open{display:flex;}
.tr-opt{display:flex;align-items:center;gap:.55rem;padding:.55rem .9rem;cursor:pointer;font-family:'Source Sans 3',sans-serif;font-size:.78rem;color:#374151;transition:background .15s;border-bottom:1px solid #f3f4f6;}
.tr-opt:last-child{border-bottom:none;}.tr-opt:hover{background:#f3f4f6;}.tr-opt.act{background:rgba(44,62,45,.06);color:#2C3E2D;font-weight:700;}`;
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
    btn.onclick=e=>{e.stopPropagation();menu.classList.toggle('open');};
    document.addEventListener('click',()=>menu.classList.remove('open'));

    function selectLang(l){
      if (l.code !== 'it' && !sessionStorage.getItem('tr_consent')) {
        if (!confirm('La traduzione automatica utilizza il servizio Google Translate. Il testo delle pagine verrà elaborato da server Google. Continuare?')) return;
        sessionStorage.setItem('tr_consent','1');
      }
      btn.innerHTML='🌐 '+l.code.toUpperCase();
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
    .ws-sub { font-family:'Source Sans 3',sans-serif; font-size:.72rem; font-weight:400; letter-spacing:.2em; text-transform:uppercase; color:rgba(245,240,232,.4); animation:wsFadeUp .5s ease .7s both; }
    @keyframes wsFadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
    `;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

    const ws = document.createElement('div'); ws.id = 'welcome-screen';
    ws.innerHTML = `
      <img src="img/logo.png" class="ws-logo" alt="Logo Convitto Costaggini"/>
      <div class="ws-line"></div>
      <h1 class="ws-title">Dal <em>Terminillo</em> al mondo</h1>
      <p class="ws-sub">Convitto "Costaggini" · Rieti · dal 1971</p>
    `;
    document.body.appendChild(ws);
    ws.addEventListener('animationend', () => ws.remove());
    ws.addEventListener('click', () => ws.style.animation = 'wsFadeOut .3s ease forwards');
  })();

  /* ── 📊 CONTATORI ANIMATI ── */
  (function(){
    function animateCounter(el) {
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1800;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        // Easing ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * target);
        el.textContent = prefix + current.toLocaleString('it-IT') + suffix;
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
  })();

})();
