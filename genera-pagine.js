/* Rigenera le 10 pagine .html partendo dai dati (content.js, pages.js, business.js).
   Uso: dopo aver cambiato un testo, apri il terminale in questa cartella e scrivi:
     node genera-pagine.js
   Così il testo dentro i file .html (quello che legge Google senza JavaScript)
   resta sempre uguale a quello che il sito mostra con JavaScript. */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
for (const file of ['content.js', 'pages.js', 'business.js', 'script.js']) {
  eval(fs.readFileSync(path.join(dir, file), 'utf8'));
}

const { render, routes, title } = globalThis.SenadHtml;
const pages = [...routes, ...globalThis.SENAD_DATA.legalKeys];
const escape = value => String(value).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function description(page) {
  if (page === 'faq') return 'Senad – Häufige Fragen zu Fenstern, Türen, Laminat und Rollläden.';
  return `Senad – ${title('de', page)}. Fenster, Türen, Laminat und motorisierte Rollläden.`;
}

for (const page of pages) {
  const head = '<meta charset="utf-8">'
    + '<meta name="viewport" content="width=device-width, initial-scale=1">'
    + `<meta name="description" content="${escape(description(page))}">`
    + `<title>${escape(title('de', page))} | Senad</title>`
    + '<link rel="icon" href="assets/favicon.svg">'
    + '<link rel="stylesheet" href="style.css"><link rel="stylesheet" href="chat.css">'
    + '<script defer src="chat.js"></script><script defer src="content.js"></script>'
    + '<script defer src="pages.js"></script><script defer src="business.js"></script>'
    + '<script defer src="script.js"></script>';
  const noscript = '<noscript class="noscript">Bitte JavaScript für Sprachauswahl und Formular aktivieren. / Enable JavaScript for languages and the form. / Ενεργοποιήστε τη JavaScript για τις γλώσσες και τη φόρμα.</noscript>';
  const html = `<!doctype html>\n<html lang="de"><head>${head}</head><body data-page="${page}">${noscript}<div id="site">${render('de', page)}</div></body></html>\n`;
  fs.writeFileSync(path.join(dir, `${page}.html`), html);
  console.log('ok', `${page}.html`);
}
