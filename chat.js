(function () {
  var L = (new URLSearchParams(location.search).get('lang')) || document.documentElement.lang || 'de';
  if (['de', 'en', 'el'].indexOf(L) < 0) L = 'de';
  var B = globalThis.SENAD_BUSINESS || {};
  function lk(p, t) { return '<a href="' + p + '.html?lang=' + L + '">' + t + '</a>'; }
  var T = {
    de: { title: 'Senad Assistent', ph: 'Nachricht schreiben…', send: 'Senden',
      faq: 'Antworten auf häufige Fragen: ', faqT: 'Häufige Fragen',
      hello: 'Hallo! Wie können wir helfen?',
      thanks: 'Gern geschehen!',
      termin: 'Einen Termin oder ein Angebot erhalten Sie hier: ', terminT: 'Termin / Angebot',
      anf: 'Anfahrt und Standort: ', anfT: 'Anfahrt',
      kon: 'Kontakt: ', konT: 'Kontaktseite',
      gal: 'Fotos unserer Arbeiten: ', galT: 'Galerie',
      ab: 'Mehr über uns: ', abT: 'Über uns',
      lei: 'Unsere Leistungen (Fenster, Türen, Laminat, Rollläden): ', leiT: 'Leistungen',
      leg: 'Rechtliche Informationen: ', legT: 'Impressum / Datenschutz',
      fb: 'Dazu helfen wir Ihnen gern persönlich. Bitte nutzen Sie:', },
    en: { title: 'Senad Assistant', ph: 'Write a message…', send: 'Send',
      faq: 'Answers to common questions: ', faqT: 'FAQ',
      hello: 'Hello! How can we help?',
      thanks: 'You are welcome!',
      termin: 'You can request an appointment or a quote here: ', terminT: 'Appointment / Quote',
      anf: 'Directions and location: ', anfT: 'Directions',
      kon: 'Contact: ', konT: 'Contact page',
      gal: 'Photos of our work: ', galT: 'Gallery',
      ab: 'More about us: ', abT: 'About us',
      lei: 'Our services (windows, doors, laminate, shutters): ', leiT: 'Services',
      leg: 'Legal information: ', legT: 'Imprint / Privacy',
      fb: 'We are happy to help you personally. Please use:', },
    el: { title: 'Βοηθός Senad', ph: 'Γράψτε ένα μήνυμα…', send: 'Αποστολή',
      faq: 'Απαντήσεις σε συχνές ερωτήσεις: ', faqT: 'Ερωτήσεις',
      hello: 'Γεια σας! Πώς μπορούμε να βοηθήσουμε;',
      thanks: 'Παρακαλούμε!',
      termin: 'Ραντεβού ή προσφορά εδώ: ', terminT: 'Ραντεβού / Προσφορά',
      anf: 'Τοποθεσία και οδηγίες: ', anfT: 'Πώς θα έρθετε',
      kon: 'Επικοινωνία: ', konT: 'Σελίδα επικοινωνίας',
      gal: 'Φωτογραφίες των έργων μας: ', galT: 'Γκαλερί',
      ab: 'Περισσότερα για εμάς: ', abT: 'Σχετικά με εμάς',
      lei: 'Οι υπηρεσίες μας (παράθυρα, πόρτες, laminate, ρολά): ', leiT: 'Υπηρεσίες',
      leg: 'Νομικές πληροφορίες: ', legT: 'Impressum / Απόρρητο',
      fb: 'Θα χαρούμε να σας βοηθήσουμε προσωπικά. Παρακαλούμε χρησιμοποιήστε:', }
  }[L];

  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function has(t, list) { return list.some(function (w) { return t.indexOf(w) >= 0; }); }

  function reply(raw) {
    var t = norm(raw);
    if (has(t, ['impressum', 'datenschutz', 'agb', 'widerruf', 'privacy', 'imprint', 'terms', 'απορρητο', 'ορους'])) return T.leg + lk('impressum', T.legT);
    if (has(t, ['faq', 'haeufig', 'häufig', 'frage', 'question', 'ερωτηση', 'ερωτησεις'])) return T.faq + lk('faq', T.faqT);
    if (has(t, ['termin', 'angebot', 'preis', 'kosten', 'buchen', 'appointment', 'quote', 'price', 'book', 'offer', 'ραντεβου', 'προσφορα', 'τιμη', 'κοστος'])) return T.termin + lk('termin', T.terminT);
    if (has(t, ['anfahrt', 'adresse', 'wo ', 'standort', 'oeffnung', 'öffnung', 'address', 'where', 'location', 'directions', 'hours', 'διευθυνση', 'ποτε', 'που ', 'ωραριο', 'τοποθεσια'])) return T.anf + lk('anfahrt', T.anfT);
    if (has(t, ['kontakt', 'telefon', 'email', 'mail', 'anrufen', 'contact', 'phone', 'call', 'επικοινων', 'τηλεφωνο'])) return T.kon + lk('kontakt', T.konT);
    if (has(t, ['galerie', 'foto', 'bild', 'gallery', 'photo', 'picture', 'γκαλερι', 'φωτογραφ'])) return T.gal + lk('galerie', T.galT);
    if (has(t, ['ueber', 'über', 'uber', 'firma', 'about', 'who', 'company', 'σχετικα', 'εταιρει', 'ποιοι'])) return T.ab + lk('ueber-uns', T.abT);
    if (has(t, ['fenster', 'tuer', 'tür', 'laminat', 'boden', 'rolllad', 'leistung', 'window', 'door', 'floor', 'shutter', 'service', 'παραθυρ', 'πορτ', 'δαπεδ', 'ρολα', 'υπηρεσ'])) return T.lei + lk('leistungen', T.leiT);
    if (has(t, ['danke', 'thanks', 'thank', 'ευχαριστ'])) return T.thanks;
    if (t.length < 15 && has(t, ['hallo', 'hi', 'hello', 'guten', 'moin', 'hey', 'γεια', 'καλημερα', 'καλησπερα'])) return T.hello;
    var ul = '<ul><li>' + lk('kontakt', T.konT) + '</li><li>' + lk('termin', T.terminT) + '</li>';
    if (B.phone) ul += '<li><a href="tel:' + B.phone.replace(/[^+\d]/g, '') + '">' + B.phone.replace(/[<>&"]/g, '') + '</a></li>';
    return T.fb + ul + '</ul>';
  }

  function build() {
    var btn = document.createElement('button');
    btn.id = 'sc-btn'; btn.type = 'button'; btn.setAttribute('aria-label', T.title); btn.textContent = '💬';
    var box = document.createElement('div');
    box.id = 'sc-box';
    box.innerHTML = '<div id="sc-head"><span></span><button type="button" aria-label="×">×</button></div><div id="sc-msgs"></div><form id="sc-form"><input id="sc-in" type="text" autocomplete="off"><button type="submit"></button></form>';
    document.body.appendChild(btn); document.body.appendChild(box);
    var msgs = box.querySelector('#sc-msgs'), inp = box.querySelector('#sc-in');
    box.querySelector('#sc-head span').textContent = T.title;
    box.querySelector('#sc-form button').textContent = T.send;
    inp.placeholder = T.ph;
    function add(cls, html, isText) {
      var d = document.createElement('div'); d.className = 'sc-m ' + cls;
      if (isText) d.textContent = html; else d.innerHTML = html;
      msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    }
    add('sc-b', 'Willkommen bei Senad! Wie können wir helfen?<br>Welcome to Senad! How can we help?<br>Καλώς ήρθατε στη Senad! Πώς μπορούμε να βοηθήσουμε;', false);
    btn.addEventListener('click', function () { box.classList.toggle('open'); if (box.classList.contains('open')) inp.focus(); });
    box.querySelector('#sc-head button').addEventListener('click', function () { box.classList.remove('open'); });
    box.querySelector('#sc-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var v = inp.value.trim(); if (!v) return;
      add('sc-u', v, true); inp.value = '';
      add('sc-b', reply(v), false);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
