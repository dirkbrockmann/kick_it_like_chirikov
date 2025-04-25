(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Bi = {
  display_type: "canvas",
  // {svg{canvas}}
  debug: !1,
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 600, height: 600 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ee(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Xi(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Mr(t) {
  let e, n, r;
  t.length !== 2 ? (e = ee, n = (s, c) => ee(t(s), c), r = (s, c) => t(s) - c) : (e = t === ee || t === Xi ? t : Gi, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && r(s[f - 1], c) > -r(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function Gi() {
  return 0;
}
function Ui(t) {
  return t === null ? NaN : +t;
}
const Yi = Mr(ee), Ki = Yi.right;
Mr(Ui).center;
const Vi = Math.sqrt(50), Zi = Math.sqrt(10), Wi = Math.sqrt(2);
function oe(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Vi ? 10 : a >= Zi ? 5 : a >= Wi ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? oe(t, e, n * 2) : [s, c, u];
}
function Ji(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? oe(e, t, n) : oe(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function qe(t, e, n) {
  return e = +e, t = +t, n = +n, oe(t, e, n)[2];
}
function Qi(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? qe(e, t, n) : qe(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Gt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function ji(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
var ta = { value: () => {
} };
function un() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ne(n);
}
function ne(t) {
  this._ = t;
}
function ea(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ne.prototype = un.prototype = {
  constructor: ne,
  on: function(t, e) {
    var n = this._, r = ea(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = na(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Sn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Sn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ne(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function na(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Sn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ta, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Be = "http://www.w3.org/1999/xhtml";
const En = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Be,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _e(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), En.hasOwnProperty(e) ? { space: En[e], local: t } : t;
}
function ra(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Be && e.documentElement.namespaceURI === Be ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function ia(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function $r(t) {
  var e = _e(t);
  return (e.local ? ia : ra)(e);
}
function aa() {
}
function fn(t) {
  return t == null ? aa : function() {
    return this.querySelector(t);
  };
}
function oa(t) {
  typeof t != "function" && (t = fn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), c, u, l = 0; l < o; ++l)
      (c = a[l]) && (u = t.call(c, c.__data__, l, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new I(r, this._parents);
}
function sa(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ca() {
  return [];
}
function Ar(t) {
  return t == null ? ca : function() {
    return this.querySelectorAll(t);
  };
}
function ua(t) {
  return function() {
    return sa(t.apply(this, arguments));
  };
}
function fa(t) {
  typeof t == "function" ? t = ua(t) : t = Ar(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (r.push(t.call(c, c.__data__, u, o)), i.push(c));
  return new I(r, i);
}
function Tr(t) {
  return function() {
    return this.matches(t);
  };
}
function Pr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var la = Array.prototype.find;
function ha(t) {
  return function() {
    return la.call(this.children, t);
  };
}
function da() {
  return this.firstElementChild;
}
function pa(t) {
  return this.select(t == null ? da : ha(typeof t == "function" ? t : Pr(t)));
}
var ba = Array.prototype.filter;
function ga() {
  return Array.from(this.children);
}
function ya(t) {
  return function() {
    return ba.call(this.children, t);
  };
}
function _a(t) {
  return this.selectAll(t == null ? ga : ya(typeof t == "function" ? t : Pr(t)));
}
function ma(t) {
  typeof t != "function" && (t = Tr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new I(r, this._parents);
}
function Sr(t) {
  return new Array(t.length);
}
function wa() {
  return new I(this._enter || this._groups.map(Sr), this._parents);
}
function se(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
se.prototype = {
  constructor: se,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function va(t) {
  return function() {
    return t;
  };
}
function xa(t, e, n, r, i, a) {
  for (var o = 0, s, c = e.length, u = a.length; o < u; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new se(t, a[o]);
  for (; o < c; ++o)
    (s = e[o]) && (i[o] = s);
}
function Ma(t, e, n, r, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, f = a.length, h = new Array(l), p;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (h[s] = p = o.call(c, c.__data__, s, e) + "", u.has(p) ? i[s] = c : u.set(p, c));
  for (s = 0; s < f; ++s)
    p = o.call(t, a[s], s, a) + "", (c = u.get(p)) ? (r[s] = c, c.__data__ = a[s], u.delete(p)) : n[s] = new se(t, a[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(h[s]) === c && (i[s] = c);
}
function $a(t) {
  return t.__data__;
}
function Aa(t, e) {
  if (!arguments.length) return Array.from(this, $a);
  var n = e ? Ma : xa, r = this._parents, i = this._groups;
  typeof t != "function" && (t = va(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var l = r[u], f = i[u], h = f.length, p = Ta(t.call(l, l && l.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), v = o[u] = new Array(d), g = c[u] = new Array(h);
    n(l, f, _, v, g, p, e);
    for (var x = 0, $ = 0, b, m; x < d; ++x)
      if (b = _[x]) {
        for (x >= $ && ($ = x + 1); !(m = v[$]) && ++$ < d; ) ;
        b._next = m || null;
      }
  }
  return o = new I(o, r), o._enter = s, o._exit = c, o;
}
function Ta(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Pa() {
  return new I(this._exit || this._groups.map(Sr), this._parents);
}
function Sa(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Ea(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = n[c], l = r[c], f = u.length, h = s[c] = new Array(f), p, d = 0; d < f; ++d)
      (p = u[d] || l[d]) && (h[d] = p);
  for (; c < i; ++c)
    s[c] = n[c];
  return new I(s, this._parents);
}
function Na() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function za(t) {
  t || (t = Oa);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, c = i[a] = new Array(s), u, l = 0; l < s; ++l)
      (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new I(i, this._parents).order();
}
function Oa(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ka() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ia() {
  return Array.from(this);
}
function Ca() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Ra() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Fa() {
  return !this.node();
}
function Da(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function La(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ha(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qa(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Ba(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Xa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Ga(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Ua(t, e) {
  var n = _e(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ha : La : typeof e == "function" ? n.local ? Ga : Xa : n.local ? Ba : qa)(n, e));
}
function Er(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ya(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ka(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Va(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Za(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ya : typeof e == "function" ? Va : Ka)(t, e, n ?? "")) : Mt(this.node(), t);
}
function Mt(t, e) {
  return t.style.getPropertyValue(e) || Er(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Wa(t) {
  return function() {
    delete this[t];
  };
}
function Ja(t, e) {
  return function() {
    this[t] = e;
  };
}
function Qa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ja(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Wa : typeof e == "function" ? Qa : Ja)(t, e)) : this.node()[t];
}
function Nr(t) {
  return t.trim().split(/^|\s+/);
}
function ln(t) {
  return t.classList || new zr(t);
}
function zr(t) {
  this._node = t, this._names = Nr(t.getAttribute("class") || "");
}
zr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Or(t, e) {
  for (var n = ln(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function kr(t, e) {
  for (var n = ln(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function to(t) {
  return function() {
    Or(this, t);
  };
}
function eo(t) {
  return function() {
    kr(this, t);
  };
}
function no(t, e) {
  return function() {
    (e.apply(this, arguments) ? Or : kr)(this, t);
  };
}
function ro(t, e) {
  var n = Nr(t + "");
  if (arguments.length < 2) {
    for (var r = ln(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? no : e ? to : eo)(n, e));
}
function io() {
  this.textContent = "";
}
function ao(t) {
  return function() {
    this.textContent = t;
  };
}
function oo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function so(t) {
  return arguments.length ? this.each(t == null ? io : (typeof t == "function" ? oo : ao)(t)) : this.node().textContent;
}
function co() {
  this.innerHTML = "";
}
function uo(t) {
  return function() {
    this.innerHTML = t;
  };
}
function fo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function lo(t) {
  return arguments.length ? this.each(t == null ? co : (typeof t == "function" ? fo : uo)(t)) : this.node().innerHTML;
}
function ho() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function po() {
  return this.each(ho);
}
function bo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function yo() {
  return this.each(bo);
}
function _o(t) {
  var e = typeof t == "function" ? t : $r(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function mo() {
  return null;
}
function wo(t, e) {
  var n = typeof t == "function" ? t : $r(t), r = e == null ? mo : typeof e == "function" ? e : fn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function vo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function xo() {
  return this.each(vo);
}
function Mo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function $o() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ao(t) {
  return this.select(t ? $o : Mo);
}
function To(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Po(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function So(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Eo(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function No(t, e, n) {
  return function() {
    var r = this.__on, i, a = Po(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function zo(t, e, n) {
  var r = So(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < a; ++i)
          if ((o = r[i]).type === l.type && o.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? No : Eo, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function Ir(t, e, n) {
  var r = Er(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Oo(t, e) {
  return function() {
    return Ir(this, t, e);
  };
}
function ko(t, e) {
  return function() {
    return Ir(this, t, e.apply(this, arguments));
  };
}
function Io(t, e) {
  return this.each((typeof e == "function" ? ko : Oo)(t, e));
}
function* Co() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Cr = [null];
function I(t, e) {
  this._groups = t, this._parents = e;
}
function Lt() {
  return new I([[document.documentElement]], Cr);
}
function Ro() {
  return this;
}
I.prototype = Lt.prototype = {
  constructor: I,
  select: oa,
  selectAll: fa,
  selectChild: pa,
  selectChildren: _a,
  filter: ma,
  data: Aa,
  enter: wa,
  exit: Pa,
  join: Sa,
  merge: Ea,
  selection: Ro,
  order: Na,
  sort: za,
  call: ka,
  nodes: Ia,
  node: Ca,
  size: Ra,
  empty: Fa,
  each: Da,
  attr: Ua,
  style: Za,
  property: ja,
  classed: ro,
  text: so,
  html: lo,
  raise: po,
  lower: yo,
  append: _o,
  insert: wo,
  remove: xo,
  clone: Ao,
  datum: To,
  on: zo,
  dispatch: Io,
  [Symbol.iterator]: Co
};
function P(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Cr);
}
function Fo(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function ce(t, e) {
  if (t = Fo(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Do = { passive: !1 }, Ot = { capture: !0, passive: !1 };
function ke(t) {
  t.stopImmediatePropagation();
}
function vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Lo(t) {
  var e = t.document.documentElement, n = P(t).on("dragstart.drag", vt, Ot);
  "onselectstart" in e ? n.on("selectstart.drag", vt, Ot) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Ho(t, e) {
  var n = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  e && (r.on("click.drag", vt, Ot), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ut = (t) => () => t;
function Xe(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
Xe.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function qo(t) {
  return !t.ctrlKey && !t.button;
}
function Bo() {
  return this.parentNode;
}
function Xo(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function Go() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Uo() {
  var t = qo, e = Bo, n = Xo, r = Go, i = {}, a = un("start", "drag", "end"), o = 0, s, c, u, l, f = 0;
  function h(b) {
    b.on("mousedown.drag", p).filter(r).on("touchstart.drag", v).on("touchmove.drag", g, Do).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(b, m) {
    if (!(l || !t.call(this, b, m))) {
      var T = $(this, e.call(this, b, m), b, m, "mouse");
      T && (P(b.view).on("mousemove.drag", d, Ot).on("mouseup.drag", _, Ot), Lo(b.view), ke(b), u = !1, s = b.clientX, c = b.clientY, T("start", b));
    }
  }
  function d(b) {
    if (vt(b), !u) {
      var m = b.clientX - s, T = b.clientY - c;
      u = m * m + T * T > f;
    }
    i.mouse("drag", b);
  }
  function _(b) {
    P(b.view).on("mousemove.drag mouseup.drag", null), Ho(b.view, u), vt(b), i.mouse("end", b);
  }
  function v(b, m) {
    if (t.call(this, b, m)) {
      var T = b.changedTouches, S = e.call(this, b, m), E = T.length, B, V;
      for (B = 0; B < E; ++B)
        (V = $(this, S, b, m, T[B].identifier, T[B])) && (ke(b), V("start", b, T[B]));
    }
  }
  function g(b) {
    var m = b.changedTouches, T = m.length, S, E;
    for (S = 0; S < T; ++S)
      (E = i[m[S].identifier]) && (vt(b), E("drag", b, m[S]));
  }
  function x(b) {
    var m = b.changedTouches, T = m.length, S, E;
    for (l && clearTimeout(l), l = setTimeout(function() {
      l = null;
    }, 500), S = 0; S < T; ++S)
      (E = i[m[S].identifier]) && (ke(b), E("end", b, m[S]));
  }
  function $(b, m, T, S, E, B) {
    var V = a.copy(), w = ce(B || T, m), X, N, F;
    if ((F = n.call(b, new Xe("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: E,
      active: o,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), S)) != null)
      return X = F.x - w[0] || 0, N = F.y - w[1] || 0, function Xt(rt, at, mt) {
        var C = w, Oe;
        switch (rt) {
          case "start":
            i[E] = Xt, Oe = o++;
            break;
          case "end":
            delete i[E], --o;
          // falls through
          case "drag":
            w = ce(mt || at, m), Oe = o;
            break;
        }
        V.call(
          rt,
          b,
          new Xe(rt, {
            sourceEvent: at,
            subject: F,
            target: h,
            identifier: E,
            active: Oe,
            x: w[0] + X,
            y: w[1] + N,
            dx: w[0] - C[0],
            dy: w[1] - C[1],
            dispatch: V
          }),
          S
        );
      };
  }
  return h.filter = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Ut(!!b), h) : t;
  }, h.container = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Ut(b), h) : e;
  }, h.subject = function(b) {
    return arguments.length ? (n = typeof b == "function" ? b : Ut(b), h) : n;
  }, h.touchable = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Ut(!!b), h) : r;
  }, h.on = function() {
    var b = a.on.apply(a, arguments);
    return b === a ? h : b;
  }, h.clickDistance = function(b) {
    return arguments.length ? (f = (b = +b) * b, h) : Math.sqrt(f);
  }, h;
}
function hn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Rr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Ht() {
}
var kt = 0.7, ue = 1 / kt, xt = "\\s*([+-]?\\d+)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Yo = /^#([0-9a-f]{3,8})$/, Ko = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), Vo = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), Zo = new RegExp(`^rgba\\(${xt},${xt},${xt},${It}\\)$`), Wo = new RegExp(`^rgba\\(${G},${G},${G},${It}\\)$`), Jo = new RegExp(`^hsl\\(${It},${G},${G}\\)$`), Qo = new RegExp(`^hsla\\(${It},${G},${G},${It}\\)$`), Nn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
hn(Ht, ht, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: zn,
  // Deprecated! Use color.formatHex.
  formatHex: zn,
  formatHex8: jo,
  formatHsl: ts,
  formatRgb: On,
  toString: On
});
function zn() {
  return this.rgb().formatHex();
}
function jo() {
  return this.rgb().formatHex8();
}
function ts() {
  return Fr(this).formatHsl();
}
function On() {
  return this.rgb().formatRgb();
}
function ht(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Yo.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? kn(e) : n === 3 ? new k(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Yt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Yt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Ko.exec(t)) ? new k(e[1], e[2], e[3], 1) : (e = Vo.exec(t)) ? new k(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Zo.exec(t)) ? Yt(e[1], e[2], e[3], e[4]) : (e = Wo.exec(t)) ? Yt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Jo.exec(t)) ? Rn(e[1], e[2] / 100, e[3] / 100, 1) : (e = Qo.exec(t)) ? Rn(e[1], e[2] / 100, e[3] / 100, e[4]) : Nn.hasOwnProperty(t) ? kn(Nn[t]) : t === "transparent" ? new k(NaN, NaN, NaN, 0) : null;
}
function kn(t) {
  return new k(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Yt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new k(t, e, n, r);
}
function es(t) {
  return t instanceof Ht || (t = ht(t)), t ? (t = t.rgb(), new k(t.r, t.g, t.b, t.opacity)) : new k();
}
function fe(t, e, n, r) {
  return arguments.length === 1 ? es(t) : new k(t, e, n, r ?? 1);
}
function k(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
hn(k, fe, Rr(Ht, {
  brighter(t) {
    return t = t == null ? ue : Math.pow(ue, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new k(lt(this.r), lt(this.g), lt(this.b), le(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: In,
  // Deprecated! Use color.formatHex.
  formatHex: In,
  formatHex8: ns,
  formatRgb: Cn,
  toString: Cn
}));
function In() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}`;
}
function ns() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Cn() {
  const t = le(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${lt(this.r)}, ${lt(this.g)}, ${lt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function le(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function lt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ut(t) {
  return t = lt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Rn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new L(t, e, n, r);
}
function Fr(t) {
  if (t instanceof L) return new L(t.h, t.s, t.l, t.opacity);
  if (t instanceof Ht || (t = ht(t)), !t) return new L();
  if (t instanceof L) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new L(o, s, c, t.opacity);
}
function rs(t, e, n, r) {
  return arguments.length === 1 ? Fr(t) : new L(t, e, n, r ?? 1);
}
function L(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
hn(L, rs, Rr(Ht, {
  brighter(t) {
    return t = t == null ? ue : Math.pow(ue, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new L(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new k(
      Ie(t >= 240 ? t - 240 : t + 120, i, r),
      Ie(t, i, r),
      Ie(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new L(Fn(this.h), Kt(this.s), Kt(this.l), le(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = le(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Fn(this.h)}, ${Kt(this.s) * 100}%, ${Kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Fn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ie(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const dn = (t) => () => t;
function is(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function as(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function os(t) {
  return (t = +t) == 1 ? Dr : function(e, n) {
    return n - e ? as(e, n, t) : dn(isNaN(e) ? n : e);
  };
}
function Dr(t, e) {
  var n = e - t;
  return n ? is(t, n) : dn(isNaN(t) ? e : t);
}
const it = function t(e) {
  var n = os(e);
  function r(i, a) {
    var o = n((i = fe(i)).r, (a = fe(a)).r), s = n(i.g, a.g), c = n(i.b, a.b), u = Dr(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ss(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function cs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function us(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = me(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function fs(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function D(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function ls(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = me(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Ge = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ce = new RegExp(Ge.source, "g");
function hs(t) {
  return function() {
    return t;
  };
}
function ds(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Lr(t, e) {
  var n = Ge.lastIndex = Ce.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Ge.exec(t)) && (i = Ce.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: D(r, i) })), n = Ce.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ds(c[0].x) : hs(e) : (e = c.length, function(u) {
    for (var l = 0, f; l < e; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function me(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? dn(e) : (n === "number" ? D : n === "string" ? (r = ht(e)) ? (e = r, it) : Lr : e instanceof ht ? it : e instanceof Date ? fs : cs(e) ? ss : Array.isArray(e) ? us : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? ls : D)(t, e);
}
function ps(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Dn = 180 / Math.PI, Ue = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Hr(t, e, n, r, i, a) {
  var o, s, c;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Dn,
    skewX: Math.atan(c) * Dn,
    scaleX: o,
    scaleY: s
  };
}
var Vt;
function bs(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ue : Hr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function gs(t) {
  return t == null || (Vt || (Vt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vt.setAttribute("transform", t), !(t = Vt.transform.baseVal.consolidate())) ? Ue : (t = t.matrix, Hr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function qr(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, l, f, h, p, d) {
    if (u !== f || l !== h) {
      var _ = p.push("translate(", null, e, null, n);
      d.push({ i: _ - 4, x: D(u, f) }, { i: _ - 2, x: D(l, h) });
    } else (f || h) && p.push("translate(" + f + e + h + n);
  }
  function o(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: D(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function s(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: D(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, p, d) {
    if (u !== f || l !== h) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: D(u, f) }, { i: _ - 2, x: D(l, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t(u), l = t(l), a(u.translateX, u.translateY, l.translateX, l.translateY, f, h), o(u.rotate, l.rotate, f, h), s(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(p) {
      for (var d = -1, _ = h.length, v; ++d < _; ) f[(v = h[d]).i] = v.x(p);
      return f.join("");
    };
  };
}
var ys = qr(bs, "px, ", "px)", "deg)"), _s = qr(gs, ", ", ")", ")");
function Zt(t, e) {
  e === void 0 && (e = t, t = me);
  for (var n = 0, r = e.length - 1, i = e[0], a = new Array(r < 0 ? 0 : r); n < r; ) a[n] = t(i, i = e[++n]);
  return function(o) {
    var s = Math.max(0, Math.min(r - 1, Math.floor(o *= r)));
    return a[s](o - s);
  };
}
var $t = 0, St = 0, Tt = 0, Br = 1e3, he, Et, de = 0, dt = 0, we = 0, Ct = typeof performance == "object" && performance.now ? performance : Date, Xr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function pn() {
  return dt || (Xr(ms), dt = Ct.now() + we);
}
function ms() {
  dt = 0;
}
function pe() {
  this._call = this._time = this._next = null;
}
pe.prototype = Gr.prototype = {
  constructor: pe,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? pn() : +n) + (e == null ? 0 : +e), !this._next && Et !== this && (Et ? Et._next = this : he = this, Et = this), this._call = t, this._time = n, Ye();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ye());
  }
};
function Gr(t, e, n) {
  var r = new pe();
  return r.restart(t, e, n), r;
}
function ws() {
  pn(), ++$t;
  for (var t = he, e; t; )
    (e = dt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --$t;
}
function Ln() {
  dt = (de = Ct.now()) + we, $t = St = 0;
  try {
    ws();
  } finally {
    $t = 0, xs(), dt = 0;
  }
}
function vs() {
  var t = Ct.now(), e = t - de;
  e > Br && (we -= e, de = t);
}
function xs() {
  for (var t, e = he, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : he = n);
  Et = t, Ye(r);
}
function Ye(t) {
  if (!$t) {
    St && (St = clearTimeout(St));
    var e = t - dt;
    e > 24 ? (t < 1 / 0 && (St = setTimeout(Ln, t - Ct.now() - we)), Tt && (Tt = clearInterval(Tt))) : (Tt || (de = Ct.now(), Tt = setInterval(vs, Br)), $t = 1, Xr(Ln));
  }
}
function Hn(t, e, n) {
  var r = new pe();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Ms = un("start", "end", "cancel", "interrupt"), $s = [], Ur = 0, qn = 1, Ke = 2, re = 3, Bn = 4, Ve = 5, ie = 6;
function ve(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  As(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ms,
    tween: $s,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ur
  });
}
function bn(t, e) {
  var n = H(t, e);
  if (n.state > Ur) throw new Error("too late; already scheduled");
  return n;
}
function K(t, e) {
  var n = H(t, e);
  if (n.state > re) throw new Error("too late; already running");
  return n;
}
function H(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function As(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Gr(a, 0, n.time);
  function a(u) {
    n.state = qn, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, f, h, p;
    if (n.state !== qn) return c();
    for (l in r)
      if (p = r[l], p.name === n.name) {
        if (p.state === re) return Hn(o);
        p.state === Bn ? (p.state = ie, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[l]) : +l < e && (p.state = ie, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[l]);
      }
    if (Hn(function() {
      n.state === re && (n.state = Bn, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ke, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ke) {
      for (n.state = re, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l)
        (p = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Ve, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    n.state === Ve && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = ie, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Ts(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Ke && r.state < Ve, r.state = ie, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Ps(t) {
  return this.each(function() {
    Ts(this, t);
  });
}
function Ss(t, e) {
  var n, r;
  return function() {
    var i = K(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Es(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = K(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function Ns(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = H(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Ss : Es)(n, t, e));
}
function gn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return H(i, r).value[e];
  };
}
function Yr(t, e) {
  var n;
  return (typeof e == "number" ? D : e instanceof ht ? it : (n = ht(e)) ? (e = n, it) : Lr)(t, e);
}
function zs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Os(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ks(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Is(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Cs(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Rs(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s)));
  };
}
function Fs(t, e) {
  var n = _e(t), r = n === "transform" ? _s : Yr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Rs : Cs)(n, r, gn(this, "attr." + t, e)) : e == null ? (n.local ? Os : zs)(n) : (n.local ? Is : ks)(n, r, e));
}
function Ds(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Ls(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Hs(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Ls(t, a)), n;
  }
  return i._value = e, i;
}
function qs(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Ds(t, a)), n;
  }
  return i._value = e, i;
}
function Bs(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = _e(t);
  return this.tween(n, (r.local ? Hs : qs)(r, e));
}
function Xs(t, e) {
  return function() {
    bn(this, t).delay = +e.apply(this, arguments);
  };
}
function Gs(t, e) {
  return e = +e, function() {
    bn(this, t).delay = e;
  };
}
function Us(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Xs : Gs)(e, t)) : H(this.node(), e).delay;
}
function Ys(t, e) {
  return function() {
    K(this, t).duration = +e.apply(this, arguments);
  };
}
function Ks(t, e) {
  return e = +e, function() {
    K(this, t).duration = e;
  };
}
function Vs(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ys : Ks)(e, t)) : H(this.node(), e).duration;
}
function Zs(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    K(this, t).ease = e;
  };
}
function Ws(t) {
  var e = this._id;
  return arguments.length ? this.each(Zs(e, t)) : H(this.node(), e).ease;
}
function Js(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    K(this, t).ease = n;
  };
}
function Qs(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Js(this._id, t));
}
function js(t) {
  typeof t != "function" && (t = Tr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && t.call(c, c.__data__, u, a) && s.push(c);
  return new Q(r, this._parents, this._name, this._id);
}
function tc(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var c = e[s], u = n[s], l = c.length, f = o[s] = new Array(l), h, p = 0; p < l; ++p)
      (h = c[p] || u[p]) && (f[p] = h);
  for (; s < r; ++s)
    o[s] = e[s];
  return new Q(o, this._parents, this._name, this._id);
}
function ec(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function nc(t, e, n) {
  var r, i, a = ec(e) ? bn : K;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function rc(t, e) {
  var n = this._id;
  return arguments.length < 2 ? H(this.node(), n).on.on(t) : this.each(nc(n, t, e));
}
function ic(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function ac() {
  return this.on("end.remove", ic(this._id));
}
function oc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = fn(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], c = s.length, u = a[o] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = s[h]) && (f = t.call(l, l.__data__, h, s)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, ve(u[h], e, n, h, u, H(l, n)));
  return new Q(a, this._parents, e, n);
}
function sc(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ar(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, f = 0; f < u; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), p, d = H(l, n), _ = 0, v = h.length; _ < v; ++_)
          (p = h[_]) && ve(p, e, n, _, h, d);
        a.push(h), o.push(l);
      }
  return new Q(a, o, e, n);
}
var cc = Lt.prototype.constructor;
function uc() {
  return new cc(this._groups, this._parents);
}
function fc(t, e) {
  var n, r, i;
  return function() {
    var a = Mt(this, t), o = (this.style.removeProperty(t), Mt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Kr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function lc(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Mt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function hc(t, e, n) {
  var r, i, a;
  return function() {
    var o = Mt(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Mt(this, t))), o === c ? null : o === r && c === i ? a : (i = c, a = e(r = o, s));
  };
}
function dc(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var c = K(this, t), u = c.on, l = c.value[a] == null ? s || (s = Kr(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function pc(t, e, n) {
  var r = (t += "") == "transform" ? ys : Yr;
  return e == null ? this.styleTween(t, fc(t, r)).on("end.style." + t, Kr(t)) : typeof e == "function" ? this.styleTween(t, hc(t, r, gn(this, "style." + t, e))).each(dc(this._id, t)) : this.styleTween(t, lc(t, r, e), n).on("end.style." + t, null);
}
function bc(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function gc(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && bc(t, o, n)), r;
  }
  return a._value = e, a;
}
function yc(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, gc(t, e, n ?? ""));
}
function _c(t) {
  return function() {
    this.textContent = t;
  };
}
function mc(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function wc(t) {
  return this.tween("text", typeof t == "function" ? mc(gn(this, "text", t)) : _c(t == null ? "" : t + ""));
}
function vc(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function xc(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && vc(i)), e;
  }
  return r._value = t, r;
}
function Mc(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, xc(t));
}
function $c() {
  for (var t = this._name, e = this._id, n = Vr(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var l = H(c, e);
        ve(c, t, n, u, o, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new Q(r, this._parents, t, n);
}
function Ac() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var u = K(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && a();
  });
}
var Tc = 0;
function Q(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Vr() {
  return ++Tc;
}
var Z = Lt.prototype;
Q.prototype = {
  constructor: Q,
  select: oc,
  selectAll: sc,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: js,
  merge: tc,
  selection: uc,
  transition: $c,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: rc,
  attr: Fs,
  attrTween: Bs,
  style: pc,
  styleTween: yc,
  text: wc,
  textTween: Mc,
  remove: ac,
  tween: Ns,
  delay: Us,
  duration: Vs,
  ease: Ws,
  easeVarying: Qs,
  end: Ac,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Pc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Sc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pc
};
function Ec(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Nc(t) {
  var e, n;
  t instanceof Q ? (e = t._id, t = t._name) : (e = Vr(), (n = Sc).time = pn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && ve(c, t, e, u, o, n || Ec(c, e));
  return new Q(r, this._parents, t, e);
}
Lt.prototype.interrupt = Ps;
Lt.prototype.transition = Nc;
const Ze = Math.PI, We = 2 * Ze, ot = 1e-6, zc = We - ot;
function Zr(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Oc(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Zr;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Wr {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Zr : Oc(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = r - e, u = i - n, l = o - e, f = s - n, h = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > ot) if (!(Math.abs(f * c - u * l) > ot) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let p = r - o, d = i - s, _ = c * c + u * u, v = p * p + d * d, g = Math.sqrt(_), x = Math.sqrt(h), $ = a * Math.tan((Ze - Math.acos((_ + h - v) / (2 * g * x))) / 2), b = $ / x, m = $ / g;
      Math.abs(b - 1) > ot && this._append`L${e + b * l},${n + b * f}`, this._append`A${a},${a},0,0,${+(f * p > l * d)},${this._x1 = e + m * c},${this._y1 = n + m * u}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), c = r * Math.sin(i), u = e + s, l = n + c, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > ot || Math.abs(this._y1 - l) > ot) && this._append`L${u},${l}`, r && (h < 0 && (h = h % We + We), h > zc ? this._append`A${r},${r},0,1,${f},${e - s},${n - c}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = l}` : h > ot && this._append`A${r},${r},0,${+(h >= Ze)},${f},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new Wr();
}
q.prototype = Wr.prototype;
function kc(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function be(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function At(t) {
  return t = be(Math.abs(t)), t ? t[1] : NaN;
}
function Ic(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Cc(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Rc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ge(t) {
  if (!(e = Rc.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new yn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
ge.prototype = yn.prototype;
function yn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
yn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Fc(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Jr;
function Dc(t, e) {
  var n = be(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (Jr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + be(t, Math.max(0, e + a - 1))[0];
}
function Xn(t, e) {
  var n = be(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Gn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: kc,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Xn(t * 100, e),
  r: Xn,
  s: Dc,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Un(t) {
  return t;
}
var Yn = Array.prototype.map, Kn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Lc(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Un : Ic(Yn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Un : Cc(Yn.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = ge(f);
    var h = f.fill, p = f.align, d = f.sign, _ = f.symbol, v = f.zero, g = f.width, x = f.comma, $ = f.precision, b = f.trim, m = f.type;
    m === "n" ? (x = !0, m = "g") : Gn[m] || ($ === void 0 && ($ = 12), b = !0, m = "g"), (v || h === "0" && p === "=") && (v = !0, h = "0", p = "=");
    var T = _ === "$" ? n : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", S = _ === "$" ? r : /[%p]/.test(m) ? o : "", E = Gn[m], B = /[defgprs%]/.test(m);
    $ = $ === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function V(w) {
      var X = T, N = S, F, Xt, rt;
      if (m === "c")
        N = E(w) + N, w = "";
      else {
        w = +w;
        var at = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? c : E(Math.abs(w), $), b && (w = Fc(w)), at && +w == 0 && d !== "+" && (at = !1), X = (at ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + X, N = (m === "s" ? Kn[8 + Jr / 3] : "") + N + (at && d === "(" ? ")" : ""), B) {
          for (F = -1, Xt = w.length; ++F < Xt; )
            if (rt = w.charCodeAt(F), 48 > rt || rt > 57) {
              N = (rt === 46 ? i + w.slice(F + 1) : w.slice(F)) + N, w = w.slice(0, F);
              break;
            }
        }
      }
      x && !v && (w = e(w, 1 / 0));
      var mt = X.length + w.length + N.length, C = mt < g ? new Array(g - mt + 1).join(h) : "";
      switch (x && v && (w = e(C + w, C.length ? g - N.length : 1 / 0), C = ""), p) {
        case "<":
          w = X + w + N + C;
          break;
        case "=":
          w = X + C + w + N;
          break;
        case "^":
          w = C.slice(0, mt = C.length >> 1) + X + w + N + C.slice(mt);
          break;
        default:
          w = C + X + w + N;
          break;
      }
      return a(w);
    }
    return V.toString = function() {
      return f + "";
    }, V;
  }
  function l(f, h) {
    var p = u((f = ge(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(At(h) / 3))) * 3, _ = Math.pow(10, -d), v = Kn[8 + d / 3];
    return function(g) {
      return p(_ * g) + v;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var Wt, xe, Qr;
Hc({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Hc(t) {
  return Wt = Lc(t), xe = Wt.format, Qr = Wt.formatPrefix, Wt;
}
function qc(t) {
  return Math.max(0, -At(Math.abs(t)));
}
function Bc(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(At(e) / 3))) * 3 - At(Math.abs(t)));
}
function Xc(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, At(e) - At(t)) + 1;
}
function Gc(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function Uc(t) {
  return function() {
    return t;
  };
}
function Yc(t) {
  return +t;
}
var Vn = [0, 1];
function wt(t) {
  return t;
}
function Je(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Uc(isNaN(e) ? NaN : 0.5);
}
function Kc(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Vc(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = Je(i, r), a = n(o, a)) : (r = Je(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Zc(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = Je(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var c = Ki(t, s, 1, r) - 1;
    return a[c](i[c](s));
  };
}
function Wc(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Jc() {
  var t = Vn, e = Vn, n = me, r, i, a, o = wt, s, c, u;
  function l() {
    var h = Math.min(t.length, e.length);
    return o !== wt && (o = Kc(t[0], t[h - 1])), s = h > 2 ? Zc : Vc, c = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (c || (c = s(t.map(r), e, n)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((u || (u = s(e, t.map(r), D)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Yc), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), l()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = ps, l();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : wt, l()) : o !== wt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, l()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, p) {
    return r = h, i = p, l();
  };
}
function Qc() {
  return Jc()(wt, wt);
}
function jc(t, e, n, r) {
  var i = Qi(t, e, n), a;
  switch (r = ge(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = Bc(i, o)) && (r.precision = a), Qr(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Xc(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = qc(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return xe(r);
}
function tu(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Ji(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return jc(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = qe(o, s, n), u === c)
        return r[i] = o, r[a] = s, e(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function U() {
  var t = Qc();
  return t.copy = function() {
    return Wc(t, U());
  }, Gc.apply(t, arguments), tu(t);
}
var Jt = fe(), eu = Math.PI / 3, nu = Math.PI * 2 / 3;
function ru(t) {
  var e;
  return t = (0.5 - t) * Math.PI, Jt.r = 255 * (e = Math.sin(t)) * e, Jt.g = 255 * (e = Math.sin(t + eu)) * e, Jt.b = 255 * (e = Math.sin(t + nu)) * e, Jt + "";
}
function Nt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Nt.prototype = {
  constructor: Nt,
  scale: function(t) {
    return t === 1 ? this : new Nt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Nt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Nt.prototype;
var jr = typeof global == "object" && global && global.Object === Object && global, iu = typeof self == "object" && self && self.Object === Object && self, tt = jr || iu || Function("return this")(), Y = tt.Symbol, ti = Object.prototype, au = ti.hasOwnProperty, ou = ti.toString, Pt = Y ? Y.toStringTag : void 0;
function su(t) {
  var e = au.call(t, Pt), n = t[Pt];
  try {
    t[Pt] = void 0;
    var r = !0;
  } catch {
  }
  var i = ou.call(t);
  return r && (e ? t[Pt] = n : delete t[Pt]), i;
}
var cu = Object.prototype, uu = cu.toString;
function fu(t) {
  return uu.call(t);
}
var lu = "[object Null]", hu = "[object Undefined]", Zn = Y ? Y.toStringTag : void 0;
function gt(t) {
  return t == null ? t === void 0 ? hu : lu : Zn && Zn in Object(t) ? su(t) : fu(t);
}
function pt(t) {
  return t != null && typeof t == "object";
}
var du = "[object Symbol]";
function Me(t) {
  return typeof t == "symbol" || pt(t) && gt(t) == du;
}
function $e(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var R = Array.isArray, Wn = Y ? Y.prototype : void 0, Jn = Wn ? Wn.toString : void 0;
function ei(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return $e(t, ei) + "";
  if (Me(t))
    return Jn ? Jn.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var pu = /\s/;
function bu(t) {
  for (var e = t.length; e-- && pu.test(t.charAt(e)); )
    ;
  return e;
}
var gu = /^\s+/;
function yu(t) {
  return t && t.slice(0, bu(t) + 1).replace(gu, "");
}
function j(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Qn = NaN, _u = /^[-+]0x[0-9a-f]+$/i, mu = /^0b[01]+$/i, wu = /^0o[0-7]+$/i, vu = parseInt;
function xu(t) {
  if (typeof t == "number")
    return t;
  if (Me(t))
    return Qn;
  if (j(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = yu(t);
  var n = mu.test(t);
  return n || wu.test(t) ? vu(t.slice(2), n ? 2 : 8) : _u.test(t) ? Qn : +t;
}
var Mu = 1 / 0, $u = 17976931348623157e292;
function Re(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = xu(t), t === Mu || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * $u;
  }
  return t === t ? t : 0;
}
function ni(t) {
  return t;
}
var Au = "[object AsyncFunction]", Tu = "[object Function]", Pu = "[object GeneratorFunction]", Su = "[object Proxy]";
function ri(t) {
  if (!j(t))
    return !1;
  var e = gt(t);
  return e == Tu || e == Pu || e == Au || e == Su;
}
var Fe = tt["__core-js_shared__"], jn = function() {
  var t = /[^.]+$/.exec(Fe && Fe.keys && Fe.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Eu(t) {
  return !!jn && jn in t;
}
var Nu = Function.prototype, zu = Nu.toString;
function yt(t) {
  if (t != null) {
    try {
      return zu.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ou = /[\\^$.*+?()[\]{}|]/g, ku = /^\[object .+?Constructor\]$/, Iu = Function.prototype, Cu = Object.prototype, Ru = Iu.toString, Fu = Cu.hasOwnProperty, Du = RegExp(
  "^" + Ru.call(Fu).replace(Ou, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lu(t) {
  if (!j(t) || Eu(t))
    return !1;
  var e = ri(t) ? Du : ku;
  return e.test(yt(t));
}
function Hu(t, e) {
  return t == null ? void 0 : t[e];
}
function _t(t, e) {
  var n = Hu(t, e);
  return Lu(n) ? n : void 0;
}
var Qe = _t(tt, "WeakMap"), tr = function() {
  try {
    var t = _t(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function qu(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Bu = 9007199254740991, Xu = /^(?:0|[1-9]\d*)$/;
function Ae(t, e) {
  var n = typeof t;
  return e = e ?? Bu, !!e && (n == "number" || n != "symbol" && Xu.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Gu(t, e, n) {
  e == "__proto__" && tr ? tr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Te(t, e) {
  return t === e || t !== t && e !== e;
}
var Uu = Object.prototype, Yu = Uu.hasOwnProperty;
function Ku(t, e, n) {
  var r = t[e];
  (!(Yu.call(t, e) && Te(r, n)) || n === void 0 && !(e in t)) && Gu(t, e, n);
}
var Vu = 9007199254740991;
function _n(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Vu;
}
function qt(t) {
  return t != null && _n(t.length) && !ri(t);
}
function Zu(t, e, n) {
  if (!j(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? qt(n) && Ae(e, n.length) : r == "string" && e in n) ? Te(n[e], t) : !1;
}
var Wu = Object.prototype;
function ii(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Wu;
  return t === n;
}
function Ju(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Qu = "[object Arguments]";
function er(t) {
  return pt(t) && gt(t) == Qu;
}
var ai = Object.prototype, ju = ai.hasOwnProperty, tf = ai.propertyIsEnumerable, mn = er(/* @__PURE__ */ function() {
  return arguments;
}()) ? er : function(t) {
  return pt(t) && ju.call(t, "callee") && !tf.call(t, "callee");
};
function ef() {
  return !1;
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, nr = oi && typeof module == "object" && module && !module.nodeType && module, nf = nr && nr.exports === oi, rr = nf ? tt.Buffer : void 0, rf = rr ? rr.isBuffer : void 0, je = rf || ef, af = "[object Arguments]", of = "[object Array]", sf = "[object Boolean]", cf = "[object Date]", uf = "[object Error]", ff = "[object Function]", lf = "[object Map]", hf = "[object Number]", df = "[object Object]", pf = "[object RegExp]", bf = "[object Set]", gf = "[object String]", yf = "[object WeakMap]", _f = "[object ArrayBuffer]", mf = "[object DataView]", wf = "[object Float32Array]", vf = "[object Float64Array]", xf = "[object Int8Array]", Mf = "[object Int16Array]", $f = "[object Int32Array]", Af = "[object Uint8Array]", Tf = "[object Uint8ClampedArray]", Pf = "[object Uint16Array]", Sf = "[object Uint32Array]", M = {};
M[wf] = M[vf] = M[xf] = M[Mf] = M[$f] = M[Af] = M[Tf] = M[Pf] = M[Sf] = !0;
M[af] = M[of] = M[_f] = M[sf] = M[mf] = M[cf] = M[uf] = M[ff] = M[lf] = M[hf] = M[df] = M[pf] = M[bf] = M[gf] = M[yf] = !1;
function Ef(t) {
  return pt(t) && _n(t.length) && !!M[gt(t)];
}
function Nf(t) {
  return function(e) {
    return t(e);
  };
}
var si = typeof exports == "object" && exports && !exports.nodeType && exports, zt = si && typeof module == "object" && module && !module.nodeType && module, zf = zt && zt.exports === si, De = zf && jr.process, ir = function() {
  try {
    var t = zt && zt.require && zt.require("util").types;
    return t || De && De.binding && De.binding("util");
  } catch {
  }
}(), ar = ir && ir.isTypedArray, ci = ar ? Nf(ar) : Ef, Of = Object.prototype, kf = Of.hasOwnProperty;
function ui(t, e) {
  var n = R(t), r = !n && mn(t), i = !n && !r && je(t), a = !n && !r && !i && ci(t), o = n || r || i || a, s = o ? Ju(t.length, String) : [], c = s.length;
  for (var u in t)
    (e || kf.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ae(u, c))) && s.push(u);
  return s;
}
function fi(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var If = fi(Object.keys, Object), Cf = Object.prototype, Rf = Cf.hasOwnProperty;
function Ff(t) {
  if (!ii(t))
    return If(t);
  var e = [];
  for (var n in Object(t))
    Rf.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Pe(t) {
  return qt(t) ? ui(t) : Ff(t);
}
function Df(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Lf = Object.prototype, Hf = Lf.hasOwnProperty;
function qf(t) {
  if (!j(t))
    return Df(t);
  var e = ii(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Hf.call(t, r)) || n.push(r);
  return n;
}
function Bf(t) {
  return qt(t) ? ui(t, !0) : qf(t);
}
var Xf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gf = /^\w*$/;
function wn(t, e) {
  if (R(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Me(t) ? !0 : Gf.test(t) || !Xf.test(t) || e != null && t in Object(e);
}
var Rt = _t(Object, "create");
function Uf() {
  this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
}
function Yf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Kf = "__lodash_hash_undefined__", Vf = Object.prototype, Zf = Vf.hasOwnProperty;
function Wf(t) {
  var e = this.__data__;
  if (Rt) {
    var n = e[t];
    return n === Kf ? void 0 : n;
  }
  return Zf.call(e, t) ? e[t] : void 0;
}
var Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function jf(t) {
  var e = this.__data__;
  return Rt ? e[t] !== void 0 : Qf.call(e, t);
}
var tl = "__lodash_hash_undefined__";
function el(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Rt && e === void 0 ? tl : e, this;
}
function bt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = Uf;
bt.prototype.delete = Yf;
bt.prototype.get = Wf;
bt.prototype.has = jf;
bt.prototype.set = el;
function nl() {
  this.__data__ = [], this.size = 0;
}
function Se(t, e) {
  for (var n = t.length; n--; )
    if (Te(t[n][0], e))
      return n;
  return -1;
}
var rl = Array.prototype, il = rl.splice;
function al(t) {
  var e = this.__data__, n = Se(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : il.call(e, n, 1), --this.size, !0;
}
function ol(t) {
  var e = this.__data__, n = Se(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function sl(t) {
  return Se(this.__data__, t) > -1;
}
function cl(t, e) {
  var n = this.__data__, r = Se(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function et(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = nl;
et.prototype.delete = al;
et.prototype.get = ol;
et.prototype.has = sl;
et.prototype.set = cl;
var Ft = _t(tt, "Map");
function ul() {
  this.size = 0, this.__data__ = {
    hash: new bt(),
    map: new (Ft || et)(),
    string: new bt()
  };
}
function fl(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ee(t, e) {
  var n = t.__data__;
  return fl(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function ll(t) {
  var e = Ee(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function hl(t) {
  return Ee(this, t).get(t);
}
function dl(t) {
  return Ee(this, t).has(t);
}
function pl(t, e) {
  var n = Ee(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function nt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
nt.prototype.clear = ul;
nt.prototype.delete = ll;
nt.prototype.get = hl;
nt.prototype.has = dl;
nt.prototype.set = pl;
var bl = "Expected a function";
function vn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(bl);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (vn.Cache || nt)(), n;
}
vn.Cache = nt;
var gl = 500;
function yl(t) {
  var e = vn(t, function(r) {
    return n.size === gl && n.clear(), r;
  }), n = e.cache;
  return e;
}
var _l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ml = /\\(\\)?/g, wl = yl(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(_l, function(n, r, i, a) {
    e.push(i ? a.replace(ml, "$1") : r || n);
  }), e;
});
function Ne(t) {
  return t == null ? "" : ei(t);
}
function ze(t, e) {
  return R(t) ? t : wn(t, e) ? [t] : wl(Ne(t));
}
function Bt(t) {
  if (typeof t == "string" || Me(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function xn(t, e) {
  e = ze(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Bt(e[n++])];
  return n && n == r ? t : void 0;
}
function vl(t, e, n) {
  var r = t == null ? void 0 : xn(t, e);
  return r === void 0 ? n : r;
}
function Mn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var or = Y ? Y.isConcatSpreadable : void 0;
function xl(t) {
  return R(t) || mn(t) || !!(or && t && t[or]);
}
function Ml(t, e, n, r, i) {
  var a = -1, o = t.length;
  for (n || (n = xl), i || (i = []); ++a < o; ) {
    var s = t[a];
    n(s) ? Mn(i, s) : i[i.length] = s;
  }
  return i;
}
function $l(t) {
  var e = t == null ? 0 : t.length;
  return e ? Ml(t) : [];
}
var Al = fi(Object.getPrototypeOf, Object);
function Tl(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + e];
  return a;
}
function Pl(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, Tl(t, e, n);
}
var Sl = "\\ud800-\\udfff", El = "\\u0300-\\u036f", Nl = "\\ufe20-\\ufe2f", zl = "\\u20d0-\\u20ff", Ol = El + Nl + zl, kl = "\\ufe0e\\ufe0f", Il = "\\u200d", Cl = RegExp("[" + Il + Sl + Ol + kl + "]");
function li(t) {
  return Cl.test(t);
}
function Rl(t) {
  return t.split("");
}
var hi = "\\ud800-\\udfff", Fl = "\\u0300-\\u036f", Dl = "\\ufe20-\\ufe2f", Ll = "\\u20d0-\\u20ff", Hl = Fl + Dl + Ll, ql = "\\ufe0e\\ufe0f", Bl = "[" + hi + "]", tn = "[" + Hl + "]", en = "\\ud83c[\\udffb-\\udfff]", Xl = "(?:" + tn + "|" + en + ")", di = "[^" + hi + "]", pi = "(?:\\ud83c[\\udde6-\\uddff]){2}", bi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gl = "\\u200d", gi = Xl + "?", yi = "[" + ql + "]?", Ul = "(?:" + Gl + "(?:" + [di, pi, bi].join("|") + ")" + yi + gi + ")*", Yl = yi + gi + Ul, Kl = "(?:" + [di + tn + "?", tn, pi, bi, Bl].join("|") + ")", Vl = RegExp(en + "(?=" + en + ")|" + Kl + Yl, "g");
function Zl(t) {
  return t.match(Vl) || [];
}
function Wl(t) {
  return li(t) ? Zl(t) : Rl(t);
}
function Jl(t) {
  return function(e) {
    e = Ne(e);
    var n = li(e) ? Wl(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Pl(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var Ql = Jl("toUpperCase");
function jl(t) {
  return Ql(Ne(t).toLowerCase());
}
function th() {
  this.__data__ = new et(), this.size = 0;
}
function eh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function nh(t) {
  return this.__data__.get(t);
}
function rh(t) {
  return this.__data__.has(t);
}
var ih = 200;
function ah(t, e) {
  var n = this.__data__;
  if (n instanceof et) {
    var r = n.__data__;
    if (!Ft || r.length < ih - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new nt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function J(t) {
  var e = this.__data__ = new et(t);
  this.size = e.size;
}
J.prototype.clear = th;
J.prototype.delete = eh;
J.prototype.get = nh;
J.prototype.has = rh;
J.prototype.set = ah;
function oh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++n < r; ) {
    var o = t[n];
    e(o, n, t) && (a[i++] = o);
  }
  return a;
}
function _i() {
  return [];
}
var sh = Object.prototype, ch = sh.propertyIsEnumerable, sr = Object.getOwnPropertySymbols, mi = sr ? function(t) {
  return t == null ? [] : (t = Object(t), oh(sr(t), function(e) {
    return ch.call(t, e);
  }));
} : _i, uh = Object.getOwnPropertySymbols, fh = uh ? function(t) {
  for (var e = []; t; )
    Mn(e, mi(t)), t = Al(t);
  return e;
} : _i;
function wi(t, e, n) {
  var r = e(t);
  return R(t) ? r : Mn(r, n(t));
}
function cr(t) {
  return wi(t, Pe, mi);
}
function lh(t) {
  return wi(t, Bf, fh);
}
var nn = _t(tt, "DataView"), rn = _t(tt, "Promise"), an = _t(tt, "Set"), ur = "[object Map]", hh = "[object Object]", fr = "[object Promise]", lr = "[object Set]", hr = "[object WeakMap]", dr = "[object DataView]", dh = yt(nn), ph = yt(Ft), bh = yt(rn), gh = yt(an), yh = yt(Qe), W = gt;
(nn && W(new nn(new ArrayBuffer(1))) != dr || Ft && W(new Ft()) != ur || rn && W(rn.resolve()) != fr || an && W(new an()) != lr || Qe && W(new Qe()) != hr) && (W = function(t) {
  var e = gt(t), n = e == hh ? t.constructor : void 0, r = n ? yt(n) : "";
  if (r)
    switch (r) {
      case dh:
        return dr;
      case ph:
        return ur;
      case bh:
        return fr;
      case gh:
        return lr;
      case yh:
        return hr;
    }
  return e;
});
var pr = tt.Uint8Array, _h = "__lodash_hash_undefined__";
function mh(t) {
  return this.__data__.set(t, _h), this;
}
function wh(t) {
  return this.__data__.has(t);
}
function ye(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new nt(); ++e < n; )
    this.add(t[e]);
}
ye.prototype.add = ye.prototype.push = mh;
ye.prototype.has = wh;
function vh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function xh(t, e) {
  return t.has(e);
}
var Mh = 1, $h = 2;
function vi(t, e, n, r, i, a) {
  var o = n & Mh, s = t.length, c = e.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(t), l = a.get(e);
  if (u && l)
    return u == e && l == t;
  var f = -1, h = !0, p = n & $h ? new ye() : void 0;
  for (a.set(t, e), a.set(e, t); ++f < s; ) {
    var d = t[f], _ = e[f];
    if (r)
      var v = o ? r(_, d, f, e, t, a) : r(d, _, f, t, e, a);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!vh(e, function(g, x) {
        if (!xh(p, x) && (d === g || i(d, g, n, r, a)))
          return p.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), h;
}
function xi(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Ah(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Th = 1, Ph = 2, Sh = "[object Boolean]", Eh = "[object Date]", Nh = "[object Error]", zh = "[object Map]", Oh = "[object Number]", kh = "[object RegExp]", Ih = "[object Set]", Ch = "[object String]", Rh = "[object Symbol]", Fh = "[object ArrayBuffer]", Dh = "[object DataView]", br = Y ? Y.prototype : void 0, Le = br ? br.valueOf : void 0;
function Lh(t, e, n, r, i, a, o) {
  switch (n) {
    case Dh:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Fh:
      return !(t.byteLength != e.byteLength || !a(new pr(t), new pr(e)));
    case Sh:
    case Eh:
    case Oh:
      return Te(+t, +e);
    case Nh:
      return t.name == e.name && t.message == e.message;
    case kh:
    case Ch:
      return t == e + "";
    case zh:
      var s = xi;
    case Ih:
      var c = r & Th;
      if (s || (s = Ah), t.size != e.size && !c)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      r |= Ph, o.set(t, e);
      var l = vi(s(t), s(e), r, i, a, o);
      return o.delete(t), l;
    case Rh:
      if (Le)
        return Le.call(t) == Le.call(e);
  }
  return !1;
}
var Hh = 1, qh = Object.prototype, Bh = qh.hasOwnProperty;
function Xh(t, e, n, r, i, a) {
  var o = n & Hh, s = cr(t), c = s.length, u = cr(e), l = u.length;
  if (c != l && !o)
    return !1;
  for (var f = c; f--; ) {
    var h = s[f];
    if (!(o ? h in e : Bh.call(e, h)))
      return !1;
  }
  var p = a.get(t), d = a.get(e);
  if (p && d)
    return p == e && d == t;
  var _ = !0;
  a.set(t, e), a.set(e, t);
  for (var v = o; ++f < c; ) {
    h = s[f];
    var g = t[h], x = e[h];
    if (r)
      var $ = o ? r(x, g, h, e, t, a) : r(g, x, h, t, e, a);
    if (!($ === void 0 ? g === x || i(g, x, n, r, a) : $)) {
      _ = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (_ && !v) {
    var b = t.constructor, m = e.constructor;
    b != m && "constructor" in t && "constructor" in e && !(typeof b == "function" && b instanceof b && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return a.delete(t), a.delete(e), _;
}
var Gh = 1, gr = "[object Arguments]", yr = "[object Array]", Qt = "[object Object]", Uh = Object.prototype, _r = Uh.hasOwnProperty;
function Yh(t, e, n, r, i, a) {
  var o = R(t), s = R(e), c = o ? yr : W(t), u = s ? yr : W(e);
  c = c == gr ? Qt : c, u = u == gr ? Qt : u;
  var l = c == Qt, f = u == Qt, h = c == u;
  if (h && je(t)) {
    if (!je(e))
      return !1;
    o = !0, l = !1;
  }
  if (h && !l)
    return a || (a = new J()), o || ci(t) ? vi(t, e, n, r, i, a) : Lh(t, e, c, n, r, i, a);
  if (!(n & Gh)) {
    var p = l && _r.call(t, "__wrapped__"), d = f && _r.call(e, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, v = d ? e.value() : e;
      return a || (a = new J()), i(_, v, n, r, a);
    }
  }
  return h ? (a || (a = new J()), Xh(t, e, n, r, i, a)) : !1;
}
function $n(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !pt(t) && !pt(e) ? t !== t && e !== e : Yh(t, e, n, r, $n, i);
}
var Kh = 1, Vh = 2;
function Zh(t, e, n, r) {
  var i = n.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = n[i];
    var s = o[0], c = t[s], u = o[1];
    if (o[2]) {
      if (c === void 0 && !(s in t))
        return !1;
    } else {
      var l = new J(), f;
      if (!(f === void 0 ? $n(u, c, Kh | Vh, r, l) : f))
        return !1;
    }
  }
  return !0;
}
function Mi(t) {
  return t === t && !j(t);
}
function Wh(t) {
  for (var e = Pe(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Mi(i)];
  }
  return e;
}
function $i(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Jh(t) {
  var e = Wh(t);
  return e.length == 1 && e[0][2] ? $i(e[0][0], e[0][1]) : function(n) {
    return n === t || Zh(n, t, e);
  };
}
function Qh(t, e) {
  return t != null && e in Object(t);
}
function Ai(t, e, n) {
  e = ze(e, t);
  for (var r = -1, i = e.length, a = !1; ++r < i; ) {
    var o = Bt(e[r]);
    if (!(a = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && _n(i) && Ae(o, i) && (R(t) || mn(t)));
}
function jh(t, e) {
  return t != null && Ai(t, e, Qh);
}
var td = 1, ed = 2;
function nd(t, e) {
  return wn(t) && Mi(e) ? $i(Bt(t), e) : function(n) {
    var r = vl(n, t);
    return r === void 0 && r === e ? jh(n, t) : $n(e, r, td | ed);
  };
}
function rd(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function id(t) {
  return function(e) {
    return xn(e, t);
  };
}
function ad(t) {
  return wn(t) ? rd(Bt(t)) : id(t);
}
function Ti(t) {
  return typeof t == "function" ? t : t == null ? ni : typeof t == "object" ? R(t) ? nd(t[0], t[1]) : Jh(t) : ad(t);
}
function od(t) {
  return function(e, n, r) {
    for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
      var c = o[++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return e;
  };
}
var sd = od();
function cd(t, e) {
  return t && sd(t, e, Pe);
}
function ud(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!qt(n))
      return t(n, r);
    for (var i = n.length, a = -1, o = Object(n); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var Pi = ud(cd);
function fd(t) {
  return typeof t == "function" ? t : ni;
}
function ld(t, e) {
  var n = R(t) ? qu : Pi;
  return n(t, fd(e));
}
function hd(t, e) {
  return $e(e, function(n) {
    return [n, t[n]];
  });
}
function dd(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var pd = "[object Map]", bd = "[object Set]";
function gd(t) {
  return function(e) {
    var n = W(e);
    return n == pd ? xi(e) : n == bd ? dd(e) : hd(e, t(e));
  };
}
var yd = gd(Pe);
function _d(t, e) {
  var n = -1, r = qt(t) ? Array(t.length) : [];
  return Pi(t, function(i, a, o) {
    r[++n] = e(i, a, o);
  }), r;
}
function Dt(t, e) {
  var n = R(t) ? $e : _d;
  return n(t, Ti(e));
}
var md = Object.prototype, wd = md.hasOwnProperty;
function vd(t, e) {
  return t != null && wd.call(t, e);
}
function xd(t, e) {
  return t != null && Ai(t, e, vd);
}
var Md = "[object Boolean]";
function $d(t) {
  return t === !0 || t === !1 || pt(t) && gt(t) == Md;
}
function Ad(t, e, n, r) {
  if (!j(t))
    return t;
  e = ze(e, t);
  for (var i = -1, a = e.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var c = Bt(e[i]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (i != o) {
      var l = s[c];
      u = void 0, u === void 0 && (u = j(l) ? l : Ae(e[i + 1]) ? [] : {});
    }
    Ku(s, c, u), s = s[c];
  }
  return t;
}
function Td(t, e, n) {
  for (var r = -1, i = e.length, a = {}; ++r < i; ) {
    var o = e[r], s = xn(t, o);
    n(s, o) && Ad(a, ze(o, t), s);
  }
  return a;
}
function Si(t, e) {
  if (t == null)
    return {};
  var n = $e(lh(t), function(r) {
    return [r];
  });
  return e = Ti(e), Td(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Pd = Math.ceil, Sd = Math.max;
function Ed(t, e, n, r) {
  for (var i = -1, a = Sd(Pd((e - t) / (n || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += n;
  return o;
}
function Nd(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && Zu(e, n, r) && (n = r = void 0), e = Re(e), n === void 0 ? (n = e, e = 0) : n = Re(n), r = r === void 0 ? e < n ? 1 : -1 : Re(r), Ed(e, n, r);
  };
}
var Ei = Nd();
function zd() {
  var t = arguments, e = Ne(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
const Od = (t, e, n = 12, r = 12) => {
  const i = U().domain([0, n]).range([0, t]), a = U().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return Ei((n + 1) * (r + 1)).map(function(c) {
        return { m: c % (n + 1), n: Math.floor(c / (n + 1)), x: i(c % (n + 1)), y: a(Math.floor(c / (n + 1))) };
      });
    },
    position: function(c, u) {
      typeof c == "number" && (c = [c]), typeof u == "number" && (u = [u]);
      const l = $l(Dt(u, function(f) {
        return Dt(
          c,
          function(h) {
            return { x: i(h), y: a(f) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, kd = "_widget_18g36_1", Id = "_label_18g36_19", Cd = "_lit_18g36_24", Rd = "_button_18g36_29", Fd = "_symbol_18g36_29", Dd = "_radio_18g36_29", Ld = "_radiobutton_18g36_29", Hd = "_selected_18g36_35", qd = "_toggle_18g36_35", Bd = "_slider_18g36_44", Xd = "_track_18g36_44", Gd = "_track_overlay_18g36_48", Ud = "_handle_18g36_55", y = {
  widget: kd,
  label: Id,
  lit: Cd,
  button: Rd,
  symbol: Fd,
  radio: Dd,
  radiobutton: Ld,
  selected: Hd,
  toggle: qd,
  slider: Bd,
  track: Xd,
  track_overlay: Gd,
  handle: Ud
}, An = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Tn = (t, e, n) => {
  var r, i, a, o;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, Yd = (t = 1) => {
  const e = q();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Kd = (t = 1) => {
  const e = q(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Vd = (t = 1) => {
  const e = q();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Zd = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = q();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Wd = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, a = 0.5, o = 0.6, s = 0.6, c = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), e.arc(0, 0, t * (1 - a), r, i, !1), e.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), e.closePath(), e.toString();
}, Jd = (t = 1) => {
  const e = q(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, a = n, o = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, o), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, a, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Qd = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), e.arc(0, 0, t * (1 - a), i, r, !0), e.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var c = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(c[0] + u[0], c[1] + u[1]), e.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), e.closePath(), e.toString();
}, jd = (t = 1) => {
  var e = q(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, t0 = (t = 1) => {
  const e = q(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, on = (t) => {
  switch (t) {
    case "play":
      return Yd;
    case "forward":
      return Kd;
    case "back":
      return Vd;
    case "pause":
      return Zd;
    case "reload":
      return Wd;
    case "capture":
      return Jd;
    case "rewind":
      return Qd;
    case "stop":
      return jd;
    case "push":
      return t0;
  }
}, e0 = () => {
  const t = "button";
  var e = An(), n = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", c = null, u = function(d) {
  }, l = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % l.length, u(), P(this.parentNode).select("." + y.symbol).attr("d", on(l[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % l.length, u(), d.select("#button_" + e).select("." + y.symbol).attr("d", on(l[f])(r * n));
    }
  };
}, n0 = () => {
  const t = "slider", e = xe(".3f");
  var n = An(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, c = "top-left", u = null, l = function(g) {
  }, f = function(g) {
  }, h = [0, 1], p = 0, d = null, _ = U().domain(h).range([0, r]).clamp(!0);
  const v = function(g, x, $ = h) {
    const b = g.select("#slider_" + n);
    _.domain($), p = x, b.selectAll("." + y.handle).transition().attr("cx", _(x)), o && b.select("." + y.label).text(d + " = " + e(p)), l(), f();
  };
  return {
    type: t,
    scale: _,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return l = g, this;
      l(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    range: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: v,
    click: v
  };
}, r0 = () => {
  const t = "toggle";
  var e = An(), n = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(f) {
  }, c = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    click: function() {
      c = !c;
      const f = P(this.parentNode);
      f.select("." + y.handle).transition().attr("cx", c ? 2 * n : 0), f.classed(y.selected, c), s();
    },
    reset: function(f, h) {
      c = h;
      const p = f.select("#toggle_" + e);
      p.selectAll("." + y.handle).transition().attr("cx", c ? 2 * n : 0), p.classed(y.selected, c), s();
    }
  };
}, i0 = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = P(a).attr("class", y.widget + " " + y.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", y.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), o.append("path").attr("d", on(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", y.symbol), r) {
    const c = Tn(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + c.x + "," + c.y + ")");
  }
  return a;
}, Ni = (t, e) => {
  const n = q();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, a0 = (t, e) => {
  const n = xe(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const c = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(c).attr("class", y.widget + " " + y.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Ni(t.size(), t.girth())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", y.track_overlay).on("click", function(d) {
    const _ = ce(d, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + n(t.value()));
  }).call(
    Uo().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + y.handle).attr("cx", o(t.value())), t.show() && s.select("." + y.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var l, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Gt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Gt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Gt([t.girth() / 2, t.knob()]) + 7 : -Gt([t.girth() / 2, t.knob()]) - 7, l = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", y.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + l + "," + f + ")"), c;
}, o0 = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(o).attr("class", y.widget + " " + y.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(y.selected, t.value() == 1);
  if (s.append("path").attr("d", Ni(2 * t.size(), 2 * t.size())).attr("class", y.track), s.append("circle").attr("class", y.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", y.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const c = Tn(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", y.label).style("text-anchor", c.anchor).style("font-size", t.fontsize()).style("alignment-baseline", c.valign).attr("transform", "translate(" + (c.x + r) + "," + c.y + ")");
  }
  return o;
}, s0 = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = ji(o), c = U().domain([0, o - 1]).range([0, t.size()]), u = U().domain([0, o - 1]).range([0, t.size()]), l = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = P(l).attr("class", y.widget + " " + y.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + y.radiobutton).data(s).enter().append("g").attr("class", y.radiobutton).attr("id", (v) => "b" + v).attr("transform", (v) => t.orientation() == "vertical" ? "translate(0," + u(v) + ")" : "translate(" + c(v) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", a / 2)), p.attr("class", y.background).on("mouseover", function() {
    P(this).classed(y.lit, !0), P(this.parentNode).select("." + y.symbol).classed(y.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(y.lit, !1), P(this.parentNode).select("." + y.symbol).classed(y.lit, !1);
  }), d.attr("class", y.symbol), d.filter((v) => v == t.value()).classed(y.selected, !0), h.on("click", t.click);
  const _ = Tn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", y.label).text(function(v, g) {
    return t.choices()[g];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), l;
}, He = (t, e) => {
  switch (t.type) {
    case "button":
      return i0(t);
    case "slider":
      return a0(t);
    case "radio":
      return s0(t);
    case "toggle":
      return o0(t);
  }
}, c0 = (t, e) => {
  const n = Od(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = P("#" + t).classed(e.id + " " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height);
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && a.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && a.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: n };
}, A = {
  widgets: {
    fontsize: 20,
    slider_size: 400,
    slider_show: !0,
    slider_girth: 18,
    slider_knob: 20,
    slider_labelposition: "center",
    slider_anchor: { x: 1, y: 6 },
    toggle_anchor: { x: 4, y: 8 },
    toggle_gap: 1.5,
    toggle_size: 10,
    toggle_label_pos: "right",
    button_size: 120,
    button_anchor: { x: 6, y: 2 }
  },
  simulation: {
    highlight_color: "red",
    highlight_size: 2,
    colormap: "vik"
  }
}, z = {
  N: 500,
  coupling_strength: {
    range: [0, 2],
    default: 0.9
  },
  dark_mode: {
    default: !1
  },
  highlight_last: {
    default: !0
  },
  color_orbits: {
    default: !1
  }
}, zi = (t) => Dt(yd(t), (e) => (e[1].id = e[0], e[1].label = zd(jl(e[0]), /_/g, " "), e[1])), Oi = (t, e) => ld(t, (n, r) => n.widget = e[r]), u0 = (t) => Si(t, (e) => xd(e, "range")), f0 = (t) => Si(t, (e) => $d(e.default)), ki = zi(u0(z)), Ii = zi(f0(z)), sn = Dt(
  ki,
  (t) => n0().id(t.id).label(t.label).range(t.range).value(t.default).show(A.widgets.slider_show).girth(A.widgets.slider_girth).knob(A.widgets.slider_knob).size(A.widgets.slider_size).fontsize(A.widgets.fontsize).labelposition(A.widgets.slider_labelposition)
), ae = Dt(
  Ii,
  (t) => r0().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.toggle_label_pos).fontsize(A.widgets.fontsize).size(A.widgets.toggle_size)
);
Oi(Ii, ae);
Oi(ki, sn);
const Pn = e0().actions(["rewind"]), mr = [Pn], l0 = (t, e) => {
  const n = e.position(A.widgets.toggle_anchor.x, Ei(ae.length).map((a) => A.widgets.toggle_anchor.y + A.widgets.toggle_gap * a));
  ae.forEach((a, o) => a.position(n[o]));
  const r = e.position(A.widgets.slider_anchor.x, A.widgets.slider_anchor.y), i = e.position(A.widgets.button_anchor.x, A.widgets.button_anchor.y);
  sn[0].position(r), mr[0].position(i).size(A.widgets.button_size), t.selectAll(null).data(sn).enter().append(He), t.selectAll(null).data(ae).enter().append(He), t.selectAll(null).data(mr).enter().append(He);
}, jt = {
  bamO: ["#4e2f43", "#502f44", "#512f46", "#522f47", "#542f49", "#56304b", "#57304c", "#59314e", "#5b3150", "#5d3252", "#603354", "#623356", "#643458", "#66355b", "#68365d", "#6b385f", "#6d3961", "#6f3a63", "#713b65", "#743c67", "#763e69", "#783f6b", "#7a416d", "#7c426f", "#7e4371", "#814573", "#834675", "#854877", "#874979", "#894b7b", "#8b4c7d", "#8c4e7e", "#8e4f80", "#905182", "#925284", "#945485", "#965587", "#975789", "#99588a", "#9b5a8c", "#9c5b8e", "#9e5d8f", "#a05e91", "#a16092", "#a36194", "#a56395", "#a66497", "#a86698", "#a9689a", "#ab699b", "#ac6b9d", "#ae6d9e", "#af6ea0", "#b170a1", "#b272a3", "#b474a4", "#b675a6", "#b777a7", "#b979a9", "#ba7bab", "#bc7dac", "#bd7fae", "#be81af", "#c083b1", "#c185b2", "#c387b3", "#c489b5", "#c58bb6", "#c78db8", "#c88fb9", "#c992bb", "#cb94bc", "#cc96bd", "#cd98be", "#ce9ac0", "#cf9cc1", "#d09ec2", "#d1a1c3", "#d2a3c4", "#d3a5c5", "#d4a7c6", "#d4a9c7", "#d5abc8", "#d6adc8", "#d6afc9", "#d7b0ca", "#d7b2ca", "#d8b4cb", "#d8b5cb", "#d8b7cb", "#d9b9cc", "#d9bacc", "#d9bbcc", "#d9bdcc", "#d9becc", "#d9bfcc", "#d9c0cc", "#d9c1cc", "#d9c2cc", "#d9c3cc", "#d9c4cc", "#d9c5cb", "#d9c6cb", "#d9c6cb", "#d8c7cb", "#d8c8ca", "#d8c8ca", "#d8c9ca", "#d7c9c9", "#d7cac9", "#d7cac8", "#d7cbc8", "#d6cbc7", "#d6cbc7", "#d6ccc6", "#d5ccc6", "#d5ccc5", "#d4cdc5", "#d4cdc4", "#d4cdc3", "#d3cdc3", "#d3cdc2", "#d2cdc1", "#d1cdc0", "#d1cec0", "#d0cebf", "#cfcebe", "#cfcdbd", "#cecdbb", "#cdcdba", "#cccdb9", "#cbcdb7", "#caccb6", "#c9ccb4", "#c7cbb3", "#c6cbb1", "#c4caaf", "#c3c9ad", "#c1c8ab", "#bfc7a8", "#bec6a6", "#bcc5a4", "#bac4a1", "#b8c29f", "#b6c19c", "#b3bf99", "#b1be97", "#afbc94", "#adba92", "#abb88f", "#a8b78c", "#a6b58a", "#a4b387", "#a2b185", "#a0af83", "#9ead80", "#9cab7e", "#9aa97c", "#98a77a", "#96a578", "#94a376", "#92a174", "#90a072", "#8e9e70", "#8d9c6e", "#8b9a6d", "#89986b", "#879669", "#869468", "#849366", "#839165", "#818f63", "#808d62", "#7e8c61", "#7d8a5f", "#7b885e", "#7a875d", "#79855c", "#77835b", "#768259", "#758058", "#747f57", "#727d56", "#717c55", "#707a54", "#6f7853", "#6e7752", "#6d7551", "#6b7450", "#6a7250", "#69714f", "#686f4e", "#676e4d", "#666c4c", "#656b4b", "#64694b", "#63684a", "#616649", "#606548", "#5f6347", "#5e6247", "#5d6046", "#5c5f45", "#5b5d45", "#5b5c44", "#5a5a43", "#595943", "#585842", "#575642", "#565541", "#555441", "#545240", "#545140", "#53503f", "#524f3f", "#524e3e", "#514c3e", "#504b3e", "#504a3d", "#4f493d", "#4f483d", "#4e473c", "#4e463c", "#4d453c", "#4d443b", "#4c443b", "#4c433b", "#4b423b", "#4b413b", "#4b403a", "#4a3f3a", "#4a3f3a", "#4a3e3a", "#493d3a", "#493c3a", "#493b3a", "#493b3a", "#483a3a", "#48393a", "#48383a", "#48383a", "#48373a", "#48363a", "#48353b", "#48353b", "#48343b", "#48333b", "#48333c", "#49323c", "#49323d", "#4a313d", "#4a313e", "#4b303f", "#4c3040", "#4c3041", "#4d2f42"],
  romaO: ["#733957", "#733856", "#743854", "#753853", "#753851", "#763850", "#77384f", "#78384d", "#78384c", "#79384b", "#7a3849", "#7a3848", "#7b3847", "#7c3846", "#7c3944", "#7d3943", "#7e3942", "#7f3a41", "#7f3a40", "#803a3f", "#813b3e", "#823b3d", "#823c3c", "#833d3b", "#843d3a", "#853e39", "#853f38", "#863f37", "#874036", "#884135", "#894235", "#894334", "#8a4433", "#8b4532", "#8c4632", "#8d4731", "#8e4830", "#8e4930", "#8f4a2f", "#904b2f", "#914d2e", "#924e2e", "#934f2d", "#94512d", "#95522d", "#96542c", "#97552c", "#98572c", "#99582b", "#9a5a2b", "#9b5b2b", "#9c5d2b", "#9d5f2b", "#9e602b", "#9f622b", "#a0642b", "#a1662b", "#a2672c", "#a3692c", "#a46b2c", "#a56d2d", "#a66f2d", "#a8712d", "#a9732e", "#aa752f", "#ab772f", "#ac7930", "#ad7b31", "#ae7d32", "#af7f33", "#b18134", "#b28335", "#b38636", "#b48837", "#b58a38", "#b78c3a", "#b88f3b", "#b9913d", "#ba933e", "#bb9540", "#bd9842", "#be9a43", "#bf9c45", "#c09f47", "#c1a149", "#c2a34b", "#c4a64d", "#c5a850", "#c6aa52", "#c7ad54", "#c8af57", "#c9b159", "#cab35b", "#cbb65e", "#ccb860", "#cdba63", "#cebc66", "#cfbe68", "#d0c06b", "#d0c26e", "#d1c470", "#d2c673", "#d2c876", "#d3ca78", "#d4cb7b", "#d4cd7e", "#d4cf81", "#d5d083", "#d5d286", "#d5d389", "#d5d48b", "#d5d68e", "#d5d790", "#d5d893", "#d5d995", "#d5da98", "#d4db9a", "#d4dc9c", "#d3dd9f", "#d3dea1", "#d2dea3", "#d1dfa5", "#d1e0a7", "#d0e0aa", "#cfe1ac", "#cee1ad", "#cde1af", "#cce1b1", "#cae2b3", "#c9e2b5", "#c8e2b6", "#c6e2b8", "#c5e2ba", "#c3e2bb", "#c2e1bd", "#c0e1be", "#bee1bf", "#bde1c1", "#bbe0c2", "#b9e0c3", "#b7dfc4", "#b5dfc5", "#b3dec6", "#b1ddc7", "#afddc8", "#addcc9", "#abdbca", "#a8daca", "#a6d9cb", "#a4d8cc", "#a2d7cc", "#9fd6cd", "#9dd5cd", "#9bd4ce", "#98d3ce", "#96d2ce", "#93d1ce", "#91cfcf", "#8fcecf", "#8ccccf", "#8acbcf", "#88cacf", "#85c8cf", "#83c7cf", "#81c5cf", "#7fc4cf", "#7cc2cf", "#7ac0cf", "#78bfce", "#76bdce", "#74bbce", "#72bacd", "#70b8cd", "#6eb6cd", "#6cb4cc", "#6ab3cc", "#68b1cb", "#66afcb", "#64adca", "#63abc9", "#61aac9", "#60a8c8", "#5ea6c8", "#5da4c7", "#5ba2c6", "#5aa0c5", "#599ec5", "#579dc4", "#569bc3", "#5599c2", "#5497c1", "#5395c0", "#5393bf", "#5291bf", "#518fbe", "#508dbd", "#508cbb", "#4f8aba", "#4f88b9", "#4f86b8", "#4e84b7", "#4e82b6", "#4e80b5", "#4e7eb3", "#4e7cb2", "#4e7ab1", "#4e78af", "#4e76ae", "#4e75ac", "#4f73ab", "#4f71a9", "#506fa8", "#506da6", "#516ba5", "#5169a3", "#5267a1", "#52669f", "#53649e", "#54629c", "#54609a", "#555e98", "#565d96", "#575b95", "#585993", "#595891", "#59568f", "#5a548d", "#5b538b", "#5c5189", "#5d5087", "#5e4e85", "#5f4d83", "#604c81", "#604a7f", "#61497d", "#62487b", "#634779", "#644677", "#654576", "#664474", "#664372", "#674270", "#68416e", "#69406c", "#6a3f6b", "#6a3e69", "#6b3e67", "#6c3d65", "#6d3c64", "#6d3c62", "#6e3b60", "#6f3b5f", "#703a5d", "#703a5c", "#71395a", "#723959"],
  vikO: ["#4e193d", "#4e1a3e", "#4d1a3f", "#4c1b40", "#4c1c42", "#4b1c43", "#4a1d44", "#491e46", "#491f47", "#481f48", "#47204a", "#46214b", "#46224d", "#45234e", "#442450", "#432551", "#432653", "#422754", "#412856", "#412957", "#402a59", "#3f2b5b", "#3e2d5c", "#3d2e5e", "#3d2f60", "#3c3061", "#3b3263", "#3b3365", "#3a3467", "#393668", "#38376a", "#38396c", "#373a6e", "#373c6f", "#363e71", "#353f73", "#354174", "#344276", "#344478", "#34467a", "#33477b", "#33497d", "#334b7f", "#334d80", "#334f82", "#335084", "#335285", "#335487", "#335689", "#34588a", "#345a8c", "#355c8d", "#355d8f", "#365f91", "#376192", "#386394", "#396595", "#3a6797", "#3b6998", "#3d6b9a", "#3e6d9b", "#406f9d", "#41719e", "#43739f", "#4575a1", "#4677a2", "#4879a4", "#4a7ba5", "#4c7da7", "#4e7fa8", "#5081a9", "#5283ab", "#5585ac", "#5787ad", "#5989af", "#5b8bb0", "#5e8db1", "#608fb3", "#6391b4", "#6593b5", "#6895b6", "#6a97b7", "#6d99b9", "#6f9aba", "#729cbb", "#759ebc", "#77a0bd", "#7aa2be", "#7da4bf", "#7fa5c0", "#82a7c1", "#85a9c2", "#88abc3", "#8aacc4", "#8daec4", "#90afc5", "#93b1c6", "#96b2c6", "#98b4c7", "#9bb5c7", "#9eb7c8", "#a0b8c8", "#a3b9c8", "#a6bac8", "#a8bbc8", "#abbcc8", "#adbdc8", "#b0bec8", "#b2bfc8", "#b5c0c8", "#b7c0c7", "#b9c1c7", "#bcc1c6", "#bec2c6", "#c0c2c5", "#c2c3c4", "#c4c3c3", "#c5c3c3", "#c7c3c2", "#c9c3c0", "#cac3bf", "#ccc2be", "#cdc2bd", "#cfc2bb", "#d0c1ba", "#d1c1b8", "#d2c0b7", "#d3bfb5", "#d4bfb3", "#d5beb1", "#d6bdb0", "#d6bcae", "#d7bbac", "#d7baaa", "#d8b9a8", "#d8b8a6", "#d8b6a4", "#d9b5a2", "#d9b49f", "#d9b29d", "#d9b19b", "#d9b099", "#d9ae97", "#d9ad94", "#d8ab92", "#d8aa90", "#d8a88e", "#d7a68b", "#d7a589", "#d7a387", "#d6a184", "#d6a082", "#d59e80", "#d49c7d", "#d49a7b", "#d39979", "#d29776", "#d29574", "#d19372", "#d0916f", "#cf8f6d", "#ce8d6b", "#cd8c68", "#cc8a66", "#cb8864", "#ca8661", "#c9845f", "#c8825d", "#c7805a", "#c67e58", "#c47b56", "#c37954", "#c27751", "#c1754f", "#bf734d", "#be714b", "#bc6f49", "#bb6d47", "#b96a44", "#b86842", "#b66640", "#b4643e", "#b3613c", "#b15f3a", "#af5d39", "#ae5b37", "#ac5835", "#aa5633", "#a85432", "#a65230", "#a44f2e", "#a24d2d", "#a04b2b", "#9e492a", "#9c4729", "#9b4427", "#994226", "#974025", "#953e24", "#933c23", "#913a22", "#8f3822", "#8d3621", "#8b3520", "#893320", "#87311f", "#862f1f", "#842e1f", "#822c1e", "#802b1e", "#7f291e", "#7d281e", "#7b261e", "#7a251e", "#78241e", "#77221e", "#75211e", "#74201e", "#721f1f", "#711e1f", "#701d1f", "#6e1c20", "#6d1c20", "#6c1b20", "#6b1a21", "#691921", "#681922", "#671822", "#661823", "#651724", "#641724", "#631625", "#621626", "#611626", "#601527", "#5f1528", "#5e1529", "#5d1529", "#5d152a", "#5c152b", "#5b152c", "#5a152d", "#59152e", "#58152f", "#581530", "#571531", "#561632", "#551633", "#541634", "#541635", "#531736", "#521737", "#511738", "#511839", "#50183a", "#4f193b"],
  brocO: ["#362f37", "#362f38", "#362f3a", "#362f3b", "#362f3c", "#362f3d", "#352f3e", "#353040", "#353041", "#353043", "#353144", "#353146", "#353247", "#353249", "#35334a", "#35344c", "#35344e", "#35354f", "#363651", "#363753", "#363855", "#363957", "#363a58", "#363b5a", "#363c5c", "#373d5e", "#373e60", "#374062", "#384164", "#384266", "#384468", "#39456a", "#39476c", "#3a486e", "#3a4a70", "#3b4b73", "#3c4d75", "#3c4f77", "#3d5079", "#3e527a", "#3f547c", "#40557e", "#415780", "#425982", "#435b84", "#445c86", "#455e88", "#46608a", "#47628b", "#49648d", "#4a658f", "#4b6791", "#4d6992", "#4e6b94", "#506d96", "#516f97", "#537099", "#54729a", "#56749c", "#58769d", "#59789f", "#5b79a0", "#5d7ba2", "#5e7da3", "#607fa5", "#6281a6", "#6482a7", "#6684a9", "#6886aa", "#6a88ac", "#6b89ad", "#6d8bae", "#6f8daf", "#718fb1", "#7391b2", "#7592b3", "#7794b5", "#7996b6", "#7b98b7", "#7d99b8", "#7f9bb9", "#829dba", "#849ebc", "#86a0bd", "#88a2be", "#8aa4bf", "#8ca5c0", "#8ea7c1", "#90a9c2", "#92aac3", "#94acc4", "#96aec5", "#98afc6", "#9bb1c7", "#9db2c8", "#9fb4c9", "#a1b6ca", "#a3b7ca", "#a5b9cb", "#a7bacc", "#a9bccd", "#abbdcd", "#adbfce", "#afc0ce", "#b1c1cf", "#b2c3cf", "#b4c4d0", "#b6c5d0", "#b8c7d0", "#bac8d0", "#bbc9d0", "#bdcad0", "#bfcbd0", "#c0ccd0", "#c2cdd0", "#c3ced0", "#c4cfd0", "#c6d0cf", "#c7d0cf", "#c8d1ce", "#c9d2cd", "#cad2cd", "#cbd3cc", "#ccd3cb", "#ccd3ca", "#cdd4c9", "#ced4c8", "#ced4c6", "#ced4c5", "#cfd4c3", "#cfd4c2", "#cfd3c0", "#cfd3bf", "#cfd2bd", "#cfd2bb", "#ced1b9", "#ced1b7", "#cdd0b5", "#cdcfb3", "#ccceb1", "#cbceaf", "#cbcdad", "#cacbab", "#c9caa9", "#c8c9a7", "#c7c8a4", "#c6c7a2", "#c4c5a0", "#c3c49e", "#c2c39b", "#c0c199", "#bfc097", "#bdbe94", "#bcbd92", "#babb90", "#b9b98d", "#b7b88b", "#b6b689", "#b4b486", "#b2b284", "#b0b182", "#afaf7f", "#adad7d", "#abab7b", "#a9a979", "#a7a877", "#a5a674", "#a4a472", "#a2a270", "#a0a06e", "#9e9e6c", "#9c9c6a", "#9a9a68", "#989866", "#969664", "#949462", "#929360", "#91915e", "#8f8f5c", "#8d8d5a", "#8b8b58", "#898957", "#878755", "#858553", "#838351", "#818150", "#807f4e", "#7e7e4c", "#7c7c4b", "#7a7a49", "#787848", "#767646", "#757445", "#737243", "#717142", "#6f6f40", "#6e6d3f", "#6c6b3e", "#6a693c", "#68683b", "#67663a", "#656439", "#636237", "#626136", "#605f35", "#5f5d34", "#5d5c33", "#5c5a32", "#5a5831", "#595731", "#575530", "#56542f", "#54522e", "#53512d", "#524f2d", "#514e2c", "#4f4c2c", "#4e4b2b", "#4d4a2b", "#4c482a", "#4b472a", "#494629", "#484429", "#474329", "#464229", "#454129", "#454028", "#443f28", "#433e28", "#423d28", "#413c28", "#403b28", "#403a29", "#3f3929", "#3e3829", "#3e3729", "#3d372a", "#3d362a", "#3c352a", "#3b352b", "#3b342b", "#3b332c", "#3a332c", "#3a322d", "#39322d", "#39312e", "#39312f", "#38302f", "#383030", "#383031", "#373032", "#372f33", "#372f33", "#372f34", "#362f35", "#362f36"]
}, h0 = {
  roma: Zt(it, jt.romaO),
  vik: Zt(it, jt.vikO),
  broc: Zt(it, jt.brocO),
  bam: Zt(it, jt.bamO),
  sinebow: ru
}, d0 = h0[A.simulation.colormap];
z.N;
const Ci = U().domain([0, 2 * Math.PI]), Ri = U().domain([0, 2 * Math.PI]), Fi = U().range([0, 2 * Math.PI]), Di = U().range([0, 2 * Math.PI]);
var O, st, ct;
const wr = (t, e, n) => {
  t.forEach(function(r) {
    O.fillRect(Ci(r[0]), Ri(r[1]), e, e), O.fillStyle = n, O.fill();
  });
}, Li = (t) => {
  O.clearRect(0, 0, st, ct), z.dark_mode.widget.value() && (O.fillStyle = "black", O.fillRect(0, 0, st, ct)), ft.forEach(function(e) {
    const n = z.color_orbits.widget.value() ? d0(e.color) : z.dark_mode.widget.value() ? "white" : "black";
    wr(e.orbit, z.color_orbits.widget.value() ? 3 : 1, n);
  }), z.highlight_last.widget.value() && ft.length > 0 && wr(ft[ft.length - 1].orbit, A.simulation.highlight_size, A.simulation.highlight_color);
}, vr = (t, e) => {
  const n = t.node().getBoundingClientRect();
  st = e.display_size.width, ct = e.display_size.height, Ci.range([0, st]), Ri.range([0, ct]), Fi.domain([0, n.width]), Di.domain([0, n.height]), O = t.node().getContext("2d"), O.clearRect(0, 0, st, ct), z.dark_mode.widget.value() && (O.fillStyle = "black", O.fillRect(0, 0, st, ct)), O.font = "60px Avenir", O.fillStyle = "gray", O.textAlign = "center", O.fillText("Click Here", st / 2, ct / 2);
}, p0 = (t) => {
  Li();
}, b0 = z.N;
var ft = [], cn = 0;
const g0 = (t) => {
  const e = z.coupling_strength.widget.value() * Math.sin(t[0]);
  return [(t[0] + t[1] + e + 2 * Math.PI) % (2 * Math.PI), (t[1] + e + 2 * Math.PI) % (2 * Math.PI)];
};
function Hi(t) {
  var e = [], n = 0;
  for (e.push(t); ++n < b0; )
    t = g0(t), e.push(t);
  return e;
}
const xr = (t) => {
  ft = [], cn = 0;
}, y0 = (t) => {
  const e = ce(event);
  var n = [Fi(e[0]), Di(e[1])], r = Hi(n);
  cn++, ft.push({ index: cn, orbit: r, color: Math.random() });
}, _0 = () => {
  ft.forEach(function(t) {
    var e = [];
    e[0] = t.orbit[0][0], e[1] = t.orbit[0][1];
    var n = Hi(e);
    t.orbit = n;
  });
};
function m0(t, e) {
  y0(), p0();
}
function qi(t, e) {
  window.onresize = () => {
    xr(), vr(t, e);
  }, xr(), vr(t, e);
}
function te(t) {
  Li(), _0();
}
const w0 = (t, e, n) => {
  console.log(t), t.on("click", function() {
    m0();
  }), Pn.update(() => qi(t, n)), z.coupling_strength.widget.update(() => {
    te();
  }), z.highlight_last.widget.update(() => {
    te();
  }), z.color_orbits.widget.update(() => {
    te();
  }), z.dark_mode.widget.update(() => {
    te();
  });
}, v0 = {
  name: "@explorables/kick_it_like_chirikov",
  title: "Kick it like Chirikov",
  subtitle: "The kicked rotator (standard map)",
  description: "This explorable illustrates the chaotic sea of the famous two-dimensional map known as the kicked rotator or standard map. It's a very important system in nonlinear dynamics.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function x0(t, e = Bi) {
  const n = c0(t, e), r = n.display, i = n.controls, a = n.grid;
  return l0(i, a), w0(r, i, e), qi(r, e), {
    halt() {
      go.value() === 1 && go.press(i);
    },
    reset() {
      go.value() === 1 && go.press(i), Pn.press(i);
    },
    config: e,
    meta: v0
  };
}
export {
  Bi as config,
  x0 as default,
  x0 as load,
  v0 as meta
};
