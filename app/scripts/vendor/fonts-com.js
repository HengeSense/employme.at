;
(function (window, document, undefined) {
    function q(a) {
        return function () {
            return this[a]
        }
    }
    var ba = ba || {},
        ca = this;
    ca.Gb = true;

    function da(a) {
        return a.call.apply(a.t, arguments)
    }

    function ea(a, b) {
        if (!a) throw new Error;
        if (arguments.length > 2) {
            var c = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, c);
                return a.apply(b, d)
            }
        } else return function () {
            return a.apply(b, arguments)
        }
    }

    function t() {
        t = Function.prototype.t && Function.prototype.t.toString().indexOf("native code") != -1 ? da : ea;
        return t.apply(null, arguments)
    }
    var fa = ba.Nb && Date.now ||
            function () {
                return +new Date
        };

    function v(a) {
        a.call(ca)
    };
    mti = {};
    mti.t = function (a, b) {
        var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
        return function () {
            c.push.apply(c, arguments);
            return b.apply(a, c)
        }
    };
    var ga = {};

    function w(a, b) {
        this.ba = a;
        this.rb = b || a;
        this.p = this.rb.document;
        this.fa = undefined
    }
    v(function () {
        w.prototype.createElement = function (a, b, c) {
            a = this.p.createElement(a);
            if (b)
                for (var d in b)
                    if (b.hasOwnProperty(d)) d == "style" ? this.Da(a, b[d]) : a.setAttribute(d, b[d]);
            c && a.appendChild(this.p.createTextNode(c));
            return a
        };
        w.prototype.S = function (a, b) {
            a = this.p.getElementsByTagName(a)[0];
            if (!a) a = document.documentElement;
            if (a && a.lastChild) {
                a.insertBefore(b, a.lastChild);
                return true
            }
            return false
        };
        w.prototype.Ha = function (a) {
            var b = this;

            function c() {
                b.p.body ? a() : setTimeout(c, 0)
            }
            c()
        };
        w.prototype.Ca = function (a) {
            if (a.parentNode) {
                a.parentNode.removeChild(a);
                return true
            }
            return false
        };
        w.prototype.s = function (a, b) {
            for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return;
            c.push(b);
            a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        };
        w.prototype.I = function (a, b) {
            for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        };
        w.prototype.qa = function (a, b) {
            a = a.className.split(/\s+/);
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return true;
            return false
        };
        w.prototype.Da = function (a, b) {
            if (this.eb()) a.setAttribute("style", b);
            else a.style.cssText = b
        };
        w.prototype.eb = function () {
            if (this.fa === undefined) {
                var a = this.p.createElement("p");
                a.innerHTML = '<a style="top:1px;">w</a>';
                this.fa = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))
            }
            return this.fa
        };
        w.prototype.G = function (a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontFamily;
                    else return (a = this.p.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-family") : "";
            return ""
        };
        w.prototype.R = function (a) {
            var b = "";
            if (a.tagName == "INPUT") b += a.value;
            a = a.childNodes || a;
            for (var c = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr".split(","), d = 0; d < a.length; d++)
                if (a[d].nodeType != 8)
                    if (this.indexOf(c, a[d].tagName ? a[d].tagName.toLowerCase() : "") < 0)
                        if (this.ab(a[d].parentNode) != "none") {
                            var e = a[d].nodeType != 1 ? a[d].nodeValue : this.R(a[d].childNodes);
                            b += e.toLowerCase() + e.toUpperCase()
                        } else b += a[d].nodeType != 1 ? a[d].nodeValue : this.R(a[d].childNodes);
            return b
        };
        w.prototype.getElementById = function (a) {
            return this.p.getElementById(a)
        };
        w.prototype.U = function (a, b, c) {
            b = [];
            for (var d = this.G(a).split(","), e = 0; e < c.length; e++) c[e] != "" && b.push(c[e]);
            for (c = 0; c < d.length; c++) d[c] != "" && b.push(d[c]);
            a.style.fontFamily = "" + b;
            return a.style.fontFamily
        };
        w.prototype.hb = function (a, b) {
            for (b = b.parentNode; b != null;) {
                if (b == a) return true;
                b = b.parentNode
            }
            return false
        };
        w.prototype.Fa = function (a, b) {
            b(a);
            for (a = a.firstChild; a;) {
                this.Fa(a, b);
                a = a.nextSibling
            }
        };
        w.prototype.ab = function (a) {
            if (a)
                if (typeof a.currentStyle != "undefined") return a.currentStyle.textTransform;
                else return (a = this.p.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("text-transform") : ""
        };
        w.prototype.indexOf = function (a, b) {
            if (a.indexOf) return a.indexOf(b);
            else {
                for (var c = 0; c < a.length; c++)
                    if (a[c] == b) return c;
                return -1
            }
        }
    });

    function x(a, b, c) {
        this.Eb = a;
        this.Db = b;
        this.Yb = c
    }
    v(function () {});

    function y(a, b, c, d) {
        this.e = a != null ? a : null;
        this.r = b != null ? b : null;
        this.za = c != null ? c : null;
        this.f = d != null ? d : null
    }
    var ha, B;
    v(function () {
        ha = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        y.prototype.aa = function () {
            return this.e !== null
        };
        y.prototype.toString = function () {
            return [this.e, this.r || "", this.za || "", this.f || ""].join("")
        };
        B = function (a) {
            a = ha.exec(a);
            var b = null,
                c = null,
                d = null,
                e = null;
            if (a) {
                if (a[1] !== null && a[1]) b = parseInt(a[1], 10);
                if (a[2] !== null && a[2]) c = parseInt(a[2], 10);
                if (a[3] !== null && a[3]) d = parseInt(a[3], 10);
                if (a[4] !== null && a[4]) e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]
            }
            return new y(b, c, d, e)
        }
    });

    function C(a, b, c, d, e, f, h, i, k, g, j) {
        this.T = a;
        this.Xb = b;
        this.W = c;
        this.Xa = d;
        this.Qb = e;
        this.Wa = f;
        this.Aa = h;
        this.Ub = i;
        this.Tb = k;
        this.Pb = g;
        this.z = j
    }
    v(function () {
        C.prototype.getName = q("T")
    });

    function D(a, b) {
        this.a = a;
        this.n = b
    }
    var ia = new C("Unknown", new y, "Unknown", "Unknown", new y, "Unknown", "Unknown", new y, "Unknown", undefined, new x(false, false, false));
    v(function () {
        D.prototype.parse = function () {
            return this.kb() ? this.wb() : this.nb() ? this.xb() : this.ob() ? this.ya() : this.pb() ? this.ya() : this.jb() ? this.vb() : ia
        };
        D.prototype.v = function () {
            var a = this.d(this.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
            if (a != "") {
                if (/BB\d{2}/.test(a)) a = "BlackBerry";
                return a
            }
            a = this.d(this.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
            if (a != "") {
                if (a == "Mac_PowerPC") a = "Macintosh";
                return a
            }
            return "Unknown"
        };
        D.prototype.Q = function () {
            var a = this.d(this.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
            if (a) return a;
            if (a = this.d(this.a, /Windows Phone( OS)? ([^;)]+)/, 2)) return a;
            if (a = this.d(this.a, /(iPhone )?OS ([\d_]+)/, 2)) return a;
            if (a = this.d(this.a, /(?:Linux|CrOS) ([^;)]+)/, 1)) {
                a = a.split(/\s/);
                for (var b = 0; b < a.length; b += 1)
                    if (/^[\d\._]+$/.test(a[b])) return a[b]
            }
            if (a = this.d(this.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) return a;
            return "Unknown"
        };
        D.prototype.kb = function () {
            return this.a.indexOf("MSIE") != -1
        };
        D.prototype.wb = function () {
            var a = this.v(),
                b = this.Q(),
                c = B(b),
                d = this.d(this.a, /MSIE ([\d\w\.]+)/, 1),
                e = B(d),
                f = a == "Windows" && e.e >= 6 || a == "Windows Phone" && c.e >= 8;
            return new C("MSIE", e, d, "MSIE", e, d, a, c, b, this.P(this.n), new x(f, false, false))
        };
        D.prototype.nb = function () {
            return this.a.indexOf("Opera") != -1
        };
        D.prototype.ob = function () {
            return /OPR\/[\d.]+/.test(this.a)
        };
        D.prototype.xb = function () {
            var a = "Unknown",
                b = this.d(this.a, /Presto\/([\d\w\.]+)/, 1),
                c = B(b),
                d = this.Q(),
                e = B(d),
                f = this.P(this.n);
            if (c.aa()) a = "Presto";
            else {
                if (this.a.indexOf("Gecko") != -1) a = "Gecko";
                b = this.d(this.a, /rv:([^\)]+)/, 1);
                c = B(b)
            }
            if (this.a.indexOf("Opera Mini/") != -1) {
                var h = this.d(this.a, /Opera Mini\/([\d\.]+)/, 1),
                    i = B(h);
                return new C("OperaMini", i, h, a, c, b, this.v(), e, d, f, new x(false, false, false))
            }
            if (this.a.indexOf("Version/") != -1) {
                h = this.d(this.a, /Version\/([\d\.]+)/, 1);
                i = B(h);
                if (i.aa()) return new C("Opera", i, h, a, c, b, this.v(), e, d, f, new x(i.e >= 10, false, false))
            }
            h = this.d(this.a, /Opera[\/ ]([\d\.]+)/, 1);
            i = B(h);
            if (i.aa()) return new C("Opera", i, h, a, c, b, this.v(), e, d, f, new x(i.e >= 10, false, false));
            return new C("Opera", new y, "Unknown", a, c, b, this.v(), e, d, f, new x(false, false, false))
        };
        D.prototype.pb = function () {
            return /AppleWeb(K|k)it/.test(this.a)
        };
        D.prototype.ya = function () {
            var a = this.v(),
                b = this.Q(),
                c = B(b),
                d = this.d(this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = B(d),
                f = "Unknown",
                h = new y,
                i = "Unknown",
                k = false;
            if (/OPR\/[\d.]+/.test(this.a)) f = "Opera";
            else if (this.a.indexOf("Chrome") != -1 || this.a.indexOf("CrMo") != -1 || this.a.indexOf("CriOS") != -1) f = "Chrome";
            else if (/Silk\/\d/.test(this.a)) f = "Silk";
            else if (a == "BlackBerry" || a == "Android") f = "BuiltinBrowser";
            else if (this.a.indexOf("PhantomJS") != -1) f = "PhantomJS";
            else if (this.a.indexOf("Safari") != -1) f = "Safari";
            else if (this.a.indexOf("AdobeAIR") != -1) f = "AdobeAIR";
            if (f == "BuiltinBrowser") i = "Unknown";
            else if (f == "Silk") i = this.d(this.a, /Silk\/([\d\._]+)/, 1);
            else if (f == "Chrome") i = this.d(this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2);
            else if (this.a.indexOf("Version/") != -1) i = this.d(this.a, /Version\/([\d\.\w]+)/, 1);
            else if (f == "AdobeAIR") i = this.d(this.a, /AdobeAIR\/([\d\.]+)/, 1);
            else if (f == "Opera") i = this.d(this.a, /OPR\/([\d.]+)/, 1);
            else if (f == "PhantomJS") i = this.d(this.a, /PhantomJS\/([\d.]+)/, 1);
            h = B(i);
            k = f == "AdobeAIR" ? h.e > 2 || h.e == 2 && h.r >= 5 : a == "BlackBerry" ? c.e >= 10 : a == "Android" ? c.e > 2 || c.e == 2 && c.r > 1 : e.e >= 526 || e.e >= 525 && e.r >= 13;
            var g = e.e < 536 || e.e == 536 && e.r < 11,
                j = a == "iPhone" || a == "iPad" || a == "iPod" || a == "Macintosh";
            return new C(f, h, i, "AppleWebKit", e, d, a, c, b, this.P(this.n), new x(k, g, j))
        };
        D.prototype.jb = function () {
            return this.a.indexOf("Gecko") != -1
        };
        D.prototype.vb = function () {
            var a = "Unknown",
                b = new y,
                c = "Unknown",
                d = this.Q(),
                e = B(d),
                f = false;
            if (this.a.indexOf("Firefox") != -1) {
                a = "Firefox";
                c = this.d(this.a, /Firefox\/([\d\w\.]+)/, 1);
                b = B(c);
                f = b.e >= 3 && b.r >= 5
            } else if (this.a.indexOf("Mozilla") != -1) a = "Mozilla";
            var h = this.d(this.a, /rv:([^\)]+)/, 1),
                i = B(h);
            f || (f = i.e > 1 || i.e == 1 && i.r > 9 || i.e == 1 && i.r == 9 && i.za >= 2 || h.match(/1\.9\.1b[123]/) != null || h.match(/1\.9\.1\.[\d\.]+/) != null);
            return new C(a, b, c, "Gecko", i, h, this.v(), e, d, this.P(this.n), new x(f, false, false))
        };
        D.prototype.d = function (a, b, c) {
            if ((a = a.match(b)) && a[c]) return a[c];
            return ""
        };
        D.prototype.P = function (a) {
            if (a.documentMode) return a.documentMode
        }
    });

    function H(a) {
        this.qb = a || ja
    }
    var ja = "-";
    v(function () {
        H.prototype.zb = function (a) {
            return a.replace(/[\W_]+/g, "").toLowerCase()
        };
        H.prototype.f = function () {
            for (var a = [], b = 0; b < arguments.length; b++) a.push(this.zb(arguments[b]));
            return a.join(this.qb)
        }
    });

    function I(a, b, c, d) {
        this.b = a;
        this.i = b;
        this.Y = c;
        this.j = d || J;
        this.h = new H("-")
    }
    var J = "mti";
    v(function () {
        I.prototype.na = function () {
            this.b.s(this.i, this.h.f(this.j, "loading"));
            this.B("loading")
        };
        I.prototype.Va = function (a) {
            this.b.s(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "loading"));
            this.B("fontloading", a)
        };
        I.prototype.Ta = function (a) {
            this.b.I(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "loading"));
            this.b.I(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "inactive"));
            this.b.s(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "active"));
            this.B("fontactive", a)
        };
        I.prototype.Ua = function (a) {
            this.b.I(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "loading"));
            this.b.qa(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "active")) || this.b.s(this.i, this.h.f(this.j, a.getName(), a.m().toString(), "inactive"));
            this.B("fontinactive", a)
        };
        I.prototype.O = function () {
            this.b.I(this.i, this.h.f(this.j, "loading"));
            this.b.qa(this.i, this.h.f(this.j, "active")) || this.b.s(this.i, this.h.f(this.j, "inactive"));
            this.B("inactive")
        };
        I.prototype.Sa = function () {
            this.b.I(this.i, this.h.f(this.j, "loading"));
            this.b.I(this.i, this.h.f(this.j, "inactive"));
            this.b.s(this.i, this.h.f(this.j, "active"));
            this.B("active")
        };
        I.prototype.B = function (a, b) {
            if (this.Y[a]) b ? this.Y[a](b.getName(), b.m()) : this.Y[a]()
        }
    });

    function K() {
        this.va = {}
    }
    v(function () {
        K.prototype.Pa = function (a, b) {
            this.va[a] = b
        };
        K.prototype.db = function (a, b) {
            var c = [];
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    var e = this.va[d];
                    e && c.push(e(a[d], b))
                }
            return c
        }
    });

    function L(a, b) {
        this.T = a;
        this.ha = 4;
        this.V = "n";
        if (a = (b || "n4").match(/^([nio])([1-9])$/i)) {
            this.V = a[1];
            this.ha = parseInt(a[2], 10)
        }
    }
    v(function () {
        L.prototype.getName = q("T");
        L.prototype.bb = function () {
            return this.Ba(this.T)
        };
        L.prototype.Ba = function (a) {
            var b = [];
            a = a.split(/,\s*/);
            for (var c = 0; c < a.length; c++) {
                var d = a[c].replace(/['"]/g, "");
                d.indexOf(" ") == -1 ? b.push(d) : b.push("'" + d + "'")
            }
            return b.join(",")
        };
        L.prototype.m = function () {
            return this.V + this.ha
        };
        L.prototype.cb = function () {
            var a = "normal",
                b = this.ha + "00";
            if (this.V === "o") a = "oblique";
            else if (this.V === "i") a = "italic";
            return "font-style:" + a + ";font-weight:" + b + ";"
        }
    });

    function N(a, b) {
        this.b = a;
        this.N = b;
        this.C = this.b.createElement("span", {
            "aria-hidden": "true"
        }, this.N)
    }
    v(function () {
        N.prototype.ea = function (a) {
            this.b.Da(this.C, this.Ra(a))
        };
        N.prototype.$ = function () {
            this.b.S("body", this.C)
        };
        N.prototype.Ra = function (a) {
            return "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.bb() + ";" + a.cb()
        };
        N.prototype.remove = function () {
            this.b.Ca(this.C)
        }
    });

    function O(a, b, c, d, e, f, h, i) {
        this.ja = a;
        this.gb = b;
        this.b = c;
        this.u = d;
        this.N = i || Q;
        this.z = e;
        this.sa = {};
        this.ga = f || 5E3;
        this.ua = h || null;
        this.M = this.L = null;
        this.Ab()
    }
    var R = {
        Mb: "serif",
        Lb: "sans-serif",
        Jb: "monospace"
    },
        Q = "BESbswy";
    v(function () {
        O.prototype.Ab = function () {
            var a = new N(this.b, this.N);
            a.$();
            for (var b in R)
                if (R.hasOwnProperty(b)) {
                    a.ea(new L(R[b], this.u.m()));
                    this.sa[R[b]] = a.C.offsetWidth
                }
            a.remove()
        };
        O.prototype.start = function () {
            this.L = new N(this.b, this.N);
            this.L.$();
            this.M = new N(this.b, this.N);
            this.M.$();
            this.Bb = fa();
            this.L.ea(new L(this.u.getName() + ",serif", this.u.m()));
            this.M.ea(new L(this.u.getName() + ",sans-serif", this.u.m()));
            this.ka()
        };
        O.prototype.X = function (a, b) {
            return a === this.sa[b]
        };
        O.prototype.Fb = function (a, b) {
            for (var c in R)
                if (R.hasOwnProperty(c))
                    if (this.X(a, R[c]) && this.X(b, R[c])) return true;
            return false
        };
        O.prototype.fb = function () {
            return fa() - this.Bb >= this.ga
        };
        O.prototype.ib = function (a, b) {
            return this.X(a, "serif") && this.X(b, "sans-serif")
        };
        O.prototype.ra = function (a, b) {
            return this.z.Db && this.Fb(a, b)
        };
        O.prototype.lb = function () {
            return this.ua === null || this.ua.hasOwnProperty(this.u.getName())
        };
        O.prototype.ka = function () {
            var a = this.L.C.offsetWidth,
                b = this.M.C.offsetWidth;
            if (this.ib(a, b) || this.ra(a, b))
                if (this.fb()) this.ra(a, b) && this.lb() ? this.Z(this.ja) : this.Z(this.gb);
                else this.Qa();
                else this.Z(this.ja)
        };
        O.prototype.Qa = function () {
            setTimeout(t(function () {
                this.ka()
            }, this), 25)
        };
        O.prototype.Z = function (a) {
            this.L.remove();
            this.M.remove();
            a(this.u)
        }
    });

    function S(a, b, c, d) {
        this.b = b;
        this.D = c;
        this.la = 0;
        this.Ea = this.ta = false;
        this.ga = d;
        this.z = a.z
    }
    v(function () {
        S.prototype.Ga = function (a, b, c, d) {
            if (a.length === 0 && d) this.D.O();
            else {
                this.la += a.length;
                if (d) this.ta = d;
                for (d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = b[e.getName()];
                    this.D.Va(e);
                    (new O(t(this.Ya, this), t(this.Za, this), this.b, e, this.z, this.ga, c, f)).start()
                }
            }
        };
        S.prototype.Ya = function (a) {
            this.D.Ta(a);
            this.Ea = true;
            this.ma()
        };
        S.prototype.Za = function (a) {
            this.D.Ua(a);
            this.ma()
        };
        S.prototype.ma = function () {
            if (--this.la == 0 && this.ta) this.Ea ? this.D.Sa() : this.D.O()
        }
    });
    mti.Hb = function () {
        this.Ba = '"'
    };
    mti.K = function () {
        this.Vb = mti.K.La;
        this.Cb = mti.K.Na
    };
    mti.K.La = ["font-style", "font-weight"];
    mti.K.Na = {
        "font-style": [
            ["n", "normal"]
        ],
        "font-weight": [
            ["4", "normal"]
        ]
    };
    mti.K.Ib = function (a, b, c) {
        this.Rb = a;
        this.Wb = b;
        this.Cb = c
    };

    function T(a, b, c) {
        this.ba = a;
        this.oa = b;
        this.a = c;
        this.ca = this.da = 0
    }
    v(function () {
        T.prototype.Oa = function (a, b) {
            this.oa.Pa(a, b)
        };
        T.prototype.load = function (a) {
            var b = a.context || this.ba;
            this.b = new w(this.ba, b);
            b = new I(this.b, b.document.documentElement, a);
            this.a.z.Eb ? this.sb(b, a) : b.O()
        };
        T.prototype.mb = function (a, b, c, d) {
            var e = this;
            if (d) a.load(function (f, h, i) {
                e.ub(b, c, f, h, i)
            });
            else {
                a = --this.da == 0;
                this.ca--;
                if (a) this.ca == 0 ? b.O() : b.na();
                c.Ga([], {}, null, a)
            }
        };
        T.prototype.ub = function (a, b, c, d, e) {
            var f = --this.da == 0;
            f && a.na();
            setTimeout(function () {
                b.Ga(c, d || {}, e || null, f)
            }, 0)
        };
        T.prototype.sb = function (a, b) {
            var c = this.oa.db(b, this.b);
            b = b.timeout;
            this.ca = this.da = c.length;
            b = new S(this.a, this.b, a, b);
            for (var d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                ma(f, this.a, t(this.mb, this, f, a, b))
            }
        }
    });
    var na = window.MonoTypeWebFonts = function () {
        var a = (new D(navigator.userAgent, document)).parse();
        return new T(window, new K, a)
    }();
    window.MonoTypeWebFonts.load = na.load;
    var U = window.MTIConfig || {
        isAsync: false,
        EnableCustomFOUTHandler: false,
        RemoveMTIClass: false
    };
    mti.q = function (a, b, c) {
        this.J = a;
        this.b = b;
        this.yb = c;
        this.w = {};
        this.o = [];
        this.l = []
    };
    mti.q.prototype.indexOf = function (a, b) {
        if (a.indexOf) return a.indexOf(b);
        else {
            for (var c = 0; c < a.length; c++)
                if (a[c] == b) return c;
            return -1
        }
    };

    function V(a, b, c) {
        var d = a.yb,
            e = a.b.G(b),
            f = 0,
            h = 0;
        e = (e || "").replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|");
        if (e != "") {
            e = e.split("|");
            for (f = 0; f < e.length; f++) {
                var i = new RegExp("^(" + e[f] + ")$", "ig");
                for (h = 0; h < d.length; h++) {
                    var k = d[h],
                        g = k.fontfamily;
                    if (i.test(g.replace(/^\s|\s$/g, ""))) {
                        a.l.push(g.replace(/^\s|\s$/g, ""));
                        if (U.EnableCustomFOUTHandler == true) a.b.s(b, c ? "mti_font_element" + c : "mti_font_element");
                        a.o.push(b);
                        if (k.enableSubsetting)
                            if (a.w[g.replace(/^\s|\s$/g, "")]) a.w[g.replace(/^\s|\s$/g, "")] += a.b.R(b);
                            else a.w[g.replace(/^\s|\s$/g, "")] = a.b.R(b)
                    }
                }
            }
        }
    }

    function X(a, b, c) {
        b = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr".split(",");
        var d = a.J,
            e = null;
        do
            if (d) {
                e = d.firstChild;
                if (e == null) {
                    if (d.nodeType == 1)
                        if (a.indexOf(b, d.tagName.toLowerCase()) < 0) c ? V(a, d, c) : V(a, d);
                    e = d.nextSibling
                }
                if (e == null) {
                    d = d;
                    do {
                        e = d.parentNode;
                        if (e == a.J) {
                            if (e.tagName.toLowerCase() != "body")
                                if (a.indexOf(b, e.tagName.toLowerCase()) < 0) c ? V(a, e, c) : V(a, e);
                            break
                        }
                        if (e != null) {
                            if (e.nodeType == 1)
                                if (a.indexOf(b, e.tagName.toLowerCase()) < 0) c ? V(a, e, c) : V(a, e);
                            d = e;
                            e = e.nextSibling
                        }
                    } while (e == null)
                }
                d = e
            }
        while (d != a.J);
        c = false;
        for (var f in a.w) {
            c = true;
            break
        }
        if (c) return a.w;
        return null
    }
    mti.q.prototype.pa = q("l");
    mti.q.prototype.U = function (a, b) {
        var c = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr".split(","),
            d = this.J,
            e = null;
        do {
            e = d.firstChild;
            if (e == null) {
                d.nodeType == 1 && this.indexOf(c, d.tagName.toLowerCase()) < 0 && V(this, d);
                e = d.nextSibling
            }
            if (e == null) {
                d = d;
                do {
                    e = d.parentNode;
                    if (e == this.J) break;
                    e.nodeType == 1 && this.indexOf(c, e.tagName.toLowerCase()) < 0 && this.b.G(e).indexOf(a) > -1 && this.b.U(e, a, b);
                    d = e;
                    e = e.nextSibling
                } while (e == null)
            }
            d = e
        } while (d != this.J);
        a = false;
        for (var f in this.w) {
            a = true;
            break
        }
        if (a) return this.w;
        return null
    };
    mti.Ia = 4E4;
    mti.g = function (a, b, c, d, e) {
        this.H = a;
        this.a = b;
        this.b = c;
        this.c = d;
        this.$a = {};
        this.k = e;
        this.l = []
    };
    mti.g.Ka = "monotype";

    function ma(a, b, c) {
        b = a.c.projectId;
        var d;
        if (b) {
            a.H.mti_element_cache = [];
            Y(a);
            var e = a.a.getName();
            e = e.toLowerCase();
            var f = e == "opera" ? true : false;
            e = function () {
                function i() {
                    g = new mti.q(document.body, a.b, a.c.pfL);
                    j = X(g);
                    f && oa(a);
                    for (var s in j) j[s] = pa(a, j[s]);
                    a.H.mti_element_cache = g.o;
                    Z(a, g.l, j);
                    d = g.l;
                    s = g.o;
                    a.k != null && mti.t(a.k, a.k.load, s)();
                    for (var n = 0; n < s.length; n++)
                        for (var m in a.F) a.b.G(s[n]).indexOf(m) > -1 && a.b.U(s[n], m, a.F[m])
                }
                var k = a.c.reqSub,
                    g = null,
                    j = null;
                if (f && k) {
                    qa(a);
                    ra(a, function () {
                        i()
                    })
                } else if (!f && k) i();
                else {
                    g = new mti.q(document.body, a.b, a.c.pfL);
                    j = X(g);
                    Z(a, g.pa);
                    d = g.l;
                    a.H.mti_element_cache = g.o;
                    a.k != null && mti.t(a.k, a.k.load, g.o)()
                }
                c(true)
            };
            setTimeout(function () {
                if (U.UseTextIndent == true) {
                    document.documentElement.style.textIndent = "";
                    document.documentElement.style.textAlign = ""
                } else document.documentElement.style.visibility = ""
            }, 750);
            if (U.isAsync === true) U.onReady = e;
            else if (a.c.reqSub) {
                sa(a, e);
                e = new mti.q(document.body, a.b, a.c.pfL);
                X(e);
                d = e.l
            } else a.Ha(function () {
                var i = new mti.q(document.body, a.b, a.c.pfL);
                X(i);
                Z(a, i.l);
                d = i.l;
                a.H.mti_element_cache = i.o;
                a.k != null && mti.t(a.k, a.k.load, i.o)();
                c(true)
            });
            if (U.EnableCustomFOUTHandler == true)
                if (U.UseTextIndent == true) {
                    document.documentElement.style.textIndent = "-9999px";
                    document.documentElement.style.textAlign = "left"
                } else document.documentElement.style.visibility = "hidden";
            var h = [];
            if (d) h = d;
            if (a.c.reqSub && d.length == 0 || f)
                for (e = 0; e < a.c.pfL.length; e++) h.push(a.c.pfL[e].fontfamily);
            a.H["__mti_fntLst" + b] = function () {
                for (var i = [], k = {}, g = [], j = 0; j < h.length; j++)
                    if (!k.hasOwnProperty(h[j])) {
                        i.push({
                            fontfamily: h[j]
                        });
                        g.push(h[j]);
                        k[h[j]] = 1
                    }
                return i
            }
        } else c(true)
    }

    function ta(a, b) {
        if (document.getElementsByClassName) return document.getElementsByClassName(b);
        else {
            var c = [];
            a.Fa(document.body, function (d) {
                var e;
                e = d.className;
                var f;
                if (e) {
                    e = e.split(" ");
                    for (f = 0; f < e.length; f++)
                        if (e[f] === b) {
                            c.push(d);
                            break
                        }
                }
            });
            return c
        }
    }

    function qa(a, b) {
        var c = document.createElement("STYLE");
        c.setAttribute("type", "text/css");
        c.id = "monotype_fake_fontface_" + a.c.projectId;
        var d = "";
        a = a.c.pfL;
        if (a != null) {
            d += "@font-face{font-family:opera_testfont;src:url(data:font/opentype;base64,T1RUTwALAIAAAwAwQ0ZGIMA92IQAAAVAAAAAyUZGVE1VeVesAAAGLAAAABxHREVGADAABAAABgwAAAAgT1MvMlBHT5sAAAEgAAAAYGNtYXAATQPNAAAD1AAAAUpoZWFk8QMKmwAAALwAAAA2aGhlYQS/BDgAAAD0AAAAJGhtdHgHKQAAAAAGSAAAAAxtYXhwAANQAAAAARgAAAAGbmFtZR8kCUMAAAGAAAACUnBvc3T/uAAyAAAFIAAAACAAAQAAAAEAQVTDUm9fDzz1AAsD6AAAAADHUuOGAAAAAMdS44YAAADzAz8BdgAAAAgAAgAAAAAAAAABAAABdgDzAAkDQQAAAAADPwABAAAAAAAAAAAAAAAAAAAAAwAAUAAAAwAAAAICmgGQAAUAAAK8AooAAACMArwCigAAAd0AMgD6AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAEZIRAAAQAAgAC0C7v8GAAABdv8NAAAAAQAAAAAAAAAAACAAIAABAAAAFAD2AAEAAAAAAAAAPAB6AAEAAAAAAAEAAgC9AAEAAAAAAAIABwDQAAEAAAAAAAMAEQD8AAEAAAAAAAQAAwEWAAEAAAAAAAUABQEmAAEAAAAAAAYAAgEyAAEAAAAAAA0AAQE5AAEAAAAAABAAAgFBAAEAAAAAABEABwFUAAMAAQQJAAAAeAAAAAMAAQQJAAEABAC3AAMAAQQJAAIADgDAAAMAAQQJAAMAIgDYAAMAAQQJAAQABgEOAAMAAQQJAAUACgEaAAMAAQQJAAYABAEsAAMAAQQJAA0AAgE1AAMAAQQJABAABAE7AAMAAQQJABEADgFEAEcAZQBuAGUAcgBhAHQAZQBkACAAaQBuACAAMgAwADAAOQAgAGIAeQAgAEYAbwBuAHQATABhAGIAIABTAHQAdQBkAGkAbwAuACAAQwBvAHAAeQByAGkAZwBoAHQAIABpAG4AZgBvACAAcABlAG4AZABpAG4AZwAuAABHZW5lcmF0ZWQgaW4gMjAwOSBieSBGb250TGFiIFN0dWRpby4gQ29weXJpZ2h0IGluZm8gcGVuZGluZy4AAFAASQAAUEkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAEYATwBOAFQATABBAEIAOgBPAFQARgBFAFgAUABPAFIAVAAARk9OVExBQjpPVEZFWFBPUlQAAFAASQAgAABQSSAAADEALgAwADAAMAAAMS4wMDAAAFAASQAAUEkAACAAACAAAFAASQAAUEkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAAAAAAADAAAAAwAAABwAAQAAAAAARAADAAEAAAAcAAQAKAAAAAYABAABAAIAIAAt//8AAAAgAC3////h/9UAAQAAAAAAAAAAAQYAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAA/7UAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABAQEDUEkAAQIAAQAu+BAA+BsB+BwC+B0D+BgEWQwDi/eH+dP4CgUcAIwPHAAAEBwAkREcAB4cAKsSAAMCAAEAPQA/AEFHZW5lcmF0ZWQgaW4gMjAwOSBieSBGb250TGFiIFN0dWRpby4gQ29weXJpZ2h0IGluZm8gcGVuZGluZy5QSVBJAAAAAAEADgADAQECAxQODvb3h/cXAfeHBPnT9xf90wYO+IgU+WoVHgoDliX/DAmLDAr3Fwr3FwwMHgoG/wwSAAAAAAEAAAAOAAAAGAAAAAAAAgABAAEAAgABAAQAAAACAAAAAAABAAAAAMbULpkAAAAAx1KUiQAAAADHUpSJAfQAAAH0AAADQQAA)}";
            for (var e = 0; e < a.length; e++) d += "@font-face{font-family:'" + a[e].fontfamily + (b ? b : "") + "';src:url(data:font/opentype;base64,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);}"
        }
        c.textContent = d;
        b = document.getElementsByTagName("HEAD");
        b.length > 0 && b[0].appendChild(c)
    }

    function oa(a) {
        (a = document.getElementById("monotype_fake_fontface_" + a.c.projectId)) && a.parentNode.removeChild(a)
    }

    function ra(a, b) {
        var c = document.createElement("SPAN");
        c.innerHTML = "MMMWWW";
        c.style.position = "absolute";
        c.style.left = "-32768px";
        c.style.fontFamily = "opera_testfont";
        document.documentElement.appendChild(c);
        var d = 0,
            e = (new Date).getTime();
        d = window.setInterval(function () {
            if (a.b.G(c) === "opera_testfont" || (new Date).getTime() - e > 200) {
                try {
                    document.documentElement.removeChild(c)
                } catch (f) {}
                b();
                window.clearInterval(d)
            }
        }, 60)
    }
    mti.g.prototype.F = {};

    function Z(a, b, c, d) {
        var e = "TTF",
            f = a.c.projectId,
            h = a.c.ec,
            i = a.c.fcURL,
            k = a.c.dfcURL,
            g = a.b.createElement("style", {
                type: "text/css",
                id: "mti_fontface_" + (d ? "Aj_" : "") + a.c.projectId
            }),
            j = "",
            s = false,
            n = {},
            m = {};
        a.F = {};
        var u = {
            TTF: "truetype",
            WOFF: "woff",
            SVG: "svg",
            MTX: "truetype",
            OTF: "opentype"
        },
            z = a.a.getName();
        z = z.toLowerCase();
        var M = a.a.W;
        M = z == "msie" && M < 8 ? true : false;
        z = z == "opera" ? true : false;
        b || (b = []);
        for (var $ = 0; $ < a.c.pfL.length; $++) {
            var E = a.c.pfL[$],
                r = E.fontfamily,
                F = E.contentIds,
                ka = E.enableOtf,
                G = E.enableSubsetting,
                l = a.c.ffArray,
                o = a.a.getName();
            o = o.toLowerCase();
            e = a.a.W;
            if (o == "firefox") o = "mozilla";
            if (/ipad|ipod|iphone/.test(a.a.Aa.toLowerCase())) o = "msafari";
            l = l[o];
            o = "";
            for (var aa in l)
                if (parseFloat(e) >= parseFloat(aa))
                    if (F[l[aa].toUpperCase()]) o = l[aa];
            e = o;
            l = true;
            if (b.length > 0 || z || !G) {
                l = z || !G ? true : false;
                for (G = 0; G < b.length; G++)
                    if (b[G] == r) {
                        a.l.push(new L(r));
                        l = true;
                        break
                    }
                z && a.l.push(new L(r));
                if (l) {
                    G = e != null && e.toUpperCase() == "EOT" || e.toUpperCase() == "MTX";
                    E = E.enableSubsetting;
                    l = k;
                    o = a.c.ck;
                    var p = e;
                    m = F[p.toUpperCase()];
                    l = (window.location.protocol == "https:" ? "https://" : "http://") + l.replace("http://", "").replace("https://", "");
                    l = l + "?";
                    if (h) l += o + "&";
                    l += "fctypeId=" + a.c.fctypeArray[p] + "&fcId=" + F.TTF + "&origId=" + m;
                    l += "&projectId=" + f;
                    l += "&content=";
                    o = "";
                    p = a.a.getName();
                    p = p.toLowerCase();
                    p = p == "msie" ? true : false;
                    if (c) {
                        m = null;
                        if (p) {
                            if (c[r]) m = c[r].replace("\\", "").replace("#", "").replace("&", "").replace(">", "").replace("%", "").replace("<", "").replace('"', "").replace("'", "").replace("+", "").replace("/", "%2f")
                        } else m = escape((c[r] || "").replace("\\", "").replace("/", "%2f"));
                        o += (m || "") + Q + "Mm"
                    }
                    o = l + o;
                    m = a.c.bsmcArray;
                    var A = a.a.getName();
                    A = A.toLowerCase();
                    if (A == "firefox") A = "mozilla";
                    if (/ipad|ipod|iphone/.test(a.a.Aa.toLowerCase())) A = "msafari";
                    p = a.a.W;
                    m = m[A];
                    A = "";
                    for (var la in m)
                        if (parseFloat(p) >= parseFloat(la)) A = m[la];
                    p = A;
                    if (o.length > p) {
                        l = p - l.length;
                        l = {
                            xa: Math.ceil(o.length / l),
                            wa: l
                        }
                    } else l = {
                        xa: 1
                    };
                    o = l.xa;
                    m = false;
                    if (M && o > 1) {
                        o = 1;
                        m = true;
                        E = false
                    }
                    p = "";
                    if (o > 1 || d) {
                        if (c !== null) {
                            s = true;
                            n[r] || (n[r] = []);
                            if (A = c[r]) {
                                m = [];
                                for (var P = "", W = 1; W <= o; W++) {
                                    P = (d ? r.length > 25 ? r.substring(0, 20) : r : r) + (d ? d : "") + (o > 1 ? W : "");
                                    n[r].push(P);
                                    c[P] = A.substr((W - 1) * l.wa, l.wa);
                                    p = ua(a, F, f, E, h, i, k, a.c.ck, P, c, e, ka);
                                    if (p != "") {
                                        j += '@font-face{\nfont-family:"' + P + '";\nsrc:url("' + p + '")';
                                        G || (j += ' format("' + u[e.toUpperCase()] + '")');
                                        j += ";}\n";
                                        m.push("'" + P + "'")
                                    }
                                }
                                a.F[r] = m
                            }
                        }
                    } else {
                        p = ua(a, F, f, E, h, i, k, a.c.ck, r + (d ? d : ""), m ? null : c, e, ka);
                        if (p != "") {
                            j += '@font-face{\nfont-family:"' + r + (d ? d : "") + '";\nsrc:url("' + p + '")';
                            if (!G) {
                                r = F[e.toUpperCase()];
                                F = u[e.toUpperCase()];
                                r || (F = u.TTF);
                                j += " format('" + F + "')"
                            }
                            j += ";}\n"
                        }
                    }
                }
            }
        }
        if (s === true || d) {
            a.b.Ca(a.b.getElementById("mti_stylesheet_" + (d ? "Aj_" : "") + a.c.projectId) || {});
            d ? Y(a, n, d) : Y(a, n)
        }
        j != "" && a.b.S("head", g);
        if (g.styleSheet) g.styleSheet.cssText = j;
        else {
            a = document.createTextNode(j);
            g.appendChild(a)
        }
    }

    function Y(a, b, c) {
        var d = new H("-"),
            e = a.b.createElement("style", {
                type: "text/css",
                id: "mti_stylesheet_" + (c ? "Aj_" : "") + a.c.projectId
            }),
            f = "",
            h = "";
        h = U.UseTextIndent == true ? "text-align:left;text-indent:-9999px;" : "visibility:hidden;";
        if (U.EnableCustomFOUTHandler == true) {
            var i = a.c.pfL;
            f += "." + J + "-loading .mti_font_element" + (c ? "_Aj" : "") + "{" + h + "}\n";
            for (var k = 0; k < i.length; k++) {
                var g = i[k].fontfamily;
                if (c) g += c;
                if (g) f += "." + d.f(J, g, "n4", "loading") + " .mti_font_element" + (c ? c : "") + "{" + h + "}\n"
            }
        }
        for (k in a.c.selectorFontMap) {
            d = a.c.selectorFontMap[k];
            g = g = d.familyName;
            if (b && b[g] && b[g].length > 0) g = b[g].join("','");
            if (!c) {
                f += k + "{font-family:'" + g + "';";
                if (a.k != null)
                    if ((g = d.otf) && g != null && g != "") f += a.k.Ob(g);
                f += "}\n"
            }
            if (U.EnableCustomFOUTHandler == true) {
                f += "/*fout specific code:*/\n";
                g = k.split(",");
                for (var j in g) f += "." + J + "-loading " + g[j] + "{" + h + "}\n"
            }
        }
        f != "" && a.b.S("head", e);
        if (e.styleSheet) e.styleSheet.cssText = f;
        else {
            a = document.createTextNode(f);
            e.appendChild(a)
        }
    }

    function pa(a, b) {
        if (b && typeof b == "string") {
            b = b.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, "");
            a = "";
            for (var c = b.length, d = null, e = 0; e < c; e++) {
                d = b.charAt(e);
                if (a.indexOf(d) == -1) a += d
            }
            return a
        }
        return ""
    }

    function ua(a, b, c, d, e, f, h, i, k, g, j, s) {
        var n = b[j.toUpperCase()],
            m = "http://",
            u = "",
            z = a.c.fontdataversion,
            M = a.c.env;
        if (window.location.protocol == "https:") m = "https://";
        f = f.replace("http://", "").replace("https://", "");
        h = h.replace("http://", "").replace("https://", "");
        f = m + f + (s ? "ot/" : "");
        h = m + h;
        if (d) {
            u = h + "?";
            if (e) u += i + "&";
            u += "fctypeId=" + a.c.fctypeArray[j] + "&fcId=" + b.TTF + "&origId=" + n;
            if (z == "v2") {
                u += "&fontdataversion=v2";
                if (M != "undefined" && M != "") u += "&env=" + M
            }
        } else if (e)
            if (n) {
                if (z == "v2") f += j.toUpperCase() == "EOT" ? "2/" : j.toUpperCase() == "WOFF" ? "3/" : j.toUpperCase() == "SVG" ? "11/" : j.toUpperCase() == "OTF" ? "13/" : "1/";
                u = f + n + "." + j.toLowerCase() + "?" + i
            } else u = f + "1/" + b.TTF + ".ttf?" + i;
            else u = f + "?fctypeId=" + a.c.fctypeArray[j] + "&fcId=" + n;
        u += "&projectId=" + c;
        a = a.a.getName();
        a = a.toLowerCase();
        a = a == "msie" ? true : false;
        b = null;
        if (g)
            if (d) {
                if (a) {
                    if (g[k]) b = g[k].replace("\\", "").replace("#", "").replace("&", "").replace(">", "").replace("%", "").replace("<", "").replace('"', "").replace("'", "").replace("+", "")
                } else b = escape(g[k] || "");
                if (b.length > 0) u += "&content=" + (b || "") + Q + "Mm";
                else u = ""
            }
        if (j != null && j.toUpperCase() == "SVG") u += "#" + n;
        return u
    }

    function va(a, b) {
        var c = false,
            d = document.getElementById(b);
        c = d === null ? false : true;
        if (!c) return false;
        var e = wa(a),
            f = null,
            h = null;

        function i() {
            f = new mti.q(d, a.b, a.c.pfL);
            h = X(f, {}, e);
            var k = a.a.getName();
            k = k.toLowerCase();
            (k == "opera" ? true : false) && oa(a);
            k = [];
            for (var g in h) {
                if (h[g]) h[g] = pa(a, h[g]);
                g += e;
                k.push(new L(j))
            }
            g = a.H.mti_element_cache = f.o;
            Z(a, f.l, h, e);
            g = f.o;
            a.k != null && mti.t(a.k, a.k.Sb, g)();
            for (k = 0; k < g.length; k++)
                for (var j in a.F)
                    if (a.b.G(g[k]).indexOf(j) > -1)
                        if (g[k].getAttribute("id") == b || a.b.hb(a.b.getElementById(b), g[k])) a.b.U(g[k], j, a.F[j])
        }
        c = a.a.getName();
        c = c.toLowerCase();
        if (c == "opera" ? true : false) {
            qa(a, e);
            ra(a, function () {
                i()
            })
        } else i();
        U.RemoveMTIClass == true && setTimeout(function () {
            var k = "mti_font_element" + e,
                g = (new D(navigator.userAgent, document)).parse(),
                j = ta(this, k),
                s = g.getName();
            s = s.toLowerCase();
            g = g.W;
            s = s == "msie" && g < 8 ? true : false;
            for (g = new RegExp(k, "ig"); j.length > 0;) {
                for (var n = 0; n < j.length; n++)
                    if (j[n].className.split(" ").length == 1 && !s) j[n].removeAttribute("class");
                    else j[n].className = j[n].className.replace(g, " ").replace(/^\s+|\s+$/g, "");
                j = ta(this, k)
            }
        }, ga.Ia)
    }
    mti.g.prototype.load = function (a) {
        a(this.l, this.$a)
    };
    mti.Ja = function (a) {
        this.n = a
    };
    mti.Ja.prototype.protocol = function () {
        var a = ["http:", "https:"],
            b = a[0];
        if (this.n && this.n.location && this.n.location.protocol) {
            var c = 0;
            for (c = 0; c < a.length; c++)
                if (this.n.location.protocol == a[c]) return this.n.location.protocol
        }
        return b
    };
    mti.ia = function (a, b) {
        this.b = a;
        this.c = b
    };
    mti.ia.prototype.appendBannerScript = function () {
        var a;
        a = new RegExp(escape("WFS_MTI_SS") + "=([^;]+)");
        if (a.test(document.cookie + ";")) {
            a.exec(document.cookie + ";");
            a = unescape(RegExp.$1)
        } else a = false;
        var b = this.c.bannerHandlerURL;
        if (b) {
            b += "?projectId=" + this.c.projectId;
            if (a !== false) b += "&WFS_MTI_SS=" + a;
            b += "&" + escape((new Date).getTime());
            this.b.S("head", this.b.createElement("Script", {
                type: "text/javascript",
                src: b
            }))
        }
    };
    mti.Ma = function (a) {
        this.tb = a
    };
    MonoTypeWebFonts.Oa(mti.g.Ka, function (a) {
        var b = (new D(navigator.userAgent, document)).parse(),
            c = new w(window),
            d = null;
        if (a.enableOtf) d = new mti.Kb(c, b, a);
        window.MonoTypeWebFonts.BannerHandler = new mti.ia(c, a);
        a = new mti.g(window, b, c, a, d);
        var e = new mti.Ma(a);
        window.MonoTypeWebFonts.renderPartial = function (f) {
            va(e.tb, f)
        };
        return a
    });

    function wa() {
        for (var a = "", b = 0; b < 5; b++) a += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
        return a
    }
    mti.g.prototype.pa = q("l");
    mti.g.A = false;

    function sa(a, b) {
        if (mti.g.A === true) b();
        else {
            var c = a.b.p;
            if (a.a.getName() == "MSIE") {
                var d = false,
                    e = function () {
                        if (!d) {
                            d = true;
                            b();
                            mti.g.A = true
                        }
                    };
                (function () {
                    try {
                        c.documentElement.doScroll("left");
                        if (c.readyState != "complete") {
                            setTimeout(arguments.callee, 50);
                            return
                        }
                    } catch (f) {
                        setTimeout(arguments.callee, 50);
                        return
                    }
                    e()
                })();
                c.onreadystatechange = function () {
                    if (c.readyState == "complete") {
                        c.onreadystatechange = null;
                        e()
                    }
                }
            } else if (a.a.Xa == "AppleWebKit" && a.a.Wa < 525)(function () {
                if (["loaded", "complete"].indexOf(c.readyState) > -1) {
                    b();
                    mti.g.A = true
                } else setTimeout(arguments.callee, 50)
            })();
            else if (c.addEventListener)
                if (c.readyState == "loading") c.addEventListener("DOMContentLoaded", function () {
                    b();
                    mti.g.A = true
                }, false);
                else window.onload = function () {
                    b();
                    mti.g.A = true
                };
                else window.onload = function () {
                    b();
                    mti.g.A = true
                }
        }
    }
    mti.g.prototype.Ha = function (a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    };
})(this, document);
if (window.addEventListener) {
    window.addEventListener('load', function () {
        MonoTypeWebFonts.cleanup();
    }, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', function () {
        MonoTypeWebFonts.cleanup();
    });
}
MonoTypeWebFonts.cleanupExecuted = false;
MonoTypeWebFonts.cleanup = function () {
    if (MonoTypeWebFonts.cleanupExecuted === true) {
        return;
    }
    MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);
    var className = document.documentElement.className;
    var MTIConfig = window['MTIConfig'] || {
        'RemoveMTIClass': false
    };
    if (MTIConfig['RemoveMTIClass'] == true) {
        function walkTheDOM(node, func) {
            func(node);
            node = node.firstChild;
            while (node) {
                walkTheDOM(node, func);
                node = node.nextSibling;
            }
        }

        function getElementsByClassName(className) {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName(className);
            } else {
                var results = [];
                walkTheDOM(document.body, function (node) {
                    var a, c = node.className,
                        i;
                    if (c) {
                        a = c.split(' ');
                        for (i = 0; i < a.length; i++) {
                            if (a[i] === className) {
                                results.push(node);
                                break;
                            }
                        }
                    }
                });
                return results;
            }
        }
        setTimeout(function () {
            var mti_elements = getElementsByClassName('mti_font_element');
            var u = navigator.userAgent;
            var ua = u.toLowerCase(),
                is = function (t) {
                    return ua.indexOf(t) > -1
                },
                b = (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)),
                c = false;
            if ((RegExp.$1 == 6) || (RegExp.$1 == 7)) {
                c = true;
            }
            while (mti_elements.length > 0) {
                for (var i = 0; i < mti_elements.length; i++) {
                    var classList = mti_elements[i].className.split(' ');
                    if (classList.length == 1 && !c) {
                        mti_elements[i].removeAttribute('class');
                    } else {
                        mti_elements[i].className = mti_elements[i].className.replace(/mti_font_element/ig, ' ').replace(/^\s+|\s+$/g, '');
                    }
                }
                mti_elements = getElementsByClassName('mti_font_element');
            }
        }, 40000);
    }
    className = className;
    if (!document.getElementById('MonoTypeFontApiFontTracker')) {
        var fontTrackingUrl = "http://fast.fonts.net/t/1.css";
        if (window.location.protocol == 'https:') {
            fontTrackingUrl = fontTrackingUrl.replace(/http:/, 'https:');
        }
        var head = document.getElementsByTagName('HEAD')[0];
        var cssEle = document.createElement('LINK');
        if (cssEle) {
            cssEle.setAttribute('id', 'MonoTypeFontApiFontTracker');
            cssEle.setAttribute('type', 'text/css');
            cssEle.setAttribute('rel', 'stylesheet');
            cssEle.setAttribute('href', fontTrackingUrl + "?apiType=js&projectid=902ac583-8a36-48ca-a426-e3f10a12615b");
            head.appendChild(cssEle);
        }
    }
    window['mti_element_cache'] = [];
    MonoTypeWebFonts.loadColo();
};
MonoTypeWebFonts._fontActiveEventList = [];
MonoTypeWebFonts._fontLoadingEventList = [];
MonoTypeWebFonts._activeEventList = [];
MonoTypeWebFonts._inActiveEventList = [];
MonoTypeWebFonts.addEvent = function (eventName, callbackFunction) {
    if (eventName.toLowerCase() == 'fontactive') {
        MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'fontloading') {
        MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'inactive') {
        MonoTypeWebFonts._inActiveEventList.push(callbackFunction);
    } else if (eventName.toLowerCase() == 'active') {
        MonoTypeWebFonts._activeEventList.push(callbackFunction);
    }
};
MonoTypeWebFonts.loadFonts = function () {
    MonoTypeWebFonts.load({
        monotype: {
            reqSub: false,
            enableOtf: false,
            otfJsParentUrl: '//fast.fonts.net/jsapi/otjs/',
            pfL: [{
                'fontfamily': "HelveticaNeueW01-45Ligh",
                contentIds: {
                    EOT: 'ae1656aa-5f8f-4905-aed0-93e667bd6e4a',
                    WOFF: '530dee22-e3c1-4e9f-bf62-c31d510d9656',
                    TTF: '688ab72b-4deb-4e15-a088-89166978d469',
                    SVG: '7816f72f-f47e-4715-8cd7-960e3723846a'
                },
                enableSubsetting: false,
                enableOtf: false
            }, {
                'fontfamily': "HelveticaNeueW01-75Bold",
                contentIds: {
                    EOT: 'c07fef9e-a934-42d7-92ad-69205f2b8a00',
                    WOFF: '14ff6081-326d-4dae-b778-d7afa66166fc',
                    TTF: '8fda1e47-19be-46c7-8d83-8d4fb35572f0',
                    SVG: 'f751c8ae-1057-46d9-8d74-62592e002568'
                },
                enableSubsetting: false,
                enableOtf: false
            }],
            selectorFontMap: {},
            ck: 'd44f19a684109620e4841470a290e818b682610c47d93bb94f8cc8471cabb6720b3f0e829d841e8dad274b20ce5a7876c8bcd328728a2e2828f38d0b164b195fb7341f743352db22cd652f3c2760e59fa6e42af25942faff4e2719a88e4391',
            ec: 'true',
            fcURL: 'http://fast.fonts.net/dv2/',
            dfcURL: 'http://api2.fonts.com/FontSubsetter.ashx',
            fontdataversion: 'v2',
            sO: 'True',
            ffArray: {
                safari: {
                    '3.1': 'ttf',
                    '5.1': 'woff'
                },
                msafari: {
                    '1': 'svg',
                    '4.2': 'ttf'
                },
                chrome: {
                    '3': 'svg',
                    '4': 'ttf',
                    '5': 'woff'
                },
                opera: {
                    '10': 'ttf',
                    '11.10': 'woff'
                },
                msie: {
                    '4': 'eot',
                    '9': 'woff',
                    '10': 'otf'
                },
                mozilla: {
                    '3.5': 'ttf',
                    '3.6': 'woff'
                }
            },
            bsmcArray: {
                safari: {
                    '3.1': '2000',
                    '5.0': '1650',
                    '5.1': '8190'
                },
                msafari: {
                    '1': '8190'
                },
                chrome: {
                    '3': '8190'
                },
                opera: {
                    '10': '8190'
                },
                msie: {
                    '4': '2064'
                },
                mozilla: {
                    '3.5': '8190'
                }
            },
            fctypeArray: {
                'ttf': '1',
                'eot': '2',
                'woff': '3',
                'svg': '11',
                'otf': '13'
            },
            projectId: '902ac583-8a36-48ca-a426-e3f10a12615b',
            EOD: null
        },
        fontloading: function (fontFamily, fontDescription) {
            for (var i = 0; i < MonoTypeWebFonts._fontLoadingEventList.length; i++) {
                MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
            }
        },
        fontactive: function (fontFamily, fontDescription) {
            for (var i = 0; i < MonoTypeWebFonts._fontActiveEventList.length; i++) {
                MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
            }
        },
        inactive: function () {
            MonoTypeWebFonts.cleanup();
            for (var i = 0; i < MonoTypeWebFonts._inActiveEventList.length; i++) {
                MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);
            }
        },
        active: function () {
            MonoTypeWebFonts.cleanup();
            for (var i = 0; i < MonoTypeWebFonts._activeEventList.length; i++) {
                MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);
            }
        }
    });
};
MonoTypeWebFonts.loadFonts();
MonoTypeWebFonts.RefreshFonts = function () {
    MonoTypeWebFonts.cleanupExecuted = false;
    if (document.getElementById('mti_stylesheet_902ac583-8a36-48ca-a426-e3f10a12615b') != null) {
        var nodeToRemove1 = document.getElementById('mti_stylesheet_902ac583-8a36-48ca-a426-e3f10a12615b');
        var parentNode1 = nodeToRemove1.parentNode;
        parentNode1.removeChild(nodeToRemove1);
    }
    if (document.getElementById('mti_fontface_902ac583-8a36-48ca-a426-e3f10a12615b') != null) {
        var nodeToRemove2 = document.getElementById('mti_fontface_902ac583-8a36-48ca-a426-e3f10a12615b');
        var parentNode2 = nodeToRemove2.parentNode;
        parentNode2.removeChild(nodeToRemove2);
    }
    MonoTypeWebFonts.loadFonts();
};
MonoTypeWebFonts.loadColo = function () {
    if (!document.getElementById('mti_wfs_colophon')) {
        var colophon = document.createElement('DIV');
        colophon.setAttribute('id', 'mti_wfs_colophon');
        colophon.style.position = 'fixed';
        colophon.style.display = 'inline-block';
        colophon.style.bottom = '0px';
        colophon.style.right = '0px';
        document.body.appendChild(colophon);
        var colophonImageUrl = 'https://fast.fonts.net/colophon/Webfonts-SmallBadge.gif';
        if (window.location.protocol.toLowerCase() == 'https:') {
            colophonImageUrl = colophonImageUrl.replace('http:', 'https:');
        } else if (window.location.protocol.toLowerCase() == 'http:') {
            colophonImageUrl = colophonImageUrl.replace('https:', 'http:');
        }
        colophon.innerHTML = "<a target='_blank' href='http://www.fonts.com/BannerScript/PublishersUsedFont/902ac583-8a36-48ca-a426-e3f10a12615b'><img src='" + colophonImageUrl + "' alt='View all fonts in this project' height='35px' width='125px' border='0' /></a>";
    }
    if (/i(Pad|Pod|Phone)/.test(navigator.userAgent)) {
        var el = document.getElementById('mti_wfs_colophon');
        if (el) {
            window.onscroll = function () {
                el.style.top = (window.pageYOffset + window.innerHeight - 40) + 'px'
            };
        }
    }
};
setTimeout(function () {
    MonoTypeWebFonts.cleanup();
}, 40000);