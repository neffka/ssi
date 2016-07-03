var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var forcing = !1,
	ua = navigator.userAgent.toLowerCase(),
	is_android = 0 <= ua.indexOf("android"),
	is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/"),
	uua = navigator.userAgent,
	is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod"),
	is_mobile = 0 <= ua.indexOf("mobile"),
	is_firefox = -1 < ua.indexOf("firefox"),
	is_ie8oo = window.attachEvent && !window.addEventListener,
	is_safari = is_firefox = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
var no_raf = !1,
	raf = function(b) {};
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
var no_raf = !0,
	a, i, j, k, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)",
	ang, sang, vang;

function trf(b, q) { b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = q }

function trfo(b, q) { b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = q }
var pi2 = 2 * Math.PI,
	animating = !1,
	startAnimation = function() {
		animating = !0;
		no_raf ? is_mobile ? setInterval("oef()", 33) : is_safari ? setInterval("oef()", 33) : setInterval("oef()", 20) : raf(oef)
	},
	ois = [],
	wic = 0,
	ldi = function(b) {
		wic++;
		var q = {},
			e = document.createElement("img");
		q.ii = e;
		q.sc = 1;
		e.onload = function() {
			for (var b = ois.length - 1; 0 <= b; b--)
				if (ois[b].ii == this) {
					b = ois[b];
					b.ww = this.width;
					b.hh = this.height;
					b.loaded = !0;
					if (b.onload) b.onload();
					break
				}
			wic--;
			0 == wic && startAnimation()
		};
		q.src = b;
		ois.push(q);
		return q
	};

function addCss(b) {
	var q = document.createElement("style");
	document.getElementsByTagName("head")[0].appendChild(q);
	q.type = "text/css";
	q.styleSheet ? q.styleSheet.cssText = b : q.appendChild(document.createTextNode(b))
}
var nbg = document.getElementById("nbg"),
	nzbg, sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx;
elem = document.createElement("canvas");
var rw = 64,
	rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4) .5 > Math.random() ? imgd[p] = imgd[p + 1] = imgd[p + 2] = 0 : (imgd[p] = 44, imgd[p + 1] = 56, imgd[p + 2] = 68), imgd[p + 3] = Math.floor(32 * Math.random());
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
32 < nzbg.length && (nbg.style.backgroundImage = "url(" + nzbg + ")");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
	for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)), imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)), imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
	for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
	for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(7 + 52.5 * j), imgd[p + 2] = Math.floor(6.4 + 48 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
	for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)), imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)), imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
	for (j = (grh - 1 - yy) / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)), imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)), imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
	for (j = yy / (grh - 1), j = .5 * (1 - Math.cos(Math.PI * j)), xx = 0; xx < grw; xx++) imgd[p] = Math.floor(.1 * 48 + 36 * j), imgd[p + 1] = Math.floor(5.4 + 40.5 * j), imgd[p + 2] = Math.floor(7 + 52.5 * j), imgd[p + 3] = 255, p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = [],
	m_iv = -1,
	swmup = !1;

function mkBtn(b, q, e, h) {
	var u = document.createElement("div");
	b.tagName || (b = document.getElementById(b), b.style.width = e + "px", b.style.height = h + "px", u.style.width = e + "px", u.style.height = h + "px");
	var f = { lic: 0 };
	f.elem = b;
	f.md = !1;
	f.mo = !1;
	f.mdf = 0;
	f.mof = 0;
	var c = !0;
	b.style && b.style.position && ("absolute" == (b.style.position + "").toLowerCase() && (c = !1), "fixed" == (b.style.position + "").toLowerCase() && (c = !1));
	c && (b.style.position = "relative");
	u.style.position = "absolute";
	u.style.opacity = 0;
	u.style.left = "0px";
	u.style.top = "0px";
	b.appendChild(u);
	f.ho = u;
	f.alic = function() {
		this.lic++;
		if (3 == this.lic && (this.ho.style.opacity = 1, this.onload)) this.onload()
	};
	mos.push(f);
	f.setEnabled = function(b) { b ? (this.disabled = !1, this.upi.style.opacity = this.mof, this.downi.style.opacity = this.mdf, this.elem.style.opacity = 1, this.elem.style.cursor = "pointer") : (this.disabled = !0, this.upi.style.opacity = 0, this.downi.style.opacity = 0, this.elem.style.opacity = .38, this.elem.style.cursor = "default") };
	if (q)
		for (c = 1; 3 >= c; c++) {
			var y = document.createElement("img");
			y.draggable = !1;
			y.style.position = "absolute";
			y.style.left = "0px";
			y.style.top = "0px";
			y.border = 0;
			y.width = e;
			y.height = h;
			y.className = "nsi";
			u.appendChild(y);
			1 == c ? (f.normi = y, y.onload = function() {
				for (var b = mos.length - 1; 0 <= b; b--) {
					var c = mos[b];
					if (c.normi == this) {
						c.alic();
						break
					}
				}
			}, y.src = q + ".png") : 2 == c ? (f.upi = y, y.style.opacity = 0, y.onload = function() {
				for (var b = mos.length - 1; 0 <= b; b--) {
					var c = mos[b];
					if (c.upi == this) {
						c.alic();
						break
					}
				}
			}, y.src = q + "up.png") : 3 == c && (f.downi = y, y.style.opacity = 0, y.onload = function() {
				for (var b = mos.length - 1; 0 <= b; b--) {
					var c =
						mos[b];
					if (c.downi == this) {
						c.alic();
						break
					}
				}
			}, y.src = q + "down.png")
		} else u.style.opacity = 1;
	b.onmouseenter = function() {
		for (var b = mos.length - 1; 0 <= b; b--) {
			var c = mos[b];
			if (c.elem == this) {
				if (!c.disabled && !c.mo) {
					c.mo = !0;
					if (c.onmouseenter) c.onmouseenter(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
				}
				break
			}
		}
	};
	b.onmouseleave = function() {
		for (var b = mos.length - 1; 0 <= b; b--) {
			var c = mos[b];
			if (c.elem == this) {
				if (c.mo) {
					c.mo = !1;
					if (c.onmouseleave) c.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
				}
				break
			}
		}
	};
	b.onmousedown = function(b) {
		for (var c =
				mos.length - 1; 0 <= c; c--) {
			var f = mos[c];
			if (f.elem == this) {
				if (!f.disabled && !f.md) {
					f.md = !0;
					if (f.onmousedown) f.onmousedown(b, f); - 1 == m_iv && (m_iv = setInterval("hmos()", 25));
					return !1
				}
				break
			}
		}
	};
	b.onmouseup = b.ondragend = function(b) {
		for (var c = mos.length - 1; 0 <= c; c--) {
			var f = mos[c];
			if (f.elem == this) {
				if (f.md) {
					f.mdf = 1;
					f.md = !1;
					if (f.onmouseup && (f.onmouseup(b, f), is_mobile)) f.elem.onmouseleave(); - 1 == m_iv && (m_iv = setInterval("hmos()", 25))
				}
				break
			}
		}
	};
	swmup || (swmup = !0, window.onmouseup = window.ondragover = window.ondragend = function() {
		for (var b =
				mos.length - 1; 0 <= b; b--) {
			var c = mos[b];
			c.md && (c.md = !1, -1 == m_iv && (m_iv = setInterval("hmos()", 25)))
		}
	});
	return f
}

function hmos() {
	for (var b, q = !1, e = mos.length - 1; 0 <= e; e--) {
		var h = mos[e];
		b = !1;
		h.mo ? 1 != h.mof && (q = !0, h.mof += .33, 1 <= h.mof && (h.mof = 1), b = !0) : 0 != h.mof && (q = !0, h.mof -= .2, 0 >= h.mof && (h.mof = 0), b = !0);
		b && (h.upi.style.opacity = h.disabled ? 0 : h.mof);
		b = !1;
		h.md ? 1 != h.mdf && (q = !0, h.mdf += .33, 1 <= h.mdf && (h.mdf = 1), b = !0) : 0 != h.mdf && (q = !0, h.mdf -= .2, 0 >= h.mdf && (h.mdf = 0), b = !0);
		b && (h.downi.style.opacity = h.disabled ? 0 : h.mdf)
	}
	q || (clearInterval(m_iv), m_iv = -1)
}

function makeTextBtn(b, q, e, h, u) {
	q || (q = 56);
	56 < q && (q = 56);
	e || (e = 15);
	h || (h = 14);
	var f = document.createElement("div");
	f.className = "btnt nsi sadg" + u;
	var c = f.style;
	c.position = "absolute";
	c.width = "auto";
	c.color = "#ffffff";
	c.fontWeight = "bold";
	c.textAlign = "center";
	c.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
	c.fontSize = e + "px";
	f.textContent = b;
	c.cursor = "pointer";
	document.body.appendChild(f);
	var y = Math.ceil(35 + f.offsetWidth);
	document.body.removeChild(f);
	f.textContent = "";
	c.width = y + "px";
	c.height = q +
		"px";
	c.lineHeight = q + "px";
	is_mobile || (c.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
	c.borderRadius = h + "px";
	var E = document.createElement("div"),
		c = E.style;
	c.position = "absolute";
	c.left = c.top = "0px";
	c.width = y + "px";
	c.height = q + "px";
	c.borderRadius = h + 1 + "px";
	c.opacity = 0;
	E.className = "sadu" + u;
	var B = document.createElement("div"),
		c = B.style;
	c.position = "absolute";
	c.left = c.top = "-1px";
	c.width = y + 2 + "px";
	c.height = q + 2 + "px";
	c.borderRadius = h + "px";
	c.opacity = 0;
	B.className = "sadd" + u;
	var w = mkBtn(f);
	w.a = 1;
	w.ho.appendChild(E);
	w.upi =
		E;
	w.ho.appendChild(B);
	w.downi = B;
	w.ts = e;
	w.ww = y;
	w.bgm = u;
	w.setText = function(b) {
		var c = document.createElement("div");
		c.className = "nsi sadg" + this.bgm;
		var f = c.style;
		f.position = "absolute";
		f.width = "auto";
		f.color = "#ffffff";
		f.fontWeight = "bold";
		f.textAlign = "center";
		f.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
		f.fontSize = this.ts + "px";
		c.textContent = b;
		document.body.appendChild(c);
		f = Math.ceil(35 + c.offsetWidth);
		document.body.removeChild(c);
		this.btnf.textContent = b;
		this.ww = f;
		this.elem.style.width = f +
			"px";
		this.upi.style.width = f + "px";
		this.downi.style.width = f + 2 + "px";
		this.btnf.style.width = f + "px"
	};
	e = document.createElement("div");
	f.appendChild(e);
	w.btnf = e;
	c = e.style;
	c.position = "absolute";
	c.left = c.top = "0px";
	c.width = y + "px";
	c.height = q + "px";
	c.borderRadius = h + "px";
	e.textContent = b;
	e.className = "nsi";
	c.color = "#ffffff";
	c.opacity = .9;
	w.ho.appendChild(e);
	return w
}
var sos = [],
	clus = [],
	bso, u_m = [64, 32, 16, 8, 4, 2, 1],
	lgbsc = 1,
	lgcsc = 1,
	lb_fr = 0,
	login_fr = 0,
	llgmtm = Date.now(),
	login_iv = -1;

function loginFade() {
	var b = Date.now(),
		q = (b - llgmtm) / 25;
	llgmtm = b;
	login_fr += .05 * q;
	choosing_skin && (login_fr += .06 * q);
	1 <= login_fr ? (login_fr = 1, login.style.display = "none", cstx.style.display = "none", fbh.style.display = "none", twth.style.display = "none", cskh.style.display = "none", grqh.style.display = "none", plq.style.display = "none", clq.style.display = "none", social.style.display = "none", login.style.opacity = 1, cstx.style.opacity = 1, fbh.style.opacity = 1, twth.style.opacity = 1, cskh.style.opacity = 1, grqh.style.opacity = 1, plq.style.opacity =
		1, clq.style.opacity = 1, social.style.opacity = 1, pskh.style.opacity = 1, nskh.style.opacity = 1, skodiv.style.opacity = 1, tip_fr = -1, tips.style.display = "none", mc.style.opacity = 1, loch.style.opacity = 1, clearInterval(login_iv), login_iv = -1, -1 != showlogo_iv && (ncka = lgss = lga = 1, showLogo(!0), -1 != showlogo_iv && (clearInterval(showlogo_iv), showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2), b = Math.round(lgbsc * lgcsc * 1E5) / 1E5, trf(login, "scale(" + b + "," + b + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity =
		1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, grqh.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, social.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity = login_fr, loch.style.opacity = login_fr)
}
var ss_a = 0,
	ss_sh = 0,
	spinner_shown = !1,
	ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0,
	lcldtm = Date.now(),
	sstr = "Save";
"FR" == country ? sstr = "Bien" : "BR" == country && (sstr = "OK");
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1),
	skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
	if (playing) {
		try { localStorage.snakercv = snake.rcv } catch (b) {}
		playing = connected = !1;
		dead_mtm = Date.now() - 5E3
	}
};
var nick = document.getElementById("nick"),
	victory = document.getElementById("victory"),
	victory_bg = document.getElementById("victory_bg"),
	logo = document.getElementById("logo"),
	login = document.getElementById("login"),
	lastscore = document.getElementById("lastscore"),
	nick_holder = document.getElementById("nick_holder"),
	victory_holder = document.getElementById("victory_holder"),
	pstr = "Play";
"DE" == country ? pstr = "Spielen" : "FR" == country ? (pstr = "Jouer", nick.placeholder = "Surnom") : "BR" == country && (pstr = "Joga", nick.placeholder = "Apelido");
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1),
	pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips"),
	tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"];
"DE" == country ? tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "FR" == country ? tipss = ["Mangez de cro\u00eetre!", "Cliquez et vous courrez!", "Ne laissez pas votre t\u00eate toucher d'autres serpents!"] : "BR" == country && (tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"]);
var tip_pos = -1,
	tip_fr = 1.9;
o.elem.onclick = function() { play_btn.disabled || -1 != dead_mtm || (play_btn_click_mtm = Date.now(), play_btn.setEnabled(!1), spinner_shown = nick.disabled = !0, ldmc.style.display = "inline", connect()) };
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2),
	sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
	if (!save_btn.disabled) {
		var b = asciize(victory.value);
		140 < b.length && (b = b.substr(0, 140));
		if (5 <= protocol_version) {
			var q = new Uint8Array(2 + b.length);
			q[0] = 255;
			q[1] = 118;
			for (var e = 0; e < b.length; e++) q[e + 2] = b.charCodeAt(e)
		} else
			for (q = new Uint8Array(1 + b.length), q[0] = 118, e = 0; e < b.length; e++) q[e + 1] = b.charCodeAt(e);
		ws.send(q);
		save_btn.setEnabled(!1);
		victory.disabled = !0
	}
};
var wide = !1,
	mww = 850,
	mhh = 700,
	mwwp50 = mww + 50,
	mhhp50 = mhh + 50,
	mwwp150 = mww + 150,
	mhhp150 = mhh + 150,
	mww2 = mww / 2,
	mhh2 = mhh / 2,
	mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
"DE" == country ? lstr = "Bestenliste" : "FR" == country ? lstr = "Gagnants" : "BR" == country && (lstr = "L\u00edderes");
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img"),
	lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas"),
	bgp2 = null,
	bgw2 = 599,
	bgh2 = 519,
	ii = document.createElement("img");
ii.onload = function() {
	bgi2.width = bgw2;
	bgi2.height = bgh2;
	var b = bgi2.getContext("2d");
	try { b.drawImage(this, 0, 0), bgp2 = b.createPattern(bgi2, "repeat") } catch (q) {}
};
ii.src = "/s/bg45.jpg";

function rdgbg() {
	if (ggbg) {
		gbgmc || (gbgmc = document.createElement("canvas"));
		gbgmc.width = mww;
		gbgmc.height = mhh;
		var b = gbgmc.getContext("2d");
		try { b.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh) } catch (q) {}
	}
}
var ggbg = !1,
	gbgmc = null,
	gbgi = document.createElement("img");
gbgi.onload = function() {
	ggbg = !0;
	rdgbg()
};
gbgi.src = "/s/gbg.jpg";

function newDeadpool() {
	return {
		os: [],
		end_pos: 0,
		add: function(b) {
			this.end_pos == this.os.length ? this.os.push(b) : this.os[this.end_pos] = b;
			this.end_pos++
		},
		get: function() {
			if (1 <= this.end_pos) {
				this.end_pos--;
				var b = this.os[this.end_pos];
				this.os[this.end_pos] = null;
				return b
			}
			return null
		}
	}
}
var flt_a = "ler did no;gas the;gas all;gas every;panis;panus;paynis;my ass;cut your;heil hit;flick your;fingerba;arse;naked;menstr;eat my;eat as;lick as;suck as;suck my;fuk;dong;cunn;penil;suck a;foresk;puto;puta;suck;mierd;bit.ly;ween;wein;wien;peen;turd;wank;crap;ur mom;tu madre;chinga;pu$$;phalus;phallus;verga;culo;kurwa".split(";"),
	flt_g = "buttlov buttf smegm litherplu eatmy suckm sucka mydik erioorg urdik heriobo ki11all brazz iomods".split(" "),
	flt_w = ["ass", "kkk"];

