define("js/v4/player.js", function (n) {
	function e(e, t, a) {
		function s(t, s, i, l, _, d) {
			d = d || !1,
			y.get(function (n) {
				x = n
			}),
			n.async("js/common/html/songlist.js", function (n) {
				n.init({
					container: t,
					specilData: s,
					specialTpl: l,
					reportType: o.reportMap.player,
					actions: q,
					from: 0,
					callback: function () {
						u.webkit || (f = m(".sb_scrollable").scrollbar({
									overviewElement: ".sb_overview",
									barElement: ".scroll_area",
									onScrolled: function () {}
								}));
						var n = [];
						for (var t in s) {
							var l = s[t];
							for (var d in i)
								l && i[d] && l.songid == i[d].songid && n.push(l)
						}
						var g = parseInt(o.cookie.get("yq_index")) || 0;
						!e && g > 0 || -1 == h && !p && (2 == r || 1 == r) ? (c.setPlayerList(!1, s, w.mode), setTimeout(function () {
								c.playAnyPos(g)
							}, 500)) : (c.setPlayerList(_ && (-1 == h || 0 == r), s, w.mode), c.setPostion(g)),
						(/Version.(\d+\.\d+)/i.exec(navigator.userAgent) || window.safariHandler) && setTimeout(function () {
							c.playAnyPos(g)
						}, 500),
						!u.webkit && f && f.scrollbar("scrollToY", 0),
						u.webkit && (m(".sb_overview")[0].scrollTop = -10),
						a && a(),
						P._curSongInfo && (m("div.songlist__item", m('li[mid="' + P._curSongInfo.songid + '"]')).addClass("songlist__item--playing"), m(".js_play", m('li[mid="' + P._curSongInfo.songid + '"]')).attr("title", "暂停").html('<i class="list_menu__icon_pause"></i><span class="icon_txt">暂停</span>'))
					}
				})
			})
		}
		o.cookie.set("yplayer_open", 1),
		m.jStorage.set("PLAYER_EXISTS", !0);
		var l = e && 0 == e.play,
		r = (parseInt(o.cookie.get("yq_index")) || 0, o.player.getPlayerOptions().mod),
		p = o.player.getPlayerOptions().deleteList;
		l || 1 == r && (l = !0);
		var d = [];
		e && (m.each(e.list, function (n, e) {
				e && e.disabled && e.disabled || d.push(e)
			}), e.list = d),
		t = t || !1;
		var g = function (n) { {
				var e,
				t = "";
				Array.prototype.join
			}
			t += "";
			var a = n.list;
			for (i = 0; i < a.length; i++) {
				t += '\r\n                            <li mid="' + (null == (e = a[i].songid) ? "" : e) + '" ix="' + (null == (e = a[i].ix) ? "" : e) + '"  data-page="player" data-stat="y_new.player.songlist.dbclick">\r\n                                <div class="songlist__item">\r\n                                    <div class="songlist__edit">\r\n                                        <input type="checkbox" class="songlist__checkbox">\r\n                                    </div>\r\n                                    <div class="songlist__number',
				i >= 99 && (t += " songlist__number--small"),
				t += '">' + (null == (e = i + 1) ? "" : e) + '</div>\r\n                                    <div class="songlist__songname">\r\n                                        <span class="songlist__songname_txt" title="' + (null == (e = a[i].songname) ? "" : _.escape(e)) + '">' + (null == (e = a[i].songname) ? "" : _.escape(e)) + '</span>\r\n                                        <div class="mod_list_menu">\r\n					    <a href="javascript:;" class="list_menu__item list_menu__play js_play" data-stat="y_new.player.songlist.playone" data-page="player" title="播放">\r\n						<i class="list_menu__icon_play"></i>\r\n						<span class="icon_txt">播放</span>\r\n					    </a>\r\n					    <a href="javascript:;" class="list_menu__item list_menu__add js_fav" ',
				a[i].action.fav && 5 != a[i].songtype || (t += 'style="display:none;"'),
				t += ' data-stat="y_new.player.songlist.addone" title="添加到歌单" aria-haspopup="true">\r\n						<i class="list_menu__icon_add"></i>\r\n						<span class="icon_txt">添加到歌单</span>\r\n					    </a>\r\n					    <a href="javascript:;" class="list_menu__item list_menu__down js_down" ',
				(a[i].action.down_lq || a[i].action.down_hq || a[i].action.down_sq) && 5 != a[i].songtype || (t += 'style="display:none;"'),
				t += ' data-stat="y_new.player.songlist.downloadone" title="下载" aria-haspopup="true">\r\n						<i class="list_menu__icon_down"></i>\r\n						<span class="icon_txt">下载</span>\r\n					    </a>\r\n					    <a href="javascript:;" class="list_menu__item list_menu__share js_share" ',
				a[i].action.share && 5 != a[i].songtype || (t += 'style="display:none;"'),
				t += ' data-stat="y_new.player.songlist.shareone" title="分享" aria-haspopup="true">\r\n						<i class="list_menu__icon_share"></i>\r\n						<span class="icon_txt">分享</span>\r\n					    </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="songlist__artist">\r\n					';
				for (var s = 0, l = a[i].singer.length; l > s; s++) {
					var r = a[i].singer[s];
					t += "\r\n					",
					s > 0 && (t += "/"),
					t += '\r\n					<a href="' + (null == (e = o.util.getSingerUrl(r)) ? "" : e) + '" data-singermid="' + (null == (e = r.mid) ? "" : e) + '" data-singerid="' + (null == (e = r.id) ? "" : e) + '" title="' + (null == (e = r.name) ? "" : _.escape(e)) + '" data-stat="y_new.player.songlist.singername" class="singer_name" data-page="player">' + (null == (e = r.name) ? "" : _.escape(e)) + "</a>\r\n					"
				}
				t += '\r\n                                    </div>\r\n                                    <div class="songlist__time">' + (null == (e = a[i].playTime) ? "" : e) + '</div>\r\n                                    <div class="songlist__other">\r\n					',
				1 == a[i].action.soso && (t += '\r\n					<a href="javascript:;" class="icon_sosomusic">无版权</a>\r\n					'),
				t += '\r\n                                    </div>\r\n                                    <a href="javascript:;" class="songlist__delete js_delete" data-page="player" data-stat="y_new.player.songlist.delete" title="删除"><span class="icon_txt">删除</span></a>\r\n                                    <i class="player_songlist__line"></i>\r\n                                </div>\r\n                            </li>\r\n	'
			}
			return t += ""
		};
		y.get(function (n) {
			n.length > 0 ? s(m("#song_box"), n, [], g, !!e && !!e.play) : a && a()
		})
	}
	function t(n) {
		w.mode = n,
		g.set("y_mod", [w.mode, w.volume, w.trans].join("|")),
		c.setMode(n)
	}
	function a(n) {
		y.get(function () {
			n && n()
		})
	}
	function s(n) {
		var e = parseInt(n / 60, 10),
		t = n % 60;
		return (10 > e ? "0" + e : e) + ":" + (10 > t ? "0" + t : t)
	} {
		var o = n("js/common/music.js"),
		l = (n("js/common/music/scroller.js"), o.statistics),
		r = n("js/common/module/webplayer.js"),
		c = r.interFace,
		p = n("js/common/module/lrcHandler.js"),
		d = n("js/common/module/qrcHandler.js"),
		m = o.$;
		o.jQueryAjax
	}
	window.MUSIC = o;
	var g = n("js/common/music/storage.js"),
	u = (o.widget.user, o.userAgent),
	f = null,
	y = o.player_storage,
	v = {
		player_cover: "//y.gtimg.cn/mediastyle/yqq/extra/player_cover.png?max_age=31536000"
	},
	b = {
		p: function () {
			try {
				window.console && console.log([].slice.call(arguments).join("	"))
			} catch (n) {}
		}
	},
	h = -1,
	k = null,
	w = {
		pos: 0,
		volume: 75,
		trans: 0,
		mode: 3
	};
	_playlistBar = {},
	_favlistBar = {};
	var x = [],
	I = function () {
		function n() {
			if (p) {
				p = !1;
				var n = c.getVolumn() || w.volume;
				(0 >= n || n > 100) && (n = 75),
				i = m("#spanvolumebar")[0],
				r = m("#spanvolumeop")[0],
				_ = m("#spanvolume")[0],
				_oMute = m("#spanmute")[0],
				a(n),
				m("#voice,#spanvolume").on("click", function (n) {
					n.preventDefault(),
					n.stopPropagation();
					var e = m(_),
					t = n.pageX;
					_change_vol = parseInt(100 * (t - e.offset().left) / e.width(), 10),
					a(_change_vol)
				}),
				m(_oMute).on("click", e),
				m(r).on("mousedown", function (n) {
					n.preventDefault(),
					n.stopPropagation();
					m("#voice")[0];
					m(document).off("mousemove").on("mousemove", t),
					m(document).on("mouseup", function () {
						m(document).off("mousemove")
					});
					m("#divplayer")
				})
			}
		}
		function e(n) {
			n.preventDefault(),
			n.stopPropagation(),
			p || (m(_oMute).hasClass("btn_big_voice--no") ? (m(_oMute).removeClass("btn_big_voice--no"), m(_oMute).html('<span class="icon_txt">关闭声音[M]</span>')) : (m(_oMute).addClass("btn_big_voice--no"), m(_oMute).html('<span class="icon_txt">打开声音[M]</span>')), c.mutePlayer(), l.pgvClickStat("y_new.player.opbanner.no_voice"))
		}
		function t(n) {
			n.preventDefault(),
			n.stopPropagation();
			var e = m(_),
			t = n.pageX;
			_change_vol = parseInt(100 * (t - e.offset().left) / e.width(), 10),
			a(_change_vol)
		}
		function a(n) {
			p || !isNaN(n) && n >= 0 && 101 > n && (i.style.width = n + "%", c.setVolumn(n), w.volume = n, g.set("y_mod", [w.mode, w.volume, w.trans].join("|")), m(_oMute).hasClass("btn_big_voice--no") && (m(_oMute).removeClass("btn_big_voice--no"), m(_oMute).html('<span class="icon_txt">关闭声音[M]</span>'), c.mutePlayer()))
		}
		function s() {
			var n = w.volume || c.getVolumn();
			(0 > n || n > 100) && (n = 75),
			n += 5,
			a(n)
		}
		function o() {
			var n = w.volume || c.getVolumn();
			(0 > n || n > 100) && (n = 75),
			n -= 5,
			a(n)
		}
		var i,
		r,
		_,
		p = !0;
		return {
			init: n,
			incVol: s,
			decVol: o,
			mute: e
		}
	}
	(),
	j = !1,
	C = function () {
		function n() {
			r = m("#spanplayer_bgbar")[0],
			y = m("#downloadbar")[0],
			_ = m("#spanprogress_op")[0],
			g = m("#spanplaybar")[0],
			v = m("#time_show")[0],
			f = m(r).width() - m(_).width() - 2 * m(_).offset().left - 1,
			m("#progress,#downloadbar,#spanplayer_bgbar").on("click", function (n) {
				n.preventDefault(),
				n.stopPropagation();
				var e = m(y),
				s = n.pageX,
				o = parseInt(100 * (s - e.offset().left) / e.width() + 2, 10);
				t(o),
				a()
			}),
			m(g).on("click", function (n) {
				n.preventDefault(),
				n.stopPropagation();
				var e = m(r),
				s = n.pageX,
				o = parseInt(100 * (s - e.offset().left) / e.width() + 2, 10);
				t(o),
				a()
			}),
			m(_).on("mousedown", function (n) {
				j = !0,
				n.preventDefault(),
				n.stopPropagation(); {
					var t = (new Date).getTime(),
					s = m(_),
					o = n.pageX,
					i = s.offset().left - m(r).offset().left,
					l = {
						left: i,
						ex: o
					};
					m("#progress")[0]
				}
				m(document).off("mousemove").on("mousemove", function (n) {
					if (j) {
						var a = (new Date).getTime();
						if (300 > a - t)
							return !1;
						a % 3 == 0 && e(n, l)
					}
				}),
				m(document).on("mouseup", function () {
					j && (m(document).off("mousemove"), a(), j = !1)
				})
			})
		}
		function e(n) {
			n.preventDefault(),
			n.stopPropagation();
			var e = m("#spanplayer_bgbar").offset().left,
			a = n.pageX,
			s = parseInt(100 * (a - e) / m(r).width(), 10);
			t(s)
		}
		function t(n) {
			if (!isNaN(n) && n >= 0 && 101 > n) {
				var e = c.getDownloadProgress();
				n = Math.min(n, e),
				g.style.width = n + "%",
				b = n;
				var t = parseInt(m("#time_show").data("total"));
				t > 0 && n % 3 == 0 && (document.getElementById("time_show").innerText = s(parseInt(n * t / 100, 10)) + " / " + s(t))
			}
		}
		function a() {
			var n = c.getDownloadProgress(),
			e = b;
			e = Math.min(e, n);
			var t = c.getSongDuration(),
			a = e * t / 100,
			s = parseInt(a);
			P._isPlaying ? (c.setPlayProgress(s), i(s)) : q.play(k, function () {
				setTimeout(function () {
					c.setPlayProgress(s),
					i(s)
				}, 500)
			})
		}
		function i(n) {
			var e = !!(u.safari || u.chrome || u.isiPad || u.isiPhone);
			if (d.haveqrc) {
				if (m('p[data-id="line_' + d.qrcLineIndex + '"]').removeClass("on"), d.getQrcLineItemByPlayTime(parseInt(1e3 * n))) {
					var t = d.qrcLineIndex,
					a = d.lineItem.context,
					s = d.qrcLineIndex,
					i = m('p[data-id="line_' + s + '"]');
					if (i.length > 0) {
						var l = "";
						if (e ? (l = d.getHighlightWords(parseInt(1e3 * n)), "undefined" != typeof l && "" != l && i.addClass("on").html(a)) : (l = a, i.html(l).addClass("on")), s > 0) {
							var r = m('p[data-id="line_' + g + '"]');
							r.length > 0 && r.removeClass("on")
						}
					}
					d.restartAnimFrame("qrc_ctn")
				}
			} else if (p.haveLrc) {
				var c = m('p[data-id="line_' + p.lrcItemIndex + '"]');
				if (c.length > 0 && c.removeClass("on"), p.getLyricLineItemByPlayTime(p.ms2playTime(parseInt(1e3 * n)))) {
					var t = p.lrcItemIndex,
					_ = 0;
					m.each(m(".qrc_ctn"), function (n, e) {
						t = p.lrcItemIndex;
						for (var a = parseInt(m(e).data("mod")); t-- > (1 == a ? 1 : 3); ) {
							var s = m('p[data-id="line_' + t + '"]', m(e))[0];
							_ += s ? s.offsetHeight : 1 == a ? 24 : 0
						}
						0 > _ && (_ = 0),
						o.util.supportCss3("-webkit-transition") && o.util.supportCss3("-webkit-transform") ? (e.style.webkitTransition = "-webkit-transform 0.1s ease-out", e.style.webkitTransform = "translate3d(0px," + -1 * _ + "px,0px)") : o.util.supportCss3("transition") && o.util.supportCss3("transform") ? (e.style.transition = "transform 0.1s ease-out", e.style.transform = "translate3d(0px," + -1 * _ + "px,0px)") : m(e).parent(".js_lyric_box").scrollTop(_)
					});
					var g = -1 == p.preLrcItemIndex ? "null" : p.preLrcItemIndex,
					s = p.lrcItemIndex,
					i = m('p[data-id="line_' + s + '"]');
					if (i.length > 0 && (i.html(p.lrcItem.context).addClass("on"), m(".js_trans_btn").hasClass("btn_lang--select") ? m(".js_trans_line").show() : m(".js_trans_line").hide(), s > 0)) {
						var r = m('p[data-id="line_' + g + '"]');
						r.length > 0 && r.removeClass("on")
					}
					p.restartAnimFrame("qrc_ctn")
				}
			}
		}
		function l() {
			m(r).off("click"),
			m(g).off("click"),
			m(_).off("mousedown")
		}
		var r,
		_,
		g,
		f,
		y,
		v = null,
		b = 0;
		return {
			init: n,
			update: t,
			destroy: l
		}
	}
	(),
	S = !0,
	P = function () {
		function e(n, e) {
			var t = new Image;
			e = e || "74",
			t.src = "//c.y.qq.com/tplcloud/fcgi-bin/fcg_reportlsting_web.fcg?musicid=" + e + "&isexit=" + n + "&g_tk=" + o.getACSRFToken() + "&_r=" + (new Date).valueOf(),
			t.style.width = "0",
			t.style.height = "0"
		}
		function a() {
			m("#opbanner, #song_info").off("click", ".js_song").on("click", ".js_song", function () {
				var n = m(this).data("mid"),
				e = m(this).data("id"),
				t = m(this).data("songtype"),
				a = m(this).data("shareuin"),
				s = m(this).data("disstid"),
				i = {
					mid: n
				};
				return e && (i.id = e),
				t && (i.songtype = t),
				a && (i.shareuin = a),
				s && (i.disstid = s),
				o.util.gotoSongdetail(i),
				!1
			}).off("click", ".js_singer").on("click", ".js_singer", function () {
				var n = m(this).data("singermid"),
				e = m(this).data("stat") || "",
				t = {
					singermid: n
				};
				return e && (t.stat = e),
				o.util.gotoSinger(t),
				!1
			}).off("click", ".js_album").on("click", ".js_album", function () {
				var n = m(this).data("albummid"),
				e = m(this).data("stat") || "",
				t = {
					albummid: n
				};
				return e && (t.stat = e),
				0 != parseInt(n) ? (o.util.gotoAlbum(t), !1) : void 0
			}).on("click", "#btnplay", function (n) {
				S && (l.pgvClickStat("y_new.player.opbanner.play_btn"), S = !0);
				var e = i;
				return "g_first_play" == e ? (n.preventDefault(), n.stopPropagation(), q.play(), void 0) : "g_play" == e ? (n.preventDefault(), n.stopPropagation(), c.pausePlayer(), d.haveqrc && d.stopAnimFrame(), p.haveLrc && p.stopAnimFrame(), void 0) : ("g_pause" == e && (n.preventDefault(), n.stopPropagation(), c.startPlayer(), d.haveqrc ? d.startAnimFrame("qrc_ctn") : p.haveLrc && p.startAnimFrame("qrc_ctn")), "g_wait" == e && c.startPlayer(), void 0)
			}).on("click", ".btn_big_prev", function (n) {
				P.prev(n),
				l.pgvClickStat("y_new.player.opbanner.prev")
			}).on("click", ".btn_big_next", function (n) {
				P.next(n),
				l.pgvClickStat("y_new.player.opbanner.next")
			}).on("click", "#play_mod", function () {
				P.realSetPlayWay()
			}).on("click", "#simp_btn", function () {
				l.pgvClickStat("y_new.player.opbanner.clear_mod"),
				m(this).hasClass("btn_big_only--on") ? (m(this).removeClass("btn_big_only--on"), m(this).attr("title", "打开纯净模式[C]"), m(".js_full_box").show(), m(".js_simp_box").hide()) : (m(this).addClass("btn_big_only--on"), m(this).attr("title", "关闭纯净模式[C]"), m(".js_full_box").hide(), m(".js_simp_box").show())
			})
		}
		var i = "g_first_play",
		r = null,
		_ = function (n, e) {
			var t = m("#btnplay"),
			a = n || "pause",
			s = e || "g_pause";
			"pause" == a ? (m(".js_play", m("#song_box .songlist__item--playing")).attr("title", "播放").html('<i class="list_menu__icon_play"></i><span class="icon_txt">播放</span>'), m("#song_box .songlist__item--playing").removeClass("songlist__item--playing"), t.removeClass("btn_big_play--pause"), m("span", t).html("播放")) : (P._curSongInfo && (m("div.songlist__item", m('li[mid="' + P._curSongInfo.songid + '"]')).addClass("songlist__item--playing"), m(".js_play", m('li[mid="' + P._curSongInfo.songid + '"]')).attr("title", "暂停").html('<i class="list_menu__icon_pause"></i><span class="icon_txt">暂停</span>')), t.addClass("btn_big_play--pause"), m("span", t).html("暂停")),
			i = s
		};
		return {
			_setQQstatus: e,
			_isPlaying: !1,
			_isFirst: !0,
			_curSongInfo: null,
			_errorPlayId: [],
			clearlist: !1,
			init: function () {
				c.OnSongPlayBegin = function (n, t) {
					o.cookie.set("yq_index", t, null, null, 2400),
					b.p("OnSongPlayBegin begin:" + (new Date).getUTCMilliseconds()),
					P._isPlaying = !0,
					P._curSongInfo = n,
					setTimeout(function () {
						var e = parseInt(parseInt(m(".sb_scrollable").css("height")) / 50) - 2;
						m(".sb_overview").scrollTop() < 50 * (n.ix - e) ? (!u.webkit && f && f.scrollbar("scrollToY", 50 * (n.ix - e)), u.webkit && (m(".sb_overview")[0].scrollTop = 50 * (n.ix - e))) : m(".sb_overview").scrollTop() > 50 * n.ix && (!u.webkit && f && f.scrollbar("scrollToY", 50 * n.ix), u.webkit && (m(".sb_overview")[0].scrollTop = 50 * n.ix))
					}, 1e3),
					"mod_songname_menu__like--liked" == n.fav ? (m(".js_btn_fav", "#opbanner").addClass("btn_big_like--like"), m(".js_btn_fav").attr("title", "取消喜欢[V]")) : (m(".js_btn_fav", "#opbanner").removeClass("btn_big_like--like"), m(".js_btn_fav").attr("title", "喜欢[V]")),
					setTimeout(function () {
						d.clearQrcInfo(),
						!!n && d.init({
							songtype: n.songtype,
							songMId: n.songmid,
							songId: n.songid,
							qrcContainer: "qrc_ctn"
						}),
						p.clearLrcInfo()
					}, 200),
					g.get("y_mod", function (n) {
						if (n) {
							var e = n.split("|");
							e.length > 0 && (w.mode = parseInt(e[0])),
							e.length > 1 && (w.volume = parseInt(e[1])),
							e.length > 2 && (w.trans = parseInt(e[2]))
						}
						1 == w.trans ? (m(".js_trans_btn").removeClass("btn_lang--select"), m(".js_trans_line").show()) : (m(".js_trans_line").hide(), m(".js_trans_btn").addClass("btn_lang--select")),
						I.init()
					}),
					C.init(),
					P.renderSong(n),
					setTimeout(function () {
						!!n && e(!1, n.songid)
					}, 700)
				},
				c.OnSongPlayEnd = function () {
					P._isPlaying = !1,
					_("pause", "g_play"),
					d.haveqrc ? d.clearQrcInfo() : p.haveLrc && p.clearLrcInfo()
				},
				c.OnSongPlaying = function (n, e) {
					if (c.setVolumn(w.volume), -1 == h && (h = 0), !isNaN(n) && !isNaN(e)) {
						var t = !!(u.safari || u.chrome || u.isiPad || u.isiPhone),
						a = t ? parseInt(n / 1e3) : n,
						o = m(".qrc_ctn");
						if (P._isPlaying) {
							if (m("#time_show").data("total", e), j || (m("#time_show").html(s(parseInt(a, 10)) + " / " + s(e)), w.pos = parseInt(100 * a / e, 10), m("#spanplaybar").width(parseInt(100 * a / e, 10) + "%")), d.reqFlag)
								return;
							var i = m("p", o).length > 1 ? m("p:eq(1)", o) : "";
							if (d.haveqrc && ("歌词正在加载中..." == i || "" == i))
								return o.html('<p data-id="line_null" class="on">&nbsp;</p>' + d.printQrcLines()), d.startAnimFrame("qrc_ctn"), void 0;
							if (!d.haveqrc && -1 == p.reqFlag)
								return p.init(d.playingSongInfo), void 0;
							if (!d.haveqrc && 0 == p.reqFlag)
								return;
							if (!d.haveqrc && 1 == p.reqFlag) {
								if (p.haveLrc && ("歌词正在加载中..." == i || "" == i)) {
									var l = p.printLrcLines();
									return "" == l ? (p.haveLrc = !1, '<p>&nbsp;</p><p><a href="//support.qq.com/write.shtml?fid=602" target="_blank">该单曲暂无歌词，点击这里进行反馈</a></p>' != o.html() && 0 == p.txtLrc && o.html('<p>&nbsp;</p><p><a href="//support.qq.com/write.shtml?fid=602" target="_blank">该单曲暂无歌词，点击这里进行反馈</a></p>'), void 0) : (o.html('<p data-id="line_null" class="on">&nbsp;</p>' + l), p.startAnimFrame("qrc_ctn"), void 0)
								}
								if (!p.haveLrc)
									return '<p>&nbsp;</p><p><a href="//support.qq.com/write.shtml?fid=602" target="_blank">该单曲暂无歌词，点击这里进行反馈</a></p>' != o.html() && 0 == p.txtLrc && o.html('<p>&nbsp;</p><p><a href="//support.qq.com/write.shtml?fid=602" target="_blank">该单曲暂无歌词，点击这里进行反馈</a></p>'), void 0
							}
							if (d.haveqrc) {
								if (d.getQrcLineItemByPlayTime(t ? n : 1e3 * n)) {
									var r = d.lineItem.context,
									_ = d.qrcLineIndex - 1 < 0 ? "null" : d.qrcLineIndex - 1,
									g = d.qrcLineIndex,
									f = m('p[data-id="line_' + g + '"]');
									if (_pNode.length > 0) {
										var y = "";
										if (t ? (y = d.getHighlightWords(t ? n : 1e3 * n), "undefined" != typeof y && "" != y && f.html(r).addClass("on")) : (y = r, f.html(y).addClass("on")), g > 0) {
											var v = m('p[data-id="line_' + _ + '"]');
											v.length > 0 && v.removeClass("on")
										}
									}
								}
							} else if (p.haveLrc) {
								if (p.getLyricLineItemByPlayTime(p.ms2playTime(t ? n : 1e3 * n))) {
									var _ = -1 == p.preLrcItemIndex ? "null" : p.preLrcItemIndex,
									g = p.lrcItemIndex,
									f = m('p[data-id="line_' + g + '"]');
									f.length > 0 && g != _ && (f.addClass("on"), g > 0 && m('p[data-id="line_' + _ + '"]').removeClass("on"))
								}
							} else
								'<p>&nbsp;</p><p><a href="//support.qq.com/write.shtml?fid=602" target="_blank">该单曲暂无歌词，点击这里进行反馈</a></p>' != o.html() && 0 == p.txtLrc && o.html('<p>&nbsp;</p><p><a href="//support.qq.com/write.shtml?fid=602" target="_blank">该单曲暂无歌词，点击这里进行反馈</a></p>')
						}
					}
				},
				c.OnPlaying = function () {
					_("play", "g_play"),
					P._errorPlayId = []
				},
				c.OnPlayPause = function () {
					_("pause", P.clearlist ? "g_first_play" : "g_pause")
				},
				c.OnPlayError = function (n) {
					3 == n.type || 0 == n.type && 1 == n.action.soso;
					if (!P._errorPlayId[n.playid]) {
						P._errorPlayId[n.playid] = 1;
						var e = m("#song_box");
						if (e.length > 0) {
							var t = m("li", e);
							t && t.length > 1 && c.nextPlayer()
						}
					}
				},
				c.OnSongDownloading = function (n) {
					var e = m("#downloadbar");
					e.length > 0 && e.width(n + "%")
				},
				g.get("y_mod", function (n) {
					if (n) {
						var e = n.split("|");
						e.length > 0 && (w.mode = parseInt(e[0])),
						e.length > 1 && (w.volume = parseInt(e[1])),
						e.length > 2 && (w.trans = parseInt(e[2]))
					}
					P.realSetPlayWay(w.mode),
					t(w.mode),
					c.setVolumn(w.volume)
				}),
				P.renderSong(),
				a()
			},
			setPlayBtnStatus: function () {},
			renderSong: function (n) {
				function e() {
					document.title = s.substring(i, s.length) + s.substring(0, i),
					i++,
					i > s.length && (i = 0),
					r = setTimeout(function () {
							e()
						}, 500)
				}
				function t(n) {
					var e = [];
					return m.each(n, function (n, t) {
						e.push('<a href="' + o.util.getSingerUrl({
								mid: t.mid
							}) + '#stat=y_new.player.info_area.singername" title="' + t.name + '" class="js_singer" data-stat="y_new.player.info_area.singername" data-singermid="' + t.mid + '" target="_blank">' + t.name + "</a>"),
						_.push(t.name)
					}),
					e.join(" / ")
				}
				b.p("renderSong begin:" + (new Date).getUTCMilliseconds());
				var a = m("#song_box");
				if (!n)
					return m("#sim_song_info,#song_name,#singer_name,#album_name,#time_show").html(""), m("#song_pic").parents("a.js_album").data("albummid", 0), m("#backImg").css("backgroundImage", ""), m("#song_pic").attr("src", v.player_cover), m("body").css("backgroundColor", "#292a2b"), void 0;
				r && (clearTimeout(r), r = null),
				document.title = "正在播放 " + n.songname + (n.singername ? "-" + n.singername : "");
				var s = document.title;
				s = "…" + s;
				var i = 0;
				u.sougou || e();
				var l = n.ix;
				if (a.length > 0) {
					var c = m("li", a);
					c.length > l && (m(".js_play", m("#song_box .songlist__item--playing")).attr("title", "播放").html('<i class="list_menu__icon_play"></i><span class="icon_txt">播放</span>'), m("div.songlist__item").removeClass("songlist__item--playing"), P._curSongInfo && (m("div.songlist__item", m('li[mid="' + P._curSongInfo.songid + '"]')).addClass("songlist__item--playing"), m(".js_play", m('li[mid="' + P._curSongInfo.songid + '"]')).attr("title", "暂停").html('<i class="list_menu__icon_pause"></i><span class="icon_txt">暂停</span>')))
				}
				var _ = [];
				if (m("#sim_song_info,#song_name,#singer_name,#album_name,#time_show").html(""), n && n.songmid && "" != n.songmid ? m("#sim_song_info").html('<a href="' + o.util.getSongUrl(n) + '#stat=y_new.player.info_area.songname" title="' + n.songname + '" class="js_song" data-stat="y_new.player.info_area.songname" data-mid="' + n.songmid + '" data-id="' + n.songid + '" data-songtype="' + n.songtype + '" data-disstid="' + (n.disstid ? n.disstid : "") + '" target="_blank">' + n.songname + "</a> - " + t(n.singer)) : m("#sim_song_info").html('<a title="' + n.songname + '">' + n.songname + '</a> - <a title="' + n.singername + '">' + n.singername + "</a>"), n.albummid && "" != n.albummid) {
					m("#song_pic").parents("a.js_album").data("albummid", n.albummid);
					var p = new Image;
					p.src = o.util.getAlbumPic({
							mid: n.albummid,
							type: 300
						}),
					m("#song_pic").attr("src", p.src),
					p.style.width = "0",
					p.style.height = "0",
					p.onload = function () {
						m("#backImg").css("backgroundImage", "url(" + p.src + ")"),
						m("#song_pic").attr("src", p.src)
					},
					o.jQueryAjax.jsonp({
						url: "//c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=" + n.albummid,
						charset: "utf-8",
						jsonpCallback: "albuminfoCallback",
						success: function (n) {
							0 == n.code && n.data.color > 0 ? m("body").css("backgroundColor", "#" + n.data.color.toString(16)) : m("body").css("backgroundColor", "#292a2b")
						},
						error: function () {
							m("body").css("backgroundColor", "#292a2b")
						}
					}),
					111 == n.songtype || 112 == n.songtype || 113 == n.songtype ? m("#song_name").html("歌曲名：<a href='" + o.util.getSongUrl({
							songid: n.songid,
							songtype: n.songtype
						}) + "#stat=y_new.player.info_area.songname' title='" + n.songname + "' target='_blank'>" + n.songname + "</a>") : n.songmid ? m("#song_name").html("歌曲名：<a href='" + o.util.getSongUrl({
							songmid: n.songmid
						}) + "#stat=y_new.player.info_area.songname' title='" + n.songname + "' target='_blank'>" + n.songname + "</a>") : m("#song_name").html("歌曲名：" + n.songname),
					n.singer.length > 0 && n.singer[0].id > 0 && m("#singer_name").html("歌手名：" + t(n.singer)),
					n.albumid > 0 && m("#album_name").html("专辑名：<a href='" + o.util.getAlbumUrl({
							albummid: n.albummid
						}) + "#stat=y_new.player.info_area.albumname' title='" + n.albumname + "' target='_blank'>" + n.albumname + "</a>")
				} else {
					m("#song_pic").parents("a.js_album").data("albummid", 0);
					var p = new Image;
					p.src = v.player_cover,
					p.style.width = p.style.height = "0",
					p.onload = function () {
						m("#backImg").css("backgroundImage", ""),
						m("body").css("backgroundColor", "#292a2b"),
						m("#song_pic").attr("src", v.player_cover)
					},
					n && (111 == n.songtype || 112 == n.songtype || 113 == n.songtype ? (m("#song_name").html("歌曲名：<a href='" + o.util.getSongUrl({
									songid: n.songid,
									songtype: n.songtype
								}) + "#stat=y_new.player.info_area.songname' title='" + n.songname + "' target='_blank'>" + n.songname + "</a>"), n.singer.length > 0 && n.singer[0].id > 0 && m("#singer_name").html("歌手名：" + t(n.singer))) : (m("#song_name").html("歌曲名：" + n.songname), m("#singer_name").html("歌手名：" + n.singername), m("#album_name").html("")))
				}
				b.p("renderSong end:" + (new Date).getUTCMilliseconds())
			},
			resetLikeIcon: function () {},
			updateSongLike: function () {},
			songHover: function () {},
			play: function (n, e, t) {
				if (b.p("play begin:" + (new Date).getUTCMilliseconds()), e && 1 == e)
					return S = !1, m("#btnplay").click(), void 0;
				var a = 0;
				n && n.length > 0 && (a = n[0].ix),
				h = 0,
				o.cookie.set("yq_index", a, null, null, 2400),
				c.playAnyPos(a),
				t && t()
			},
			trogglePlay: function () {},
			prev: function (n) {
				n.preventDefault(),
				n.stopPropagation(),
				c.lastPlayer()
			},
			next: function (n) {
				n.preventDefault(),
				n.stopPropagation();
				var e = this;
				y.get(function () {
					-1 == h ? e.play() : c.nextPlayer()
				})
			},
			like: function () {},
			share: function () {},
			_objSong: null,
			fav: function (e, t, a, s) {
				e = e || P._curSongInfo,
				e && n.async("js/common/fav.js", function (n) {
					t ? n.like([e], function () {
						a && a()
					}) : n.unlike([e], function () {
						s && s()
					})
				})
			},
			download: function (e) {
				e = e || P._curSongInfo,
				e && n.async("js/common/download.js", function (n) {
					n.show([e])
				})
			},
			add: function () {},
			delBatch: function (n) {
				function e(n, e) {
					return e.ix - n.ix
				}
				var t = [];
				n.sort(e),
				m.each(n, function (n, e) {
					t.push(e.ix),
					P.del(e)
				}),
				y.delBatch(t)
			},
			del: function (n) {
				var e = n.ix;
				e >= 0 && !c.delSong(e) && (P.renderSong(), P._isPlaying = !1, c.stopPlayer())
			},
			insert: function () {},
			clearList: function () {},
			setPlayWay: function () {},
			modIndex: 0,
			realSetPlayWay: function (n) {
				n = n || -1;
				var e = ["顺序播放", "随机播放", "单曲循环", "列表循环"],
				t = [2, 4, 1, 3],
				a = ["btn_big_style_order", "btn_big_style_random", "btn_big_style_single", "btn_big_style_list"];
				if (n >= 0)
					for (var s in t)
						n == t[s] && (P.modIndex = parseInt(s));
				else
					P.modIndex++;
				P.modIndex > 3 && (P.modIndex = 0),
				m("#play_mod")[0].className = a[P.modIndex],
				m("#play_mod").html('<span class="icon_txt">' + e[P.modIndex] + "[O]</span>").attr("title", e[P.modIndex] + "[O]"),
				c.setMode(t[P.modIndex]),
				w.mode = t[P.modIndex],
				g.set("y_mod", [w.mode, w.volume].join("|")),
				0 > n && l.pgvClickStat("y_new.player.opbanner." + a[P.modIndex].replace("btn_big_style", "play_mod"))
			},
			getCurSongInfo: function () {
				return P._curSongInfo
			}
		}
	}
	(),
	q = {
		init: function () {
			function t() {
				y.get(function (n) {
					var e = {},
					t = [];
					m.each(n, function (n, t) {
						e[t.songid] = t
					});
					var a = m(".songlist__list li"),
					s = 0;
					m.each(a, function (n, a) {
						var o = m(a).attr("mid");
						if (m(a).attr("ix", n), m(".songlist__number", m(a)).html(n + 1), m(".songlist__item--playing", m(a)).length > 0 && (s = n), o in e) {
							var i = e[o];
							i.ix = n,
							t.push(i)
						}
					}),
					t.length > 0 && (y.clear(), y.add(t), c.setPlayerList(!1, t, w.mode), o.cookie.set("yq_index", s, null, null, 2400), c.setPostion(s))
				})
			}
			function s(n) {
				m(".songlist__drag").css({
					left: n.pageX - 180 + "px",
					top: n.pageY - 180 + "px"
				})
			}
			c.init({
				fromtag: 30,
				statFromtag: 7,
				errorTips: function (n, e) {
					o.popup.show(n + e, 3e3, 1)
				}
			}),
			P.init(),
			m.jStorage.reInit(),
			o.cookie.set("yplayer_open", 1);
			var i = m.jStorage.get("addplaylist");
			a(function () {
				e(i, !0, function () {}),
				m.jStorage.deleteKey("addplaylist")
			}),
			m.jStorage.subscribe("addplaylist", function (n, t) {
				t.list.length > 0 && (m.jStorage.publish("addplaylist", {
						list: [],
						play: 0
					}), e(t, !0, function () {})),
				o.cookie.set("player_exist", 1)
			}),
			m.jStorage.subscribe("focusplayer", function (n, e) {
				e.status && (alert("窗口已打开！"), window.focus()),
				o.cookie.set("player_exist", 1)
			}),
			u.webkit && m(".sb_overview").css({
				height: m(".player__bd").height() - 56
			}),
			m(".qrc_ctn").on("mousedown", function (n) {
				n.preventDefault(),
				n.stopPropagation(),
				window.getlyricflag = !0,
				p.haveLrc && p.stopAnimFrame("qrc_ctn");
				var e = n.pageY,
				t = [];
				m.each(m(".qrc_ctn"), function (n, e) {
					if (o.util.supportCss3("transform") || o.util.supportCss3("-webkit-transform")) {
						t[n] = 0;
						var a = e.style,
						s = a.transform || a.webkitTransform || "",
						i = s.split(",");
						i && i.length > 1 && (t[n] = -1 * parseInt(i[1]))
					} else
						t[n] = m(e).parent(".js_lyric_box").scrollTop()
				}),
				m(document).off("mousemove").on("mousemove", function (n) {
					p.haveLrc && p.stopAnimFrame(),
					(p.haveLrc || p.txtLrc) && m.each(m(".qrc_ctn"), function (a, s) {
						if ((e - n.pageY) % 5 == 0) {
							var i = t[a] + (e - n.pageY);
							0 > i && (i = 0),
							o.util.supportCss3("-webkit-transition") && o.util.supportCss3("-webkit-transform") ? (s.style.webkitTransition = "-webkit-transform 0.1s ease-out", s.style.webkitTransform = "translate3d(0px," + -1 * i + "px,0px)") : o.util.supportCss3("transition") && o.util.supportCss3("transform") ? (s.style.transition = "transform 0.1s ease-out", s.style.transform = "translate3d(0px," + -1 * i + "px,0px)") : m(s).parent(".js_lyric_box").scrollTop(i)
						}
					})
				});
				var a = 0;
				m(document).on("mouseup", function () {
					m(document).off("mousemove"),
					a++,
					e = 0,
					setTimeout(function () {
						e || (p.haveLrc && window.getlyricflag && 1 == a && (p.startAnimFrame("qrc_ctn"), window.getlyricflag = !1), a--)
					}, 3e3)
				})
			}).on("mousewheel", function () {
				return !1
			}),
			m(".js_btn_fav", "#opbanner").on("click", function () {
				var n = m(this);
				P.fav(null, m(this).hasClass("btn_big_like--like") ? 0 : 1, function () {
					n.addClass("btn_big_like--like")
				}, function () {
					n.removeClass("btn_big_like--like")
				}),
				l.pgvClickStat("y_new.player.opbanner.love")
			}),
			m(".js_btn_down", "#opbanner").on("click", function () {
				P.download(null),
				l.pgvClickStat("y_new.player.opbanner.download")
			}),
			m(document).on("like", function (n, e) {
				var t = [],
				a = e.data,
				s = e.flag;
				m.each(a, function (n, e) {
					!!e && t.push(e.songid),
					P._curSongInfo && e && e.songid == P._curSongInfo.songid && (s ? m(".js_btn_fav", "#opbanner").addClass("btn_big_like--like") : m(".js_btn_fav", "#opbanner").removeClass("btn_big_like--like"), s ? m(".js_btn_fav").attr("title", "取消喜欢[V]") : m(".js_btn_fav").attr("title", "喜欢[V]"))
				}),
				c.setSongsFavStatus(t, s ? "mod_songname_menu__like--liked" : "")
			}).on("delete", function (n, e) {
				var t = e.data;
				P.delBatch(t),
				P._curSongInfo && (m(".js_play", m("#song_box .songlist__item--playing")).attr("title", "播放").html('<i class="list_menu__icon_play"></i><span class="icon_txt">播放</span>'), m("div.songlist__item").removeClass("songlist__item--playing"), m("div.songlist__item", m('li[mid="' + P._curSongInfo.songid + '"]')).addClass("songlist__item--playing"), m(".js_play", m('li[mid="' + P._curSongInfo.songid + '"]')).attr("title", "暂停").html('<i class="list_menu__icon_pause"></i><span class="icon_txt">暂停</span>')),
				f && f.resize()
			}).on("click", ".js_trans_btn", function () {
				var n = m(".btn_big_only--on").length > 0;
				m(this).hasClass("btn_lang--select") ? (m(".js_trans_line").hide(), m(".js_trans_btn").removeClass("btn_lang--select"), w.trans = 0, l.pgvClickStat("y_new.player.translyric.open" + (n ? ".clear" : ""))) : (m(".js_trans_btn").addClass("btn_lang--select"), m(".js_trans_line").show(), w.trans = 1, l.pgvClickStat("y_new.player.translyric.close" + (n ? ".clear" : ""))),
				g.set("y_mod", [w.mode, w.volume, w.trans].join("|"))
			}).on("click", ".js_opts_login,.js_opts_unlogin", function () {
				var e = function (n) { {
						var e = "";
						Array.prototype.join
					}
					return e += '	<div class="form__part">\r\n            <div class="form__label">历史播放列表</div>\r\n            <span class="mod_form_check">\r\n                <label class="form_check__label"><span class="form_check__checkbox ',
					n.deleteList || (e += "form_check__checkbox--check"),
					e += '"><input type="checkbox" name="privacy" class="form_check__check js_player_delete"></span>保留（勾选后，每次新打开播放器，将保留上次关闭时的播放列表）</label>\r\n            </span>\r\n        </div>\r\n        <div class="form__part">\r\n            <div class="form__label">播放设置</div>\r\n            <span class="mod_form_radio">\r\n                <label class="form_radio__label"><span class="form_radio__radiobox ',
					0 == n.mod && (e += "form_radio__radiobox--check"),
					e += '" data-mod="0"><input type="radio" name="privacy" class="form_radio__radio js_player_mods"></span>立即播放<span class="c_tx_thin">(默认添加到播放队列最顶部)</span></label>\r\n            </span>\r\n            <span class="mod_form_radio">\r\n                <label class="form_radio__label"><span class="form_radio__radiobox ',
					1 == n.mod && (e += "form_radio__radiobox--check"),
					e += '" data-mod="1"><input type="radio" name="privacy" class="form_radio__radio js_player_mods"></span>添加到播放队列末尾</label>\r\n            </span>\r\n            <span class="mod_form_radio">\r\n                <label class="form_radio__label"><span class="form_radio__radiobox ',
					2 == n.mod && (e += "form_radio__radiobox--check"),
					e += '" data-mod="2"><input type="radio" name="privacy" class="form_radio__radio js_player_mods"></span>下一首播放</label>\r\n            </span>\r\n        </div>\r\n\r\n        <div class="c_tx_thin">设置仅对当前电脑有效，清除Cookie后将恢复为默认设置。</div>'
				}
				(o.player.getPlayerOptions());
				n.async("js/common/dialog.js", function (n) {
					n.show({
						title: "播放器设置",
						dialogclass: "popup_player",
						mode: "common",
						width: 600,
						content: e,
						button_info1: {
							fn: function () {
								n.hide()
							},
							title: "取消"
						},
						button_info2: {
							highlight: "1",
							fn: function () {
								var e = {
									deleteList: !m(".js_player_delete").parents("span.form_check__checkbox").hasClass("form_check__checkbox--check"),
									mod: parseInt(m(".js_player_mods").parents("span.form_radio__radiobox--check").data("mod"))
								};
								o.player.setPlayerOptions(e),
								n.hide()
							},
							title: "确定"
						}
					})
				}),
				l.pgvClickStat("y_new.player.options")
			}).on("click", ".js_player_delete", function () {
				var n = m(this).parents("span.form_check__checkbox");
				n.toggleClass("form_check__checkbox--check"),
				n.hasClass("form_check__checkbox--check") ? l.pgvClickStat("y_new.player.options.notdelete") : l.pgvClickStat("y_new.player.options.delete")
			}).on("click", ".js_player_mods", function () {
				var n = m(this).parents("span.form_radio__radiobox");
				m(".js_player_mods").parents("span.form_radio__radiobox").removeClass("form_radio__radiobox--check"),
				n.addClass("form_radio__radiobox--check"),
				l.pgvClickStat("y_new.player.options.playmod" + m(".js_player_mods").parents("span.form_radio__radiobox").data("mod"))
			}),
			m(window).resize(function () {
				u.webkit && m(".sb_overview").css({
					height: m(".player__bd").height() - 56
				})
			}),
			m(document).on("keydown", "", function (n) {
				switch (n.keyCode) {
				case 32:
				case 19:
					S = !1,
					m("#btnplay").click();
					break;
				case 37:
					n.altKey ? m(".btn_big_prev").click() : n.ctrlKey && C.update(w.pos - 5);
					break;
				case 39:
					n.altKey ? m(".btn_big_next").click() : n.ctrlKey && C.update(w.pos + 5);
					break;
				case 38:
					n.altKey && I.incVol();
					break;
				case 40:
					n.altKey && I.decVol();
					break;
				case 67:
					m("#simp_btn").click();
					break;
				case 77:
					m("#spanmute").click();
					break;
				case 79:
					m("#play_mod").click();
					break;
				case 86:
					m(".js_btn_fav").click();
					break;
				case 68:
					m(".js_btn_down").click()
				}
			});
			var r = "",
			_ = null;
			m(document).on("mousedown", ".songlist__list li", function (n) {
				var e = o.util.getTarget(n),
				t = this;
				if (m(e).parents("a").length > 0 || m(e).parents(".songlist__edit").length > 0)
					return !1;
				_ = setTimeout(function () {
						m(".songlist__end,.songlist__drag").remove(),
						m(t).before('<li class="songlist__end"></li>'),
						m("#song_box").prepend('<li class="songlist__drag"></li>'),
						s(n),
						m(t).addClass("songlist__item--drag"),
						r = m("li.songlist__item--drag")[0].outerHTML.replace("songlist__item--drag", ""),
						l.pgvClickStat("y_new.player.drag")
					}, 300);
				var a = "";
				m(document).off("mousemove").on("mousemove", ".songlist__list li", function (n) {
					o.util.getTarget(n);
					if (m(".songlist__item--drag").length > 0) {
						var e = m(this).attr("mid"),
						t = m(this).attr("ix");
						if (a != e) {
							var i = parseInt(parseInt(m(".sb_scrollable").css("height")) / 50) - 2;
							0 == m(".songlist__drag").length ? (m(".songlist__end,.songlist__drag").remove(), m('.songlist__list li[mid="' + e + '"]').before('<li class="songlist__end"></li>'), m("#song_box").prepend('<li class="songlist__drag"></li>')) : (m(".songlist__end").remove(), m('.songlist__list li[mid="' + e + '"]').before('<li class="songlist__end"></li>')),
							s(n),
							!u.webkit && f && f.scrollbar("scrollToY", 50 * (t - i)),
							u.webkit && (m(".sb_overview")[0].scrollTop = 50 * (t - i))
						}
					}
					return !1
				})
			}).on("mouseup", ".songlist__list li", function (n) {
				_ && (clearTimeout(_), _ = null);
				var e = o.util.getTarget(n);
				return m(e).parents("a").length > 0 || m(e).parents(".songlist__edit").length > 0 ? !1 : (m(".songlist__end,.songlist__drag").remove(), !m(this).hasClass("songlist__item--drag") && r ? (m("li.songlist__item--drag").remove(), m(this).before(r), r = "", t()) : m("li.songlist__item--drag").removeClass("songlist__item--drag"), m(document).off("mousemove"), !1)
			}).on("mouseup", "", function () {
				m(".songlist__end,.songlist__drag").remove(),
				setTimeout(function () {
					m("li.songlist__item--drag").removeClass("songlist__item--drag")
				}, 300),
				m(document).off("mousemove")
			})
		},
		play: P.play
	};
	return q
}); /*  |xGv00|c8a047e050bdd216c2a076865c8bd9d6 */