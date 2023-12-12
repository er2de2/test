{
	"username": "roman",
	"theme": {
		"backgroundColor": "#100F0F",
		"windowColor": "#100F0F",
		"glowColor": "#008f11",
		"white": "#CECDC3",
		"gray": "#878580",
		"black": "#100F0F",
		"red": "#AF3029",
		"green": "#66800B",
		"yellow": "#AD8301",
		"blue": "#205EA6",
		"cyan": "#24837B",
		"magenta": "#A02F6F",
		"violet": "#5E409D",
		"orange": "#BC5215"
	},
	"wallpaper": {
		"url": "https://raw.githubusercontent.com/er2de2/test/main/matrix-356024.jpg",
		"easing": "ease-in-out",
		"fadeIn": true,
		"blur": false
	},
	"terminal": {
		"fixedHeight": true,
		"windowGlowBrightness": "0.20",
		"windowGlow": true,
		"textGlow": false
	},
	"prompt": {
		"ctrlC": true,
		"placeholder": "wpisz...",
		"placeholderColor": "white",
		"userColor": "yellow",
		"atColor": "blue",
		"hostColor": "green",
		"promptColor": "white",
		"promptSymbol": "=>",
		"caretColor": "green",
		"selectionBg": "yellow",
		"selectionFg": "black"
	},
	"fetch": {
		"timeFormat": "HH:mm",
		"dateFormat": "DD/MM/YYYY",
		"titleColor": "yellow",
		"image": "https://github.com/er2de2/test/raw/main/1544x1544_circle.png",
		"data": [
			"Godzina: {time}",
			"Data: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Przegladarka: {browser} {browserVersion}",
			"{seperator}",
			"{colors}"
		]
	},
	"urlLaunch": {
		"target": "_blank",
		"defaultColor": "white",
		"hoverColor": "violet"
	},
	"search": {
		"default": "https://google.com/search?q=",
		"target": "_blank",
		"shortcutRegex": "([A-Za-z0-9]+) (.*)",
		"shortcuts": [
			{
				"alias": "g",
				"name": "Google Search",
				"url": "https://google.com/search?q={}"
			},
			{
				"alias": "d",
				"name": "DuckDuckGo Search",
				"url": "https://duckduckgo.com/?q={}"
			}
		]
	},
	"sections": {
		"list": [
			{
				"title": "Linux",
				"target": "_blank",
				"color": "green",
				"links": [
					{
						"name": "Mega",
						"target": "_blank",
						"url": "https://mega.nz/login",
						"icon": "cib:mega"
					},
					{
						"name": "Arch",
						"target": "_blank",
						"url": "https://archlinux.org/",
						"icon": "simple-icons:archlinux"
					},
					{
						"name": "Tecmint",
						"target": "_blank",
						"url": "https://www.tecmint.com/",
						"icon": "raphael:linux"
					},
					{
						"name": "UbuntuPIT",
						"target": "_blank",
						"url": "https://www.ubuntupit.com/",
						"icon": "bi:ubuntu"
					}
				]
			},
			{
				"title": "Filmy",
				"color": "magenta",
				"links": [
					{
						"name": "Serialowa",
						"target": "_blank",
						"url": "https://www.serialowa.pl/",
						"icon": "material-symbols:live-tv-outline"
					},
					{
						"name": "Darkbox",
						"target": "_blank",
						"url": "https://darkbox.to/",
						"icon": "game-icons:pirate-skull"
					},
					{
						"name": "Zajefajna",
						"target": "_blank",
						"url": "https://zajefajna.com/index.php",
						"icon": "mdi:pirate"
					},
					{
						"name": "tb7",
						"target": "_blank",
						"url": "https://tb7.pl/mojekonto",
						"icon": "carbon:ibm-cloud-dedicated-host"
					}
				]
			},
			{
				"title": "Mix",
				"color": "orange",
				"links": [
					{
						"name": "Kingsite",
						"target": "_blank",
						"url": "https://kingsite.pl/",
						"icon": "game-icons:pirate-skull"
					},
					{
						"name": "Exsite24",
						"target": "_blank",
						"url": "https://exsite24.org/",
						"icon": "game-icons:pirate-skull"
					},
					{
						"name": "Github",
						"target": "_blank",
						"url": "https://github.com/login",
						"icon": "tabler:brand-github-filled"
					},
					{
						"name": "pleaks",
						"target": "_blank",
						"url": "https://pleaks.se/",
						"icon": "tabler:brand-vercel"
					}
				]
			},
			{
				"title": "Google",
				"color": "blue",
				"links": [
					{
						"name": "Youtube",
						"target": "_blank",
						"url": "https://www.youtube.com/feed/subscriptions",
						"icon": "carbon:logo-youtube"
					},
					{
						"name": "Gmail",
						"target": "_blank",
						"url": "https://mail.google.com/mail/u/0/?hl=pl&pli=1#inbox",
						"icon": "mdi:gmail"
					},
					{
						"name": "ProtonMail",
						"target": "_blank",
						"url": "https://account.proton.me/login",
						"icon": "simple-icons:protonmail"
					},
					{
						"name": "BSG",
						"target": "_blank",
						"url": "https://online.bsgoleniow.pl/",
						"icon": "mdi:bank"
					}
				]
			},
			{
				"title": "Reszta",
				"color": "yellow",
				"links": [
					{
						"name": "Docker",
						"target": "_blank",
						"url": "https://hub.docker.com/",
						"icon": "mdi:docker"
					},
					{
						"name": "mBank",
						"target": "_blank",
						"url": "https://online.mbank.pl/pl/Login",
						"icon": "ph:bank-fill"
					},
					{
						"name": "Openwrt",
						"target": "_blank",
						"url": "https://eko.one.pl/",
						"icon": "simple-icons:openwrt"
					},
					{
						"name": "Cloudflare",
						"target": "_blank",
						"url": "https://dash.cloudflare.com/login",
						"icon": "simple-icons:cloudflare"
					}
				]
			},
			{
				"title": "Media",
				"color": "red",
				"links": [
					{
						"name": "NPM",
						"target": "_blank",
						"url": "https://nginx.lilobanasik.ovh/",
						"icon": "solar:play-circle-outline"
					},
					{
						"name": "Canal+",
						"target": "_blank",
						"url": "https://www.canalplus.com/pl/",
						"icon": "mdi:plus-circle-outline"
					},
					{
						"name": "Release24",
						"target": "_blank",
						"url": "http://release24.pl/",
						"icon": "mdi:hours-24"
					},
					{
						"name": "Jellyfin",
						"target": "_blank",
						"url": "https://jellyfin.lilobanasik.ovh",
						"icon": "simple-icons:jellyfin"
					}
				]
			}
		]
	}
}
