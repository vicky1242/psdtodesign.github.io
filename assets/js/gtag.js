// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "undefined" },
      ],
      tags: [
        {
          function: "__rep",
          vtp_containerId: "UA-278362-13",
          vtp_remoteConfig: ["map"],
          tag_id: 1,
        },
        {
          function: "__zone",
          vtp_childContainers: ["list", ["map", "publicId", "G-1TMXD4QE48"]],
          vtp_enableConfiguration: false,
          tag_id: 3,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1],
        ],
      ],
    },
    runtime: [],
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    fa = function (a) {
      return (a.raw = a);
    },
    ha = function (a, b) {
      a.raw = b;
      return a;
    },
    ia = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ja = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ka = function (a) {
      return a instanceof Array ? a : ja(ia(a));
    },
    la =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    ra = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.rn = b.prototype;
    }; /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var sa = this || self,
    va = function (a) {
      return a;
    };
  var wa = function () {},
    xa = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    ya = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    za = Array.isArray,
    Aa = function (a, b) {
      if (a && za(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ba = function (a, b) {
      if (!ya(a) || !ya(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Da = function (a, b) {
      for (var c = new Ca(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ea = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Fa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ga = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ia = function (a) {
      var b = [];
      if (za(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ja = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ka = function () {
      return new Date(Date.now());
    },
    La = function () {
      return Ka().getTime();
    },
    Ca = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ca.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ca.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ma = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Na = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Oa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Pa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Qa = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Ra = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Sa = /^\w{1,9}$/,
    Ta = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Sa.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ua = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Xa = function (a) {
      if (null == a) return String(a);
      var b = Va.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Ya = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Za = function (a) {
      if (!a || "object" != Xa(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Ya(a, "constructor") &&
          !Ya(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Ya(a, b);
    },
    z = function (a, b) {
      var c = b || ("array" == Xa(a) ? [] : {}),
        d;
      for (d in a)
        if (Ya(a, d)) {
          var e = a[d];
          "array" == Xa(e)
            ? ("array" != Xa(c[d]) && (c[d] = []), (c[d] = z(e, c[d])))
            : Za(e)
            ? (Za(c[d]) || (c[d] = {}), (c[d] = z(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var $a = function (a) {
    if (void 0 == a || za(a) || Za(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function ab() {
    for (var a = bb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function cb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var bb, db;
  function eb(a) {
    bb = bb || cb();
    db = db || ab();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (h >> 4),
        p = ((h & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push(bb[m], bb[n], bb[p], bb[q]);
    }
    return b.join("");
  }
  function fb(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = db[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    bb = bb || cb();
    db = db || ab();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != l && (c += String.fromCharCode(((h << 6) & 192) | l)));
    }
  }
  var gb = {},
    hb = function (a, b) {
      gb[a] = gb[a] || [];
      gb[a][b] = !0;
    },
    ib = function () {
      delete gb.GA4_EVENT;
    },
    jb = function (a) {
      var b = gb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return eb(c.join("")).replace(/\.+$/, "");
    };
  var kb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var lb,
    mb = function () {
      if (void 0 === lb) {
        var a = null,
          b = sa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: va,
              createScript: va,
              createScriptURL: va,
            });
          } catch (c) {
            sa.console && sa.console.error(c.message);
          }
          lb = a;
        } else lb = a;
      }
      return lb;
    };
  var nb = function (a) {
    this.h = a;
  };
  nb.prototype.toString = function () {
    return this.h + "";
  };
  var ob = {};
  var pb, qb;
  a: {
    for (var rb = ["CLOSURE_FLAGS"], sb = sa, tb = 0; tb < rb.length; tb++)
      if (((sb = sb[rb[tb]]), null == sb)) {
        qb = null;
        break a;
      }
    qb = sb;
  }
  var ub = qb && qb[610401301];
  pb = null != ub ? ub : !1;
  function vb() {
    var a = sa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var wb,
    xb = sa.navigator;
  wb = xb ? xb.userAgentData || null : null;
  function yb(a) {
    return pb
      ? wb
        ? wb.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function zb(a) {
    return -1 != vb().indexOf(a);
  }
  function Ab() {
    return pb ? !!wb && 0 < wb.brands.length : !1;
  }
  function Bb() {
    return Ab() ? !1 : zb("Opera");
  }
  function Cb() {
    return zb("Firefox") || zb("FxiOS");
  }
  function Db() {
    return Ab()
      ? yb("Chromium")
      : ((zb("Chrome") || zb("CriOS")) && !(Ab() ? 0 : zb("Edge"))) ||
          zb("Silk");
  }
  var Eb = {},
    Fb = function (a) {
      this.h = a;
    };
  Fb.prototype.toString = function () {
    return this.h.toString();
  };
  var Gb = function (a) {
    return a instanceof Fb && a.constructor === Fb
      ? a.h
      : "type_error:SafeHtml";
  }; /*
    
     SPDX-License-Identifier: Apache-2.0
    */
  var Hb = fa([""]),
    Ib = ha(["\x00"], ["\\0"]),
    Jb = ha(["\n"], ["\\n"]),
    Kb = ha(["\x00"], ["\\u0000"]);
  function Lb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Lb(function (a) {
    return a(Hb);
  }) ||
    Lb(function (a) {
      return a(Ib);
    }) ||
    Lb(function (a) {
      return a(Jb);
    }) ||
    Lb(function (a) {
      return a(Kb);
    });
  var Mb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  function Nb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  function Ob(a) {
    var b = (a = Qb(a)),
      c = mb(),
      d = c ? c.createHTML(b) : b;
    return new Fb(d, Eb);
  }
  function Qb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var E = window,
    F = document,
    Rb = navigator,
    Sb = F.currentScript && F.currentScript.src,
    Tb = function (a, b) {
      var c = E[a];
      E[a] = void 0 === c ? b : c;
      return E[a];
    },
    Ub = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Vb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Wb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Xb(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Yb = function (a, b, c, d, e) {
      var f = F.createElement("script");
      Xb(f, d, Vb);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var h,
        l = Qb(a),
        m = mb(),
        n = m ? m.createScriptURL(l) : l;
      h = new nb(n, ob);
      f.src =
        h instanceof nb && h.constructor === nb
          ? h.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t =
          null ==
          (r = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Ub(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = F.getElementsByTagName("script")[0] || F.body || F.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Zb = function () {
      if (Sb) {
        var a = Sb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    $b = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || ((h = F.createElement("iframe")), (l = !0));
      Xb(h, c, Wb);
      d &&
        k(d, function (n, p) {
          h.dataset[n] = p;
        });
      f &&
        ((h.height = "0"),
        (h.width = "0"),
        (h.style.display = "none"),
        (h.style.visibility = "hidden"));
      if (l) {
        var m = (F.body && F.body.lastChild) || F.body || F.head;
        m.parentNode.insertBefore(h, m);
      }
      Ub(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    ac = function (a, b, c, d) {
      var e = new Image(1, 1);
      Xb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    bc = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    cc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      E.setTimeout(a, 0);
    },
    dc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    ec = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    fc = function (a) {
      var b = F.createElement("div"),
        c = b,
        d = Ob("A<div>" + a + "</div>");
      1 === c.nodeType && Nb(c);
      c.innerHTML = Gb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    gc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    hc = function (a) {
      var b;
      try {
        b = Rb.sendBeacon && Rb.sendBeacon(a);
      } catch (c) {
        hb("TAGGING", 15);
      }
      b || ac(a);
    },
    ic = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    jc = function (a) {
      var b = {
        headers: { "Attribution-Reporting-Eligible": "trigger" },
        keepalive: !0,
        attributionReporting: { eventSourceEligible: !0, triggerEligible: !0 },
      };
      try {
        E.fetch(a, b);
      } catch (c) {}
    },
    kc = function () {
      var a = E.performance;
      if (a && xa(a.now)) return a.now();
    },
    lc = function () {
      return E.performance || void 0;
    };
  function mc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function nc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function oc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + mc(c) + mc(d);
      case 1:
        return "G2" + nc(c) + nc(d);
      default:
        return "g1--";
    }
  }
  var pc = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Wi: a("consent"),
      Fg: a("convert_case_to"),
      Gg: a("convert_false_to"),
      Hg: a("convert_null_to"),
      Ig: a("convert_true_to"),
      Jg: a("convert_undefined_to"),
      Cm: a("debug_mode_metadata"),
      ka: a("function"),
      Ff: a("instance_name"),
      bk: a("live_only"),
      dk: a("malware_disabled"),
      ek: a("metadata"),
      hk: a("original_activity_id"),
      Sm: a("original_vendor_template_id"),
      Rm: a("once_on_load"),
      gk: a("once_per_event"),
      Oh: a("once_per_load"),
      Wm: a("priority_override"),
      Xm: a("respected_consent_types"),
      Th: a("setup_tags"),
      pd: a("tag_id"),
      Yh: a("teardown_tags"),
    };
  })();
  var Mc;
  var Nc = [],
    Oc = [],
    Pc = [],
    Qc = [],
    Rc = [],
    Sc = {},
    Tc,
    Uc,
    Vc = function (a) {
      Uc = Uc || a;
    },
    Wc = function (a) {},
    Xc,
    Yc = [],
    Zc = function (a, b) {
      var c = a[pc.ka],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Sc[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== Yc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e &&
            d &&
            d.checkPixieIncompatibility &&
            d.checkPixieIncompatibility(a[m]),
          e && (h[m] = a[m]),
          !e || f) &&
          (l[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (h.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = Nc[q];
                  break;
                case 1:
                  r = Qc[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = r && r[pc.Ff];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && ((h.vtp_gtmEntityIndex = b.index), (h.vtp_gtmEntityName = b.name));
      }
      var u, v;
      e && (u = e(h));
      if (!e || f) v = Mc(c, l, b);
      f &&
        d &&
        ($a(u)
          ? typeof u !== typeof v && d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c));
      return e ? u : v;
    },
    ad = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = $c(a[e], b, c));
      return d;
    },
    $c = function (a, b, c) {
      if (za(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push($c(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Nc[f];
            if (!h || b.isBlocked(h)) return;
            c[f] = !0;
            var l = String(h[pc.Ff]);
            try {
              var m = ad(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Zc(m, { event: b, index: f, type: 2, name: l });
              Xc && (d = Xc.Dk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[$c(a[n], b, c)] = $c(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = $c(a[q], b, c);
              Uc && (p = p || Uc.xl(r));
              d.push(r);
            }
            return Uc && p ? Uc.Fk(d) : d.join("");
          case "escape":
            d = $c(a[1], b, c);
            if (Uc && za(a[1]) && "macro" === a[1][0] && Uc.yl(a))
              return Uc.Vl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) qc[a[t]] && (d = qc[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Qc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { ji: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[pc.ka] = a[1];
            var w = bd(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    bd = function (a, b, c) {
      try {
        return Tc(ad(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    cd = function (a) {
      var b = a[pc.ka];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Sc[b];
    };
  var fd = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = dd(a), f = 0; f < Oc.length; f++) {
        var h = Oc[f],
          l = ed(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Qc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    ed = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    dd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = bd(Pc[c], a));
        return b[c];
      };
    };
  var gd = {
    Dk: function (a, b) {
      b[pc.Fg] &&
        "string" === typeof a &&
        (a = 1 == b[pc.Fg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(pc.Hg) && null === a && (a = b[pc.Hg]);
      b.hasOwnProperty(pc.Jg) && void 0 === a && (a = b[pc.Jg]);
      b.hasOwnProperty(pc.Ig) && !0 === a && (a = b[pc.Ig]);
      b.hasOwnProperty(pc.Gg) && !1 === a && (a = b[pc.Gg]);
      return a;
    },
  };
  var hd = [],
    id = function (a) {
      return void 0 == hd[a] ? !1 : hd[a];
    };
  var wd = [
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector",
    ],
    xd = new Ca();
  var Ed = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Fd(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] +
        c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        a | b
      ] + c);
  }
  var Hd = function (a) {
      return Gd ? F.querySelectorAll(a) : null;
    },
    Id = function (a, b) {
      if (!Gd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Jd = !1;
  if (F.querySelectorAll)
    try {
      var Kd = F.querySelectorAll(":root");
      Kd && 1 == Kd.length && Kd[0] == F.documentElement && (Jd = !0);
    } catch (a) {}
  var Gd = Jd;
  var J = function (a) {
    hb("GTM", a);
  };
  var K = {
      g: {
        ya: "ad_personalization",
        F: "ad_storage",
        K: "ad_user_data",
        O: "analytics_storage",
        Wb: "region",
        Qd: "consent_updated",
        Ag: "wait_for_update",
        aj: "ads",
        Bm: "all",
        bj: "maps",
        cj: "playstore",
        dj: "search",
        ej: "shopping",
        fj: "youtube",
        ij: "app_remove",
        jj: "app_store_refund",
        kj: "app_store_subscription_cancel",
        lj: "app_store_subscription_convert",
        mj: "app_store_subscription_renew",
        Kg: "add_payment_info",
        Lg: "add_shipping_info",
        Xb: "add_to_cart",
        Yb: "remove_from_cart",
        Mg: "view_cart",
        Cb: "begin_checkout",
        Zb: "select_item",
        Xa: "view_item_list",
        jb: "select_promotion",
        Ya: "view_promotion",
        na: "purchase",
        ac: "refund",
        Ca: "view_item",
        Ng: "add_to_wishlist",
        nj: "exception",
        oj: "first_open",
        pj: "first_visit",
        oa: "gtag.config",
        La: "gtag.get",
        qj: "in_app_purchase",
        bc: "page_view",
        rj: "screen_view",
        sj: "session_start",
        tj: "timing_complete",
        uj: "track_social",
        Rd: "user_engagement",
        kb: "gclid",
        qa: "ads_data_redaction",
        ja: "allow_ad_personalization_signals",
        ff: "allow_custom_scripts",
        hf: "allow_display_features",
        Sd: "allow_enhanced_conversions",
        Za: "allow_google_signals",
        Da: "allow_interest_groups",
        vj: "app_id",
        wj: "app_installer_id",
        xj: "app_name",
        yj: "app_version",
        fc: "auid",
        zj: "auto_detection_enabled",
        Db: "aw_remarketing",
        jf: "aw_remarketing_only",
        Td: "discount",
        Ud: "aw_feed_country",
        Vd: "aw_feed_language",
        W: "items",
        Wd: "aw_merchant_id",
        Og: "aw_basket_type",
        Dc: "campaign_content",
        Ec: "campaign_id",
        Fc: "campaign_medium",
        Gc: "campaign_name",
        Hc: "campaign",
        Ic: "campaign_source",
        Jc: "campaign_term",
        lb: "client_id",
        Aj: "content_group",
        Bj: "content_type",
        Ma: "conversion_cookie_prefix",
        Kc: "conversion_id",
        Ea: "conversion_linker",
        Eb: "conversion_api",
        Xd: "cookie_deprecation",
        Sa: "cookie_domain",
        Ga: "cookie_expires",
        Ta: "cookie_flags",
        hc: "cookie_name",
        Lc: "cookie_path",
        Na: "cookie_prefix",
        ic: "cookie_update",
        jc: "country",
        ra: "currency",
        Yd: "customer_lifetime_value",
        Mc: "custom_map",
        Pg: "gcldc",
        Cj: "debug_mode",
        X: "developer_id",
        Dj: "disable_merchant_reported_purchases",
        Nc: "dc_custom_params",
        Ej: "dc_natural_search",
        Qg: "dynamic_event_settings",
        Rg: "affiliation",
        Zd: "checkout_option",
        kf: "checkout_step",
        Sg: "coupon",
        Oc: "item_list_name",
        lf: "list_name",
        Fj: "promotions",
        Pc: "shipping",
        nf: "tax",
        ae: "engagement_time_msec",
        be: "enhanced_client_id",
        ce: "enhanced_conversions",
        Tg: "enhanced_conversions_automatic_settings",
        de: "estimated_delivery_date",
        pf: "euid_logged_in_state",
        Qc: "event_callback",
        Gj: "event_category",
        nb: "event_developer_id_string",
        Hj: "event_label",
        Ug: "event",
        ee: "event_settings",
        fe: "event_timeout",
        Ij: "description",
        Jj: "fatal",
        Kj: "experiments",
        qf: "firebase_id",
        he: "first_party_collection",
        ie: "_x_20",
        cb: "_x_19",
        Vg: "fledge",
        Wg: "flight_error_code",
        Xg: "flight_error_message",
        Yg: "fl_activity_category",
        Zg: "fl_activity_group",
        rf: "fl_advertiser_id",
        ah: "fl_ar_dedupe",
        tf: "match_id",
        bh: "fl_random_number",
        eh: "tran",
        fh: "u",
        je: "gac_gclid",
        kc: "gac_wbraid",
        gh: "gac_wbraid_multiple_conversions",
        hh: "ga_restrict_domain",
        ih: "ga_temp_client_id",
        ke: "gdpr_applies",
        jh: "geo_granularity",
        ob: "value_callback",
        eb: "value_key",
        Fm: "google_ono",
        Fb: "google_signals",
        kh: "google_tld",
        me: "groups",
        lh: "gsa_experiment_id",
        mh: "iframe_state",
        Rc: "ignore_referrer",
        uf: "internal_traffic_results",
        qb: "is_legacy_converted",
        rb: "is_legacy_loaded",
        ne: "is_passthrough",
        oe: "_lps",
        Ha: "language",
        vf: "legacy_developer_id_string",
        Ia: "linker",
        Sc: "accept_incoming",
        Gb: "decorate_forms",
        R: "domains",
        mc: "url_position",
        nh: "method",
        Lj: "name",
        Tc: "new_customer",
        oh: "non_interaction",
        Mj: "optimize_id",
        Nj: "page_hostname",
        Uc: "page_path",
        Ja: "page_referrer",
        sb: "page_title",
        ph: "passengers",
        qh: "phone_conversion_callback",
        Oj: "phone_conversion_country_code",
        rh: "phone_conversion_css_class",
        Pj: "phone_conversion_ids",
        sh: "phone_conversion_number",
        th: "phone_conversion_options",
        wf: "_protected_audience_enabled",
        Vc: "quantity",
        pe: "redact_device_info",
        xf: "referral_exclusion_definition",
        Hb: "restricted_data_processing",
        Qj: "retoken",
        Rj: "sample_rate",
        yf: "screen_name",
        tb: "screen_resolution",
        Sj: "search_term",
        Oa: "send_page_view",
        Ib: "send_to",
        Wc: "server_container_url",
        Xc: "session_duration",
        qe: "session_engaged",
        zf: "session_engaged_time",
        ub: "session_id",
        se: "session_number",
        Yc: "delivery_postal_code",
        Gm: "temporary_client_id",
        Af: "topmost_url",
        Tj: "tracking_id",
        Bf: "traffic_type",
        sa: "transaction_id",
        Jb: "transport_url",
        uh: "trip_type",
        Kb: "update",
        vb: "url_passthrough",
        Zc: "_user_agent_architecture",
        ad: "_user_agent_bitness",
        bd: "_user_agent_full_version_list",
        dd: "_user_agent_mobile",
        ed: "_user_agent_model",
        fd: "_user_agent_platform",
        gd: "_user_agent_platform_version",
        hd: "_user_agent_wow64",
        Aa: "user_data",
        vh: "user_data_auto_latency",
        wh: "user_data_auto_meta",
        xh: "user_data_auto_multi",
        yh: "user_data_auto_selectors",
        zh: "user_data_auto_status",
        ue: "user_data_mode",
        ve: "user_data_settings",
        Pa: "user_id",
        Ua: "user_properties",
        Ah: "_user_region",
        Bh: "us_privacy_string",
        ba: "value",
        nc: "wbraid",
        Ch: "wbraid_multiple_conversions",
        Ih: "_host_name",
        Jh: "_in_page_command",
        Kh: "_is_passthrough_cid",
        sc: "non_personalized_ads",
        od: "_sst_parameters",
        ab: "conversion_label",
        za: "page_location",
        pb: "global_developer_id_string",
        te: "tc_privacy_string",
      },
    },
    je = {},
    ke = Object.freeze(
      ((je[K.g.ja] = 1),
      (je[K.g.hf] = 1),
      (je[K.g.Sd] = 1),
      (je[K.g.Za] = 1),
      (je[K.g.W] = 1),
      (je[K.g.Sa] = 1),
      (je[K.g.Ga] = 1),
      (je[K.g.Ta] = 1),
      (je[K.g.hc] = 1),
      (je[K.g.Lc] = 1),
      (je[K.g.Na] = 1),
      (je[K.g.ic] = 1),
      (je[K.g.Mc] = 1),
      (je[K.g.X] = 1),
      (je[K.g.Qg] = 1),
      (je[K.g.Qc] = 1),
      (je[K.g.ee] = 1),
      (je[K.g.fe] = 1),
      (je[K.g.he] = 1),
      (je[K.g.hh] = 1),
      (je[K.g.Fb] = 1),
      (je[K.g.kh] = 1),
      (je[K.g.me] = 1),
      (je[K.g.uf] = 1),
      (je[K.g.qb] = 1),
      (je[K.g.rb] = 1),
      (je[K.g.Ia] = 1),
      (je[K.g.xf] = 1),
      (je[K.g.Hb] = 1),
      (je[K.g.Oa] = 1),
      (je[K.g.Ib] = 1),
      (je[K.g.Wc] = 1),
      (je[K.g.Xc] = 1),
      (je[K.g.zf] = 1),
      (je[K.g.Yc] = 1),
      (je[K.g.Jb] = 1),
      (je[K.g.Kb] = 1),
      (je[K.g.ve] = 1),
      (je[K.g.Ua] = 1),
      (je[K.g.od] = 1),
      je)
    );
  Object.freeze([
    K.g.za,
    K.g.Ja,
    K.g.sb,
    K.g.Ha,
    K.g.yf,
    K.g.Pa,
    K.g.qf,
    K.g.Aj,
  ]);
  var le = {},
    me = Object.freeze(
      ((le[K.g.ij] = 1),
      (le[K.g.jj] = 1),
      (le[K.g.kj] = 1),
      (le[K.g.lj] = 1),
      (le[K.g.mj] = 1),
      (le[K.g.oj] = 1),
      (le[K.g.pj] = 1),
      (le[K.g.qj] = 1),
      (le[K.g.sj] = 1),
      (le[K.g.Rd] = 1),
      le)
    ),
    ne = {},
    oe = Object.freeze(
      ((ne[K.g.Kg] = 1),
      (ne[K.g.Lg] = 1),
      (ne[K.g.Xb] = 1),
      (ne[K.g.Yb] = 1),
      (ne[K.g.Mg] = 1),
      (ne[K.g.Cb] = 1),
      (ne[K.g.Zb] = 1),
      (ne[K.g.Xa] = 1),
      (ne[K.g.jb] = 1),
      (ne[K.g.Ya] = 1),
      (ne[K.g.na] = 1),
      (ne[K.g.ac] = 1),
      (ne[K.g.Ca] = 1),
      (ne[K.g.Ng] = 1),
      ne)
    ),
    pe = Object.freeze([K.g.ja, K.g.Za, K.g.ic, K.g.Rc, K.g.Kb]),
    qe = Object.freeze([].concat(pe)),
    re = Object.freeze([K.g.Ga, K.g.fe, K.g.Xc, K.g.zf, K.g.ae]),
    se = Object.freeze([].concat(re)),
    te = {},
    ue =
      ((te[K.g.F] = "1"),
      (te[K.g.O] = "2"),
      (te[K.g.K] = "3"),
      (te[K.g.ya] = "4"),
      te),
    ve = {},
    we = Object.freeze(
      ((ve[K.g.ja] = 1),
      (ve[K.g.Sd] = 1),
      (ve[K.g.Da] = 1),
      (ve[K.g.Db] = 1),
      (ve[K.g.jf] = 1),
      (ve[K.g.Td] = 1),
      (ve[K.g.Ud] = 1),
      (ve[K.g.Vd] = 1),
      (ve[K.g.W] = 1),
      (ve[K.g.Wd] = 1),
      (ve[K.g.Ma] = 1),
      (ve[K.g.Ea] = 1),
      (ve[K.g.Sa] = 1),
      (ve[K.g.Ga] = 1),
      (ve[K.g.Ta] = 1),
      (ve[K.g.Na] = 1),
      (ve[K.g.ra] = 1),
      (ve[K.g.Yd] = 1),
      (ve[K.g.X] = 1),
      (ve[K.g.Dj] = 1),
      (ve[K.g.ce] = 1),
      (ve[K.g.de] = 1),
      (ve[K.g.qf] = 1),
      (ve[K.g.he] = 1),
      (ve[K.g.qb] = 1),
      (ve[K.g.rb] = 1),
      (ve[K.g.Ha] = 1),
      (ve[K.g.Tc] = 1),
      (ve[K.g.za] = 1),
      (ve[K.g.Ja] = 1),
      (ve[K.g.qh] = 1),
      (ve[K.g.rh] = 1),
      (ve[K.g.sh] = 1),
      (ve[K.g.th] = 1),
      (ve[K.g.Hb] = 1),
      (ve[K.g.Oa] = 1),
      (ve[K.g.Ib] = 1),
      (ve[K.g.Wc] = 1),
      (ve[K.g.Yc] = 1),
      (ve[K.g.sa] = 1),
      (ve[K.g.Jb] = 1),
      (ve[K.g.Kb] = 1),
      (ve[K.g.vb] = 1),
      (ve[K.g.Aa] = 1),
      (ve[K.g.Pa] = 1),
      (ve[K.g.ba] = 1),
      ve)
    ),
    xe = {},
    ye = Object.freeze(
      ((xe[K.g.dj] = "s"),
      (xe[K.g.fj] = "y"),
      (xe[K.g.cj] = "p"),
      (xe[K.g.ej] = "h"),
      (xe[K.g.aj] = "a"),
      (xe[K.g.bj] = "m"),
      xe)
    );
  Object.freeze(K.g);
  var ze = {},
    Ae = (E.google_tag_manager = E.google_tag_manager || {}),
    Be = Math.random();
  ze.Gf = "41a0";
  ze.nd = Number("0") || 0;
  ze.aa = "dataLayer";
  ze.Yi =
    "ChEIgKmOrQYQiOOmvaXCkOeGARIlAHmOicW7Vv9wDmmvFUo06HHbB7xm+fd+nwIuy/U6nQTSs5WBQBoCbQM\x3d";
  var Ce = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    De = { __paused: 1, __tg: 1 },
    Ee;
  for (Ee in Ce) Ce.hasOwnProperty(Ee) && (De[Ee] = 1);
  var Fe = Ga(""),
    Ge,
    He = !1;
  He = !0;
  Ge = He;
  var Ie,
    Je = !1;
  Ie = Je;
  var Ke,
    Le = !1;
  Ke = Le;
  var Me,
    Ne = !1;
  Me = Ne;
  ze.Cc = "www.googletagmanager.com";
  var Oe = "" + ze.Cc + (Ge ? "/gtag/js" : "/gtm.js"),
    Pe = null,
    Qe = null,
    Re = {},
    Se = {},
    Te = {},
    Ue = function () {
      var a = Ae.sequence || 1;
      Ae.sequence = a + 1;
      return a;
    };
  ze.Xi = "";
  var Ve = "";
  ze.Ce = Ve;
  var We = function () {
    return "";
  };
  var Xe = new Ca(),
    Ye = {},
    Ze = {},
    bf = {
      name: ze.aa,
      set: function (a, b) {
        z(Ra(a, b), Ye);
        $e();
      },
      get: function (a) {
        return af(a, 2);
      },
      reset: function () {
        Xe = new Ca();
        Ye = {};
        $e();
      },
    },
    af = function (a, b) {
      return 2 != b ? Xe.get(a) : cf(a);
    },
    cf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ye, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    df = function (a, b) {
      Ze.hasOwnProperty(a) || (Xe.set(a, b), z(Ra(a, b), Ye), $e());
    },
    $e = function (a) {
      k(Ze, function (b, c) {
        Xe.set(b, c);
        z(Ra(b), Ye);
        z(Ra(b, c), Ye);
        a && delete Ze[b];
      });
    },
    ef = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? cf(a) : Xe.get(a);
      "array" === Xa(d) || "object" === Xa(d) ? (c = z(d)) : (c = d);
      return c;
    };
  var mf = [];
  function nf(a) {
    switch (a) {
      case 25:
        return 3;
      case 48:
        return 14;
      case 59:
        return 11;
      case 60:
        return 12;
      case 63:
        return 10;
      case 65:
        return 13;
      case 61:
        return 15;
      case 102:
        return 16;
      case 105:
        return 17;
    }
  }
  function N(a) {
    mf[a] = !0;
    var b = nf(a);
    b && (hd[b] = !0);
  }
  N(5);
  N(6);
  N(7);
  N(9);
  N(10);
  N(14);
  N(11);
  N(15);
  N(18);
  N(19);
  N(20);
  N(21);
  N(23);
  N(24);
  N(31);
  N(32);
  N(33);
  N(35);
  N(36);
  N(40);
  N(42);
  N(45);
  N(46);
  N(47);
  N(49);
  N(50);
  N(51);
  N(53);
  N(54);
  N(55);
  N(56);
  N(61);
  N(63);
  N(64);
  N(67);
  N(69);

  N(74);
  N(87);
  N(91);
  function P(a) {
    return !!mf[a];
  }
  var rf = function (a) {
    hb("HEALTH", a);
  };
  var sf;
  try {
    sf = JSON.parse(
      fb(
        "eyIwIjoiUEsiLCIxIjoiUEstUEIiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20ucGsiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"
      )
    );
  } catch (a) {
    J(123), rf(2), (sf = {});
  }
  var tf = function () {
      return sf["0"] || "";
    },
    uf = function () {
      var a = !1;
      return a;
    },
    vf = function () {
      var a = "";
      return a;
    },
    wf = function () {
      var a = !1;
      return a;
    },
    xf = function () {
      var a = "";
      return a;
    };
  var yf = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var zf = function (a) {
    zf[" "](a);
    return a;
  };
  zf[" "] = function () {};
  var Bf = function () {
    var a = Af,
      b = "Yf";
    if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
    var c = new a();
    return (a.Yf = c);
  };
  var Af = function () {
    var a = {};
    this.h = function () {
      var b = yf.h,
        c = yf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[yf.h] = !0;
    };
  };
  var Cf = !1,
    Df = !1,
    Ef = {},
    Ff = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function Gf() {
    var a = Tb("google_tag_data", {});
    return (a.ics = a.ics || new Hf());
  }
  var Hf = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedSetCps =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  Hf.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    hb("TAGGING", 19);
    void 0 == b ? hb("TAGGING", 18) : Mf(this, a, "granted" === b, c, d, e, f);
  };
  Hf.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      Mf(this, a[c], void 0, void 0, "", "", b);
  };
  var Mf = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Nf(p, n, e, f)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) l[b] = r;
      q &&
        E.setTimeout(function () {
          l[b] === r &&
            r.quiet &&
            (hb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0),
            a.notifyListeners());
        }, h);
    }
  };
  aa = Hf.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in Ef) Ef.hasOwnProperty(d) && Ef[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var h = ia(c), l = h.next(); !l.done; l = h.next())
        Of(this, l.value);
    } else if (void 0 !== b && f !== b) {
      var m = ia(c);
      for (l = m.next(); !l.done; l = m.next()) Of(this, l.value);
    }
  };
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Nf(m, l, d, e)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet,
      };
      if ("" !== d || !1 !== h.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (Ef.hasOwnProperty(a)) {
      var e = b[Ef[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (id(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Ff.hasOwnProperty(a)) return Ff[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    var f;
    a: {
      var h = this.cps,
        l,
        m = h[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      l = d.toUpperCase();
      if (Nf(p, n, l, e.toUpperCase())) {
        var q = { enabled: "granted" === b, region: p };
        if ("" !== l || !1 !== m.enabled) {
          h[a] = q;
          f = !0;
          break a;
        }
      }
      f = !1;
    }
    f && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, Mk: b });
  };
  var Of = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      za(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.yi = !0);
    }
  };
  Hf.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.yi) {
        d.yi = !1;
        try {
          d.Mk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function Nf(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  var Pf = function (a) {
      var b = Gf();
      b.accessedAny = !0;
      return (g(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Qf = function (a) {
      var b = Gf();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Rf = function (a) {
      var b = Gf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Sf = function () {
      if (!Bf().h()) return !1;
      var a = Gf();
      a.accessedAny = !0;
      return a.active;
    },
    Tf = function (a, b) {
      Gf().addListener(a, b);
    },
    Uf = function (a, b) {
      Gf().notifyListeners(a, b);
    },
    Vf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Rf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Tf(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Wf = function (a, b) {
      function c() {
        for (var l = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Pf(n) && !f[n] && l.push(n);
        }
        return l;
      }
      function d(l) {
        for (var m = 0; m < l.length; m++) f[l[m]] = !0;
      }
      var e = g(b) ? [b] : b,
        f = {},
        h = c();
      h.length !== e.length &&
        (d(h),
        Tf(e, function (l) {
          function m(q) {
            0 !== q.length && (d(q), (l.consentTypes = q), a(l));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : E.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function Xf() {}
  function Yf() {}
  var Zf = [K.g.F, K.g.O, K.g.K, K.g.ya],
    $f = function (a) {
      for (
        var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = { yd: 0 };
        d.yd < c.length;
        d = { yd: d.yd }, ++d.yd
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== K.g.Wb) {
                var l = c[e.yd],
                  m = tf(),
                  n = sf["1"] || "";
                Df = !0;
                Cf && hb("TAGGING", 20);
                Gf().declare(f, h, l, m, n);
              }
            };
          })(d)
        );
    },
    ag = function (a) {
      var b = a[K.g.Wb];
      b && J(40);
      var c = a[K.g.Ag];
      c && J(41);
      for (
        var d = za(b) ? b : [b], e = { zd: 0 };
        e.zd < d.length;
        e = { zd: e.zd }, ++e.zd
      )
        k(
          a,
          (function (f) {
            return function (h, l) {
              if (h !== K.g.Wb && h !== K.g.Ag) {
                var m = d[f.zd],
                  n = Number(c),
                  p = tf(),
                  q = sf["1"] || "";
                Cf = !0;
                Df && hb("TAGGING", 20);
                Gf().default(h, l, m, p, q, n);
              }
            };
          })(e)
        );
    },
    bg = function (a, b) {
      k(a, function (c, d) {
        Cf = !0;
        Df && hb("TAGGING", 20);
        Gf().update(c, d);
      });
      Uf(b.eventId, b.priorityId);
    },
    cg = function (a) {
      for (
        var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = { Ad: 0 };
        d.Ad < c.length;
        d = { Ad: d.Ad }, ++d.Ad
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== K.g.Wb) {
                var l = c[e.Ad],
                  m = tf(),
                  n = sf["1"] || "";
                Gf().setCps(f, h, l, m, n);
              }
            };
          })(d)
        );
    },
    R = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Pf(b);
      });
    },
    dg = function (a, b) {
      Wf(a, b);
    },
    eg = function (a, b) {
      Vf(a, b);
    },
    fg = function () {
      var a = [K.g.F, K.g.ya, K.g.K];
      Gf().waitForUpdate(a, 500);
    },
    gg = function (a) {
      for (var b = ia(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Gf().clearTimeout(d, void 0);
      }
      Uf();
    };
  var hg = function (a, b, c, d, e, f, h, l, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.J = f;
      this.s = h;
      this.eventMetadata = l;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    ig = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.h);
          c.push(a.M);
          c.push(a.C);
          c.push(a.J);
          c.push(a.s);
          break;
        case 2:
          c.push(a.h);
          break;
        case 1:
          c.push(a.M);
          c.push(a.C);
          c.push(a.J);
          c.push(a.s);
          break;
        case 4:
          c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.J);
      }
      return c;
    },
    U = function (a, b, c, d) {
      for (
        var e = ia(ig(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value;
        if (void 0 !== h[b]) return h[b];
      }
      return c;
    },
    jg = function (a) {
      for (
        var b = {}, c = ig(a, 4), d = ia(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), h = ia(f), l = h.next();
          !l.done;
          l = h.next()
        )
          b[l.value] = 1;
      return Object.keys(b);
    },
    kg = function (a, b, c) {
      function d(n) {
        Za(n) &&
          k(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        h = ig(a, void 0 === c ? 3 : c);
      h.reverse();
      for (var l = ia(h), m = l.next(); !m.done; m = l.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    lg = function (a) {
      for (
        var b = [K.g.Hc, K.g.Dc, K.g.Ec, K.g.Fc, K.g.Gc, K.g.Ic, K.g.Jc],
          c = ig(a, 3),
          d = ia(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, h = {}, l = !1, m = ia(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((h[p] = f[p]), (l = !0));
        }
        var q = l ? h : void 0;
        if (q) return q;
      }
      return {};
    },
    mg = function (a, b) {
      this.xe = a;
      this.ye = b;
      this.C = {};
      this.xb = {};
      this.h = {};
      this.J = {};
      this.qc = {};
      this.wb = {};
      this.s = {};
      this.Fa = function () {};
      this.T = function () {};
      this.M = !1;
    },
    ng = function (a, b) {
      a.C = b;
      return a;
    },
    og = function (a, b) {
      a.xb = b;
      return a;
    },
    pg = function (a, b) {
      a.h = b;
      return a;
    },
    qg = function (a, b) {
      a.J = b;
      return a;
    },
    rg = function (a, b) {
      a.qc = b;
      return a;
    },
    sg = function (a, b) {
      a.wb = b;
      return a;
    },
    tg = function (a, b) {
      a.s = b || {};
      return a;
    },
    ug = function (a, b) {
      a.Fa = b;
      return a;
    },
    vg = function (a, b) {
      a.T = b;
      return a;
    },
    wg = function (a, b) {
      a.M = b;
      return a;
    },
    xg = function (a) {
      return new hg(a.xe, a.ye, a.C, a.xb, a.h, a.J, a.wb, a.s, a.Fa, a.T, a.M);
    };
  function yg(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var zg = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Ag = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Bg = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Cg() {
    return pb ? !!wb && !!wb.platform : !1;
  }
  function Dg() {
    return zb("iPhone") && !zb("iPod") && !zb("iPad");
  }
  function Eg() {
    Dg() || zb("iPad") || zb("iPod");
  }
  Bb();
  Ab() || zb("Trident") || zb("MSIE");
  zb("Edge");
  !zb("Gecko") ||
    (-1 != vb().toLowerCase().indexOf("webkit") && !zb("Edge")) ||
    zb("Trident") ||
    zb("MSIE") ||
    zb("Edge");
  -1 != vb().toLowerCase().indexOf("webkit") && !zb("Edge") && zb("Mobile");
  Cg() || zb("Macintosh");
  Cg() || zb("Windows");
  (Cg() ? "Linux" === wb.platform : zb("Linux")) || Cg() || zb("CrOS");
  Cg() || zb("Android");
  Dg();
  zb("iPad");
  zb("iPod");
  Eg();
  vb().toLowerCase().indexOf("kaios");
  var Fg = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Gg = /#|$/,
    Hg = function (a, b) {
      var c = a.search(Gg),
        d = Fg(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Ig = /[?&]($|#)/,
    Jg = function (a, b, c) {
      for (
        var d, e = a.search(Gg), f = 0, h, l = [];
        0 <= (h = Fg(a, f, b, e));

      )
        l.push(a.substring(f, h)),
          (f = Math.min(a.indexOf("&", h) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(Ig, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Kg = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              zf(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Lg = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Mg(a) {
    if (!a || !F.head) return null;
    var b = Ng("META");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Og = function (a) {
      if (E.top == E) return 0;
      if (void 0 === a ? 0 : a) {
        var b = E.location.ancestorOrigins;
        if (b) return b[b.length - 1] == E.location.origin ? 1 : 2;
      }
      return Kg(E.top) ? 1 : 2;
    },
    Ng = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Pg(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Ng("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = kb(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Bg(e, "load", f);
      Bg(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Rg = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Lg(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Qg(c, b);
    },
    Qg = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Pg(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Sg = function () {};
  var Tg = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ug = function (a, b) {
      b = void 0 === b ? {} : b;
      this.s = a;
      this.h = null;
      this.M = {};
      this.Fa = 0;
      var c;
      this.T = null != (c = b.qm) ? c : 500;
      var d;
      this.J = null != (d = b.hn) ? d : !1;
      this.C = null;
    };
  ra(Ug, Sg);
  var Wg = function (a) {
    return "function" === typeof a.s.__tcfapi || null != Vg(a);
  };
  Ug.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.J },
      d = Ag(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (h, l) {
      clearTimeout(e);
      h
        ? ((c = h),
          (c.internalErrorState = Tg(c)),
          (c.internalBlockOnErrors = b.J),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Xg(this, "addEventListener", f);
    } catch (h) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Ug.prototype.removeEventListener = function (a) {
    a && a.listenerId && Xg(this, "removeEventListener", null, a.listenerId);
  };
  var Zg = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === h && (l = 1))
        : 3 === c && ((l = 1), 1 === h && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Yg(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Yg(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? Yg(a.purpose.legitimateInterests, b) &&
                Yg(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Yg = function (a, b) {
      return !(!a || !a[b]);
    },
    Xg = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Vg(a)) {
        $g(a);
        var f = ++a.Fa;
        a.M[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*"
          );
        }
      } else c({}, !1);
    },
    Vg = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    $g = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Bg(a.s, "message", a.C));
    },
    ah = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Tg(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Rg({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var bh = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function ch() {
    var a = Ae.tcf || {};
    return (Ae.tcf = a);
  }
  var dh = function () {
      return new Ug(E, { qm: -1 });
    },
    jh = function () {
      var a = ch(),
        b = dh();
      Wg(b) && !eh() && !fh() && J(124);
      if (!a.active && Wg(b)) {
        eh() &&
          ((a.active = !0),
          (a.Ab = {}),
          (a.cmpId = 0),
          (a.tcfPolicyVersion = 0),
          (Gf().active = !0),
          (a.tcString = "tcunavailable"));
        fg();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState)
              gh(a), gg([K.g.F, K.g.ya, K.g.K]), (Gf().active = !0);
            else if (
              ((a.gdprApplies = c.gdprApplies),
              (a.cmpId = c.cmpId),
              (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
              fh() && (a.active = !0),
              !hh(c) || eh() || fh())
            ) {
              a.tcfPolicyVersion = c.tcfPolicyVersion;
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in bh) bh.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (hh(c)) {
                var h = {},
                  l;
                for (l in bh)
                  if (bh.hasOwnProperty(l))
                    if ("1" === l) {
                      var m,
                        n = c,
                        p = { Rk: !0 };
                      p = void 0 === p ? {} : p;
                      m = ah(n)
                        ? !1 === n.gdprApplies ||
                          "tcunavailable" === n.tcString ||
                          (void 0 === n.gdprApplies && !p.Rk) ||
                          "string" !== typeof n.tcString ||
                          !n.tcString.length
                          ? !0
                          : Zg(n, "1", 0)
                        : !1;
                      h["1"] = m;
                    } else h[l] = Zg(c, l, bh[l]);
                d = h;
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.Ab = d;
                var q = {},
                  r = ((q[K.g.F] = a.Ab["1"] ? "granted" : "denied"), q);
                !0 !== a.gdprApplies
                  ? (gg([K.g.F, K.g.ya, K.g.K]), (Gf().active = !0))
                  : ((r[K.g.ya] =
                      a.Ab["3"] && a.Ab["4"] ? "granted" : "denied"),
                    "number" === typeof a.tcfPolicyVersion &&
                    4 <= a.tcfPolicyVersion
                      ? (r[K.g.K] =
                          a.Ab["1"] && a.Ab["7"] ? "granted" : "denied")
                      : gg([K.g.K]),
                    bg(
                      r,
                      { eventId: 0 },
                      {
                        gdprApplies: a ? a.gdprApplies : void 0,
                        tcString: ih() || "",
                      }
                    ));
              }
            } else gg([K.g.F, K.g.ya, K.g.K]);
          });
        } catch (c) {
          gh(a), gg([K.g.F, K.g.ya, K.g.K]), (Gf().active = !0);
        }
      }
    };
  function gh(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function hh(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var eh = function () {
    return !0 === E.gtag_enable_tcf_support;
  };
  function fh() {
    return !0 === ch().enableAdvertiserConsentMode;
  }
  var ih = function () {
      var a = ch();
      if (a.active) return a.tcString;
    },
    kh = function () {
      var a = ch();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    lh = function (a) {
      if (!bh.hasOwnProperty(String(a))) return !0;
      var b = ch();
      return b.active && b.Ab ? !!b.Ab[String(a)] : !0;
    };
  var mh = [K.g.F, K.g.O],
    nh = [K.g.F, K.g.O, K.g.K, K.g.ya],
    oh = {},
    ph = ((oh[K.g.F] = 1), (oh[K.g.O] = 2), oh);
  function qh(a) {
    if (void 0 === a) return 0;
    switch (U(a, K.g.ja)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var rh = function (a) {
      var b = qh(a);
      if (3 === b) return !1;
      switch (Qf(K.g.ya)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    sh = function () {
      return Sf() || !Pf(K.g.F) || !Pf(K.g.O);
    },
    th = function () {
      var a = {},
        b;
      for (b in ph) ph.hasOwnProperty(b) && (a[ph[b]] = Qf(b));
      var c =
          P(28) &&
          mh.every(function (e) {
            return Pf(e);
          }),
        d = P(26);
      return c || d ? oc(a, 1) : oc(a, 0);
    },
    zh = {},
    Ah =
      ((zh[K.g.F] = 0), (zh[K.g.O] = 1), (zh[K.g.K] = 2), (zh[K.g.ya] = 3), zh);
  function Bh(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var Ch = function (a) {
      for (var b = "1", c = 0; c < nh.length; c++) {
        var d = b,
          e,
          f = nh[c],
          h = Ef[f];
        e = void 0 === h ? 0 : Ah.hasOwnProperty(h) ? 12 | Ah[h] : 8;
        var l = Gf();
        l.accessedAny = !0;
        var m = l.entries[f] || {};
        e = (e << 2) | Bh(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (Bh(m.declare) << 4) | (Bh(m.default) << 2) | Bh(m.update)
            ]);
      }
      var n = b,
        p;
      p = "" + ((Sf() << 2) | qh(a));
      return n + p;
    },
    Dh = function () {
      if (!Pf(K.g.K)) return "-";
      var a = {},
        b = Gf().cps,
        c;
      for (c in b)
        b.hasOwnProperty(c) &&
          (a[c] = { enabled: b[c].enabled, region: b[c].region });
      for (
        var d = {}, e = ia(Object.keys(a)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value;
        d[h] = a[h].enabled;
      }
      for (
        var l = "", m = ia(Object.keys(ye)), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = n.value;
        !1 !== d[p] && (l += ye[p]);
      }
      return "" === l ? "-" : l;
    },
    Eh = function () {
      return sf["6"] || ((eh() || fh()) && "1" === kh()) ? "1" : "0";
    },
    Fh = function () {
      return (
        (sf["6"] ? !0 : !(!eh() && !fh()) && "1" === kh()) ||
        Gf().usedSetCps ||
        !Pf(K.g.K)
      );
    },
    Gh = function () {
      var a = "0",
        b = "0",
        c;
      var d = ch();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var h = ch();
      f = h.active ? h.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var l = 0;
      sf["6"] && (l |= 1);
      "1" === kh() && (l |= 2);
      eh() && (l |= 4);
      var m;
      var n = ch();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (l |= 8);
      Gf().waitPeriodTimedOut && (l |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l]
      );
    };
  var Hh = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var Ih = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Lh = function (a, b, c, d) {
      return Jh(d) ? Ih(a, String(b || Kh()), c) : [];
    },
    Oh = function (a, b, c, d, e) {
      if (Jh(e)) {
        var f = Mh(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Nh(
            f,
            function (h) {
              return h.Ie;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Nh(
            f,
            function (h) {
              return h.Kd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Ph(a, b, c, d) {
    var e = Kh(),
      f = window;
    "null" !== f.origin && (f.document.cookie = a);
    var h = Kh();
    return e != h || (void 0 != c && 0 <= Lh(b, h, !1, d).indexOf(c));
  }
  var Th = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete h[u], t;
        h[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete h[u], t;
        h[u] = !0;
        return t + "; " + u;
      }
      if (!Jh(c.ib)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Qh(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.mn);
      f = d(f, "samesite", c.on);
      c.pn && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Rh(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Sh(q, c.path) && Ph(r, a, b, c.ib)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Sh(m, c.path) ? 1 : Ph(f, a, b, c.ib) ? 0 : 1;
    },
    Uh = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Th(a, b, c);
    };
  function Nh(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Mh(a, b, c) {
    for (var d = [], e = Lh(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: h.join("."), Ie: 1 * m[0] || 1, Kd: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Qh = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Vh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Wh = /(^|\.)doubleclick\.net$/i,
    Sh = function (a, b) {
      return (
        Wh.test(window.document.location.hostname) || ("/" === b && Vh.test(a))
      );
    },
    Kh = function () {
      return "null" !== window.origin ? window.document.cookie : "";
    },
    Rh = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Wh.test(e) || Vh.test(e) || a.push("none");
      return a;
    },
    Jh = function (a) {
      return a && Bf().h()
        ? (g(a) ? [a] : a).every(function (b) {
            return Rf(b) && Pf(b);
          })
        : !0;
    },
    Xh = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Yh = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Zh = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Hh(a) & 2147483647)) : String(b);
    },
    $h = function (a) {
      return [Zh(a), Math.round(La() / 1e3)].join(".");
    },
    ai = function (a, b, c, d, e) {
      var f = Xh(b);
      return Oh(a, f, Yh(c), d, e);
    },
    bi = function (a, b, c, d) {
      var e = "" + Xh(c),
        f = Yh(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    };
  var ci = function () {
    Ae.dedupe_gclid || (Ae.dedupe_gclid = "" + $h());
    return Ae.dedupe_gclid;
  };
  var di = function () {
    var a = !1;
    return a;
  };
  var fi = function (a) {
      var b = ei();
      b.pending || (b.pending = []);
      Aa(b.pending, function (c) {
        return (
          c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        );
      }) || b.pending.push({ target: a, onLoad: void 0 });
    },
    gi = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    ei = function () {
      var a = Tb("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new gi()), (a.tidr = b));
      return b;
    };
  var hi = {},
    ii = !1,
    ji = {
      ctid: "UA-278362-13",
      Ge: "",
      wi: "UA-278362-13",
      xi: "UA-278362-13",
    };
  hi.kd = Ga("");
  var mi = function () {
      var a = ki();
      return ii ? a.map(li) : a;
    },
    oi = function () {
      var a = ni();
      return ii ? a.map(li) : a;
    },
    qi = function () {
      return pi(ji.ctid);
    },
    ri = function () {
      return pi(ji.Ge || "_" + ji.ctid);
    },
    ki = function () {
      return ji.wi ? ji.wi.split("|") : [ji.ctid];
    },
    ni = function () {
      return ji.xi ? ji.xi.split("|") : [];
    },
    si = function (a) {
      var b = ei();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    pi = function (a) {
      return ii ? li(a) : a;
    },
    li = function (a) {
      return "siloed_" + a;
    },
    ti = function (a) {
      a = String(a);
      return ii && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    ui = function () {
      var a = !1;
      if (a) {
        var b = ei();
        if (b.siloed) {
          for (
            var c = [], d = ki(), e = ni(), f = {}, h = 0;
            h < b.siloed.length;
            f = { He: void 0 }, h++
          )
            (f.He = b.siloed[h]),
              !ii &&
              Aa(
                f.He.isDestination ? e : d,
                (function (l) {
                  return function (m) {
                    return m === l.He.ctid;
                  };
                })(f)
              )
                ? (ii = !0)
                : c.push(f.He);
          b.siloed = c;
        }
      }
    };
  function vi() {
    var a = ei();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = mi(), f = oi(), h = {}, l = 0;
        l < a.pending.length;
        h = { Ld: void 0 }, l++
      )
        (h.Ld = a.pending[l]),
          Aa(
            h.Ld.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Ld.target.ctid;
              };
            })(h)
          )
            ? d || ((b = h.Ld.onLoad), (d = !0))
            : c.push(h.Ld);
      a.pending = c;
      if (b)
        try {
          b(ri());
        } catch (m) {}
    }
  }
  var wi = function () {
      for (var a = ei(), b = mi(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d
          ? ((d.state = 2), (d.containers = mi()), (d.destinations = oi()))
          : (a.container[b[c]] = {
              state: 2,
              containers: mi(),
              destinations: oi(),
            });
      }
      for (var e = oi(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && J(93);
        h
          ? ((h.state = 2), (h.containers = mi()), (h.destinations = oi()))
          : (a.destination[e[f]] = {
              state: 2,
              containers: mi(),
              destinations: oi(),
            });
      }
      a.canonical[ri()] = {};
      vi();
    },
    xi = function (a) {
      return !!ei().container[a];
    },
    yi = function () {
      return { ctid: qi(), isDestination: hi.kd };
    };
  function zi(a) {
    var b = ei();
    (b.siloed = b.siloed || []).push(a);
  }
  var Ai = function () {
      var a = ei().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Bi = function () {
      var a = {};
      k(ei().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Ci = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var Di = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Ei = function (a, b) {
      var c = ji.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = ji.ctid;
      d.fm = ze.nd;
      d.hm = ze.Gf;
      d.Hl = hi.kd ? 2 : 1;
      d.di = ji.Ge;
      d.di !== a && (d.We = a);
      P(75) ? (d.Ki = 2) : P(76) && (d.Ki = 1);
      Ge ? ((d.Ue = Di[c]), d.Ue || (d.Ue = 0)) : (d.Ue = Me ? 13 : 10);
      Ke ? (d.ig = 1) : di() ? (d.ig = 2) : (d.ig = 3);
      var e;
      var f = d.Ue,
        h = d.ig;
      void 0 === f
        ? (e = "")
        : (h || (h = 0),
          (e =
            "" +
            Fd(1, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (f << 2) | h
            ]));
      var l = d.gn,
        m =
          4 +
          e +
          (l
            ? "" +
              Fd(2, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                l
              ]
            : ""),
        n,
        p = d.hm;
      n = p && Ed.test(p) ? "" + Fd(3, 2) + p : "";
      var q,
        r = d.fm;
      q = r
        ? "" +
          Fd(4, 1) +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r]
        : "";
      var t;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) t = "";
        else {
          var x = v[1];
          t =
            "" +
            Fd(5, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              1 + x.length
            ] +
            (d.Hl || 0) +
            x;
        }
      } else t = "";
      var y = d.Ki,
        A = d.di,
        B = d.We,
        C = d.qn;
      return (
        m +
        n +
        q +
        t +
        (y
          ? "" +
            Fd(6, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              y
            ]
          : "") +
        (A
          ? "" +
            Fd(7, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              A.length
            ] +
            A
          : "") +
        (B
          ? "" +
            Fd(8, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              B.length
            ] +
            B
          : "") +
        (C
          ? "" +
            Fd(9, 3) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              C.length
            ] +
            C
          : "")
      );
    };
  var Fi = /:[0-9]+$/,
    Gi = /^\d+\.fls\.doubleclick\.net$/,
    Hi = function (a, b, c) {
      function d(p) {
        return id(10)
          ? decodeURIComponent(p.replace(/\+/g, " "))
          : decodeURIComponent(p).replace(/\+/g, " ");
      }
      for (var e = ia(a.split("&")), f = e.next(); !f.done; f = e.next()) {
        var h = ia(f.value.split("=")),
          l = h.next().value,
          m = ja(h);
        if (d(l) === b) {
          var n = m.join("=");
          return c ? n : d(n);
        }
      }
    },
    Ki = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Ii(a.protocol) || Ii(E.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : E.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || E.location.hostname)
            .replace(Fi, "")
            .toLowerCase());
      return Ji(a, b, c, d, e);
    },
    Ji = function (a, b, c, d, e) {
      var f,
        h = Ii(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Li(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(Fi, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || hb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Hi(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ii = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Li = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Mi = {},
    Ni = 0,
    Pi = function (a) {
      if (id(17)) {
        var b = Mi[a];
        b || ((b = Oi(a)), 5 > Ni && ((Mi[a] = b), Ni++));
        return b;
      }
      return Oi(a);
    },
    Oi = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || hb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Fi, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Qi = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Pi(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Ri = function (a) {
      var b = Pi(E.location.href),
        c = Ki(b, "host", !1);
      if (c && c.match(Gi)) {
        var d = Ki(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Si(a, b, c, d) {
    var e,
      f = Number(null != a.zb ? a.zb : void 0);
    0 !== f && (e = new Date((b || La()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      ib: d,
    };
  }
  var Ti;
  var Xi = function () {
      var a = Ui,
        b = Vi,
        c = Wi(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        bc(F, "mousedown", d);
        bc(F, "keyup", d);
        bc(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Yi = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Wi().decorators.push(f);
    },
    Zi = function (a, b, c) {
      for (var d = Wi().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if ((l = !c || h.forms))
          a: {
            var m = h.domains,
              n = a,
              p = !!h.sameHost;
            if (m && (p || n !== F.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Oa(e, h.callback());
        }
      }
      return e;
    };
  function Wi() {
    var a = Tb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var $i = /(.*?)\*(.*?)\*(.*)/,
    aj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    bj = /^(?:www\.|m\.|amp\.)+/,
    cj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function dj(a) {
    var b = cj.exec(a);
    if (b) return { og: b[1], query: b[2], fragment: b[3] };
  }
  function ej(a, b) {
    var c = [
        Rb.userAgent,
        new Date().getTimezoneOffset(),
        Rb.userLanguage || Rb.language,
        Math.floor(La() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Ti)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++)
          h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    Ti = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ Ti[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function fj() {
    return function (a) {
      var b = Pi(E.location.href),
        c = b.search.replace("?", ""),
        d = Hi(c, "_gl", !0) || "";
      a.query = gj(d) || {};
      var e = Ki(b, "fragment"),
        f;
      var h = -1;
      if (Qa(e, "_gl=")) h = 4;
      else {
        var l = e.indexOf("&_gl=");
        0 < l && (h = l + 3 + 2);
      }
      if (0 > h) f = void 0;
      else {
        var m = e.indexOf("&", h);
        f = 0 > m ? e.substring(h) : e.substring(h, m);
      }
      a.fragment = gj(f || "") || {};
    };
  }
  var hj = function (a) {
      var b = fj(),
        c = Wi();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Oa(d, e.query), a && Oa(d, e.fragment));
      return d;
    },
    gj = function (a) {
      try {
        var b = ij(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              h = fb(d[e + 1]);
            c[f] = h;
          }
          hb("TAGGING", 6);
          return c;
        }
      } catch (l) {
        hb("TAGGING", 8);
      }
    };
  function ij(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = $i.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p)
            if (n === ej(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        hb("TAGGING", 7);
      }
    }
  }
  function jj(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v);
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var h = dj(c);
    if (!h) return "";
    var l = h.query || "",
      m = h.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (l = "?" + f(l.substring(1)));
    return "" + h.og + l + m;
  }
  function kj(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              "[object Object]" !== x.toString() &&
              (v.push(w), v.push(eb(String(x))));
          }
        var y = v.join("*");
        u = ["1", ej(y), y].join("*");
        d
          ? (id(13) || id(11) || !p) && lj("_gl", u, a, p, q)
          : mj("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Zi(b, 1, d),
      f = Zi(b, 2, d),
      h = Zi(b, 4, d),
      l = Zi(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    id(11) && c(h, !0, !0);
    for (var m in l) l.hasOwnProperty(m) && nj(m, l[m], a);
  }
  function nj(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? mj(a, b, c)
      : "form" === c.tagName.toLowerCase() && lj(a, b, c);
  }
  function mj(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var h;
      if (!(h = !id(16) || d)) {
        var l = E.location.href,
          m = dj(c.href),
          n = dj(l);
        h = !(m && n && m.og === n.og && m.query === n.query && m.fragment);
      }
      f = h;
    }
    if (f) {
      var p = jj(a, b, c.href, d, e);
      Mb.test(p) && (c.href = p);
    }
  }
  function lj(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var h = jj(a, b, c.action, d, e);
          Mb.test(h) && (c.action = h);
        }
      } else {
        for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
          var p = l[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = F.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Ui(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || kj(e, e.hostname);
      }
    } catch (h) {}
  }
  function Vi(a) {
    try {
      if (a.action) {
        var b = Ki(Pi(a.action), "host");
        kj(a, b);
      }
    } catch (c) {}
  }
  var oj = function (a, b, c, d) {
      Xi();
      Yi(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    pj = function (a, b) {
      Xi();
      Yi(a, [Ji(E.location, "host", !0)], b, !0, !0);
    },
    qj = function () {
      var a = F.location.hostname,
        b = aj.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(bj, ""),
        m = e.replace(bj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    rj = function (a, b) {
      return !1 === a ? !1 : a || b || qj();
    };
  var sj = ["1"],
    tj = {},
    uj = {},
    zj = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = vj(a.prefix);
      if (!tj[c])
        if (wj(c, a.path, a.domain)) {
          var d = uj[vj(a.prefix)];
          xj(a, d ? d.id : void 0, d ? d.gg : void 0);
        } else {
          var e = Ri("auiddc");
          if (e) hb("TAGGING", 17), (tj[c] = e);
          else if (b) {
            var f = vj(a.prefix),
              h = $h();
            if (0 === yj(f, h, a)) {
              var l = Tb("google_tag_data", {});
              l._gcl_au || (l._gcl_au = h);
            }
            wj(c, a.path, a.domain);
          }
        }
    };
  function xj(a, b, c) {
    var d = vj(a.prefix),
      e = tj[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(La() / 1e3)));
          yj(d, l, a, 1e3 * h);
        }
      }
    }
  }
  function yj(a, b, c, d) {
    var e = bi(b, "1", c.domain, c.path),
      f = Si(c, d);
    f.ib = Aj();
    return Uh(a, e, f);
  }
  function wj(a, b, c) {
    var d = ai(a, b, c, sj, Aj());
    if (!d) return !1;
    Bj(a, d);
    return !0;
  }
  function Bj(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((tj[a] = c.slice(0, 2).join(".")),
        (uj[a] = { id: c.slice(2, 4).join("."), gg: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (uj[a] = { id: c.slice(0, 2).join("."), gg: Number(c[2]) || 0 })
      : (tj[a] = b);
  }
  function vj(a) {
    return (a || "_gcl") + "_au";
  }
  function Cj(a) {
    function b() {
      Pf(c) && a();
    }
    var c = Aj();
    Vf(function () {
      b();
      Pf(c) || Wf(b, c);
    }, c);
  }
  function Dj(a) {
    var b = hj(!0),
      c = vj(a.prefix);
    Cj(function () {
      var d = b[c];
      if (d) {
        Bj(c, d);
        var e = 1e3 * Number(tj[c].split(".")[1]);
        if (e) {
          hb("TAGGING", 16);
          var f = Si(a, e);
          f.ib = Aj();
          var h = bi(d, "1", a.domain, a.path);
          Uh(c, h, f);
        }
      }
    });
  }
  function Ej(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = ai(a, e.path, e.domain, sj, Aj());
      l && (h[a] = l);
      return h;
    };
    Cj(function () {
      oj(f, b, c, d);
    });
  }
  function Aj() {
    return id(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Fj = function (a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          xg: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function Gj(a, b) {
    var c = Fj(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].xg] || (d[c[e].xg] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), U: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].xg].push(h);
      }
    }
    return d;
  }
  var Hj = /^\w+$/,
    Ij = /^[\w-]+$/,
    Jj = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" };
  function Kj() {
    return id(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Lj = function (a) {
      return !Bf().h() || Pf(a);
    },
    Mj = function (a) {
      function b() {
        var d = Lj(c);
        d && a();
        return d;
      }
      var c = Kj();
      Vf(function () {
        b() || Wf(b, c);
      }, c);
    },
    Oj = function (a) {
      return Nj(a).map(function (b) {
        return b.U;
      });
    },
    Nj = function (a) {
      var b = [],
        c = Lh(a, F.cookie, void 0, Kj());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { U: void 0 }, e++) {
        var f = Pj(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.U = h.U;
          var m = h.timestamp,
            n = h.labels,
            p = Aa(
              b,
              (function (q) {
                return function (r) {
                  return r.U === q.U;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, m)),
              (p.labels = Qj(p.labels, n || [])))
            : b.push({ version: l, U: d.U, timestamp: m, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Rj(b);
    };
  function Qj(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Sj(a) {
    return a && "string" == typeof a && a.match(Hj) ? a : "_gcl";
  }
  var Uj = function () {
      var a = Pi(E.location.href),
        b = Ki(a, "query", !1, void 0, "gclid"),
        c = Ki(a, "query", !1, void 0, "gclsrc"),
        d = Ki(a, "query", !1, void 0, "wbraid"),
        e = Ki(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Hi(f, "gclid");
        c = c || Hi(f, "gclsrc");
        d = d || Hi(f, "wbraid");
      }
      return Tj(b, c, e, d);
    },
    Tj = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ij.test(d) && ((e.wbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(Ij))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    Wj = function (a) {
      var b = Uj();
      Mj(function () {
        Vj(b, !1, a);
      });
    };
  function Vj(a, b, c, d, e) {
    function f(w, x) {
      var y = Xj(w, h);
      y && (Uh(y, x, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var h = Sj(c.prefix);
    d = d || La();
    var l = Si(c, d, !0);
    l.ib = Kj();
    var m = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Xj("gb", h),
        t = !1;
      if (!b)
        for (var u = Nj(r), v = 0; v < u.length; v++)
          u[v].U === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Zj = function (a, b) {
      var c = hj(!0);
      Mj(function () {
        for (var d = Sj(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Jj[f]) {
            var h = Xj(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Yj(l), La()),
                n;
              b: {
                for (
                  var p = m, q = Lh(h, F.cookie, void 0, Kj()), r = 0;
                  r < q.length;
                  ++r
                )
                  if (Yj(q[r]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var t = Si(b, m, !0);
                t.ib = Kj();
                Uh(h, l, t);
              }
            }
          }
        }
        Vj(Tj(c.gclid, c.gclsrc), !1, b);
      });
    },
    Xj = function (a, b) {
      var c = Jj[a];
      if (void 0 !== c) return b + c;
    },
    Yj = function (a) {
      return 0 !== ak(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function Pj(a) {
    var b = ak(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          U: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function ak(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !Ij.test(a[2])
      ? []
      : a;
  }
  var bk = function (a, b, c, d, e) {
      if (za(b) && "null" !== E.origin) {
        var f = Sj(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Xj(a[m], f);
              if (n) {
                var p = Lh(n, F.cookie, void 0, Kj());
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Mj(function () {
          oj(h, b, c, d);
        });
      }
    },
    Rj = function (a) {
      return a.filter(function (b) {
        return Ij.test(b.U);
      });
    },
    ck = function (a, b) {
      if ("null" !== E.origin) {
        for (var c = Sj(b.prefix), d = {}, e = 0; e < a.length; e++)
          Jj[a[e]] && (d[a[e]] = Jj[a[e]]);
        Mj(function () {
          k(d, function (f, h) {
            var l = Lh(c + h, F.cookie, void 0, Kj());
            l.sort(function (t, u) {
              return Yj(u) - Yj(t);
            });
            if (l.length) {
              var m = l[0],
                n = Yj(m),
                p = 0 !== ak(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== ak(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Vj(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function dk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var ek = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Sf()) {
        var c = Uj();
        if (dk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.wbraid);
          pj(function () {
            return d;
          }, 3);
          pj(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    fk = function (a) {
      if (!id(11)) return null;
      var b = hj(!0).gad_source;
      if (null != b) return (E.location.hash = ""), b;
      if (id(12)) {
        var c = Pi(E.location.href);
        b = Ki(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Uj();
        if (dk(d, a)) return "0";
      }
      return null;
    },
    gk = function (a) {
      var b = fk(a);
      null != b &&
        pj(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    },
    hk = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Lj(Kj())) return e;
      var f = Nj(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++)
        -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1e3), l.U]
            .concat(l.labels || [], [b])
            .join("."),
          p = Si(c, m, !0);
        p.ib = Kj();
        Uh(a, n, p);
      }
      return e;
    };
  function ik(a, b) {
    var c = Sj(b),
      d = Xj(a, c);
    if (!d) return 0;
    for (var e = Nj(d), f = 0, h = 0; h < e.length; h++)
      f = Math.max(f, e[h].timestamp);
    return f;
  }
  function jk(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var kk = function (a) {
    var b = Math.max(ik("aw", a), jk(Lj(Kj()) ? Gj() : {}));
    return Math.max(ik("gb", a), jk(Lj(Kj()) ? Gj("_gac_gb", !0) : {})) > b;
  };
  var qk = /[A-Z]+/,
    rk = /\s/,
    sk = function (a, b) {
      if (g(a)) {
        a = Ja(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (qk.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && ((f[1] = l[0]), f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (rk.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, Z: d + "-" + f[0], N: f };
          }
        }
      }
    },
    uk = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = sk(a[d], b);
        e && (c[e.id] = e);
      }
      tk(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function tk(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.Z);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var vk = function (a, b, c, d) {
    var e = Zb(),
      f;
    if (1 === e)
      a: {
        var h = Oe;
        h = h.toLowerCase();
        for (
          var l = "https://" + h,
            m = "http://" + h,
            n = 1,
            p = F.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (0 === r.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === r.indexOf(l) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != E.location.protocol ? a : b) + c;
  };
  var xk = function (a, b, c) {
      if (E[a.functionName]) return b.mg && G(b.mg), E[a.functionName];
      var d = wk();
      E[a.functionName] = d;
      if (a.Ee)
        for (var e = 0; e < a.Ee.length; e++) E[a.Ee[e]] = E[a.Ee[e]] || wk();
      a.Ne && void 0 === E[a.Ne] && (E[a.Ne] = c);
      Yb(vk("https://", "http://", a.wg), b.mg, b.Pl);
      return d;
    },
    wk = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    yk = {
      functionName: "_googWcmImpl",
      Ne: "_googWcmAk",
      wg: "www.gstatic.com/wcm/loader.js",
    },
    zk = {
      functionName: "_gaPhoneImpl",
      Ne: "ga_wpid",
      wg: "www.gstatic.com/gaphone/loader.js",
    },
    Ak = { Vi: "", lk: "5" },
    Bk = {
      functionName: "_googCallTrackingImpl",
      Ee: [zk.functionName, yk.functionName],
      wg:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Ak.Vi || Ak.lk) +
        ".js",
    },
    Ck = {},
    Dk = function (a, b, c, d) {
      J(22);
      if (c) {
        d = d || {};
        var e = xk(yk, d, a),
          f = { ak: a, cl: b };
        void 0 === d.hb && (f.autoreplace = c);
        e(2, d.hb, f, c, 0, Ka(), d.options);
      }
    },
    Ek = function (a, b, c, d) {
      J(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Ka(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var h = a[f];
          Ck[h.id] ||
            (h && "AW" === h.prefix && !e.adData && 2 <= h.N.length
              ? ((e.adData = { ak: h.N[0], cl: h.N[1] }),
                P(104) &&
                  ((e.adData.dma = Eh()), Fh() && (e.adData.dmaCps = Dh())),
                (Ck[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: h.Z }), (Ck[h.id] = !0)));
        }
        (e.gaData || e.adData) && xk(Bk, d)(d.hb, e, d.options);
      }
    },
    Fk = function () {
      var a = !1;
      return a;
    },
    Gk = function (a, b) {
      if (a)
        if (di()) {
        } else {
          if (g(a)) {
            var c = sk(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = U(b, K.g.Pj);
          if (f && za(f)) {
            d = [];
            for (var h = 0; h < f.length; h++) {
              var l = sk(f[h]);
              l &&
                (d.push(l),
                (a.id === l.id || (a.id === a.Z && a.Z === l.Z)) && (e = !0));
            }
          }
          if (!d || e) {
            var m = U(b, K.g.sh),
              n;
            if (m) {
              za(m) ? (n = m) : (n = [m]);
              var p = U(b, K.g.qh),
                q = U(b, K.g.rh),
                r = U(b, K.g.th),
                t = U(b, K.g.Oj),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) Ek(d, n[w], t, { hb: u, options: r });
                  else if ("AW" === a.prefix && a.N[1])
                    Fk()
                      ? Ek([a], n[w], t || "US", { hb: u, options: r })
                      : Dk(a.N[0], a.N[1], n[w], { hb: u, options: r });
                  else if ("UA" === a.prefix)
                    if (Fk()) Ek([a], n[w], t || "US", { hb: u });
                    else {
                      var x = a.Z,
                        y = n[w],
                        A = { hb: u };
                      J(23);
                      if (y) {
                        A = A || {};
                        var B = xk(zk, A, x),
                          C = {};
                        void 0 !== A.hb ? (C.receiver = A.hb) : (C.replace = y);
                        C.ga_wpid = x;
                        C.destination = y;
                        B(2, Ka(), C);
                      }
                    }
            }
          }
        }
    };
  var Hk,
    Ik = !1,
    Jk = function (a) {
      if (!Ik) {
        Ik = !0;
        Hk = Hk || {};
      }
      return Hk[a];
    };
  var Tk = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.o = c;
    this.h = {};
    this.metadata = z(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Tk.prototype.copyToHitData = function (a, b, c) {
    var d = U(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && g(d) && P(53))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var Uk = function (a) {
      return a.metadata.source_canonical_id;
    },
    Vk = function (a, b, c) {
      var d = Jk(a.target.Z);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Wk(a) {
    return {
      getDestinationId: function () {
        return a.target.Z;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.o, b);
      },
      ln: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  function bl(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Pi("" + c + b).href;
    }
  }
  function cl() {
    return !!ze.Ce && "SGTM_TOKEN" !== ze.Ce.split("@@").join("");
  }
  function dl(a) {
    for (var b = ia([K.g.Wc, K.g.Jb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  var el = function (a) {
      var b = String(a[pc.ka] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    fl =
      0 <= E.location.search.indexOf("?gtm_latency=") ||
      0 <= E.location.search.indexOf("&gtm_latency=");
  var gl = { sampleRate: "0.005000", Ti: "", Si: Number("5"), sn: Number("") },
    hl = [];
  function il(a) {
    hl.push(a);
  }
  var jl = !1,
    kl;
  if (!(kl = fl)) {
    var ll = Math.random(),
      ml = gl.sampleRate;
    kl = ll < Number(ml);
  }
  var nl = kl,
    ol = "https://www.googletagmanager.com/a?id=" + ji.ctid,
    pl = void 0,
    ql = {},
    rl = void 0,
    sl = new (function () {
      var a = 5;
      0 < gl.Si && (a = gl.Si);
      this.h = 0;
      this.C = [];
      this.s = a;
    })(),
    tl = 1e3;
  function ul(a, b) {
    var c = pl;
    if (void 0 === c)
      if (b) c = Ue();
      else return "";
    for (var d = [ol], e = 0; e < hl.length; e++) {
      var f = hl[e]({
        eventId: c,
        Bb: !!a,
        Hi: function () {
          jl = !0;
        },
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function vl() {
    rl && (E.clearTimeout(rl), (rl = void 0));
    if (void 0 !== pl && wl) {
      var a;
      (a = ql[pl]) || (a = sl.h < sl.s ? !1 : 1e3 > La() - sl.C[sl.h % sl.s]);
      if (a || 0 >= tl--) J(1), (ql[pl] = !0);
      else {
        var b = sl.h++ % sl.s;
        sl.C[b] = La();
        var c = ul(!0);
        ac(c);
        if (jl) {
          var d = c.replace("/a?", "/td?");
          ac(d);
        }
        wl = jl = !1;
      }
    }
  }
  var wl = !1;
  function xl(a) {
    ql[a] ||
      (a !== pl && (vl(), (pl = a)),
      (wl = !0),
      rl || (rl = E.setTimeout(vl, 500)),
      2022 <= ul().length && vl());
  }
  var yl = Ba();
  function zl() {
    yl = Ba();
  }
  function Al() {
    return ["&v=3&t=t", "&pid=" + yl].join("");
  }
  var Bl = "",
    Cl = [];
  function Dl(a) {
    var b = "";
    Bl && (b = "&dl=" + encodeURIComponent(Bl));
    0 < Cl.length && (b += "&tdp=" + Cl.join("."));
    a.Bb && ((Bl = ""), (Cl.length = 0), b && a.Hi());
    return b;
  }
  var El = [];
  function Fl(a) {
    if (!El.length) return "";
    var b = "&tdc=" + El.join("!");
    a.Bb && (a.Hi(), (El.length = 0));
    return b;
  }
  var Gl = { initialized: 11, complete: 12, interactive: 13 },
    Hl = {},
    Il = Object.freeze(((Hl[K.g.Oa] = !0), Hl)),
    Jl =
      0 <= F.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= F.location.search.indexOf("&gtm_diagnostics="),
    Ll = function (a, b, c) {
      if (nl && "config" === a && !(1 < sk(b).N.length)) {
        var d,
          e = Tb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = z(c.J);
        z(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Kl(d[l], f);
          m.length && (Jl && console.log(m), h.push(l));
        }
        h.length &&
          (h.length && nl && El.push(b + "*" + h.join(".")),
          hb("TAGGING", Gl[F.readyState] || 14));
        d[b] = f;
      }
    };
  function Ml(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Kl(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Il[q] : t;
      },
      f;
    for (f in Ml(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Xa(l) || "array" === Xa(l),
        p = "object" === Xa(m) || "array" === Xa(m);
      if (n && p) Kl(l, m, c, h);
      else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  var Nl = {};
  function Ol(a, b, c) {
    nl && void 0 !== a && ((Nl[a] = Nl[a] || []), Nl[a].push(c + b), xl(a));
  }
  function Pl(a) {
    var b = a.eventId,
      c = a.Bb,
      d = "",
      e = Nl[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Nl[b];
    return d;
  }
  var Rl = function (a, b, c, d) {
      var e = sk(c, d.isGtmEvent);
      e && Ql.push("event", [b, a], e, d);
    },
    Sl = function (a, b, c, d) {
      var e = sk(c, d.isGtmEvent);
      e && Ql.push("get", [a, b], e, d);
    },
    Tl = function () {
      this.status = 1;
      this.J = {};
      this.h = {};
      this.M = {};
      this.T = null;
      this.C = {};
      this.s = !1;
    },
    Ul = function (a, b, c, d) {
      var e = La();
      this.type = a;
      this.C = e;
      this.h = b;
      this.s = c;
      this.messageContext = d;
    },
    Vl = function () {
      this.s = {};
      this.C = {};
      this.h = [];
    },
    Wl = function (a, b) {
      var c = b.Z;
      return (a.s[c] = a.s[c] || new Tl());
    },
    Xl = function (a, b, c, d) {
      if (d.h) {
        var e = Wl(a, d.h),
          f = e.T;
        if (f) {
          var h = z(c),
            l = z(e.J[d.h.id]),
            m = z(e.C),
            n = z(e.h),
            p = z(a.C),
            q = {};
          if (nl)
            try {
              q = z(Ye);
            } catch (v) {
              J(72);
            }
          var r = d.h.prefix,
            t = function (v) {
              Ol(d.messageContext.eventId, r, v);
            },
            u = xg(
              wg(
                vg(
                  ug(
                    tg(
                      rg(
                        qg(
                          sg(
                            pg(
                              og(
                                ng(
                                  new mg(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  h
                                ),
                                l
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Ol(d.messageContext.eventId, r, "1"),
              Ll(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            Ol(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Vl.prototype.register = function (a, b, c) {
    var d = Wl(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (z(d.h, c), (d.h = c)), this.flush());
  };
  Vl.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === Wl(this, c).status &&
        ((Wl(this, c).status = 2), this.push("require", [{}], c, {})),
      Wl(this, c).s && (d.deferrable = !1));
    this.h.push(new Ul(a, c, b, d));
    d.deferrable || this.flush();
  };
  Vl.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.h.length;
      e = { Mb: void 0, Qf: void 0 }
    ) {
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable)
        !h || Wl(this, h).s
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== Wl(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.s[0], function (r, t) {
              z(Ra(r, t), b.C);
            });
            break;
          case "config":
            var l = Wl(this, h);
            e.Mb = {};
            k(
              f.s[0],
              (function (r) {
                return function (t, u) {
                  z(Ra(t, u), r.Mb);
                };
              })(e)
            );
            var m = !!e.Mb[K.g.Kb];
            delete e.Mb[K.g.Kb];
            var n = h.Z === h.id;
            m || (n ? (l.C = {}) : (l.J[h.id] = {}));
            (l.s && m) || Xl(this, K.g.oa, e.Mb, f);
            l.s = !0;
            n ? z(e.Mb, l.C) : (z(e.Mb, l.J[h.id]), J(70));
            d = !0;
            break;
          case "event":
            e.Qf = {};
            k(
              f.s[0],
              (function (r) {
                return function (t, u) {
                  z(Ra(t, u), r.Qf);
                };
              })(e)
            );
            Xl(this, f.s[1], e.Qf, f);
            break;
          case "get":
            var p = {},
              q = ((p[K.g.eb] = f.s[0]), (p[K.g.ob] = f.s[1]), p);
            Xl(this, K.g.La, q, f);
        }
        this.h.shift();
        Yl(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Yl = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = Wl(a, b.h).M[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.s)
            if (a.s.hasOwnProperty(e)) {
              var f = a.s[e];
              if (f && f.M)
                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++)
                  h[l]();
            }
    },
    Zl = function (a, b) {
      var c = Ql,
        d = z(b);
      z(Wl(c, a).h, d);
      Wl(c, a).h = d;
    },
    Ql = new Vl();
  var om = function () {
    function a(b) {
      Ae.pscdl = b;
    }
    if (void 0 === Ae.pscdl)
      try {
        "cookieDeprecationLabel" in Rb
          ? (a("pending"), Rb.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
  };
  function sm(a) {
    var b = U(a.o, K.g.rb),
      c = U(a.o, K.g.qb);
    b && !c
      ? (a.eventName !== K.g.oa && a.eventName !== K.g.Rd && J(131),
        (a.isAborted = !0))
      : !b && c && (J(132), (a.isAborted = !0));
  }
  function tm(a) {
    var b = R(K.g.F) ? Ae.pscdl : "denied";
    a.h[K.g.Xd] = b;
  }
  var vm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    wm = /^www.googleadservices.com$/,
    ym = function (a) {
      a || (a = xm());
      return a.ym
        ? !1
        : a.kl || a.ml || a.nl || a.Wf || a.Le || a.Qk || a.Xk
        ? !0
        : !1;
    },
    xm = function () {
      var a = {},
        b = hj(!0);
      a.ym = !!b._up;
      var c = Uj();
      a.kl = void 0 !== c.aw;
      a.ml = void 0 !== c.dc;
      a.nl = void 0 !== c.wbraid;
      var d = Pi(E.location.href),
        e = Ki(d, "query", !1, void 0, "gad");
      a.Wf = void 0 !== e;
      if (!a.Wf) {
        var f = d.hash.replace("#", ""),
          h = Hi(f, "gad");
        a.Wf = void 0 !== h;
      }
      a.Le = void 0;
      if (P(61)) {
        var l = Ki(d, "query", !1, void 0, "gad_source");
        a.Le = l;
        if (void 0 === a.Le) {
          var m = d.hash.replace("#", ""),
            n = Hi(m, "gad_source");
          a.Le = n;
        }
      }
      var p = F.referrer ? Ki(Pi(F.referrer), "host") : "";
      a.Xk = vm.test(p);
      a.Qk = wm.test(p);
      return a;
    };
  var zm = function () {
      var a = E.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Am = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle)
        return !0;
      var c = E.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l &&
            ((h = h.substring(l + 8, h.indexOf(")", l))),
            "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
            (f = Math.min(h, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = E.getComputedStyle(d, null));
      }
      return !1;
    };
  var vn = {
    pk: Number("") || 500,
    Wj: Number("") || 5e3,
    Lh: Number("") || 10,
    gj: Number("") || 5e3,
  };
  function wn(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var xn = function (a, b) {
    var c;
    return c;
  };
  var yn = "https://" + ze.Cc,
    zn = yn + "/gtm/static/",
    An = Number("") || 5,
    Bn = Number("") || 50,
    Cn = yn,
    Dn = zn,
    En = !1,
    Fn = 0,
    Gn = Ba();
  function Pn() {
    var a = !1;
    return a;
  }
  function Qn(a) {}
  function Sn(a, b, c) {}
  function Ln(a, b, c, d) {}
  function Rn(a, b, c, d, e) {}
  function Tn(a, b, c, d) {}
  function Un(a, b, c, d) {}
  function Vn(a) {
    var b = {},
      c = ["tv.1"],
      d = 0;
    var u = c.join("~");
    return { P: b, Qe: u };
  }
  var Wn = void 0;
  function Xn(a) {
    var b = "";
    return b;
  }
  Cb();
  Dg() || zb("iPod");
  zb("iPad");
  !zb("Android") || Db() || Cb() || Bb() || zb("Silk");
  Db();
  !zb("Safari") ||
    Db() ||
    (Ab() ? 0 : zb("Coast")) ||
    Bb() ||
    (Ab() ? 0 : zb("Edge")) ||
    (Ab() ? yb("Microsoft Edge") : zb("Edg/")) ||
    (Ab() ? yb("Opera") : zb("OPR")) ||
    Cb() ||
    zb("Silk") ||
    zb("Android") ||
    Eg();
  var Yn = {},
    Zn = null,
    $n = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Zn) {
        Zn = {};
        for (
          var h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = h.concat(l[m].split(""));
          Yn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Zn[q] && (Zn[q] = p);
          }
        }
      }
      for (
        var r = Yn[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (A >> 6)],
          D = r[A & 63];
        t[w++] = "" + B + C + H + D;
      }
      var I = 0,
        M = u;
      switch (b.length - v) {
        case 2:
          (I = b[v + 1]), (M = r[(I & 15) << 2] || u);
        case 1:
          var L = b[v];
          t[w] = "" + r[L >> 2] + r[((L & 3) << 4) | (I >> 4)] + M + u;
      }
      return t.join("");
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var ao =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function bo() {
    var a;
    return null != (a = E.google_tag_data) ? a : (E.google_tag_data = {});
  }
  function co() {
    var a = E.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function eo() {
    var a, b;
    return null !=
      (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function fo() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = E.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function go() {
    if (!fo()) return null;
    var a = bo();
    if (a.uach_promise) return a.uach_promise;
    var b = E.navigator.userAgentData
      .getHighEntropyValues(ao)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function mo() {
    return "attribution-reporting";
  }
  function no(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var oo = !1;
  function po() {
    if (no("join-ad-interest-group") && xa(Rb.joinAdInterestGroup)) return !0;
    oo ||
      (Mg(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (oo = !0));
    return no("join-ad-interest-group") && xa(Rb.joinAdInterestGroup);
  }
  function qo(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > La() - d) {
        hb("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else
      try {
        if (
          50 <=
          F.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          hb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    $b(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: La() },
      c
    );
  }
  function ro() {
    return "https://td.doubleclick.net";
  }
  var so = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    to = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    uo = /^\d+\.fls\.doubleclick\.net$/,
    vo = /;gac=([^;?]+)/,
    wo = /;gacgb=([^;?]+)/,
    xo = /;gclaw=([^;?]+)/,
    yo = /;gclgb=([^;?]+)/;
  function zo(a, b) {
    if (uo.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(so)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].U);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Ao = function (a, b, c) {
    var d = Lj(Kj()) ? Gj("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = hk("_gac_gb_" + h, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(h + ":" + l.join(","));
    }
    return { Pk: f ? e.join(";") : "", Ok: zo(d, wo) };
  };
  function Bo(a, b, c) {
    if (uo.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(to)) return [{ U: d[1] }];
    } else return Nj((a || "_gcl") + b);
    return [];
  }
  var Co = function (a) {
      return Bo(a, "_aw", xo)
        .map(function (b) {
          return b.U;
        })
        .join(".");
    },
    Do = function (a) {
      return Bo(a, "_gb", yo)
        .map(function (b) {
          return b.U;
        })
        .join(".");
    },
    Eo = function (a, b) {
      var c = hk(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Fo = function () {
    if (xa(E.__uspapi)) {
      var a = "";
      try {
        E.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var tp = {
    D: {
      zg: "ads_conversion_hit",
      Bc: "container_execute_start",
      Dg: "container_setup_end",
      cf: "container_setup_start",
      Bg: "container_blocking_end",
      Cg: "container_execute_end",
      Eg: "container_yield_end",
      df: "container_yield_start",
      Eh: "event_execute_end",
      Dh: "event_evaluation_end",
      Cf: "event_evaluation_start",
      Fh: "event_setup_end",
      jd: "event_setup_start",
      Gh: "ga4_conversion_hit",
      ld: "page_load",
      Tm: "pageview",
      yb: "snippet_load",
      Uh: "tag_callback_error",
      Vh: "tag_callback_failure",
      Wh: "tag_callback_success",
      Xh: "tag_execute_end",
      uc: "tag_execute_start",
    },
  };
  function up() {
    function a(c, d) {
      var e = jb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  var vp = !1;
  var cq = function (a, b) {},
    dq = function (a, b) {},
    eq = function (a, b) {},
    fq = function (a, b) {},
    gq = function () {
      var a = {};
      return a;
    },
    Vp = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    hq = function () {},
    iq = function (a, b) {},
    jq = function (a, b, c) {};
  var kq = function (a, b) {
    var c,
      d = E.GooglebQhCsO;
    d || ((d = {}), (E.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var lq = function (a, b, c) {
    var d = Hg(a, "fmt");
    if (b) {
      var e = Hg(a, "random"),
        f = Hg(a, "label") || "";
      if (!e) return !1;
      var h = $n(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!kq(h, b)) return !1;
    }
    d && 4 != d && (a = Jg(a, "rfmt", d));
    var l = Jg(a, "fmt", 4);
    Yb(
      l,
      function () {
        E.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((E.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var Cq = function () {
      this.h = {};
    },
    Dq = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Eq = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Gq = function (a, b, c, d) {};
  function Iq(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var Kq = function (a) {
      var b = ri(),
        c;
      c = void 0 === c ? !1 : c;
      var d = Jq(b);
      d.entity.push(a);
      d._entity || (d._entity = { internal: [], external: [] });
      c ? d._entity.external.push(a) : d._entity.internal.push(a);
    },
    Lq = function () {
      var a = Jq(ri());
      if (P(97)) {
        var b, c;
        return [].concat(
          ka(
            (null == a
              ? void 0
              : null == (b = a._entity)
              ? void 0
              : b.internal) || []
          ),
          ka(
            (null == a
              ? void 0
              : null == (c = a._entity)
              ? void 0
              : c.external) || []
          )
        );
      }
      return a.entity;
    },
    Mq = function (a) {
      var b = ri(),
        c;
      c = void 0 === c ? !1 : c;
      var d = Jq(b);
      d.event &&
        (d.event.push(a),
        d._event || (d._event = { internal: [], external: [] }),
        c ? d._event.external.push(a) : d._event.internal.push(a));
    },
    Nq = function () {
      var a = Jq(ri());
      if (P(97)) {
        var b, c;
        return [].concat(
          ka(
            (null == a
              ? void 0
              : null == (b = a._event)
              ? void 0
              : b.internal) || []
          ),
          ka(
            (null == a
              ? void 0
              : null == (c = a._event)
              ? void 0
              : c.external) || []
          )
        );
      }
      return a.event || [];
    };
  function Jq(a) {
    var b,
      c = Ae.r;
    c || ((c = { container: {} }), (Ae.r = c));
    b = c;
    var d = b.container[a];
    d ||
      ((d = {
        entity: [],
        event: [],
        _entity: { internal: [], external: [] },
        _event: { internal: [], external: [] },
      }),
      (b.container[a] = d));
    return d;
  }
  var Oq = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Pq = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Qq = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Rq =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Uq = function (a) {
      var b = af("gtm.allowlist") || af("gtm.whitelist");
      b && J(9);
      Ge && (b = ["google", "gtagfl", "lcl", "zone"]);
      Sq() &&
        (Ge
          ? J(116)
          : (J(117),
            Tq &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Pa(Ia(b), Pq),
        d = af("gtm.blocklist") || af("gtm.blacklist");
      d || ((d = af("tagTypeBlacklist")) && J(3));
      d ? J(8) : (d = []);
      Sq() &&
        ((d = Ia(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ia(d).indexOf("google") && J(2);
      var e = d && Pa(Ia(d), Qq),
        f = {};
      return function (h) {
        var l = h && h[pc.ka];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Se[l] || [],
          n = a(l, m);
        if (!P(94))
          for (var p = Lq(), q = 0; q < p.length; q++)
            try {
              n = n && p[q](l, m);
            } catch (y) {
              n = !1;
            }
        if (b) {
          var r;
          if ((r = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var t = 0; t < m.length; t++) {
                    if (0 > c.indexOf(m[t])) {
                      J(11);
                      r = !1;
                      break a;
                    }
                  }
                else {
                  r = !1;
                  break a;
                }
              r = !0;
            }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;
          else {
            var w = Da(e, m || []);
            w && J(10);
            u = w;
          }
        }
        var x = !n || u;
        x ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (x = Da(e, Rq));
        return (f[l] = x);
      };
    },
    Tq = !1;
  Tq = !0;
  var Sq = function () {
      return Oq.test(E.location && E.location.hostname);
    },
    Vq = function () {
      if (ii) {
        var a = function (b) {
          var c = {};
          c[pc.ka] = "__" + b;
          for (var d in void 0)
            (void 0).hasOwnProperty(d) && (c["vtp_" + d] = (void 0)[d]);
          var e;
          if (cd(c)) {
            var f = c[pc.ka];
            if (!f) throw "Error: No function name given for function call.";
            var h = Sc[f];
            e = !!h && !!h.runInSiloedMode;
          } else e = !!Iq(c[pc.ka], 4);
          return e;
        };
        P(93)
          ? Kq(function (b) {
              return a(b.entityId);
            })
          : Kq(a);
      }
    };
  var Xq = function (a, b, c, d) {
      if (!Wq() && !xi(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + ze.aa,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        P(41) && (e += "&gtm=" + Ei());
        var h = cl();
        h && (e += "&sign=" + ze.Ce);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = Ie || Ke ? bl(b, l + e) : void 0;
        if (!m) {
          var n = ze.Cc + l;
          h &&
            Sb &&
            f &&
            (n = Sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = vk("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (zi({ ctid: p, isDestination: !1 }), (p = li(p)));
        var q = p,
          r = yi();
        ei().container[q] = { state: 1, context: d, parent: r };
        fi({ ctid: q, isDestination: !1 });
        Yb(m);
      }
    },
    Yq = function (a, b, c) {
      var d;
      if ((d = !Wq())) {
        var e = ei().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (Ai())
          (ei().destination[a] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: yi(),
          }),
            fi({ ctid: a, isDestination: !0 }),
            J(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ze.aa +
            "&cx=c";
          P(41) && (f += "&gtm=" + Ei());
          cl() && (f += "&sign=" + ze.Ce);
          var h = Ie || Ke ? bl(b, f) : void 0;
          h || (h = vk("https://", "http://", ze.Cc + f));
          var l = a;
          c.siloed && (zi({ ctid: l, isDestination: !0 }), (l = li(l)));
          ei().destination[l] = { state: 1, context: c, parent: yi() };
          fi({ ctid: l, isDestination: !0 });
          Yb(h);
        }
    };
  function Wq() {
    if (di()) {
      return !0;
    }
    return !1;
  }
  var Zq = !1,
    $q = 0,
    ar = [];
  function br(a) {
    if (!Zq) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Zq = !0;
        for (var e = 0; e < ar.length; e++) G(ar[e]);
      }
      ar.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function cr() {
    if (!Zq && 140 > $q) {
      $q++;
      try {
        F.documentElement.doScroll("left"), br();
      } catch (a) {
        E.setTimeout(cr, 50);
      }
    }
  }
  var zr = function (a) {
    Zq ? a() : ar.push(a);
  };
  var Fr = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: qi(),
    };
  };
  var Hr = function (a, b) {
      this.h = !1;
      this.J = [];
      this.M = { tags: [] };
      this.T = !1;
      this.s = this.C = 0;
      Gr(this, a, b);
    },
    Ir = function (a, b, c, d) {
      if (De.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Za(d) && (e = z(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    Jr = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Kr = function (a) {
      if (!a.h) {
        for (var b = a.J, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.J.length = 0;
      }
    },
    Gr = function (a, b, c) {
      void 0 !== b && Lr(a, b);
      c &&
        E.setTimeout(function () {
          return Kr(a);
        }, Number(c));
    },
    Lr = function (a, b) {
      var c = Na(function () {
        return G(function () {
          b(qi(), a.M);
        });
      });
      a.h ? c() : a.J.push(c);
    },
    Mr = function (a) {
      a.C++;
      return Na(function () {
        a.s++;
        a.T && a.s >= a.C && Kr(a);
      });
    },
    Nr = function (a) {
      a.T = !0;
      a.s >= a.C && Kr(a);
    };
  var Or = {},
    Qr = function () {
      return E[Pr()];
    },
    Rr = !1;
  var Sr = function (a) {
      E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
      var b = E.GoogleAnalyticsObject;
      if (E[b]) E.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ka());
        E[b] = c;
      }
      return E[b];
    },
    Tr = function (a) {
      if (Sf()) {
        var b = Qr();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Pr() {
    return E.GoogleAnalyticsObject || "ga";
  }
  var Ur = function (a) {},
    Vr = function (a, b) {
      return function () {
        var c = Qr(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var $r = {},
    as = {};
  function bs(a, b) {
    if (nl) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      $r[a] = "&e=" + c + "&eid=" + a;
      xl(a);
    }
  }
  function cs(a) {
    var b = a.eventId,
      c = a.Bb;
    if (!$r[b]) return "";
    var d = as[b] ? "" : "&es=1";
    d += $r[b];
    c && (as[b] = !0);
    return d;
  }
  var ds = {};
  function es(a, b) {
    nl && ((ds[a] = ds[a] || {}), (ds[a][b] = (ds[a][b] || 0) + 1));
  }
  function fs(a) {
    var b = a.eventId,
      c = a.Bb,
      d = ds[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ds[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  var gs = {},
    hs = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8",
    };
  function is(a, b, c) {
    if (nl) {
      gs[a] = gs[a] || [];
      var d = hs[b] || "0",
        e;
      e =
        c instanceof E.Element
          ? "1"
          : c instanceof E.Event
          ? "2"
          : c instanceof E.RegExp
          ? "3"
          : c === E
          ? "4"
          : c === F
          ? "5"
          : c instanceof E.Promise
          ? "6"
          : c instanceof E.Storage
          ? "7"
          : c instanceof E.Date
          ? "8"
          : c instanceof E.History
          ? "9"
          : c instanceof E.Performance
          ? "a"
          : c === E.crypto
          ? "b"
          : c instanceof E.Location
          ? "c"
          : c instanceof E.Navigator
          ? "d"
          : "object" !== typeof c || Za(c)
          ? "0"
          : "e";
      gs[a].push("" + d + e);
    }
  }
  function js(a) {
    var b = a.eventId,
      c = gs[b] || [];
    if (!c.length) return "";
    a.Bb && delete gs[b];
    return "&pcr=" + c.join(".");
  }
  var ks = {},
    ls = {};
  function ms(a, b, c) {
    if (nl && b) {
      var d = el(b);
      ks[a] = ks[a] || [];
      ks[a].push(c + d);
      var e = (cd(b) ? "1" : "2") + d;
      ls[a] = ls[a] || [];
      ls[a].push(e);
      xl(a);
    }
  }
  function ns(a) {
    var b = a.eventId,
      c = a.Bb,
      d = "",
      e = ks[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = ls[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete ks[b], delete ls[b]);
    return d;
  }
  function os(a, b, c, d) {
    var e = Qc[a],
      f = ps(a, b, c, d);
    if (!f) return null;
    var h = $c(e[pc.Th], c, []);
    if (h && h.length) {
      var l = h[0];
      f = os(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.ji ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function ps(a, b, c, d) {
    function e() {
      if (f[pc.dk]) l();
      else {
        var w = ad(f, c, []),
          x = w[pc.Wi];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!R(x[y])) {
              l();
              return;
            }
        var A = Ir(c.Lb, String(f[pc.ka]), Number(f[pc.pd]), w[pc.ek]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var D = La() - H;
            ms(c.id, Qc[a], "5");
            Jr(c.Lb, A, "success", D);
            P(16) && jq(c, f, tp.D.Wh);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var D = La() - H;
            ms(c.id, Qc[a], "6");
            Jr(c.Lb, A, "failure", D);
            P(16) && jq(c, f, tp.D.Vh);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ms(c.id, f, "1");
        var C = function () {
          rf(3);
          var D = La() - H;
          ms(c.id, f, "7");
          Jr(c.Lb, A, "exception", D);
          P(16) && jq(c, f, tp.D.Uh);
          B || ((B = !0), l());
        };
        P(16) && iq(c, f);
        var H = La();
        try {
          Zc(w, { event: c, index: a, type: 1 });
        } catch (D) {
          C(D);
        }
        P(16) && jq(c, f, tp.D.Xh);
      }
    }
    var f = Qc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = $c(f[pc.Yh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = os(p.index, { onSuccess: h, onFailure: l, terminate: m }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.ji ? m : q;
    }
    if (f[pc.Oh] || f[pc.gk]) {
      var r = f[pc.Oh] ? Rc : c.mm,
        t = h,
        u = l;
      if (!r[a]) {
        e = Na(e);
        var v = qs(a, r, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function qs(a, b, c) {
    var d = [],
      e = [];
    b[a] = rs(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ss;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ts;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function rs(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ss(a) {
    a();
  }
  function ts(a, b) {
    b();
  }
  var vs = function (a, b) {
      return 1 === arguments.length ? us("config", a) : us("config", a, b);
    },
    ws = function (a, b, c) {
      c = c || {};
      c[K.g.Ib] = a;
      return us("event", b, c);
    };
  function us(a) {
    return arguments;
  }
  var xs = function () {
    this.h = [];
    this.s = [];
  };
  xs.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (h) {}
  };
  xs.prototype.listen = function (a) {
    this.s.push(a);
  };
  xs.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  xs.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var zs = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = ji.Ge;
      ys().enqueue(a, b, c);
    },
    Bs = function () {
      var a = As;
      ys().listen(a);
    };
  function ys() {
    var a = Ae.mb;
    a || ((a = new xs()), (Ae.mb = a));
    return a;
  }
  var Ds = function () {
      var a = Ae.zones;
      a || (a = Ae.zones = new Cs());
      return a;
    },
    Es = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    Fs = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    Cs = function () {
      this.h = {};
      this.s = {};
      this.C = 0;
    };
  aa = Cs.prototype;
  aa.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.pg], b)) return !1;
    for (var e = 0; e < c.Pd.length; e++) if (this.s[c.Pd[e]].wc(b)) return !0;
    return !1;
  };
  aa.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Pd.length; f++) {
      var h = this.s[c.Pd[f]];
      h.wc(b) && e.push(h);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var l = this.getIsAllowedFn([c.pg], b);
    return function (m, n) {
      n = n || [];
      if (!l(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].C(m, n)) return !0;
      return !1;
    };
  };
  aa.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.h[a[b]];
  };
  aa.createZone = function (a, b) {
    var c = String(++this.C);
    this.s[c] = new Gs(a, b);
    return c;
  };
  aa.updateZone = function (a, b, c) {
    var d = this.s[a];
    d && d.J(b, c);
  };
  aa.registerChild = function (a, b, c) {
    var d = this.h[a];
    if ((!d && Ae[a]) || (!d && xi(a)) || (d && d.pg !== b)) return !1;
    if (d) return d.Pd.push(c), !1;
    this.h[a] = { pg: b, Pd: [c] };
    return !0;
  };
  var Gs = function (a, b) {
    this.h = [{ eventId: a, wc: !0 }];
    this.s = null;
    if (b) {
      this.s = {};
      for (var c = 0; c < b.length; c++) this.s[b[c]] = !0;
    }
  };
  Gs.prototype.J = function (a, b) {
    var c = this.h[this.h.length - 1];
    a <= c.eventId || (c.wc !== b && this.h.push({ eventId: a, wc: b }));
  };
  Gs.prototype.wc = function (a) {
    for (var b = this.h.length - 1; 0 <= b; b--)
      if (this.h[b].eventId <= a) return this.h[b].wc;
    return !1;
  };
  Gs.prototype.C = function (a, b) {
    b = b || [];
    if (!this.s || Es[a] || this.s[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.s[b[c]]) return !0;
    return !1;
  };
  var Hs = function (a, b, c, d, e, f) {
      var h = Ds();
      c = c && Pa(c, Fs);
      for (var l = h.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (h.registerChild(n, qi(), l)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (0 === p.indexOf("GTM-"))
            Xq(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var v = us("js", Ka());
            Xq(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: t, inheritParentConfig: u };
            P(43) || zs(v, q, w);
            zs(vs(p, r), q, w);
          }
        }
      }
      return l;
    },
    Is = function (a, b, c) {
      Ds().updateZone(a, b, c);
    };
  var Js = function (a) {
      var b = Ae.zones;
      return b
        ? b.getIsAllowedFn(mi(), a)
        : function () {
            return !0;
          };
    },
    Ks = function (a) {
      var b = Ae.zones;
      return b ? b.isActive(mi(), a) : !0;
    },
    Ls = function () {
      P(93)
        ? Mq(function (a) {
            return Ks(a.originalEventData["gtm.uniqueEventId"]);
          })
        : Mq(function (a, b) {
            return Ks(b);
          });
      P(94) &&
        P(95) &&
        Kq(function (a) {
          var b = a.entityId,
            c = a.securityGroups;
          return Js(a.originalEventData["gtm.uniqueEventId"])(b, c);
        });
    };
  var Os = function (a, b) {
    for (var c = [], d = 0; d < Qc.length; d++)
      if (a[d]) {
        var e = Qc[d];
        var f = Mr(b.Lb);
        try {
          var h = os(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var l = e[pc.ka];
            if (!l) throw "Error: No function name given for function call.";
            var m = Sc[l];
            c.push({
              Mi: d,
              zi: (m ? m.priorityOverride || 0 : 0) || Iq(e[pc.ka], 1) || 0,
              execute: h,
            });
          } else Ms(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Ns);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Ns(a, b) {
    var c,
      d = b.zi,
      e = a.zi;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Mi,
        l = b.Mi;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function Ms(a, b) {
    if (nl) {
      var c = function (d) {
        var e = b.isBlocked(Qc[d]) ? "3" : "4",
          f = $c(Qc[d][pc.Th], b, []);
        f && f.length && c(f[0].index);
        ms(b.id, Qc[d], e);
        var h = $c(Qc[d][pc.Yh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Rs = !1,
    Ps;
  var Xs = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (P(16)) {
    }
    if ("gtm.js" === d) {
      if (Rs) return !1;
      Rs = !0;
    }
    var e,
      f = !1,
      h = Nq(),
      l;
    if (P(93)) {
      var m = z(a);
      l = h.every(function (w) {
        return w({ originalEventData: m });
      });
    } else
      l = h.every(function (w) {
        return w(d, b);
      });
    if (l) e = Js(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = Js(Number.MAX_SAFE_INTEGER);
    }
    bs(b, d);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = z(a),
      r = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Ss(e, q),
        mm: [],
        logMacroError: function () {
          J(6);
          rf(0);
        },
        cachedModelValues: Ts(),
        checkPixieIncompatibility: Us(b),
        Lb: new Hr(function () {
          if (P(16)) {
          }
          n && n.apply(n, [].slice.call(arguments, 0));
        }, p),
        originalEventData: q,
      };
    P(32) && (r.reportMacroDiscrepancy = es);
    P(16) && eq(r.id, r.name);
    var t = fd(r);
    P(16) && fq(r.id, r.name);
    f && (t = Vs(t));
    if (P(16)) {
    }
    var u = Os(t, r),
      v = !1;
    Nr(r.Lb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Ur(qi());
    return Ws(t, u) || v;
  };
  function Us(a) {
    return function (b) {
      $a(b) || is(a, "input", b);
    };
  }
  function Ts() {
    var a = {};
    a.event = ef("event", 1);
    a.ecommerce = ef("ecommerce", 1);
    a.gtm = ef("gtm");
    a.eventModel = ef("eventModel");
    return a;
  }
  function Ss(a, b) {
    var c = Uq(a);
    return P(94)
      ? function (d) {
          if (c(d)) return !0;
          var e = d && d[pc.ka];
          if (!e || "string" != typeof e) return !0;
          e = e.replace(/^_*/, "");
          for (
            var f = Lq(), h = Se[e] || [], l = ia(f), m = l.next();
            !m.done;
            m = l.next()
          ) {
            var n = m.value;
            try {
              if (!n({ entityId: e, securityGroups: h, originalEventData: b }))
                return !0;
            } catch (p) {
              return !0;
            }
          }
          return !1;
        }
      : c;
  }
  function Vs(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Qc[c][pc.ka]);
        if (Ce[d] || void 0 !== Qc[c][pc.hk] || Te[d] || Iq(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Ws(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Qc[c] && !De[String(Qc[c][pc.ka])]) return !0;
    return !1;
  }
  var Ys = {},
    Zs = {},
    $s = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { qg: void 0, Vf: void 0 }, f++
      ) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (((e.qg = sk(h, b)), e.qg)) {
            var l = oi();
            Aa(
              l,
              (function (r) {
                return function (t) {
                  return r.qg.Z === t;
                };
              })(e)
            )
              ? c.push(h)
              : d.push(h);
          }
        } else {
          var m = Ys[h] || [];
          e.Vf = {};
          m.forEach(
            (function (r) {
              return function (t) {
                return (r.Vf[t] = !0);
              };
            })(e)
          );
          for (var n = mi(), p = 0; p < n.length; p++)
            if (e.Vf[n[p]]) {
              c = c.concat(oi());
              break;
            }
          var q = Zs[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Jl: c, Ll: d };
    },
    at = function (a) {
      k(Ys, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    bt = function (a) {
      k(Zs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ct = "HA GF G UA AW DC MC".split(" "),
    dt = !1,
    et = !1;
  function ft(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ue() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var gt = void 0,
    ht = void 0;
  function it(a, b, c) {
    var d = z(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && J(136);
    var e = z(b);
    z(c, e);
    zs(vs(mi()[0], e), a.eventId, d);
  }
  function jt(a) {
    for (var b = ia([K.g.Wc, K.g.Jb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Ql.C[d];
      if (e) return e;
    }
  }
  var kt = {
      config: function (a, b) {
        var c = P(33),
          d = ft(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Za(a[2])) || 3 < a.length) return;
            e = a[2];
          }
          var f = sk(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!hi.kd) {
                var n = si(yi());
                if (Ci(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = { Ql: si(p), Il: q };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && ((h = r.Ql), (l = r.Il));
            bs(d.eventId, "gtag.config");
            var t = f.Z,
              u = f.id !== t;
            if (u ? -1 === oi().indexOf(t) : -1 === mi().indexOf(t)) {
              if (!((c && b.inheritParentConfig) || e[K.g.rb])) {
                var v = jt(e);
                if (u)
                  Yq(t, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                  var w = e;
                  gt ? it(b, w, gt) : ht || (ht = z(w));
                } else
                  Xq(t, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                ht
                  ? (it(b, ht, y), (x = !1))
                  : ((!y[K.g.Kb] && Fe && gt) || (gt = z(y)), (x = !0));
                x && h.containers && h.containers.join(",");
                return;
              }
              if (Fe && !u && !e[K.g.Kb]) {
                var A = et;
                et = !0;
                if (A) return;
              }
              dt || J(43);
              if (!b.noTargetGroup)
                if (u) {
                  bt(f.id);
                  var B = f.id,
                    C = e[K.g.me] || "default";
                  C = String(C).split(",");
                  for (var H = 0; H < C.length; H++) {
                    var D = Zs[C[H]] || [];
                    Zs[C[H]] = D;
                    0 > D.indexOf(B) && D.push(B);
                  }
                } else {
                  at(f.id);
                  var I = f.id,
                    M = e[K.g.me] || "default";
                  M = M.toString().split(",");
                  for (var L = 0; L < M.length; L++) {
                    var O = Ys[M[L]] || [];
                    Ys[M[L]] = O;
                    0 > O.indexOf(I) && O.push(I);
                  }
                }
              delete e[K.g.me];
              var T = b.eventMetadata || {};
              T.hasOwnProperty("is_external_event") ||
                (T.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = T;
              delete e[K.g.Qc];
              for (var Q = u ? [f.id] : oi(), S = 0; S < Q.length; S++) {
                var da = e,
                  ca = Q[S],
                  Z = z(b),
                  ua = sk(ca, Z.isGtmEvent);
                ua && Ql.push("config", [da], ua, Z);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = ft(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[K.g.K] && J(139), e[K.g.ya] && J(140));
          "default" === d
            ? ag(e)
            : "update" === d
            ? bg(e, c)
            : "declare" === d
            ? b.fromContainerExecution && $f(e)
            : P(66) && "core_platform_services" === d && cg(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if ((!Za(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = ((f.event = c), f);
          e &&
            ((h.eventModel = z(e)),
            e[K.g.Qc] && (h.eventCallback = e[K.g.Qc]),
            e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
          var l = ft(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (h.eventModel = h.eventModel || {}), h;
          var p;
          var q = d,
            r = q && q[K.g.Ib];
          void 0 === r &&
            ((r = af(K.g.Ib, 2)), void 0 === r && (r = "default"));
          if (g(r) || za(r)) {
            var t;
            b.isGtmEvent
              ? (t = g(r) ? [r] : r)
              : (t = r.toString().replace(/\s+/g, "").split(","));
            var u = $s(t, b.isGtmEvent),
              v = u.Jl,
              w = u.Ll;
            if (w.length)
              for (var x = jt(q), y = 0; y < w.length; y++) {
                var A = sk(w[y], b.isGtmEvent);
                A &&
                  Yq(A.Z, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = uk(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            bs(m, c);
            for (var C = [], H = 0; H < B.length; H++) {
              var D = B[H],
                I = z(b);
              if (-1 !== ct.indexOf(ti(D.prefix))) {
                var M = z(d),
                  L = I.eventMetadata || {};
                L.hasOwnProperty("is_external_event") ||
                  (L.is_external_event = !I.fromContainerExecution);
                I.eventMetadata = L;
                delete M[K.g.Qc];
                Rl(c, M, D.id, I);
              }
              C.push(D.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length
              ? (h.eventModel[K.g.Ib] = C.join())
              : delete h.eventModel[K.g.Ib];
            dt || J(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            h.eventModel[K.g.qb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && xa(a[3])) {
          var c = sk(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            dt || J(43);
            var f = jt();
            if (
              !Aa(oi(), function (l) {
                return c.Z === l;
              })
            )
              Yq(c.Z, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== ct.indexOf(ti(c.prefix))) {
              ft(a, b);
              var h = {};
              Xf(z(((h[K.g.eb] = d), (h[K.g.ob] = e), h)));
              Sl(
                d,
                function (l) {
                  G(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          dt = !0;
          var c = ft(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Za(a[1])
          ? (c = z(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((c = {}),
            Za(a[2]) || za(a[2]) ? (c[a[1]] = z(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = ft(a, b),
            e = d.eventId,
            f = d.priorityId;
          z(c);
          var h = z(c);
          Ql.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          P(9) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    lt = { policy: !0 };
  var mt = function (a) {
      var b = E[ze.aa].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    nt = function (a) {
      var b = E[ze.aa],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var ot = !1,
    pt = [];
  function qt() {
    if (!ot) {
      ot = !0;
      for (var a = 0; a < pt.length; a++) G(pt[a]);
    }
  }
  var rt = function (a) {
    ot ? G(a) : pt.push(a);
  };
  var Jt = function (a) {
    if (It(a)) return a;
    this.h = a;
  };
  Jt.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var It = function (a) {
    return !a || "object" !== Xa(a) || Za(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Jt.prototype.getUntrustedMessageValue = Jt.prototype.getUntrustedMessageValue;
  var Kt = 0,
    Lt = {},
    Mt = [],
    Nt = [],
    Ot = !1,
    Pt = !1;
  function Qt(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Rt = function (a) {
      return E[ze.aa].push(a);
    },
    St = function (a, b) {
      if (!ya(b) || 0 > b) b = 0;
      var c = Ae[ze.aa],
        d = 0,
        e = !1,
        f = void 0;
      f = E.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h &&
          (f && (E.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Tt(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && df(e), df(e, f));
    });
    Pe || (Pe = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ue()), (a["gtm.uniqueEventId"] = d), df("gtm.uniqueEventId", d));
    return Xs(a);
  }
  function Ut(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ea(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Vt() {
    var a;
    if (Nt.length) a = Nt.shift();
    else if (Mt.length) a = Mt.shift();
    else return;
    var b;
    var c = a;
    if (Ot || !Ut(c.message)) b = c;
    else {
      Ot = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ue());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        h = {},
        l = {
          message:
            ((h.event = "gtm.init"), (h["gtm.uniqueEventId"] = d - 1), h),
          messageContext: { eventId: d - 1 },
        };
      Mt.unshift(l, c);
      if (nl) {
        var m = ji.ctid;
        if (m) {
          var n,
            p = si(yi());
          n = p && p.context;
          var q,
            r = Pi(E.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = ji.Ge,
            w = hi.kd;
          nl &&
            (Bl || (Bl = q),
            Cl.push(
              m +
                ";" +
                v +
                ";" +
                (t ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Wt() {
    for (var a = !1, b; !Pt && (b = Vt()); ) {
      Pt = !0;
      delete Ye.eventModel;
      $e();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Pt = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              h = 0;
            h < f.length;
            h++
          ) {
            var l = f[h],
              m = af(l, 1);
            if (za(m) || Za(m)) m = z(m);
            Ze[l] = m;
          }
        try {
          if (xa(d))
            try {
              d.call(bf);
            } catch (C) {}
          else if (za(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = af(p.join("."), 2);
              if (null != t)
                try {
                  t[q].apply(t, r);
                } catch (C) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Ea(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = kt[d[0]];
                  if (w && (!e.fromContainerExecution || !lt[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && J(101);
            } else u = d;
            if (u) {
              var x = Tt(u, e);
              a = x || a;
              v && x && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && $e(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Lt[String(y)] || [], B = 0; B < A.length; B++)
              Nt.push(Xt(A[B]));
            A.length && Nt.sort(Qt);
            delete Lt[String(y)];
            y > Kt && (Kt = y);
          }
          Pt = !1;
        }
      }
    }
    return !a;
  }
  function Yt() {
    if (P(16)) {
      var a = Zt();
    }
    var b = Wt();
    if (P(16)) {
    }
    try {
      mt(qi());
    } catch (c) {}
    return b;
  }
  function As(a) {
    if (Kt < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Lt[b] = Lt[b] || [];
      Lt[b].push(a);
    } else
      Nt.push(Xt(a)),
        Nt.sort(Qt),
        G(function () {
          Pt || Wt();
        });
  }
  function Xt(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var $t = function () {
      function a(f) {
        var h = {};
        if (It(f)) {
          var l = f;
          f = It(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return { message: f, messageContext: h };
      }
      var b = Tb(ze.aa, []),
        c = (Ae[ze.aa] = Ae[ze.aa] || {});
      !0 === c.pruned && J(83);
      Lt = ys().get();
      Bs();
      zr(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      rt(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Ae.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++)
            f[h] = new Jt(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Mt.push.apply(Mt, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (J(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Wt() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Mt.push.apply(Mt, e);
      if (Zt()) {
        if (P(16)) {
        }
        G(Yt);
      }
    },
    Zt = function () {
      var a = !0;
      return a;
    };
  function au(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = La();
    return b < c + 3e5 && b > c - 9e5;
  }
  function bu(a) {
    return a && 0 === a.indexOf("pending:") ? au(a.substr(8)) : !1;
  }
  var wu = function () {};
  var xu = function () {};
  xu.prototype.toString = function () {
    return "undefined";
  };
  var yu = new xu();
  var cv = E.clearTimeout,
    dv = E.setTimeout,
    V = function (a, b, c, d) {
      if (di()) {
        b && G(b);
      } else return Yb(a, b, c, d);
    },
    ev = function () {
      return new Date();
    },
    fv = function () {
      return E.location.href;
    },
    gv = function (a) {
      return Ki(Pi(a), "fragment");
    },
    hv = function (a) {
      return Li(Pi(a));
    },
    iv = function (a, b) {
      return af(a, b || 2);
    },
    jv = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Rt(a)))
        : (d = Rt(a));
      return d;
    },
    kv = function (a, b) {
      E[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === E[a] || (c && !E[a])) && (E[a] = b);
      return E[a];
    },
    lv = function (a, b, c) {
      return Lh(a, b, void 0 === c ? !0 : !!c);
    },
    mv = function (a, b, c) {
      return 0 === Uh(a, b, c);
    },
    nv = function (a, b) {
      if (di()) {
        b && G(b);
      } else $b(a, b);
    },
    ov = function (a) {
      return !!Ju(a, "init", !1);
    },
    pv = function (a) {
      Hu(a, "init", !0);
    },
    qv = function (a, b, c) {
      $a(a) || is(c, b, a);
    };
  function Nv(a, b) {
    function c(h) {
      var l = Pi(h),
        m = Ki(l, "protocol"),
        n = Ki(l, "host", !0),
        p = Ki(l, "port"),
        q = Ki(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Ov(a) {
    return Pv(a) ? 1 : 0;
  }
  function Pv(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = z(a, {});
        z({ arg1: c[d], any_of: void 0 }, e);
        if (Ov(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var h = 0; h < wd.length; h++) {
                var l = wd[h];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (v) {}
          f = !1;
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var r = a.ignore_case ? "i" : void 0;
        try {
          var t = String(c) + r,
            u = xd.get(t);
          u || ((u = new RegExp(c, r)), xd.set(t, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Nv(b, c);
    }
    return !1;
  }
  function Qv() {
    var a = [
      "&cv=1",
      "&rv=" + ze.Gf,
      "&tc=" +
        Qc.filter(function (b) {
          return b;
        }).length,
    ];
    ze.nd && a.push("&x=" + ze.nd);
    We() && a.push("&tag_exp=" + We());
    return a.join("");
  }
  function Rv() {
    var a = tf();
    return a.length ? "&exp_geo=" + a : "";
  }
  var Sv;
  function Tv() {
    try {
      null != Sv || (Sv = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = Sv) ? 0 : a.length) ? "&exp_tz=" + Sv : "";
  }
  var xw = function () {
    var a = !0;
    (lh(7) && lh(9) && lh(10)) || (a = !1);
    return a;
  };
  var Bw = function (a, b) {
      if (!b.isGtmEvent) {
        var c = U(b, K.g.eb),
          d = U(b, K.g.ob),
          e = U(b, c);
        if (void 0 === e) {
          var f = void 0;
          yw.hasOwnProperty(c)
            ? (f = yw[c])
            : zw.hasOwnProperty(c) && (f = zw[c]);
          1 === f && (f = Aw(c));
          g(f)
            ? Qr()(function () {
                var h = Qr().getByName(a).get(f);
                d(h);
              })
            : d(void 0);
        } else d(e);
      }
    },
    Cw = function (a, b) {
      var c = a[K.g.mc],
        d = b + ".",
        e = a[K.g.R] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        h = !!a[K.g.Gb];
      e = String(e).replace(/\s+/g, "").split(",");
      var l = Qr();
      l(d + "require", "linker");
      l(d + "linker:autoLink", e, f, h);
    },
    Gw = function (a, b, c) {
      if (Sf() || P(25))
        if (!c.isGtmEvent || !Dw[a]) {
          var d = !R(K.g.O),
            e = function (f) {
              var h,
                l,
                m = Qr(),
                n = Ew(b, "", c),
                p,
                q = n.createOnlyFields._useUp;
              if (c.isGtmEvent || Fw(b, n.createOnlyFields)) {
                c.isGtmEvent &&
                  ((h = "gtm" + Ue()),
                  (l = n.createOnlyFields),
                  n.gtmTrackerName && (l.name = h));
                m(function () {
                  var t = m.getByName(b);
                  t && (p = t.get("clientId"));
                  c.isGtmEvent || m.remove(b);
                });
                m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                d &&
                  R(K.g.O) &&
                  ((d = !1),
                  m(function () {
                    var t = Qr().getByName(c.isGtmEvent ? h : b);
                    !t ||
                      (t.get("clientId") == p && q) ||
                      (c.isGtmEvent
                        ? ((n.fieldsToSet["&gcu"] = "1"),
                          (n.fieldsToSet["&sst.gcut"] = ue[f]))
                        : ((n.fieldsToSend["&gcu"] = "1"),
                          (n.fieldsToSend["&sst.gcut"] = ue[f])),
                      t.set(n.fieldsToSet),
                      c.isGtmEvent
                        ? t.send("pageview")
                        : t.send("pageview", n.fieldsToSend));
                  }));
                c.isGtmEvent &&
                  m(function () {
                    m.remove(h);
                  });
              }
            };
          dg(function () {
            return e(K.g.O);
          }, K.g.O);
          dg(function () {
            return e(K.g.F);
          }, K.g.F);
          c.isGtmEvent && (Dw[a] = !0);
        }
    },
    Hw = function (a, b) {
      cl() && b && (a[K.g.cb] = b);
    },
    Qw = function (a, b, c) {
      function d() {
        var L = U(c, K.g.Mc);
        l(function () {
          if (!c.isGtmEvent && Za(L)) {
            var O = u.fieldsToSend,
              T = m().getByName(n),
              Q;
            for (Q in L)
              if (
                L.hasOwnProperty(Q) &&
                /^(dimension|metric)\d+$/.test(Q) &&
                void 0 != L[Q]
              ) {
                var S = T.get(Aw(L[Q]));
                Iw(O, Q, S);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var L = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: L });
        }
      }
      var f = a,
        h,
        l = c.isGtmEvent ? Sr(U(c, "gaFunctionName")) : Sr();
      if (xa(l)) {
        var m = Qr,
          n;
        c.isGtmEvent
          ? (n = U(c, "name") || U(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (L) {
            var O = [].slice.call(arguments, 0);
            O[0] = n ? n + "." + O[0] : "" + O[0];
            l.apply(window, O);
          },
          q = function (L) {
            var O = function (Z, ua) {
                for (var ea = 0; ua && ea < ua.length; ea++) p(Z, ua[ea]);
              },
              T = c.isGtmEvent,
              Q = T ? Jw(u) : Kw(b, c);
            if (Q) {
              var S = {};
              Hw(S, L);
              p("require", "ec", "ec.js", S);
              T && Q.Nf && p("set", "&cu", Q.Nf);
              var da = Q.action;
              if (T || "impressions" === da)
                if ((O("ec:addImpression", Q.oi), !T)) return;
              if ("promo_click" === da || "promo_view" === da || (T && Q.Md)) {
                var ca = Q.Md;
                O("ec:addPromo", ca);
                if (ca && 0 < ca.length && "promo_click" === da) {
                  T ? p("ec:setAction", da, Q.Va) : p("ec:setAction", da);
                  return;
                }
                if (!T) return;
              }
              "promo_view" !== da &&
                "impressions" !== da &&
                (O("ec:addProduct", Q.Sb), p("ec:setAction", da, Q.Va));
            }
          },
          r = function (L) {
            if (L) {
              var O = {};
              if (Za(L))
                for (var T in Lw) Lw.hasOwnProperty(T) && Mw(Lw[T], T, L[T], O);
              Hw(O, y);
              p("require", "linkid", O);
            }
          },
          t = function () {
            if (di()) {
            } else {
              var L = U(c, K.g.Mj);
              L &&
                (p("require", L, { dataLayer: ze.aa }), p("require", "render"));
            }
          },
          u = Ew(n, b, c),
          v = function (L, O, T) {
            T && (O = "" + O);
            u.fieldsToSend[L] = O;
          };
        !c.isGtmEvent &&
          Fw(n, u.createOnlyFields) &&
          (l(function () {
            m() && m().remove(n);
          }),
          (Nw[n] = !1));
        l("create", f, u.createOnlyFields);
        var w = c.isGtmEvent && u.fieldsToSet[K.g.cb] && P(92);
        if ((!c.isGtmEvent && u.createOnlyFields[K.g.cb]) || w) {
          var x =
            Ie || Ke
              ? bl(
                  c.isGtmEvent
                    ? u.fieldsToSet[K.g.cb]
                    : u.createOnlyFields[K.g.cb],
                  "/analytics.js"
                )
              : void 0;
          x && (h = x);
        }
        var y = c.isGtmEvent
          ? u.fieldsToSet[K.g.cb]
          : u.createOnlyFields[K.g.cb];
        if (y) {
          var A = c.isGtmEvent
            ? u.fieldsToSet[K.g.ie]
            : u.createOnlyFields[K.g.ie];
          A && !Nw[n] && ((Nw[n] = !0), l(Vr(n, A)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var B = u[K.g.Ia];
        B && B[K.g.R] && Cw(B, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var C = {};
            Hw(C, y);
            p("require", "linkid", "linkid.js", C);
          }
          Gw(f, n, c);
        }
        if (b === K.g.bc)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: H });
            }
            q(y);
            p("send", "pageview");
            u.createOnlyFields._useUp && Tr(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === K.g.oa
            ? (t(),
              Gk(f, c),
              U(c, K.g.vb) && (ek(["aw", "dc"]), Tr(n + ".")),
              gk(["aw", "dc"]),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              Gw(f, n, c))
            : b === K.g.La
            ? Bw(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", Fa(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || Ow[b]) && q(y),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", Fa(u.value))),
              p("send", u.fieldsToSend));
        var D = h && P(92) && !c.eventMetadata.suppress_script_load;
        if (!Pw && (!c.isGtmEvent || D)) {
          h = h || "https://www.google-analytics.com/analytics.js";
          Pw = !0;
          var I = function () {
              c.onFailure();
            },
            M = function () {
              m().loaded || I();
            };
          di() ? G(M) : Yb(h, M, I);
        }
      } else G(c.onFailure);
    },
    Rw = function (a, b, c, d) {
      eg(
        function () {
          Qw(a, b, d);
        },
        [K.g.O, K.g.F]
      );
    },
    Tw = function (a) {
      function b(e) {
        function f(l, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              h[l] = e[p];
              break;
            }
          }
        }
        var h = z(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) h.category = e.category;
          else {
            for (var l = "", m = 0; m < Sw.length; m++)
              void 0 !== e[Sw[m]] && (l && (l += "/"), (l += e[Sw[m]]));
            l && (h.category = l);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return h;
      }
      for (var c = [], d = 0; a && d < a.length; d++)
        a[d] && Za(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    Uw = function (a) {
      return R(a);
    },
    Vw = !1;
  var Pw,
    Nw = {},
    Dw = {},
    Ww = {},
    Xw = Object.freeze(
      ((Ww.page_hostname = 1),
      (Ww[K.g.ja] = 1),
      (Ww[K.g.Za] = 1),
      (Ww[K.g.Sa] = 1),
      (Ww[K.g.Ga] = 1),
      (Ww[K.g.Ta] = 1),
      (Ww[K.g.hc] = 1),
      (Ww[K.g.Lc] = 1),
      (Ww[K.g.Na] = 1),
      (Ww[K.g.ic] = 1),
      (Ww[K.g.za] = 1),
      (Ww[K.g.Uc] = 1),
      (Ww[K.g.Ja] = 1),
      (Ww[K.g.sb] = 1),
      Ww)
    ),
    Yw = {},
    yw = Object.freeze(
      ((Yw.client_storage = "storage"),
      (Yw.sample_rate = 1),
      (Yw.site_speed_sample_rate = 1),
      (Yw.store_gac = 1),
      (Yw.use_amp_client_id = 1),
      (Yw[K.g.lb] = 1),
      (Yw[K.g.Ea] = "storeGac"),
      (Yw[K.g.Sa] = 1),
      (Yw[K.g.Ga] = 1),
      (Yw[K.g.Ta] = 1),
      (Yw[K.g.hc] = 1),
      (Yw[K.g.Lc] = 1),
      (Yw[K.g.ic] = 1),
      Yw)
    ),
    Zw = {},
    $w = Object.freeze(
      ((Zw._cs = 1),
      (Zw._useUp = 1),
      (Zw.allowAnchor = 1),
      (Zw.allowLinker = 1),
      (Zw.alwaysSendReferrer = 1),
      (Zw.clientId = 1),
      (Zw.cookieDomain = 1),
      (Zw.cookieExpires = 1),
      (Zw.cookieFlags = 1),
      (Zw.cookieName = 1),
      (Zw.cookiePath = 1),
      (Zw.cookieUpdate = 1),
      (Zw.legacyCookieDomain = 1),
      (Zw.legacyHistoryImport = 1),
      (Zw.name = 1),
      (Zw.sampleRate = 1),
      (Zw.siteSpeedSampleRate = 1),
      (Zw.storage = 1),
      (Zw.storeGac = 1),
      (Zw.useAmpClientId = 1),
      (Zw._cd2l = 1),
      Zw)
    ),
    ax = Object.freeze({ anonymize_ip: 1 }),
    bx = {},
    zw = Object.freeze(
      ((bx.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (bx.app_id = 1),
      (bx.app_installer_id = 1),
      (bx.app_name = 1),
      (bx.app_version = 1),
      (bx.description = "exDescription"),
      (bx.fatal = "exFatal"),
      (bx.language = 1),
      (bx.page_hostname = "hostname"),
      (bx.transport_type = "transport"),
      (bx[K.g.ra] = "currencyCode"),
      (bx[K.g.oh] = 1),
      (bx[K.g.za] = "location"),
      (bx[K.g.Uc] = "page"),
      (bx[K.g.Ja] = "referrer"),
      (bx[K.g.sb] = "title"),
      (bx[K.g.yf] = 1),
      (bx[K.g.Pa] = 1),
      bx)
    ),
    cx = {},
    dx = Object.freeze(
      ((cx.content_id = 1),
      (cx.event_action = 1),
      (cx.event_category = 1),
      (cx.event_label = 1),
      (cx.link_attribution = 1),
      (cx.name = 1),
      (cx[K.g.Ia] = 1),
      (cx[K.g.nh] = 1),
      (cx[K.g.Oa] = 1),
      (cx[K.g.ba] = 1),
      cx)
    ),
    ex = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    Sw = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    fx = {},
    Lw = Object.freeze(
      ((fx.levels = 1), (fx[K.g.Ga] = "duration"), (fx[K.g.hc] = 1), fx)
    ),
    gx = {},
    hx = Object.freeze(
      ((gx.anonymize_ip = 1),
      (gx.fatal = 1),
      (gx.send_page_view = 1),
      (gx.store_gac = 1),
      (gx.use_amp_client_id = 1),
      (gx[K.g.Ea] = 1),
      (gx[K.g.oh] = 1),
      gx)
    ),
    Mw = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (hx[b] && (c = Ga(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Aw(b)] = c;
        else if (g(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Aw = function (a) {
      return a && g(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    ix = {},
    Ow = Object.freeze(
      ((ix.checkout_progress = 1),
      (ix.select_content = 1),
      (ix.set_checkout_option = 1),
      (ix[K.g.Xb] = 1),
      (ix[K.g.Yb] = 1),
      (ix[K.g.Cb] = 1),
      (ix[K.g.Zb] = 1),
      (ix[K.g.Xa] = 1),
      (ix[K.g.jb] = 1),
      (ix[K.g.Ya] = 1),
      (ix[K.g.na] = 1),
      (ix[K.g.ac] = 1),
      (ix[K.g.Ca] = 1),
      ix)
    ),
    jx = {},
    kx = Object.freeze(
      ((jx.checkout_progress = 1),
      (jx.set_checkout_option = 1),
      (jx[K.g.Kg] = 1),
      (jx[K.g.Lg] = 1),
      (jx[K.g.Xb] = 1),
      (jx[K.g.Yb] = 1),
      (jx[K.g.Mg] = 1),
      (jx[K.g.Cb] = 1),
      (jx[K.g.na] = 1),
      (jx[K.g.ac] = 1),
      (jx[K.g.Ng] = 1),
      jx)
    ),
    lx = {},
    mx = Object.freeze(
      ((lx.generate_lead = 1),
      (lx.login = 1),
      (lx.search = 1),
      (lx.select_content = 1),
      (lx.share = 1),
      (lx.sign_up = 1),
      (lx.view_search_results = 1),
      (lx[K.g.Zb] = 1),
      (lx[K.g.Xa] = 1),
      (lx[K.g.jb] = 1),
      (lx[K.g.Ya] = 1),
      (lx[K.g.Ca] = 1),
      lx)
    ),
    nx = function (a) {
      var b = "general";
      kx[a]
        ? (b = "ecommerce")
        : mx[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    ox = {},
    px = Object.freeze(
      ((ox.view_search_results = 1),
      (ox[K.g.Xa] = 1),
      (ox[K.g.Ya] = 1),
      (ox[K.g.Ca] = 1),
      ox)
    ),
    Iw = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    qx = function (a) {
      if (za(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Ew = function (a, b, c) {
      var d = function (L) {
          return U(c, L);
        },
        e = {},
        f = {},
        h = {},
        l = {},
        m = qx(d(K.g.Kj));
      !c.isGtmEvent && m && Iw(f, "exp", m);
      h["&gtm"] = Ei(c.eventMetadata.source_canonical_id, !0);
      c.isGtmEvent || (h._no_slc = !0);
      Sf() && (l._cs = Uw);
      var n = d(K.g.Mc);
      if (!c.isGtmEvent && Za(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && Iw(f, p, q);
          }
      for (var r = !c.isGtmEvent, t = jg(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          ex.hasOwnProperty(v)
            ? (e[v] = w)
            : $w.hasOwnProperty(v)
            ? (l[v] = w)
            : (h[v] = w);
        } else {
          var x = void 0;
          x = v !== K.g.X ? d(v) : kg(c, v);
          if (dx.hasOwnProperty(v)) Mw(dx[v], v, x, e);
          else if (ax.hasOwnProperty(v)) Mw(ax[v], v, x, h);
          else if (zw.hasOwnProperty(v)) Mw(zw[v], v, x, f);
          else if (yw.hasOwnProperty(v)) Mw(yw[v], v, x, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(v))
            Mw(1, v, x, f);
          else if (v === K.g.X) {
            if (!Vw) {
              var y = Ta(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              B = void 0;
            b === K.g.oa
              ? (A = Ta(kg(c, v), "."))
              : ((A = Ta(kg(c, v, 1), ".")), (B = Ta(kg(c, v, 2), ".")));
            A && (f["&gdid"] = A);
            B && (f["&edid"] = B);
          } else
            v === K.g.Na && 0 > t.indexOf(K.g.hc) && (l.cookieName = x + "_ga");
          P(23) &&
            Xw[v] &&
            (c.C.hasOwnProperty(v) ||
              (b === K.g.oa && c.h.hasOwnProperty(v))) &&
            (r = !1);
        }
      }
      P(23) && r && (f["&jsscut"] = "1");
      (!1 !== d(K.g.hf) && !1 !== d(K.g.Za) && xw()) ||
        (h.allowAdFeatures = !1);
      rh(c)
        ? P(29) && (h.allowAdPersonalizationSignals = !0)
        : (h.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
      if (c.isGtmEvent) {
        l.name = l.name || e.gtmTrackerName;
        var C = h.hitCallback;
        h.hitCallback = function () {
          xa(C) && C();
          c.onSuccess();
        };
      } else {
        Iw(l, "cookieDomain", "auto");
        Iw(h, "forceSSL", !0);
        Iw(e, "eventCategory", nx(b));
        px[b] && Iw(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? Iw(e, "eventLabel", d(K.g.nh))
          : "search" === b || "view_search_results" === b
          ? Iw(e, "eventLabel", d(K.g.Sj))
          : "select_content" === b && Iw(e, "eventLabel", d(K.g.Bj));
        var H = e[K.g.Ia] || {},
          D = H[K.g.Sc];
        D || (0 != D && H[K.g.R])
          ? (l.allowLinker = !0)
          : !1 === D && Iw(l, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        l.name = a;
      }
      sh() && (h["&gcs"] = th());
      h["&gcd"] = Ch(c);
      Sf() &&
        (R(K.g.O) || (l.storage = "none"),
        R(K.g.F) || ((h.allowAdFeatures = !1), (l.storeGac = !1)));
      Fh() && (h["&dma_cps"] = Dh());
      h["&dma"] = Eh();
      Wg(dh()) && (h["&tcfd"] = Gh());
      We() && (h["&tag_exp"] = We());
      var I = dl(c) || d(K.g.cb),
        M = d(K.g.ie);
      I && (c.isGtmEvent || (l[K.g.cb] = I), (l._cd2l = !0));
      M && !c.isGtmEvent && (l[K.g.ie] = M);
      e.fieldsToSend = f;
      e.fieldsToSet = h;
      e.createOnlyFields = l;
      return e;
    },
    Jw = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Nf = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.oi = "impressions" === b.translateIfKeyEquals ? Tw(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Md = "promoView" === b.translateIfKeyEquals ? Tw(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Md = "promoClick" === b.translateIfKeyEquals ? Tw(f) : f;
        c.Va = b.promoClick.actionField;
        return c;
      }
      for (var h in b)
        if (
          b.hasOwnProperty(h) &&
          "translateIfKeyEquals" !== h &&
          "impressions" !== h &&
          "promoView" !== h &&
          "promoClick" !== h &&
          "currencyCode" !== h
        ) {
          c.action = h;
          var l = b[h].products;
          c.Sb = "products" === b.translateIfKeyEquals ? Tw(l) : l;
          c.Va = b[h].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    Kw = function (a, b) {
      function c(u) {
        return {
          id: d(K.g.sa),
          affiliation: d(K.g.Rg),
          revenue: d(K.g.ba),
          tax: d(K.g.nf),
          shipping: d(K.g.Pc),
          coupon: d(K.g.Sg),
          list: d(K.g.lf) || d(K.g.Oc) || u,
        };
      }
      for (
        var d = function (u) {
            return U(b, u);
          },
          e = d(K.g.W),
          f,
          h = 0;
        e && h < e.length && !(f = e[h][K.g.lf] || e[h][K.g.Oc]);
        h++
      );
      var l = d(K.g.Mc);
      if (Za(l))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            p;
          for (p in l)
            l.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != l[p] &&
              Iw(n, p, n[l[p]]);
        }
      var q = null,
        r = d(K.g.Fj);
      if (a === K.g.na || a === K.g.ac) q = { action: a, Va: c(), Sb: Tw(e) };
      else if (a === K.g.Xb) q = { action: "add", Va: c(), Sb: Tw(e) };
      else if (a === K.g.Yb) q = { action: "remove", Va: c(), Sb: Tw(e) };
      else if (a === K.g.Ca) q = { action: "detail", Va: c(f), Sb: Tw(e) };
      else if (a === K.g.Xa) q = { action: "impressions", oi: Tw(e) };
      else if (a === K.g.Ya) q = { action: "promo_view", Md: Tw(r) || Tw(e) };
      else if (("select_content" === a && r && 0 < r.length) || a === K.g.jb)
        q = { action: "promo_click", Md: Tw(r) || Tw(e) };
      else if ("select_content" === a || a === K.g.Zb)
        q = {
          action: "click",
          Va: { list: d(K.g.lf) || d(K.g.Oc) || f },
          Sb: Tw(e),
        };
      else if (a === K.g.Cb || "checkout_progress" === a) {
        var t = { step: a === K.g.Cb ? 1 : d(K.g.kf), option: d(K.g.Zd) };
        q = { action: "checkout", Sb: Tw(e), Va: z(c(), t) };
      } else
        "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            Va: { step: d(K.g.kf), option: d(K.g.Zd) },
          });
      q && (q.Nf = d(K.g.ra));
      return q;
    },
    rx = {},
    Fw = function (a, b) {
      var c = rx[a];
      rx[a] = z(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  wf();
  function Cx() {
    return (E.gaGlobal = E.gaGlobal || {});
  }
  var Dx = function () {
      var a = Cx();
      a.hid = a.hid || Ba();
      return a.hid;
    },
    Ex = function (a, b) {
      var c = Cx();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var ly = function (a) {
      this.s = a;
      this.C = "";
      this.h = this.s;
    },
    my = function (a, b) {
      a.h = b;
      return a;
    };
  function ny(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function oy(a, b, c) {
    if (a) {
      var d = a || [],
        e = Za(b) ? b : {};
      if (Array.isArray(d)) for (var f = 0; f < d.length; f++) c(d[f], e);
    }
  }
  var Dy = window,
    Ey = document,
    Fy = function (a) {
      var b = Dy._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        Ey.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === Dy["ga-disable-" + a])
      )
        return !0;
      try {
        var c = Dy.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Ih("AMP_TOKEN", String(Ey.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return Ey.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Oy(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.g.Ua] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Wy = function (a, b) {};
  function Vy(a, b) {
    var c = function () {};
    return c;
  }
  function Xy(a, b, c) {}
  var Yy = Vy;
  var Zy = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var $y = encodeURI,
    X = encodeURIComponent,
    az = function (a, b, c) {
      ac(a, b, c);
    },
    bz = function (a, b) {
      if (!a) return !1;
      var c = Ki(Pi(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    cz = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { securityGroups: {} };

  (Y.securityGroups.c = ["google"]),
    (function () {
      (function (a) {
        Y.__c = a;
        Y.__c.m = "c";
        Y.__c.isVendorTemplate = !0;
        Y.__c.priorityOverride = 0;
        Y.__c.isInfrastructure = !1;
        Y.__c.runInSiloedMode = !0;
      })(function (a) {
        qv(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (Y.securityGroups.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.m = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
        Y.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.securityGroups.v = ["google"]),
    (function () {
      (function (a) {
        Y.__v = a;
        Y.__v.m = "v";
        Y.__v.isVendorTemplate = !0;
        Y.__v.priorityOverride = 0;
        Y.__v.isInfrastructure = !1;
        Y.__v.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = iv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        qv(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Y.securityGroups.rep = ["google"]),
    (function () {
      (function (a) {
        Y.__rep = a;
        Y.__rep.m = "rep";
        Y.__rep.isVendorTemplate = !0;
        Y.__rep.priorityOverride = 0;
        Y.__rep.isInfrastructure = !1;
        Y.__rep.runInSiloedMode = !0;
      })(function (a) {
        var b = ti(a.vtp_containerId),
          c = sk(b, !0),
          d;
        switch (c.prefix) {
          case "AW":
            d = Wv;
            break;
          case "DC":
            d = iw;
            break;
          case "GF":
            d = ow;
            break;
          case "HA":
            d = tw;
            break;
          case "UA":
            d = Rw;
            break;
          case "MC":
            d = Yy(c, a.vtp_gtmEventId);
            break;
          default:
            G(a.vtp_gtmOnFailure);
            return;
        }
        if (d) {
          G(a.vtp_gtmOnSuccess);
          var e = d,
            f = sk(pi(b), !0);
          f && Ql.register(f, e);
          if (a.vtp_remoteConfig) {
            var h = a.vtp_remoteConfig || {},
              l = sk(pi(b), !0);
            l && Zl(l, h);
          }
        } else G(a.vtp_gtmOnFailure);
      });
    })();

  (Y.securityGroups.get = ["google"]),
    (function () {
      (function (a) {
        Y.__get = a;
        Y.__get.m = "get";
        Y.__get.isVendorTemplate = !0;
        Y.__get.priorityOverride = 0;
        Y.__get.isInfrastructure = !1;
        Y.__get.runInSiloedMode = !1;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = ws(String(b.streamId), d, c);
        zs(f, e.eventId, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  (Y.securityGroups.zone = []),
    (function () {
      var a = {},
        b = function (c) {
          for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
          return !0;
        };
      (function (c) {
        Y.__zone = c;
        Y.__zone.m = "zone";
        Y.__zone.isVendorTemplate = !0;
        Y.__zone.priorityOverride = 0;
        Y.__zone.isInfrastructure = !1;
        Y.__zone.runInSiloedMode = !1;
      })(function (c) {
        var d = b(c.vtp_boundaries || []);
        if (c.vtp_gtmTagId in a) Is(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d);
        else if (d) {
          var e = c.vtp_childContainers.map(function (m) {
              return m.publicId;
            }),
            f = c.vtp_enableTypeRestrictions
              ? c.vtp_whitelistedTypes.map(function (m) {
                  return m.typeId;
                })
              : null,
            h = {};
          var l = Hs(
            c.vtp_gtmEventId,
            e,
            f,
            h,
            Fr(c.vtp_gtmEntityIndex, c.vtp_gtmEntityName),
            !!c.vtp_inheritParentConfig
          );
          a[c.vtp_gtmTagId] = l;
        }
        G(c.vtp_gtmOnSuccess);
      });
    })();

  var xA = {};
  xA.dataLayer = bf;
  xA.callback = function (a) {
    Re.hasOwnProperty(a) && xa(Re[a]) && Re[a]();
    delete Re[a];
  };
  xA.bootstrap = 0;
  xA._spx = !1;
  function yA() {
    Ae[qi()] = Ae[qi()] || xA;
    wi();
    Ai() ||
      k(Bi(), function (d, e) {
        Yq(d, e.transportUrl, e.context);
        J(92);
      });
    Oa(Se, Y.securityGroups);
    var a = si(yi()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || J(142);
    Xc = gd;
  }
  (function (a) {
    function b() {
      m = F.documentElement.getAttribute("data-tag-assistant-present");
      au(m) && (l = h.Uj);
    }
    if (!E["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (F.referrer) {
        var d = Pi(F.referrer);
        c = "cct.google" === Ji(d, "host");
      }
      if (!c) {
        var e = Lh("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((E["__TAGGY_INSTALLED"] = !0),
        Yb("https://cct.google/taggy/agent.js"));
    }
    if (Me) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Ge ? ((v = "OGT"), (w = "GTAG")) : Me && (w = v = "OPT");
          var x = E["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (E["google.tagmanager.debugui2.queue"] = x),
            Yb(
              "https://" +
                ze.Cc +
                "/debug/bootstrap?id=" +
                ji.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                Ei()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Sb,
              containerProduct: v,
              debug: !1,
              id: ji.ctid,
              targetRef: { ctid: ji.ctid, isDestination: hi.kd },
              aliases: ki(),
              destinations: ni(),
            },
          };
          y.data.resume = function () {
            a();
          };
          ze.Xi && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = { Lm: 1, Vj: 2, jk: 3, Zi: 4, Uj: 5 },
        l = void 0,
        m = void 0,
        n = Ki(E.location, "query", !1, void 0, "gtm_debug");
      au(n) && (l = h.Vj);
      if (!l && F.referrer) {
        var p = Pi(F.referrer);
        "tagassistant.google.com" === Ji(p, "host") && (l = h.jk);
      }
      if (!l) {
        var q = Lh("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Zi);
      }
      l || b();
      if (!l && bu(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && Sb ? f(l) : a();
          },
          t = !1;
        bc(
          F,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        E.setTimeout(function () {
          r();
        }, 200);
      } else l && Sb ? f(l) : a();
    }
  })(function () {
    try {
      ui();
      if (P(16)) {
      }
      Bf().s();
      jh();
      (P(98) || P(99) || P(100)) && om();
      var a = ri();
      if (ei().canonical[a]) {
        var b = Ae.zones;
        b && b.unregisterChild(mi());
        var c = Jq(ri());
        c._event && (c._event.external = []);
        c._entity && (c._entity.external = []);
      } else {
        Vq();
        for (
          var d = data.resource || {}, e = d.macros || [], f = 0;
          f < e.length;
          f++
        )
          Nc.push(e[f]);
        for (var h = d.tags || [], l = 0; l < h.length; l++) Qc.push(h[l]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++)
          Pc.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            ("if" !== v && "unless" !== v) || Wc(t[v]);
          }
          Oc.push(t);
        }
        Sc = Y;
        Tc = Ov;
        yA();
        if (P(25) && !Me) {
          for (
            var w = sf["7"], x = w ? w.split("|") : [], y = {}, A = 0;
            A < x.length;
            A++
          )
            y[x[A]] = !0;
          for (var B = 0; B < Zf.length; B++) {
            var C = Zf[B],
              H = C,
              D = y[C] ? "granted" : "denied";
            Gf().implicit(H, D);
          }
        }
        $t();
        Zq = !1;
        $q = 0;
        if (
          ("interactive" == F.readyState && !F.createEventObject) ||
          "complete" == F.readyState
        )
          br();
        else {
          bc(F, "DOMContentLoaded", br);
          bc(F, "readystatechange", br);
          if (F.createEventObject && F.documentElement.doScroll) {
            var I = !0;
            try {
              I = !E.frameElement;
            } catch (Q) {}
            I && cr();
          }
          bc(E, "load", br);
        }
        ot = !1;
        "complete" === F.readyState ? qt() : bc(E, "load", qt);
        nl && (il(Al), E.setInterval(zl, 864e5));
        il(Qv);
        il(cs);
        il(up);
        il(Pl);
        il(ns);
        il(Fl);
        il(Xn);
        il(Dl);
        il(js);
        P(32) && il(fs);
        P(106) && (il(Rv), il(Tv));
        wu();
        rf(1);
        Ls();
        Qe = La();
        xA.bootstrap = Qe;
        if (P(16)) {
        }
      }
    } catch (Q) {
      if ((rf(4), nl)) {
        var T = ul(!0, !0);
        ac(T);
      }
    }
  });
})();
