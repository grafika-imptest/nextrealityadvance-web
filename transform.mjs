// Úpravy HTML šablony NEXT obsahem pobočky. Běží v buildu nad každou stránkou.
import * as cheerio from 'cheerio';
import { OFFICE, TEAM, STATS, ABOUT, BENEFITS_LIST, BENEFITS_BOXES, ESTIMATE, DIVORCE, CHOCENICE } from './content.mjs';

const PROJECT_URL = 'chocenice.html';
const IMG = 'img/';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const tel = p => 'tel:' + p.replace(/\s/g, '');
const paras = list => list.map(p => `<p>${esc(p)}</p>`).join('');
const person = slug => TEAM.find(t => t.slug === slug);

// značka „text/data ze šablony" – co v náhledu ještě není obsah pobočky
const tplNote = text => `<div class="nra-tpl-note">${esc(text)}</div>`;

function setImg($, el, src, alt) {
  const pic = $(el).closest('picture');
  if (pic.length) pic.find('source').remove();
  $(el).attr('src', src).attr('alt', alt).removeAttr('srcset').removeAttr('loading');
}

function entityBox(t) {
  const contact = [
    t.phone && `<a href="${tel(t.phone)}" title="Telefon" class="next-link"><span class="ico"><img src="www/RealEstateOffice/images/svg/phone.svg" alt="Telefon" data-uk-svg></span><span>${esc(t.phone)}</span></a>`,
    `<a href="mailto:${t.email}" title="E-mail" class="next-link"><span class="ico"><img src="www/RealEstateOffice/images/svg/email.svg" alt="E-mail" data-uk-svg></span><span>${esc(t.email)}</span></a>`,
  ].filter(Boolean).join('');
  const buttons = t.broker
    ? `<div class="button-wrapper"><a href="makleri.html#${t.slug}" class="button button-flat green" title="Detail makléře">Detail makléře</a><a href="${OFFICE.listings}" target="_blank" rel="noopener" class="button button-flat green" title="Moje nabídky">Moje nabídky</a></div>`
    : '';
  return `<div class="entityBox" id="${t.slug}"><div class="top"><div class="picture"><a href="makleri.html#${t.slug}" title="${esc(t.name)}"><picture><img src="${IMG}tym/${t.photo}" alt="${esc(t.name)}" class="nra-portrait"></picture></a></div><div class="text"><h3${t.name.length > 22 ? ' class="nra-long"' : ''}>${esc(t.name)}</h3><p>${esc(t.role)}</p><p>Kancelář: Plzeň</p></div></div><div class="bottom">${contact}${buttons}</div></div>`;
}

function common($) {
  // logo pobočky (SVG ze sdíleného disku IMPnet)
  $('a.logo img, footer a.logo img').each((_, i) => setImg($, i, IMG + 'logo.svg', OFFICE.brand));
  $('a.logo img').addClass('nra-logo');
  $('[title="Webové stránky IMPnet"]').attr('title', OFFICE.brand);
  $('img[alt="Webové stránky IMPnet"]').attr('alt', OFFICE.brand);

  // horní lišta kanceláří: jediná pobočka Plzeň
  $('a.menuLink, #offcanvas-nav a').each((_, a) => {
    const t = $(a).text().trim();
    if (t === 'Praha') $(a).find('span').last().text('Plzeň'), $(a).attr('href', 'kontakty.html');
    if (t === 'Brno') $(a).closest('li').remove();
  });
  $('img[alt="Praha"]').attr('alt', 'Plzeň');
  $('meta[property="og:title"]').attr('content', $('title').text().split(' | ')[0]);

  // kontaktní blok (je na většině stránek)
  $('.contacts-wrapper').each((_, w) => {
    $(w).find('a[href^="tel:"]').attr('href', tel(OFFICE.phone)).find('span').last().text(OFFICE.phone);
    $(w).find('a[href^="mailto:"]').attr('href', 'mailto:' + OFFICE.email).find('span').last().text(OFFICE.email);
    $(w).find('strong:contains("Kancelář:")').parent().html(`<strong>Kancelář:</strong> ${esc(OFFICE.street)}, ${esc(OFFICE.city)}`);
  });
  $('.map-wrapper').each((_, m) => {
    $(m).find('script').remove();
    $(m).find('select').remove();
    $(m).find('.uk-height-medium, [data-map-clusterer]').first().replaceWith(mapEmbed());
  });

  // patička: sociální sítě pobočky, provozní údaje
  const soc = $('section.footerNew');
  soc.find('a[href*="facebook.com"]').attr('href', OFFICE.facebook);
  soc.find('a[href*="instagram.com"]').attr('href', OFFICE.instagram);
  soc.find('a[href*="youtube.com"], a[href*="linkedin.com"], a[href*="twitter.com"]').remove();
  const end = $('section.end');
  end.find('.menu ul').html(
    `<li><a href="${OFFICE.gdpr}" target="_blank" rel="noopener">GDPR – ochrana osobních údajů</a></li>` +
    `<li><a href="${OFFICE.whistleblowing}" target="_blank" rel="noopener">Vnitřní oznamovací systém</a></li>` +
    `<li><a href="kontakty.html">Kontakt</a></li>`);
  end.find('p').first().html(
    `${esc(OFFICE.company)} · IČ: ${OFFICE.ico} · DIČ: ${OFFICE.dic} · ${esc(OFFICE.registry)}<br>` +
    `Copyright © 2026 ${OFFICE.brand} | by ` + end.find('p a').first().toString());

  // demo obsah šablony, pro který pobočka nemá podklady
  $('section.newsList, section.blogSlider, section.referenceExtract').remove();
  $('#snippet-popup-, #snippet-regulatoryNotice-').empty();

  // výpis nemovitostí je v produkci napojený na NextApp
  $('section.productSwich .section-title').after(tplNote('Ukázková data šablony – v produkci se sem automaticky načte aktuální nabídka pobočky z NextAppu.'));
  $('section.productSwich .subtitle').first().text('Aktuální nabídka');
  $('section.productSwich h2').first().text('Nejnovější nemovitosti z naší nabídky');

  benefitsBoxes($);
}