function gdnm(b) {
	var q = "",
		e = "",
		h = "",
		u = 0,
		f = !1,
		c = !1,
		y, E;
	for (y = 0; y < b.length; y++) E = b.charCodeAt(y), 32 == E ? c || (c = !0, q += " ") : (c = !1, q += String.fromCharCode(E));
	c = !1;
	for (y = 0; y < b.length; y++)
		if (E = b.charCodeAt(y), (f = 48 <= E && 57 >= E) || 65 <= E && 90 >= E || 97 <= E && 122 >= E)
			if (e += String.fromCharCode(E), h += String.fromCharCode(E), c = !1, f) {
				if (u++, 7 <= u) return !1
			} else u = 0;
	else c || (c = !0, h += " ");
	b = q.toLowerCase();
	for (y = flt_a.length - 1; 0 <= y; y--)
		if (0 <= b.indexOf(flt_a[y])) return !1;
	e = e.toLowerCase();
	for (y = flt_g.length - 1; 0 <= y; y--)
		if (0 <= e.indexOf(flt_g[y])) return !1;
	h = h.toLowerCase().split(" ");
	for (y = h.length - 1; 0 <= y; y--)
		for (e = flt_w.length - 1; 0 <= e; e--)
			if (h[y] == flt_w[e]) return !1;
	return !0
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, sgsc = .9,
	gsc = sgsc,
	nsep = 4.5,
	tasty = 0,
	shifty = !1,
	rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1,
	rank = 0,
	best_rank = 999999999,
	snake_count = 0,
	biggest_snake_count = 0,
	cm1, snakes = [],
	foods = [],
	foods_c = 0,
	preys = [],
	points_dp = newDeadpool(),
	os = {},
	lsang = 0,
	want_e = !1,
	last_e_mtm = 0,
	sectors = [],
	sector_size = 480,
	sector_count_along_edge = 130,
	spangdv = 4.8,
	nsp1 = 4.25,
	nsp2 = .5,
	nsp3 = 12,
	mamu = .033,
	mamu2 = .028,
	cst = .43,
	lfas = [],
	lfc = 128;
for (i = 0; i < lfc; i++) j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))), lfas.push(j);
var rfas = [],
	rfc = 43;
for (i = 0; i < rfc; i++) j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))), rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
	var fas = [];
	for (i = 0; i < fc; i++) j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))), fas.push(j);
	fao["a" + fc] = fas
}
var hfc = 92,
	hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++) j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))), hfas[i] = j;
var afas = [],
	afc = 26;
for (i = 0; i < afc; i++) j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))), afas.push(j);
var nlc = 48,
	vfas = [],
	vfc = 62,
	fvpos = 0,
	fvtg = 0,
	ovxx, ovyy, fvxs = [],
	fvys = [];
for (i = 0; i < vfc; i++) j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))), j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j), vfas.push(j), fvxs.push(0), fvys.push(0);

function pwr(b) {
	for (var q = new Float32Array(125), e = 0; 125 > e; e++) q[e] = Math.pow(b, e);
	return q
}

function pca(b) {
	for (var q = new Float32Array(125), e = 0; 125 > e; e++) q[e] = 1 - Math.pow(1 - b, e);
	return q
}
var p1a = pca(.1),
	p35a = pca(.35),
	pwr4 = pwr(.4),
	pwr35 = pwr(.35),
	pwr93 = pwr(.93);

function setMscps(b) {
	if (b != mscps) {
		mscps = b;
		fmlts = [];
		fpsls = [];
		for (b = 0; b <= mscps; b++) b >= mscps ? fmlts.push(fmlts[b - 1]) : fmlts.push(Math.pow(1 - b / mscps, 2.25)), 0 == b ? fpsls.push(0) : fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
		var q = fmlts[fmlts.length - 1],
			e = fpsls[fpsls.length - 1];
		for (b = 0; 2048 > b; b++) fmlts.push(q), fpsls.push(e)
	}
}

function startShowGame() {
	llgmtm = Date.now();
	login_iv = setInterval("loginFade()", 25);
	mc.style.opacity = 0;
	mc.style.display = "inline";
	lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
	loch.style.opacity = 0;
	lb_fr = -1
}

function setSkin(b, q) {
	b.rcv = q;
	b.er = 6;
	b.ec = "#ffffff";
	b.eca = .75;
	b.ppa = 1;
	b.ppc = "#000000";
	b.antenna = !1;
	if (24 == q) {
		b.antenna = !0;
		b.atba = 0;
		b.atc1 = "#00688c";
		b.atc2 = "#64c8e7";
		b.atwg = !0;
		b.atia = .35;
		b.abrot = !1;
		var e = 8;
		b.atx = new Float32Array(e);
		b.aty = new Float32Array(e);
		b.atvx = new Float32Array(e);
		b.atvy = new Float32Array(e);
		b.atax = new Float32Array(e);
		b.atay = new Float32Array(e);
		for (--e; 0 <= e; e--) b.atx[e] = b.xx, b.aty[e] = b.yy;
		b.bulb = acbulb;
		b.blbx = -10;
		b.blby = -10;
		b.blbw = 20;
		b.blbh = 20;
		b.bsc = 1;
		b.blba = .75
	} else if (25 == q) {
		b.ec =
			"#ff5609";
		b.eca = 1;
		b.antenna = !0;
		b.atba = 0;
		b.atc1 = "#000000";
		b.atc2 = "#6625c7";
		b.atia = 1;
		b.abrot = !0;
		e = 9;
		b.atx = new Float32Array(e);
		b.aty = new Float32Array(e);
		b.atvx = new Float32Array(e);
		b.atvy = new Float32Array(e);
		b.atax = new Float32Array(e);
		b.atay = new Float32Array(e);
		for (--e; 0 <= e; e--) b.atx[e] = b.xx, b.aty[e] = b.yy;
		b.bulb = cdbulb;
		b.blbx = -5;
		b.blby = -10;
		b.blbw = 20;
		b.blbh = 20;
		b.bsc = 1.6;
		b.blba = 1
	}
	e = null;
	9 == q ? e = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == q ? e = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == q ? e = [11, 11, 11, 11,
			11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12
		] : 12 == q ? e = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == q ? e = [14, 14, 14, 14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == q ? e = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == q ? e = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == q ? e = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == q ? e = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == q ? e = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == q ? e = [9] : 20 == q ? e = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == q ? e = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : 22 == q ? e = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == q ?
		e = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == q ? e = [23, 23, 23, 23, 23, 23, 23, 23, 23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == q ? e = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : q %= 9;
	e && (q = e[0]);
	b.rbcs = e;
	b.cv = q
}

function newSnake(b, q, e, h, u, f) {
	var c = {};
	c.id = b;
	c.xx = q;
	c.yy = e;
	setSkin(c, h);
	h = c.cv;
	c.fnfr = 0;
	c.na = 1;
	c.chl = 0;
	c.tsp = 0;
	c.sfr = 0;
	c.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
	c.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
	c.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
	b = "00" + Math.min(255, Math.max(0, Math.round(c.rr))).toString(16);
	q = "00" + Math.min(255, Math.max(0, Math.round(c.gg))).toString(16);
	e = "00" + Math.min(255, Math.max(0, Math.round(c.bb))).toString(16);
	b = b.substr(b.length - 2);
	q = q.substr(q.length -
		2);
	e = e.substr(e.length - 2);
	c.cs = "#" + b + q + e;
	b = "00" + Math.min(255, Math.max(0, Math.round(.4 * c.rr))).toString(16);
	q = "00" + Math.min(255, Math.max(0, Math.round(.4 * c.gg))).toString(16);
	e = "00" + Math.min(255, Math.max(0, Math.round(.4 * c.bb))).toString(16);
	b = b.substr(b.length - 2);
	q = q.substr(q.length - 2);
	e = e.substr(e.length - 2);
	c.cs04 = "#" + b + q + e;
	b = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + c.rr)))).toString(16);
	q = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + c.gg)))).toString(16);
	e = "00" + Math.min(255, Math.max(0, Math.round(.5 *
		(255 + c.bb)))).toString(16);
	b = b.substr(b.length - 2);
	q = q.substr(q.length - 2);
	e = e.substr(e.length - 2);
	c.csw = "#" + b + q + e;
	c.sc = 1;
	c.ssp = nsp1 + nsp2 * c.sc;
	c.fsp = c.ssp + .1;
	c.msp = nsp3;
	c.fxs = new Float32Array(rfc);
	c.fys = new Float32Array(rfc);
	c.fchls = new Float32Array(rfc);
	c.fpos = 0;
	c.ftg = 0;
	c.fx = 0;
	c.fy = 0;
	c.fchl = 0;
	c.fas = new Float32Array(afc);
	c.fapos = 0;
	c.fatg = 0;
	c.fa = 0;
	c.ehang = u;
	c.wehang = u;
	c.ehl = 1;
	c.msl = 42;
	c.fam = 0;
	c.ang = u;
	c.eang = u;
	c.wang = u;
	c.rex = 0;
	c.rey = 0;
	c.sp = 2;
	f ? (c.lnp = f[f.length - 1], c.pts = f, c.sct = f.length, f[0].dying && c.sct--) :
		(c.pts = [], c.sct = 0);
	c.flpos = 0;
	c.fls = new Float32Array(lfc);
	c.fl = 0;
	c.fltg = 0;
	c.tl = c.sct + c.fam;
	c.cfl = c.tl;
	c.scang = 1;
	c.dead_amt = 0;
	c.alive_amt = 0;
	snakes.splice(0, 0, c);
	return os["s" + c.id] = c
}

function snl(b) {
	var q = b.tl;
	b.tl = b.sct + b.fam;
	for (var q = b.tl - q, e = b.flpos, h = 0; h < lfc; h++) b.fls[e] -= q * lfas[h], e++, e >= lfc && (e = 0);
	b.fl = b.fls[b.flpos];
	b.fltg = lfc;
	b == snake && (wumsts = !0)
}

function newFood(b, q, e, h, u, f) {
	var c = {};
	c.id = b;
	c.xx = q;
	c.yy = e;
	c.rx = q;
	c.ry = e;
	c.rsp = u ? 2 : 1;
	c.cv = f;
	c.rad = 1E-5;
	c.sz = h;
	c.lrrad = c.rad;
	b = per_color_imgs[c.cv];
	c.cv2 = Math.floor(b.ic * gsc * c.sz / 16.5);
	0 > c.cv2 && (c.cv2 = 0);
	c.cv2 >= b.ic && (c.cv2 = b.ic - 1);
	testing && (window.biggestcv2 || (window.biggestcv2 = c.cv2), c.cv2 > window.biggestcv2 && (window.biggestcv2 = c.cv2, console.log("biggest cv2 seen: " + c.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + c.sz + " which means its server-side rad is " + 5 * c.sz + ")")));
	c.fi = b.imgs[c.cv2];
	c.fw = b.fws[c.cv2];
	c.fh = b.fhs[c.cv2];
	c.fw2 = b.fw2s[c.cv2];
	c.fh2 = b.fh2s[c.cv2];
	c.ofi = b.oimgs[c.cv2];
	c.ofw = b.ofws[c.cv2];
	c.ofh = b.ofhs[c.cv2];
	c.ofw2 = b.ofw2s[c.cv2];
	c.ofh2 = b.ofh2s[c.cv2];
	c.gcv = Math.floor(b.ic * gsc * (.25 + .75 * c.sz / 16.5));
	0 > c.gcv && (c.gcv = 0);
	c.gcv >= b.ic && (c.gcv = b.ic - 1);
	c.gfi = b.gimgs[c.gcv];
	c.gfw = b.gfws[c.gcv];
	c.gfh = b.gfhs[c.gcv];
	c.gfw2 = b.gfw2s[c.gcv];
	c.gfh2 = b.gfh2s[c.gcv];
	c.g2cv = Math.floor(b.ic * gsc * 2 * (.25 + .75 * c.sz / 16.5));
	0 > c.g2cv && (c.g2cv = 0);
	c.g2cv >= b.ic && (c.g2cv = b.ic - 1);
	c.g2fi = b.gimgs[c.g2cv];
	c.g2fw = b.gfws[c.g2cv];
	c.g2fh = b.gfhs[c.g2cv];
	c.g2fw2 = b.gfw2s[c.g2cv];
	c.g2fh2 = b.gfh2s[c.g2cv];
	c.fr = 0;
	c.gfr = 64 * Math.random();
	c.gr = .65 + .1 * c.sz;
	c.wsp = .0225 * (2 * Math.random() - 1);
	c.eaten_fr = 0;
	return foods[foods_c++] = c
}

function newPrey(b, q, e, h, u, f, c, y, E) {
	var B = {};
	B.id = b;
	B.xx = q;
	B.yy = e;
	B.rad = 1E-5;
	B.sz = h;
	B.cv = u;
	B.dir = f;
	B.wang = c;
	B.ang = y;
	B.sp = E;
	B.fr = 0;
	B.gfr = 64 * Math.random();
	B.gr = .5 + .15 * Math.random() + .1 * B.sz;
	B.rr = Math.min(255, rrs[u]);
	B.gg = Math.min(255, ggs[u]);
	B.bb = Math.min(255, bbs[u]);
	b = "00" + Math.min(255, Math.max(0, Math.round(B.rr))).toString(16);
	q = "00" + Math.min(255, Math.max(0, Math.round(B.gg))).toString(16);
	e = "00" + Math.min(255, Math.max(0, Math.round(B.bb))).toString(16);
	b = b.substr(b.length - 2);
	q = q.substr(q.length - 2);
	e =
		e.substr(e.length - 2);
	B.cs = "#" + b + q + e;
	B.cv2 = Math.floor(per_color_imgs[B.cv].pr_imgs.length * gsc * B.sz / 9);
	0 > B.cv2 && (B.cv2 = 0);
	B.cv2 >= per_color_imgs[B.cv].pr_imgs.length && (B.cv2 = per_color_imgs[B.cv].pr_imgs.length - 1);
	B.fi = per_color_imgs[B.cv].pr_imgs[B.cv2];
	B.fw = per_color_imgs[B.cv].pr_fws[B.cv2];
	B.fh = per_color_imgs[B.cv].pr_fhs[B.cv2];
	B.fw2 = per_color_imgs[B.cv].pr_fw2s[B.cv2];
	B.fh2 = per_color_imgs[B.cv].pr_fh2s[B.cv2];
	B.gcv = per_color_imgs[B.cv].gimgs.length - 1;
	B.gfi = per_color_imgs[B.cv].gimgs[B.gcv];
	B.gfw =
		per_color_imgs[B.cv].gfws[B.gcv];
	B.gfh = per_color_imgs[B.cv].gfhs[B.gcv];
	B.gfw2 = per_color_imgs[B.cv].gfw2s[B.gcv];
	B.gfh2 = per_color_imgs[B.cv].gfh2s[B.gcv];
	B.fxs = new Float32Array(rfc);
	B.fys = new Float32Array(rfc);
	B.fpos = 0;
	B.ftg = 0;
	B.fx = 0;
	B.fy = 0;
	B.eaten = !1;
	B.eaten_fr = 0;
	preys.push(B);
	return B
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52,
	komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) {
	var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
		v = 4 >= v ? 1 - v / 4 : 0,
		v = .8 * v;
	imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
	imgd[p + 3] = Math.floor(255 * v);
	xx++;
	xx >= sz && (xx = 0, yy++)
}
ctx.putImageData(map, 0, 0);
var sz = 62,
	ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15, v *= .1, 0 > v && (v = -v), 1 < v && (v = 1), v = 1 - v, v *= .25, imgd[p] = imgd[p + 1] = imgd[p + 2] = 0, imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var colc;
testing && (colc = document.createElement("canvas"), colc.width = 256, colc.height = 66, colc.style.position = "fixed", colc.style.left = "0px", colc.style.top = "200px", colc.style.zIndex = 2147483647, document.body.appendChild(colc));
var pbx = new Float32Array(32767),
	pby = new Float32Array(32767),
	pba = new Float32Array(32767),
	pbu = new Uint8Array(32767),
	per_color_imgs = [],
	rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 62, 255, 101],
	ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 19, 86, 200],
	bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 160, 9, 232],
	max_skin_cv = 25;
