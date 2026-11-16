/* Lógica del sitio: idioma, portada (diorama) y página de proyecto. El contenido está en data.js. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var S = window.SITE;
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var UI = {
    es: {
      skip: 'Saltar al contenido',
      nSkills: 'Habilidades', nProjects: 'Proyectos', nContact: 'Contacto',
      langLabel: 'Idioma',
      seeWork: 'Ver proyectos', getInTouch: 'Contacto',
      skillsEyebrow: 'Habilidades',
      skillsLead: 'Con lo que trabajo todos los días, entre la mecánica, el mantenimiento y el software.',
      projectsTitle: 'Proyectos',
      projectsSub: function (n, a, b) { return n + ' proyectos de ' + a + ' a ' + b + ', de la aeronáutica al mantenimiento industrial.'; },
      all: 'Todos',
      filterLabel: 'Filtrar proyectos por categoría',
      view: 'Ver proyecto',
      contactTitle: 'Hablemos.',
      contactSub: 'La forma más rápida de contactarme es por LinkedIn.',
      email: 'Correo',
      overview: 'Resumen', points: 'Resultados', features: 'Qué hace', specs: 'Ficha', gallery: 'Galería',
      context: 'Contexto', role: 'Rol', year: 'Año', discipline: 'Disciplina', categories: 'Categorías',
      next: 'Siguiente proyecto', back: 'Todos los proyectos',
      notFound: 'No encontré ese proyecto.'
    },
    en: {
      skip: 'Skip to content',
      nSkills: 'Skills', nProjects: 'Projects', nContact: 'Contact',
      langLabel: 'Language',
      seeWork: 'See my work', getInTouch: 'Get in touch',
      skillsEyebrow: 'Skills',
      skillsLead: 'What I work with every day, across mechanics, maintenance and software.',
      projectsTitle: 'Projects',
      projectsSub: function (n, a, b) { return n + ' projects from ' + a + ' to ' + b + ', from aeronautics to industrial maintenance.'; },
      all: 'All',
      filterLabel: 'Filter projects by category',
      view: 'View project',
      contactTitle: "Let's talk.",
      contactSub: 'The quickest way to reach me is on LinkedIn.',
      email: 'Email',
      overview: 'Overview', points: 'Results', features: 'What it does', specs: 'Specifications', gallery: 'Gallery',
      context: 'Context', role: 'Role', year: 'Year', discipline: 'Discipline', categories: 'Categories',
      next: 'Next project', back: 'All projects',
      notFound: 'That project was not found.'
    }
  };

  // Iconos de línea propios para las habilidades
  var ICONS = {
    cad: '<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    sim: '<path d="M3 17c3 0 3-10 6-10s3 10 6 10 3-6 6-6"/><path d="M3 21h18"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 0-2-2Z"/><path d="m16.5 4.5 3 3"/>',
    data: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
    team: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 5.5 2.2 5.5 5.5"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'
  };
  // Logos de redes: Font Awesome Free (https://fontawesome.com), licencia CC BY 4.0
  var BRANDS = {
    linkedin: '<svg viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>',
    youtube: '<svg viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>'
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
      return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener" aria-label="' + esc(l.label) + '">' + (BRANDS[l.icon] || esc(l.label)) + '</a>';
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
      return '<li class="tag">' + esc(t(S.categories[k])) + '</li>';
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

  /* ---------- portada: foto con profundidad (diorama) y nieve ---------- */
  function initDiorama(box) {
    var H = S.hero;
    var small = window.innerWidth <= 1000 && H.srcSmall;
    var src = small ? H.srcSmall : H.src;
    box.style.backgroundImage = 'url("' + src + '")';
    if (REDUCED || !H.depth) return;

    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    var VS = 'attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;v.y=1.-v.y;gl_Position=vec4(p,0.,1.);}';
    var FS = [
      'precision mediump float;',
      'uniform sampler2D img;uniform sampler2D dep;uniform vec2 res;uniform vec2 isz;uniform vec2 off;uniform float zoom;',
      'varying vec2 v;',
      'void main(){',
      '  float rs=res.x/res.y, ri=isz.x/isz.y;',
      '  vec2 sc = rs>ri ? vec2(1.,ri/rs) : vec2(rs/ri,1.);',
      '  vec2 c = vec2(.5,.45);',
      '  vec2 uv = (v-.5)*sc + .5;',
      '  uv.y += (c.y-.5)*(1.-sc.y);',
      '  uv = (uv-c)/zoom + c;',
      '  float d = texture2D(dep, uv).r;',
      '  vec2 q = uv + off*(d-.45);',
      '  d = texture2D(dep, q).r;',
      '  gl_FragColor = texture2D(img, uv + off*(d-.45));',
      '}'
    ].join('\n');
    function sh(type, code) { var s = gl.createShader(type); gl.shaderSource(s, code); gl.compileShader(s); return s; }
    var prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var U = {}; ['img', 'dep', 'res', 'isz', 'off', 'zoom'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });

    function tex(unit, image) {
      var tx = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, tx);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    }
    function load(url) {
      return new Promise(function (ok, bad) { var i = new Image(); i.onload = function () { ok(i); }; i.onerror = bad; i.src = url; });
    }

    var snow = document.createElement('canvas'); snow.className = 'hero__snow';
    var sx = snow.getContext('2d'), flakes = [];

    Promise.all([load(src), load(H.depth)]).then(function (r) {
      tex(0, r[0]); tex(1, r[1]);
      gl.uniform1i(U.img, 0); gl.uniform1i(U.dep, 1);
      gl.uniform2f(U.isz, r[0].naturalWidth, r[0].naturalHeight);
      box.appendChild(canvas); box.appendChild(snow);
      resize(); requestAnimationFrame(frame);
    }).catch(function () { /* se queda la foto fija */ });

    var W = 0, Hh = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      W = box.clientWidth; Hh = box.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(Hh * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(U.res, canvas.width, canvas.height);
      snow.width = canvas.width; snow.height = canvas.height;
      var n = Math.min(140, Math.round(W * Hh / 11000));
      flakes = [];
      for (var i = 0; i < n; i++) flakes.push({ x: Math.random(), y: Math.random(), r: .6 + Math.random() * 1.9, s: .15 + Math.random() * .5, ph: Math.random() * 6.28 });
    }
    window.addEventListener('resize', resize);

    var target = { x: 0, y: 0 }, cur = { x: 0, y: 0 }, visible = true, t0 = performance.now();
    box.parentNode.addEventListener('pointermove', function (e) {
      var b = box.getBoundingClientRect();
      target.x = ((e.clientX - b.left) / b.width - .5);
      target.y = ((e.clientY - b.top) / b.height - .5);
    });
    box.parentNode.addEventListener('pointerleave', function () { target.x = 0; target.y = 0; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        var was = visible; visible = en[0].isIntersecting;
        if (visible && !was) requestAnimationFrame(frame);
      }).observe(box);
    }

    function frame(now) {
      if (!visible) return;
      var tt = (now - t0) / 1000;
      cur.x += (target.x - cur.x) * .05; cur.y += (target.y - cur.y) * .05;
      var ox = -cur.x * .045 + Math.sin(tt * .23) * .012;
      var oy = -cur.y * .025 + Math.cos(tt * .19) * .006;
      var sc = Math.min(1, Math.max(0, window.scrollY / Math.max(1, Hh)));
      gl.uniform2f(U.off, ox, oy);
      gl.uniform1f(U.zoom, 1.06 + sc * .06);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // nieve
      sx.clearRect(0, 0, snow.width, snow.height);
      sx.fillStyle = 'rgba(255,255,255,.85)';
      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];
        f.y += f.s * .0016 * (1 + f.r * .4); if (f.y > 1.02) { f.y = -.02; f.x = Math.random(); }
        var x = (f.x + Math.sin(tt * .6 + f.ph) * .006 + ox * f.r * .25) * snow.width;
        var y = (f.y + oy * f.r * .2) * snow.height;
        sx.globalAlpha = .35 + f.r * .25;
        sx.beginPath(); sx.arc(x, y, f.r * dpr, 0, 6.283); sx.fill();
      }
      sx.globalAlpha = 1;
      requestAnimationFrame(frame);
    }
  }

  /* ---------- portada ---------- */
  var activeFilter = 'all';

  function renderHome(first) {
    var P = S.projects, person = S.person;

    $('#kicker').textContent = t(person.kicker);
    if (first) initDiorama($('#hero-media'));

    // habilidades
    $('#skills-list').innerHTML = S.skills.map(function (s) {
      return '<article class="skill"><div class="skill__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">' +
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
        '<span class="card__meta">' + [p.year, t(p.discipline)].filter(Boolean).map(esc).join(' · ') + '</span>' +
        '<span class="cta card__more">' + u('view') + '</span></div></a>';
    }).join('');
    applyFilter();

    // contacto
    var c = S.links.map(function (l) {
      return '<a class="btn btn--light" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + (BRANDS[l.icon] || '') + esc(l.label) + '</a>';
    }).join('');
    if (person.email) c += '<a class="btn btn--light" href="mailto:' + esc(person.email) + '">' + esc(person.email) + '</a>';
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
        '</h1><p class="p-summary"><a class="cta" href="index.html#proyectos">' + u('back') + '</a></p></div></section>';
      document.title = u('notFound');
      return;
    }
    var p = P[i], next = P[(i + 1) % P.length];
    var media = (p.media && p.media.length) ? p.media : [{ src: p.cover, fit: p.coverFit }];
    var lead = media[0], gal = media.slice(1);
    var points = p.results ? t(p.results) : null;
    var pointsTitle = p.id === 'gemelo-digital' ? u('features') : u('points');

    var sub = [['resumen', u('overview')]];
    if (points) sub.push(['puntos', pointsTitle]);
    sub.push(['ficha', u('specs')]);
    if (gal.length) sub.push(['galeria', u('gallery')]);
    $('#subnav').innerHTML = '<div class="container"><span class="subnav__title">' + esc(t(p.title)) + '</span>' +
      sub.map(function (s) { return '<a href="#' + s[0] + '">' + esc(s[1]) + '</a>'; }).join('') + '</div>';

    var meta = [];
    if (p.year) meta.push(u('year') + ' <b>' + esc(p.year) + '</b>');
    if (p.role) meta.push(u('role') + ' <b>' + esc(t(p.role)) + '</b>');

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

    var alt = false;
    function block(id, title, inner) {
      alt = !alt;
      return '<section class="p-block' + (alt ? ' p-block--alt' : '') + '" id="' + id + '"><div class="container"><h2>' + esc(title) + '</h2>' + inner + '</div></section>';
    }

    main.innerHTML =
      '<section class="p-hero"><div class="container">' +
        '<p class="eyebrow">' + esc(t(p.context)) + '</p>' +
        '<h1 class="p-title">' + esc(t(p.title)) + '</h1>' +
        '<p class="p-summary">' + esc(t(p.summary)) + '</p>' +
        (meta.length ? '<p class="p-meta">' + meta.map(function (m) { return '<span>' + m + '</span>'; }).join('') + '</p>' : '') +
        (p.demo && p.demo.ready ? '<div class="actions"><a class="btn btn--primary" href="' + esc(p.demo.href) + '">' + esc(t(p.demo.label)) + '</a></div>' +
          (p.demo.note ? '<p class="p-note">' + esc(t(p.demo.note)) + '</p>' : '') : '') +
        '<figure class="p-lead"><div class="' + mediaClass(lead) + '">' + mediaEl(lead, t(lead.caption), true) + '</div></figure>' +
      '</div></section>' +
      block('resumen', u('overview'), '<div class="prose">' + t(p.body).map(function (x) { return '<p>' + esc(x) + '</p>'; }).join('') + '</div>' +
        (links ? '<div class="links">' + links + '</div>' : '')) +
      (points ? block('puntos', pointsTitle, '<ul class="points">' + points.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>') : '') +
      block('ficha', u('specs'), '<dl class="specs">' + specs.map(function (s) { return '<div><dt>' + esc(s[0]) + '</dt><dd>' + s[1] + '</dd></div>'; }).join('') + '</dl>') +
      (gal.length ? block('galeria', u('gallery'), '<div class="gallery">' +
        gal.map(function (m, k) {
          var wide = m.plan || (gal.length % 2 === 1 && k === gal.length - 1 && !m.tall);
          return '<figure class="' + (wide ? 'is-wide' : '') + (m.tall ? ' is-tall' : '') + '"><div class="' + mediaClass(m) + '">' +
            mediaEl(m, t(m.caption), false) + '</div><figcaption>' + esc(t(m.caption)) + '</figcaption></figure>';
        }).join('') + '</div>') : '') +
      '<nav class="next"><div class="container"><small>' + u('next') + '</small><a href="' + projectUrl(next) + '">' + esc(t(next.title)) + '</a></div></nav>';

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
