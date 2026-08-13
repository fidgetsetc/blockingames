<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlockIn Lite (Single-File)</title>
    <style>
        :root {
            --bg-color: #0b0d17;
            --primary-color: #7c5cff;
            --secondary-color: #3adea0;
            --text-color: #f4f2ff;
            --card-bg: #151833;
            --panel-2: #1b1f3b;
            --fog: #9aa0c0;
            --line: rgba(255,255,255,0.09);
            --radius: 12px;
            --font-body: 'Inter', system-ui, sans-serif;
        }

        * { box-sizing: border-box; }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: var(--font-body);
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }

        .experimental-warning {
            background-color: #ff5470;
            color: white;
            width: 100%;
            text-align: center;
            padding: 10px;
            font-size: 0.9em;
            font-weight: bold;
            box-shadow: 0 2px 10px rgba(255, 84, 112, 0.5);
            z-index: 100;
        }

        header {
            margin-top: 20px;
            text-align: center;
            padding: 20px;
            width: 100%;
            max-width: 900px;
        }

        h1 {
            font-size: 2.5em;
            margin: 0 0 5px;
            color: var(--text-color);
        }
        h1 span { color: var(--secondary-color); }
        
        p.subtitle { color: var(--fog); margin-top: 0; }

        #tabs-container {
            display: flex;
            background-color: var(--card-bg);
            border: 1px solid var(--line);
            border-radius: 999px;
            padding: 6px;
            gap: 4px;
            margin-bottom: 30px;
            width: 90%;
            max-width: 600px;
        }

        .tab-button {
            flex: 1;
            padding: 10px;
            background: transparent;
            color: var(--fog);
            border: none;
            border-radius: 999px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.2s;
        }

        .tab-button.active {
            background-color: var(--primary-color);
            color: white;
        }

        .tab-content { display: none; width: 100%; max-width: 1100px; padding: 0 20px; }
        .tab-content.active { display: block; }

        .item-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding-bottom: 50px;
        }

        .item-card {
            background: var(--card-bg);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 12px;
            width: 180px;
            text-align: center;
            display: flex;
            flex-direction: column;
            transition: transform 0.2s;
        }

        .item-card:hover { transform: translateY(-4px); border-color: var(--primary-color); }

        .item-card img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
            background: #000;
        }

        .item-card h3 {
            font-size: 0.95em;
            margin: 0 0 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .item-card button {
            margin-top: auto;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 999px;
            padding: 8px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.2s;
        }
        .item-card button:hover { background: #6845e0; }

        .player-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.95);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .player-overlay.active { opacity: 1; visibility: visible; }

        .iframe-container {
            width: 100%;
            max-width: 1200px;
            height: 75vh;
            background: #000;
            border-radius: var(--radius);
            border: 1px solid var(--line);
            overflow: hidden;
            position: relative;
        }
        
        .loading-overlay {
            position: absolute;
            inset: 0;
            background: var(--bg-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: opacity 0.3s;
        }

        .loading-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .loading-bar-container {
            width: 60%;
            max-width: 400px;
            height: 8px;
            background: var(--card-bg);
            border-radius: 999px;
            overflow: hidden;
            border: 1px solid var(--line);
        }

        .loading-bar-fill {
            height: 100%;
            width: 0%;
            background: var(--secondary-color);
            transition: width 0.3s ease;
        }

        .loading-text {
            margin-top: 15px;
            color: var(--fog);
            font-size: 0.9em;
            font-weight: bold;
        }

        .iframe-container iframe { width: 100%; height: 100%; border: none; }

        .player-controls {
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }

        .player-controls button {
            background: var(--card-bg);
            color: white;
            border: 1px solid var(--line);
            padding: 10px 20px;
            border-radius: 999px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.2s;
        }
        
        .player-controls button:hover { background: #23284f; }
        .player-controls button.close-btn { background: #ff5470; border-color: #ff5470; }
        .player-controls button.close-btn:hover { background: #e04a62; }

        .control-group {
            display: flex;
            gap: 8px;
            align-items: center;
            background: var(--card-bg);
            border: 1px solid var(--line);
            border-radius: 999px;
            padding: 4px 16px;
        }

        .control-group select {
            background: transparent;
            color: white;
            border: none;
            outline: none;
            font-family: var(--font-body);
            font-size: 0.9em;
            cursor: pointer;
            padding: 4px;
        }

        .control-group select option {
            background: var(--card-bg);
            color: white;
        }

        .control-divider {
            width: 1px;
            height: 20px;
            background: var(--line);
            margin: 0 4px;
        }

        #settings-tab { text-align: center; color: var(--fog); max-width: 600px; margin: 0 auto; }
        .log-box {
            background: #000;
            color: #3adea0;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 0.85em;
            text-align: left;
            height: 300px;
            overflow-y: auto;
            margin-top: 20px;
            border: 1px solid var(--line);
        }
    </style>
</head>
<body>

    <div class="experimental-warning">
        ⚠️ WARNING: This lightweight single-file version is experimental. Some games/apps may not load properly.
    </div>

    <header>
        <h1>BlockIn<span>.</span></h1>
        <p class="subtitle">Super Lightweight Edition</p>
    </header>

    <div id="tabs-container">
        <button class="tab-button active" onclick="switchTab('games')">Games</button>
        <button class="tab-button" onclick="switchTab('apps')">Apps</button>
        <button class="tab-button" onclick="switchTab('videos')">Videos</button>
        <button class="tab-button" onclick="switchTab('settings')">Dev Logs</button>
    </div>

    <!-- Content Containers -->
    <div id="games-tab" class="tab-content active"><div class="item-grid" id="games-grid">Loading...</div></div>
    <div id="apps-tab" class="tab-content"><div class="item-grid" id="apps-grid">Loading...</div></div>
    <div id="videos-tab" class="tab-content"><div class="item-grid" id="videos-grid">Loading...</div></div>
    
    <div id="settings-tab" class="tab-content">
        <h3>Integration Logs</h3>
        <p>This panel shows the status of the launchables data fetching and domain loading.</p>
        <div class="log-box" id="logs"></div>
    </div>

    <div class="player-overlay" id="playerOverlay">
        <div class="iframe-container" id="playerContainer">
            <div id="loadingOverlay" class="loading-overlay hidden">
                <div class="loading-bar-container">
                    <div id="loadingBarFill" class="loading-bar-fill"></div>
                </div>
                <div id="loadingText" class="loading-text">Loading...</div>
            </div>
            <iframe id="gameIframe" src=""></iframe>
            <video id="videoPlayer" controls style="display: none; width: 100%; height: 100%; background: #000; outline: none;"></video>
        </div>
        <div class="player-controls">
            <button onclick="toggleFullscreen()">Fullscreen</button>
            
            <!-- Proper Dropdown Controls for Network Methods -->
            <div class="control-group">
                <select id="domainSelect" onchange="handleSettingsChange()" title="Select Proxy Domain">
                    <option value="default">🌐 Default Domain</option>
                    <option value="random">🎲 Random Domain</option>
                    <!-- Dynamically populated options will go here -->
                </select>
                
                <div class="control-divider"></div>
                
                <select id="methodSelect" onchange="handleSettingsChange()" title="Select Launch Method">
                    <option value="iframe">📄 Direct IFrame (Standard)</option>
                    <option value="blob">📦 Proxy Fetch -> Blob</option>
                    <option value="jsdelivr-blob">⚡ JSDelivr Fetch -> Blob</option>
                </select>
            </div>

            <button onclick="openCurrentInNewTab()">Open in New Tab</button>
            <button class="close-btn" onclick="closePlayer()">Close Player</button>
        </div>
        <div style="color: var(--fog); font-size: 0.9em; margin-top: 15px; text-align: center; font-weight: bold;">
            💡 If your launchable isn't working, change the methods in the dropdown.
        </div>
    </div>

    <script>
        const CONFIG = {
            DATA_URL: 'https://cdn.jsdelivr.net/gh/fidgetsetc/blockingames@main/playing/launchables.js',
            DOMAINS_URL: 'https://cdn.jsdelivr.net/gh/fidgetsetc/blockingames@main/domains.txt',
            IMAGE_BASE_URL: 'https://cdn.jsdelivr.net/gh/fidgetsetc/blockingames@main/playing/',
            HTML_BASE_URL: 'https://cdn.jsdelivr.net/gh/fidgetsetc/blockingames@main/playing/'
        };

        let launchablesData = { apps: [], games: [], videos: [] };
        let validDomains = [];
        let currentLoadedUrl = '';
        let fakeProgressInterval;
        
        // Save the active item so we can re-evaluate URL builds when dropdowns change
        let activeItemState = null; 

        function updateProgress(percent, text) {
            const bar = document.getElementById('loadingBarFill');
            const label = document.getElementById('loadingText');
            if(bar) bar.style.width = percent + '%';
            if(label && text) label.innerText = text;
        }

        function startFakeProgress() {
            let p = 10;
            clearInterval(fakeProgressInterval);
            fakeProgressInterval = setInterval(() => {
                p += (Math.random() * 10);
                if(p > 85) p = 85;
                updateProgress(p, 'Loading assets...');
            }, 500);
        }

        function stopFakeProgress() {
            clearInterval(fakeProgressInterval);
        }

        function logMsg(msg, isError = false) {
            const logs = document.getElementById('logs');
            if(!logs) return;
            const prefix = isError ? '[ERROR] ' : '[INFO] ';
            logs.innerHTML += prefix + msg + '\n';
            logs.scrollTop = logs.scrollHeight;
            if (isError) console.error(msg);
        }

        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId + '-tab').classList.add('active');
            event.target.classList.add('active');
        }

        function resolvePath(path, baseUrl) {
            if (!path || path === 'undefined') return '';
            if (path.startsWith('./')) return baseUrl + path.substring(2);
            if (path.startsWith('http')) return path;
            return baseUrl + path;
        }

        async function fetchDomains() {
            try {
                logMsg(`Fetching valid domains...`);
                const response = await fetch(CONFIG.DOMAINS_URL);
                const text = await response.text();
                
                validDomains = text.split('\n')
                    .map(d => d.trim())
                    .filter(d => d.length > 0 && d.startsWith('http'));
                
                logMsg(`Loaded ${validDomains.length} official domains.`);
                populateDomainDropdown();
            } catch (error) {
                logMsg(`Domain fetch failed: ${error.message}`, true);
                validDomains = []; 
            }
        }

        function populateDomainDropdown() {
            const select = document.getElementById('domainSelect');
            // Keep default and random options
            select.innerHTML = `
                <option value="default">🌐 Default Domain</option>
                <option value="random">🎲 Random Domain</option>
            `;
            // Append loaded domains dynamically
            validDomains.forEach(domain => {
                const opt = document.createElement('option');
                opt.value = domain;
                // Make display name cleaner by stripping http:// and trailing slashes
                opt.textContent = '🔗 ' + domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
                select.appendChild(opt);
            });
        }

        async function fetchLaunchablesData() {
            try {
                logMsg(`Fetching raw data from repository...`);
                const response = await fetch(CONFIG.DATA_URL);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const scriptText = await response.text();

                function extractArrayItems(rawText, arrayName) {
                    const parsedItems = [];
                    const arrayStart = rawText.indexOf(`${arrayName} = [`);
                    if (arrayStart === -1) return parsedItems;

                    const bracketStart = rawText.indexOf('[', arrayStart);
                    let bracketEnd = rawText.indexOf('];', bracketStart);
                    if (bracketEnd === -1) bracketEnd = rawText.indexOf(']', bracketStart);
                    
                    if (bracketStart === -1 || bracketEnd === -1) return parsedItems;
                    const arrayContent = rawText.substring(bracketStart + 1, bracketEnd).trim();
                    const entries = arrayContent.split('},');

                    entries.forEach(entry => {
                        entry = entry.trim();
                        if (entry.endsWith(',')) entry = entry.slice(0, -1).trim();
                        if (!entry) return;
                        if (!entry.endsWith('}')) entry += '}';

                        try {
                            const parsedObj = new Function(`return ${entry}`)();
                            if (parsedObj) parsedItems.push(parsedObj);
                        } catch(e) {}
                    });
                    return parsedItems;
                }

                launchablesData.apps = extractArrayItems(scriptText, 'APPS');
                launchablesData.games = extractArrayItems(scriptText, 'STATIC_GAMES');
                launchablesData.videos = extractArrayItems(scriptText, 'VIDEOS');
                logMsg(`Parsed: Apps(${launchablesData.apps.length}), Games(${launchablesData.games.length}), Videos(${launchablesData.videos.length})`);
            } catch (error) {
                logMsg(`Data fetch failed: ${error.message}`, true);
            }
        }

        async function createBlobUrlFromHtml(htmlPath, baseUrl) {
            try {
                const absoluteHtmlUrl = resolvePath(htmlPath, baseUrl || CONFIG.HTML_BASE_URL);
                const response = await fetch(absoluteHtmlUrl);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                let text = await response.text();
                
                // Inject <base> tag to fix relative paths (CSS, JS, Images) within the blob iframe
                const basePath = absoluteHtmlUrl.substring(0, absoluteHtmlUrl.lastIndexOf('/') + 1);
                const baseTag = `<base href="${basePath}">`;
                
                if (text.toLowerCase().includes('<head>')) {
                    text = text.replace(/<head>/i, `<head>\n    ${baseTag}`);
                } else {
                    text = baseTag + text;
                }

                const blob = new Blob([text], { type: 'text/html' });
                return URL.createObjectURL(blob);
            } catch (err) {
                logMsg(`Blob creation failed: ${err.message}`, true);
                return null;
            }
        }

        function handleLaunch(itemSrc, isHtmlTarget, isVideo = false) {
            if (!itemSrc) return logMsg(`Launch Error: Invalid item source`, true);
            
            // Store active state for live dropdown updates
            activeItemState = {
                src: itemSrc,
                isHtml: isHtmlTarget,
                isVideo: isVideo
            };
            
            executeLaunch();
        }

        function handleSettingsChange() {
            if (activeItemState) {
                logMsg('Settings changed, dynamically re-routing iframe...');
                executeLaunch();
            }
        }

        async function executeLaunch() {
            if (!activeItemState) return;

            // Show UI immediately
            document.getElementById('playerOverlay').classList.add('active');
            document.getElementById('loadingOverlay').classList.remove('hidden');
            updateProgress(5, 'Initializing Launch Route...');
            startFakeProgress();

            const domainSelection = document.getElementById('domainSelect').value;
            const methodSelection = document.getElementById('methodSelect').value;

            let finalUrl = '';
            let domainToUse = CONFIG.HTML_BASE_URL;

            // Evaluate Domain selection logic (Fixes Randomization)
            if (domainSelection === 'random') {
                if (validDomains.length > 0) {
                    domainToUse = validDomains[Math.floor(Math.random() * validDomains.length)];
                    logMsg(`Random Domain Selected: ${domainToUse}`);
                } else {
                    logMsg('Random domain selected, but no valid domains exist. Falling back to default.');
                }
            } else if (domainSelection !== 'default') {
                domainToUse = domainSelection;
            }

            // Evaluate Method selection logic
            if ((methodSelection === 'blob' || methodSelection === 'jsdelivr-blob') && activeItemState.isHtml) {
                updateProgress(20, 'Fetching raw HTML (Blob Method)...');
                
                let fetchBaseUrl = CONFIG.HTML_BASE_URL; // Default directly to jsdelivr for JSDelivr-Blob
                
                // If using the standard proxy blob, match the base URL to the selected proxy domain
                if (methodSelection === 'blob') {
                    let cleanDomain = domainToUse.endsWith('/') ? domainToUse : domainToUse + '/';
                    if(!cleanDomain.includes('playing')) cleanDomain += 'playing/';
                    fetchBaseUrl = cleanDomain;
                }

                const blobUrl = await createBlobUrlFromHtml(activeItemState.src, fetchBaseUrl);
                if (blobUrl) {
                    finalUrl = blobUrl;
                    logMsg(`Successfully created blob proxy URL via ${methodSelection}.`);
                } else {
                    logMsg('Blob proxy failed. Falling back to standard iframe routing.', true);
                }
            } 
            
            // Standard Iframe Fallback/Routing
            if (!finalUrl) {
                updateProgress(40, `Resolving via ${domainToUse}...`);
                let cleanDomain = domainToUse.endsWith('/') ? domainToUse : domainToUse + '/';
                if(!cleanDomain.includes('playing')) cleanDomain += 'playing/';
                
                let cleanSrc = activeItemState.src.startsWith('./') ? activeItemState.src.substring(2) : activeItemState.src;
                finalUrl = cleanSrc.startsWith('http') ? cleanSrc : cleanDomain + cleanSrc;
            }

            updateProgress(75, 'Opening container...');
            openPlayer(finalUrl, activeItemState.isVideo);
        }

        function openPlayer(url, isVideo = false) {
            currentLoadedUrl = url;
            const iframe = document.getElementById('gameIframe');
            const video = document.getElementById('videoPlayer');

            const finishLoading = () => {
                stopFakeProgress();
                updateProgress(100, 'Ready!');
                setTimeout(() => {
                    document.getElementById('loadingOverlay').classList.add('hidden');
                }, 400); 
            };

            if (isVideo) {
                iframe.style.display = 'none';
                video.style.display = 'block';
                video.src = url;
                video.onloadeddata = finishLoading;
                video.onerror = finishLoading;
                video.play().catch(e => logMsg(`Video autoplay blocked: ${e.message}`, true));
            } else {
                video.style.display = 'none';
                video.pause();
                video.src = '';
                iframe.style.display = 'block';
                iframe.onload = finishLoading;
                iframe.onerror = finishLoading;
                iframe.src = url;
            }

            logMsg(`Mounted resource: ${url}`);
        }

        function closePlayer() {
            document.getElementById('playerOverlay').classList.remove('active');
            document.getElementById('loadingOverlay').classList.add('hidden');
            stopFakeProgress();
            
            document.getElementById('gameIframe').src = '';
            
            const video = document.getElementById('videoPlayer');
            video.pause();
            video.src = '';
            video.style.display = 'none';
            document.getElementById('gameIframe').style.display = 'block';
            
            currentLoadedUrl = '';
            activeItemState = null;
        }

        function toggleFullscreen() {
            const container = document.getElementById('playerContainer');
            if (!document.fullscreenElement) {
                if (container.requestFullscreen) container.requestFullscreen();
                else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
                else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
                else if (container.msRequestFullscreen) container.msRequestFullscreen();
            } else {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
            }
        }

        function openCurrentInNewTab() {
            if(currentLoadedUrl) window.open(currentLoadedUrl, '_blank');
        }

        function renderGUI() {
            const renderSection = (items, containerId, isVideo = false) => {
                const container = document.getElementById(containerId);
                container.innerHTML = ''; 

                if (!items || items.length === 0) {
                    container.innerHTML = '<p style="color:var(--fog);">No items found.</p>';
                    return;
                }

                items.forEach(item => {
                    const itemImage = item.img || item.image || item.icon || '';
                    const itemSource = item.src || item.url || item.path || item.link || '';
                    const imgUrl = resolvePath(itemImage, CONFIG.IMAGE_BASE_URL);

                    const card = document.createElement('div');
                    card.className = 'item-card';
                    card.innerHTML = `
                        <img src="${imgUrl}" alt="Icon" onerror="this.src='https://placehold.co/150x150/1b1f3b/ffffff?text=No+Img'">
                        <h3>${item.name || 'Unnamed'}</h3>
                        <button onclick="handleLaunch('${itemSource}', ${!isVideo}, ${isVideo})">Launch</button>
                    `;
                    container.appendChild(card);
                });
            };

            renderSection(launchablesData.games, 'games-grid', false);
            renderSection(launchablesData.apps, 'apps-grid', false);
            renderSection(launchablesData.videos, 'videos-grid', true);
            logMsg("GUI Rendered successfully.");
        }

        async function init() {
            logMsg("Starting BlockIn Lite Engine...");
            await fetchDomains();
            await fetchLaunchablesData();
            renderGUI();
        }

        window.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>