for (i = 0; i < rrs.length; i++) {
	o = { imgs: [], fws: [], fhs: [], fw2s: [], fh2s: [], gimgs: [], gfws: [], gfhs: [], gfw2s: [], gfh2s: [], oimgs: [], ofws: [], ofhs: [], ofw2s: [], ofh2s: [] };
	var rs = "00" + rrs[i].toString(16),
		gs = "00" + ggs[i].toString(16),
		bs = "00" + bbs[i].toString(16),
		rs = rs.substr(rs.length - 2),
		gs = gs.substr(gs.length - 2),
		bs = bs.substr(bs.length - 2);
	o.cs = "#" + rs + gs + bs;
	var sz = 62,
		kfmc = document.createElement("canvas");
	kfmc.width = kfmc.height = sz;
	ctx = kfmc.getContext("2d");
	map = ctx.getImageData(0, 0, sz, sz);
	imgd = map.data;
	l = imgd.length;
	for (p =
		yy = xx = 0; p < l; p += 4) v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16), v = 15 >= v ? 1 - v / 15 : 0, imgd[p] = rrs[i], imgd[p + 1] = ggs[i], imgd[p + 2] = bbs[i], imgd[p + 3] = Math.floor(255 * v), xx++, xx >= sz && (xx = 0, yy++);
	ctx.putImageData(map, 0, 0);
	o.kfmc = kfmc;
	var ksz = 48,
		ksz2 = ksz / 2,
		kmc = document.createElement("canvas");
	kmc.width = kmc.height = ksz;
	ctx = kmc.getContext("2d");
	ctx.fillStyle = "#FFFFFF";
	ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
	ctx.fill();
	map = ctx.getImageData(0, 0, ksz, ksz);
	imgd = map.data;
	l = imgd.length;
	yy = xx = 0;
	var kmcs = [];
	for (j =
		0; 7 > j; j++) {
		for (p = xx = yy = 0; p < l; p += 4) {
			var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35),
				v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34)),
				v = v + .375 * (v2 - v),
				v = v * (1.22 - .44 * j / 6);
			rr = rrs[i];
			gg = ggs[i];
			bb = bbs[i];
			imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
			imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
			imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
			xx++;
			xx >= ksz && (xx = 0, yy++)
		}
		ctx.putImageData(map, 0, 0);
		var kmc2 = document.createElement("canvas");
		kmc2.width = kmc2.height = ksz;
		var ctx2 = kmc2.getContext("2d");
		ctx2.drawImage(kmc, 0, 0);
		if (10 == i)
			for (k = -1; 1 >= k; k++) {
				var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13,
					ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
				ctx2.fillStyle = "#FFFFFF";
				ctx2.beginPath();
				for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 24, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1, ctx2.lineTo(xx, yy);
				ctx2.fill()
			} else if (19 == i)
				for (k = -2; 2 >= k; k++) {
					tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
					ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
					ctx2.save();
					ctx2.globalAlpha = .7;
					ctx2.fillStyle = "#FFFFFF";
					ctx2.beginPath();
					for (m = 0; 5 >= m; m++) xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55, yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55, ctx2.lineTo(xx, yy);
					ctx2.fill();
					ctx2.restore()
				} else if (20 ==
					i)
					for (k = -1.5; 1.5 >= k; k++) {
						tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
						ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
						ctx2.save();
						ctx2.globalAlpha = .7;
						ctx2.fillStyle = "#FFFFFF";
						ctx2.beginPath();
						for (m = 0; 5 >= m; m++) xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14, 0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy), xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8, yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8, ctx2.lineTo(xx, yy);
						ctx2.fill();
						ctx2.restore()
					}
		kmcs.push(kmc2)
	}
	o.kmcs = kmcs;
	per_color_imgs.push(o);
	for (j = 2.8; 18.8 >= j; j += 1) {
		var cc = document.createElement("canvas"),
			sz = Math.ceil(2.5 * j + 28);
		cc.width = cc.height = sz;
		ctx = cc.getContext("2d");
		ctx.fillStyle = o.cs;
		ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
		ctx.shadowBlur = 12;
		ctx.shadowOffsetY = 0;
		ctx.shadowColor = "#" + rs + gs + bs;
		ctx.globalAlpha = .8;
		ctx.fill();
		ctx.globalAlpha = 1;
		ctx.fill();
		o.imgs.push(cc);
		o.fws.push(sz);
		o.fhs.push(sz);
		o.fw2s.push(sz / 2);
		o.fh2s.push(sz / 2);
		sz = Math.ceil(8 * j + 6);
		cc = document.createElement("canvas");
		cc.width = cc.height = sz;
		ctx = cc.getContext("2d");
		g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
		g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
		g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, sz, sz);
		o.gimgs.push(cc);
		o.gfws.push(sz);
		o.gfhs.push(sz);
		o.gfw2s.push(sz / 2);
		o.gfh2s.push(sz / 2);
		cc = document.createElement("canvas");
		sz = Math.ceil(1.3 * j + 6);
		cc.width = cc.height = sz;
		ctx = cc.getContext("2d");
		var eam = .2,
			g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
		g.addColorStop(0, "rgba(" +
			rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
		g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
		g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, sz, sz);
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 2;
		ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
		ctx.globalAlpha = 1;
		ctx.stroke();
		o.oimgs.push(cc);
		o.ofws.push(sz);
		o.ofhs.push(sz);
		o.ofw2s.push(sz / 2);
		o.ofh2s.push(sz / 2)
	}
	o.ic =
		o.imgs.length;
	o.pr_imgs = [];
	o.pr_fws = [];
	o.pr_fhs = [];
	o.pr_fw2s = [];
	o.pr_fh2s = [];
	for (j = 3; 24 >= j; j += 1) cc = document.createElement("canvas"), sz = Math.ceil(2 * j + 38), cc.width = cc.height = sz, ctx = cc.getContext("2d"), ctx.fillStyle = o.cs, ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2), ctx.shadowBlur = 22, ctx.shadowOffsetY = 0, ctx.shadowColor = "#" + rs + gs + bs, ctx.fill(), ctx.fill(), o.pr_imgs.push(cc), o.pr_fws.push(sz), o.pr_fhs.push(sz), o.pr_fw2s.push(sz / 2), o.pr_fh2s.push(sz / 2)
}
if (testing)
	for (ctx = colc.getContext("2d"), ctx.fillStyle = "#000000", ctx.fillRect(0, 0, colc.width, colc.height), ctx.fillStyle = "#FFFFFF", ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif", ctx.textBaseline = "top", ctx.textAlign = "center", i = yy = xx = 0; i < rrs.length; i++) {
		var pci = per_color_imgs[i],
			kmc = pci.kmcs[0];
		ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
		ntx = o.xx + o.fx;
		nty = o.yy + o.fy;
		ntx = mww2 + (ntx - view_xx) * gsc;
		nty = mhh2 + (nty - view_yy) * gsc;
		ctx.fillText("" + i, xx + 8, yy + 16);
		xx += 16;
		xx > colc.width - 16 && (xx =
			0, yy += 28)
	}
var view_xx = 0,
	view_yy = 0,
	view_ang = 0,
	view_dist = 0,
	fvx = 0,
	fvy = 0,
	xm = 0,
	ym = 0,
	lsxm = 0,
	lsym = 0,
	snake = null,
	my_nick = "",
	dhx, dhy, hsz, fr = 0,
	lfr = 0,
	ltm = Date.now(),
	vfr = 0,
	vfrb = 0,
	avfr = 0,
	fr2 = 0,
	lfr2 = 0,
	vfrb2 = 0,
	cptm = 0,
	lptm = 0,
	lpstm = 0,
	last_ping_mtm = 0,
	lagging = !1,
	lag_mult = 1,
	wfpr = !1,
	high_quality = !0,
	gla = 1,
	wdfg = 0,
	qsm = 1,
	mqsm = 1.7,
	playing = !1,
	connected = !1,
	want_close_socket = !1,
	want_victory_message = !1,
	want_victory_focus = !1,
	want_hide_victory = 0,
	hvfr = 0,
	dead_mtm = -1,
	at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
	for (xx = 0; 256 > xx; xx++) at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0,
	kd_r_frb = 0,
	kd_l = !1,
	kd_r = !1,
	kd_u = !1,
	lkstm = 0,
	social = document.createElement("iframe");
