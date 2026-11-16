/* Lógica del sitio: idioma, portada y página de proyecto. El contenido está en data.js. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var S = window.SITE;
  var UI = {
    es: {
      skip: 'Saltar al contenido',
      nSkills: 'Habilidades', nProjects: 'Proyectos', nContact: 'Contacto',
      langLabel: 'Idioma',
      hello: 'Hola, soy ',
      seeWork: 'Ver proyectos', getInTouch: 'Contacto',
      skillsTitle: 'Habilidades',
      skillsSub: 'Con lo que trabajo, entre la mecánica, el mantenimiento y el software.',
      projectsTitle: 'Proyectos',
      projectsSub: function (n, a, b) { return n + ' proyectos de ' + a + ' a ' + b + ', de la aeronáutica al mantenimiento industrial.'; },
      all: 'Todos',
      filterLabel: 'Filtrar proyectos por categoría',
      view: 'Ver',
      contactTitle: 'Hablemos.',
      contactSub: 'La forma más rápida de contactarme es por LinkedIn.',
      writeMe: 'Escríbeme en LinkedIn',
      email: 'Correo',
      // proyecto
      overview: 'Resumen', points: 'Resultados', features: 'Qué hace', specs: 'Ficha', gallery: 'Galería',
      context: 'Contexto', role: 'Rol', year: 'Año', discipline: 'Disciplina', categories: 'Categorías',
      next: 'Siguiente proyecto', back: 'Todos los proyectos',
      notFound: 'No encontré ese proyecto.'
    },
    en: {
      skip: 'Skip to content',
      nSkills: 'Skills', nProjects: 'Projects', nContact: 'Contact',
      langLabel: 'Language',
      hello: "Hi, I'm ",
      seeWork: 'See my work', getInTouch: 'Get in touch',
      skillsTitle: 'Skills',
      skillsSub: 'What I work with, across mechanics, maintenance and software.',
      projectsTitle: 'Projects',
      projectsSub: function (n, a, b) { return n + ' projects from ' + a + ' to ' + b + ', from aeronautics to industrial maintenance.'; },
      all: 'All',
      filterLabel: 'Filter projects by category',
      view: 'View',
      contactTitle: "Let's talk.",
      contactSub: 'The quickest way to reach me is on LinkedIn.',
      writeMe: 'Message me on LinkedIn',
      email: 'Email',
      overview: 'Overview', points: 'Results', features: 'What it does', specs: 'Specifications', gallery: 'Gallery',
      context: 'Context', role: 'Role', year: 'Year', discipline: 'Discipline', categories: 'Categories',
      next: 'Next project', back: 'All projects',
      notFound: 'That project was not found.'
    }
  };

  var ICONS = {
    cad: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    sim: '<path d="M3 17c3 0 3-10 6-10s3 10 6 10 3-6 6-6"/><path d="M3 21h18"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 0-2-2Z"/><path d="m16.5 4.5 3 3"/>',
    data: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    team: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 5.5 2.2 5.5 5.5"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'
  };

  /* ---------- idioma ---------- */
  function storedLang() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }
  function saveLang(l) { try { localStorage.setItem('lang', l); } catch (e) { /* sin almacenamiento */ } }
  var params = new URLSearchParams(location.search);
  var lang = params.get('lang') || storedLang() ||
    ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  if (lang !== 'es' && lang !== 'en') lang = 'es';

  function t(v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    return v[lang] != null ? v[lang] : (v.es != null ? v.es : '');
  }
  function u(k) { return UI[lang][k]; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function applyStatic() {
    document.documentElement.lang = lang;
    $$('[data-ui]').forEach(function (el) { el.textContent = u(el.getAttribute('data-ui')); });
    $$('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    var g = $('.lang'); if (g) g.setAttribute('aria-label', u('langLabel'));
    var f = $('#footer-links');
    if (f) f.innerHTML = S.links.map(function (l) {
      return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    }).join('');
  }
  function bindLang(render) {
    $$('.lang button').forEach(function (b) {
      b.addEventListener('click', function () {
        var l = b.getAttribute('data-lang');
        if (l === lang) return;
        lang = l; saveLang(l); applyStatic(); render(false);
      });
    });
  }

  function projectUrl(p) { return 'proyecto.html?p=' + encodeURIComponent(p.id); }
  function tagsHtml(keys) {
    return '<ul class="tags">' + (keys || []).map(function (k) {
      return '<li class="tag tag--' + esc(k) + '">' + esc(t(S.categories[k])) + '</li>';
    }).join('') + '</ul>';
  }
  function mediaEl(m, alt, eager) {
    if (m.video) {
      var attrs = m.loop ? ' loop muted autoplay playsinline' : ' controls muted playsinline';
      return '<video src="' + esc(m.video) + '"' + (m.poster ? ' poster="' + esc(m.poster) + '"' : '') + attrs +
        ' preload="metadata" aria-label="' + esc(alt) + '"></video>';
    }
    return '<img src="' + esc(m.src) + '" alt="' + esc(alt) + '"' + (eager ? '' : ' loading="lazy"') + ' decoding="async">';
  }
  function mediaClass(m) { return 'media' + (m.plan ? ' is-plan' : '') + (m.fit ? ' is-fit' : ''); }

  /* ---------- portada ---------- */
  var activeFilter = 'all';

  function renderHome(first) {
    var P = S.projects, person = S.person;

    // hero
    $('#kicker').textContent = t(person.kicker);
    $('#hello').innerHTML = esc(u('hello')) + '<span>' + esc(person.first) + '</span>';
    $('#intro').textContent = t(person.intro);
    if (first) $('#hero-fig').innerHTML = '<img src="' + esc(S.hero.src) + '" alt="" fetchpriority="high"><figcaption></figcaption>';
    $('#hero-fig img').alt = t(S.hero.caption);
    $('#hero-fig figcaption').textContent = t(S.hero.caption);

    // habilidades
    $('#skills-list').innerHTML = S.skills.map(function (s) {
      return '<article class="skill"><div class="skill__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
        (ICONS[s.icon] || '') + '</svg></div><h3>' + esc(t(s.title)) + '</h3><p>' + esc(t(s.text)) + '</p>' + tagsHtml(s.tags) + '</article>';
    }).join('');

    // proyectos
    var ys = P.map(function (p) { return p.year; }).filter(Boolean);
    $('#projects-sub').textContent = u('projectsSub')(P.length, Math.min.apply(null, ys), Math.max.apply(null, ys));
    var counts = {};
    P.forEach(function (p) { (p.tags || []).forEach(function (k) { counts[k] = (counts[k] || 0) + 1; }); });
    var keys = Object.keys(S.categories).filter(function (k) { return counts[k]; })
      .sort(function (a, b) { return counts[b] - counts[a]; });
    var chips = [['all', u('all'), P.length]].concat(keys.map(function (k) { return [k, t(S.categories[k]), counts[k]]; }));
    var fl = $('#filters');
    fl.setAttribute('aria-label', u('filterLabel'));
    fl.innerHTML = chips.map(function (c) {
      return '<button type="button" class="chip" data-filter="' + c[0] + '" aria-pressed="' + (c[0] === activeFilter) + '">' +
        esc(c[1]) + '<span>' + c[2] + '</span></button>';
    }).join('');

    $('#cards').innerHTML = P.map(function (p) {
      return '<a class="card" href="' + projectUrl(p) + '" data-tags="' + esc((p.tags || []).join(' ')) + '">' +
        '<div class="card__img' + (p.coverFit ? ' is-fit' : '') + '"><img src="' + esc(p.cover) + '" alt="" loading="lazy" decoding="async"></div>' +
        '<div class="card__body"><span class="card__title">' + esc(t(p.title)) + '</span>' +
        '<span class="card__meta">' + (p.year ? esc(p.year) : '') + '</span>' +
        '<span class="card__more">' + u('view') + ' ›</span></div></a>';
    }).join('');
    applyFilter();

    // contacto
    var c = '<a class="btn btn--primary" href="' + esc(S.links[0].href) + '" target="_blank" rel="noopener">' + u('writeMe') + '</a>';
    if (person.email) c += '<a class="btn btn--ghost" href="mailto:' + esc(person.email) + '">' + esc(person.email) + '</a>';
    S.links.slice(1).forEach(function (l) {
      c += '<a class="btn btn--ghost" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>';
    });
    $('#contact-actions').innerHTML = c;
    document.title = person.name + (lang === 'es' ? ', ingeniero' : ', engineer');
  }

  function applyFilter() {
    $$('#filters .chip').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === activeFilter)); });
    $$('#cards .card').forEach(function (c) {
      c.hidden = activeFilter !== 'all' && (' ' + c.getAttribute('data-tags') + ' ').indexOf(' ' + activeFilter + ' ') < 0;
    });
  }
  function bindFilters() {
    var fl = $('#filters'); if (!fl) return;
    fl.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      activeFilter = b.getAttribute('data-filter'); applyFilter();
    });
  }

  /* ---------- página de proyecto ---------- */
  function renderProject() {
    var P = S.projects, id = params.get('p'), i = -1;
    P.forEach(function (p, k) { if (p.id === id) i = k; });
    var main = $('#project');
    if (i < 0) {
      $('#subnav').hidden = true;
      main.innerHTML = '<section class="p-hero"><div class="container"><h1 class="p-title">' + u('notFound') +
        '</h1><p class="p-summary"><a href="index.html#proyectos">' + u('back') + '</a></p></div></section>';
      document.title = u('notFound');
      return;
    }
    var p = P[i], next = P[(i + 1) % P.length];
    var media = (p.media && p.media.length) ? p.media : [{ src: p.cover, fit: p.coverFit }];
    var lead = media[0], gal = media.slice(1);
    var points = p.results ? t(p.results) : null;
    var pointsTitle = p.id === 'gemelo-digital' ? u('features') : u('points');

    // subnavegación
    var sub = [['resumen', u('overview')]];
    if (points) sub.push(['puntos', pointsTitle]);
    sub.push(['ficha', u('specs')]);
    if (gal.length) sub.push(['galeria', u('gallery')]);
    $('#subnav').innerHTML = '<div class="container"><span class="subnav__title">' + esc(t(p.title)) + '</span>' +
      sub.map(function (s) { return '<a href="#' + s[0] + '">' + esc(s[1]) + '</a>'; }).join('') + '</div>';

    var meta = [];
    if (p.year) meta.push(u('year') + ' · <b>' + esc(p.year) + '</b>');
    if (p.role) meta.push(u('role') + ' · <b>' + esc(t(p.role)) + '</b>');

    var specs = [
      [u('context'), esc(t(p.context))],
      [u('role'), esc(t(p.role))],
      [u('year'), p.year ? esc(p.year) : ''],
      [u('discipline'), esc(t(p.discipline))],
      [u('categories'), tagsHtml(p.tags)]
    ].filter(function (s) { return s[1]; });

    var links = (p.links || []).map(function (l) {
      return '<a class="btn btn--ghost" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + '</a>';
    }).join('');

    main.innerHTML =
      '<section class="p-hero"><div class="container">' +
        '<p class="p-kicker">' + esc(t(p.context)) + '</p>' +
        '<h1 class="p-title">' + esc(t(p.title)) + '</h1>' +
        '<p class="p-summary">' + esc(t(p.summary)) + '</p>' +
        (meta.length ? '<p class="p-meta">' + meta.map(function (m) { return '<span>' + m + '</span>'; }).join('') + '</p>' : '') +
        (p.demo && p.demo.ready ? '<div class="actions"><a class="btn btn--primary" href="' + esc(p.demo.href) + '">' + esc(t(p.demo.label)) + '</a></div>' +
          (p.demo.note ? '<p class="p-note">' + esc(t(p.demo.note)) + '</p>' : '') : '') +
        '<figure class="p-lead" style="margin-left:auto;margin-right:auto"><div class="' + mediaClass(lead) + '">' + mediaEl(lead, t(lead.caption), true) + '</div></figure>' +
      '</div></section>' +
      '<section class="p-block" id="resumen"><div class="container"><h2>' + u('overview') + '</h2><div class="prose">' +
        t(p.body).map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div>' +
        (links ? '<div class="links">' + links + '</div>' : '') + '</div></section>' +
      (points ? '<section class="p-block p-block--grey" id="puntos"><div class="container"><h2>' + esc(pointsTitle) + '</h2><ul class="points">' +
        points.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></div></section>' : '') +
      '<section class="p-block" id="ficha"><div class="container"><h2>' + u('specs') + '</h2><dl class="specs">' +
        specs.map(function (s) { return '<div><dt>' + esc(s[0]) + '</dt><dd>' + s[1] + '</dd></div>'; }).join('') + '</dl></div></section>' +
      (gal.length ? '<section class="p-block p-block--grey" id="galeria"><div class="container"><h2>' + u('gallery') + '</h2><div class="gallery">' +
        gal.map(function (m, k) {
          var wide = m.plan || (gal.length % 2 === 1 && k === gal.length - 1 && !m.tall);
          return '<figure class="' + (wide ? 'is-wide' : '') + (m.tall ? ' is-tall' : '') + '"><div class="' + mediaClass(m) + '">' +
            mediaEl(m, t(m.caption), false) + '</div><figcaption>' + esc(t(m.caption)) + '</figcaption></figure>';
        }).join('') + '</div></div></section>' : '') +
      '<nav class="next"><div class="container"><small>' + u('next') + '</small><a href="' + projectUrl(next) + '">' + esc(t(next.title)) + ' ›</a></div></nav>';

    document.title = t(p.title) + ' · Jorge Talavera';
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', t(p.summary));
  }

  /* ---------- arranque ---------- */
  var page = document.body.getAttribute('data-page');
  var render = page === 'project' ? renderProject : renderHome;
  applyStatic();
  render(true);
  bindLang(render);
  bindFilters();
})();