function mapEmbed() {
  const q = encodeURIComponent(`${OFFICE.street}, ${OFFICE.city}`);
  return `<iframe class="nra-map" title="Mapa – ${esc(OFFICE.street)}" loading="lazy" src="https://maps.google.com/maps?q=${q}&z=16&output=embed"></iframe>`;
}

function benefitsBoxes($) {
  $('section.benefits .benefitsBox').each((i, b) => {
    const d = BENEFITS_BOXES[i];
    if (!d) return;
    $(b).find('h3').text(d[0]);
    $(b).find('p').first().text(d[1]);
    $(b).find('img').attr('alt', d[0]);
    if (d[2]) setImg($, $(b).find('img'), d[2], d[0]);
  });
}

function pageTop($, h1, html, img) {
  const s = $('section.pageTop').first();
  s.find('h1').text(h1);
  s.find('.content .text').first().html(html);
  if (img) setImg($, s.find('.bg img'), img, h1);
}

function counters($, scope) {
  $(scope).find('.benefitsBox.numbers').each((i, b) => {
    const d = STATS[i];
    if (!d) return;
    $(b).find('.counter-value').text(d.value).attr('data-count', d.value);
    $(b).find('h3 span').not('.counter-value').text(d.suffix);
    $(b).find('p').first().text(d.label);
  });
}

// ---------------------------------------------------------------- stránky

