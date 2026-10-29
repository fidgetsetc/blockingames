// Window Controls — bundles a settings app for the window buttons.
// Everything is done through the plugin API only (injectCSS + addApp):
//  • enable / disable the Minimize, Maximize and Close buttons
//  • separate settings for NORMAL windows and 1-APP MODE windows
// Running the plugin installs the "Window Controls" app; stopping it removes the app
// and restores the default window buttons.

const KEY = 'mpc_winctl';
const BTN = [['min', 'Minimize'], ['max', 'Maximize'], ['close', 'Close']];
// Defaults match mpcsim's built-in behaviour (1-app mode has no taskbar, so no minimize).
const DEFAULTS = {
  normal: { min: true, max: true, close: true },
  one:    { min: false, max: true, close: true },
  hide: false
};
const clone = o => JSON.parse(JSON.stringify(o));
const guest = () => { try { return !!mpc.host.BOOT.guest; } catch (e) { return false; } };

function sanitize(n) {
  const out = clone(DEFAULTS);
  if (!n || typeof n !== 'object') return out;
  ['normal', 'one'].forEach(p => BTN.forEach(([k]) => {
    if (n[p] && typeof n[p][k] === 'boolean') out[p][k] = n[p][k];
  }));
  out.hide = !!n.hide;
  return out;
}

let cfg = clone(DEFAULTS);
try {
  if (!guest()) cfg = sanitize(JSON.parse(localStorage.getItem(KEY) || 'null'));
} catch (e) {}

// Build the CSS for both window styles. Disabled buttons are greyed out (or hidden).
function buildCSS(c) {
  let out = '';
  [['body:not(.oneapp)', 'normal'], ['body.oneapp', 'one']].forEach(([sel, key]) => {
    BTN.forEach(([k, title]) => {
      const t = sel + ' .win-ctrl[title="' + title + '"]';
      if (!c[key][k]) {
        out += t + (c.hide
          ? '{display:none!important}'
          : '{pointer-events:none!important;opacity:.3!important;filter:grayscale(1)!important;cursor:default!important}') + '\n';
      } else if (key === 'one' && k === 'min') {
        out += t + '{display:flex!important}\n';   // 1-app mode hides Minimize by default
      }
    });
  });
  return out;
}

const style = mpc.injectCSS(buildCSS(cfg));   // removed automatically when the plugin stops

// Small control surface the bundled app talks to
const api = {
  get: () => clone(cfg),
  defaults: () => clone(DEFAULTS),
  mode: () => (mpc.host.BOOT && mpc.host.BOOT.oneApp ? 'one' : 'normal'),
  set(n) {
    cfg = sanitize(n);
    style.textContent = buildCSS(cfg);
    if (!guest()) { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) {} }
  }
};
mpc.host.__mpcWinCtl = api;
mpc.onStop(() => { try { delete mpc.host.__mpcWinCtl; } catch (e) {} });

const HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Window Controls</title>
<style>
  :root{--a:#0078d4}
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;background:#1e1e1e;color:#eee;font-family:'Segoe UI',sans-serif;overflow:auto}
  .wrap{max-width:560px;margin:0 auto;padding:22px 24px 30px}
  h1{font-size:30px;font-weight:200;letter-spacing:-.5px}
  .sub{font-size:12px;color:#888;margin:2px 0 18px}
  .seg{display:flex;gap:4px;margin-bottom:16px}
  .seg button{flex:1;background:#2d2d2d;border:0;border-bottom:3px solid #444;color:#bbb;padding:11px 8px;font:13px 'Segoe UI',sans-serif;cursor:pointer;position:relative}
  .seg button:hover{background:#383838}
  .seg button.on{background:var(--a);color:#fff;border-bottom-color:rgba(255,255,255,.55)}
  .seg .cur{display:block;font-size:10px;letter-spacing:1px;text-transform:uppercase;opacity:.75;margin-top:2px}
  .prev{background:#111;border:1px solid #333;margin-bottom:16px}
  .prev .tb{height:32px;display:flex;align-items:center;padding:0 0 0 10px;background:#000;font-size:12px;color:#bbb}
  .prev .tb .t{flex:1}
  .prev .c{width:42px;height:32px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px}
  .prev .c.off{opacity:.3;filter:grayscale(1)}
  .prev .c.gone{display:none}
  .prev .c.x{background:#c40000;color:#fff}
  .prev .body{padding:14px 12px;font-size:12px;color:#777}
  .row{display:flex;align-items:center;gap:14px;background:#2a2a2a;padding:12px 14px;margin-bottom:4px}
  .row .tx{flex:1}
  .row .n{font-size:14px}
  .row .d{font-size:11px;color:#999;margin-top:2px}
  .sw{position:relative;width:46px;height:22px;border:2px solid #888;background:transparent;cursor:pointer;flex-shrink:0}
  .sw::after{content:'';position:absolute;top:3px;left:3px;width:12px;height:12px;background:#ccc;transition:left .12s}
  .sw.on{background:var(--a);border-color:var(--a)}
  .sw.on::after{left:27px;background:#fff}
  .lab{font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:#999;margin:18px 0 8px}
  .note{font-size:11px;color:#e8b04a;line-height:1.5;margin:8px 0 0}
  .foot{margin-top:20px;display:flex;gap:6px}
  .foot button{background:#2d2d2d;border:0;border-bottom:2px solid #444;color:#fff;padding:8px 16px;font:13px 'Segoe UI',sans-serif;cursor:pointer}
  .foot button:hover{background:#3a3a3a;border-bottom-color:var(--a)}
  .err{color:#ff6b6b;font-size:13px;padding:30px}
</style>
</head>
<body>
<div class="wrap" id="app"></div>
<script>
  var api=null;
  try{api=parent.__mpcWinCtl;}catch(e){}
  try{var ac=getComputedStyle(parent.document.documentElement).getPropertyValue('--accent').trim();if(ac)document.documentElement.style.setProperty('--a',ac);}catch(e){}
  var app=document.getElementById('app');
  if(!api){
    app.innerHTML='<div class="err">The Window Controls plugin is not running. Start it from the Plugins app.</div>';
  }else{
    var BTN=[
      ['min','Minimize','Hide the window (restore it from the taskbar)'],
      ['max','Maximize','Toggle between full size and windowed'],
      ['close','Close','Close the window']
    ];
    var cfg=api.get(),prof=api.mode();
    var NAMES={normal:'Normal windows',one:'1-app mode windows'};
    var save=function(){api.set(cfg);draw();};
    var el=function(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;};
    var draw=function(){
      app.innerHTML='';
      app.appendChild(el('h1','','Window controls'));
      app.appendChild(el('div','sub','Enable or disable the window buttons. Normal and 1-app mode windows have separate settings.'));

      var seg=el('div','seg');
      ['normal','one'].forEach(function(k){
        var b=el('button',prof===k?'on':'',NAMES[k]);
        if(api.mode()===k)b.appendChild(el('span','cur','current mode'));
        b.onclick=function(){prof=k;draw();};
        seg.appendChild(b);
      });
      app.appendChild(seg);

      var pv=el('div','prev'),tb=el('div','tb');
      tb.appendChild(el('span','t',NAMES[prof]+' — preview'));
      [['min','─'],['max','□'],['close','✕']].forEach(function(x){
        var on=cfg[prof][x[0]];
        var c=el('div','c'+(x[0]==='close'?' x':'')+(on?'':(cfg.hide?' gone':' off')),x[1]);
        tb.appendChild(c);
      });
      pv.appendChild(tb);pv.appendChild(el('div','body','Window contents'));
      app.appendChild(pv);

      app.appendChild(el('div','lab','Buttons'));
      BTN.forEach(function(b){
        var row=el('div','row'),tx=el('div','tx');
        tx.appendChild(el('div','n',b[1]));tx.appendChild(el('div','d',b[2]));
        var sw=el('div','sw'+(cfg[prof][b[0]]?' on':''));
        sw.title=cfg[prof][b[0]]?'Enabled':'Disabled';
        sw.onclick=function(){cfg[prof][b[0]]=!cfg[prof][b[0]];save();};
        row.appendChild(tx);row.appendChild(sw);app.appendChild(row);
      });
      if(prof==='one'&&cfg.one.min)
        app.appendChild(el('div','note','Heads up: 1-app mode has no taskbar, so a minimized window cannot be brought back.'));

      app.appendChild(el('div','lab','Disabled buttons'));
      var hr=el('div','row'),ht=el('div','tx');
      ht.appendChild(el('div','n','Hide instead of greying out'));
      ht.appendChild(el('div','d','Applies to both window styles'));
      var hs=el('div','sw'+(cfg.hide?' on':''));
      hs.onclick=function(){cfg.hide=!cfg.hide;save();};
      hr.appendChild(ht);hr.appendChild(hs);app.appendChild(hr);

      var foot=el('div','foot'),rs=el('button','','Reset to defaults');
      rs.onclick=function(){cfg=api.defaults();save();};
      foot.appendChild(rs);app.appendChild(foot);
    };
    draw();
  }
<\/script>
</body>
</html>`;

mpc.addApp({ name: 'Window Controls', html: HTML, icon: 'window', desktop: true });
