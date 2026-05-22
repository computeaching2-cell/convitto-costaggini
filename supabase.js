// ══════════════════════════════════════════════════════
// SUPABASE CLIENT — Convitto "Costaggini" — Rieti
// ══════════════════════════════════════════════════════

const SUPABASE_URL  = 'https://sawclsysqnjsvbobioqo.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhd2Nsc3lzcW5qc3Zib2Jpb3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MTY4MDksImV4cCI6MjA2MzE5MjgwOX0.eyJpc3MiOiJzdXBhYmFzZSJ9';

// Client leggero senza libreria esterna — usa fetch direttamente
const sb = {

  // ── SELECT ────────────────────────────────────────
  async select(table, filter = '') {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}?${filter}&order=created_at.desc`,
      { headers: {
          'apikey': SUPABASE_ANON,
          'Authorization': `Bearer ${SUPABASE_ANON}`,
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
          'apikey': SUPABASE_ANON,
          'Authorization': `Bearer ${SUPABASE_ANON}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(data)
      }
    );
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  // ── UPDATE (solo per admin con service key) ───────
  async update(table, id, data, serviceKey) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`,
      { method: 'PATCH',
        headers: {
          'apikey': serviceKey || SUPABASE_ANON,
          'Authorization': `Bearer ${serviceKey || SUPABASE_ANON}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(data)
      }
    );
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },

  // ── DELETE (solo per admin) ───────────────────────
  async delete(table, id, serviceKey) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`,
      { method: 'DELETE',
        headers: {
          'apikey': serviceKey || SUPABASE_ANON,
          'Authorization': `Bearer ${serviceKey || SUPABASE_ANON}`,
          'Content-Type': 'application/json'
        }
      }
    );
    if (!res.ok) throw new Error(await res.text());
    return true;
  }
};