try { social.frameBorder = 0 } catch (b) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.style.overflow = "hidden";
social.width = 251;
social.height = 150;
social.src = "/social-box/";
document.body.appendChild(social);
var oef = function() {
		var b = Date.now();
		avfr = vfr = (b - ltm) / 8;
		ltm = b;
		choosing_skin || (lagging || wfpr && 420 < b - last_ping_mtm && (lagging = !0), lagging ? (lag_mult *= .85, .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05, 1 <= lag_mult && (lag_mult = 1)));
		120 < vfr && (vfr = 120);
		vfr *= lag_mult;
		etm *= lag_mult;
		lfr = fr;
		fr += vfr;
		vfrb = Math.floor(fr) - Math.floor(lfr);
		lfr2 = fr2;
		fr2 += 2 * vfr;
		vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
		kd_l && (kd_l_frb += vfrb);
		kd_r && (kd_r_frb += vfrb);
		if (spinner_shown) {
			lsfr += avfr;
			var q = ldmc.getContext("2d");
			q.clearRect(0,
				0, 512, 128);
			for (var e, h, u = 1; 2 >= u; u++) {
				q.beginPath();
				1 == u ? (q.fillStyle = "#60FF70", h = 0) : (q.fillStyle = "#9850FF", h = Math.PI);
				for (var f = 0; 256 >= f; f++) e = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * f / 256) + 8 * f / 256, 256 == f && (e += 10), xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * e * 1.25, yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * e, 0 == f ? q.moveTo(xx, yy) : q.lineTo(xx, yy);
				e = 32;
				xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * e * 1.25;
				yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * e;
				q.lineTo(xx, yy);
				for (f = 256; 0 <= f; f--) e = 32 + 5 * Math.cos(h + lsfr / 6 +
					8 * f / 256) - 8 * f / 256, 256 == f && (e -= 10), xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * e * 1.25, yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * e, q.lineTo(xx, yy);
				q.fill()
			}
			connecting ? (ss_a += avfr / 86, 1 <= ss_a && (ss_a = 1), ss_sh += avfr / 93, 1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86, 0 >= ss_a && (ss_sh = ss_a = 0, ldmc.style.display = "none", trf(ldmc, "")));
			ldmc.style.opacity = ss_a;
			f = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
			trf(ldmc, "scale(" + f + "," + f + ")")
		}
		if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
			f = document.createElement("img");
			h = [];
			h.push("bso=" + encodeURIComponent(bso));
			if (bso)
				for (var c in bso) h.push(c + "=" + encodeURIComponent(bso[c]));
			h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
			h.push("soslen=" + sos.length);
			f.src = "http://slither.io/cnc.jpg?" + h.join("&");
			play_btn_click_mtm = -1
		}
		waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
		connecting && 3E3 < b - start_connect_mtm && (bso && (bso.tainted = !0), connect());
		if (choosing_skin) {
			for (f = snakes.length - 1; 0 <= f; f--)
				for (c = snakes[f], u = c.pts.length - 1; 0 <= u; u--) c.pts[u].yy =
					grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / c.pts.length);
			view_xx -= vfr
		}
		playing && (high_quality ? (1 > gla && (gla += .0075 * vfr, 1 < gla && (gla = 1)), 1 < qsm && (qsm -= 4E-5 * vfr, 1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr, 0 > gla && (gla = 0)), qsm < mqsm && (qsm += 4E-5 * vfr, qsm > mqsm && (qsm = mqsm))));
		0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr, 1 <= hvfr ? (hvfr = 0, want_hide_victory = 2, victory_holder.style.opacity = 1, saveh.style.opacity = 1, victory_holder.style.display = "none", saveh.style.display = "none", nick_holder.style.opacity = 0, playh.style.opacity =
			0, smh.style.opacity = 0, nick_holder.style.display = "inline-block", playh.style.display = "block", smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr, saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr, 1 <= hvfr && (hvfr = 1, want_hide_victory = 0), nick_holder.style.opacity = hvfr, playh.style.opacity = hvfr, smh.style.opacity = hvfr));
		1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr, tip_fr >= pi2 && (tip_fr -= pi2, tip_pos++, tip_pos >= tipss.length && (tip_pos = 0), tips.textContent = tipss[tip_pos]), u = .5 - .5 * Math.cos(tip_fr),
			tips.style.opacity = Math.round(1E5 * Math.pow(u, .5)) / 1E5);
		if (-1 == dead_mtm) - 1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr, 1 <= lb_fr && (lb_fr = 1), lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
		else if (1600 < b - dead_mtm) {
			if (-1 == login_iv) {
				login_iv = -2;
				login.style.display = "inline";
				try { "1" != localStorage.edttsg ? cstx.style.display = "inline" : cskh.style.display = "inline" } catch (y) {}
				fbh.style.display = "inline";
				twth.style.display = "inline";
				plq.style.display =
					"inline";
				clq.style.display = "inline";
				grqh.style.display = "inline";
				social.style.display = "inline";
				want_victory_focus && (want_victory_focus = !1, victory.focus())
			} - 2 == login_iv && (login_fr -= .004 * vfr, choosing_skin && (login_fr -= .007 * vfr), lb_fr = login_fr, 0 >= login_fr && (login_fr = 0, dead_mtm = -1, nick.disabled = !1, nick.focus(), lb_fr = -1, playing = !1, choosing_skin && (choosing_skin = !1, resetGame(), pskh.style.display = "none", nskh.style.display = "none", skodiv.style.display = "none")), pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 *
					login_fr)), lgcsc = 1 + .1 * Math.pow(login_fr, 2), f = Math.round(lgbsc * lgcsc * 1E5) / 1E5, 1 == f ? trf(login, "") : trf(login, "scale(" + f + "," + f + ")"), login.style.opacity = 1 - login_fr, cstx.style.opacity = 1 - login_fr, fbh.style.opacity = 1 - login_fr, twth.style.opacity = 1 - login_fr, cskh.style.opacity = 1 - login_fr, grqh.style.opacity = 1 - login_fr, plq.style.opacity = 1 - login_fr, clq.style.opacity = 1 - login_fr, social.style.opacity = 1 - login_fr, pskh.style.opacity = login_fr, nskh.style.opacity = login_fr, skodiv.style.opacity = login_fr, mc.style.opacity =
				login_fr, loch.style.opacity = login_fr, lbh.style.opacity = .85 * lb_fr, lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
		}
		want_close_socket && -1 == dead_mtm && (want_close_socket = !1, ws && (ws.close(), ws = null, playing = connected = !1), resetGame());
		want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
		connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < b - lkstm && (lkstm = b, 0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb, kd_r_frb = 0), 0 < kd_l_frb && kd_r_frb > kd_l_frb &&
			(kd_r_frb -= kd_l_frb, kd_l_frb = 0), 0 < kd_l_frb ? (v = kd_l_frb, 127 < v && (v = 127), kd_l_frb -= v, 5 <= protocol_version ? (f = new Uint8Array(2), f[0] = 252) : (f = new Uint8Array(2), f[0] = 108), f[1] = v, ws.send(f), snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb, 127 < v && (v = 127), kd_r_frb -= v, 5 <= protocol_version ? (v += 128, f = new Uint8Array(2), f[0] = 252) : (f = new Uint8Array(2), f[0] = 114), f[1] = v, snake.eang += mamu * v * snake.scang * snake.spang, ws.send(f))), !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = b, wfpr = !0, f = new Uint8Array(1),
			f[0] = 5 <= protocol_version ? 251 : 112, ws.send(f), lpstm = b));
		null != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(), myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px", myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
		if (1E3 < b - lrd_mtm) {
			if (testing && console && console.log) {
				console.log("FPS: " + fps);
				h = [];
				trdps += rdps;
				playing && tcsecs++;
				h.push("FPS: " + fps);
				h.push("sectors: " + sectors.length);
				h.push("foods: " + foods_c);
				h.push("bytes/sec: " + rdps);
				h.push("bytes/sec avg: " + Math.round(trdps /
					tcsecs));
				h.push("");
				for (f = c = 0; f < rdpspc.length; f++) 0 <= rdpspc[f] && (c += rdpspc[f]);
				for (f = 0; f < rdpspc.length; f++) 0 <= rdpspc[f] && h.push(String.fromCharCode(f) + ": " + rdpspc[f] + " (" + Math.round(rdpspc[f] / c * 1E3) / 10 + "%)");
				h.push("total: " + c);
				maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
				h.push("");
				for (f = 1; f < pfs.length; f++) 0 != pfs[f] && (h.push(f + ": " + Math.round(1E3 * pfs[f]) / 1E3), pfs[f] = 0);
				pft = 0;
				pfd.innerHTML = h.join("<br>")
			}
			playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++, 1 <= wdfg && (high_quality = !1)) : (high_quality ||
				48 <= fps) && 0 < wdfg && (wdfg--, 0 >= wdfg && (high_quality = !0)));
			wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
			lrd_mtm = Date.now()
		}
		etm *= Math.pow(.993, vfrb);
		if (null != snake) {
			if (xm != lsxm || ym != lsym) want_e = !0;
			want_e && 100 < b - last_e_mtm && (want_e = !1, last_e_mtm = b, lsxm = xm, lsym = ym, d2 = xm * xm + ym * ym, 256 < d2 ? (ang = Math.atan2(ym, xm), snake.eang = ang) : ang = snake.wang, ang %= pi2, 0 > ang && (ang += pi2), 5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2), sang != lsang && (lsang = sang, f = new Uint8Array(1), f[0] = sang & 255, lpstm = b, ws.send(f.buffer))) :
				(sang = Math.floor(16777215 * ang / pi2), sang != lsang && (lsang = sang, f = new Uint8Array(4), f[0] = 101, f[1] = sang >> 16 & 255, f[2] = sang >> 8 & 255, f[3] = sang & 255, lpstm = b, ws.send(f.buffer))))
		}
		if (!choosing_skin)
			for (f = snakes.length - 1; 0 <= f; f--) {
				c = snakes[f];
				q = mamu * vfr * c.scang * c.spang;
				b = c.sp * vfr / 4;
				b > c.msl && (b = c.msl);
				if (!c.dead) {
					c.tsp != c.sp && (c.tsp < c.sp ? (c.tsp += .3 * vfr, c.tsp > c.sp && (c.tsp = c.sp)) : (c.tsp -= .3 * vfr, c.tsp < c.sp && (c.tsp = c.sp)));
					c.tsp > c.fsp && (c.sfr += (c.tsp - c.fsp) * vfr * .021);
					if (0 < c.fltg)
						for (h = vfrb, h > c.fltg && (h = c.fltg), c.fltg -=
							h, qq = 0; qq < h; qq++) c.fl = c.fls[c.flpos], c.fls[c.flpos] = 0, c.flpos++, c.flpos >= lfc && (c.flpos = 0);
					else 0 == c.fltg && (c.fltg = -1, c.fl = 0);
					c.cfl = c.tl + c.fl
				}
				if (1 == c.dir) {
					c.ang -= q;
					if (0 > c.ang || c.ang >= pi2) c.ang %= pi2;
					0 > c.ang && (c.ang += pi2);
					h = (c.wang - c.ang) % pi2;
					0 > h && (h += pi2);
					h > Math.PI && (h -= pi2);
					0 < h && (c.ang = c.wang, c.dir = 0)
				} else if (2 == c.dir) {
					c.ang += q;
					if (0 > c.ang || c.ang >= pi2) c.ang %= pi2;
					0 > c.ang && (c.ang += pi2);
					h = (c.wang - c.ang) % pi2;
					0 > h && (h += pi2);
					h > Math.PI && (h -= pi2);
					0 > h && (c.ang = c.wang, c.dir = 0)
				} else c.ang = c.wang;
				1 != c.ehl && (c.ehl +=
					.03 * vfr, 1 <= c.ehl && (c.ehl = 1));
				q = c.pts[c.pts.length - 1];
				c.wehang = Math.atan2(c.yy + c.fy - q.yy - q.fy + q.eby * (1 - c.ehl), c.xx + c.fx - q.xx - q.fx + q.ebx * (1 - c.ehl));
				c.dead || c.ehang == c.wehang || (h = (c.wehang - c.ehang) % pi2, 0 > h && (h += pi2), h > Math.PI && (h -= pi2), 0 > h ? c.edir = 1 : 0 < h && (c.edir = 2));
				if (1 == c.edir) {
					c.ehang -= .1 * vfr;
					if (0 > c.ehang || c.ehang >= pi2) c.ehang %= pi2;
					0 > c.ehang && (c.ehang += pi2);
					h = (c.wehang - c.ehang) % pi2;
					0 > h && (h += pi2);
					h > Math.PI && (h -= pi2);
					0 < h && (c.ehang = c.wehang, c.edir = 0)
				} else if (2 == c.edir) {
					c.ehang += .1 * vfr;
					if (0 > c.ehang || c.ehang >=
						pi2) c.ehang %= pi2;
					0 > c.ehang && (c.ehang += pi2);
					h = (c.wehang - c.ehang) % pi2;
					0 > h && (h += pi2);
					h > Math.PI && (h -= pi2);
					0 > h && (c.ehang = c.wehang, c.edir = 0)
				}
				c.dead || (c.xx += Math.cos(c.ang) * b, c.yy += Math.sin(c.ang) * b, c.chl += b / c.msl);
				if (0 < vfrb) {
					for (u = c.pts.length - 1; 0 <= u; u--) q = c.pts[u], q.dying && (q.da += .0015 * vfrb, 1 < q.da && (c.pts.splice(u, 1), q.dying = !1, points_dp.add(q)));
					for (u = c.pts.length - 1; 0 <= u; u--)
						if (q = c.pts[u], 0 < q.eiu) {
							fy = fx = 0;
							for (qq = cm1 = q.eiu - 1; 0 <= qq; qq--) q.efs[qq] = 2 == q.ems[qq] ? q.efs[qq] + vfrb2 : q.efs[qq] + vfrb, h = q.efs[qq],
								h >= hfc ? (qq != cm1 && (q.exs[qq] = q.exs[cm1], q.eys[qq] = q.eys[cm1], q.efs[qq] = q.efs[cm1], q.ems[qq] = q.ems[cm1]), q.eiu--, cm1--) : (fx += q.exs[qq] * hfas[h], fy += q.eys[qq] * hfas[h]);
							q.fx = fx;
							q.fy = fy
						}
				}
				b = 2.3 * Math.cos(c.eang);
				h = 2.3 * Math.sin(c.eang);
				c.rex < b && (c.rex += vfr / 6, c.rex >= b && (c.rex = b));
				c.rey < h && (c.rey += vfr / 6, c.rey >= h && (c.rey = h));
				c.rex > b && (c.rex -= vfr / 6, c.rex <= b && (c.rex = b));
				c.rey > h && (c.rey -= vfr / 6, c.rey <= h && (c.rey = h));
				if (0 < vfrb) {
					if (0 < c.ftg)
						for (h = vfrb, h > c.ftg && (h = c.ftg), c.ftg -= h, qq = 0; qq < h; qq++) c.fx = c.fxs[c.fpos], c.fy =
							c.fys[c.fpos], c.fchl = c.fchls[c.fpos], c.fxs[c.fpos] = 0, c.fys[c.fpos] = 0, c.fchls[c.fpos] = 0, c.fpos++, c.fpos >= rfc && (c.fpos = 0);
					else 0 == c.ftg && (c.ftg = -1, c.fx = 0, c.fy = 0, c.fchl = 0);
					if (0 < c.fatg)
						for (h = vfrb, h > c.fatg && (h = c.fatg), c.fatg -= h, qq = 0; qq < h; qq++) c.fa = c.fas[c.fapos], c.fas[c.fapos] = 0, c.fapos++, c.fapos >= afc && (c.fapos = 0);
					else 0 == c.fatg && (c.fatg = -1, c.fa = 0)
				}
				c.dead ? (c.dead_amt += .02 * vfr, 1 <= c.dead_amt && snakes.splice(f, 1)) : 1 != c.alive_amt && (c.alive_amt += .015 * vfr, 1 <= c.alive_amt && (c.alive_amt = 1))
			}
		for (f = preys.length - 1; 0 <=
			f; f--) {
			u = preys[f];
			q = mamu2 * vfr;
			b = u.sp * vfr / 4;
			if (0 < vfrb)
				if (0 < u.ftg)
					for (h = vfrb, h > u.ftg && (h = u.ftg), u.ftg -= h, qq = 1; qq <= h; qq++) qq == h && (u.fx = u.fxs[u.fpos], u.fy = u.fys[u.fpos]), u.fxs[u.fpos] = 0, u.fys[u.fpos] = 0, u.fpos++, u.fpos >= rfc && (u.fpos = 0);
				else 0 == u.ftg && (u.fx = 0, u.fy = 0, u.ftg = -1);
			if (1 == u.dir) {
				u.ang -= q;
				if (0 > u.ang || u.ang >= pi2) u.ang %= pi2;
				0 > u.ang && (u.ang += pi2);
				h = (u.wang - u.ang) % pi2;
				0 > h && (h += pi2);
				h > Math.PI && (h -= pi2);
				0 < h && (u.ang = u.wang, u.dir = 0)
			} else if (2 == u.dir) {
				u.ang += q;
				if (0 > u.ang || u.ang >= pi2) u.ang %= pi2;
				0 > u.ang &&
					(u.ang += pi2);
				h = (u.wang - u.ang) % pi2;
				0 > h && (h += pi2);
				h > Math.PI && (h -= pi2);
				0 > h && (u.ang = u.wang, u.dir = 0)
			} else u.ang = u.wang;
			u.xx += Math.cos(u.ang) * b;
			u.yy += Math.sin(u.ang) * b;
			u.gfr += vfr * u.gr;
			u.eaten ? (1.5 != u.fr && (u.fr += vfr / 150, 1.5 <= u.fr && (u.fr = 1.5)), u.eaten_fr += vfr / 47, u.gfr += vfr, c = u.eaten_by, 1 <= u.eaten_fr || !c ? preys.splice(f, 1) : u.rad = 1 - Math.pow(u.eaten_fr, 3)) : 1 != u.fr && (u.fr += vfr / 150, 1 <= u.fr ? (u.fr = 1, u.rad = 1) : (u.rad = .5 * (1 - Math.cos(Math.PI * u.fr)), u.rad += .66 * (.5 * (1 - Math.cos(Math.PI * u.rad)) - u.rad)))
		}
		for (f = cm1 = foods_c -
			1; 0 <= f; f--) b = foods[f], b.gfr += vfr * b.gr, b.eaten ? (b.eaten_fr += vfr / 41, c = b.eaten_by, 1 <= b.eaten_fr || !c ? (f == cm1 ? foods[f] = null : (foods[f] = foods[cm1], foods[cm1] = null), foods_c--, cm1--) : (c = b.eaten_by, h = b.eaten_fr * b.eaten_fr, b.rad = b.lrrad * (1 - b.eaten_fr * h), b.rx = b.xx + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h, b.ry = b.yy + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * h) * (1 - h) - b.yy) * h, b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr), b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr))) : (1 != b.fr && (b.fr += b.rsp * vfr / 150, 1 <=
			b.fr ? (b.fr = 1, b.rad = 1) : (b.rad = .5 * (1 - Math.cos(Math.PI * b.fr)), b.rad += .66 * (.5 * (1 - Math.cos(Math.PI * b.rad)) - b.rad)), b.lrrad = b.rad), b.rx = b.xx, b.ry = b.yy, b.rx = b.xx + 6 * Math.cos(b.wsp * b.gfr), b.ry = b.yy + 6 * Math.sin(b.wsp * b.gfr));
		vfrb = vfr = 0;
		redraw();
		no_raf || raf(oef)
	},
	bgx = 0,
	bgy = 0,
	bgx2 = 0,
	bgy2 = 0,
	fgfr = 0,
	px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, maxp = 0,
	fps = 0,
	redraw = function() {
		fps++;
		var b = mc.getContext("2d");
		if (animating) {
			if (snake) {
				var q = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
				gsc != q && (gsc < q ? (gsc += 2E-4, gsc >= q && (gsc = q)) :
					(gsc -= 2E-4, gsc <= q && (gsc = q)))
			}
			var q = view_xx,
				e = view_yy;
			null != snake && (0 < fvtg && (fvtg--, fvx = fvxs[fvpos], fvy = fvys[fvpos], fvxs[fvpos] = 0, fvys[fvpos] = 0, fvpos++, fvpos >= vfc && (fvpos = 0)), view_xx = snake.xx + snake.fx + fvx, view_yy = snake.yy + snake.fy + fvy, choosing_skin && (view_xx -= 104, gsc = 1), view_ang = Math.atan2(view_yy - grd, view_xx - grd), view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)), bpx1 = view_xx - (mww2 / gsc + 84), bpy1 = view_yy - (mhh2 / gsc + 84), bpx2 = view_xx + (mww2 / gsc + 84), bpy2 = view_yy + (mhh2 / gsc + 84), fpx1 =
				view_xx - (mww2 / gsc + 24), fpy1 = view_yy - (mhh2 / gsc + 24), fpx2 = view_xx + (mww2 / gsc + 24), fpy2 = view_yy + (mhh2 / gsc + 24));
			bgx2 -= 1 * (view_xx - q) / bgw2;
			bgy2 -= 1 * (view_yy - e) / bgh2;
			bgx2 %= 1;
			0 > bgx2 && (bgx2 += 1);
			bgy2 %= 1;
			0 > bgy2 && (bgy2 += 1);
			ggbg && (high_quality || 0 < gla) ? (b.save(), b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh), b.globalAlpha = .3 * gla, b.drawImage(gbgmc, 0, 0), b.restore()) : (b.fillStyle = "#000000", b.fillRect(0, 0, mww, mhh));
			if (bgp2) {
				b.save();
				b.fillStyle = bgp2;
				b.translate(mww2, mhh2);
				b.scale(gsc, gsc);
				b.translate(bgx2 * bgw2, bgy2 * bgh2);
				b.globalAlpha = .4 + .6 * (1 - gla);
				b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
				if (high_quality || 0 < gla) b.globalCompositeOperation = "lighter", b.globalAlpha = .4 * gla, b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
				b.restore()
			}
			if (testing)
				for (q = sectors.length - 1; 0 <= q; q--) e = sectors[q], b.fillStyle = "rgba(0, 255, 0, .1)", b.fillRect(mww2 + (e.xx * sector_size - view_xx) * gsc, mhh2 + (e.yy * sector_size - view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
			if (high_quality || 0 < gla) {
				var h = 1.75;
				1 != gla && (h = 1.75 * gla);
				b.save();
				for (q = foods_c - 1; 0 <= q; q--) e = foods[q], e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (1 == e.rad ? (A = mww2 + gsc * (e.rx - view_xx) - e.ofw2, t = mhh2 + gsc * (e.ry - view_yy) - e.ofh2, b.globalAlpha = h * e.fr, b.drawImage(e.ofi, A, t)) : (A = mww2 + gsc * (e.rx - view_xx) - e.ofw2 * e.rad, t = mhh2 + gsc * (e.ry - view_yy) - e.ofh2 * e.rad, b.globalAlpha = h * e.fr, b.drawImage(e.ofi, 0, 0, e.ofw, e.ofh, A, t, e.ofw * e.rad, e.ofh * e.rad)));
				b.restore()
			}
			b.save();
			b.globalCompositeOperation = "lighter";
			if (high_quality || 0 < gla) {
				h = .75;
				1 != gla && (h = .75 * gla);
				var u = .75;
				1 != gla && (u = 1 -
					.25 * gla);
				for (q = foods_c - 1; 0 <= q; q--) e = foods[q], e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (1 == e.rad ? (A = mww2 + gsc * (e.rx - view_xx) - e.fw2, t = mhh2 + gsc * (e.ry - view_yy) - e.fh2, b.globalAlpha = u * e.fr, b.drawImage(e.fi, A, t), b.globalAlpha = h * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr, b.drawImage(e.fi, A, t)) : (A = mww2 + gsc * (e.rx - view_xx) - e.fw2 * e.rad, t = mhh2 + gsc * (e.ry - view_yy) - e.fh2 * e.rad, b.globalAlpha = u * e.fr, b.drawImage(e.fi, 0, 0, e.fw, e.fh, A, t, e.fw * e.rad, e.fh * e.rad), b.globalAlpha = h * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr, b.drawImage(e.fi,
					0, 0, e.fw, e.fh, A, t, e.fw * e.rad, e.fh * e.rad)))
			} else
				for (q = foods_c - 1; 0 <= q; q--) e = foods[q], e.rx >= fpx1 && e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (1 == e.rad ? (A = mww2 + gsc * (e.rx - view_xx) - e.fw2, t = mhh2 + gsc * (e.ry - view_yy) - e.fh2, b.globalAlpha = e.fr, b.drawImage(e.fi, A, t)) : (A = mww2 + gsc * (e.rx - view_xx) - e.fw2 * e.rad, t = mhh2 + gsc * (e.ry - view_yy) - e.fh2 * e.rad, b.globalAlpha = e.fr, b.drawImage(e.fi, 0, 0, e.fw, e.fh, A, t, e.fw * e.rad, e.fh * e.rad)));
			b.restore();
			b.save();
			b.globalCompositeOperation = "lighter";
			for (q = preys.length - 1; 0 <= q; q--)
				if (h = preys[q],
					c = h.xx + h.fx, y = h.yy + h.fy, px = mww2 + gsc * (c - view_xx), py = mhh2 + gsc * (y - view_yy), -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
					if (h.eaten) {
						var e = h.eaten_by,
							f = Math.pow(h.eaten_fr, 2),
							c = c + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - c) * f,
							y = y + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - y) * f;
						px = mww2 + gsc * (c - view_xx);
						py = mhh2 + gsc * (y - view_yy)
					}
					1 == h.rad ? (A = px - h.fw2, t = py - h.fh2, b.globalAlpha = .75 * h.fr, b.drawImage(h.fi, A, t), b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.fi, A, t)) : (A = px - h.fw2 * h.rad, t = py -
						h.fh2 * h.rad, b.globalAlpha = .75 * h.fr, b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad), b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad))
				}
			b.restore();
			b.save();
			b.strokeStyle = "#90C098";
			for (var c, y, E, q = snakes.length - 1; 0 <= q; q--) e = snakes[q], c = e.xx + e.fx, y = e.yy + e.fy + 40, 0 < e.na && c >= bpx1 - 100 && y >= bpy1 && c <= bpx2 + 100 && y <= bpy2 && (e == snake && (e.fnfr++, 200 < e.fnfr && (e.na -= .004, 0 > e.na && (e.na = 0))), b.save(), b.globalAlpha = .5 * e.na * e.alive_amt * (1 - e.dead_amt),
				b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif", b.fillStyle = e.csw, b.textBaseline = "middle", b.textAlign = "center", h = e.xx + e.fx, u = e.yy + e.fy, h = mww2 + (h - view_xx) * gsc, u = mhh2 + (u - view_yy) * gsc, b.fillText(e.nk, h, u + 32 + 11 * e.sc * gsc), b.restore());
			for (q = snakes.length - 1; 0 <= q; q--)
				for (e = snakes[q], e.iiv = !1, x = e.pts.length - 1; 0 <= x; x--)
					if (c = e.pts[x], px = c.xx + c.fx, py = c.yy + c.fy, px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
						e.iiv = !0;
						break
					}
			for (q = snakes.length - 1; 0 <= q; q--)
				if (e = snakes[q], e.iiv) {
					h = e.xx + e.fx;
					u = e.yy + e.fy;
					px = h;
					py =
						u;
					E = e.ehang;
					var B = e.sc,
						w = 29 * B,
						D = e.cfl;
					c = e.pts[e.pts.length - 1];
					if (1 == render_mode) {
						b.save();
						b.beginPath();
						b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
						y = !1;
						for (var x = e.pts.length - 1; 0 <= x; x--) {
							c = e.pts[x];
							lpx = px;
							lpy = py;
							px = c.xx;
							py = c.yy;
							var A = c.fx,
								t = c.fy;
							0 < D && (px += A, py += t, lax = ax, lay = ay, ax = (px + lpx) / 2, ay = (py + lpy) / 2, y || (lax = ax, lay = ay), 1 > D && (f = 1 - D, lpx += (lax - lpx) * f, lpy += (lay - lpy) * f, ax += (lax - ax) * f, ay += (lay - ay) * f), y ? D-- : D -= e.chl + e.fchl, y ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc,
								mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc), y = !0))
						}
						b.save();
						b.lineJoin = "round";
						b.lineCap = "round";
						is_firefox ? (e.sp > e.fsp && (x = e.alive_amt * (1 - e.dead_amt) * Math.max(0, Math.min(1, (e.sp - e.ssp) / (e.msp - e.ssp))), b.save(), b.strokeStyle = e.cs, b.globalAlpha = .3 * x, b.lineWidth = (w + 6) * gsc, b.stroke(), b.lineWidth = (w + 9) * gsc, b.stroke(), b.lineWidth = (w + 12) * gsc, b.stroke(), b.restore()), b.globalAlpha = 1 * e.alive_amt * (1 - e.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (w + 5) *
							gsc) : (e.sp > e.fsp && (x = e.alive_amt * (1 - e.dead_amt) * Math.max(0, Math.min(1, (e.sp - e.ssp) / (e.msp - e.ssp))), b.save(), b.lineWidth = (w - 2) * gsc, b.shadowBlur = 30 * gsc, b.shadowColor = "rgba(" + e.rr + "," + e.gg + "," + e.bb + ", " + Math.round(1E4 * x) / 1E4 + ")", b.stroke(), b.stroke(), b.restore()), b.globalAlpha = .4 * e.alive_amt * (1 - e.dead_amt), b.strokeStyle = "#000000", b.lineWidth = (w + 5) * gsc, b.stroke(), b.strokeStyle = e.cs, b.lineWidth = w * gsc, b.strokeStyle = "#000000", b.globalAlpha = 1 * e.alive_amt * (1 - e.dead_amt));
						b.stroke();
						b.strokeStyle = e.cs;
						b.globalAlpha =
							.8 * e.alive_amt * (1 - e.dead_amt);
						b.lineWidth = w * gsc;
						b.stroke();
						b.restore();
						b.strokeStyle = e.cs;
						e.dead && (t = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * e.dead_amt))) * Math.sin(Math.PI * e.dead_amt), b.save(), b.lineJoin = "round", b.lineCap = "round", b.globalCompositeOperation = "lighter", b.lineWidth = (w - 3) * gsc, b.globalAlpha = t, b.strokeStyle = "#FFCC99", b.stroke(), b.restore());
						b.restore()
					}
					if (2 == render_mode) {
						var w = .5 * w,
							I, z, L, J, H, C, M, O, A = 0;
						px = h;
						py = u;
						H = px;
						C = py;
						H >= bpx1 && C >= bpy1 && H <= bpx2 && C <= bpy2 ? (pbx[0] = H, pby[0] = C, pba[0] = Math.atan2(u -
							(c.yy + c.fy), h - (c.xx + c.fx)) + Math.PI, pbu[0] = 1) : pbu[0] = 0;
						A = 1;
						n = (e.chl + e.fchl) % .25;
						0 > n && (n += .25);
						n = .25 - n;
						D += 1 - .25 * Math.ceil((e.chl + e.fchl) / .25);
						ax = px;
						ay = py;
						e.sep != e.wsep && (e.sep < e.wsep ? (e.sep += .01, e.sep >= e.wsep && (e.sep = e.wsep)) : e.sep > e.wsep && (e.sep -= .01, e.sep <= e.wsep && (e.sep = e.wsep)));
						for (var N = e.sep * qsm, K = 0, t = per_color_imgs[e.cv].kmcs, F, G, x = e.pts.length - 1; 0 <= x; x--)
							if (c = e.pts[x], lpx = px, lpy = py, px = c.xx + c.fx, py = c.yy + c.fy, -.25 < D) {
								L = H;
								J = C;
								H = (px + lpx) / 2;
								C = (py + lpy) / 2;
								M = lpx;
								O = lpy;
								for (f = 0; 1 > f; f += .25) {
									F = n + f;
									c = L +
										(M - L) * F;
									y = J + (O - J) * F;
									I = M + (H - M) * F;
									z = O + (C - O) * F;
									lax = ax;
									lay = ay;
									ax = c + (I - c) * F;
									ay = y + (z - y) * F;
									0 > D && (ax += -(lax - ax) * D / .25, ay += -(lay - ay) * D / .25);
									I = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - lay, 2));
									if (K + I < N) K += I;
									else {
										K = -K;
										for (F = (I - K) / N; 1 <= F; F--) K += N, pax = lax + (ax - lax) * K / I, pay = lay + (ay - lay) * K / I, pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax, pby[A] = pay, pbu[A] = 1, c = ax - lax, y = ay - lay, pba[A] = -15 <= c && -15 <= y && 15 > c && 15 > y ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && -127 <= y && 127 > c && 127 > y ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c)) : pbu[A] =
											0, A++;
										K = I - K
									}
									if (1 > D && (D -= .25, -.25 >= D)) break
								}
								1 <= D && D--
							}
						ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[A] = 1, pbx[A] = ax, pby[A] = ay, pba[A] = Math.atan2(ay - lay, ax - lax)) : pbu[A] = 0;
						A++;
						b.save();
						b.translate(mww2, mhh2);
						f = gsc * w * 52 / 32;
						H = gsc * w * 62 / 32;
						D = e.alive_amt * (1 - e.dead_amt);
						D *= D;
						F = 1;
						if (e.tsp > e.fsp) {
							F = e.alive_amt * (1 - e.dead_amt) * Math.max(0, Math.min(1, (e.tsp - e.ssp) / (e.msp - e.ssp)));
							G = .37 * F;
							y = Math.pow(F, .5);
							K = gsc * w * (1 + .9375 * y);
							c = per_color_imgs[e.cv].kfmc;
							b.save();
							b.globalCompositeOperation = "lighter";
							if (e.rbcs)
								for (C = e.rbcs,
									N = C.length, x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], c = per_color_imgs[C[x % N]], c = c.kfmc, b.save(), b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * e.sfr)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(c, -K, -K, 2 * K, 2 * K), b.restore());
							else
								for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * e.sfr)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(c, -K, -K, 2 * K, 2 * K), b.restore());
							b.restore();
							F = 1 - F
						}
						F *= D;
						if (high_quality || 0 < gla)
							for (c =
								F, 1 != gla && (c = F * gla), b.globalAlpha = c, x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(komc, -f, -f, 2 * f, 2 * f), 9 > x && (b.globalAlpha = c * (1 - x / 9), b.drawImage(ksmc, -H, -H, 2 * H, 2 * H), b.globalAlpha = c), b.restore());
						b.globalAlpha = F;
						if (e.rbcs) {
							C = e.rbcs;
							N = C.length;
							for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], 2 <= x && (f = x - 2, 1 == pbu[f] && (c = pbx[f], y = pby[f], b.save(), b.translate((c - view_xx) * gsc, (y - view_yy) * gsc), b.globalAlpha = 9 > f ? f / 9 * F : F, b.drawImage(ksmc, -H, -H, 2 * H, 2 * H), b.restore())), b.save(), b.globalAlpha = D, b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), f = x % (2 * t.length), f >= t.length && (f = 2 * t.length - (f + 1)), c = per_color_imgs[C[x % N]], b.drawImage(c.kmcs[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
							if (e.tsp > e.fsp && (high_quality || 0 < gla)) {
								b.save();
								b.globalCompositeOperation = "lighter";
								for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x /
									4 - e.sfr)), f = x % (2 * t.length), f >= t.length && (f = 2 * t.length - (f + 1)), b.drawImage(per_color_imgs[C[x % N]].kmcs[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
								b.restore()
							}
						} else {
							for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], 2 <= x && (f = x - 2, 1 == pbu[f] && (c = pbx[f], y = pby[f], b.save(), b.translate((c - view_xx) * gsc, (y - view_yy) * gsc), b.globalAlpha = 9 > f ? f / 9 * F : F, b.drawImage(ksmc, -H, -H, 2 * H, 2 * H), b.restore())), b.save(), b.globalAlpha = D, b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), f = x % (2 * t.length), f >= t.length &&
								(f = 2 * t.length - (f + 1)), b.drawImage(t[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
							if (e.tsp > e.fsp && (high_quality || 0 < gla)) {
								b.save();
								b.globalCompositeOperation = "lighter";
								for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], f = x % (2 * t.length), f >= t.length && (f = 2 * t.length - (f + 1)), b.save(), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.rotate(pba[x]), b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - e.sfr)), b.drawImage(t[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w), b.restore());
								b.restore()
							}
						}
						if (e.antenna && 2 <= A && 1 == pbu[1]) {
							e.atx[0] =
								pbx[1];
							e.aty[0] = pby[1];
							F = e.sc * gsc;
							fj = e.atx.length - 1;
							if (choosing_skin)
								for (x = 1; x <= fj; x++) e.atvx[x] -= .3, e.atvy[x] += .14 * Math.cos(fr / 23 - 7 * x / fj);
							for (x = 1; x <= fj; x++) xx = e.atx[x - 1], yy = e.aty[x - 1], xx += 2 * Math.random() - 1, yy += 2 * Math.random() - 1, c = e.atx[x] - xx, y = e.aty[x] - yy, ang = -4 <= c && -4 <= y && 4 > c && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * c + 128] : -8 <= c && -8 <= y && 8 > c && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * c + 128] : -16 <= c && -16 <= y && 16 > c && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && -127 <= y && 127 > c && 127 > y ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c), xx += 4 * Math.cos(ang) *
								e.sc, yy += 4 * Math.sin(ang) * e.sc, e.atvx[x] += .1 * (xx - e.atx[x]), e.atvy[x] += .1 * (yy - e.aty[x]), e.atx[x] += e.atvx[x], e.aty[x] += e.atvy[x], e.atvx[x] *= .88, e.atvy[x] *= .88, c = e.atx[x] - e.atx[x - 1], y = e.aty[x] - e.aty[x - 1], I = Math.sqrt(c * c + y * y), I > 4 * e.sc && (ang = -4 <= c && -4 <= y && 4 > c && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * c + 128] : -8 <= c && -8 <= y && 8 > c && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * c + 128] : -16 <= c && -16 <= y && 16 > c && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * c + 128] : -127 <= c && -127 <= y && 127 > c && 127 > y ? at2lt[y + 128 << 8 | c + 128] : Math.atan2(y, c), e.atx[x] = e.atx[x - 1] + 4 * Math.cos(ang) * e.sc,
									e.aty[x] = e.aty[x - 1] + 4 * Math.sin(ang) * e.sc);
							b.globalAlpha = D;
							b.strokeStyle = e.atc1;
							b.lineWidth = 5 * F;
							b.lineCap = "round";
							b.lineJoin = "round";
							b.beginPath();
							fj = e.atx.length - 1;
							c = (e.atx[fj] - view_xx) * gsc;
							y = (e.aty[fj] - view_yy) * gsc;
							b.moveTo(c, y);
							for (x = fj - 1; 1 <= x; x--) xx = (e.atx[x] - view_xx) * gsc, yy = (e.aty[x] - view_yy) * gsc, 1 <= Math.abs(xx - c) + Math.abs(yy - y) && (c = xx, y = yy, b.lineTo(c, y));
							xx = (.5 * (e.atx[1] + e.atx[0]) - view_xx) * gsc;
							yy = (.5 * (e.aty[1] + e.aty[0]) - view_yy) * gsc;
							1 <= Math.abs(xx - c) + Math.abs(yy - y) && (c = xx, y = yy, b.lineTo(c, y));
							b.stroke();
							b.globalAlpha = e.atia * D;
							b.strokeStyle = e.atc2;
							b.lineWidth = 4 * F;
							b.beginPath();
							fj = e.atx.length - 1;
							c = (e.atx[fj] - view_xx) * gsc;
							y = (e.aty[fj] - view_yy) * gsc;
							b.moveTo(c, y);
							for (x = fj - 1; 0 <= x; x--) xx = (e.atx[x] - view_xx) * gsc, yy = (e.aty[x] - view_yy) * gsc, 1 <= Math.abs(xx - c) + Math.abs(yy - y) && (c = xx, y = yy, b.lineTo(c, y));
							b.stroke();
							e.atwg && (b.lineWidth = 3 * F, b.stroke(), b.lineWidth = 2 * F, b.stroke());
							b.globalAlpha = D * e.blba;
							if (e.abrot) {
								b.save();
								b.translate((e.atx[fj] - view_xx) * gsc, (e.aty[fj] - view_yy) * gsc);
								vang = Math.atan2(e.aty[fj] -
									e.aty[fj - 1], e.atx[fj] - e.atx[fj - 1]) - e.atba;
								if (0 > vang || vang >= pi2) vang %= pi2;
								vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
								e.atba = (e.atba + .15 * vang) % pi2;
								b.rotate(e.atba);
								b.drawImage(e.bulb, e.blbx * e.bsc * F, e.blby * e.bsc * F, e.blbw * e.bsc * F, e.blbh * e.bsc * F);
								b.restore()
							} else b.drawImage(e.bulb, (e.atx[fj] - view_xx + e.blbx * e.bsc * e.sc) * gsc, (e.aty[fj] - view_yy + e.blby * e.bsc * e.sc) * gsc, e.blbw * e.bsc * F, e.blbh * e.bsc * F);
							e.apbs && (b.globalAlpha = .5 * D, b.lineWidth = 3 * F, b.stroke(), b.lineWidth = 2 * F, b.stroke())
						}
						if (e.dead) {
							b.save();
							b.globalCompositeOperation = "lighter";
							t = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * e.dead_amt))) * Math.sin(Math.PI * e.dead_amt);
							w *= gsc;
							for (x = A - 1; 0 <= x; x--) 1 == pbu[x] && (px = pbx[x], py = pby[x], b.save(), b.globalAlpha = t * (.6 + .4 * Math.cos(x / 4 - 15 * e.dead_amt)), b.translate((px - view_xx) * gsc, (py - view_yy) * gsc), b.drawImage(kdmc, -w, -w, 2 * w, 2 * w), b.restore());
							b.restore()
						}
						b.restore()
					}
					x = 1 == render_mode ? 4 * B : 6 * B;
					w = 6 * B;
					A = Math.cos(E) * x + Math.cos(E - Math.PI / 2) * (w + .5);
					t = Math.sin(E) * x + Math.sin(E - Math.PI / 2) * (w + .5);
					b.fillStyle = e.ec;
					b.globalAlpha =
						e.eca * e.alive_amt;
					b.beginPath();
					b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, e.er * B * gsc, 0, pi2);
					b.closePath();
					b.fill();
					b.globalAlpha = e.ppa;
					A = Math.cos(E) * (x + .5) + e.rex * B + Math.cos(E - Math.PI / 2) * w;
					t = Math.sin(E) * (x + .5) + e.rey * B + Math.sin(E - Math.PI / 2) * w;
					b.fillStyle = e.ppc;
					b.beginPath();
					b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
					b.closePath();
					b.fill();
					A = Math.cos(E) * x + Math.cos(E + Math.PI / 2) * (w + .5);
					t = Math.sin(E) * x + Math.sin(E + Math.PI / 2) * (w + .5);
					b.fillStyle = e.ec;
					b.globalAlpha = e.eca *
						e.alive_amt;
					b.beginPath();
					b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, e.er * B * gsc, 0, pi2);
					b.closePath();
					b.fill();
					b.globalAlpha = e.ppa;
					A = Math.cos(E) * (x + .5) + e.rex * B + Math.cos(E + Math.PI / 2) * w;
					t = Math.sin(E) * (x + .5) + e.rey * B + Math.sin(E + Math.PI / 2) * w;
					b.fillStyle = e.ppc;
					b.beginPath();
					b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
					b.closePath();
					b.fill();
					b.globalAlpha = 1
				}
			if (high_quality || 0 < gla) {
				b.save();
				b.globalCompositeOperation = "lighter";
				for (q = foods_c - 1; 0 <= q; q--) e = foods[q], e.rx >= fpx1 &&
					e.ry >= fpy1 && e.rx <= fpx2 && e.ry <= fpy2 && (c = e.rx - view_xx, y = e.ry - view_yy, h = c * c + y * y, fs = 1 + .06 * e.rad, A = c * fs, t = y * fs, G = .005 + .09 * (1 - h / (86E3 + h)), 1 != e.rad && (G *= Math.pow(e.rad, .25)), 1 != gla && (G *= gla), A = A * gsc + mww2, t = t * gsc + mhh2, 1 == e.rad ? (A -= e.gfw2, t -= e.gfh2, b.globalAlpha = G * e.fr, b.drawImage(e.gfi, A, t), b.globalAlpha = G * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr, b.drawImage(e.gfi, A, t)) : (A -= e.gfw2 * e.rad, t -= e.gfh2 * e.rad, b.globalAlpha = G * e.fr, b.drawImage(e.gfi, 0, 0, e.gfw, e.gfh, A, t, e.gfw * e.rad, e.gfh * e.rad), b.globalAlpha = G * (.5 + .5 * Math.cos(e.gfr /
						13)) * e.fr, b.drawImage(e.gfi, 0, 0, e.gfw, e.gfh, A, t, e.gfw * e.rad, e.gfh * e.rad)), fs = 1 + .32 * e.rad, A = c * fs, t = y * fs, G = .085 * (1 - h / (16500 + h)), 1 != e.rad && (G *= Math.pow(e.rad, .25)), 1 != gla && (G *= gla), A = A * gsc + mww2, t = t * gsc + mhh2, 1 == e.rad ? (A -= e.g2fw2, t -= e.g2fh2, b.globalAlpha = G * e.fr, b.drawImage(e.g2fi, A, t), b.globalAlpha = G * (.5 + .5 * Math.cos(e.gfr / 13)) * e.fr, b.drawImage(e.g2fi, A, t)) : (A -= e.g2fw2 * e.rad, t -= e.g2fh2 * e.rad, b.globalAlpha = G * e.fr, b.drawImage(e.g2fi, 0, 0, e.g2fw, e.g2fh, A, t, e.g2fw * e.rad, e.g2fh * e.rad), b.globalAlpha = G * (.5 + .5 *
						Math.cos(e.gfr / 13)) * e.fr, b.drawImage(e.g2fi, 0, 0, e.g2fw, e.g2fh, A, t, e.g2fw * e.rad, e.g2fh * e.rad)));
				b.restore()
			}
			b.save();
			b.globalCompositeOperation = "lighter";
			for (q = preys.length - 1; 0 <= q; q--) h = preys[q], c = h.xx + h.fx, y = h.yy + h.fy, h.eaten && (e = h.eaten_by, f = Math.pow(h.eaten_fr, 2), c += (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - c) * f, y += (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * f) * (1 - f) - y) * f), c -= view_xx, y -= view_yy, e = c * c + y * y, fs = 1 + .08 * h.rad, px = c * fs, py = y * fs, G = .4 * (1 - e / (176E3 + e)), 1 != h.rad && (G *= Math.pow(h.rad, .25)), px =
				px * gsc + mww2, py = py * gsc + mhh2, 1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2, py -= h.gfh2, b.globalAlpha = G * h.fr, b.drawImage(h.gfi, px, py), b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad, py -= h.gfh2 * h.rad, b.globalAlpha = G * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad), b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)),
				fs = 1 + .32 * h.rad, px = c * fs, py = y * fs, G = .35 * (1 - e / (46500 + e)), 1 != h.rad && (G *= Math.pow(h.rad, .25)), e = 2 * h.rad, px = px * gsc + mww2, py = py * gsc + mhh2, -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * e, py -= h.gfh2 * e, b.globalAlpha = G * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * e, h.gfh * e), b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr, b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * e, h.gfh * e));
			b.restore();
			if (4E3 > Math.abs(grd - view_dist)) {
				b.save();
				b.lineWidth = 23 * gsc;
				b.strokeStyle = "#800000";
				b.fillStyle = "#300000";
				b.beginPath();
				xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
				yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
				b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
				for (x = -2E3; 2E3 >= x; x += 100) xx = grd + Math.cos(view_ang + x / grd) * grd * .98, yy = grd + Math.sin(view_ang + x / grd) * grd * .98, b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
				xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
				yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
				b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
				xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
				yy = grd +
					Math.sin(view_ang - 2E3 / grd) * (grd + 4E3);
				b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
				b.closePath();
				b.stroke();
				b.fill();
				b.restore()
			}
			wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1, e = "Your length", q = "of", G = "Your rank", "DE" == country ? (e = "Deine L\u00e4nge", q = "von", G = "Dein rang") : "FR" == country ? (e = "Votre longueur", q = "de", G = "Ton rang") : "BR" == country && (e = "Seu comprimento", q = "do", G = "Seu classifica\u00e7\u00e3o"), e = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + e + ': </span><span style="opacity: .8; font-weight: bold;">' +
				Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>"), e += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + q + ' </span><span style="opacity: .35;">' + snake_count + "</span>", lbf.innerHTML = e);
			b.restore()
		}
	},
	ww = window.innerWidth,
	hh = window.innerHeight,
	lww = 0,
	lhh = 0,
	csc, grd = 16384;

