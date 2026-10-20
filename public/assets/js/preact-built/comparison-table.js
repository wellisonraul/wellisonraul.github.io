(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p;
  var v;
  var y;
  var d = {};
  var w = [];
  var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var g = Array.isArray;
  function m(n2, l2) {
    for (var u3 in l2) n2[u3] = l2[u3];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l2, u3, t2) {
    var i2, r2, o2, e2 = {};
    for (o2 in u3) "key" == o2 ? i2 = u3[o2] : "ref" == o2 ? r2 = u3[o2] : e2[o2] = u3[o2];
    if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
    return x(l2, e2, i2, r2, null);
  }
  function x(n2, t2, i2, r2, o2) {
    var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
    return null == o2 && null != l.vnode && l.vnode(e2), e2;
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function $(n2, l2) {
    if (null == l2) return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
    return "function" == typeof n2.type ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u3 = n2.__v, t2 = u3.__e, i2 = [], r2 = [], o2 = m({}, u3);
      o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i2, null == t2 ? $(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, D(i2, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && P(o2);
    }
  }
  function P(n2) {
    if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
      if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
    }), P(n2);
  }
  function A(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, _2, g2, m2 = t2 && t2.__k || w, b2 = l2.length;
    for (f3 = T(u3, l2, m2, f3, b2), a2 = 0; a2 < b2; a2++) null != (p2 = u3.__k[a2]) && (h2 = -1 != p2.__i && m2[p2.__i] || d, p2.__i = a2, _2 = q(n2, p2, h2, i2, r2, o2, e2, f3, c2, s2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), s2.push(p2.ref, p2.__c || v2, p2)), null == y2 && null != v2 && (y2 = v2), (g2 = !!(4 & p2.__u)) || h2.__k === p2.__k ? (f3 = j(p2, f3, n2, g2), g2 && h2.__e && (h2.__e = null)) : "function" == typeof p2.type && void 0 !== _2 ? f3 = _2 : v2 && (f3 = v2.nextSibling), p2.__u &= -7);
    return u3.__e = y2, f3;
  }
  function T(n2, l2, u3, t2, i2) {
    var r2, o2, e2, f3, c2, s2 = u3.length, a2 = s2, h2 = 0;
    for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f3 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = O(o2, u3, f3, a2)) && (a2--, (e2 = u3[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
    if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u3[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = $(e2)), K(e2, e2));
    return t2;
  }
  function j(n2, l2, u3, t2) {
    var i2, r2;
    if ("function" == typeof n2.type) {
      for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = j(i2[r2], l2, u3, t2));
      return l2;
    }
    n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), u3.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
    do {
      l2 = l2 && l2.nextSibling;
    } while (null != l2 && 8 == l2.nodeType);
    return l2;
  }
  function O(n2, l2, u3, t2) {
    var i2, r2, o2, e2 = n2.key, f3 = n2.type, c2 = l2[u3], s2 = null != c2 && 0 == (2 & c2.__u);
    if (null === c2 && null == e2 || s2 && e2 == c2.key && f3 == c2.type) return u3;
    if (t2 > (s2 ? 1 : 0)) {
      for (i2 = u3 - 1, r2 = u3 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f3 == c2.type) return o2;
    }
    return -1;
  }
  function z(n2, l2, u3) {
    "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || _.test(l2) ? u3 : u3 + "px";
  }
  function N(n2, l2, u3, t2, i2) {
    var r2, o2;
    n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || z(n2.style, l2, "");
      if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || z(n2.style, l2, u3[l2]);
    }
    else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(a, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3[s] = t2[s] : (u3[s] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
    else {
      if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
        n2[l2] = null == u3 ? "" : u3;
        break n;
      } catch (n3) {
      }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
    }
  }
  function V(n2) {
    return function(u3) {
      if (this.l) {
        var t2 = this.l[u3.type + n2];
        if (null == u3[c]) u3[c] = h++;
        else if (u3[c] < t2[s]) return;
        return t2(l.event ? l.event(u3) : u3);
      }
    };
  }
  function q(n2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, d2, _2, k2, x2, M, $2, I2, P2, A2, H2, T2 = u3.type;
    if (void 0 !== u3.constructor) return null;
    128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
    n: if ("function" == typeof T2) try {
      if (k2 = u3.props, x2 = T2.prototype && T2.prototype.render, M = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M ? M.props.value : a2.__ : i2, t2.__c ? _2 = (h2 = u3.__c = t2.__c).__ = h2.__E : (x2 ? u3.__c = h2 = new T2(k2, $2) : (u3.__c = h2 = new C(k2, $2), h2.constructor = T2, h2.render = Q), M && M.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = m({}, h2.__s)), m(h2.__s, T2.getDerivedStateFromProps(k2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = u3, p2) x2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
      else {
        if (x2 && null == T2.getDerivedStateFromProps && k2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(k2, $2), u3.__v == t2.__v || !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(k2, h2.__s, $2)) {
          u3.__v != t2.__v && (h2.props = k2, h2.state = h2.__s, h2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), w.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
          break n;
        }
        null != h2.componentWillUpdate && h2.componentWillUpdate(k2, h2.__s, $2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
          h2.componentDidUpdate(v2, y2, d2);
        });
      }
      if (h2.context = $2, h2.props = k2, h2.__P = n2, h2.__e = false, I2 = l.__r, P2 = 0, x2) h2.state = h2.__s, h2.__d = false, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), w.push.apply(h2.__h, h2._sb), h2._sb = [];
      else do {
        h2.__d = false, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
      } while (h2.__d && ++P2 < 25);
      h2.state = h2.__s, null != h2.getChildContext && (i2 = m(m({}, i2), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (d2 = h2.getSnapshotBeforeUpdate(v2, y2)), A2 = null != a2 && a2.type === S && null == a2.key ? E(a2.props.children) : a2, f3 = L(n2, g(A2) ? A2 : [A2], u3, t2, i2, r2, o2, e2, f3, c2, s2), h2.base = u3.__e, u3.__u &= -161, h2.__h.length && e2.push(h2), _2 && (h2.__E = h2.__ = null);
    } catch (n3) {
      if (u3.__v = null, c2 || null != o2) if (n3.then) {
        for (u3.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
        o2[o2.indexOf(f3)] = null, u3.__e = f3;
      } else {
        for (H2 = o2.length; H2--; ) b(o2[H2]);
        B(u3);
      }
      else u3.__e = t2.__e, u3.__k = t2.__k, n3.then || B(u3);
      l.__e(n3, u3, t2);
    }
    else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = G(t2.__e, u3, t2, i2, r2, o2, e2, c2, s2);
    return (a2 = l.diffed) && a2(u3), 128 & u3.__u ? void 0 : f3;
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u3, t2) {
    for (var i2 = 0; i2 < t2.length; i2++) J(t2[i2], t2[++i2], t2[++i2]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function E(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : m({}, n2);
  }
  function G(u3, t2, i2, r2, o2, e2, f3, c2, s2) {
    var a2, h2, p2, v2, y2, w2, _2, m2 = i2.props || d, k2 = t2.props, x2 = t2.type;
    if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
      for (a2 = 0; a2 < e2.length; a2++) if ((y2 = e2[a2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : 3 == y2.nodeType)) {
        u3 = y2, e2[a2] = null;
        break;
      }
    }
    if (null == u3) {
      if (null == x2) return document.createTextNode(k2);
      u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
    }
    if (null == x2) m2 === k2 || c2 && u3.data == k2 || (u3.data = k2);
    else {
      if (e2 = e2 && n.call(u3.childNodes), !c2 && null != e2) for (m2 = {}, a2 = 0; a2 < u3.attributes.length; a2++) m2[(y2 = u3.attributes[a2]).name] = y2.value;
      for (a2 in m2) y2 = m2[a2], "dangerouslySetInnerHTML" == a2 ? p2 = y2 : "children" == a2 || a2 in k2 || "value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2 || N(u3, a2, null, y2, o2);
      for (a2 in k2) y2 = k2[a2], "children" == a2 ? v2 = y2 : "dangerouslySetInnerHTML" == a2 ? h2 = y2 : "value" == a2 ? w2 = y2 : "checked" == a2 ? _2 = y2 : c2 && "function" != typeof y2 || m2[a2] === y2 || N(u3, a2, y2, m2[a2], o2);
      if (h2) c2 || p2 && (h2.__html == p2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
      else if (p2 && (u3.innerHTML = ""), L("template" == t2.type ? u3.content : u3, g(v2) ? v2 : [v2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i2.__k && $(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) b(e2[a2]);
      c2 || (a2 = "value", "progress" == x2 && null == w2 ? u3.removeAttribute("value") : null != w2 && (w2 !== u3[a2] || "progress" == x2 && !w2 || "option" == x2 && w2 != m2[a2]) && N(u3, a2, w2, m2[a2], o2), a2 = "checked", null != _2 && _2 != u3[a2] && N(u3, a2, _2, m2[a2], o2));
    }
    return u3;
  }
  function J(n2, u3, t2) {
    try {
      if ("function" == typeof n2) {
        var i2 = "function" == typeof n2.__u;
        i2 && n2.__u(), i2 && null == u3 || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t2);
    }
  }
  function K(n2, u3, t2) {
    var i2, r2;
    if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || J(i2, null, u3)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount) try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i2.base = i2.__P = null;
    }
    if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && K(i2[r2], u3, t2 || "function" != typeof n2.type);
    t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function Q(n2, l2, u3) {
    return this.constructor(n2, u3);
  }
  function R(u3, t2, i2) {
    var r2, o2, e2, f3;
    t2 == document && (t2 = document.documentElement), l.__ && l.__(u3, t2), o2 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], f3 = [], q(t2, u3 = (!r2 && i2 || t2).__k = k(S, null, [u3]), o2 || d, d, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f3), D(e2, u3, f3);
  }
  n = w.slice, l = { __e: function(n2, l2, u3, t2) {
    for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
      if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
    } catch (l3) {
      n2 = l3;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, C.prototype.setState = function(n2, l2) {
    var u3;
    u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u3), this.props)), n2 && m(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), A(this));
  }, C.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
  }, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, s = "__a" + f, a = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  function u2(e2, t2, n2, o2, i2, u3) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return l.vnode && l.vnode(l2), l2;
  }

  // ns-hugo-imp:/home/wellison/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!hugo!blox/kit/modules/blox@v0.0.0-20260527025321-61f41d3667f1/blox/shared/js/components/Icon.jsx
  var Icon = ({ svg, attributes }) => {
    if (!svg) return null;
    let decoded = String(svg).replace(/\\u([0-9a-fA-F]{4})/g, (_2, hex) => String.fromCharCode(parseInt(hex, 16))).trim();
    const _textarea = document.createElement("textarea");
    _textarea.innerHTML = decoded;
    decoded = _textarea.value;
    const hasWrapper = /<svg[\s>]/i.test(decoded);
    if (hasWrapper) {
      const callerStyle = attributes?.style || "";
      const hasExplicitHeight = /height\s*:/i.test(String(callerStyle));
      const svgStyle = hasExplicitHeight ? "height:100%;width:auto" : "height:1em;width:auto";
      decoded = decoded.replace(/^(<svg\b)/i, `$1 style="${svgStyle}"`);
      const wrapperProps = {
        ...attributes,
        class: attributes?.class || ""
      };
      return /* @__PURE__ */ u2("span", { ...wrapperProps, dangerouslySetInnerHTML: { __html: decoded } });
    }
    const finalAttributes = {
      class: "inline-block w-4 h-4",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      ...attributes || {}
    };
    const attrs = Object.entries(finalAttributes).map(([k2, v2]) => `${k2}="${String(v2)}"`).join(" ");
    return /* @__PURE__ */ u2("span", { class: "inline-block", dangerouslySetInnerHTML: { __html: `<svg ${attrs}>${decoded}</svg>` } });
  };

  // ns-hugo-imp:/home/wellison/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!hugo!blox/kit/modules/blox@v0.0.0-20260527025321-61f41d3667f1/blox/comparison-table/component.jsx
  var CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>`;
  var X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/></svg>`;
  var MINUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3.75 10a.75.75 0 01.75-.75h11a.75.75 0 010 1.5h-11a.75.75 0 01-.75-.75z" clip-rule="evenodd"/></svg>`;
  function renderText(text) {
    if (!text) return "";
    return String(text).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(
      /`(.*?)`/g,
      (_2, code) => `<code class="px-1.5 py-0.5 rounded font-mono text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">${code}</code>`
    );
  }
  function resolveCell(raw) {
    if (raw === true) return { kind: "check" };
    if (raw === false || raw == null || raw === "") return { kind: "cross" };
    if (typeof raw === "object") {
      if (raw.value === true) return { kind: "check", note: raw.note };
      if (raw.value === false) return { kind: "cross", note: raw.note };
      if (raw.value === "partial" || raw.partial) return { kind: "partial", note: raw.note ?? raw.value };
      return { kind: "text", value: raw.value ?? "", emphasis: raw.emphasis ?? false, note: raw.note };
    }
    const s2 = String(raw).trim();
    if (s2 === "true" || s2 === "yes" || s2 === "\u2713") return { kind: "check" };
    if (s2 === "false" || s2 === "no" || s2 === "\u2717" || s2 === "\u2014") return { kind: "cross" };
    if (s2 === "partial" || s2 === "limited") return { kind: "partial", note: s2 };
    return { kind: "text", value: s2 };
  }
  function CellContent({ cell, isHighlighted }) {
    const positiveColor = isHighlighted ? "text-primary-600 dark:text-primary-400" : "text-green-500 dark:text-green-400";
    const partialColor = "text-amber-500 dark:text-amber-400";
    if (cell.kind === "check") {
      return /* @__PURE__ */ u2("div", { class: "flex items-center justify-center gap-1.5", children: [
        /* @__PURE__ */ u2("span", { class: `h-5 w-5 ${positiveColor}`, dangerouslySetInnerHTML: { __html: CHECK_SVG } }),
        cell.note && /* @__PURE__ */ u2("span", { class: "text-xs text-gray-500 dark:text-gray-400", children: cell.note })
      ] });
    }
    if (cell.kind === "cross") {
      return /* @__PURE__ */ u2("div", { class: "flex items-center justify-center gap-1.5", children: [
        /* @__PURE__ */ u2("span", { class: "h-5 w-5 text-gray-400 dark:text-gray-500", dangerouslySetInnerHTML: { __html: X_SVG } }),
        cell.note && /* @__PURE__ */ u2("span", { class: "text-xs text-gray-500 dark:text-gray-400", children: cell.note })
      ] });
    }
    if (cell.kind === "partial") {
      return /* @__PURE__ */ u2("div", { class: "flex items-center justify-center gap-1.5", children: [
        /* @__PURE__ */ u2("span", { class: `h-5 w-5 ${partialColor}`, dangerouslySetInnerHTML: { __html: MINUS_SVG } }),
        cell.note && /* @__PURE__ */ u2("span", { class: "text-xs text-gray-500 dark:text-gray-400", children: cell.note })
      ] });
    }
    const isStrong = cell.emphasis || isHighlighted;
    const weight = isStrong ? "font-semibold text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300";
    return /* @__PURE__ */ u2("div", { class: "text-center", children: [
      /* @__PURE__ */ u2("span", { class: `text-sm ${weight}`, children: cell.value }),
      cell.note && /* @__PURE__ */ u2("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5", children: cell.note })
    ] });
  }
  function DesktopTable({ competitors, rows, cta, icon_svgs, rowStriping = false }) {
    const highlightIdx = competitors.findIndex((c2) => c2.highlight);
    const ctaIconSvg = cta?.icon ? icon_svgs?.[cta.icon] ?? null : null;
    const isExtCta = cta?.url && (cta.url.startsWith("http://") || cta.url.startsWith("https://"));
    const highlighted = highlightIdx >= 0 ? competitors[highlightIdx] : null;
    const colWidthPct = 100 / (competitors.length + 1.5);
    const labelColPct = colWidthPct * 1.5;
    const colLeftPct = labelColPct + colWidthPct * (highlightIdx >= 0 ? highlightIdx : 0);
    return (
      // pt-5 reserves vertical space above the table for the ring-tab badge to sit on the column's top edge
      /* @__PURE__ */ u2("div", { class: "hidden md:block relative pt-5", children: /* @__PURE__ */ u2("div", { class: "relative rounded-2xl ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800 overflow-visible shadow-sm", children: [
        highlightIdx >= 0 && /* @__PURE__ */ u2(
          "div",
          {
            class: "absolute pointer-events-none rounded-2xl bg-primary-50/60 dark:bg-primary-900/20",
            style: `top: -1.25rem; bottom: 0; left: calc(${colLeftPct}% - 4px); width: calc(${colWidthPct}% + 8px);`
          }
        ),
        highlighted?.badge && /* @__PURE__ */ u2("div", { class: "absolute z-10", style: `top: -1.25rem; left: calc(${colLeftPct + colWidthPct / 2}%); transform: translate(-50%, -50%);`, children: /* @__PURE__ */ u2("span", { class: "inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-600 text-white shadow-md whitespace-nowrap", children: highlighted.badge }) }),
        /* @__PURE__ */ u2("table", { class: "relative w-full", children: [
          /* @__PURE__ */ u2("thead", { children: /* @__PURE__ */ u2("tr", { children: [
            /* @__PURE__ */ u2("th", { class: "text-left px-6 py-5 align-bottom", style: `width:${labelColPct}%` }),
            competitors.map((c2, i2) => {
              const isYou = c2.highlight;
              return /* @__PURE__ */ u2("th", { class: "px-6 py-5 align-bottom text-center", style: `width:${colWidthPct}%`, children: [
                /* @__PURE__ */ u2("div", { class: `text-base font-bold ${isYou ? "text-primary-600 dark:text-primary-400" : "text-gray-900 dark:text-white"}`, children: c2.name }),
                c2.tagline && /* @__PURE__ */ u2("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-1 font-normal", children: c2.tagline }),
                c2.badge && !isYou && /* @__PURE__ */ u2("div", { class: "mt-2", children: /* @__PURE__ */ u2("span", { class: "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300", children: c2.badge }) })
              ] }, i2);
            })
          ] }) }),
          /* @__PURE__ */ u2("tbody", { children: [
            (() => {
              let dataIdx = -1;
              return rows.map((row, ri) => {
                const isCategory = row.category === true;
                if (isCategory) {
                  return /* @__PURE__ */ u2("tr", { children: /* @__PURE__ */ u2(
                    "td",
                    {
                      colSpan: competitors.length + 1,
                      class: "px-6 pt-8 pb-3 text-base font-bold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700",
                      children: row.feature
                    }
                  ) }, ri);
                }
                dataIdx++;
                const values = row.values ?? [];
                const isOdd = rowStriping && dataIdx % 2 === 1;
                const cellBg = (ci) => {
                  if (row.highlight) return "bg-primary-100/50 dark:bg-primary-900/25";
                  if (isOdd && ci !== highlightIdx) return "bg-gray-50/70 dark:bg-gray-800/30";
                  return "";
                };
                return /* @__PURE__ */ u2("tr", { class: "border-t border-gray-100 dark:border-gray-700/50", children: [
                  /* @__PURE__ */ u2("td", { class: `px-6 py-4 ${cellBg(-1)}`, children: [
                    /* @__PURE__ */ u2("div", { class: "text-sm font-medium text-gray-900 dark:text-white", children: row.feature }),
                    row.note && /* @__PURE__ */ u2("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5", children: row.note })
                  ] }),
                  competitors.map((_2, ci) => /* @__PURE__ */ u2("td", { class: `px-6 py-4 ${cellBg(ci)}`, children: /* @__PURE__ */ u2(CellContent, { cell: resolveCell(values[ci]), isHighlighted: ci === highlightIdx }) }, ci))
                ] }, ri);
              });
            })(),
            cta?.text && cta?.url && /* @__PURE__ */ u2("tr", { class: "border-t border-gray-100 dark:border-gray-700/50", children: [
              /* @__PURE__ */ u2("td", { class: "px-6 py-6" }),
              competitors.map((c2, ci) => /* @__PURE__ */ u2("td", { class: "px-6 py-6 text-center", children: ci === highlightIdx && /* @__PURE__ */ u2(
                "a",
                {
                  href: cta.url,
                  ...isExtCta ? { target: "_blank", rel: "noopener noreferrer" } : {},
                  class: "inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
                  children: [
                    cta.text,
                    ctaIconSvg && /* @__PURE__ */ u2(Icon, { svg: ctaIconSvg, attributes: { class: "inline-block", style: "height:1rem;width:auto" } })
                  ]
                }
              ) }, ci))
            ] })
          ] })
        ] }),
        highlightIdx >= 0 && /* @__PURE__ */ u2(
          "div",
          {
            class: "absolute pointer-events-none ring-2 ring-primary-500 dark:ring-primary-400 rounded-2xl",
            style: `top: -1.25rem; bottom: 0; left: calc(${colLeftPct}% - 4px); width: calc(${colWidthPct}% + 8px);`
          }
        )
      ] }) })
    );
  }
  function MobileCards({ competitors, rows, cta, icon_svgs }) {
    const highlightIdx = competitors.findIndex((c2) => c2.highlight);
    const ordered = highlightIdx >= 0 ? [competitors[highlightIdx], ...competitors.filter((_2, i2) => i2 !== highlightIdx)] : competitors;
    const ctaIconSvg = cta?.icon ? icon_svgs?.[cta.icon] ?? null : null;
    const isExtCta = cta?.url && (cta.url.startsWith("http://") || cta.url.startsWith("https://"));
    return /* @__PURE__ */ u2("div", { class: "md:hidden space-y-4", children: ordered.map((c2) => {
      const ci = competitors.indexOf(c2);
      const isYou = c2.highlight;
      return /* @__PURE__ */ u2(
        "div",
        {
          class: `rounded-2xl p-5 ${isYou ? "ring-2 ring-primary-500 bg-primary-50/40 dark:bg-primary-900/10" : "ring-1 ring-gray-200 dark:ring-gray-700 bg-white dark:bg-gray-800"}`,
          children: [
            /* @__PURE__ */ u2("div", { class: "flex items-baseline justify-between mb-4", children: [
              /* @__PURE__ */ u2("div", { children: [
                /* @__PURE__ */ u2("div", { class: `text-lg font-bold ${isYou ? "text-primary-600 dark:text-primary-400" : "text-gray-900 dark:text-white"}`, children: c2.name }),
                c2.tagline && /* @__PURE__ */ u2("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5", children: c2.tagline })
              ] }),
              c2.badge && /* @__PURE__ */ u2(
                "span",
                {
                  class: `px-2.5 py-0.5 text-xs font-semibold rounded-full ${isYou ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,
                  children: c2.badge
                }
              )
            ] }),
            /* @__PURE__ */ u2("ul", { class: "space-y-3", children: rows.filter((r2) => !r2.category).map((row, ri) => /* @__PURE__ */ u2("li", { class: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ u2("div", { class: "flex-1 min-w-0", children: [
                /* @__PURE__ */ u2("div", { class: "text-sm font-medium text-gray-900 dark:text-white", children: row.feature }),
                row.note && /* @__PURE__ */ u2("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5", children: row.note })
              ] }),
              /* @__PURE__ */ u2("div", { class: "flex-shrink-0", children: /* @__PURE__ */ u2(CellContent, { cell: resolveCell((row.values ?? [])[ci]), isHighlighted: isYou }) })
            ] }, ri)) }),
            isYou && cta?.text && cta?.url && /* @__PURE__ */ u2(
              "a",
              {
                href: cta.url,
                ...isExtCta ? { target: "_blank", rel: "noopener noreferrer" } : {},
                class: "mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-all duration-200",
                children: [
                  cta.text,
                  ctaIconSvg && /* @__PURE__ */ u2(Icon, { svg: ctaIconSvg, attributes: { class: "inline-block", style: "height:1rem;width:auto" } })
                ]
              }
            )
          ]
        },
        ci
      );
    }) });
  }
  var ComparisonTableBlock = ({ content = {}, design = {}, icon_svgs = {} }) => {
    const { title, subtitle, text, competitors = [], rows = [], cta } = content;
    const rowStriping = design.row_striping === true;
    return /* @__PURE__ */ u2("div", { class: "py-16 sm:py-24 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ u2("div", { class: "max-w-6xl mx-auto", children: [
      (title || subtitle || text) && /* @__PURE__ */ u2("div", { class: "text-center max-w-3xl mx-auto mb-10 lg:mb-14", children: [
        subtitle && /* @__PURE__ */ u2("p", { class: "text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3", children: subtitle }),
        title && /* @__PURE__ */ u2(
          "h2",
          {
            class: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4",
            dangerouslySetInnerHTML: { __html: renderText(title) }
          }
        ),
        text && /* @__PURE__ */ u2("p", { class: "text-lg text-gray-600 dark:text-gray-400", dangerouslySetInnerHTML: { __html: renderText(text) } })
      ] }),
      competitors.length > 0 && rows.length > 0 && /* @__PURE__ */ u2(S, { children: [
        /* @__PURE__ */ u2(DesktopTable, { competitors, rows, cta, icon_svgs, rowStriping }),
        /* @__PURE__ */ u2(MobileCards, { competitors, rows, cta, icon_svgs })
      ] })
    ] }) });
  };

  // <stdin>
  function renderComparisonTableBlocks() {
    const blocks = document.querySelectorAll('[data-block-type="comparison-table"]');
    blocks.forEach((block) => {
      const propsData = block.dataset.props;
      if (propsData) {
        const props = JSON.parse(propsData);
        R(/* @__PURE__ */ u2(ComparisonTableBlock, { ...props }), block);
      }
    });
  }
  renderComparisonTableBlocks();
})();
