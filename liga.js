/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'friendlycaptcha': '&#xea1e;',
            '9gag': '&#xe984;',
            'portfolio': '&#xe943;',
            'adobeportfolio': '&#xe943;',
            'airbnb': '&#xe002;',
            'aliexpress': '&#xe91d;',
            'alibaba': '&#xe922;',
            'alliance': '&#xe003;',
            'amazon': '&#xe004;',
            'amplement': '&#xe005;',
            'android': '&#xe006;',
            'angellist': '&#xe007;',
            'angieslist': '&#xe916;',
            'animaljam': '&#xe9fe;',
            'animationframework': '&#xe9f2;',
            'theanimationframework': '&#xe9f2;',
            'animeplanet': '&#xe9b7;',
            'anthroart': '&#xe9c1;',
            'anthrodex': '&#xe9ff;',
            'appnet': '&#xe009;',
            'appstore': '&#xe91f;',
            'apple': '&#xe008;',
            'archlinux': '&#xea00;',
            'archiveofourown': '&#xe9c2;',
            'archive': '&#xe997;',
            'archive.org': '&#xe997;',
            'archiveorg': '&#xe997;',
            'artfight': '&#xe988;',
            'arthaven': '&#xe9c3;',
            'artstation': '&#xe959;',
            'artfol': '&#xe98a;',
            'artistree': '&#xe99e;',
            'ask': '&#xe930;',
            'atabook': '&#xe9f7;',
            'augment': '&#xe908;',
            'avvo': '&#xe978;',
            'baidu': '&#xe00a;',
            'bale': '&#xe97e;',
            'bandcamp': '&#xe00b;',
            'battlenet': '&#xe00c;',
            'bebee': '&#xe00e;',
            'beacons': '&#xe9d0;',
            'beatport': '&#xe955;',
            'bebo': '&#xe00f;',
            'behance': '&#xe010;',
            'bigcartel': '&#xe9f8;',
            'bing': '&#xe92a;',
            'bitbucket': '&#xe909;',
            'blackberry': '&#xe951;',
            'blingee': '&#xe9d6;',
            'blizzard': '&#xe011;',
            'blogger': '&#xe012;',
            'bloglovin': '&#xe904;',
            'bluesky': '&#xe98d;',
            'blue-sky': '&#xe98d;',
            'bonanza': '&#xe92c;',
            'bookbub': '&#xe949;',
            'booking': '&#xe936;',
            'boosty': '&#xea13;',
            'buffer': '&#xe013;',
            'bukkit': '&#xe9d7;',
            'buymeacoffee': '&#xe9c4;',
            'buzzly': '&#xe994;',
            'buzzlyart': '&#xe994;',
            'calendly': '&#xe93d;',
            'cara': '&#xe9a1;',
            'carrd': '&#xe981;',
            'cdbaby': '&#xe968;',
            'characterhub': '&#xe9aa;',
            'chickensmoothie': '&#xe9d4;',
            'chrome': '&#xe014;',
            'codepen': '&#xe917;',
            'codeberg': '&#xe9d8;',
            'coderwall': '&#xe015;',
            'codered': '&#xe940;',
            'cohost': '&#xe9af;',
            'collectorz': '&#xe95c;',
            'comicfury': '&#xe99d;',
            'craigslist': '&#xe923;',
            'crunchbase': '&#xe93b;',
            'curiouscat': '&#xe989;',
            'curse': '&#xe016;',
            'dnaxcat': '&#xe9f3;',
            'dailymotion': '&#xe017;',
            'daz3d': '&#xea01;',
            'debian': '&#xe95f;',
            'deezer': '&#xe018;',
            'delicious': '&#xe019;',
            'deviantart': '&#xe01a;',
            'diablo': '&#xe01b;',
            'dibujando': '&#xea17;',
            'digg': '&#xe01c;',
            'digitalocean': '&#xe9a0;',
            'digital-ocean': '&#xe9a0;',
            'discord': '&#xe985;',
            'displate': '&#xe9c5;',
            'disqus': '&#xe01e;',
            'dlive': '&#xe975;',
            'doodle': '&#xe92b;',
            'douban': '&#xe01f;',
            'draugiem': '&#xe020;',
            'dreamwidth': '&#xe9d9;',
            'dribbble': '&#xe021;',
            'dropbox': '&#xe9da;',
            'drupal': '&#xe022;',
            'e-zbio': '&#xea02;',
            'ezbio': '&#xea02;',
            'ebay': '&#xe023;',
            'eitaa': '&#xe97c;',
            'element': '&#xea03;',
            'elementaryos': '&#xe969;',
            'ello': '&#xe024;',
            'endomodo': '&#xe025;',
            'envato': '&#xe026;',
            'epic': '&#xea18;',
            'epicgames': '&#xea18;',
            'escargot': '&#xe9b8;',
            'etsy': '&#xe027;',
            'facebook': '&#xe028;',
            'fandom': '&#xe9c6;',
            'fediverse': '&#xe9db;',
            'feedburner': '&#xe029;',
            'filegarden': '&#xe9dc;',
            'filmfreeway': '&#xe960;',
            'filmweb': '&#xe02a;',
            'firefox': '&#xe02b;',
            'fiverr': '&#xe91b;',
            'flash': '&#xe919;',
            'flattr': '&#xe02c;',
            'flickr': '&#xe02d;',
            'flightrising': '&#xe9a9;',
            'flipboard': '&#xe973;',
            'flowcode': '&#xe99f;',
            'flowpage': '&#xe99f;',
            'forgejo': '&#xe9dd;',
            'formulr': '&#xe02e;',
            'forrst': '&#xe02f;',
            'foursquare': '&#xe030;',
            'freelancer': '&#xe928;',
            'friendfeed': '&#xe031;',
            'fundable': '&#xe935;',
            'furaffinity': '&#xe987;',
            'furrynetwork': '&#xe9d1;',
            'furrypaws': '&#xe9f9;',
            'furry-paws': '&#xe9f9;',
            'furvilla': '&#xe998;',
            'fyuse': '&#xe90a;',
            'gog': '&#xe9b9;',
            'gaiaonline': '&#xe9ba;',
            'gamefor': '&#xe94e;',
            'gamejolt': '&#xe901;',
            'gamewisp': '&#xe905;',
            'gamebanana': '&#xe9f4;',
            'genius': '&#xe9cf;',
            'ghost': '&#xe933;',
            'git': '&#xe9de;',
            'github': '&#xe032;',
            'gitea': '&#xe9df;',
            'gitlab': '&#xe945;',
            'gitter': '&#xe96c;',
            'glaze': '&#xe98f;',
            'globalcomix': '&#xe9fa;',
            'gnome': '&#xe961;',
            'gotomeeting': '&#xe91c;',
            'goatlings': '&#xe9e0;',
            'gogs': '&#xe9e1;',
            'goodreads': '&#xe033;',
            'google': '&#xe034;',
            'googlecalendar': '&#xe926;',
            'googledrive': '&#xe9e2;',
            'googlegroups': '&#xe036;',
            'googlehangouts': '&#xe974;',
            'googlemaps': '&#xe937;',
            'googlephotos': '&#xe037;',
            'googleplaymusic': '&#xe95e;',
            'googleplus': '&#xe038;',
            'googlescholar': '&#xe035;',
            'scholar': '&#xe035;',
            'grooveshark': '&#xe039;',
            'grundoscafe': '&#xe9c7;',
            'guilded': '&#xe9bb;',
            'gumroad': '&#xe9c8;',
            'guru': '&#xe91e;',
            'gust': '&#xe92f;',
            'hackernews': '&#xe946;',
            'hackerone': '&#xe956;',
            'hackerrank': '&#xe03a;',
            'hearthstone': '&#xe03b;',
            'hellocoton': '&#xe03c;',
            'heroes': '&#xe03d;',
            'hipolink': '&#xea14;',
            'homeadvisor': '&#xe915;',
            'homefy': '&#xe93c;',
            'homes': '&#xe920;',
            'horde': '&#xe03f;',
            'houzz': '&#xe040;',
            'hypixel': '&#xe9e3;',
            'imdb': '&#xe043;',
            'icq': '&#xe041;',
            'identica': '&#xe042;',
            'imgur': '&#xe9e4;',
            'indiedb': '&#xe94c;',
            'inkbunny': '&#xea19;',
            'inkblot': '&#xe995;',
            'inkitt': '&#xe9e5;',
            'instagram': '&#xe044;',
            'instructables': '&#xe944;',
            'internet': '&#xe957;',
            'invision': '&#xe95a;',
            'issuu': '&#xe045;',
            'istock': '&#xe046;',
            'itaku': '&#xe9a8;',
            'itchio': '&#xe962;',
            'itunes': '&#xe047;',
            'jamendo': '&#xe963;',
            'juxt': '&#xea04;',
            'keybase': '&#xe048;',
            'kitsu': '&#xe9ab;',
            'kofi': '&#xe983;',
            'ko-fi': '&#xe983;',
            'kobo': '&#xe948;',
            'komimart': '&#xea0f;',
            'koo': '&#xe9e6;',
            'lanyrd': '&#xe049;',
            'lastfm': '&#xe04a;',
            'leprdspace': '&#xe990;',
            'leprd.space': '&#xe990;',
            'letterboxd': '&#xe96d;',
            'liberapay': '&#xea10;',
            'line': '&#xe04b;',
            'link': '&#xe9d2;',
            'linkedin': '&#xe04c;',
            'linktree': '&#xe982;',
            'linuxmint': '&#xea11;',
            'lioden': '&#xea15;',
            'livejournal': '&#xe04d;',
            'livemaster': '&#xe93e;',
            'logmein': '&#xe91a;',
            'loomly': '&#xe932;',
            'lyft': '&#xe04e;',
            'mail': '&#xe050;',
            'mailru': '&#xe94a;',
            'makeship': '&#xe9bc;',
            'mastodon': '&#xe913;',
            'matrix': '&#xe9b0;',
            'medium': '&#xe051;',
            'meetup': '&#xe052;',
            'messenger': '&#xe906;',
            'metapop': '&#xe970;',
            'microsoft': '&#xe90e;',
            'minecraft': '&#xe9b4;',
            'misskey': '&#xea05;',
            'mix': '&#xe964;',
            'mixer': '&#xe00d;',
            'mobcrush': '&#xe90d;',
            'moddb': '&#xe94b;',
            'modelmayhem': '&#xe054;',
            'moderneopets': '&#xe999;',
            'modernneopets': '&#xe999;',
            'modrinth': '&#xe9e7;',
            'mumble': '&#xe055;',
            'myanimelist': '&#xe950;',
            'myspace': '&#xe056;',
            'nanowrimo': '&#xe9e8;',
            'namemc': '&#xe9ad;',
            'namicomi': '&#xe9fb;',
            'napster': '&#xe954;',
            'natgeo': '&#xe912;',
            'naver': '&#xe971;',
            'nekoweb': '&#xe9b1;',
            'neocities': '&#xe992;',
            'neopets': '&#xe99a;',
            'newgrounds': '&#xe97f;',
            'newsvine': '&#xe057;',
            'nextdoor': '&#xe942;',
            'nexus': '&#xe9d3;',
            'nexusmods': '&#xe9d3;',
            'niconico': '&#xe939;',
            'nintendo': '&#xe058;',
            'npm': '&#xe059;',
            'odnoklassniki': '&#xe05a;',
            'opengameart': '&#xea1a;',
            'opera': '&#xe05c;',
            'origin': '&#xe941;',
            'outlook': '&#xe05d;',
            'overwatch': '&#xe05e;',
            'pandora': '&#xe907;',
            'paperdemon': '&#xe9a6;',
            'papermc': '&#xe9e9;',
            'patreon': '&#xe99b;',
            'paypal': '&#xe99c;',
            'periscope': '&#xe061;',
            'persona': '&#xe062;',
            'picarto': '&#xea1b;',
            'piczel': '&#xea1c;',
            'pillowfort': '&#xe980;',
            'pinterest': '&#xe063;',
            'pixilart': '&#xe9d5;',
            'pixiv': '&#xe94f;',
            'plancke': '&#xea06;',
            'play': '&#xe064;',
            'playstation': '&#xe066;',
            'player': '&#xe065;',
            'pocket': '&#xe067;',
            'polar': '&#xe9c9;',
            'pronounspage': '&#xe9ac;',
            'pronounscc': '&#xea07;',
            'pronouny': '&#xea08;',
            '500px': '&#xe000;',
            'qrcode': '&#xe98b;',
            'qobuz': '&#xe911;',
            'qq': '&#xe068;',
            'quora': '&#xe069;',
            'quotev': '&#xea16;',
            'rss': '&#xe071;',
            'raidcall': '&#xe06a;',
            'ravelry': '&#xe06b;',
            'realtor': '&#xe90f;',
            'redbubble': '&#xe979;',
            'reddit': '&#xe06c;',
            'redfin': '&#xe925;',
            'refsheet': '&#xe9bd;',
            'remote': '&#xe972;',
            'renderosity': '&#xea09;',
            'renren': '&#xe06d;',
            'rentry': '&#xe993;',
            'researchgate': '&#xe06e;',
            'residentadvisor': '&#xe06f;',
            'retrospring': '&#xe9b2;',
            'reverbnation': '&#xe070;',
            'roblox': '&#xe9ae;',
            'scratch': '&#xe9f5;',
            'seedrs': '&#xe929;',
            'seenthis': '&#xe95d;',
            'session': '&#xe9b5;',
            'sharepoint': '&#xe965;',
            'sharethis': '&#xe072;',
            'sheezyart': '&#xe98c;',
            'sheezy-art': '&#xe98c;',
            'sheezy': '&#xe98c;',
            'shopify': '&#xe927;',
            'side7': '&#xe9ca;',
            'signal': '&#xe9b6;',
            'skeb': '&#xea0a;',
            'sketchfab': '&#xe90c;',
            'skype': '&#xe073;',
            'slack': '&#xe918;',
            'slideshare': '&#xe074;',
            'smashcast': '&#xe03e;',
            'smashwords': '&#xe947;',
            'smugmug': '&#xe075;',
            'snapchat': '&#xe076;',
            'sofurry': '&#xea1d;',
            'society6': '&#xe97a;',
            'songkick': '&#xe077;',
            'soroush': '&#xe97d;',
            'soundcloud': '&#xe078;',
            'spacehey': '&#xe9fc;',
            'spigot': '&#xe9ea;',
            'spip': '&#xe953;',
            'splice': '&#xe96f;',
            'sporcle': '&#xe9eb;',
            'spotify': '&#xe079;',
            'spreadshirt': '&#xe900;',
            'squarespace': '&#xe92d;',
            'squidgeworld': '&#xe9be;',
            'stackexchange': '&#xe07a;',
            'stackoverflow': '&#xe07b;',
            'stage32': '&#xe96a;',
            'starcraft': '&#xe07c;',
            'stayfriends': '&#xe07d;',
            'steam': '&#xe07e;',
            'stitcher': '&#xe977;',
            'storehouse': '&#xe07f;',
            'storygraph': '&#xe9ec;',
            'strava': '&#xe080;',
            'strawpage': '&#xe9a2;',
            'streamjar': '&#xe081;',
            'stripe': '&#xea0b;',
            'strudelcafe': '&#xe991;',
            'strudel-cafe': '&#xe991;',
            'stumbleupon': '&#xe082;',
            'subeta': '&#xe9cb;',
            'subscribestar': '&#xe9fd;',
            'sudomemo': '&#xe9ed;',
            'swarm': '&#xe083;',
            'tapas': '&#xe9cc;',
            'teamspeak': '&#xe084;',
            'teamviewer': '&#xe085;',
            'technic': '&#xe9ee;',
            'technorati': '&#xe086;',
            'telegram': '&#xe087;',
            'threads': '&#xe9b3;',
            'threema': '&#xe96e;',
            'throne': '&#xe9a7;',
            'tidal': '&#xe910;',
            'tiktok': '&#xe96b;',
            'tinder': '&#xe966;',
            'toneden': '&#xe93a;',
            'toptal': '&#xe92e;',
            'torial': '&#xe95b;',
            'toyhouse': '&#xe986;',
            '8tracks': '&#xe001;',
            'traxsource': '&#xe94d;',
            'trello': '&#xe902;',
            'tripadvisor': '&#xe088;',
            'tripit': '&#xe089;',
            'triplej': '&#xe08a;',
            'trulia': '&#xe931;',
            'tumblr': '&#xe08b;',
            'tunein': '&#xe903;',
            'twitch': '&#xe08c;',
            'twitter': '&#xea12;',
            'x-twitter': '&#xea12;',
            'twitter-x': '&#xea12;',
            'uber': '&#xe08e;',
            'ubuntu': '&#xe958;',
            'udemy': '&#xe93f;',
            'unsplash': '&#xe914;',
            'unvale': '&#xe9bf;',
            'upwork': '&#xe934;',
            'vgen': '&#xe9a4;',
            'vrchat': '&#xe9c0;',
            'vstream': '&#xe9a5;',
            'ventrilo': '&#xe08f;',
            'viadeo': '&#xe090;',
            'viber': '&#xe091;',
            'viewbug': '&#xe092;',
            'vimeo': '&#xe093;',
            'vkontakte': '&#xe095;',
            'vsco': '&#xe976;',
            'warcraft': '&#xe096;',
            'wattpad': '&#xe9cd;',
            'wechat': '&#xe097;',
            'weasyl': '&#xe996;',
            'webtoon': '&#xe9ce;',
            'weibo': '&#xe098;',
            'whatsapp': '&#xe099;',
            'wickr': '&#xe952;',
            'wikipedia': '&#xe09a;',
            'windguru': '&#xe967;',
            'windows': '&#xe09b;',
            'wix': '&#xe924;',
            'wordpress': '&#xe09c;',
            'worldanvil': '&#xe9ef;',
            'wykop': '&#xe09d;',
            'theplatformformerlyknownastwitter': '&#xe0aa;',
            'unicode-x': '&#xe0aa;',
            'x': '&#xe0aa;',
            'xbox': '&#xe09e;',
            'xing': '&#xe09f;',
            'ytgaming': '&#xe90b;',
            'yt-gaming': '&#xe90b;',
            'yahoo': '&#xe0a0;',
            'yammer': '&#xe0a1;',
            'yandex': '&#xe0a2;',
            'yelp': '&#xe0a3;',
            'younow': '&#xe0a4;',
            'youtube': '&#xe0a5;',
            'zapier': '&#xe0a6;',
            'zazzle': '&#xe97b;',
            'zeniusivanisher': '&#xe9f6;',
            'zenius-i-vanisher': '&#xe9f6;',
            'zerply': '&#xe0a7;',
            'zillow': '&#xe938;',
            'zomato': '&#xe0a8;',
            'zoom': '&#xe921;',
            'zynga': '&#xe0a9;',
            'box': '&#xe9f0;',
            'jsr': '&#xea0c;',
            'lobsters': '&#xea0d;',
            'macos': '&#xe04f;',
            'mixcloud': '&#xe9a3;',
            'onedev': '&#xea0e;',
            'recaptcha': '&#xe98e;',
            'captcha': '&#xe98e;',
            'sourcehut': '&#xe9f1;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/social-icons/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
