/*
  Maquetas 3D de la portada: un avión de estructura de balsa y una mini fábrica.
  Fuente para js/maqueta.js (se empaqueta con esbuild: ver README).
*/
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, MeshStandardMaterial,
  BoxGeometry, CylinderGeometry, SphereGeometry, ConeGeometry, TorusGeometry,
  Shape, Path, ExtrudeGeometry, HemisphereLight, DirectionalLight, Vector3, Quaternion,
  ACESFilmicToneMapping, SRGBColorSpace
} from 'three';

const UP = new Vector3(0, 1, 0);
const mat = (color, o = {}) => new MeshStandardMaterial(Object.assign({ color, roughness: 0.8, metalness: 0 }, o));

function box(w, h, d, m, x = 0, y = 0, z = 0) {
  const me = new Mesh(new BoxGeometry(w, h, d), m); me.position.set(x, y, z); return me;
}
function cyl(rt, rb, h, m, x = 0, y = 0, z = 0, seg = 24) {
  const me = new Mesh(new CylinderGeometry(rt, rb, h, seg), m); me.position.set(x, y, z); return me;
}
// Barra recta entre dos puntos (largueros, diagonales, patas)
function beam(a, b, t, m) {
  const dir = new Vector3().subVectors(b, a); const len = dir.length();
  const me = new Mesh(new BoxGeometry(t, len, t), m);
  me.position.copy(a).addScaledVector(dir, 0.5);
  me.quaternion.copy(new Quaternion().setFromUnitVectors(UP, dir.normalize()));
  return me;
}
function rod(a, b, r, m) {
  const dir = new Vector3().subVectors(b, a); const len = dir.length();
  const me = new Mesh(new CylinderGeometry(r, r, len, 10), m);
  me.position.copy(a).addScaledVector(dir, 0.5);
  me.quaternion.copy(new Quaternion().setFromUnitVectors(UP, dir.normalize()));
  return me;
}

/* ===================== Avión de balsa ===================== */
function airfoil(c, hole) {
  const up = [[0, 0], [0.0125, 0.035], [0.05, 0.062], [0.1, 0.082], [0.2, 0.098], [0.3, 0.103], [0.4, 0.099], [0.5, 0.09], [0.6, 0.078], [0.7, 0.063], [0.8, 0.046], [0.9, 0.026], [1, 0.006]];
  const lo = [[1, 0], [0.9, -0.003], [0.7, -0.009], [0.5, -0.015], [0.3, -0.021], [0.15, -0.024], [0.05, -0.019], [0.012, -0.01]];
  const s = new Shape();
  s.moveTo(0, 0);
  up.slice(1).forEach(([x, y]) => s.lineTo(x * c, y * c));
  lo.forEach(([x, y]) => s.lineTo(x * c, y * c));
  s.lineTo(0, 0);
  if (hole) {
    const h = new Path(); h.absarc(0.42 * c, 0.04 * c, 0.028 * c, 0, Math.PI * 2, true); s.holes.push(h);
    const h2 = new Path(); h2.absarc(0.62 * c, 0.033 * c, 0.02 * c, 0, Math.PI * 2, true); s.holes.push(h2);
  }
  return s;
}