const pages = {
  home($) {
    // slideshow: 1. Chocenice (video), 2. představení kanceláře (nese h1)
    const slides = $('section.slideshow .uk-slideshow-items > li');
    const [a, b] = [slides.eq(0).find('.slide'), slides.eq(1).find('.slide')];
    const dev = b.clone(), office = a.clone();
    dev.addClass('nra-shade').find('picture').replaceWith(
      `<div class="nra-media"><video autoplay muted loop playsinline preload="metadata" poster="${IMG}video/poster-landscape.webp" aria-label="${CHOCENICE.title} – video"><source src="${IMG}video/chocenice-landscape.mp4" type="video/mp4"></video></div>`);
    dev.find('h2').html('Stavební pozemky<br>Chocenice u Plzně');
    // skutečná fotka náměstí Republiky (Magnific stock, autor slon.pics) místo ilustrace šablony
    office.addClass('nra-shade').find('picture').replaceWith(
      `<div class="nra-media"><img src="${IMG}kancelar/plzen-namesti.jpg" alt="Náměstí Republiky v Plzni z věže katedrály sv. Bartoloměje" width="2400" height="1554"></div>`);
    dev.find('.text p').text(CHOCENICE.lead);
    dev.find('.button-wrapper').html(`<a class="button button-main" title="${CHOCENICE.title}" href="${PROJECT_URL}">Detail projektu</a>`);
    office.find('h1').html('Realitní kancelář<br>v centru Plzně');
    office.find('.text p').text(ABOUT.lead);
    office.find('.button-wrapper').html(
      `<a class="button button-main" href="${OFFICE.listings}" target="_blank" rel="noopener">Chci koupit nemovitost</a><br><br>` +
      `<a class="button button-secondary" href="odhad-ceny-nemovitosti.html">Chci prodat nemovitost</a>`);
    a.replaceWith(dev);
    b.replaceWith(office);

    // samostatný banner Chocenic
    $('section.productSwich').after(`
      <section class="nra-banner"><div class="container">
        <a class="nra-banner__box" href="${PROJECT_URL}" title="${CHOCENICE.title}">
          <div class="nra-banner__img"><video autoplay muted loop playsinline preload="metadata" poster="${IMG}video/poster-landscape.webp" aria-label="${CHOCENICE.title} – video"><source src="${IMG}video/chocenice-landscape.mp4" type="video/mp4"></video></div>
          <div class="nra-banner__content">
            <p class="subtitle">Developerský projekt</p>
            <h2>${CHOCENICE.title}</h2>
            <p class="nra-banner__lead">${esc(CHOCENICE.lead)}</p>
            <ul class="nra-banner__facts">${CHOCENICE.facts.map(f => `<li><strong>${f[0]}</strong><span>${esc(f[1])}</span></li>`).join('')}</ul>
            <span class="button button-main">Detail projektu</span>
          </div>
          <span class="nra-banner__badge">${CHOCENICE.label}</span>
        </a>
      </div></section>`);

    // výhody spolupráce + čísla
    const side = $('section.contentSideConnectedMenu');
    side.find('.text ul').html(BENEFITS_LIST.map(t => `<li>${esc(t)}</li>`).join(''));
    side.find('.benefitsNumbers').each((i, box) => {
      const d = STATS[i];
      $(box).find('h3').text(d.value + d.suffix);
      $(box).find('.subtitle').text(d.label);
      $(box).find('p').not('.subtitle').text(d.note);
      $(box).find('img').attr('alt', d.label);
    });

    // makléři
    const ml = $('section.maklerList');
    ml.find('.subtitle').first().text('Náš tým');
    ml.find('h2').first().text('Kdo se postará o hladký průběh vašeho obchodu?');
    const shown = TEAM.filter(t => t.broker || t.slug === 'radim-lisenko');
    ml.find('.uk-slider-items').html(shown.map(t => `<li>${entityBox(t)}</li>`).join(''));

    // developerské projekty – návrh č. 1, jen Chocenice
    const ps = $('section.productSlider');
    ps.attr('id', 'chocenice');
    ps.find('.section-title .subtitle').text('Developerské projekty');
    ps.find('.uk-slider-items > li:not(:first-child), .uk-slider-nav > li:not(:first-child)').remove();
    ps.find('.uk-slider-items > li:first-child > a, .uk-slider-nav > li:first-child > a').text('Chocenice');
    const box = ps.find('.slideBox').first();
    setImg($, box.find('picture img'), IMG + 'chocenice/dji-0090.webp', CHOCENICE.title);
    box.find('.label span').text(CHOCENICE.label);
    box.find('h3 a').text(CHOCENICE.title);
    box.find('a').attr('href', PROJECT_URL).attr('title', CHOCENICE.title);
    box.find('.text').html(paras([CHOCENICE.text[0], 'Poslední volný je pozemek C o výměře 1 899 m².']));
    ps.find('[data-uk-slider-item="previous"], [data-uk-slider-item="next"]').css('visibility', 'hidden');
    $('section.verticalSlider').remove();

    // služby – texty ze starého webu tam, kde existují
    const svc = $('section.serviceSlider');
    svc.find('.section-title .subtitle').text('Naše služby');
    svc.find('.section-title h2').text('Realitní, právní a finanční služby pod jednou střechou');
    const law = svc.find('.serviceBox').filter((_, s) => $(s).find('h3').text().includes('Právnické'));
    law.find('h3').text('Právní služby a rozvod');
    law.find('.text').html(`<p>${esc(DIVORCE.lead)}</p><ul><li>vypořádání společného jmění manželů</li><li>exekuce a insolvence</li><li>oprávnění provádět veřejné dražby</li></ul>`);
    law.find('.button-wrapper a').attr('href', 'rozvod-vyporadani-sjm.html').text('Rozvod a vypořádání SJM');
    svc.find('.serviceBox').not(law).find('.content .wrapper').append(tplNote('Text ze šablony – starý web k této službě text nemá.'));
  },

  about($) {
    pageTop($, 'O nás', `<p>${esc(ABOUT.lead)}</p>`, IMG + 'kancelar/kancelar-1.jpg');
    counters($, $('section.menuSection').first());
    $('section.menuSection').eq(1).remove(); // časová osa – pobočka podklady nemá
    $('section.singleContent .text').html(
      `<h2>Naše kancelář</h2><p>${esc(ABOUT.office)}</p>` +
      `<figure class="nra-figure"><img src="${IMG}kancelar/kancelar-2.jpg" alt="Kancelář Next Reality Advance v Plzni" loading="lazy"></figure>` +
      `<h2>Kdo jsme</h2>${paras(ABOUT.who)}` +
      `<h2>Ředitel kanceláře</h2>${paras(ABOUT.director)}` +
      `<p><a class="button button-main" href="makleri.html">Seznamte se s naším týmem</a></p>`);
  },

  team($) {
    pageTop($, 'Náš tým', `<p>${esc(ABOUT.lead)} Seznamte se s lidmi, kteří se o váš obchod postarají.</p>`, IMG + 'kancelar/kancelar-1.jpg');
    const secs = $('section.entityContact');
    const col = t => `<div class="uk-width-1-4@l uk-width-1-3@s uk-width-1-2">${entityBox(t)}</div>`;
    const lead = TEAM.filter(t => !t.broker);
    const brokers = TEAM.filter(t => t.broker);
    secs.eq(0).find('[data-uk-grid]').first().html(lead.map(col).join(''));
    secs.eq(0).find('.container').prepend('<div class="section-title"><p class="subtitle center">Vedení a asistence</p><h2 class="center">Vedení kanceláře</h2></div>');
    secs.eq(1).find('.section-title').html('<p class="subtitle center">Plzeň</p><h2 class="center">Naši realitní makléři</h2>');
    secs.eq(1).find('[data-uk-grid]').last().html(brokers.map(col).join(''));
    secs.eq(2).remove();
  },

  contact($) {
    const top = $('section.contactTop');
    top.find('h1').text('Kde nás najdete?');
    top.find('.content p').first().text(`${ABOUT.lead} Ozvěte se nám telefonicky, e-mailem nebo přes kontaktní formulář.`);
    setImg($, top.find('.bg img'), IMG + 'kancelar/kancelar-2.jpg', 'Kancelář Next Reality Advance');
    top.find('.bottom .container').html(
      `<h3>${OFFICE.brand}</h3>` +
      `<p><span>${esc(OFFICE.company)}</span><br><span>${esc(OFFICE.street)}</span><br><span>${esc(OFFICE.city)}</span></p>` +
      `<p>${esc(OFFICE.hours)}<br><a href="${tel(OFFICE.phone)}">${OFFICE.phone}</a><br><a href="mailto:${OFFICE.email}">${OFFICE.email}</a></p>` +
      `<p><strong>Parkování</strong> se nachází přímo u naší pobočky.</p>` +
      `<p>IČ: ${OFFICE.ico}<br>DIČ: ${OFFICE.dic}</p><p>${esc(OFFICE.registry)}</p>`);
    top.find('.map-wrapper').html(mapEmbed());
    const secs = $('section.entityContact');
    secs.eq(0).find('.section-title').html('<p class="subtitle center">Plzeň</p><h2 class="center">Chcete kontaktovat někoho konkrétního?</h2>');
    secs.eq(0).find('[data-uk-grid]').last().html(TEAM.map(t => `<div class="uk-width-1-4@l uk-width-1-3@s uk-width-1-2">${entityBox(t)}</div>`).join(''));
    secs.eq(1).remove();
  },

  estimate($) {
    pageTop($, ESTIMATE.title, `<p>${esc(ESTIMATE.lead)}</p>`);
    const ms = $('section.menuSection').first();
    ms.find('.section-title h2').text('Proč odhad u nás?');
    ms.find('.section-title .subtitle').text('Odhad svěřujeme kvalifikovaným profesionálům');
    ms.find('.benefitsBox').each((i, b) => {
      const d = ESTIMATE.why[i];
      if (!d) return $(b).parent().remove();
      $(b).find('h3').text(d[0]);
      $(b).find('p').first().text(d[1]);
    });
  },

  divorce($) {
    pageTop($, DIVORCE.title, `<p>${esc(DIVORCE.lead)}</p>`);
    $('section.sidePhoto').each((i, s) => {
      const d = DIVORCE.blocks[i];
      if (!d) return;
      $(s).find('.text h2').text(d[0]);
      $(s).find('.text .content').html(paras(d[1]));
    });
    $('section.sidePhoto').first().find('.picture').append(tplNote('Fotka ze šablony – starý web měl jen ilustrační obrázek.'));
  },

  project($) {
    const c = CHOCENICE;
    const d = $('section.productDetail');
    const g = c.gallery.map(n => IMG + 'chocenice/' + n + '.webp');
    const big = d.find('#slider-image-top .splide__list');
    const small = d.find('#slider-image-bottom .splide__list');
    const bigTpl = big.find('li').first(), smallTpl = small.find('li').first();
    big.html(g.map(src => { const li = bigTpl.clone(); li.find('a').attr('href', src).attr('data-caption', c.title).attr('aria-label', c.title); setImg($, li.find('img'), src, c.title); return $.html(li); }).join(''));
    small.html(g.map(src => { const li = smallTpl.clone(); setImg($, li.find('img'), src, c.title); return $.html(li); }).join(''));
    d.find('#back-btn').attr('href', 'index.html#chocenice');
    d.find('.label span').first().text(c.label);
    d.find('h1').text(c.title);
    d.find('.subtitle-attributes > span').first().text(c.place);
    d.find('.price span').text(c.price);
    d.find('.buttons .button-secondary').remove();

    const pc = $('section.productContent');
    pc.find('.text').first().html(paras(c.text));
    const t = person(c.broker);
    const cb = pc.find('.colleagueBox');
    setImg($, cb.find('picture img').first(), IMG + 'tym/' + t.photo, t.name);
    cb.find('h3').first().text(t.name);
    cb.find('.perex').text(t.role);
    cb.find('a[href^="tel:"]').attr('href', tel(t.phone)).find('span').last().text(t.phone);
    cb.find('a[href^="mailto:"]').attr('href', 'mailto:' + t.email).find('span').last().text(t.email);
    cb.find('a.button').eq(0).attr('href', 'makleri.html#' + t.slug);
    cb.find('a.button').eq(1).attr('href', OFFICE.listings).attr('target', '_blank');

    const parts = $('section.developmentProjectParts');
    parts.find('.section-title h2').text('Pozemky a jejich dostupnost');
    parts.find('.visualisation').replaceWith(`<div class="container nra-plan"><img src="${IMG}chocenice/dji-0095.webp" alt="Pozemky Chocenice – letecký pohled" loading="lazy">${tplNote('Letecký snímek – plánek s vyznačením pozemků A–D klientka nedodala.')}</div>`);
    parts.find('.partFilter').remove(); // filtr jednotek – pro 4 pozemky zbytečný
    parts.find('.column-price p').first().text('Výměra');
    const rowWrap = parts.find('.productRow').first().parent();
    const rows = c.plots.map(([name, state, url]) => {
      const r = rowWrap.clone();
      r.find('.column-name p').text(name);
      r.find('.column-price p').removeClass('blurred').text(name.match(/[\d\s]+m²/)[0].trim());
      r.find('.column-state p').text(state);
      const btn = r.find('.column-button a');
      if (url) btn.removeClass('invisible').attr('href', url).attr('target', '_blank').text('Detail pozemku');
      else btn.addClass('invisible');
      return $.html(r);
    });
    rowWrap.parent().html(rows.join(''));
    $('section.sidePhoto#map-navigate .map-wrapper').html(`<iframe class="nra-map" title="Mapa – Chocenice" loading="lazy" src="https://maps.google.com/maps?q=Chocenice&z=14&output=embed"></iframe>`);
  },
};

export function transform(html, page) {
  const $ = cheerio.load(html, { decodeEntities: false });
  common($);
  pages[page]($);
  $('body').append(`<div class="nra-note" title="Kliknutím skryjete" onclick="this.remove()"><strong>Náhled ke schválení</strong> · nextrealityadvance.cz · šablona NEXT s obsahem z kancelarplzen.cz. Šedé štítky = obsah ze šablony. ✕</div>`);
  return $.html();
}
