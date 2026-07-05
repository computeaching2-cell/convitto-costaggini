// ══════════════════════════════════════════════════════
// SUPABASE CLIENT — Convitto "Costaggini" — Rieti
// ══════════════════════════════════════════════════════

const SUPABASE_URL  = 'https://sawclsysqnjsvbobioqo.supabase.co';
const SUPABASE_PUB = 'sb_publishable_sUgIVDar21Sf5Dtr3D7nhQ_kpOB57FQ';

// Client leggero senza libreria esterna — usa fetch direttamente
const sb = {

  // ── SELECT ────────────────────────────────────────
  async select(table, filter = '') {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}?${filter}&order=created_at.desc`,
      { headers: {
          'apikey': SUPABASE_PUB,
          'Authorization': `Bearer ${SUPABASE_PUB}`,
          'Content-Type': 'application/json'
      }}
    );
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  // ── INSERT ────────────────────────────────────────
  async insert(table, data) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}`,
      { method: 'POST',
        headers: {
          'apikey': SUPABASE_PUB,
          'Authorization': `Bearer ${SUPABASE_PUB}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(data)
      }
    );
    if (!res.ok) throw new Error(await res.text());
    return res.status === 201 ? {} : await res.json();
  }
};