function resize() {
	ww = Math.ceil(window.innerWidth);
	hh = Math.ceil(window.innerHeight);
	if (ww != lww || hh != lhh) {
		lww = ww;
		lhh = hh;
		var b = 0;
		if (mbi) {
			var q = ww / 1245;
			mbi.width = 1245 * q;
			b = Math.ceil(260 * q);
			mbi.height = b;
			hh -= b
		}
		ww -= wsu;
		loch.style.bottom = 16 + b + "px";
		lbf.style.bottom = 4 + b + "px";
		lbh.style.right = 4 + wsu + "px";
		lbs.style.right = 4 + wsu + "px";
		lbn.style.right = 64 + wsu + "px";
		lbp.style.right = 230 + wsu + "px";
		loch.style.right = 16 + wsu + "px";
		plq.style.right = 10 + wsu + "px";
		clq.style.left = Math.floor(ww / 2 - 130) + "px";
		login.style.width = ww + "px";
		fbh.style.right =
			30 + wsu + "px";
		twth.style.right = 130 + wsu + "px";
		cstx.style.right = 240 + wsu + "px";
		grqh.style.right = 20 + wsu + "px";
		pskh.style.left = Math.round(.25 * ww - 44) + "px";
		nskh.style.left = Math.round(.75 * ww - 44) + "px";
		skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
		skodiv.style.top = Math.round(hh / 2 + 120) + "px";
		pskh.style.top = Math.round(hh / 2 - 44) + "px";
		nskh.style.top = Math.round(hh / 2 - 44) + "px";
		ldmc.style.left = ww / 2 - 64 + "px";
		ldmc.style.top = hh / 2 - 64 + "px";
		var q = Math.sqrt(ww * ww + hh * hh),
			b = Math.ceil(1400 * ww / q),
			e = Math.ceil(1400 * hh / q);
		1100 < b && (e = Math.ceil(1100 * e / b), b = 1100);
		1100 < e && (b = Math.ceil(1100 * b / e), e = 1100);
		lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
		q = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
		1 == q ? (trf(login, ""), login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px", trf(login, "scale(" + q + "," + q + ")"));
		if (mww != b || mhh != e) mww = b, mhh = e, mc.width = mww, mc.height = mhh, mwwp50 = mww + 50, mhhp50 = mhh + 50, mwwp150 = mww + 150, mhhp150 = mhh + 150, mww2 = mww / 2, mhh2 = mhh / 2, rdgbg();
		csc = Math.min(ww / mww, hh / mhh);
		trf(mc, "scale(" + csc + "," + csc + ")");
		mc.style.left =
			Math.floor(ww / 2 - mww / 2) + "px";
		mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
	}
	nbg.style.width = ww + "px";
	nbg.style.height = hh + "px";
	redraw()
}
window.onresize = function() { resize() };
for (i = ois.length - 1; 0 <= i; i--) ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function(b) {
	(b = b || window.event) && "undefined" != typeof b.clientX && (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2)
};

function setAcceleration(b) {
	if (null != snake) {
		snake.md = 1 == b;
		if (5 <= protocol_version) {
			var q = new Uint8Array(1);
			q[0] = 1 == b ? 253 : 254
		} else q = new Uint8Array(2), q[0] = 109, q[1] = b;
		ws.send(q)
	}
}
window.oncontextmenu = function(b) {
	b.preventDefault();
	b.stopPropagation();
	return !1
};
window.ontouchmove = function(b) {
	dmutm = Date.now() + 1500;
	null != snake && (b = b || window.event) && (b = b.touches[0], "undefined" != typeof b.clientX ? (xm = b.clientX - ww / 2, ym = b.clientY - hh / 2) : (xm = b.pageX - ww / 2, ym = b.pageY - hh / 2))
};
var dmutm = 0,
	ltchx = -1,
	ltchy = -1,
	ltchmtm = -1;
window.ontouchstart = function(b) {
	dmutm = Date.now() + 1500;
	if (null != snake) {
		if (b = b || window.event) {
			var q, e;
			e = b.touches[0];
			"undefined" != typeof e.clientX ? (q = e.clientX - ww / 2, e = e.clientY - hh / 2) : (q = e.pageX - ww / 2, e = e.pageY - hh / 2);
			var h = Date.now();
			24 > Math.abs(q - ltchx) && 24 > Math.abs(e - ltchy) && 400 > h - ltchmtm && setAcceleration(1);
			ltchx = q;
			ltchy = e;
			ltchmtm = h;
			xm = q;
			ym = e
		}
		b.preventDefault()
	}
};
window.onmousedown = function(b) {
	if (0 == dmutm || Date.now() > dmutm) dmutm = 0, null != snake && (window.onmousemove(b), setAcceleration(1), b.preventDefault())
};
window.ontouchend = function() { setAcceleration(0) };

function omu(b) { setAcceleration(0) }
window.addEventListener("mouseup", omu);
var mscps = 0,
	fmlts = [],
	fpsls = [],
	etm = 0,
	ws = null,
	tcsecs = 0,
	trdps = 0,
	rdps = 0,
	rfps = 0,
	rnps = 0,
	rsps = 0,
	reps = 0,
	rdpspc = [],
	anguc = 0,
	angnuc = 0,
	wangnuc = 0,
	lrd_mtm = Date.now(),
	locu_mtm = 0;
if (testing)
	for (i = 0; 256 > i; i++) rdpspc[i] = -1;
var pfs = [],
	pft = 0,
	pf1 = 0,
	pf2 = 0,
	rpf1, rpf2, pf_nap = 0,
	pf_ep = 0,
	rpft = 0,
	pf;
for (i = 0; 100 > i; i++) pfs.push(0);
var pf_add = 0,
	pf_new_add = 0,
	pf_remove = 0,
	tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++) tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"), pfd.style.position = "fixed", pfd.style.left = "4px", pfd.style.bottom = "69px", pfd.style.width = "170px", pfd.style.height = "364px", pfd.style.background = "rgba(0, 0, 0, .8)", pfd.style.color = "#80FF80", pfd.style.fontFamily = "Verdana", pfd.style.zIndex = 999999, pfd.style.fontSize = "11px", pfd.style.padding = "10px", pfd.style.borderRadius = "30px", pfd.textContent = "ayy lmao", document.body.appendChild(pfd));