function buildPlane() {
  const g = new Group();
  const balsa = mat(0xdcbf93, { roughness: 0.9 });
  const balsaDk = mat(0xb48a55, { roughness: 0.85 });
  const sheet = mat(0xe8d3ad, { roughness: 0.9 });
  const black = mat(0x1b1b1b, { roughness: 0.45, metalness: 0.2 });
  const steel = mat(0x9ca3ab, { roughness: 0.35, metalness: 0.7 });
  const copper = mat(0x9b490f, { roughness: 0.35, metalness: 0.6 });

  // --- ala alta con diedro ---
  const c = 0.52, half = 1.32, zLE = 0.36, yW = 0.13, dih = Math.tan(3 * Math.PI / 180);
  const ribGeo = new ExtrudeGeometry(airfoil(c, true), { depth: 0.01, bevelEnabled: false });
  ribGeo.rotateY(Math.PI / 2); ribGeo.translate(-0.005, 0, 0);
  const tipGeo = new ExtrudeGeometry(airfoil(c, false), { depth: 0.022, bevelEnabled: false });
  tipGeo.rotateY(Math.PI / 2); tipGeo.translate(-0.011, 0, 0);
  const n = 11;
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i <= n; i++) {
      const x = side * (0.02 + (half - 0.02) * i / n);
      const tip = i === n || i === 0;
      const r = new Mesh(tip ? tipGeo : ribGeo, tip ? sheet : balsa);
      r.position.set(x, yW + Math.abs(x) * dih, zLE);
      g.add(r);
    }
    const a = (y0, z0) => new Vector3(side * 0.02, yW + y0, z0);
    const b = (y0, z0) => new Vector3(side * half, yW + y0 + half * dih, z0);
    // larguero principal (arriba y abajo), borde de ataque y de salida
    g.add(beam(a(0.1 * c - 0.007, zLE - 0.3 * c), b(0.1 * c - 0.007, zLE - 0.3 * c), 0.014, balsaDk));
    g.add(beam(a(-0.02 * c + 0.007, zLE - 0.3 * c), b(-0.02 * c + 0.007, zLE - 0.3 * c), 0.014, balsaDk));
    g.add(rod(a(0.012, zLE - 0.006), b(0.012, zLE - 0.006), 0.009, sheet));
    g.add(beam(a(0.003, zLE - c + 0.02), b(0.003, zLE - c + 0.02), 0.008, sheet));
  }
  // sección central entelada
  g.add(box(0.06, 0.006, c * 0.92, sheet, 0, yW + 0.1 * c + 0.004, zLE - c * 0.47));

  // --- fuselaje en celosía ---
  const st = [
    [0.66, 0.085, 0.09, -0.07], [0.42, 0.085, 0.11, -0.11], [0.12, 0.08, 0.12, -0.12],
    [-0.2, 0.066, 0.1, -0.1], [-0.52, 0.05, 0.075, -0.07], [-0.84, 0.035, 0.055, -0.045], [-1.14, 0.02, 0.04, -0.02]
  ]; // [z, medio ancho, y arriba, y abajo]
  const P = (s, sx, top) => new Vector3(sx * s[1], top ? s[2] : s[3], s[0]);
  for (let i = 0; i < st.length; i++) {
    const s = st[i];
    // marco
    g.add(beam(P(s, -1, true), P(s, 1, true), 0.012, balsa));
    g.add(beam(P(s, -1, false), P(s, 1, false), 0.012, balsa));
    g.add(beam(P(s, -1, false), P(s, -1, true), 0.012, balsa));
    g.add(beam(P(s, 1, false), P(s, 1, true), 0.012, balsa));
    if (i < st.length - 1) {
      const t = st[i + 1];
      for (const sx of [-1, 1]) {
        g.add(beam(P(s, sx, true), P(t, sx, true), 0.014, balsaDk));
        g.add(beam(P(s, sx, false), P(t, sx, false), 0.014, balsaDk));
        // diagonales en X en los costados
        g.add(beam(P(s, sx, true), P(t, sx, false), 0.008, balsa));
        g.add(beam(P(s, sx, false), P(t, sx, true), 0.008, balsa));
      }
    }
  }
  // pilones del ala
  for (const sx of [-1, 1]) {
    g.add(beam(new Vector3(sx * 0.1, 0.11, 0.36), new Vector3(sx * 0.06, yW, 0.3), 0.012, balsaDk));
    g.add(beam(new Vector3(sx * 0.1, 0.11, -0.12), new Vector3(sx * 0.06, yW, -0.1), 0.012, balsaDk));
  }
  // bancada del motor, motor, cono y hélice
  g.add(box(0.19, 0.17, 0.012, sheet, 0, 0.01, 0.67));
  const motor = cyl(0.05, 0.05, 0.1, steel); motor.rotation.x = Math.PI / 2; motor.position.set(0, 0.01, 0.73); g.add(motor);
  const spinner = new Mesh(new ConeGeometry(0.045, 0.1, 24), copper); spinner.rotation.x = Math.PI / 2; spinner.position.set(0, 0.01, 0.83); g.add(spinner);
  const prop = new Group(); prop.position.set(0, 0.01, 0.8);
  for (const s of [-1, 1]) {
    const blade = box(0.035, 0.3, 0.008, mat(0x1b1b1b, { roughness: 0.45, transparent: true, opacity: 0.28 }), 0, s * 0.16, 0);
    blade.rotation.y = s * 0.35; prop.add(blade);
  }
  g.add(prop);

  // --- cola ---
  const zT = -1.08, cT = 0.26, spanT = 0.42;
  const tRib = new BoxGeometry(0.008, 0.012, cT);
  for (let i = -4; i <= 4; i++) {
    const r = new Mesh(tRib, Math.abs(i) === 4 ? sheet : balsa); r.position.set(i * spanT / 4, 0.03, zT - cT / 2); g.add(r);
  }
  g.add(beam(new Vector3(-spanT, 0.03, zT), new Vector3(spanT, 0.03, zT), 0.012, balsaDk));
  g.add(beam(new Vector3(-spanT, 0.03, zT - cT), new Vector3(spanT, 0.03, zT - cT), 0.01, balsaDk));
  // deriva
  const f0 = new Vector3(0, 0.04, -0.98), f1 = new Vector3(0, 0.36, -1.2), f2 = new Vector3(0, 0.36, -1.32), f3 = new Vector3(0, 0.04, -1.3);
  [[f0, f1], [f1, f2], [f2, f3], [f3, f0]].forEach(([a, b]) => g.add(beam(a, b, 0.012, balsaDk)));
  for (let k = 1; k <= 3; k++) {
    const y = 0.04 + k * 0.08; const zf = -0.98 - (y - 0.04) / 0.32 * 0.22;
    g.add(beam(new Vector3(0, y, zf), new Vector3(0, y, -1.3 - (y - 0.04) / 0.32 * 0.02), 0.008, balsa));
  }

  // --- tren de aterrizaje ---
  for (const sx of [-1, 1]) {
    g.add(rod(new Vector3(sx * 0.1, -0.11, 0.3), new Vector3(sx * 0.27, -0.36, 0.27), 0.008, steel));
    const w = new Mesh(new TorusGeometry(0.055, 0.02, 10, 28), black); w.rotation.y = Math.PI / 2; w.position.set(sx * 0.29, -0.36, 0.27); g.add(w);
  }
  g.add(rod(new Vector3(0, -0.07, 0.62), new Vector3(0, -0.36, 0.64), 0.007, steel));
  const nw = new Mesh(new TorusGeometry(0.045, 0.017, 10, 24), black); nw.rotation.y = Math.PI / 2; nw.position.set(0, -0.36, 0.64); g.add(nw);

  g.position.y = 0.05;
  return {
    group: g, size: 3.0, dist: [2.35, 4.4], offY: [0.06, 0.29],
    tick(t) {
      prop.rotation.z = t * 38;
      g.position.y = 0.05 + Math.sin(t * 0.9) * 0.05;
      g.rotation.z = Math.sin(t * 0.55) * 0.07;
      g.rotation.x = Math.sin(t * 0.7) * 0.025;
    }
  };
}

