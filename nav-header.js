/* ═══════════════════════════════════════════════════
   CONVITTO "COSTAGGINI" — RIETI
   nav-header.js — SOLO header/skip-link/drawer, caricato per primo
   nel <body> per evitare il Cumulative Layout Shift (CLS):
   viene iniettato PRIMA che il resto della pagina sia renderizzato.
   Footer, dropdown, reveal-on-scroll, chatbot ecc. restano in nav.js.
═══════════════════════════════════════════════════ */

(function () {
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
        <picture><source type="image/webp" srcset="img/logo.webp"/><img src="img/logo.png" alt="Logo Alberghiero Costaggini Rieti" style="height:44px;width:auto;display:block" width="120" height="107"/></picture>
      </div>
      <div class="logo-t">
        <span class="n">Convitto "Costaggini"</span>
        <span class="s">Istituto Alberghiero · Rieti</span>
        <span style="font-family:var(--fu);font-size:.52rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#D4AA4A;margin-top:1px;display:block">← Home</span>
      </div>
    </a>

    <nav id="dnav" aria-label="Principale">

      <a href="ammissione.html" style="margin-right:.5rem;background:linear-gradient(135deg,var(--oro2),var(--oro3));border-radius:4px;color:var(--bosco) !important;font-size:.75rem !important;font-weight:700 !important;letter-spacing:.06em;text-transform:uppercase;padding:.5rem 1rem !important;display:inline-flex;align-items:center;gap:.35rem;" title="Come iscriversi al Convitto">
        📋 Come iscriversi
      </a>

      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Il Convitto <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="il-convitto.html" data-page="il-convitto">Chi siamo &amp; storia</a></li>
          <li><a href="educatori.html" data-page="educatori">Gli Educatori</a></li>
          <li><a href="giornata-tipo.html" data-page="giornata-tipo">Una giornata tipo</a></li>
          <li><a href="premio-merito.html" data-page="premio-merito">🏅 Premio al Merito</a></li>
          
          <li style="padding: .4rem .9rem; font-family: var(--fu); font-size: .58rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--oro2); opacity: .8;">♪ Laboratorio Musicale</li>
          <li style="padding-left: .6rem;"><a href="laboratorio-musicale.html" data-page="laboratorio-musicale">└ Accedi al Laboratorio</a></li>
          <li style="padding-left: .6rem;"><a href="vinile.html" data-page="vinile">└ 📻 Vinile</a></li>
          <li style="padding-left: .6rem;"><a href="solidarieta.html" data-page="solidarieta">└ 🤝 La Solidarietà</a></li>
          <li style="padding-left: .6rem;"><a href="abbraccio-amatrice.html" data-page="abbraccio-amatrice">└ 🕯️ Quando Rieti abbracciò Amatrice</a></li>
          
          <li><a href="comunita.html" data-page="comunita">🌟 La nostra Comunità</a></li>
        </ul>
      </div>

      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Servizi <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="servizi.html" data-page="servizi">Servizi &amp; spazi</a></li>
          <li><a href="semiconvitto.html" data-page="semiconvitto">🌅 Semiconvitto</a></li>
          <li><a href="orientamento.html" data-page="orientamento">🗓 Orientamento &amp; Open Day</a></li>
          <li><a href="genitori.html" data-page="genitori">👨‍👩‍👧 Per i Genitori</a></li>
          <li><a href="bullismo.html" data-page="bullismo">🛡️ Bullismo e Cyberbullismo</a></li>
          <li><a href="come-arrivare.html" data-page="come-arrivare">🚌 Come arrivare</a></li>
          <li><a href="contatti.html" data-page="contatti">Contattaci</a></li>
        </ul>
      </div>

      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Novità <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="notizie.html" data-page="notizie">Ultime notizie</a></li>
          <li><a href="menu-settimana.html" data-page="menu-settimana">🍽️ Menu della Settimana</a></li>
          <li><a href="in-2-minuti.html" data-page="in-2-minuti">⚡ In 2 Minuti</a></li>
          <li><a href="calendario.html" data-page="calendario">Calendario eventi</a></li>
        </ul>
      </div>

      <div class="dd-wrap">
        <button class="dd-btn" aria-haspopup="true" aria-expanded="false">
          Didattica <svg viewBox="0 0 24 24" class="dd-arrow"><path d="M7 10l5 5 5-5z"/></svg>
        </button>
        <ul class="dd-menu" role="menu">
          <li><a href="scopri-talento.html" data-page="scopri-talento">🎮 Giochi &amp; Orientamento</a></li>
          <li><a href="regolamento.html" data-page="regolamento">📜 Regolamento</a></li>
          <li><a href="ptof-guida.html" data-page="ptof-guida">PTOF</a></li>
          <li><a href="trasparenza.html" data-page="trasparenza">Trasparenza</a></li>
          <li><a href="organizzazione.html" data-page="organizzazione">Organizzazione</a></li>
          <li><a href="mappa-sito.html" data-page="mappa-sito">🗺️ Mappa del Sito</a></li>
        </ul>
      </div>
      <a href="area-riservata.html" style="margin-left:.3rem;background:rgba(44,62,45,.35);border:1px solid rgba(184,146,42,.5);border-radius:4px;color:#D4AA4A !important;font-size:.72rem !important;padding:.4rem .75rem !important;display:inline-flex;align-items:center;gap:.3rem;" title="Area riservata famiglie">
        <svg viewBox="0 0 24 24" width="13" height="13" style="fill:#D4AA4A" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
        Famiglie
      </a>
    </nav>

    <button id="brg" aria-label="Apri menu" aria-expanded="false" aria-controls="drw">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<nav id="drw" aria-label="Menu" role="navigation">
  <ul>

    <li><a href="ammissione.html" style="background:linear-gradient(135deg,var(--oro2),var(--oro3));color:var(--bosco) !important;font-weight:700;border-radius:4px;padding:.7rem .9rem;display:flex;align-items:center;gap:.4rem;text-transform:uppercase;font-size:.78rem;letter-spacing:.05em;margin-bottom:.3rem;">
      📋 Come iscriversi
    </a></li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Il Convitto <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="il-convitto.html">Chi siamo &amp; storia</a></li>
        <li><a href="educatori.html">Gli Educatori</a></li>
        <li><a href="giornata-tipo.html">Una giornata tipo</a></li>
        <li><a href="premio-merito.html">🏅 Premio al Merito</a></li>
        
        <li style="padding: .5rem .5rem .2rem; font-family: var(--fu); font-size: .62rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--oro2); opacity: .85;">♪ Laboratorio Musicale</li>
        <li style="padding-left: .75rem;"><a href="laboratorio-musicale.html">Accedi al Laboratorio</a></li>
        <li style="padding-left: .75rem;"><a href="vinile.html">📻 Vinile</a></li>
        <li style="padding-left: .75rem;"><a href="solidarieta.html">🤝 La Solidarietà</a></li>
        <li style="padding-left: .75rem;"><a href="abbraccio-amatrice.html">🕯️ Quando Rieti abbracciò Amatrice</a></li>
        
        <li><a href="comunita.html">🌟 La nostra Comunità</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Servizi <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="servizi.html">Servizi &amp; spazi</a></li>
        <li><a href="semiconvitto.html">🌅 Semiconvitto</a></li>
        <li><a href="orientamento.html">🗓 Orientamento &amp; Open Day</a></li>
        <li><a href="genitori.html">👨‍👩‍👧 Per i Genitori</a></li>
        <li><a href="bullismo.html">🛡️ Bullismo e Cyberbullismo</a></li>
        <li><a href="come-arrivare.html">🚌 Come arrivare</a></li>
        <li><a href="contatti.html">Contattaci</a></li>
        <li><a href="area-riservata.html" style="color:var(--oro2);font-weight:700;"> Area Riservata Famiglie</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Novità <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="notizie.html">Ultime notizie</a></li>
        <li><a href="menu-settimana.html">🍽️ Menu della Settimana</a></li>
        <li><a href="in-2-minuti.html">⚡ In 2 Minuti</a></li>
        <li><a href="calendario.html">Calendario eventi</a></li>
      </ul>
    </li>

    <li class="drw-group">
      <button class="drw-acc" aria-expanded="false">Didattica <svg viewBox="0 0 24 24" class="drw-arrow"><path d="M7 10l5 5 5-5z"/></svg></button>
      <ul class="drw-sub">
        <li><a href="scopri-talento.html">🎮 Giochi &amp; Orientamento</a></li>
        <li><a href="regolamento.html">Regolamento di Convitto</a></li>
        <li><a href="ptof-guida.html">Il PTOF spiegato</a></li>
        <li><a href="trasparenza.html">Amministrazione Trasparente</a></li>
        <li><a href="organizzazione.html">Organizzazione</a></li>
        <li><a href="mappa-sito.html">🗺️ Mappa del Sito</a></li>
      </ul>
    </li>

    <li><a href="area-riservata.html" style="color:var(--oro2);font-weight:700;display:flex;align-items:center;gap:.5rem;padding:.6rem 0;">
      <svg viewBox="0 0 24 24" width="15" height="15" style="fill:var(--oro2);flex-shrink:0"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
      Area Riservata Famiglie
    </a></li>

  </ul>
  <a href="contatti.html" class="cta">Contattaci</a>
</nav>`;

  document.currentScript.insertAdjacentHTML('afterend', headerHTML);
})();
