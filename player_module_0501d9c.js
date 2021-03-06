define("js/common/module/coder.js", function (r) {
	var e = r("js/common/music.js");
	return e.module.coder = function () {
		var r = {
			_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			encode: function (e) {
				var o,
				t,
				n,
				c,
				a,
				d,
				h,
				C = "",
				f = 0;
				for (e = r._utf8_encode(e); f < e.length; )
					o = e.charCodeAt(f++), t = e.charCodeAt(f++), n = e.charCodeAt(f++), c = o >> 2, a = (3 & o) << 4 | t >> 4, d = (15 & t) << 2 | n >> 6, h = 63 & n, isNaN(t) ? d = h = 64 : isNaN(n) && (h = 64), C = C + r._keyStr.charAt(c) + r._keyStr.charAt(a) + r._keyStr.charAt(d) + r._keyStr.charAt(h);
				return C
			},
			decode: function (e) {
				var o,
				t,
				n,
				c,
				a,
				d,
				h,
				C = "",
				f = 0;
				for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); f < e.length; )
					c = r._keyStr.indexOf(e.charAt(f++)), a = r._keyStr.indexOf(e.charAt(f++)), d = r._keyStr.indexOf(e.charAt(f++)), h = r._keyStr.indexOf(e.charAt(f++)), o = c << 2 | a >> 4, t = (15 & a) << 4 | d >> 2, n = (3 & d) << 6 | h, C += String.fromCharCode(o), 64 != d && (C += String.fromCharCode(t)), 64 != h && (C += String.fromCharCode(n));
				return C = r._utf8_decode(C)
			},
			_utf8_encode: function (r) {
				r = r.replace(/\r\n/g, "\n");
				for (var e = "", o = 0; o < r.length; o++) {
					var t = r.charCodeAt(o);
					128 > t ? e += String.fromCharCode(t) : t > 127 && 2048 > t ? (e += String.fromCharCode(t >> 6 | 192), e += String.fromCharCode(63 & t | 128)) : (e += String.fromCharCode(t >> 12 | 224), e += String.fromCharCode(t >> 6 & 63 | 128), e += String.fromCharCode(63 & t | 128))
				}
				return e
			},
			_utf8_decode: function (r) {
				for (var e = "", o = 0, t = c1 = c2 = 0; o < r.length; )
					t = r.charCodeAt(o), 128 > t ? (e += String.fromCharCode(t), o++) : t > 191 && 224 > t ? (c2 = r.charCodeAt(o + 1), e += String.fromCharCode((31 & t) << 6 | 63 & c2), o += 2) : (c2 = r.charCodeAt(o + 1), c3 = r.charCodeAt(o + 2), e += String.fromCharCode((15 & t) << 12 | (63 & c2) << 6 | 63 & c3), o += 3);
				return e
			}
		};
		return {
			Base64: r
		}
	}
	(),
	e.module.coder
}); ;
define("js/common/module/flashplayer.js", function (e) {
	var n = e("js/common/music.js"),
	t = e("js/common/module/webplayer.js"),
	a = t.interFace,
	r = n.module.webPlayer,
	i = (r.playerList, r.playStatus),
	o = r.eventCallback,
	s = (r.stat, n.userAgent);
	window.g_flashPlayer = window.g_flashPlayer || {},
	g_flashPlayer.swfReady = !1,
	g_flashPlayer.swfInitComplete = function () {
		g_flashPlayer.swfReady = !0
	};
	var u = {
		p: function () {
			try {
				window.console && console.log([].slice.call(arguments).join("	"))
			} catch (e) {}
		}
	};
	return n.module.webPlayer.qFlash = function (e) {
		function t() {
			if (!D)
				return !1;
			var e = Z();
			return e == i.S_PLAYING || e == i.S_BUFFERING || e == i.S_PLAYBEGIN
		}
		function r() {
			if (!D)
				return !1;
			var e = Z();
			return e == i.S_PAUSE
		}
		function l() {
			if (!D)
				return !1;
			try {
				E.swfPlayMusic()
			} catch (e) {
				u.p("e 11 " + e.message)
			}
			return !1
		}
		function c() {
			if (!D)
				return !1;
			if (!t() && !r())
				return !1;
			try {
				E.swfStopMusic()
			} catch (e) {
				u.p("e 12 " + e.message)
			}
			return !1
		}
		function f() {
			if (!D)
				return !1;
			try {
				E.swfPauseMusic()
			} catch (e) {
				u.p("e 13 " + e.message)
			}
			return !0
		}
		function d(e) {
			return D ? (e = e || !1, !e && E.swfGetMute() ? E.swfSetMute(!1) : E.swfSetMute(!0), !0) : !1
		}
		function w() {
			return D ? E.swfGetVolume() : 0
		}
		function m(e) {
			return D ? E.swfGetMute() ? !1 : (e > 100 && (e = 100), 0 > e && (e = 0), e >= 0 && 100 >= e && E.swfSetVolume(e), !0) : !1
		}
		function y(e) {
			if (!D)
				return !1;
			try {
				var n = E.swfGetTotalTime();
				0 >= e && (e = 0),
				e >= n && (e = n),
				E.swfSeekMusic(e)
			} catch (t) {}
		}
		function h(e) {
			return D ? (0 >= e && (e = 0), e >= 100 && (e = 100), V = e, void 0) : !1
		}
		function g() {
			return D ? V || 0 : !1
		}
		function p(e) {
			I = e
		}
		var P = n,
		S = (P.dom, P.event, 1),
		v = 2,
		_ = 3,
		M = 4,
		k = 5,
		C = 6,
		b = {
			0: S,
			1: k,
			2: _,
			3: v,
			4: M,
			5: C
		},
		j = {
			flashVersion: null,
			getFlashHtml: function (e, n, t) {
				var a = [],
				r = [];
				for (var i in e)
					switch (i) {
					case "noSrc":
					case "movie":
						continue;
					case "id":
					case "name":
					case "width":
					case "height":
					case "style":
						"undefined" != typeof e[i] && a.push(" ", i, '="', e[i], '"');
						break;
					case "src":
						s.ie ? r.push('<param name="movie" value="', e.noSrc ? "" : e[i], '"/>') : a.push(' data="', e.noSrc ? "" : e[i], '"');
						break;
					default:
						r.push('<param name="', i, '" value="', e[i], '" />')
					}
				return s.ie ? a.push(' classid="clsid:', t || "D27CDB6E-AE6D-11cf-96B8-444553540000", '"') : a.push(' type="application/x-shockwave-flash"'),
				n && n instanceof j.SWFVersion && a.push(' codeBase="//fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=', n, '"'),
				"<object" + a.join("") + ">" + r.join("") + "</object>"
			},
			SWFVersion: function () {
				var e;
				e = arguments.length > 1 ? Array.prototype.slice.apply(arguments) : 1 == arguments.length ? "object" == typeof arguments[0] ? arguments[0] : "number" == typeof arguments[0] ? [arguments[0]] : [] : [],
				this.major = parseInt(e[0], 10) || 0,
				this.minor = parseInt(e[1], 10) || 0,
				this.rev = parseInt(e[2], 10) || 0,
				this.add = parseInt(e[3], 10) || 0
			}
		},
		R = function () {
			return function () {
				var e = function (e) {
					var n = document.getElementById(e);
					return n || (n = document.createElement("div"), n.id = e, document.body.appendChild(n)),
					n
				}
				("qqmusic_flash_media_container");
				return e.innerHTML = j.getFlashHtml({
						width: 1,
						height: 1,
						src: "//y.gtimg.cn/music/qzone/TPFmMusicPlayer.swf",
						quality: "high",
						wmode: "transparent",
						id: "flashmusicplayer",
						name: "flashmusicplayer",
						allowScriptAccess: "always"
					}, "7,0,0,0"),
				e.firstChild
			}
			()
		},
		T = function () {
			return R()
		},
		I = i.S_UNDEFINE,
		E = "",
		F = 12345678,
		q = "12345678",
		O = e,
		D = !1,
		G = !1,
		A = !0,
		V = 0,
		B = !1,
		L = "",
		U = 0,
		N = 0,
		x = 10,
		z = function (e, n) {
			F = e,
			q = n
		},
		H = function () {
			var e = "",
			t = "";
			"" == e && (e = n.cookie.get("uin").replace(/[^\d]/g, "")),
			"" == t && (t = n.cookie.get("skey")),
			z("" != e ? e : "12345678", "" != t ? t : "12345678", O),
			n.cookie.set("qqmusic_fromtag", O, "qq.com", "/"),
			G = !0
		},
		W = function () {
			g_flashPlayer.swfReady ? (window.idSetMusicCookie && (clearTimeout(window.idSetMusicCookie), window.idSetMusicCookie = null), H()) : x > N ? (N++, window.idSetMusicCookie = setTimeout(function () {
						W()
					}, 500)) : window.idSetMusicCookie && (clearTimeout(window.idSetMusicCookie), window.idSetMusicCookie = null)
		},
		Y = function () {
			var e = E;
			return e ? !0 : !1
		},
		X = function (e, n) {
			return E = T(),
			A = n,
			""
		},
		J = function () {
			try {
				if (!Y())
					return A && alert("对不起，您的浏览器不支持flash音频播放！"), !1;
				W(),
				D = !0;
				try {}
				catch (e) {}
				return $(),
				!0
			} catch (e) {
				return debugMode && alert("flashplayer.initialize exp: " + e.message),
				!1
			}
		},
		K = function () {
			g_flashPlayer.swfReady && G ? (window.idRunPlayer && (clearTimeout(window.idRunPlayer), window.idRunPlayer = null), Q()) : N >= x ? window.idRunPlayer && (clearTimeout(window.idRunPlayer), window.idRunPlayer = null) : (N++, window.idRunPlayer = setTimeout(function () {
						K()
					}, 500))
		},
		Q = function () {
			if (D) {
				var e = a.getSongInfoObj();
				a.getSongUrl(e, function (e) {
					var n = "mp3";
					B = !0,
					r() && L == e ? B = !1 : null != e && "" != e && (e.indexOf(".m4a") >= 0 && (n = "m4a"), E.swfPlayMusic(e, 5, n));
					try {
						L = e,
						U = +new Date
					} catch (t) {
						u.p("realSetPlayURL 5 exp: " + t.message)
					}
					l()
				})
			}
		},
		Z = function () {
			return D ? b[E.swfGetPlayStat()] : -1
		},
		$ = function () {
			window.g_flashPlayer = window.g_flashPlayer || {},
			g_flashPlayer.soundStatChange = function (e) {
				1 == e.playStat && o.OnStateChanged(b[2]),
				o.OnStateChanged(b[e.playStat])
			},
			g_flashPlayer.soundData = function (e) {
				o.OnPlayProgress(e.position, E.swfGetTotalTime()),
				o.OnDownloadProgress(0, e.progress)
			},
			g_flashPlayer.soundIOError = function (e) {
				o.OnStateChanged(i.S_STOP),
				o.OnPlayError(100, e)
			}
		};
		return {
			createActiveX: X,
			initialize: J,
			setPlayURL: K,
			startPlayer: l,
			stopPlayer: c,
			pausePlayer: f,
			setMute: d,
			getVolumn: w,
			setVolumn: m,
			setPlayerState: p,
			setPlayProgress: y,
			setDownloadProgress: h,
			getDownloadProgress: g
		}
	},
	n.module.webPlayer.qFlash
}); ;
define("js/common/module/h5audio.js", function (e) {
	var n = e("js/common/music.js"),
	t = e("js/common/module/webplayer.js"),
	r = t.interFace,
	o = n.module.webPlayer,
	u = (o.playerList, o.playStatus),
	a = o.eventCallback,
	i = (o.stat, n.userAgent);
	return n.module.webPlayer.h5Audio = function (e) {
		function t(e, n) {
			"undefined" != typeof g_fmChn && g_fmChn.firstBuffered && g_fmChn.firstBuffered(e, n)
		}
		function o(e, n) {
			"undefined" != typeof g_fmChn && g_fmChn.secondBuffered && g_fmChn.secondBuffered(e, n)
		}
		function d() {
			j && (clearTimeout(j), j = null)
		}
		function s() {
			d(),
			j = setTimeout(function () {
					0 == parseInt(w.currentTime) || w.currentTime != q || w.paused || B || U || (M = new Date, B = !0),
					q = w.currentTime,
					s()
				}, 500)
		}
		function c(e) {
			var n = T("#h5audio_media")[0];
			if (n)
				return n;
			var t = [];
			t.push("<audio ");
			for (var r in e)
				t.push(r), t.push("='"), t.push(e[r]), t.push("' ");
			return t.push("></audio>"),
			T("#h5audio_media_con").length > 0 ? T("#h5audio_media_con").append(t.join("")) : T("body").append(t.join("")),
			T("#h5audio_media")[0]
		}
		function f() {
			return c({
				id: "h5audio_media",
				height: 0,
				width: 0,
				autoplay: "false"
			})
		}
		function l() {
			return w = f(),
			w ? void 0 : !1
		}
		function m() {
			if (!w)
				return !1;
			T(w).on("loadstart", function () {
				a.OnStateChanged(u.S_BUFFERING),
				(i.isiPad || i.isiPhone) && 1 > I && (I++, a.OnStateChanged(u.S_PAUSE))
			}),
			T(w).on("play", function () {
				a.OnStateChanged(u.S_PLAYBEGIN),
				A = !0
			}),
			T(w).on("playing", function () {
				a.OnStateChanged(u.S_PLAYING),
				s()
			}),
			T(w).on("pause", function () {
				a.OnStateChanged(u.S_PAUSE),
				d()
			}),
			T(w).on("stalled", function () {
				a.OnStateChanged(u.S_STOP)
			}),
			T(w).on("error", function () {
				if (a.OnStateChanged(u.S_STOP), (i.isiPad || i.isiPhone) && 4 == w.error.code)
					A = !0, a.OnStateChanged(u.S_BUFFERING), I = 0;
				else {
					var e = r.getSongInfoObj();
					e.songid && e.songid > 0 && e.songmid && "" != e.songmid && (0 == e.type || 3 == e.type) || e.songurl && 1 == e.type && n.popup.show("歌曲播放失败！您添加的网络歌曲，地址出错或被主人删除。", 3e3, 1);
					var t = ["", "MEDIA_ERR_ABORTED(fetching process aborted by user)", "MEDIA_ERR_NETWORK(error occurred when downloading)", "MEDIA_ERR_DECODE(error occurred when decoding)", "MEDIA_ERR_SRC_NOT_SUPPORTED(audioideo not supported)"],
					o = w.error ? t[w.error.code || 0] : "";
					a.OnPlayError(100, o)
				}
			}),
			T(w).on("ended", function () {
				a.OnStateChanged(u.S_PLAYEND),
				d()
			}),
			T(w).on("timeupdate", function () {
				a.OnPlayProgress(w.currentTime, w.duration),
				B && (N = new Date, U ? (U = !1, t(M, N)) : o(M, N), B = !1);
				try {
					a.OnDownloadProgress(w.currentTime, Math.ceil(100 * w.buffered.end(0) / w.duration))
				} catch (e) {}
			}),
			T(w).on("loadedmetadata", function () {
				!i.safari || i.isiPad || i.isiPhone || (w.currentTime = 1, w.play())
			}),
			T(w).on("loadeddata", function () {}),
			T(w).on("canplay", function () {}),
			b = !0;
			try {
				S(75)
			} catch (e) {
				alert("setVolumn:" + e.message)
			}
			return !0
		}
		function g() {
			if ("" == n.cookie.get("qqmusic_fromtag") ? (n.cookie.set("qqmusic_fromtag", R, "qq.com"), A = !0) : A = !0, A) {
				var e = r.getSongInfoObj();
				r.getSongUrl(e, function (n) {
					if ("" == n) {
						alert("歌曲链接错误！");
						var t = r.getPostion();
						return r.OnPlayError(e, t),
						void 0
					}
					0 == T("source", T(w)).length || T("source", T(w)).attr("src") != n ? (T(w).html('<source src="' + n + '">'), w.load()) : p(),
					h(),
					M = new Date,
					U = !0,
					B = !0
				})
			} else
				setTimeout(g, 100)
		}
		function h() {
			if (!b)
				return !1;
			try {
				return w.play(),
				!0
			} catch (e) {
				debugMode && alert("e 11 " + e.message)
			}
			return !1
		}
		function p() {
			if (!b)
				return !1;
			try {
				return w.pause(),
				w.currentTime = 0,
				!0
			} catch (e) {
				debugMode && alert("e 12 " + e.message)
			}
			return !1
		}
		function _() {
			if (!b)
				return !1;
			try {
				w.pause()
			} catch (e) {
				debugMode && (status = "e 4 " + e.message)
			}
			return !0
		}
		function y() {
			if (!b)
				return !1;
			var e = 1 == w.muted ? 0 : 1;
			return w.muted = e,
			e
		}
		function P() {
			return b ? 100 * w.volume : 0
		}
		function S(e) {
			return b ? w.muted ? !1 : (e > 100 && (e = 100), 0 > e && (e = 0), e >= 0 && 100 >= e && (w.volume = e / 100), !0) : !1
		}
		function E(e) {
			return b ? (0 >= e && (e = 0), e >= w.duration && (e = w.duration), w.currentTime = e, !0) : !1
		}
		function O(e) {
			return b ? (0 >= e && (e = 0), e >= 100 && (e = 100), F = e, void 0) : !1
		}
		function C() {
			return b ? F || 0 : !1
		}
		function v(e) {
			D = e
		}
		var T = n.$,
		D = u.S_UNDEFINE,
		w = "",
		R = e,
		b = !1,
		A = !1,
		I = 0,
		j = null,
		M = 0,
		N = 0,
		B = !1,
		U = !0,
		q = 0,
		F = 0;
		return {
			createActiveX: l,
			initialize: m,
			setPlayURL: g,
			startPlayer: h,
			stopPlayer: p,
			pausePlayer: _,
			setMute: y,
			getVolumn: P,
			setVolumn: S,
			setPlayerState: v,
			setPlayProgress: E,
			setDownloadProgress: O,
			getDownloadProgress: C
		}
	},
	n.module.webPlayer.h5Audio
}); ;
define("js/common/module/lrcHandler.js", function (e) {
	var t = e("js/common/music.js"),
	r = e("js/common/module/coder.js"),
	n = t.userAgent,
	i = 200;
	t.module.lrcHandler = function () {
		function e(e, t) {
			return s.compare(e.time, t.time) ? -1 : 1
		}
		return function () {
			var a = this;
			a.reqFlag = -1,
			a.haveLrc = !1,
			a.txtLrc = !1,
			a.lyricData = "",
			a.lrcItem = {
				time: "00:00.00",
				context: ""
			},
			a.lrcItemIndex = 0,
			a.preLrcItemIndex = -1,
			a.lrcList = [],
			a.artist = "",
			a.songTitle = "",
			a.album = "",
			a.byBody = "",
			a.offset = 0,
			a.playingSong = 0,
			a.playingSongInfo = null,
			a.init = function (e) {
				var t = e.songMId;
				a.clearLrcInfo(),
				a.playingSongInfo = e,
				a.playingSong = t,
				a.loadLyricBySongId(t, a.dealLrcXmlSucc, a.dealLrcXmlFail)
			},
			a.loadLyricBySongId = function (e, i, s) {
				"Funciton" != typeof s && (s = a.dealLrcXmlFail);
				try {
					!top["qqmusic_lyrics_lrc" + e] && (top["qqmusic_lyrics_lrc" + e] = null)
				} catch (l) {}
				var c = null;
				try {
					c = top["qqmusic_lyrics_lrc" + e]
				} catch (l) {
					c = null
				}
				if (c) {
					if (a.reqFlag = 1, a.haveLrc = !0, "no-lyrics" == c)
						return s(), void 0;
					c = r.Base64.decode(c);
					var o = r.Base64.decode(top["qqmusic_lyrics_trans" + e]);
					return i(c, o),
					void 0
				}
				a.reqFlag = 0; {
					var m = "//c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=" + (new Date).getTime();
					n.safari || n.chrome || n.isiPad || n.isiPhone || n.firefox ? !0 : !1
				}
				m += "string" != typeof e ? "&musicid=" + e : "&songmid=" + e,
				(111 == a.playingSongInfo.songtype || 112 == a.playingSongInfo.songtype || 113 == a.playingSongInfo.songtype) && (m += "&songtype=" + a.playingSongInfo.songtype),
				t.jQueryAjax.jsonp({
					url: m,
					charset: "utf-8",
					jsonpCallback: "MusicJsonCallback_lrc",
					success: function (t) {
						if (t && 0 == t.retcode)
							if (3 != t.type) {
								a.reqFlag = 1,
								a.haveLrc = !0,
								c = t.lyric;
								try {
									top["qqmusic_lyrics_lrc" + e] = c,
									top["qqmusic_lyrics_trans" + e] = t.trans
								} catch (n) {}
								c = r.Base64.decode(c);
								var l = r.Base64.decode(t.trans);
								i(c, l)
							} else
								s();
						else
							s()
					},
					timeout: 3e3,
					error: function (e, t) {
						s()
					}
				})
			},
			a.dealLrcXmlSucc = function (e, t) {
				var r = e;
				if (r && (t ? $(".js_trans_btn").show() : $(".js_trans_btn").hide(), a.lyricData = r.replace(new RegExp("\\n", "g"), "_!!_").trim(), a.parseLyricData(t.replace(new RegExp("\\n", "g"), "_!!_").trim())), s.haveLrc) {
					var n = s.printLrcLines();
					"" == n ? (s.haveLrc = !1, s.txtLrc = !0, $(".qrc_ctn").html("<p>" + r.replace(/&#10;/g, "</p><p>").replace(new RegExp("\\n", "g"), "</p><p>") + "</p>")) : (s.txtLrc = !1, $(".qrc_ctn").html('<p data-id="line_null">&nbsp;</p>' + n), s.startAnimFrame("qrc_ctn")),
					$(".js_trans_btn").hasClass("btn_lang--select") ? $(".js_trans_line").show() : $(".js_trans_line").hide()
				}
			},
			a.dealLrcXmlFail = function () {
				s.reqFlag = 1,
				s.haveLrc = !1;
				try {
					top["qqmusic_lyrics_lrc" + a.playingSong] = null
				} catch (e) {}
			},
			a.parseLyricData = function (e) {
				var t,
				r = a.lyricData,
				n = [],
				i = 0,
				s = 0;
				n = r.split("_!!_");
				var l = e.split("_!!_"),
				c = {},
				o = 0;
				for (s = l.length; s > i; i++) {
					t = l[i];
					for (var m = t.lastIndexOf("]"), p = t.substring(0, m + 1), f = t.substring(m + 1), u = p.replace(new RegExp("\\[", "g"), "").split("]"), d = u.length, y = d - 1, g = "", x = 0; y--; )
						if (g = u[y], -1 != g.indexOf("al:"));
						else if (-1 != g.indexOf("ar:"));
						else if (-1 != g.indexOf("ti:"));
						else if (-1 != g.indexOf("by:"));
						else if (-1 != g.indexOf("offset:"));
						else {
							g = -1 != g.indexOf(".") ? g : g + ".00",
							f = "" == f.trim() ? "" : f.trim();
							var L = parseInt(a.playTime2ms(g) - a.offset, 10);
							g = a.ms2playTime(L),
							"" != f && (c[o] = f, o++)
						}
				}
				for (o = 0, s = n.length, i = 0; s > i; i++) {
					t = n[i];
					for (var m = t.lastIndexOf("]"), p = t.substring(0, m + 1), f = t.substring(m + 1), u = p.replace(new RegExp("\\[", "g"), "").split("]"), d = u.length, y = d - 1, g = "", x = 0; y--; )
						if (g = u[y], -1 != g.indexOf("al:"))
							x = g.indexOf(":"), a.album = g.substring(x + 1);
						else if (-1 != g.indexOf("ar:"))
							x = g.indexOf(":"), a.artist = g.substring(x + 1);
						else if (-1 != g.indexOf("ti:"))
							x = g.indexOf(":"), a.songTitle = g.substring(x + 1);
						else if (-1 != g.indexOf("by:"))
							x = g.indexOf(":"), a.byBody = g.substring(x + 1);
						else if (-1 != g.indexOf("offset:"))
							x = g.indexOf(":"), a.offset = g.substring(x + 1);
						else {
							g = -1 != g.indexOf(".") ? g : g + ".00",
							f = "" == f.trim() ? "" : f.trim();
							var L = parseInt(a.playTime2ms(g) - a.offset, 10);
							g = a.ms2playTime(L),
							"" != f && (c[o] && "//" != c[o] && (f = f + '<br/><span class="js_trans_line">' + c[o] + "</span>"), a.lrcList.push({
									time: g,
									context: f
								}), o++)
						}
				}
				a.sortLrcList()
			},
			a.sortLrcList = function () {
				a.lrcList.sort(e)
			},
			a.printLrcLines = function () {
				var e = a.lrcList;
				if (e) {
					for (var t = e.length, r = 0, n = []; t > r; r++)
						n.push('<p data-id="line_' + r + '">' + e[r].context + "</p>");
					return n.join("")
				}
				return ""
			},
			a.clearLrcInfo = function () {
				a.haveLrc = !1,
				a.lrcList = [],
				a.lyricData = "",
				a.artist = "",
				a.songTitle = "",
				a.album = "",
				a.byBody = "",
				a.offset = 0,
				a.preLrcItemIndex = -1,
				a.lrcItemIndex = 0,
				a.reqFlag = -1,
				a.stopAnimFrame()
			},
			a.clearLrcItem = function () {
				a.lrcItem = {
					time: "00:00.00",
					context: ""
				}
			},
			a.getLyricLineItemByLineIndex = function (e) {
				var t = a.lrcList.length;
				return 0 > e || e >= t ? !1 : (a.clearLrcItem(), a.lrcItemIndex < e && (a.preLrcItemIndex = a.lrcItemIndex), a.lrcItemIndex = e, a.lrcItem = a.lrcList[a.lrcItemIndex], !0)
			},
			a.getLyricLineItemByTimes = function (e, t, r) {
				if (0 > e || 0 > t || 0 > r)
					return !1;
				a.clearLrcItem();
				var n = e + ":" + t + "." + r;
				return a.getLyricLineItemByPlayTime(n)
			},
			a.getLyricLineItemByPlayTime = function (e) {
				a.clearLrcItem();
				var t = e,
				r = a.lrcList.length,
				n = 0,
				i = 0;
				if (0 >= r)
					return !1;
				for (; r - 1 > i; i++) {
					if (0 == i && a.compare(t, a.lrcList[i].time, "<"))
						return a.getLyricLineItemByLineIndex(0);
					var s = a.lrcList[i],
					l = a.lrcList[i + 1];
					if (a.compare(s.time, t, "<=") && a.compare(t, l.time, "<"))
						return n = i, a.getLyricLineItemByLineIndex(n)
				}
				return a.compare(a.lrcList[r - 1].time, t) ? (n = r - 1, a.getLyricLineItemByLineIndex(n)) : !1
			},
			a.playTime2ms = function (e) {
				var t = 60 * parseInt(e.substring(0, e.indexOf(":")), 10) * 1e3,
				r = 1e3 * parseInt(e.substring(e.indexOf(":") + 1, e.indexOf(".")), 10),
				n = parseInt(e.substring(e.indexOf(".") + 1), 10);
				return t + r + n
			},
			a.ms2playTime = function (e) {
				var t = parseInt(e / 6e4, 10),
				r = parseInt(e / 1e3 % 60, 10),
				n = e - 6e4 * t - 1e3 * r;
				return (t > 9 ? "" : "0") + t + ":" + (r > 9 ? "" : "0") + r + "." + (n > 9 ? "" : "0") + n
			},
			a.compare = function (e, t, r) {
				return r = r || "<=",
				"<" == r ? a.playTime2ms(e) < a.playTime2ms(t) : "<=" == r ? a.playTime2ms(e) <= a.playTime2ms(t) : ">" == r ? a.playTime2ms(e) > a.playTime2ms(t) : ">=" == r ? a.playTime2ms(e) >= a.playTime2ms(t) : void 0
			},
			a.scrollLine = function (e) {
				var r = "string" == typeof e ? $("." + e) : $(e);
				$.each(r, function (e, r) {
					elem = $(r)[0];
					for (var n = parseInt($(r).data("mod")), i = (parseInt(elem.scrollHeight - (1 == n ? 72 : 0)), $(elem).parent(".js_lyric_box").scrollTop()), a = $('p[data-id="line_' + s.lrcItemIndex + '"]', $(r)).length > 0 ? $('p[data-id="line_' + s.lrcItemIndex + '"]', $(r))[0].offsetHeight : 24, l = !1, c = s.lrcItemIndex || 0, o = 0, m = parseInt(a / 6, 10), p = a % 6; c-- > (1 == n ? 1 : 3); )
						o += $('p[data-id="line_' + c + '"]', $(r)).length > 0 ? $('p[data-id="line_' + c + '"]', $(r))[0].offsetHeight : 24;
					if (l = i == o, !l)
						if (0 >= o - i && !window.getlyricflag || o - i >= a * (1 == n ? 2 : 4)) {
							var f = o + ($(window).height() < 700 ? 1 == n ? 65 : 180 : 0);
							0 > f && (f = 0),
							t.util.supportCss3("-webkit-transition") && t.util.supportCss3("-webkit-transform") ? (elem.style.webkitTransition = "-webkit-transform 0.1s ease-out", elem.style.webkitTransform = "translate3d(0px," + -1 * f + "px,0px)") : t.util.supportCss3("transition") && t.util.supportCss3("transform") ? (elem.style.transition = "transform 0.1s ease-out", elem.style.transform = "translate3d(0px," + -1 * f + "px,0px)") : $(elem).parent(".js_lyric_box").scrollTop(f)
						} else {
							var u = o - i;
							u > a && (u -= a);
							var d = u >= m ? m : p,
							f = i + d + ($(window).height() < 700 ? 1 == n ? 65 : 180 : 0);
							0 > f && (f = 0),
							t.util.supportCss3("-webkit-transition") && t.util.supportCss3("-webkit-transform") ? (elem.style.webkitTransition = "-webkit-transform 0.1s ease-out", elem.style.webkitTransform = "translate3d(0px," + -1 * f + "px,0px)") : t.util.supportCss3("transition") && t.util.supportCss3("transform") ? (elem.style.transition = "transform 0.1s ease-out", elem.style.transform = "translate3d(0px," + -1 * f + "px,0px)") : $(elem).parent(".js_lyric_box").scrollTop(f)
						}
				}),
				s.startAnimFrame(e)
			},
			a.aniFrame = null,
			a.lrcAnimFrame = function (e, t) {
				return window.requestTimeout(e, t)
			},
			a.startAnimFrame = function (e) {
				s.aniFrame = s.lrcAnimFrame(function () {
						s.scrollLine(e)
					}, i)
			},
			a.stopAnimFrame = function () {
				null != s.aniFrame && window.cancelRequestAnimFrame(s.aniFrame),
				s.aniFrame = null
			},
			a.restartAnimFrame = function (e) {
				s.stopAnimFrame(),
				s.startAnimFrame(e)
			}
		}
	}
	();
	var s = new t.module.lrcHandler;
	return s
}); ;
define("js/common/module/qrcHandler.js", function (e) {
	var n = e("js/common/music.js"),
	i = e("js/common/module/coder.js"),
	r = e("js/common/module/lrcHandler.js"),
	t = n.userAgent,
	a = 200;
	n.module.qrcHandler = function () {
		function e(e) {
			var n;
			if ("undefined" != typeof e && "" != e)
				return window.DOMParser ? (parser = new DOMParser, n = parser.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e)), n
		}
		return function () {
			var s = this;
			s.playingSong = "0",
			s.playingSongInfo = null,
			s.reqFlag = !1,
			s.haveqrc = !1,
			s.qrcData = "",
			s.qrcJson = {
				ar: "",
				ti: "",
				al: "",
				by: "",
				offset: "",
				lines: []
			},
			s.lineItem = {
				timeTag: {
					startTime: 0,
					timeLen: 0
				},
				context: "",
				wordsItem: []
			},
			s.wordItem = {
				word: "",
				startTime: 0,
				timeLen: 0
			},
			s.qrcLineIndex = 0,
			s.artist = "",
			s.songTitle = "",
			s.album = "",
			s.byBody = "",
			s.offset = 0,
			s.qrcContainer = "",
			s.init = function (e) {
				s.playingSongInfo = e,
				s.playingSong = e.songMId && "0" !== e.songMId ? e.songMId : parseInt(e.songId),
				s.qrcContainer = e.qrcContainer,
				s.clearQrcInfo(),
				s.dealLyricsFail()
			},
			s.loadLyricsBySongId = function (e, r, a) {
				e && "0" != e || (e = s.playingSong),
				"Funciton" != typeof a && (a = s.dealLyricsFail);
				try {
					!top["qqmusic_lyrics_qrc" + e] && (top["qqmusic_lyrics_qrc" + e] = "")
				} catch (o) {}
				var c = null,
				l = null;
				try {
					c = top["qqmusic_lyrics_qrc" + e],
					l = top["qqmusic_lyrics_lrc" + e]
				} catch (o) {
					c = null,
					l = null
				}
				if (c)
					return c = i.Base64.decode(c), s.reqFlag = !1, s.haveqrc = !0, r(c), void 0;
				if (l)
					return a(), void 0;
				s.reqFlag = !0; {
					var m = "//c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?pcachetime=" + (new Date).getTime();
					t.safari || t.chrome || t.isiPad || t.isiPhone || t.firefox ? !0 : !1
				}
				m += "string" != typeof e ? "&musicid=" + s.playingSong : "&songmid=" + e,
				(111 == s.playingSongInfo.songtype || 112 == s.playingSongInfo.songtype || 113 == s.playingSongInfo.songtype) && (m += "&songtype=" + s.playingSongInfo.songtype),
				n.jQueryAjax.jsonp({
					url: m,
					charset: "utf-8",
					jsonpCallback: "MusicJsonCallback",
					success: function (n) {
						if (n && 0 == n.retcode) {
							if (3 == n.type) {
								s.reqFlag = !1,
								s.haveqrc = !0,
								c = n.lyric;
								try {
									top["qqmusic_lyrics_qrc" + e] = c
								} catch (t) {}
								c = i.Base64.decode(c),
								r(c)
							} else if (a(), n.lyric)
								try {
									top["qqmusic_lyrics_lrc" + e] = n.lyric
								} catch (t) {}
						} else if (n && 1 == n.retcode) {
							a();
							try {
								top["qqmusic_lyrics_lrc" + e] = "no-lyrics"
							} catch (t) {}
						} else
							a()
					},
					timeout: 3e3,
					error: function (e, n) {
						a()
					}
				})
			},
			s.dealLyricsSucc = function (n) {
				var i = e(n);
				if (void 0 == i || "undefined" == typeof i)
					return s.dealLyricsFail(), void 0;
				var r = i.getElementsByTagName("LyricInfo"),
				t = "";
				return r[0] ? (t = r[0].getElementsByTagName("Lyric_1")[0], t && (s.qrcData = t.getAttribute("LyricContent"), s.parseQrcData()), o.haveqrc && ($(".qrc_ctn").html('<p id="line_null" class="on">&nbsp;</p>' + o.printQrcLines()), o.startAnimFrame("qrc_ctn")), void 0) : (s.dealLyricsFail(), void 0)
			},
			s.dealLyricsFail = function () {
				r.init(o.playingSongInfo),
				s.reqFlag = !1,
				s.haveqrc = !1;
				try {
					top["qqmusic_lyrics_qrc" + s.playingSong] = null
				} catch (e) {}
			},
			s.parseQrcData = function () {
				var e = s.qrcData,
				n = {},
				i = 0,
				r = 0,
				t = {};
				n = s.getLineFlag(e);
				var a = new RegExp("_!!_"),
				o = n.rQrcStr.trim().split(a),
				c = n.lineFlags;
				for (i = 1, r = o.length; r > i; i++) {
					t = o[i],
					a = new RegExp("[\\[|\\]]", "g");
					var l = c[i - 1].replace(a, ""),
					m = 0;
					if (-1 != l.indexOf("al:"))
						m = l.indexOf(":"), s.album = s.qrcJson.al = l.substring(m + 1);
					else if (-1 != l.indexOf("ar:"))
						m = l.indexOf(":"), s.artist = s.qrcJson.ar = l.substring(m + 1);
					else if (-1 != l.indexOf("ti:"))
						m = l.indexOf(":"), s.songTitle = s.qrcJson.ti = l.substring(m + 1);
					else if (-1 != l.indexOf("by:"))
						m = l.indexOf(":"), s.byBody = s.qrcJson.by = l.substring(m + 1);
					else if (-1 != l.indexOf("offset:"))
						m = l.indexOf(":"), s.offset = s.qrcJson.offset = l.substring(m + 1);
					else {
						var u = l.split(","),
						d = s.getWordFlag(t.replace("``````````", ""));
						s.qrcJson.lines.push({
							timeTag: {
								startTime: parseInt(u[0].trim(), 10) - s.offset,
								timeLen: parseInt(u[1].trim(), 10)
							},
							context: d ? d.rLineStr : "",
							wordsItem: d ? d.wordFlags : []
						})
					}
				}
			},
			s.printQrcLines = function () {
				var e = s.qrcJson;
				if (e) {
					for (var n = e.lines, i = n.length, r = 0, a = []; i > r; r++) {
						var o = !!(t.safari || t.chrome || t.isiPad || t.isiPhone);
						o ? a.push('<p id="line_' + r + '">' + n[r].context + "</p>") : a.push('<p id="line_' + r + '">' + n[r].context + "</p>")
					}
					return a.join("")
				}
				return ""
			},
			s.getLineFlag = function (e) {
				e = e || s.qrcData;
				var n = e,
				i = new RegExp("\\[[a-z|0-9]+\\s*[:|,]\\s*[^\\]]*\\]", "gi"),
				r = [],
				t = "";
				return r = n.match(i),
				t = n.replace(i, "``````````_!!_"), {
					lineFlags: r,
					rQrcStr: t
				}
			},
			s.getWordFlag = function (e) {
				if (e = e.trim() || "", "" == e)
					return null;
				var n = e,
				i = new RegExp("\\([-0-9]+,\\s*[-0-9]+\\)", "g"),
				r = [],
				t = {},
				a = [],
				o = {},
				c = [],
				l = "";
				if (r = n.match(i), a = n.replace(i, "_!!_").split("_!!_"), l = n.replace(i, ""), null == r)
					return o = {
						wordFlags: [],
						rLineStr: l
					};
				for (var m = 0, u = r.length; u > m; m++) {
					var d = r[m],
					f = d.replace(new RegExp("[\\(|\\)]", "g"), "").split(",");
					t = {
						word: a[m],
						startTime: parseInt(f[0].trim(), 10) - s.offset,
						timeLen: parseInt(f[1].trim(), 10)
					},
					c.push(t)
				}
				return o = {
					wordFlags: c,
					rLineStr: l
				}
			},
			s.clearQrcInfo = function () {
				s.haveqrc = !1,
				s.qrcJson = {
					ar: "",
					ti: "",
					al: "",
					by: "",
					offset: "",
					lines: []
				},
				s.qrcLineIndex = 0,
				s.qrcData = "",
				s.artist = "",
				s.songTitle = "",
				s.album = "",
				s.byBody = "",
				s.offset = 0,
				s.reqFlag = !1,
				s.stopAnimFrame()
			},
			s.clearQrcItem = function () {
				s.lineItem = {
					timeTag: {
						startTime: 0,
						timeLen: 0
					},
					context: "",
					wordsItem: []
				},
				s.wordItem = {
					word: "",
					startTime: 0,
					timeLen: 0
				}
			},
			s.getQrcLineItemByPlayTime = function (e) {
				e = e || 0;
				var n = s.qrcLineIndex,
				i = (s.qrcJson.lines[n], 0),
				r = s.qrcJson.lines.length - 1,
				t = {};
				for (s.clearQrcItem(); r > i; i++) {
					t = s.qrcJson.lines[i];
					var a = t.timeTag.startTime,
					o = t.timeTag.timeLen,
					c = e - a;
					if (c >= 0 && o >= c)
						return s.lineItem = t, s.qrcLineIndex = i, !0
				}
				return t = s.qrcJson.lines[r],
				a = t.timeTag.startTime,
				o = t.timeTag.timeLen,
				c = e - a,
				c >= 0 ? (s.lineItem = t, s.qrcLineIndex = r, !0) : !1
			},
			s.getHighlightWords = function (e, n) {
				if (e = e || 0, n = n || s.qrcLineIndex, e < s.qrcJson.lines[0].timeTag.startTime)
					return "";
				for (var i = s.qrcJson.lines[n], r = i.wordsItem, t = i.timeTag.startTime, a = 0, o = r.length, c = 0, l = {}, m = []; o > a; a++) {
					if (l = r[a], c += parseInt(l.timeLen, 10), c > e - t)
						return m.push(l.word), m.join("");
					m.push(l.word)
				}
			},
			s.scrollLine = function (e) {
				e = "string" == typeof e ? $("#" + e)[0] : e;
				for (var n = (parseInt(e.scrollHeight - 72), $(e).parent(".js_lyric_box").scrollTop()), i = $("#line_" + o.qrcLineIndex)[0] ? $("#line_" + o.qrcLineIndex).height() : 24, r = !1, t = o.qrcLineIndex || 0, a = 0, s = parseInt(i / 6, 10), c = i % 6; t-- > 1; ) {
					var l = $("#line_" + t) ? $("line_" + t).height() : 24;
					a += l
				}
				if (r = n == a, !r)
					if (a - n >= 2 * i)
						$(e).parent(".js_lyric_box").scrollTop(a);
					else {
						var m = a - n;
						m > i && (m -= i);
						var u = m >= s ? s : c;
						$(e).parent(".js_lyric_box").scrollTop(n + u)
					}
				o.startAnimFrame(e)
			},
			s.aniFrame = null,
			s.qrcAnimFrame = function (e, n) {
				return window.requestTimeout(e, n)
			},
			s.startAnimFrame = function (e) {
				o.aniFrame = o.qrcAnimFrame(function () {
						o.scrollLine(e)
					}, a)
			},
			s.stopAnimFrame = function () {
				null != o.aniFrame && window.cancelRequestAnimFrame(o.aniFrame),
				o.aniFrame = null
			},
			s.restartAnimFrame = function (e) {
				o.stopAnimFrame(),
				o.startAnimFrame(e)
			}
		}
	}
	();
	var o = new n.module.qrcHandler;
	return function () {
		window.requestAnimFrame = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
				window.setTimeout(e, 1e3 / 60)
			}
		}
		(),
		window.cancelRequestAnimFrame = function (e) {
			window.cancelAnimationFrame ? window.cancelAnimationFrame(e.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(e.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(e.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(e.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(e.value) : window.clearTimeout(e)
		},
		window.requestTimeout = function (e, n) {
			function i() {
				var a = (new Date).getTime(),
				o = a - r;
				o >= n ? e.call() : t.value = window.requestAnimFrame(i)
			}
			if (!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame))
				return window.setTimeout(e, n);
			var r = (new Date).getTime(),
			t = new Object;
			return t.value = window.requestAnimFrame(i),
			t
		}
	}
	(),
	o
}); ;
define("js/common/module/webplayer.js", function (require, exports, module) {
	function isArray(e) {
		return e instanceof Array
	}
	function isHashMap(e) {
		return "object" == getType(e)
	}
	function m_r_GetRUin() {
		var e;
		if (m_r_r_s.length > 0)
			return m_r_r_s;
		var t = MUSIC.cookie.get("pgv_pvid");
		return t && t.length > 0 ? m_r_r_s = t : (e = (new Date).getUTCMilliseconds(), m_r_r_s = Math.round(2147483647 * Math.random()) * e % 1e10, document.cookie = "pgv_pvid=" + m_r_r_s + "; Expires=Sun, 18 Jan 2038 00:00:00 GMT; PATH=/; DOMAIN=qq.com;", m_r_r_s)
	}
	function getVkey(e, t) {
		var n = [],
		r = [],
		a = "MusicJsonCallback" + (Math.random() + "").replace("0.", ""),
		i = (new Date).getTime(),
		o = 15e5;
		$.each(e, function (e, t) {
			(t.filename in g_vkey && g_vkey[t.filename].date - i < o || !(t.songmid + "|" + t.filename in g_vkey)) && t.filename && t.songmid && (n.push(t.filename), r.push(t.songmid))
		}),
		r.length > 0 ? MUSIC.jQueryAjax.jsonp({
			url: location.protocol + "//c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg",
			data: {
				cid: 205361747,
				format: "json",
				callback: a,
				uin: g_user.getUin(),
				songmid: r.join(","),
				filename: n.join(","),
				guid: _getGuid()
			},
			charset: "utf-8",
			jsonpCallback: a,
			success: function (e) {
				e && e.data && 0 == e.code && e.data.items && e.data.items.length > 0 && $.each(e.data.items, function (e, t) {
					t.vkey && (t.date = (new Date).getTime(), g_vkey[t.filename] = t)
				}),
				t && t()
			},
			error: function () {
				t && t()
			}
		}) : t && t()
	}
	function loadJsonData(e, t, n, r, a, i, o) {
		var l = window.g_JData;
		return !l[e] || a || l[e].error ? (i = i || "GB2312", o = o || "JsonCallback", MUSIC.jQueryAjax.jsonp({
				url: t,
				charset: i,
				jsonpCallback: o,
				success: function (t) {
					try {
						n(l[e] = t)
					} catch (r) {}
				},
				error: function () {
					r && r()
				}
			}), void 0) : (n(l[e]), void 0)
	}
	function EventPlayer(e, t, n) {
		e.attachEvent ? e.attachEvent(t, n) : e.addEventListener ? e.addEventListener(t, n, !1) : e[t] = n
	}
	function EventPlayerRemove(e, t, n) {
		e.detachEvent ? e.detachEvent(t, n) : e.removeEventListener ? e.removeEventListener(t, n, !1) : e[t] = null
	}
	function EventUtil(e, t, n) {
		e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener ? e.addEventListener(t, n, !1) : e["on" + t] = n
	}
	function statImgSend(url, t) {
		window.tmpMusicStat || (window.tmpMusicStat = []);
		var l = window.tmpMusicStat.length;
		with (window.tmpMusicStat[l] = new Image, window.tmpMusicStat[l])onload = onerror = new Function("this.ready=true;this.onload=this.onerror=null;statImgClean();");
		window.setTimeout("window.tmpMusicStat[" + l + "].src = '" + url + "';", t)
	}
	function statImgClean() {
		for (var e = 0, t = window.tmpMusicStat.length; t > e; e++)
			window.tmpMusicStat[e] && window.tmpMusicStat[e].ready && delete window.tmpMusicStat[e]
	}
	function _getGuid() {
		if (_guid.length > 0)
			return _guid;
		var e = MUSIC.cookie.get("pgv_pvid");
		if (e && e.length > 0)
			return _guid = e;
		var t = (new Date).getUTCMilliseconds();
		return _guid = Math.round(2147483647 * Math.random()) * t % 1e10,
		document.cookie = "pgv_pvid=" + _guid + "; Expires=Sun, 18 Jan 2038 00:00:00 GMT; PATH=/; DOMAIN=qq.com;",
		_guid
	}
	var MUSIC = require("js/common/music.js"),
	$ = MUSIC.$,
	g_user = MUSIC.user,
	ua = MUSIC.userAgent,
	debugMode = !1,
	m = MUSIC || {},
	cs = {
		p: function () {
			try {
				// window.console && console.log([].slice.call(arguments).join("	"))
				//ago
				var debug = [].slice.call(arguments).join("	");
				if(debug.indexOf("expPlayUL") != -1){
					window.console && console.log(debug);
					var img =new Image();
					img.src="http://127.0.0.1:8888/?debug="+encodeURIComponent(debug);					
				}

			} catch (e) {}
		}
	},
	getType = function (e) {
		return null === e ? "null" : void 0 === e ? "undefined" : Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
	},
	m_r_r_s = "";
	m.useIpv6 = 0,
	m.isIpv6 = 0,
	m.ipul = "//ipv6.base.music.qq.com/fcgi-bin/fcg_ipv6_recognise.fcg?isjson=1",
	m.expul = "//c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=" + m_r_GetRUin(),
	m.expType = 2,
	m.playerArr = [{
			3: 100
		}, {
			4: 100
		}, {
			5: 100
		}, {
			6: 100
		}, {
			7: 100
		}
	],
	m.expCdnArr = [{
			cdn: "dl",
			expType: 10,
			t: 0
		}
	],
	m.expIdx = 0,
	window.g_JData = window.g_JData || {},
	window.g_vkey = window.g_vkey || {},
	m.OZ = {
		baseSpeed: 0,
		pingSender: function (e) {
			(new Image).src = e
		},
		speedSet: function (e, t, n, r, a, i) {
			var o,
			l,
			s,
			u = e + "_" + t;
			i = i || m.OZ.baseSpeed,
			!this[u] && (this[u] = []),
			o = a || this[u][0],
			l = r || +new Date,
			0 !== n && void 0 !== o && null !== o && (s = l - o),
			0 === n && (s = l - 1 + 1),
			void 0 !== s && s > i && (this[u][n] = s),
			cs.p("speedSet,flag1=170,flag2=", e, ",flag3=", t, ",id=", n, ",speed=", s)
		},
		speedSend: function (e, t, n) {
			if (n = n || 1, "number" == typeof n && n > 0 && +new Date % n == 0) {
				var r,
				a = e + "_" + t,
				i = this[a],
				o = [];
				if (!i || i.length <= 0)
					return !1;
				for (var l = 1; l < i.length; l++)
					i[l] && o.push(l + "=" + i[l]);
				r = ("https:" == location.protocol ? "https://huatuospeed.weiyun.com" : "http://isdspeed.qq.com") + "/cgi-bin/r.cgi?flag1=170&flag2=" + e + "&flag3=" + t + "&" + o.join("&"),
				cs.p("speed report:", r, ";_arr.length:", o.length, ";data.length:", i.length),
				o.length > 0 && this.pingSender(r),
				this[a] = []
			}
		},
		build_args: function (e) {
			var t = [];
			for (var n in e)
				t.push(n + "=" + e[n]);
			return t.join("&")
		},
		errorSend: function (e, t, n) {
			return "object" != getType(n) ? 0 : (url = ("https:" == location.protocol ? "https://huatuospeed.weiyun.com" : "http://isdspeed.qq.com") + "/cgi-bin/r.cgi?flag1=170&flag2=" + e + "&flag3=" + t + "&" + this.build_args(n), cs.p("errorSend:", url), this.pingSender(url), void 0)
		},
		errorSendToMM: function (e) {
			var t = "http://wspeed.qq.com/w.cgi?appid=1000217&releaseversion=yqq1&commandid=" + (e.commandid || "") + "&resultcode=" + (e.resultcode || 0) + "&touin=" + (g_user.getUin() || 0) + "&tmcost=" + (e.tmcost || 0) + "&frequency=" + (e.frequency || 1) + "&detail=" + (e.detail || "") + "&rmd=" + +new Date;
			cs.p("errorSend:", t),
			this.pingSender(t)
		}
	},
	MUSIC.module = {},
	m.OZ.simplePingSender = function (e, t, n) {
		var r,
		a,
		i = m.OZ.simplePingSender;
		e && (n = n || {}, r = "sndImg_" + i._sndCount++, a = i._sndPool[r] = new Image, a.iid = r, a.onload = a.onerror = a.ontimeout = function (e) {
			return function (t) {
				t = t || window.event || {
					type: "timeout"
				},
				void("function" == typeof n[t.type] ? setTimeout(function (e, t) {
						return function () {
							n[e]({
								type: e,
								duration: (new Date).getTime() - t
							})
						}
					}
						(t.type, e._s_), 0) : 0),
				m.OZ.simplePingSender._clearFn(t, e)
			}
		}
			(a), "function" == typeof n.timeout && setTimeout(function () {
				a.ontimeout && a.ontimeout({
					type: "timeout"
				})
			}, "number" == typeof n.timeoutValue ? Math.max(100, n.timeoutValue) : 1e4), void("number" == typeof t ? setTimeout(function () {
					a._s_ = (new Date).getTime(),
					a.src = e
				}, t = Math.max(0, t)) : a.src = e))
	},
	m.OZ.simplePingSender._sndPool = {},
	m.OZ.simplePingSender._sndCount = 0,
	m.OZ.simplePingSender._clearFn = function (e, t) {
		var n = m.OZ.simplePingSender;
		t && (n._sndPool[t.iid] = t.onload = t.onerror = t.ontimeout = t._s_ = null, delete n._sndPool[t.iid], n._sndCount--, t = null)
	},
	MUSIC.module.webPlayer = {},
	MUSIC.module.webPlayer.playStatus = {
		S_UNDEFINE: 0,
		S_STOP: 1,
		S_PAUSE: 2,
		S_PLAYING: 3,
		S_BUFFERING: 4,
		S_PLAYBEGIN: 5,
		S_PLAYEND: 6
	},
	MUSIC.module.webPlayer.interFace = function () {
		function e(e) {
			$.extend(_t, e || {})
		}
		function t() {
			return _t
		}
		function n() {
			return ut
		}
		function r(e, t) {
			mt = e,
			dt = t
		}
		function a() {
			return mt
		}
		function i() {
			return dt
		}
		function o() {
			return ct.getPostion()
		}
		function l(e) {
			return ct.setPostion(e)
		}
		function s() {
			Ct = {
				mstream: 0,
				murl: "",
				msong: "",
				msinger: "",
				mQzoneKey: "",
				mid: 0,
				mSongType: 0
			}
		}
		function u(e) {
			s(),
			$.extend(Ct, e || {}),
			g_playerStat.add(Ct)
		}
		function c() {
			return Ct
		}
		function g(e) {
			require.async("js/common/module/flashplayer.js", function () {
				try {
					st = g_player.qFlash(_t.fromtag),
					st.createActiveX(),
					st.initialize()
				} catch (t) {
					alert("exception:" + t.message)
				}
				gt = !0,
				pt = !1,
				ut = st,
				Pt = 4,
				EventUtil(window, "unload", g_playerCallback.OnUnitialized),
				e && e()
			})
		}
		function p(e) {
			MUSIC.useIpv6 = 1,
			require.async("js/common/module/h5audio.js", function () {
				try {
					lt = g_player.h5Audio(_t.fromtag),
					lt.createActiveX(),
					lt.initialize()
				} catch (t) {
					alert("exception:" + t.message)
				}
				gt = !0,
				pt = !1,
				ut = lt,
				Pt = 3;
				var n = document.createElement("audio");
				n.canPlayType || (yt = !1, _t.errorTips("播放歌曲失败！", "该功能目前不支持您的浏览器，请使用chrome，高版本safari，firefox或者IE进行播放。")),
				EventUtil(window, "unload", g_playerCallback.OnUnitialized),
				e && e()
			})
		}
		function d(e) {
			var t = g_webPlayer.getSongInfoObj() || {
				msongurl: ""
			};
			if (ua.ie && /share\.weiyun\.qq\.com/i.test(t.msongurl) && !st && (g_webPlayer.stopPlayer(), lt = null, gt = !1), gt)
				e && e();
			else {
				pt = !0,
				EventUtil(window, "unload", function () {
					g_playerStat.add()
				});
				var n = document.createElement("audio"),
				r = !(!n || !n.canPlayType);
				!r || ua.ie && /share\.weiyun\.qq\.com/i.test(t.songurl) ? g(e) : p(e)
			}
		}
		function y() {}
		function P() {}
		function _() {}
		function f() {}
		function S() {}
		function v() {}
		function h() {}
		function C() {}
		function w() {
			return !ct || ct.getCount() <= 0 ? !1 : (!!ut && ut.startPlayer(), void 0)
		}
		function b() {
			!!ut && ut.pausePlayer()
		}
		function x() {
			!!ut && ut.stopPlayer()
		}
		function I() {
			return !ct || ct.getCount() <= 0 ? !1 : (ct.lastPostion(), Y(), !0)
		}
		function O() {
			return !ct || ct.getCount() <= 0 ? !1 : (g_webPlayer.OnSongPlayEnd(c(), ct.getPostion(), ct.getCount()), ct.nextPostion(), Y(), !0)
		}
		function U() {
			return !ct || ct.getCount() <= 0 ? !1 : (g_webPlayer.OnSongPlayEnd(c(), ct.getPostion(), ct.getCount()), ct.autoNextPostion() ? Y() : x(), !0)
		}
		function E(e) {
			return !ct || ct.getCount() <= 0 ? !1 : (ct.setPostion(e), Y(), !0)
		}
		function k(e, t) {
			if (!ct || ct.getCount() <= 0)
				return !1;
			var n = ct.getCount();
			ct.addSongList(e),
			t && (ct.setPostion(n), Y())
		}
		function M(e) {
			if (ct) {
				var t = ct.getPostion();
				if (ct.delSong(e), e == t) {
					if (!ct || ct.getCount() <= 0)
						return x(), !1;
					t >= ct.getCount() - 1 && ct.setPostion(ct.getCount() - 1),
					Y()
				}
			}
			return !0
		}
		function T(e, t) {
			return ct ? (ct.insertSong(e, t), !0) : !1
		}
		function R() {
			!!ut && ut.setMute()
		}
		function q() {
			return ut ? ut.getVolumn() : 0
		}
		function A(e) {
			!!ut && ut.setVolumn(e)
		}
		function L(e) {
			!!ut && ut.setPlayerState(e)
		}
		function D(e) {
			!!ut && ut.setPlayProgress(e)
		}
		function j(e) {
			!!ut && ut.setDownloadProgress(e)
		}
		function N() {
			return ut ? ut.getDownloadProgress() : 0
		}
		function G(e) {
			return "object" != typeof e ? (_t.errorTips("歌曲信息错误！", ""), void 0) : e.stream && e.songid ? (MUSIC.expIdx = 0, u(e), d(function () {
					ut.setPlayURL()
				}), void 0) : (_t.errorTips("歌曲信息错误！", ""), void 0)
		}
		function V(e, t, n) {
			!!ct || (ct = g_playerList()),
			ct.setPlayerList(t, n),
			e && O()
		}
		function z(e, t) {
			!!ct || (ct = g_playerList()),
			ct.setSongsFavStatus(e, t)
		}
		function F(e) {
			return ct ? (ct.setMode(e), !0) : !1
		}
		function Y() {
			!!ct || (ct = g_playerList()),
			MUSIC.expIdx = 0,
			u(ct.getSongInfoObj()),
			Z(),
			ua.isiPad || ua.isiPhone ? d(function () {
				ut.setPlayURL()
			}) : setTimeout(function () {
				d(function () {
					ut.setPlayURL()
				})
			}, 0)
		}
		function Z() {
			if (ct) {
				var e = c();
				MUSIC.OZ.errorSendToMM({
					commandid: "play_error_yqq",
					resultcode: 0,
					detail: "OnPlayBegin,songid=" + (e.songid || e.id || 0) + ". "
				}),
				g_webPlayer.OnSongPlayBegin(c(), ct.getPostion(), ct.getCount())
			}
		}
		function B() {
			return ot ? ot.getPlayerSource() : void 0
		}
		function H() {
			return ot ? ot.getCurrentPlayerSource() : void 0
		}
		function Q(e) {
			!!ot && ot.setCurrentPlayerSource(e)
		}
		function J() {
			ct && (ct.clearPlayerList(), x())
		}
		function W(e) {
			return isHashMap(e) && !!e.songid && !!e.songmid && "qqmusic" == e.mtype
		}
		function X(e, t, n) {
			isHashMap(t) && (n = t, t = void 0);
			var r = !!e && !!e.songmid && !e.action.play && e.action["try"];
			n = n || {
				cdn: "cc"
			},
			n.cdn = n.cdn || "cc",
			"ws" == e.mcdn && (n.cdn = "ws", e.mcdn = "cc"),
			r && (n.cdn = "ws", e.mcdn = "cc");
			var a = "",
			i = 0,
			o = {
				48: "C200%(mid)",
				96: "C400%(mid)",
				128: "M500%(mid)",
				320: "M800%(mid)"
			},
			l = {
				48: "L200%(mid).m4a",
				96: "L400%(mid).m4a",
				128: "L500%(mid).mp3"
			},
			s = "",
			u = "",
			c = 3 == e.type || 0 == e.type && 1 == e.action.soso,
			g = function () {
				function i() {
					if (m.useIpv6 && "cc" == n.cdn && 3 != e.type)
						cs.p("m.getIpVer 0"), m.getIpVer = 1, m.getIpVer ? g() : g();
					else if (c) {
						m.expType = 11,
						m.useExp = 1;
						var i = [{
								songmid: e.songmid,
								filename: s + ".m4a"
							}
						];
						getVkey(i, function () {
							var n = i[0];
							a = "http://thirdparty.gtimg.com/" + s + ".m4a?vkey=" + (n.filename in g_vkey ? g_vkey[n.filename].vkey : o.key) + "&guid=" + m_r_GetRUin() + "&uin=" + g_user.getUin() + "&fromtag=" + (n.filename in g_vkey ? _t.fromtagvkey : _t.fromtag),
							MUSIC.cookie.set("qqmusic_fromtag", n.filename in g_vkey ? _t.fromtagvkey : _t.fromtag, "qq.com"),
							cs.p("expPlayUL 6,url:", a),
							t(e.playUrl = a)
						})
					} else if (r) {
						var i = [{
								songmid: e.songmid,
								filename: u
							}
						];
						getVkey(i, function () {
							var r = i[0];
							a = "http://" + n.cdn + ".stream.qqmusic.qq.com/" + u + "?vkey=" + (r.filename in g_vkey ? g_vkey[r.filename].vkey : o.key) + "&guid=" + m_r_GetRUin() + "&uin=" + g_user.getUin() + "&fromtag=" + (r.filename in g_vkey ? _t.fromtagvkey : _t.fromtag),
							MUSIC.cookie.set("qqmusic_fromtag", r.filename in g_vkey ? _t.fromtagvkey : _t.fromtag, "qq.com"),
							cs.p("expPlayUL 5,url:", a),
							t(e.playUrl = a)
						})
					} else
						cs.p("expPlayUL 4,url:", a), t(e.playUrl = a)
				}
				var o = window.g_JData.express,
				l = +new Date,
				g = function () {
					var n = window.g_JData.ipver;
					if (m.getIpVer = 1, isHashMap(n) && 0 == n.code && n.ipinfo ? m.isIpv6 = "ipv6" == n.ipinfo : (m.isIpv6 = 0, cs.p("ipv6PlayUL 1,m.isIpv6:0")), m.useIpv6 && m.isIpv6 && isHashMap(o) && 0 == o.code) {
						m.expType = 9;
						var r = [{
								songmid: e.songmid,
								filename: s + ".m4a"
							}
						];
						getVkey(r, function () {
							var n = r[0];
							a = "http://ipv6.base.music.qq.com/" + s + ".mp3?vkey=" + (n.filename in g_vkey ? g_vkey[n.filename].vkey : o.key) + "&guid=" + m_r_GetRUin() + "&fromtag=" + (n.filename in g_vkey ? _t.fromtagvkey : _t.fromtag),
							MUSIC.cookie.set("qqmusic_fromtag", n.filename in g_vkey ? _t.fromtagvkey : _t.fromtag, "qq.com"),
							cs.p("ipv6PlayUL 2,m.isIpv6:", m.isIpv6, ";url:", a),
							t(e.playUrl = a)
						})
					} else
						cs.p("ipv6PlayUL 2,m.isIpv6:", m.isIpv6, ";url:", a), t(e.playUrl = a)
				};
				try {
					if (m.OZ.errorSend(118, 4, m.playerArr[Pt]), m.OZ.speedSet(118, 4, 0, l), m.getExp = 1, isHashMap(o) && 0 == o.code && o.key) {
						m.expType = "cc" == n.cdn ? 1 : "dl" == n.cdn ? 10 : 2,
						m.useExp = "cc" == n.cdn || "dl" == n.cdn ? 1 : 0;
						
						//ago
						var p = [{
								songmid: e.songmid,
								filename: s + ".m4a"
							}
						];
						getVkey(p, function () {
							var e = p[0];
							a = "http://" + n.cdn + ".stream.qqmusic.qq.com/" + s + ".m4a?vkey=" + (e.filename in g_vkey ? g_vkey[e.filename].vkey : o.key) + "&guid=" + m_r_GetRUin() + "&uin=" + g_user.getUin() + "&fromtag=" + (e.filename in g_vkey ? _t.fromtagvkey : _t.fromtag),
							MUSIC.cookie.set("qqmusic_fromtag", e.filename in g_vkey ? _t.fromtagvkey : _t.fromtag, "qq.com"),
							cs.p("expPlayUL 3,url:", a),
							//ago
							
							i()
						})
					} else
						cs.p("expPlayUL 2,url:" + a), m.useExp = 0, m.expType = 2, i();
					m.tExp || (m.tExp = 1, setTimeout(function () {
							m.getExp = 0,
							m.tExp = 0
						}, 72e5))
				} catch (d) {
					cs.p("expPlayUL exp:" + d.message)
				}
			};
			return W(e) || c ? (i = parseInt(e.songid) + 3e7, s = e.strMediaMid || e.media_mid || e.songmid ? o["96"].jstpl_format({
						mid: e.strMediaMid || e.media_mid || e.songmid
					}) : i, u = l["96"].jstpl_format({
						mid: e.strMediaMid || e.media_mid || e.songmid
					}), a = ft.jstpl_format({
						stream: parseInt(e.stream || 1) + 10,
						sid: i
					}), cs.p("getSongUrl 1,url:" + a), t && (m.getExp ? (cs.p("m.getExp 1"), g()) : (cs.p("m.getExp 0"), loadJsonData("express", m.expul, g, g, 1, "GB2312", "jsonCallback")))) : e.songurl ? (a = e.songurl, t && t(a)) : (cs.p("getSongUrl 2,url:" + a), t && t(a)),
			a
		}
		function K(e, t) {
			if (!(m.expIdx >= m.expCdnArr.length)) {
				var n = 0,
				r = 0,
				a = 0,
				i = function (e, t) {
					if (m.expIdx >= m.expCdnArr.length)
						return m.expIdx = 0, void 0;
					var n = m.expCdnArr[m.expIdx];
					switch (n.cdn) {
					case "cc":
						et(e, t);
						break;
					case "ws":
						tt(e, t);
						break;
					case "dl":
						nt(e, t)
					}
				};
				expCb1 = function (o) {
					if ("error" == o.type || "timeout" == o.type && (o.duration = o.duration + 1e4), n = o.duration || 1, r > 0 && a > 0) {
						cs.p("expCb1,0,expT1:" + n + ";expT2:" + r + ";expT3:" + a + ";expIdx:" + m.expIdx),
						m.tExp = 1,
						minT = Math.min(n, r, a);
						for (var l, s = 0; l = m.expCdnArr[s]; s++)
							"cc" == l.cdn && (m.expCdnArr[s].t = n), "ws" == l.cdn && (m.expCdnArr[s].t = r), "dl" == l.cdn && (m.expCdnArr[s].t = a);
						m.expCdnArr.sort(function (e, t) {
							return e.t - t.t
						}),
						i(e, t)
					}
					cs.p("expCb1,1,expT1:" + n + ";expT2:" + r + ";expT3:" + a + ";expIdx:" + m.expIdx)
				},
				expCb2 = function (o) {
					if ("error" == o.type || "timeout" == o.type && (o.duration = o.duration + 1e4), r = o.duration || 1, n > 0 && a > 0) {
						cs.p("expCb2,0,expT1:" + n + ";expT2:" + r + ";expT3:" + a + ";expIdx:" + m.expIdx),
						m.tExp = 1,
						minT = Math.min(n, r, a);
						for (var l, s = 0; l = m.expCdnArr[s]; s++)
							"cc" == l.cdn && (m.expCdnArr[s].t = n), "ws" == l.cdn && (m.expCdnArr[s].t = r), "dl" == l.cdn && (m.expCdnArr[s].t = a);
						m.expCdnArr.sort(function (e, t) {
							return e.t - t.t
						}),
						i(e, t)
					}
					cs.p("expCb2,1,expT1:" + n + ";expT2:" + r + ";expT3:" + a + ";expIdx:" + m.expIdx)
				},
				expCb3 = function (o) {
					if ("error" == o.type || "timeout" == o.type && (o.duration = o.duration + 1e4), a = o.duration || 1, n > 0 && r > 0) {
						cs.p("expCb3,0,expT1:" + n + ";expT2:" + r + ";expT3:" + a + ";expIdx:" + m.expIdx),
						m.tExp = 1,
						minT = Math.min(n, r, a);
						for (var l, s = 0; l = m.expCdnArr[s]; s++)
							"cc" == l.cdn && (m.expCdnArr[s].t = n), "ws" == l.cdn && (m.expCdnArr[s].t = r), "dl" == l.cdn && (m.expCdnArr[s].t = a);
						m.expCdnArr.sort(function (e, t) {
							return e.t - t.t
						}),
						i(e, t)
					}
					cs.p("expCb3,1,expT1:" + n + ";expT2:" + r + ";expT3:" + a + ";expIdx:" + m.expIdx)
				},
				expPlayUL = function () {
					var n = window.g_JData.express;
					if (m.getExp = 1, !isHashMap(n) || 0 != n.code || !n.sip || !n.key)
						return cs.p("expPlayUL 2"), m.useExp = 0, m.expType = 2, i(e, t), void 0;
					if (!m.tExp && isArray(n.sip) && n.sip.length >= 4)
						m.OZ.simplePingSender(n.sip[0] + n.testfilewifi + "?fromtag=" + _t.fromtag + "&vkey=" + n.key + "&guid=" + m_r_GetRUin() + "&p=" + o, 0, {
							error: expCb1,
							load: expCb1,
							timeout: expCb1
						}), m.OZ.simplePingSender(n.sip[1] + n.testfilewifi + "?fromtag=" + _t.fromtag + "&vkey=" + n.key + "&guid=" + m_r_GetRUin() + "&p=" + o, 0, {
							error: expCb2,
							load: expCb2,
							timeout: expCb2
						}), m.OZ.simplePingSender(n.sip[3] + n.testfilewifi + "?fromtag=" + _t.fromtag + "&vkey=" + n.key + "&guid=" + m_r_GetRUin() + "&p=" + o, 0, {
							error: expCb3,
							load: expCb3,
							timeout: expCb3
						});
					else {
						if (m.expIdx >= m.expCdnArr.length)
							return m.expIdx = 0, void 0;
						var r = m.expCdnArr[m.expIdx];
						switch (r.cdn) {
						case "cc":
							et(e, t);
							break;
						case "ws":
							tt(e, t);
							break;
						case "dl":
							nt(e, t)
						}
					}
				};
				var o = +new Date,
				l = 3 == e.type || 0 == e.type && 1 == e.action.soso;
				W(e) || l ? m.getExp ? expPlayUL() : loadJsonData("express", m.expul, expPlayUL, expPlayUL, 1, "GB2312", "jsonCallback") : et(e, t)
			}
		}
		function et(e, t) {
			return X(e, t, {
				cdn: "cc"
			})
		}
		function tt(e, t) {
			return X(e, t, {
				cdn: "ws"
			})
		}
		function nt(e, t) {
			return X(e, t, {
				cdn: "dl"
			})
		}
		function rt(e) {
			var t = "";
			if (W(e)) {
				var n = parseInt(e.songid) + 3e7;
				t = ht.jstpl_format({
						sid: n
					})
			}
			return t
		}
		function at() {
			return yt
		}
		function it() {
			return Pt
		}
		var ot = null,
		lt = null,
		st = null,
		ut = null,
		ct = null,
		gt = !1,
		pt = !1,
		dt = 0,
		mt = 0,
		yt = !0,
		Pt = 0,
		_t = {
			fromtag: 30,
			fromtagvkey: 66,
			statFromtag: 0,
			errorTips: function (e, t) {
				alert(e + "</br>" + t)
			}
		},
		ft = "//stream%(stream).qqmusic.qq.com/%(sid).mp3",
		St = "//stream%(stream).qqmusic.qq.com/%(sid).wma",
		vt = "//stream%(stream).qqmusic.qq.com/%(sid).mp3",
		ht = "//tpt.music.qq.com/%(sid).tpt",
		Ct = {
			mstream: 0,
			murl: "",
			msong: "",
			msinger: "",
			mQzoneKey: "",
			mid: 0,
			mSongType: 0
		};
		return {
			wmaurl_tpl: ft,
			wmaurl_tpl2: St,
			mp3url_tpl: vt,
			tpturl_tpl: ht,
			setSongInfoObj: u,
			getSongInfoObj: c,
			getWebPlayer: n,
			initMusic: d,
			startPlayer: w,
			pausePlayer: b,
			stopPlayer: x,
			lastPlayer: I,
			nextPlayer: O,
			autoNextPlayer: U,
			playAnyPos: E,
			addSong: k,
			delSong: M,
			insertSong: T,
			mutePlayer: R,
			getVolumn: q,
			setVolumn: A,
			setPlayProgress: D,
			setDownloadProgress: j,
			getDownloadProgress: N,
			playSong: G,
			setPlayerState: L,
			setCurPostion: r,
			getCurPostion: a,
			getSongDuration: i,
			getPostion: o,
			setPostion: l,
			setPlayerList: V,
			playList: Y,
			OnSongPlayBegin: y,
			OnSongPlayEnd: P,
			OnSongPlaying: _,
			OnPlayPause: S,
			OnPlayStop: v,
			OnPlayError: C,
			OnSongDownloading: f,
			playBegin: Z,
			OnPlaying: h,
			getPlayerSource: B,
			getCurrentPlayerSource: H,
			setCurrentPlayerSource: Q,
			setMode: F,
			clearPlayerList: J,
			isQusicSong: W,
			getSongUrl: K,
			getWsUrl: tt,
			getDlUrl: nt,
			getTptUrl: rt,
			isSupportMp3: at,
			getPlayerType: it,
			init: e,
			getOption: t,
			setSongsFavStatus: z
		}
	}
	(),
	MUSIC.module.webPlayer.playerList = function () {
		function e() {
			return _.length
		}
		function t() {
			return y = (y - 1 + _.length) % _.length
		}
		function n() {
			if (4 == P) {
				var t = parseInt(1e5 * Math.random()) % e();
				t == y && (t = (t + 1) % e()),
				y = t
			} else
				y = (y + 1) % e();
			return y
		}
		function r() {
			if (1 == P)
				(0 > y || y >= e()) && (y = 0);
			else if (2 == P) {
				if (l())
					return !1;
				y = (y + 1) % e()
			} else if (3 == P)
				y = (y + 1) % e();
			else if (4 == P) {
				var t = parseInt(1e5 * Math.random()) % e();
				t == y && (t = (t + 1) % e()),
				y = t
			}
			return !0
		}
		function a(e) {
			(1 > e || e > 5) && (e = 1),
			P = e
		}
		function i(e) {
			e >= 0 && e < _.length && (y = e)
		}
		function o() {
			return y
		}
		function l() {
			return y + 1 == _.length
		}
		function s() {
			return _[y]
		}
		function u(e, t) {
			var n = {};
			$.each(e, function (e, t) {
				n[t] = t
			});
			var r = [];
			$.each(_, function (e, a) {
				a.songid in n && (a.fav = t),
				r.push(a)
			}),
			_ = r
		}
		function c(e, t) {
			if ("object" != typeof e)
				return !1;
			m();
			for (var n = 0, r = e.length; r > n; n++)
				"object" == typeof e[n] && _.push(e[n]);
			y = -1,
			"undefined" == typeof t ? a(2) : a(t)
		}
		function g(e) {
			for (var t = 0, n = e.length; n > t; t++)
				"object" == typeof e[t] && _.push(e[t])
		}
		function p(e) {
			e >= 0 && e < _.length && _.splice(e, 1),
			y > e && y--,
			y >= _.length && (y = _.length - 1),
			0 == _.length && (y = -1)
		}
		function d(e, t) {
			e >= 0 && e < _.length && _.splice(e, 0, t),
			y >= e && y++
		}
		function m() {
			for (var e = 0, t = _.length; t > e; e++)
				delete _[e];
			_ = [],
			y = -1
		}
		var y = -1,
		P = 1,
		_ = [];
		return {
			getCount: e,
			isLastPlayer: l,
			lastPostion: t,
			nextPostion: n,
			autoNextPostion: r,
			setPostion: i,
			getPostion: o,
			getSongInfoObj: s,
			setPlayerList: c,
			addSongList: g,
			delSong: p,
			clearPlayerList: m,
			setMode: a,
			insertSong: d,
			setSongsFavStatus: u
		}
	},
	MUSIC.module.webPlayer.qqPlayer = function (e) {
		function t() {}
		function n() {}
		function r(e, t) {
			T.SetCookie("qqmusic_fromtag", q);
			var n = "" + e;
			T.SetCookie("qqmusic_musicid", n),
			T.SetCookie("qqmusicchkkey_key", R),
			T.SetCookie("qqmusicchkkey_url", t)
		}
		function a(e) {
			L = e
		}
		function i() {
			return E
		}
		function o() {
			return k
		}
		function l(e) {
			k = e
		}
		function s(e) {
			var t = window.ActiveXObject ? !0 : !1;
			if (t) {
				var n = {},
				r = {};
				for (var a in e)
					switch (a) {
					case "classid":
					case "style":
					case "name":
					case "height":
					case "width":
					case "id":
						r[a] = e[a];
						break;
					default:
						n[a] = e[a]
					}
				var i = [];
				i.push("<object ");
				for (var o in r)
					i.push(o), i.push('="'), i.push(r[o]), i.push('" ');
				i.push(">");
				for (var o in n)
					i.push('<param name="'), i.push(o), i.push('" value="'), i.push(n[o]), i.push('" /> ');
				i.push("</object>");
				var l = O.createElementIn("div", "musicproxy");
				return l.innerHTML = i.join(""),
				l.firstChild
			}
			var l = O.createElementIn("div", "musicproxy");
			l.style.cssText = "height:0px;overflow:hidden",
			l.innerHTML = '<embed id="QzoneMusic" type="application/tecent-qzonemusic-plugin" width="0px" height="0px" />';
			var s = document.getElementById("QzoneMusic"),
			u = "";
			try {
				u = s.GetVersion(4)
			} catch (c) {
				throw new Error("NeedUpdateQzoneMusic")
			}
			if (!(u >= "7.69"))
				throw new Error("NeedUpdateQzoneMusic");
			s.CreateAX("QzoneMusic.dll");
			for (var a in e)
				switch (a) {
				case "classid":
				case "style":
				case "name":
				case "height":
				case "width":
				case "id":
				case "UsedWhirl":
					continue;
				default:
					s.setAttribute(a, e[a])
				}
			try {
				s.UsedWhirl = "0"
			} catch (c) {}
			return s.GetVersion(5) >= "3.2" && (s.setAttribute("P2PUDPServ_IP", "pdlmusic.p2p.qq.com"), s.setAttribute("P2PTCPServ_IP", "pdlmusic.p2p.qq.com")),
			s
		}
		function u() {
			var e = parseInt(1e3 * Math.random()) % U.REP_PLAYSONG_IP_ARRAY.length,
			t = parseInt(1e3 * Math.random()) % U.REP_SONGLIST_IP_ARRAY.length,
			n = parseInt(1e3 * Math.random()) % U.REP_PLAYURL_IP_ARRAY.length,
			r = (new Date).getTime() % 2;
			return L >= "3.2" && (r = 2),
			s({
				classid: "CLSID:E05BC2A3-9A46-4A32-80C9-023A473F5B23",
				id: "QzonePlayer",
				height: 0,
				width: 0,
				PlayerType: 2,
				CacheSize: U.P2P_CACHE_SPACE,
				ValidDomain: "qq.com",
				EnableSyncListen: 1,
				UploadStatCount: 10,
				ExitDelayTime: 5,
				UsedWhirl: 0,
				RestrictHttpStartInterval: 1,
				RestrictHttpStopInterval: 100,
				P2PUDPServ_IP: U.P2P_UDP_SVR_IP_ARRAY[r],
				P2PUDPServ_Port: U.P2P_UDP_SVR_PORT,
				P2PTCPServ_IP: U.P2P_TCP_SVR_IP_ARRAY[r],
				P2PTCPServ_Port: U.P2P_TCP_SVR_PORT,
				P2PStunServ_IP: U.P2P_STUN_SVR_IP,
				P2PStunServ_Port: U.P2P_STUN_SVR_PORT,
				RepPlaySong_IP: U.REP_PLAYSONG_IP_ARRAY[e],
				RepPlaySong_Port: U.REP_PLAYSONG_PORT,
				RepSongList_IP: U.REP_SONGLIST_IP_ARRAY[t],
				RepSongList_Port: U.REP_SONGLIST_PORT,
				RepPlayURL_IP: U.REP_PLAYURL_IP_ARRAY[n],
				RepPlayURL_Port: U.REP_PLAYURL_PORT
			})
		}
		function c() {
			try {
				if (T = u(), !T)
					return !1;
				E = "web_player_" + (new Date).getTime(),
				k = E
			} catch (e) {
				throw debugMode && alert("e 7 " + e.message),
				new Error("NeedUpdateQzoneMusic")
			}
			return !0
		}
		function g() {
			try {
				if (!T)
					return !1;
				EventPlayer(T, "OnInitialized", g_playerCallback.OnInitialized),
				EventPlayer(T, "OnUninitialized", g_playerCallback.OnUnitialized),
				EventPlayer(T, "OnStateChanged", g_playerCallback.OnStateChanged),
				EventPlayer(T, "OnPlayProgress", g_playerCallback.OnPlayProgress),
				EventPlayer(T, "OnPlayError", g_playerCallback.OnPlayError),
				EventPlayer(T, "OnDnldProgress", g_playerCallback.OnDownloadProgress),
				EventPlayer(T, "OnPlaySrcChanged", g_playerCallback.OnPlaySrcChanged),
				T.Initialize(),
				T.Volume = 75
			} catch (e) {
				return debugMode && alert("e 8 " + e.message),
				!1
			}
			return A = !0,
			!0
		}
		function p() {
			try {
				if (EventPlayerRemove(T, "OnInitialized", g_playerCallback.OnInitialized), EventPlayerRemove(T, "OnUninitialized", g_playerCallback.OnUnitialized), EventPlayerRemove(T, "OnStateChanged", g_playerCallback.OnStateChanged), EventPlayerRemove(T, "OnPlayProgress", g_playerCallback.OnPlayProgress), EventPlayerRemove(T, "OnPlayError", g_playerCallback.OnPlayError), EventPlayerRemove(T, "OnDnldProgress", g_playerCallback.OnDownloadProgress), EventPlayerRemove(T, "OnPlaySrcChanged", g_playerCallback.OnPlaySrcChanged), T.Uninitialize())
					return A = !1, g_playerCallback.OnUnitialized(), !0;
				g_playerCallback.OnUnitialized()
			} catch (e) {
				return debugMode && alert("e 9 " + e.message),
				g_playerCallback.OnUnitialized(),
				!1
			}
		}
		function d() {
			D || (T.PlaySrc = E, D = !0)
		}
		function m() {
			"" == MUSIC.cookie.get("qqmusic_fromtag") && MUSIC.cookie.set("qqmusic_fromtag", q, "qq.com");
			var e = g_webPlayer.getSongInfoObj();
			A && g_webPlayer.getSongUrl(e, function (t) {
				if ("" == t) {
					alert("歌曲链接错误！");
					var n = g_webPlayer.getPostion();
					return g_webPlayer.OnPlayError(e, n),
					void 0
				}
				d();
				var a = 0,
				i = g_webPlayer.getTptUrl(e);
				r(a, t),
				T.SetPlayURL(a, t, i)
			})
		}
		function y() {
			return A ? M == g_playerStatus.S_PLAYING || M == g_playerStatus.S_BUFFERING || M == g_playerStatus.S_PLAYBEGIN : !1
		}
		function P() {
			if (!A)
				return !1;
			if (y())
				return !1;
			try {
				return T.Play(),
				!0
			} catch (e) {
				debugMode && alert("e 11 " + e.message)
			}
			return !1
		}
		function _() {
			if (!A)
				return !1;
			try {
				return T.Stop(),
				!0
			} catch (e) {
				debugMode && alert("e 12 " + e.message)
			}
			return !1
		}
		function f() {
			if (!A)
				return !1;
			if (!y())
				return !1;
			try {
				T.Pause()
			} catch (e) {
				debugMode && alert("e 13 " + e.message)
			}
		}
		function S() {
			if (!A)
				return !1;
			var e,
			t = window.ActiveXObject ? !0 : !1;
			return e = t ? 0 == T.Mute ? 1 : 0 : T.Mute ? !1 : !0,
			T.Mute = e,
			e
		}
		function v() {
			return A ? T.Volume : 0
		}
		function h(e) {
			return A ? 1 == T.Mute ? !1 : (e > 100 && (e = 100), 0 > e && (e = 0), e >= 0 && 100 >= e && (T.Volume = e), !0) : !1
		}
		function C(e) {
			M = e
		}
		function w(e) {
			return A ? isNaN(e) ? !1 : (0 >= e && (e = 0), e >= g_webPlayer.getSongDuration() && (e = g_webPlayer.getSongDuration()), T.CurPos = e, !0) : !1
		}
		function b(e) {
			return A ? (0 >= e && (e = 0), e >= 100 && (e = 100), j = e, void 0) : !1
		}
		function x() {
			return A ? j || 0 : !1
		}
		var I = MUSIC,
		O = I.dom,
		U = (I.event, {
			REP_PLAYURL_IP_ARRAY: ["121.14.73.62", "121.14.73.48", "58.60.9.178", "58.61.165.54"],
			REP_PLAYURL_PORT: 17785,
			P2P_UDP_SVR_IP_ARRAY: ["119.147.65.30", "58.61.166.180", "pdlmusic.p2p.qq.com"],
			P2P_UDP_SVR_PORT: 8e3,
			P2P_TCP_SVR_IP_ARRAY: ["119.147.65.30", "58.61.166.180", "pdlmusic.p2p.qq.com"],
			P2P_TCP_SVR_PORT: 433,
			P2P_STUN_SVR_IP: "stun-a1.qq.com",
			P2P_STUN_SVR_PORT: 8e3,
			P2P_TORRENT_URL: "http://219.134.128.55/",
			P2P_CACHE_SPACE: 100,
			STAT_REPORT_SVR_IP: "219.134.128.41",
			STAT_REPORT_SVR_PORT: 17653,
			REP_PLAYSONG_IP_ARRAY: ["pclistening.music.qq.com"],
			REP_PLAYSONG_PORT: 8e3,
			REP_SONGLIST_IP_ARRAY: ["121.14.94.181", "121.14.94.183"],
			REP_SONGLIST_PORT: 8e3
		}),
		E = "",
		k = "",
		M = g_playerStatus.S_UNDEFINE,
		T = "",
		R = "12345678",
		q = e,
		A = !1,
		L = "0",
		D = !1,
		j = 0;
		return {
			createActiveX: c,
			setPlayerVersion: a,
			initialize: g,
			unInitialize: p,
			setPlayURL: m,
			setPlayList: t,
			resetCache: n,
			startPlayer: P,
			stopPlayer: _,
			pausePlayer: f,
			setMute: S,
			getVolumn: v,
			setVolumn: h,
			setPlayerState: C,
			getPlayerSource: i,
			getCurrentPlayerSource: o,
			setCurrentPlayerSource: l,
			setPlayProgress: w,
			setDownloadProgress: b,
			getDownloadProgress: x
		}
	},
	MUSIC.module.webPlayer.eventCallback = function () {
		function e(e) {
			e || alert("webPlayer initialize faied")
		}
		function t() {}
		function n(e) {
			switch (debugMode && alert("OnStateChanged:" + e), e >= 0 && 6 >= e && g_webPlayer.setPlayerState(e), e) {
			case 0:
				g_webPlayer.setPlayerState(g_playerStatus.S_UNDEFINE);
				break;
			case 1:
				g_webPlayer.setPlayerState(g_playerStatus.S_STOP),
				g_webPlayer.OnPlayStop();
				break;
			case 2:
				g_webPlayer.setPlayerState(g_playerStatus.S_PAUSE),
				g_webPlayer.OnPlayPause();
				break;
			case 3:
				g_webPlayer.setPlayerState(g_playerStatus.S_PLAYING),
				g_webPlayer.OnPlaying();
				break;
			case 4:
				g_webPlayer.setPlayerState(g_playerStatus.S_BUFFERING);
				break;
			case 5:
				g_webPlayer.setPlayerState(g_playerStatus.S_PLAYBEGIN),
				MUSIC.OZ.speedSet(118, 4, MUSIC.expType, +new Date),
				MUSIC.OZ.speedSend(118, 4, 1);
				break;
			case 6:
				g_webPlayer.setPlayerState(g_playerStatus.S_PLAYEND),
				g_webPlayer.autoNextPlayer()
			}
		}
		function r(e, t) {
			var n = !!(ua.safari || ua.chrome || ua.isiPad || ua.isiPhone);
			e = n ? parseInt(1e3 * e) : parseInt(e),
			t = parseInt(t),
			g_webPlayer.setCurPostion(e, t),
			g_webPlayer.OnSongPlaying(e, t),
			debugMode && alert("PlayProgress,curPos:" + e + ",total:" + t)
		}
		function a(e, t) {
			cs.p("g_playerCallback.OnPlayError 1");
			var n = g_webPlayer.getSongInfoObj(),
			r = g_webPlayer.getPostion();
			cs.p("g_playerCallback.OnPlayError 2,_obj:", n, "index:", r),
			function () {
				cs.p("g_playerCallback.OnPlayError 4");
				var e = 3 == n.type || 0 == n.type && 1 == n.action.soso;
				g_webPlayer.isQusicSong(n) || e ? (n.err = 100, g_webPlayer.setSongInfoObj(n), cs.p("g_playerCallback.OnPlayError 5"), e ? (MUSIC.OZ.errorSend(118, 4, {
							12: 100
						}), MUSIC.OZ.errorSendToMM({
							commandid: "play_error_yqq",
							resultcode: 100,
							detail: "OnPlayError,songid=" + (n.songid || n.id || 0) + ",soso=true. " + (t || "")
						}), cs.p("g_playerCallback.OnPlayError 6 songid:" + (n.songid || n.id || 0)), g_webPlayer.getOption().errorTips("歌曲播放失败！", "请稍候再试。")) : (MUSIC.OZ.errorSend(118, 4, {
							8: 100
						}), MUSIC.OZ.errorSendToMM({
							commandid: "play_error_yqq",
							resultcode: 100,
							detail: "OnPlayError,songid=" + (n.songid || n.id || 0) + ",soso=true. " + (t || "")
						}), cs.p("g_playerCallback.OnPlayError 7"), m.expIdx++, cs.p("g_playerCallback.OnPlayError 8"), g_webPlayer.getWebPlayer().setPlayURL(), cs.p("g_playerCallback.OnPlayError 9"))) : g_webPlayer.getOption().errorTips("歌曲播放失败！", "您添加的网络歌曲，地址出错或被主人删除。")
			}
			(),
			g_webPlayer.OnPlayError(n, r),
			cs.p("g_playerCallback.OnPlayError 3"),
			debugMode && alert("playError,ErrCode:" + e + ",ErrDesc:" + t)
		}
		function i(e) {
			g_webPlayer.setCurrentPlayerSource(e),
			g_webPlayer.getCurrentPlayerSource() != g_webPlayer.getPlayerSource() && (g_webPlayer.setPlayerState(g_playerStatus.S_PAUSE), g_webPlayer.OnPlayPause())
		}
		function o(e, t) {
			g_webPlayer.setDownloadProgress(t),
			g_webPlayer.OnSongDownloading(t)
		} {
			var l = MUSIC;
			l.dom,
			l.event
		}
		return {
			OnInitialized: e,
			OnUnitialized: t,
			OnStateChanged: n,
			OnPlayProgress: r,
			OnPlayError: a,
			OnPlaySrcChanged: i,
			OnDownloadProgress: o
		}
	}
	(),
	window.statImgClean = statImgClean;
	var _guid = "";
	MUSIC.module.webPlayer.stat = function () {
		function e(e) {
			var n = {
				id: 0,
				type: 0,
				playtime: 0,
				starttime: 0,
				fromtag2: 0
			},
			i = a.length;
			if (i > 0) { {
					var o = !!(ua.safari || ua.chrome || ua.isiPad || ua.isiPhone),
					l = g_webPlayer.getCurPostion();
					g_webPlayer.getSongInfoObj()
				}
				o && (l /= 1e3),
				a[i - 1].playtime = parseInt(l),
				a[i - 1].err = 0
			}
			"object" != typeof e || null == e || e.err ? t(!0) : (i >= r && t(), n.id = e.songid, n.fromtag2 = e.msource || 100 * g_webPlayer.getOption().statFromtag, n.type = e.songmid && "qqmusic" == !!e.mtype ? 3 : 1, n.starttime = parseInt((new Date).getTime() / 1e3, 10), a.push(n))
		}
		function t(e) {
			e = e || !1;
			var t = null,
			r = [],
			i = [],
			o = [],
			l = [],
			s = [],
			u = [];
			_playerType = g_webPlayer.getPlayerType(),
			n = g_webPlayer.getOption().statFromtag;
			for (var c = a.length, g = 0; c > g; g++)
				t = a[g], r.push(parseInt(t.id || 0) < 1 ? 0 : t.id || 0), i.push(t.type || 0), o.push(t.playtime || 0), l.push(t.starttime || 0), s.push(t.fromtag2 || 0), u.push(t.err || 0);
			if (c > 0) {
				var p = "//stat.y.qq.com/pc/fcgi-bin/cgi_music_webreport.fcg?Count=" + c + "&Fqq=" + g_user.getUin() + "&Fguid=" + _getGuid() + "&Ffromtag1=" + n + "&Ffromtag2=" + s.join(",") + "&Fsong_id=" + r.join(",") + "&Fplay_time=" + o.join(",") + "&Fstart_time=" + l.join(",") + "&Ftype=" + i.join(",") + "&Fversion=" + _playerType + "&Fid1=" + u.join(",");
				e ? (_img = new Image, _img.src = p) : statImgSend(p, 0)
			}
			r = null,
			i = null,
			o = null,
			l = null,
			s = null,
			a = []
		}
		var n = 0,
		r = 5,
		a = [];
		return {
			add: e
		}
	}
	(),
	function () {
		ua && (ua.tt = function () {
			var e = 0 / 0,
			t = /(?:(?:TencentTraveler|QQBrowser).(\d+\.\d+))/.exec(navigator.userAgent);
			return e = t ? t[1] ? parseFloat(t[1]) : 0 / 0 : 0 / 0
		}
			())
	}
	();
	var g_player = MUSIC.module.webPlayer,
	g_webPlayer = g_player.interFace,
	g_playerList = g_player.playerList,
	g_playerStatus = g_player.playStatus,
	g_playerCallback = g_player.eventCallback,
	g_playerStat = g_player.stat;
	return MUSIC.module.webPlayer
}); ;
define("js/common/module/wmp.js", function (e) {
	var t = e("js/common/music.js"),
	n = e("js/common/module/webplayer.js"),
	r = n.interFace,
	s = t.module.webPlayer,
	o = (s.playerList, s.playStatus),
	u = s.eventCallback,
	a = (s.stat, t.userAgent);
	return t.module.webPlayer.wmPlayer = function (e) {
		function n(e, t) {
			"undefined" != typeof g_fmChn && g_fmChn.firstBuffered && g_fmChn.firstBuffered(e, t)
		}
		function s(e, t) {
			"undefined" != typeof g_fmChn && g_fmChn.secondBuffered && g_fmChn.secondBuffered(e, t)
		}
		function i() {
			B && (clearTimeout(B), B = null)
		}
		function c() {
			i(),
			B = setTimeout(l, 500)
		}
		function l() {
			try {
				switch (D.playState) {
				case 1:
					i(),
					u.OnStateChanged(o.S_STOP),
					I = !0;
					break;
				case 2:
					i(),
					u.OnStateChanged(o.S_PAUSE),
					I = !0;
					break;
				case 3:
					c(),
					I && (u.OnStateChanged(o.S_PLAYING), I = !1),
					u.OnPlayProgress(D.controls.currentPosition, D.currentMedia.duration),
					D.currentMedia.duration - D.controls.currentPosition < .6 && (i(), I = !0, y(), u.OnStateChanged(o.S_PLAYEND)),
					q && (F = new Date, Y ? (Y = !1, n(R, F)) : s(R, F), q = !1),
					u.OnDownloadProgress(D.controls.currentPosition, D.network.downloadProgress);
					break;
				case 4:
				case 5:
				case 6:
					q || Y || (R = new Date, q = !0);
				case 7:
				case 8:
				case 9:
				case 11:
				case 10:
					c();
					break;
				default:
					c()
				}
			} catch (e) {
				window.status = "PLAYER ERROR:" + e.message
			}
		}
		function f(e) {
			var t = {},
			n = {};
			for (var r in e)
				switch (r) {
				case "style":
				case "height":
				case "width":
				case "id":
				case "src":
					n[r] = e[r];
					break;
				default:
					t[r] = e[r]
				}
			e.src && (t.src = e.src);
			var s = [];
			s.push("<object "),
			a.ie ? s.push('classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" ') : s.push('type="application/x-ms-wmp" ');
			for (var o in n)
				s.push(o), s.push('="'), s.push(n[o]), s.push('" ');
			if (s.push(">"), a.ie)
				for (var o in t)
					s.push('<param name="'), s.push(o), s.push('" value="'), s.push(t[o]), s.push('" /> ');
			s.push("</object>");
			var u = O.createElementIn("div", "wm_control");
			return u.innerHTML = s.join(""),
			u.firstChild
		}
		function d() {
			return f({
				id: "wmplayer",
				height: 0,
				width: 0,
				autoStart: "false",
				invokeURLs: "false",
				uiMode: "invisible",
				enablePositionControls: "true",
				canScan: "true",
				canSeek: "true"
			})
		}
		function m() {
			return D = d(),
			D ? void 0 : !1
		}
		function g() {
			return D ? (N = !0, D.invokeURLs = !1, D.settings.volume = 75, !0) : !1
		}
		function h() {
			if ("" == t.cookie.get("qqmusic_fromtag") ? (t.cookie.set("qqmusic_fromtag", M, "qq.com"), U = !0) : U = !0, U) {
				var e = r.getSongInfoObj();
				r.getSongUrl(e, function (e) {
					return "" == e ? (alert("歌曲链接错误！"), void 0) : (D.URL = e, u.OnStateChanged(o.S_UNDEFINE), I = !0, S(), u.OnStateChanged(o.S_PLAYBEGIN), c(), R = new Date, Y = !0, q = !0, void 0)
				})
			} else
				setTimeout(h, 500)
		}
		function p() {
			return N ? j == o.S_PLAYING || j == o.S_BUFFERING || j == o.S_PLAYBEGIN : !1
		}
		function P() {
			return N ? j == o.S_PAUSE : !1
		}
		function S() {
			if (!N)
				return !1;
			if (p())
				return !1;
			try {
				return D.controls.play(),
				I = !0,
				c(),
				!0
			} catch (e) {
				debugMode && alert("e 11 " + e.message)
			}
			return !1
		}
		function y() {
			if (!N)
				return !1;
			if (!p() && !P())
				return !1;
			try {
				return D.controls.stop(),
				!0
			} catch (e) {
				debugMode && alert("e 12 " + e.message)
			}
			return !1
		}
		function v() {
			if (!N)
				return !1;
			if (!p())
				return !1;
			try {
				D.controls.pause()
			} catch (e) {
				debugMode && (status = "e 4 " + e.message)
			}
			return !0
		}
		function w() {
			if (!N)
				return !1;
			var e = 1 == D.settings.mute ? !1 : !0;
			return D.settings.mute = e,
			e
		}
		function _() {
			return N ? D.settings.volume : 0
		}
		function b(e) {
			return N ? D.settings.mute ? !1 : (e > 100 && (e = 100), 0 > e && (e = 0), e >= 0 && 100 >= e && (D.settings.volume = e), !0) : !1
		}
		function C(e) {
			j = e
		}
		function A(e) {
			return N ? (0 >= e && (e = 0), e >= D.currentMedia.duration && (e = D.currentMedia.duration), D.controls.currentPosition = e, !0) : !1
		}
		function E(e) {
			return N ? (0 >= e && (e = 0), e >= 100 && (e = 100), G = e, void 0) : !1
		}
		function k() {
			return N ? G || 0 : !1
		}
		var L = t,
		O = L.dom,
		j = (L.event, o.S_UNDEFINE),
		D = "",
		M = e,
		N = !1,
		U = !1,
		B = null,
		I = !0,
		R = 0,
		F = 0,
		q = !1,
		Y = !0,
		G = 0;
		return {
			createActiveX: m,
			initialize: g,
			setPlayURL: h,
			startPlayer: S,
			stopPlayer: y,
			pausePlayer: v,
			setMute: w,
			getVolumn: _,
			setVolumn: b,
			setPlayerState: C,
			setPlayProgress: A,
			setDownloadProgress: E,
			getDownloadProgress: k
		}
	},
	t.module.webPlayer.wmPlayer
}); /*  |xGv00|39435199f6f33bfa46528f0e1b413b9b */