function resetGame() {
	ws && (ws.close(), ws = null);
	snake = null;
	want_close_socket = !1;
	snakes = [];
	foods = [];
	foods_c = 0;
	preys = [];
	sectors = [];
	os = {};
	rank = 0;
	best_rank = 999999999;
	biggest_snake_count = snake_count = 0;
	lagging = wfpr = playing = connected = !1;
	for (j = vfc - 1; 0 <= j; j--) fvxs[j] = 0, fvys[j] = 0;
	fvy = fvx = fvtg = 0;
	lag_mult = 1;
	cptm = 0;
	gsc = sgsc
}
var protocol_version = 2,
	connecting = !1,
	start_connect_mtm, play_btn_click_mtm = -1,
	waiting_for_sos = !1,
	sos_ready_after_mtm = -1;

function connect() {
	if (0 == sos.length) waiting_for_sos || (waiting_for_sos = !0, sos_ready_after_mtm = -1);
	else {
		waiting_for_sos = !1;
		sos_ready_after_mtm = -1;
		resetGame();
		connecting = !0;
		start_connect_mtm = Date.now();
		if (!forcing) {
			for (var b = 0; b < sos.length; b++) sos[b].ptm = 9999999;
			for (b = clus.length - 1; 0 <= b; b--) {
				var q = clus[b];
				if (q && 0 < q.ptms.length) {
					for (var e = 0, h = q.ptms.length - 1; 0 <= h; h--) e += q.ptms[h];
					e /= q.ptms.length;
					testing && console.log("cluster " + b + " ping time: " + e);
					for (h = sos.length - 1; 0 <= h; h--) sos[h].clu == b && (sos[h].ptm =
						e)
				}
			}
			if ("undefined" != typeof rmsos)
				for (b = 0; b < rmsos.length; b++)
					for (q = "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2], e = rmsos[b].a[3], h = sos.length - 1; 0 <= h; h--) 0 <= sos[h].ip.indexOf(q) && sos[h].po == e && sos.splice(h, 1);
			sos.sort(function(b, f) {
				return parseFloat(b.po) - parseFloat(f.po)
			});
			bso = sos[Math.floor(Math.random() * sos.length)];
			for (b = sos.length - 1; 0 <= b; b--) sos[b].tainted || sos[b].ptm <= bso.ptm && 30 < sos[b].ac && (bso = sos[b])
		}
		ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
		ws.binaryType = "arraybuffer";
		window.ws = ws;
		ws.onmessage = function(b) {
			if (ws == this && (b = new Uint8Array(b.data), rdps += b.length, 2 <= b.length)) {
				lptm = cptm;
				cptm = Date.now();
				var f = b[0] << 8 | b[1],
					c = cptm - lptm;
				0 == lptm && (c = 0);
				etm += c - f;
				testing && (rdpspc[b[2]] += b.length);
				var e = String.fromCharCode(b[2]),
					f = 3,
					h = b.length,
					c = b.length - 2,
					q = b.length - 3;
				if ("a" == e) connecting = !1, playing = connected = !0, play_btn_click_mtm = -1, grd = b[f] << 16 | b[f + 1] << 8 | b[f + 2], f += 3, c = b[f] << 8 | b[f + 1], f += 2, sector_size = b[f] << 8 | b[f + 1], f += 2, sector_count_along_edge = b[f] << 8 | b[f + 1], f += 2, spangdv =
					b[f] / 10, f++, nsp1 = (b[f] << 8 | b[f + 1]) / 100, f += 2, nsp2 = (b[f] << 8 | b[f + 1]) / 100, f += 2, nsp3 = (b[f] << 8 | b[f + 1]) / 100, f += 2, mamu = (b[f] << 8 | b[f + 1]) / 1E3, f += 2, mamu2 = (b[f] << 8 | b[f + 1]) / 1E3, f += 2, cst = (b[f] << 8 | b[f + 1]) / 1E3, f += 2, f < h && (protocol_version = b[f]), setMscps(c), lbh.style.display = "inline", lbs.style.display = "inline", lbn.style.display = "inline", lbp.style.display = "inline", lbf.style.display = "inline", vcm.style.display = "inline", loch.style.display = "inline", startShowGame();
				else if ("e" == e || "E" == e || "3" == e || "4" == e || "5" == e) {
					var w = b[f] <<
						8 | b[f + 1],
						f = f + 2,
						D = h = -1,
						x = -1,
						A = -1;
					if (6 <= protocol_version) 6 == c ? (h = "e" == e ? 1 : 2, D = 2 * b[f] * Math.PI / 256, f++, x = 2 * b[f] * Math.PI / 256, f++, A = b[f] / 18) : 5 == c ? "e" == e ? (D = 2 * b[f] * Math.PI / 256, f++, A = b[f] / 18) : "E" == e ? (h = 1, x = 2 * b[f] * Math.PI / 256, f++, A = b[f] / 18) : "4" == e ? (h = 2, x = 2 * b[f] * Math.PI / 256, f++, A = b[f] / 18) : "3" == e ? (h = 1, D = 2 * b[f] * Math.PI / 256, f++, x = 2 * b[f] * Math.PI / 256) : "5" == e && (h = 2, D = 2 * b[f] * Math.PI / 256, f++, x = 2 * b[f] * Math.PI / 256) : 4 == c && ("e" == e ? D = 2 * b[f] * Math.PI / 256 : "E" == e ? (h = 1, x = 2 * b[f] * Math.PI / 256) : "4" == e ? (h = 2, x = 2 * b[f] * Math.PI / 256) :
						"3" == e && (A = b[f] / 18));
					else if (3 <= protocol_version) {
						"3" != e && (8 == c || 7 == c || 6 == c && "3" != e || 5 == c && "3" != e) && (h = "e" == e ? 1 : 2);
						if (8 == c || 7 == c || 5 == c && "3" == e || 6 == c && "3" == e) D = 2 * (b[f] << 8 | b[f + 1]) * Math.PI / 65535, f += 2;
						if (8 == c || 7 == c || 5 == c && "3" != e || 6 == c && "3" != e) x = 2 * (b[f] << 8 | b[f + 1]) * Math.PI / 65535, f += 2;
						if (8 == c || 6 == c || 4 == c) A = b[f] / 18
					} else {
						if (11 == q || 8 == q || 9 == q || 6 == q) h = b[f] - 48, f++;
						if (11 == q || 7 == q || 9 == q || 5 == q) D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3;
						if (11 == q || 8 == q || 9 == q || 6 == q) x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI /
							16777215, f += 3;
						if (11 == q || 7 == q || 8 == q || 4 == q) A = (b[f] << 8 | b[f + 1]) / 1E3
					}
					var t = os["s" + w];
					if (t) {
						-1 != h && (t.dir = h);
						anguc++;
						if (-1 != D) {
							t.ang == D && angnuc++;
							b = (D - t.ang) % pi2;
							0 > b && (b += pi2);
							b > Math.PI && (b -= pi2);
							w = t.fapos;
							for (q = 0; q < afc; q++) t.fas[w] -= b * afas[q], w++, w >= afc && (w = 0);
							t.fatg = afc;
							t.ang = D
						} - 1 != x && (t.wang == x && wangnuc++, t.wang = x, t != snake && (t.eang = x)); - 1 != A && (t.sp = A, t.spang = t.sp / spangdv, 1 < t.spang && (t.spang = 1))
					}
				} else if ("h" == e) {
					var w = b[f] << 8 | b[f + 1],
						f = f + 2,
						I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
					if (t = os["s" + w]) t.fam = I,
						snl(t)
				} else if ("r" == e) {
					if (w = b[f] << 8 | b[f + 1], f += 2, t = os["s" + w]) {
						4 <= q && (t.fam = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215);
						for (q = 0; q < t.pts.length; q++)
							if (!t.pts[q].dying) {
								t.pts[q].dying = !0;
								t.sct--;
								t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
								t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
								t.ssp = nsp1 + nsp2 * t.sc;
								t.fsp = t.ssp + .1;
								t.wsep = 6 * t.sc;
								b = nsep / gsc;
								t.wsep < b && (t.wsep = b);
								break
							}
						snl(t)
					}
				} else if ("g" == e || "n" == e || "G" == e || "N" == e) {
					if (playing && (I = "n" == e || "N" == e, w = b[f] << 8 | b[f + 1], f += 2, t = os["s" + w])) {
						if (I) t.sct++;
						else
							for (q = 0; q < t.pts.length; q++)
								if (!t.pts[q].dying) {
									t.pts[q].dying = !0;
									break
								} var z = t.pts[t.pts.length - 1],
							q = z,
							h = !1;
						3 <= protocol_version ? "g" == e || "n" == e ? (c = b[f] << 8 | b[f + 1], f += 2, C = b[f] << 8 | b[f + 1], f += 2) : (c = q.xx + b[f] - 128, f++, C = q.yy + b[f] - 128, f++) : (c = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5, f += 3, C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5, f += 3);
						I && (t.fam = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215);
						(z = points_dp.get()) || (z = { exs: [], eys: [], efs: [], ems: [] });
						z.eiu = 0;
						z.xx = c;
						z.yy = C;
						z.fx = 0;
						z.fy = 0;
						z.da = 0;
						z.ebx = z.xx - q.xx;
						z.eby = z.yy - q.yy;
						t.pts.push(z);
						h = !0;
						t.iiv && (b = t.xx + t.fx - z.xx, f = t.yy + t.fy - z.yy, z.fx += b, z.fy += f, z.exs[z.eiu] =
							b, z.eys[z.eiu] = f, z.efs[z.eiu] = 0, z.ems[z.eiu] = 1, z.eiu++);
						w = t.pts.length - 3;
						if (1 <= w)
							for (D = t.pts[w], e = n = 0, q = w - 1; 0 <= q; q--) w = t.pts[q], n++, b = w.xx, f = w.yy, 4 >= n && (e = cst * n / 4), w.xx += (D.xx - w.xx) * e, w.yy += (D.yy - w.yy) * e, t.iiv && (b -= w.xx, f -= w.yy, w.fx += b, w.fy += f, w.exs[w.eiu] = b, w.eys[w.eiu] = f, w.efs[w.eiu] = 0, w.ems[w.eiu] = 2, w.eiu++), D = w;
						t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
						t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
						t.ssp = nsp1 + nsp2 * t.sc;
						t.fsp = t.ssp + .1;
						t.wsep = 6 * t.sc;
						b = nsep / gsc;
						t.wsep < b && (t.wsep = b);
						I && snl(t);
						t.lnp = z;
						t == snake && (ovxx =
							snake.xx + snake.fx, ovyy = snake.yy + snake.fy);
						z = etm / 8 * t.sp / 4;
						z *= lag_mult;
						q = t.chl - 1;
						t.chl = z / t.msl;
						e = t.xx;
						w = t.yy;
						t.xx = c + Math.cos(t.ang) * z;
						t.yy = C + Math.sin(t.ang) * z;
						b = t.xx - e;
						f = t.yy - w;
						c = t.chl - q;
						w = t.fpos;
						for (q = 0; q < rfc; q++) t.fxs[w] -= b * rfas[q], t.fys[w] -= f * rfas[q], t.fchls[w] -= c * rfas[q], w++, w >= rfc && (w = 0);
						t.fx = t.fxs[t.fpos];
						t.fy = t.fys[t.fpos];
						t.fchl = t.fchls[t.fpos];
						t.ftg = rfc;
						h && (t.ehl = 0);
						if (t == snake) {
							view_xx = snake.xx + snake.fx;
							view_yy = snake.yy + snake.fy;
							b = view_xx - ovxx;
							f = view_yy - ovyy;
							w = fvpos;
							for (q = 0; q < vfc; q++) fvxs[w] -=
								b * vfas[q], fvys[w] -= f * vfas[q], w++, w >= vfc && (w = 0);
							fvtg = vfc
						}
					}
				} else if ("l" == e) {
					if (playing) {
						wumsts = !0;
						D = z = C = "";
						A = x = 0; - 1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
						var L = b[f];
						f++;
						rank = b[f] << 8 | b[f + 1];
						rank < best_rank && (best_rank = rank);
						f += 2;
						snake_count = b[f] << 8 | b[f + 1];
						snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
						for (f += 2; f < h;) {
							var J = b[f] << 8 | b[f + 1],
								f = f + 2,
								I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215,
								f = f + 3,
								t = b[f] % 9;
							f++;
							c = b[f];
							f++;
							A++;
							e = "";
							for (q = 0; q < c; q++) w = b[f], e += String.fromCharCode(w), f++;
							A != L && (gdnm(e) ||
								(e = ""));
							for (var H = "", q = 0; q < c; q++) w = e.charCodeAt(q), H = 38 == w ? H + "&amp;" : 60 == w ? H + "&lt;" : 62 == w ? H + "&gt;" : 32 == w ? H + "&nbsp;" : H + String.fromCharCode(w);
							e = H;
							x++;
							score = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
							w = A == L ? 1 : .7 * (.3 + .7 * (1 - x / 10));
							C += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">' + score + "</span><BR>";
							z += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + e + "</span><BR>";
							D += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">#' +
								x + "</span><BR>"
						}
						lbs.innerHTML = C;
						lbn.innerHTML = z;
						lbp.innerHTML = D
					}
				} else if ("v" == e) 2 == b[f] ? (want_close_socket = !0, want_victory_message = !1, want_hide_victory = 1, hvfr = 0) : (dead_mtm = Date.now(), play_btn.setEnabled(!0), c = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10, twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + c + " in http://slither.io! Can you beat that? #slitherio"), C = "Your final length was", "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" :
					"FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"), h = "", 1E3 < c && (h = "!"), lastscore.innerHTML = '<span style="opacity: .45;">' + C + " </span><b>" + c + "</b>" + h, c = "Play Again", "FR" == country ? c = "Jouer" : "BR" == country && (c = "Joga"), play_btn.setText(String.fromCharCode(160) + c + String.fromCharCode(160)), 1 == b[f] ? (nick_holder.style.display = "none", playh.style.display = "none", smh.style.display = "none", victory_holder.style.display = "inline", saveh.style.display = "block", want_victory_focus =
						want_victory_message = !0, victory.disabled = !1, save_btn.setEnabled(!0)) : want_close_socket = !0);
				else if ("w" == e)
					if (h = b[f], f++, c = b[f] << 8 | b[f + 1], f += 2, C = b[f] << 8 | b[f + 1], 1 == h) t = {}, t.xx = c, t.yy = C, sectors.push(t);
					else {
						for (z = cm1 = foods_c - 1; 0 <= z; z--) q = foods[z], q.sx == c && q.sy == C && (z == cm1 ? foods[z] = null : (foods[z] = foods[cm1], foods[cm1] = null), foods_c--, cm1--);
						for (z = sectors.length - 1; 0 <= z; z--) t = sectors[z], t.xx == c && t.yy == C && sectors.splice(z, 1)
					}
				else if ("m" == e) {
					J = b[f] << 16 | b[f + 1] << 8 | b[f + 2];
					f += 3;
					I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) /
						16777215;
					f += 3;
					C = Math.floor(150 * (fpsls[J] + I / fmlts[J] - 1) - 50) / 10;
					c = b[f];
					f++;
					q = "";
					for (z = 0; z < c; z++) q += String.fromCharCode(b[f]), f++;
					for (c = ""; f < h;) c += String.fromCharCode(b[f]), f++;
					q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
					c = c.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
					0 < C && (b = "", 0 < c.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + c + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
						0 < q.length ? (b = 0 < c.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + q + "</b></span></i>", b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b = 0 < c.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" +
						("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"), vcm.innerHTML = b)
				} else if ("p" == e) wfpr = !1, lagging && (etm *= lag_mult, lagging = !1);
				else if ("u" == e) {
					q = asmc.getContext("2d");
					q.clearRect(0, 0, 80, 80);
					q.fillStyle = "#FFFFFF";
					for (var C = c = 0; f < h && !(80 <= C);)
						if (w = b[f++], 128 <= w)
							for (w -= 128, z = 0; z < w && !(c++, 80 <= c && (c = 0, C++, 80 <= C)); z++);
						else
							for (z =
								0; 7 > z && !(0 < (w & u_m[z]) && q.fillRect(c, C, 1, 1), c++, 80 <= c && (c = 0, C++, 80 <= C)); z++);
				} else if ("s" == e) {
					if (playing)
						if (w = b[f] << 8 | b[f + 1], f += 2, 6 < q) {
							D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215;
							f += 3;
							f++;
							x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215;
							f += 3;
							A = (b[f] << 8 | b[f + 1]) / 1E3;
							f += 2;
							I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
							f += 3;
							t = b[f];
							f++;
							L = [];
							J = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5;
							f += 3;
							H = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5;
							f += 3;
							c = b[f];
							f++;
							e = "";
							for (q = 0; q < c; q++) e += String.fromCharCode(b[f]), f++;
							for (var M = q = C = c = 0, O = !1; f < h;) q =
								c, M = C, O ? (c += (b[f] - 127) / 2, f++, C += (b[f] - 127) / 2, f++) : (c = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5, f += 3, C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5, f += 3, q = c, M = C, O = !0), (z = points_dp.get()) || (z = { exs: [], eys: [], efs: [], ems: [] }), z.eiu = 0, z.xx = c, z.yy = C, z.fx = 0, z.fy = 0, z.da = 0, z.ebx = c - q, z.eby = C - M, L.push(z);
							t = newSnake(w, J, H, t, D, L);
							null == snake ? (view_xx = c, view_yy = C, snake = t, t.nk = my_nick) : (t.nk = e, gdnm(e) || (t.nk = ""));
							t.eang = t.wang = x;
							t.sp = A;
							t.spang = t.sp / spangdv;
							1 < t.spang && (t.spang = 1);
							t.fam = I;
							t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
							t.scang = .13 + .87 * Math.pow((7 -
								t.sc) / 6, 2);
							t.ssp = nsp1 + nsp2 * t.sc;
							t.fsp = t.ssp + .1;
							t.wsep = 6 * t.sc;
							b = nsep / gsc;
							t.wsep < b && (t.wsep = b);
							t.sep = t.wsep;
							snl(t)
						} else
							for (b = 1 == b[f], z = snakes.length - 1; 0 <= z; z--)
								if (snakes[z].id == w) {
									snakes[z].id = -1234;
									b ? (snakes[z].dead = !0, snakes[z].dead_amt = 0, snakes[z].edir = 0) : snakes.splice(z, 1);
									delete os["s" + w];
									break
								}
				} else if ("F" == e)
					if (4 <= protocol_version) {
						for (e = !1; f < h;) t = b[f], f++, c = b[f] << 8 | b[f + 1], f += 2, C = b[f] << 8 | b[f + 1], f += 2, q = b[f] / 5, f++, w = C * grd * 3 + c, q = newFood(w, c, C, q, !0, t), e || (e = !0, z = Math.floor(c / sector_size), I = Math.floor(C /
							sector_size)), q.sx = z, q.sy = I;
						t = {};
						t.xx = z;
						t.yy = I;
						sectors.push(t)
					} else
						for (z = b[f] << 8 | b[f + 1], f += 2, I = b[f] << 8 | b[f + 1], f += 2, t = {}, t.xx = z, t.yy = I, sectors.push(t); f < h;) w = b[f] << 16 | b[f + 1] << 8 | b[f + 2], f += 3, t = b[f], f++, c = sector_size * (z + b[f] / 255), f++, C = sector_size * (I + b[f] / 255), f++, q = b[f] / 5, f++, q = newFood(w, c, C, q, !0, t), q.sx = z, q.sy = I;
				else if ("b" == e || "f" == e) 4 <= protocol_version ? (t = b[f], f++, 4 < q && (c = b[f] << 8 | b[f + 1], f += 2, C = b[f] << 8 | b[f + 1], w = C * grd * 3 + c, q = b[f + 2] / 5, q = newFood(w, c, C, q, "b" == e, t), q.sx = Math.floor(c / sector_size), q.sy = Math.floor(C /
					sector_size))) : (w = b[f] << 16 | b[f + 1] << 8 | b[f + 2], f += 3, 4 < q && (t = b[f], f++, z = b[f] << 8 | b[f + 1], f += 2, I = b[f] << 8 | b[f + 1], f += 2, c = sector_size * (z + b[f] / 255), f++, C = sector_size * (I + b[f] / 255), f++, q = b[f] / 5, q = newFood(w, c, C, q, "b" == e, t), q.sx = z, q.sy = I));
				else if ("c" == e) {
					4 <= protocol_version ? (c = b[f] << 8 | b[f + 1], f += 2, C = b[f] << 8 | b[f + 1], f += 2, w = C * grd * 3 + c) : (w = b[f] << 16 | b[f + 1] << 8 | b[f + 2], f += 3);
					for (z = cm1 = foods_c - 1; 0 <= z; z--)
						if (q = foods[z], q.id == w) {
							q.eaten = !0;
							f + 2 <= h ? (b = b[f] << 8 | b[f + 1], q.eaten_by = os["s" + b], q.eaten_fr = 0) : (z == cm1 ? foods[z] = null : (foods[z] =
								foods[cm1], foods[cm1] = null), foods_c--, cm1--);
							w = -1;
							break
						} - 1 != w && console.log("wtf")
				} else if ("j" == e) {
					w = b[f] << 8 | b[f + 1];
					f += 2;
					c = 1 + 3 * (b[f] << 8 | b[f + 1]);
					f += 2;
					C = 1 + 3 * (b[f] << 8 | b[f + 1]);
					f += 2;
					h = null;
					for (z = preys.length - 1; 0 <= z; z--)
						if (preys[z].id == w) {
							h = preys[z];
							break
						}
					if (h) {
						z = etm / 8 * h.sp / 4;
						z *= lag_mult;
						e = h.xx;
						w = h.yy;
						15 == q ? (h.dir = b[f] - 48, f++, h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3, h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3, h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 11 == q ? (h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f +
							2]) * Math.PI / 16777215, f += 3, h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 12 == q ? (h.dir = b[f] - 48, f++, h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3, h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 13 == q ? (h.dir = b[f] - 48, f++, h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3, h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215) : 9 == q ? h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215 : 10 == q ? (h.dir = b[f] - 48, f++, h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215) : 8 == q && (h.sp = (b[f] << 8 | b[f + 1]) / 1E3);
						h.xx = c + Math.cos(h.ang) * z;
						h.yy =
							C + Math.sin(h.ang) * z;
						b = h.xx - e;
						f = h.yy - w;
						w = h.fpos;
						for (q = 0; q < rfc; q++) h.fxs[w] -= b * rfas[q], h.fys[w] -= f * rfas[q], w++, w >= rfc && (w = 0);
						h.fx = h.fxs[h.fpos];
						h.fy = h.fys[h.fpos];
						h.ftg = rfc
					}
				} else if ("y" == e)
					if (w = b[f] << 8 | b[f + 1], f += 2, 2 == q)
						for (z = preys.length - 1; 0 <= z; z--) {
							if (h = preys[z], h.id == w) {
								preys.splice(z, 1);
								break
							}
						} else if (4 == q)
							for (b = b[f] << 8 | b[f + 1], z = preys.length - 1; 0 <= z; z--) {
								if (h = preys[z], h.id == w) {
									h.eaten = !0;
									h.eaten_by = os["s" + b];
									h.eaten_by ? h.eaten_fr = 0 : preys.splice(z, 1);
									break
								}
							} else t = b[f], f++, c = (b[f] << 16 | b[f + 1] << 8 | b[f +
								2]) / 5, f += 3, C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5, f += 3, q = b[f] / 5, f++, h = b[f] - 48, f++, x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3, D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215, f += 3, A = (b[f] << 8 | b[f + 1]) / 1E3, newPrey(w, c, C, q, t, h, x, D, A)
			}
		};
		ws.onerror = function(b) {};
		ws.onclose = function(b) { ws == this && (playing = connected = !1) };
		ws.onopen = function(b) {
			if (ws == this) {
				b = asciize(nick.value);
				24 < b.length && (b = b.substr(0, 24));
				my_nick = b;
				gdnm(b) || (b = "");
				var e = Math.floor(9 * Math.random());
				try {
					var c = localStorage.snakercv;
					c ==
						"" + Number(c) && (e = Number(c))
				} catch (h) {}
				c = new Uint8Array(3 + b.length);
				c[0] = 115;
				c[1] = 5;
				c[2] = e;
				for (e = 0; e < b.length; e++) c[e + 3] = b.charCodeAt(e);
				ws.send(c);
				high_quality = !0;
				gla = 1;
				wdfg = 0;
				qsm = 1;
				0 == want_quality && (high_quality = !1, gla = 0, qsm = 1.7);
				1 == render_mode && (high_quality = !1, gla = 0);
				lpstm = Date.now()
			}
		}
	}
}