/* ===================== Mini fábrica ===================== */
function buildFactory() {
  const g = new Group();
  const white = mat(0xf2f2f2, { roughness: 0.75 });
  const grey = mat(0xd9dadc, { roughness: 0.7 });
  const dark = mat(0x2b2b2b, { roughness: 0.6 });
  const belt = mat(0x3a3a3a, { roughness: 0.5 });
  const steel = mat(0xb8bec5, { roughness: 0.3, metalness: 0.7 });
  const kraft = mat(0xc9a46b, { roughness: 0.85 });
  const copper = mat(0x9b490f, { roughness: 0.35, metalness: 0.6 });
  const wood = mat(0xb08a5a, { roughness: 0.9 });
  const glass = mat(0xbfd6e6, { roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.55 });

  // zócalo de maqueta
  g.add(box(3.3, 0.16, 2.3, dark, 0, -0.08, 0));
  g.add(box(3.24, 0.04, 2.24, white, 0, 0.02, 0));
  // líneas de seguridad en el piso
  const lane = mat(0xd9a400, { roughness: 0.6 });
  g.add(box(2.9, 0.004, 0.02, lane, 0, 0.042, 0.42));
  g.add(box(2.9, 0.004, 0.02, lane, 0, 0.042, -0.05));
  // muros en corte (dos lados) con ventanas
  g.add(box(3.2, 0.42, 0.04, white, 0, 0.25, -1.1));
  g.add(box(0.04, 0.42, 2.2, white, -1.6, 0.25, 0));
  for (let i = 0; i < 6; i++) g.add(box(0.36, 0.1, 0.045, glass, -1.25 + i * 0.5, 0.33, -1.1));
  for (let i = 0; i < 4; i++) g.add(box(0.045, 0.1, 0.32, glass, -1.6, 0.33, -0.75 + i * 0.5));

  const parts = [];
  // silos con conos y patas
  for (let i = 0; i < 3; i++) {
    const x = -1.35 + i * 0.28, z = -0.8;
    g.add(cyl(0.11, 0.11, 0.55, white, x, 0.62, z));
    const cone = new Mesh(new ConeGeometry(0.11, 0.14, 24), white); cone.rotation.x = Math.PI; cone.position.set(x, 0.28, z); g.add(cone);
    for (const [dx, dz] of [[-0.08, -0.08], [0.08, -0.08], [-0.08, 0.08], [0.08, 0.08]]) g.add(rod(new Vector3(x + dx, 0.04, z + dz), new Vector3(x + dx, 0.38, z + dz), 0.008, steel));
    g.add(cyl(0.025, 0.025, 0.08, copper, x, 0.94, z, 12));
  }
  // amasadora y formadora
  g.add(box(0.3, 0.22, 0.26, grey, -1.2, 0.15, -0.25));
  g.add(cyl(0.11, 0.09, 0.12, steel, -1.2, 0.32, -0.25));
  g.add(box(0.34, 0.16, 0.22, white, -0.8, 0.12, 0.18));
  // horno túnel con chimeneas
  g.add(box(1.3, 0.2, 0.26, white, 0.0, 0.14, 0.18));
  g.add(box(1.3, 0.035, 0.27, dark, 0.0, 0.08, 0.18));
  for (let i = 0; i < 5; i++) g.add(box(0.012, 0.16, 0.272, grey, -0.52 + i * 0.26, 0.15, 0.18));
  g.add(cyl(0.03, 0.03, 0.34, steel, -0.35, 0.4, 0.18, 12));
  g.add(cyl(0.03, 0.03, 0.34, steel, 0.35, 0.4, 0.18, 12));
  // enfriador en espiral
  g.add(cyl(0.2, 0.2, 0.42, white, 1.05, 0.25, -0.55));
  for (let i = 0; i < 5; i++) {
    const tor = new Mesh(new TorusGeometry(0.205, 0.008, 6, 40), dark); tor.rotation.x = Math.PI / 2; tor.position.set(1.05, 0.1 + i * 0.08, -0.55); g.add(tor);
  }
  // transportador principal (vuelta en U) y cajas que avanzan
  const path = [new Vector3(-1.02, 0.1, 0.62), new Vector3(1.2, 0.1, 0.62), new Vector3(1.2, 0.1, 0.92), new Vector3(-0.4, 0.1, 0.92)];
  const segs = [];
  let total = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1], len = a.distanceTo(b);
    const horiz = Math.abs(a.x - b.x) > 0.001;
    g.add(box(horiz ? len + 0.12 : 0.12, 0.025, horiz ? 0.12 : len + 0.12, belt, (a.x + b.x) / 2, 0.08, (a.z + b.z) / 2));
    g.add(box(horiz ? len + 0.12 : 0.14, 0.02, horiz ? 0.14 : len + 0.12, steel, (a.x + b.x) / 2, 0.06, (a.z + b.z) / 2));
    segs.push({ a, b, len, start: total }); total += len;
  }
  const crates = [];
  for (let i = 0; i < 12; i++) { const c = box(0.08, 0.06, 0.07, kraft); g.add(c); crates.push(c); }
  // embolsadora / encajonadora
  g.add(box(0.3, 0.2, 0.22, grey, 0.35, 0.12, 0.62));
  g.add(box(0.26, 0.08, 0.2, glass, 0.35, 0.26, 0.62));
  g.add(box(0.26, 0.18, 0.24, white, 0.95, 0.11, 0.92));
  // brazo robot de paletizado
  const robot = new Group(); robot.position.set(-0.75, 0.04, 0.92);
  robot.add(cyl(0.07, 0.08, 0.06, dark, 0, 0.03, 0));
  const turn = new Group(); turn.position.y = 0.06; robot.add(turn);
  turn.add(cyl(0.045, 0.045, 0.08, copper, 0, 0.04, 0));
  const arm1 = new Group(); arm1.position.y = 0.08; turn.add(arm1);
  arm1.add(box(0.04, 0.28, 0.04, white, 0, 0.14, 0)); arm1.rotation.z = -0.35;
  const arm2 = new Group(); arm2.position.y = 0.28; arm1.add(arm2);
  arm2.add(box(0.24, 0.035, 0.035, white, 0.12, 0, 0)); arm2.rotation.z = -0.25;
  arm2.add(box(0.03, 0.06, 0.03, dark, 0.24, -0.03, 0));
  g.add(robot);
  // tarimas con cajas
  for (const [px, pz] of [[-1.25, 0.92], [-1.25, 0.55]]) {
    g.add(box(0.26, 0.03, 0.22, wood, px, 0.06, pz));
    for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) for (let h = 0; h < 2; h++) g.add(box(0.11, 0.07, 0.095, kraft, px - 0.06 + a * 0.12, 0.115 + h * 0.075, pz - 0.05 + b * 0.1));
  }
  // montacargas que va y viene
  const fork = new Group();
  fork.add(box(0.12, 0.07, 0.18, copper, 0, 0.06, 0));
  fork.add(box(0.1, 0.06, 0.05, dark, 0, 0.12, -0.03));
  fork.add(box(0.012, 0.18, 0.012, steel, -0.04, 0.14, 0.09)); fork.add(box(0.012, 0.18, 0.012, steel, 0.04, 0.14, 0.09));
  fork.add(box(0.1, 0.008, 0.1, steel, 0, 0.04, 0.14));
  g.add(fork);
  // balizas de estado
  const beacons = [];
  const addBeacon = (x, y, z, col, blink) => {
    g.add(rod(new Vector3(x, y - 0.12, z), new Vector3(x, y, z), 0.005, steel));
    const m = mat(col, { emissive: col, emissiveIntensity: 1.2, roughness: 0.3 });
    const s = new Mesh(new SphereGeometry(0.022, 14, 10), m); s.position.set(x, y + 0.01, z); g.add(s);
    beacons.push({ m, blink });
  };
  addBeacon(-1.2, 0.52, -0.25, 0x22c55e, false);
  addBeacon(0.0, 0.38, 0.18, 0xef4444, true);
  addBeacon(1.05, 0.6, -0.55, 0x22c55e, false);
  addBeacon(0.35, 0.44, 0.62, 0xf59e0b, true);
  addBeacon(0.95, 0.34, 0.92, 0x22c55e, false);

  const tmp = new Vector3();
  function along(d) {
    d = ((d % total) + total) % total;
    for (const s of segs) if (d <= s.start + s.len) return tmp.copy(s.a).lerp(s.b, (d - s.start) / s.len);
    return tmp.copy(path[path.length - 1]);
  }
  return {
    group: g, size: 3.6, tilt: true, dist: [3.0, 5.4], offY: [0.0, 0.3],
    tick(t) {
      crates.forEach((c, i) => { const p = along(t * 0.22 + i * total / crates.length); c.position.set(p.x, 0.125, p.z); });
      turn.rotation.y = Math.sin(t * 0.8) * 1.2;
      arm1.rotation.z = -0.35 + Math.sin(t * 1.6) * 0.15;
      fork.position.set(-0.3 + Math.sin(t * 0.45) * 0.75, 0, 0.2 + 0.0);
      fork.position.z = 0.27;
      fork.rotation.y = Math.cos(t * 0.45) > 0 ? -Math.PI / 2 : Math.PI / 2;
      beacons.forEach(b => { if (b.blink) b.m.emissiveIntensity = 0.3 + (Math.sin(t * 5) > 0 ? 1.4 : 0); });
    }
  };
}

