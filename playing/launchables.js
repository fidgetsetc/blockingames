// Apps
const APPS = [
  { id: 'app-duck', name: 'DuckMath', h2: 'Are the games not good enough? Here is a new site, but suggestions are recommended', img: './img/duck.avif', path: './html/duck/index.html' },
  { id: 'app-deb', name: 'Debian Terminal', h2: 'A simulated Debian terminal! Familar to Debian, Ubuntu, Mint, Pi, and similar users.', img: './img/deb.png', path: './html/deb/index.html' }, 
  { id: 'app-bd', name: 'Bouncing Distros', h2: 'Bouncing logos of Linux distros. We are not affiliated with any distros.', img: './img/ldb.png', path: './html/ldb/index.html' },
  { id: 'app-yio', name: 'Yell It Out', h2: 'Just go type things to channels, see if someone recieves it, sorta a pseudo chat!', img: './img/yio.png', path: './html/yio/index.html?x=1' },
  { id: 'app-dowb', name: 'Doge Randomizer Web Browser', h2: 'Randomized l!nks for Doge', img: './img/dbr.png', path: './html/browser/index.html?x=1' }, 
  { id: 'app-mcs', name: 'Minecraf+ Server List', h2: 'Get servers for MC', img: './img/mc.webp', path: './html/mcserver/index.html' },
  { id: 'app-fl', name: 'FileLock', h2: 'Store and lock your files with privacy.', img: './img/fl.png', path: './html/fl/index.html' },
  { id: 'app-ytm', name: 'Music w/ YT', h2: 'Listen to tons of music.', img: './img/ytm.png', path: './html/ytm/index.html' },
];
// Games
const STATIC_GAMES = [
  { id: 'game-brick', name: 'Brick', h2: 'Theres a ton of locked tablets. Guess youll toss bricks!', img: './img/brick.png', path: './html/brick/index.html?x=1' },
  { id: 'game-bp', name: 'Bad Piggies', h2: 'Build contraptions to get to the end. Tip: Use cheats and use Field of Dreams to build almost anything', img: './img/bp.webp', path: './html/bp/index.html' },
  { id: 'game-ctr', name: 'Cut The Rope', h2: 'Cut some ropes and feed candy to Om Nom!', img: './img/ctr.png', path: './html/ctr/index.html' },
  { id: 'game-sm', name: 'Slice Master', h2: 'Become the master of slicing.', img: './img/sm.png', path: './html/sm/index.html' },
  { id: 'game-smb', name: 'Super Mario Bros', h2: 'Rescue Peach from Bowser and defeat other monsters on the way.', img: './img/smb.jpg', path: './html/smb/index.html' },
  { id: 'game-fnf', name: 'FNF', h2: 'Can you keep up with the rhythm?', img: './img/fnf.webp', path: './html/fnf/index.html' },
  { id: 'game-fb', name: 'Flappy Bird', h2: 'Flap! Flap! Flap thru pipes!', img: './img/fb.jpg', path: './html/fb/index.html' },
  { id: 'game-bb', name: 'Block Blast', h2: 'Place blocks and match to edges.', img: './img/bb.webp', path: './html/duckget/index.html#/class/block-blast' },
  { id: 'game-au', name: 'Among Us', h2: 'A decent web replica. Who is the imposter?! ', img: './img/au.webp', path: './html/au/index.html' },
  { id: 'game-dd4', name: 'Droistroy 4', h2: 'Wreck Android 4. But not with malware!', img: './img/dd4.png', path: './html/dd4/index.html?x=1' },
  { id: 'game-is', name: 'Incredibox Sprunk!', h2: 'This used to be popular. Not a fan of it but my brother likes it so why not. This has a feature to not have the hat.', img: './img/spr.webp', path: './html/spr/index.html?x=1' },
  { id: 'game-mc18', name: 'Minecraf+ 1.8', h2: 'Craft, mine, and build, all in this game. Check out Apps for servers.', img: './img/mc.webp', path: './html/mc18/index.html' },
  { id: 'game-mc112', name: 'Minecraf+ 1.12', h2: 'Craft, mine, and build, all in this game. Check out Apps for servers.', img: './img/mc.webp', path: './html/mc112/index.html' },
  { id: 'game-yuao', name: 'POV: you use an OS many people hate: an endless runner', h2: 'Play as an Ubuntu user running from an Arch user who hates your distro... (THIS IS A BETA AND REALLY BUGGY.)', img: './img/yuao.png', path: './html/yuao/index.html' },
  { id: 'game-abswf', name: 'Angry Birds SWF', h2: 'The eggs were stolen by pigs. The solution? Fling birds at pigs. A decently accurate remake!', path: './html/ab/index.html', img: './img/ab.webp' },
  { id: 'game-cc', name: 'Collab Clicker', h2: 'A bunch of people playing one Cookie Clicker game.', path: './html/cc/index.html', img: './img/cc.png' },
{ id: 'game-cc1', name: 'Cookie Clicker', h2: 'The official Cookie Clicker game. Powered by Duckget.', path: './html/duckget/index.html#/class/cookie-clicker', img: './img/cc1.webp' },
];
// Videos
const VIDEOS = [
  { id: 'vid-ab1', name: 'Angry Birds Movie', h2: 'Flightless birds lead a mostly happy existence, except for Red (Clay Kaytis), who just can not get past the daily annoyances of life. His temperament leads him to anger management class, where he meets fellow misfits Chuck (Fergal Reilly) and Bomb.', img: './img/abm.jpg', src: 'https://archive.org/download/the-angry-birds-movie-us-dvd-2016/The%20Angry%20Birds%20Movie%20%28US%20DVD%29%20%5B2016%5D.mp4' },
  { id: 'vid-ab2', name: 'Angry Birds Movie 2', h2: 'Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine way of life.', img: './img/abm2.webp', src: 'https://archive.org/download/the-angry-birds-movie-2-us-dvd-2019/The%20Angry%20Birds%20Movie%202%20%28US%20DVD%29%20%5B2019%5D.mp4' },
];
