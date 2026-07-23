#!/usr/bin/env python3
"""
Inserisce automaticamente i blocchi JSON-LD (Schema.org) nelle pagine
HTML del sito Convitto Costaggini.

USO:
  1. Copia questo file nella cartella radice del repository
     (quella che contiene index.html, contatti.html, ecc.)
  2. Esegui:  python3 inserisci_schema_org.py
  3. Controlla i file modificati con `git diff`
  4. Se va bene: git add -A && git commit -m "Aggiunge dati strutturati Schema.org" && git push

Il blocco FAQ e il blocco Event (Open Day) sono ESCLUSI di proposito:
il primo perché mancano 2 domande su 6, il secondo perché la data non
è ancora confermata. Vanno completati e inseriti a mano in un secondo
momento (istruzioni in fondo al file).

Lo script:
- non tocca un file se il blocco è già presente (evita duplicati se lo rilanci)
- inserisce subito prima di </head>
- salta silenziosamente i file che non trova (ti avvisa a schermo)
"""

import re
from pathlib import Path

SITE_URL = "https://convitto-costaggini.github.io/convitto-costaggini"

BLOCKS = {
    "index.html": """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Convitto \\"Costaggini\\"",
  "alternateName": "Convitto annesso all'IPSSEOA \\"R. A. Costaggini\\"",
  "description": "Convitto annesso all'Istituto Alberghiero \\"Costaggini\\" di Rieti — residenza per studenti delle arti culinarie e dell'ospitalità, attivo dal 1971.",
  "url": "SITE_URL/",
  "foundingDate": "1971",
  "telephone": "+39 0746 296862",
  "email": "convitto@alberghierorieti.it",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Salaria s.n.c.",
    "postalCode": "02100",
    "addressLocality": "Rieti",
    "addressRegion": "Lazio",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.4056,
    "longitude": 12.8624
  },
  "sameAs": [
    "https://www.facebook.com/alberghierorieti/",
    "https://www.alberghierorieti.edu.it/il-convitto/"
  ],
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "name": "IPSSEOA \\"R. A. Costaggini\\"",
    "url": "https://www.alberghierorieti.edu.it"
  }
}
</script>""",

    "contatti.html": """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Convitto \\"Costaggini\\"",
  "url": "SITE_URL/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Salaria s.n.c.",
    "postalCode": "02100",
    "addressLocality": "Rieti",
    "addressRegion": "Lazio",
    "addressCountry": "IT"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Convitto",
      "telephone": "+39 0746 296862",
      "email": "convitto@alberghierorieti.it",
      "areaServed": "IT",
      "availableLanguage": "Italian"
    },
    {
      "@type": "ContactPoint",
      "contactType": "Segreteria Istituto",
      "telephone": "+39 0746 201113",
      "email": "rirh010007@istruzione.it",
      "areaServed": "IT",
      "availableLanguage": "Italian"
    }
  ]
}
</script>""",

    "ammissione.html": """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Come iscrivere un figlio al Convitto \\"Costaggini\\"",
  "description": "Procedura di ammissione al Convitto annesso all'IPSSEOA \\"Costaggini\\" di Rieti: dall'Open Day alla conferma dell'iscrizione.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open Day e orientamento",
      "text": "Visita gli ambienti del Convitto di persona o tramite il tour virtuale a 360°, partecipa all'Open Day tra novembre e dicembre e prenota una visita guidata."
    },
    {
      "@type": "HowToStep",
      "name": "Iscrizione online sul portale MIM",
      "text": "Le iscrizioni si effettuano esclusivamente online tramite la piattaforma Iscrizioni Online del Ministero dell'Istruzione e del Merito, con SPID, CIE o CNS del genitore."
    },
    {
      "@type": "HowToStep",
      "name": "Colloquio di orientamento",
      "text": "La scuola contatta la famiglia per un colloquio conoscitivo con il Dirigente Scolastico o un educatore referente, con presentazione del Regolamento di Convitto."
    },
    {
      "@type": "HowToStep",
      "name": "Conferma iscrizione e prima rata",
      "text": "A giugno viene pubblicato l'avviso ufficiale di conferma iscrizione. La famiglia restituisce la domanda compilata e versa la prima rata entro i termini indicati."
    },
    {
      "@type": "HowToStep",
      "name": "Benvenuto al Convitto",
      "text": "A settembre i nuovi convittori vengono accolti con una giornata di ambientamento: visita degli spazi, assegnazione della camera e presentazione degli educatori."
    }
  ]
}
</script>""",
}

MARKER = "application/ld+json"


def process_file(filename: str, block_template: str, base_dir: Path) -> str:
    path = base_dir / filename
    if not path.exists():
        return f"SALTATO (file non trovato): {filename}"

    content = path.read_text(encoding="utf-8")

    if MARKER in content:
        return f"SALTATO (già presente un blocco ld+json): {filename}"

    block = block_template.replace("SITE_URL", SITE_URL)

    if "</head>" not in content:
        return f"SALTATO (nessun tag </head> trovato): {filename}"

    new_content = content.replace("</head>", block + "\n</head>", 1)
    path.write_text(new_content, encoding="utf-8")
    return f"FATTO: {filename}"


def main():
    base_dir = Path(__file__).resolve().parent
    print(f"Cartella di lavoro: {base_dir}\n")
    for filename, block in BLOCKS.items():
        print(process_file(filename, block, base_dir))

    print("""
--------------------------------------------------------------
Fatto. Ora:
  1. git diff          (controlla le modifiche)
  2. git add -A
  3. git commit -m "Aggiunge dati strutturati Schema.org"
  4. git push

FAQ e Open Day NON sono stati inseriti (dati incompleti / data da
confermare) — vedi note nel file schema-org-convitto.md.

QUANDO IL DOMINIO UFFICIALE SARÀ ATTIVO, per aggiornare tutti gli URL
in un colpo solo, lancia (dalla cartella del repository):

  grep -rl 'convitto-costaggini.github.io/convitto-costaggini' --include='*.html' . \\
    | xargs sed -i 's|https://convitto-costaggini.github.io/convitto-costaggini|https://NUOVO-DOMINIO|g'

(sostituendo NUOVO-DOMINIO con il dominio vero, senza slash finale)
--------------------------------------------------------------
""")


if __name__ == "__main__":
    main()