/* ===================== Montaje ===================== */
export function mount(host, opts = {}) {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try { renderer = new WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return null; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const canvas = renderer.domElement; canvas.className = 'hero__model';
  host.appendChild(canvas);

  const scene = new Scene();
  scene.add(new HemisphereLight(0xffffff, 0x9aa6b8, 1.6));
  const sun = new DirectionalLight(0xffffff, 2.4); sun.position.set(-3, 5, 4); scene.add(sun);
  const rim = new DirectionalLight(0xdfe8ff, 1.0); rim.position.set(4, 2, -4); scene.add(rim);

  const builders = { avion: buildPlane, fabrica: buildFactory };
  const cache = {};
  const pivot = new Group(); scene.add(pivot);
  let model = null;
  function setModel(name) {
    name = builders[name] ? name : 'avion';
    if (!cache[name]) cache[name] = builders[name]();
    if (model) pivot.remove(model.group);
    model = cache[name]; pivot.add(model.group);
    layout();
    if (reduced || !visible) render();
  }
  const cam = new PerspectiveCamera(30, 1, 0.1, 100);
  let W = 0, H = 0, mobile = false;
  function layout() {
    W = host.clientWidth; H = host.clientHeight; mobile = W < 800;
    renderer.setSize(W, H, false);
    cam.aspect = W / H;
    const dist = model.size * model.dist[mobile ? 1 : 0];
    const elev = model.tilt ? 0.62 : 0.32;
    cam.position.set(0, Math.sin(elev) * dist, Math.cos(elev) * dist);
    cam.lookAt(0, model.tilt ? 0.15 : 0, 0);
    if (mobile) cam.setViewOffset(W, H, 0, H * model.offY[1], W, H);
    else cam.setViewOffset(W, H, -W * 0.22, H * model.offY[0], W, H);
    cam.updateProjectionMatrix();
  }
  window.addEventListener('resize', layout);

  // girar arrastrando (en horizontal; en móvil no bloquea el scroll vertical)
  let yaw = opts.yaw != null ? opts.yaw : -0.6, vel = 0, drag = null, pitch = 0;
  canvas.style.touchAction = 'pan-y';
  canvas.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY, yaw, pitch }; canvas.setPointerCapture(e.pointerId); canvas.style.cursor = 'grabbing'; });
  canvas.addEventListener('pointermove', e => {
    if (!drag) return;
    yaw = drag.yaw + (e.clientX - drag.x) * 0.008;
    pitch = Math.max(-0.35, Math.min(0.35, drag.pitch + (e.clientY - drag.y) * 0.004));
  });
  const end = () => { drag = null; canvas.style.cursor = 'grab'; };
  canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
  canvas.style.cursor = 'grab';

  let visible = true, last = performance.now(), t = 0;
  setModel(opts.model);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(en => { const was = visible; visible = en[0].isIntersecting; if (visible && !was && !reduced) { last = performance.now(); requestAnimationFrame(loop); } }).observe(host);
  }
  function render() {
    pivot.rotation.y = yaw;
    pivot.rotation.x = (model.tilt ? 0 : 0) + pitch;
    model.tick(t);
    renderer.render(scene, cam);
  }
  function loop(now) {
    if (!visible) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt;
    if (!drag) { pitch *= 0.96; yaw += dt * (model.tilt ? 0.12 : 0.18); }
    render();
    requestAnimationFrame(loop);
  }
  if (reduced) { t = 1.2; render(); } else requestAnimationFrame(loop);
  return { canvas, setModel };
}

window.Maqueta = { mount };