function asciize(b) {
	var q, e, h;
	e = b.length;
	var u = !1;
	for (q = 0; q < e; q++)
		if (h = b.charCodeAt(q), 32 > h || 127 < h) {
			u = !0;
			break
		}
	if (u) {
		u = "";
		for (q = 0; q < e; q++) h = b.charCodeAt(q), u = 32 > h || 127 < h ? u + " " : u + String.fromCharCode(h);
		return u
	}
	return b
}
var smh = document.getElementById("smh"),
	cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try { "1" != localStorage.edttsg && (cstx.style.display = "inline") } catch (b) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() { localStorage.edttsg = "1" };
var fbh = document.getElementById("fbh"),
	twt = document.getElementById("twt");
twt.onclick = function() { localStorage.edttsg = "1" };
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth"),
	csk = document.getElementById("csk"),
	cskh = document.getElementById("cskh"),
	want_quality = 1,
	grq = document.getElementById("grq"),
	grqh = document.getElementById("grqh"),
	phqi = document.createElement("img"),
	grqi = document.getElementById("grqi");
try { "0" == localStorage.qual ? (grqi.src = "/s/lowquality.png", want_quality = 0) : (phqi.src = "/s/lowquality.png", want_quality = 1) } catch (b) {}
grq.onclick = function() {
	try { "0" == localStorage.qual ? (localStorage.qual = "1", grqi.src = "/s/highquality.png", want_quality = 1) : (localStorage.qual = "0", grqi.src = "/s/lowquality.png", want_quality = 0) } catch (b) {}
	return !1
};
var plq = document.getElementById("plq"),
	clq = document.getElementById("clq");
