# Stato del progetto — Senad (idea / dimostrazione)

Sito dimostrativo per un montatore di finestre, porte, laminato e rollladen. Nessun dato reale: telefono, email e indirizzo sono vuoti (business.js nella versione classica). Non inventarli.

## Fatto (03/10/2026)
- Chat fissa in 3 lingue (DE/EN/EL) con benvenuto nelle tre lingue.
- Home con schede servizi e foto, passi del lavoro, invito finale.
- Pagina domande frequenti (FAQ), nelle tre lingue.
- Versione classica: chat.js + chat.css, faq.html. Versione dinamica: components/senad-chat.tsx, lib/extra.ts, app/faq/page.tsx.

## Da fare quando ci sono i dati reali
- Inserire telefono, email, indirizzo, orari; testi legali da far controllare a un professionista.
- Versione dinamica: provarla sul PC (AVVIA-SITO.cmd) e ripubblicarla su Cloudflare.
- Versione classica: pubblicabile come la Trattoria (GitHub Pages).

## Regole
Lingua: italiano, messaggi brevi. Grafica diversa dalla Trattoria (niente tricolore).

## Pubblicazione (da RIEPILOGO-SENAD del 03/10/2026)
- Dinamico online: https://senad-finestre-dinamico.gerard-demishaj.workers.dev/ (admin: /admin) — repo GitHub Geri51/Senad-Finestre-dinamico, Worker Cloudflare con database D1.
- Classico online: https://senad-finestre-html.gerard-demishaj.workers.dev/ — repo GitHub Geri51/senad-finestre-html, file statici (modulo non collegato).
- Si pubblica con GitHub Desktop: Commit, poi Push. Dopo 1-2 minuti Cloudflare ripubblica da solo. Commit e push solo quando lo chiede l'utente.
- Le modifiche del 03/10 (chat, FAQ, home con foto) NON sono ancora su GitHub.
- Ancora da fare: Impressum e Datenschutz con dati veri (il modulo ora salva i dati, le bozze dicono di no), SEO (layout.tsx ha noindex), notifiche Telegram o email, dominio, cambio password admin.
