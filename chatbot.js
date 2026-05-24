// ══════════════════════════════════════════════════════════════
// CHATBOT COSTAGGINI — Widget AI iniettabile in tutte le pagine
// Usa l'API Anthropic via fetch — risponde solo del Convitto
// ══════════════════════════════════════════════════════════════

(function() {
'use strict';

// ── CSS ──────────────────────────────────────────────────────
const CSS = `
#cc-fab {
  position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, #2C3E2D, #1a3a1b);
  border: 2px solid rgba(184,146,42,.4);
  box-shadow: 0 4px 20px rgba(0,0,0,.35);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: transform .2s, box-shadow .2s;
  font-size: 1.4rem;
}
#cc-fab:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(0,0,0,.45); }
#cc-fab .cc-badge {
  position: absolute; top: -4px; right: -4px;
  width: 16px; height: 16px; border-radius: 50%;
  background: #B8922A; border: 2px solid #fff;
  display: none;
}
#cc-fab .cc-badge.show { display: block; }

#cc-panel {
  position: fixed; bottom: 5rem; right: 1.5rem; z-index: 9998;
  width: min(380px, calc(100vw - 2rem));
  height: min(520px, calc(100vh - 7rem));
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 48px rgba(0,0,0,.25);
  display: flex; flex-direction: column;
  transform: scale(.92) translateY(12px);
  opacity: 0; pointer-events: none;
  transition: transform .25s cubic-bezier(.4,0,.2,1), opacity .25s;
  overflow: hidden;
}
#cc-panel.open {
  transform: scale(1) translateY(0);
  opacity: 1; pointer-events: all;
}

.cc-head {
  background: linear-gradient(135deg, #2C3E2D, #1a3a1b);
  padding: .85rem 1rem;
  display: flex; align-items: center; gap: .65rem;
  flex-shrink: 0;
}
.cc-head-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(184,146,42,.2); border: 1.5px solid rgba(184,146,42,.4);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.cc-head-info { flex: 1; min-width: 0; }
.cc-head-name { font-family: 'Source Sans 3', sans-serif; font-size: .82rem; font-weight: 700; color: #fff; }
.cc-head-status { font-family: 'Source Sans 3', sans-serif; font-size: .68rem; color: rgba(245,240,232,.55); }
.cc-close {
  background: none; border: none; cursor: pointer;
  color: rgba(245,240,232,.5); font-size: 1.1rem; padding: 0;
  transition: color .15s; line-height: 1;
}
.cc-close:hover { color: #fff; }

.cc-messages {
  flex: 1; overflow-y: auto; padding: 1rem;
  display: flex; flex-direction: column; gap: .65rem;
  -webkit-overflow-scrolling: touch;
}
.cc-messages::-webkit-scrollbar { width: 3px; }
.cc-messages::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 2px; }

.cc-msg {
  max-width: 85%; line-height: 1.6;
  font-family: 'Source Sans 3', sans-serif; font-size: .82rem;
  padding: .6rem .85rem; border-radius: 12px; word-break: break-word;
}
.cc-msg.bot {
  background: #f3f4f6; color: #1a1a1a; border-radius: 4px 12px 12px 12px;
  align-self: flex-start;
}
.cc-msg.user {
  background: linear-gradient(135deg, #2C3E2D, #1a3a1b);
  color: #fff; border-radius: 12px 4px 12px 12px;
  align-self: flex-end;
}
.cc-msg.typing {
  background: #f3f4f6; align-self: flex-start;
  border-radius: 4px 12px 12px 12px; padding: .6rem 1rem;
}
.cc-typing-dots { display: flex; gap: 4px; align-items: center; height: 16px; }
.cc-typing-dots span {
  width: 6px; height: 6px; border-radius: 50%; background: #9ca3af;
  animation: cc-bounce .9s infinite;
}
.cc-typing-dots span:nth-child(2) { animation-delay: .15s; }
.cc-typing-dots span:nth-child(3) { animation-delay: .3s; }
@keyframes cc-bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }

.cc-suggestions {
  padding: 0 1rem .75rem;
  display: flex; flex-wrap: wrap; gap: .35rem;
  flex-shrink: 0;
}
.cc-sug {
  font-family: 'Source Sans 3', sans-serif; font-size: .68rem; font-weight: 600;
  padding: .3rem .7rem; border-radius: 12px;
  background: #f3f4f6; color: #374151;
  border: 1px solid #e5e7eb; cursor: pointer;
  transition: background .15s, border-color .15s; white-space: nowrap;
}
.cc-sug:hover { background: rgba(44,62,45,.08); border-color: #2C3E2D; color: #2C3E2D; }

.cc-input-row {
  padding: .75rem 1rem; border-top: 1px solid #f3f4f6;
  display: flex; gap: .5rem; align-items: flex-end;
  flex-shrink: 0;
}
#cc-input {
  flex: 1; min-height: 36px; max-height: 100px;
  padding: .5rem .85rem; border: 1.5px solid #e5e7eb; border-radius: 20px;
  font-family: 'Source Sans 3', sans-serif; font-size: .85rem; color: #1a1a1a;
  outline: none; resize: none; line-height: 1.5; overflow-y: auto;
  transition: border-color .15s;
}
#cc-input:focus { border-color: #2C3E2D; }
#cc-input::placeholder { color: #aaa; }
#cc-send {
  width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
  background: linear-gradient(135deg, #2C3E2D, #1a3a1b);
  border: none; cursor: pointer; color: #fff; font-size: .9rem;
  display: flex; align-items: center; justify-content: center;
  transition: opacity .2s;
}
#cc-send:disabled { opacity: .4; cursor: default; }
`;

// ── SISTEMA DI CONOSCENZA ─────────────────────────────────────
const SYSTEM = `Sei l'assistente virtuale del Convitto "Costaggini" di Rieti, annesso all'IPSSEOA "Ranieri Antonelli Costaggini".
Rispondi SOLO a domande riguardanti il Convitto, la scuola e i servizi correlati.
Sii conciso, cordiale e preciso. Risposte brevi (2-4 frasi al massimo). Mai elenchi lunghi.
Se non sai qualcosa, rimanda alla segreteria: 0746 201113 o rirh010007@istruzione.it

INFORMAZIONI CHIAVE:
- Indirizzo Convitto: Via Salaria s.n.c., 02100 Rieti
- Tel. Convitto: 0746 296862 | Tel. Istituto: 0746 201113
- Email: rirh010007@istruzione.it | convitto@alberghierorieti.it
- PEC: rirh010007@pec.istruzione.it
- DS: Prof. Giovanni Luca Barbonetti (reggenza)
- Coordinatore Convitto: Gianfranco Montorselli
- Cod. mecc.: RIRH010007 | C.F.: 80008130579
- Iscrizioni online: unica.istruzione.gov.it (gennaio-febbraio)
- Rette: deliberate annualmente dal CdI, richiedere alla segreteria
- Orari pasti: colazione 07:00-07:30 | pranzo 13:30-14:30 | cena 19:15-20:00
- Studio guidato: 15:30-17:15 ogni giorno
- Luci spente: 22:30
- Camere: triple con bagno privato, 5 piani (3 maschili, 2 femminili)
- Laboratorio Musicale: fondato da Michele Gaggiano e Dino Barba
- Semiconvitto: attivo dall'a.s. 2026/27
- Sito: https://computeaching2-cell.github.io/convitto-costaggini/

Per domande fuori tema rispondi gentilmente che puoi aiutare solo per il Convitto Costaggini.
Scrivi sempre in italiano.`;

const SUGGESTIONS = [
  'Come si fa l\'iscrizione?',
  'Quanto costa la retta?',
  'Che orari ci sono?',
  'C\'è il wi-fi?',
  'Posso vedere le camere?',
  'Come contattare la segreteria?',
];

// ── STATO ─────────────────────────────────────────────────────
let history = [];
let isTyping = false;

// ── BUILD UI ──────────────────────────────────────────────────
function build() {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // FAB
  const fab = document.createElement('button');
  fab.id = 'cc-fab';
  fab.setAttribute('aria-label', 'Apri assistente virtuale');
  fab.innerHTML = `<span>🎓</span><span class="cc-badge" id="cc-badge"></span>`;
  fab.onclick = togglePanel;
  document.body.appendChild(fab);

  // Pannello
  const panel = document.createElement('div');
  panel.id = 'cc-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Assistente virtuale Convitto Costaggini');
  panel.innerHTML = `
    <div class="cc-head">
      <div class="cc-head-avatar">🎓</div>
      <div class="cc-head-info">
        <div class="cc-head-name">Assistente del Convitto</div>
        <div class="cc-head-status">Rispondo subito alle tue domande</div>
      </div>
      <button class="cc-close" onclick="document.getElementById('cc-panel').classList.remove('open')" aria-label="Chiudi">✕</button>
    </div>
    <div class="cc-messages" id="cc-messages"></div>
    <div class="cc-suggestions" id="cc-sugs"></div>
    <div class="cc-input-row">
      <textarea id="cc-input" placeholder="Scrivi la tua domanda…" rows="1"></textarea>
      <button id="cc-send" aria-label="Invia" onclick="sendMsg()">➤</button>
    </div>`;
  document.body.appendChild(panel);

  // Input handlers
  const input = document.getElementById('cc-input');
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

  // Messaggio di benvenuto
  addMsg('bot', 'Ciao! 👋 Sono l\'assistente del Convitto Costaggini di Rieti. Posso aiutarti con informazioni su iscrizioni, servizi, orari e vita convittuale. Come posso aiutarti?');
  buildSuggestions();

  // Badge dopo 3 secondi se non aperto
  setTimeout(() => {
    if (!document.getElementById('cc-panel').classList.contains('open')) {
      document.getElementById('cc-badge').classList.add('show');
    }
  }, 3000);
}

function togglePanel() {
  const panel = document.getElementById('cc-panel');
  panel.classList.toggle('open');
  document.getElementById('cc-badge').classList.remove('show');
  if (panel.classList.contains('open')) {
    setTimeout(() => document.getElementById('cc-input').focus(), 300);
  }
}

function buildSuggestions() {
  const container = document.getElementById('cc-sugs');
  container.innerHTML = SUGGESTIONS.slice(0, 4).map(s =>
    `<button class="cc-sug" onclick="sendSug(this)">${s}</button>`
  ).join('');
}

function sendSug(btn) {
  const text = btn.textContent;
  document.getElementById('cc-input').value = text;
  sendMsg();
}

function addMsg(role, text) {
  const msgs = document.getElementById('cc-messages');
  const div = document.createElement('div');
  div.className = `cc-msg ${role}`;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function showTyping() {
  const msgs = document.getElementById('cc-messages');
  const div = document.createElement('div');
  div.className = 'cc-msg typing';
  div.id = 'cc-typing';
  div.innerHTML = `<div class="cc-typing-dots"><span></span><span></span><span></span></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('cc-typing');
  if (t) t.remove();
}

async function sendMsg() {
  if (isTyping) return;
  const input = document.getElementById('cc-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = 'auto';
  document.getElementById('cc-send').disabled = true;
  document.getElementById('cc-sugs').innerHTML = '';

  addMsg('user', text);
  history.push({ role: 'user', content: text });

  isTyping = true;
  showTyping();

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        system: SYSTEM,
        messages: history.slice(-10),
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || 'Mi dispiace, non riesco a rispondere in questo momento. Contatta la segreteria: 0746 201113.';
    hideTyping();
    addMsg('bot', reply);
    history.push({ role: 'assistant', content: reply });
  } catch (e) {
    hideTyping();
    addMsg('bot', 'Si è verificato un problema di connessione. Riprova o contatta la segreteria: 0746 201113.');
  }

  isTyping = false;
  document.getElementById('cc-send').disabled = false;
  buildSuggestions();
}

// ── INIT ──────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', build);
} else {
  build();
}

})();