try { "1" == localStorage.edttsg && (cskh.style.display = "inline") } catch (b) {}
var psk = document.getElementById("psk"),
	pskh = document.getElementById("pskh"),
	nsk = document.getElementById("nsk"),
	nskh = document.getElementById("nskh"),
	choosing_skin = !1;
psk.onclick = function() {
	if (playing && null != snake) {
		var b = snake.rcv;
		b--;
		0 > b && (b = max_skin_cv);
		setSkin(snake, b)
	}
	return !1
};
nsk.onclick = function() {
	if (playing && null != snake) {
		var b = snake.rcv;
		b++;
		b > max_skin_cv && (b = 0);
		setSkin(snake, b)
	}
	return !1
};
csk.onclick = function() {
	if (!playing && -1 == dead_mtm) {
		resetGame();
		choosing_skin = !0;
		pskh.style.opacity = 0;
		nskh.style.opacity = 0;
		skodiv.style.opacity = 0;
		pskh.style.display = "inline";
		nskh.style.display = "inline";
		skodiv.style.display = "inline";
		skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
		nick.disabled = !0;
		0 == mscps && setMscps(300);
		for (var b = [], q = 22; 1 <= q; q--) b.push({ xx: grd / 2 - 10 * q, yy: grd / 2, fx: 0, fy: 0, exs: [], eys: [], efs: [], ems: [], eiu: 0, da: 0, ebx: 10, eby: 0 });
		q = 0;
		try {
			var e = localStorage.snakercv;
			e == "" + Number(e) &&
				(q = Number(e))
		} catch (h) {}
		b = newSnake(1, grd / 2, grd / 2, q, 0, b);
		view_xx = grd / 2 - 105;
		view_yy = grd / 2;
		snake = b;
		b.nk = "";
		b.eang = b.wang = b.ang;
		b.sp = 4.8;
		b.spang = b.sp / spangdv;
		1 < b.spang && (b.spang = 1);
		b.sc = 1;
		b.scang = 1;
		b.ssp = nsp1 + nsp2 * b.sc;
		b.fsp = b.ssp + .1;
		b.wsep = 6 * b.sc;
		e = nsep / gsc;
		b.wsep < e && (b.wsep = e);
		b.sep = b.wsep;
		snl(b);
		b.alive_amt = 1;
		b.rex = 1.66;
		ws = { send: function(b) {}, close: function() {} };
		high_quality = playing = connected = !0;
		gla = 1;
		wdfg = 0;
		qsm = 1;
		startShowGame();
		lbh.style.display = "none";
		lbs.style.display = "none";
		lbn.style.display =
			"none";
		lbp.style.display = "none";
		lbf.style.display = "none";
		vcm.style.display = "none";
		loch.style.display = "none"
	}
	return !1
};
nick.oninput = function() {
	var b = this.value,
		q = asciize(b);
	24 < q.length && (q = q.substr(0, 24));
	b != q && (this.value = q)
};
victory.oninput = function() {
	var b = this.value,
		q = asciize(b);
	140 < q.length && (q = q.substr(0, 140));
	b != q && (this.value = q)
};
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas"),
	lmc = document.createElement("canvas"),
	lgsc = 1,
	lw = 900,
	lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d"),
	lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({ pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173], kc: 22, ws: 4, wr: .025, qm: .025, sp: .06, sz: 11 }, { pts: [150, 30, 150, 107, 150, 184], kc: 66, ws: 4, wr: .05, qm: .025, sp: .06, sz: 11 }, { pts: [207, 96, 207, 140, 207, 184], kc: 46, ws: 4, wr: .03, qm: .035, sp: .06, sz: 11 }, { pts: [207, 47, 207, 48.5, 207, 50], kc: 11, ws: 2, wr: .06, qm: .05, sp: .06, sz: 15, r: .5 }, { pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186], kc: 66, ws: 6, wr: -.025, qm: -.0125, sp: .06, sz: 11, r: 1.5 }, {
	pts: [243, 94, 268, 94, 293, 94],
	kc: 66,
	ws: 4,
	wr: .015,
	qm: .025,
	sp: .06,
	sz: 9,
	r: 1.2
}, { pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184], kc: 46, ws: 4, wr: .005, qm: .02, sp: .06, sz: 11, r: 2.1 }, { pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139], kc: 35, ws: 6, wr: -.013, qm: -.025, sp: .06, sz: 11, r: 1.3 }, { pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109], kc: 38, ws: 4, wr: .01, qm: -.035, sp: .06, sz: 11 }, { pts: [663, 177, 663, 178.5, 663, 180], kc: 11, ws: 2, wr: .06, qm: .05, sp: .06, sz: 15 }, {
	pts: [717,
		96, 717, 140, 717, 184
	],
	kc: 33,
	ws: 4,
	wr: .06,
	qm: .05,
	sp: .06,
	sz: 11
}, { pts: [717, 47, 717, 48.5, 717, 50], kc: 11, ws: 2, wr: .06, qm: .05, sp: .06, sz: 15 }, { pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186], kc: 43, ws: 4, wr: 0, qm: .0274, sp: .073, sz: 11, r: 1.5 });
for (i = 0; i < lts.length; i++) lts[i].mwig = 5;
var lga = 0,
	lgss = 0,
	ncka = 0,
	mwig = 4,
	lgfr = 0,
	lgtm = Date.now();

function showLogo(b) {
	var q = Date.now(),
		e = (q - lgtm) / 25;
	lgtm = q;
	var h, u, f, c, y, E, B, w, D, x, A, t, I, z, L;
	lgfr += e;
	if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka) clearInterval(showlogo_iv), showlogo_iv = -1;
	else {
		if (b || 1 != lga) lga += .05 * e, 1 <= lga && (lga = 1), lmc2.style.opacity = lga;
		1 != lgss && (lgss += .00375 * e, 1 <= lgss && (lgss = 1));
		if (b || 1 != ncka) ncka += .006 * e, 1 <= ncka && (ncka = 1), nick_holder.style.opacity = Math.min(1, 6 * ncka), is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))), .01 <= ncka && (playh.style.opacity = Math.min(1,
			5 * (ncka - .01)));
		lctx.clearRect(0, 0, lw, lh);
		for (q = 0; q < lts.length; q++) {
			var J = lts[q],
				H = J.pts,
				C = J.kc,
				M = J.ws,
				O = J.wr,
				N = J.qm;
			h = J.sp;
			var K = J.sz;
			L = J.r;
			var F = J.mwig;
			b && (J.wch = !0, F = 1E-7);
			J.wch && 0 != F && (F *= .982, F -= .001 * e, 1 == render_mode && (F -= .005 * e), 0 >= F && (F = 0), J.mwig = F);
			L || (L = 1);
			lctx.beginPath();
			9 > q ? (f = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc), f.addColorStop(0, "#80FFA0"), f.addColorStop(1, "#008040")) : (f = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc), f.addColorStop(0, "#9850FF"), f.addColorStop(1, "#281060"));
			lctx.fillStyle =
				f;
			I = !1;
			z = 0;
			f = H[0];
			c = H[1];
			D = f;
			x = c;
			var G = lgfr * h;
			for (A = 2; A < H.length; A += 4) {
				h = f;
				u = c;
				cx2 = H[A];
				cy2 = H[A + 1];
				f = H[A + 2];
				c = H[A + 3];
				for (var Q = 1; Q <= C; Q++) {
					z++;
					var P = Q / C;
					y = h + (cx2 - h) * P;
					E = u + (cy2 - u) * P;
					B = cx2 + (f - cx2) * P;
					w = cy2 + (c - cy2) * P;
					y += (B - y) * P;
					E += (w - E) * P;
					D = Math.atan2(E - x, y - D);
					I ? (D - t > Math.PI ? D -= 2 * Math.PI : D - t < -Math.PI && (D += 2 * Math.PI), t += .05 * (D - t), t %= 2 * Math.PI) : (I = !0, t = D);
					D = y;
					x = E;
					y += Math.cos(Math.PI / 2 + t) * Math.sin(G) * M * F;
					E += Math.sin(Math.PI / 2 + t) * Math.sin(G) * M * F;
					G -= .76 * N * M;
					M += O;
					lctx.beginPath();
					w = 1.15 * K * Math.min(1, lgsc * (.2 +
						.8 * lga) * (30 * lgss * L - z / 20 - q / 2));
					.5 < w && (lctx.arc(y * lgsc, E * lgsc, w, 0, pi2), J.wch = !0);
					lctx.fill()
				}
			}
		}
		lctx2.clearRect(0, 0, lw, lh);
		lctx2.shadowColor = "#000000";
		lctx2.shadowBlur = 16;
		lctx2.shadowOffsetY = 7;
		lctx2.drawImage(lmc, 0, 0)
	}
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1, showLogo(!0)) : showlogo_iv = setInterval("showLogo(false)", 25);
document.onkeydown = function(b) {
	b = b || window.event;
	var q = b.keyCode;
	if (37 == q) kd_l = !0;
	else if (39 == q) kd_r = !0;
	else if (38 == q || 32 == q) kd_u = !0, setAcceleration(1);
	else if (13 == q || 10 == q)
		if (want_victory_message) {
			if (0 < victory.value.length) save_btn.elem.onclick()
		} else {
			if (!connecting && !connected) play_btn.elem.onclick()
		}
	else 16 == q && testing && (shifty = !0);
	testing && console.log("keydown: " + b.keyCode)
};
document.onkeyup = function(b) {
	b = b || window.event;
	b = b.keyCode;
	37 == b ? kd_l = !1 : 39 == b ? kd_r = !1 : 38 == b || 32 == b ? (kd_u = !1, setAcceleration(0)) : 16 == b && testing && (shifty = !1)
};

function loadSos(b) {
	if (!forcing && 0 < b.length) {
		sos = [];
		clus = [];
		b.charAt(0);
		for (var q = 1, e = {}, h = 0, e = h = 0, u, f = 0, c = 0, y = [], E = [], B = [], w = []; q < b.length;)
			if (u = (b.charCodeAt(q++) - 97 - c) % 26, 0 > u && (u += 26), f *= 16, f += u, c += 7, 1 == e) {
				if (0 == h) y.push(f), 4 == y.length && h++;
				else if (1 == h) E.push(f), 3 == E.length && h++;
				else if (2 == h) B.push(f), 3 == B.length && h++;
				else if (3 == h && (w.push(f), 1 == w.length)) {
					e = {};
					for (h = u = 0; h < E.length; h++) u *= 256, u += E[h];
					for (h = E = 0; h < B.length; h++) E *= 256, E += B[h];
					e.ip = y.join(".");
					e.po = u;
					e.ac = E;
					e.clu = w[0];
					clus[e.clu] ?
						y = clus[e.clu] : (y = {}, clus[e.clu] = y, y.sis = [], y.ptms = []);
					e.cluo = y;
					sos.push(e);
					y = [];
					E = [];
					B = [];
					w = [];
					h = 0
				}
				e = f = 0
			} else e++;
		for (q = sos.length - 1; 0 <= q; q--)
			if (e = 1, y = sos[q].cluo) {
				for (h = y.sis.length - 1; 0 <= h; h--)
					if (y.sis[h].ip == sos[q].ip) {
						e = 0;
						break
					}
				1 == e && y.sis.push({ ip: sos[q].ip })
			}
		for (q = clus.length - 1; 0 <= q; q--)
			if ((y = clus[q]) && 0 < y.sis.length) {
				h = Math.floor(Math.random() * y.sis.length);
				b = y.sis[h].ip;
				c = null;
				try { c = new WebSocket("ws://" + b + ":80/ptc") } catch (D) { c = null }
				c && (c.binaryType = "arraybuffer", c.onerror = function(b) {}, c.onmessage =
					function(b) {
						b = new Uint8Array(b.data);
						if (1 == b.length && 112 == b[0])
							for (b = clus.length - 1; 0 <= b; b--) {
								var c = clus[b];
								if (c && c.ps == this) {
									var e = Date.now() - c.stm;
									testing && console.log(" ping time for cluster " + b + ": " + e);
									c.ptms.push(e);
									4 > c.ptms.length ? (c.stm = Date.now(), b = new Uint8Array(1), b[0] = 112, this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3), this.close(), c.ps = null);
									break
								}
							}
					}, c.onopen = function(b) {
						b = !1;
						for (var c = clus.length - 1; 0 <= c; c--) {
							var e = clus[c];
							if (e && e.ps == this) {
								e.stm =
									Date.now();
								b = new Uint8Array(1);
								b[0] = 112;
								this.send(b);
								b = !0;
								break
							}
						}
						b || this.close()
					}, y.ps = c)
			}
	}
}
var mba = null,
	mbi = null;
if (is_ios || is_android) mba = document.createElement("a"), mbi = document.createElement("img"), mbi.border = 0, mbi.draggable = "false", mbi.className = "nsi", mbi.width = 1245, mbi.height = 260, mbi.style.position = "fixed", mbi.style.left = "0px", mbi.style.bottom = "0px", mbi.style.zIndex = 70, mbi.src = "/s/n2.jpg", mba.appendChild(mbi), document.body.appendChild(mba), is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" :
	"https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
o = { f: function(b, q, e) { "success" == q && loadSos(b) } };
getData("/i49526.txt", o);
