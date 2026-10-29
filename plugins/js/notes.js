// Notes — a plugin that bundles its own app.
// Running the plugin installs the "Notes" app (Apps list + desktop icon);
// stopping the plugin removes it. Turn on "Autostart on boot" to keep it available.
const HTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Notes</title>
<style>
  html,body{margin:0;height:100%;background:#1e1e1e;color:#eee;font-family:'Segoe UI',sans-serif}
  body{display:flex;flex-direction:column}
  .top{padding:8px 14px;background:#2a2a2a;font-size:12px;color:#aaa;display:flex;justify-content:space-between}
  textarea{flex:1;border:0;outline:0;resize:none;padding:14px;background:#1e1e1e;color:#eee;font:14px/1.5 Consolas,monospace}
</style>
</head>
<body>
  <div class="top"><span>Notes</span><span id="s">saved</span></div>
  <textarea id="t" placeholder="Start typing…" spellcheck="false"></textarea>
  <script>
    var K='mpc_notes_app',t=document.getElementById('t'),s=document.getElementById('s'),h;
    try{t.value=localStorage.getItem(K)||'';}catch(e){}
    t.oninput=function(){
      s.textContent='saving…';clearTimeout(h);
      h=setTimeout(function(){try{localStorage.setItem(K,t.value);}catch(e){}s.textContent='saved';},300);
    };
  <\/script>
</body>
</html>`;

mpc.addApp({ name: 'Notes', html: HTML, icon: 'file-text', desktop: true });
