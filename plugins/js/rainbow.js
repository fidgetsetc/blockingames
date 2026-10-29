// Rainbow Accent — cycles the accent colour without re-rendering the desktop
// (mpc.setAccent() re-renders everything each call, which replays all the UI animations).
// Instead we only touch the --accent CSS variable and the few inline accent colours.
const doc = mpc.doc();
const root = doc.documentElement;
const orig = mpc.S().accent;

function paint(c) {
  root.style.setProperty('--accent', c);
  const bg = doc.getElementById('desktop-bg');
  if (bg && !mpc.S().desktopBgImage) bg.style.backgroundColor = c;
  doc.querySelectorAll('.app-win').forEach(w => { w.style.borderTopColor = c; });
  doc.querySelectorAll('.tb-btn.active').forEach(b => { b.style.borderBottomColor = c; });
  const bar = doc.getElementById('start-accent-bar');
  if (bar) bar.style.background = c;
}

let h = 0;
mpc.interval(() => {
  h = (h + 4) % 360;
  paint('hsl(' + h + ',80%,50%)');
}, 60);

mpc.onStop(() => paint(orig));
