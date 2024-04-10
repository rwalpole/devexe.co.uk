var Ga = Object.defineProperty;
var Qr = Object.getOwnPropertySymbols;
var Ya = Object.prototype.hasOwnProperty, Va = Object.prototype.propertyIsEnumerable;
var ea = (e, r, a) => r in e ? Ga(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, lr = (e, r) => {
  for (var a in r || (r = {}))
    Ya.call(r, a) && ea(e, a, r[a]);
  if (Qr)
    for (var a of Qr(r))
      Va.call(r, a) && ea(e, a, r[a]);
  return e;
};
const Ka = (e, r) => {
  const a = new XMLHttpRequest();
  a.open("GET", e), a.send(), a.addEventListener("load", () => {
    r(JSON.parse(a.responseText));
  }), a.addEventListener("error", () => {
    r(!1, a.status);
  });
}, sr = {}, Me = (e, r, a, n = Ka) => {
  if (sr[e] !== void 0) {
    a(sr[e]);
    return;
  }
  n(e, (o, t) => {
    o ? a(sr[e] = r(o)) : a(!1, t);
  });
};
/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
  entries: pa,
  setPrototypeOf: ra,
  isFrozen: Xa,
  getPrototypeOf: Ja,
  getOwnPropertyDescriptor: fa
} = Object;
let {
  freeze: H,
  seal: X,
  create: ya
} = Object, {
  apply: vr,
  construct: kr
} = typeof Reflect != "undefined" && Reflect;
H || (H = function(r) {
  return r;
});
X || (X = function(r) {
  return r;
});
vr || (vr = function(r, a, n) {
  return r.apply(a, n);
});
kr || (kr = function(r, a) {
  return new r(...a);
});
const De = Y(Array.prototype.forEach), aa = Y(Array.prototype.pop), je = Y(Array.prototype.push), Be = Y(String.prototype.toLowerCase), dr = Y(String.prototype.toString), Za = Y(String.prototype.match), Se = Y(String.prototype.replace), Qa = Y(String.prototype.indexOf), ei = Y(String.prototype.trim), G = Y(RegExp.prototype.test), Te = ri(TypeError);
function Y(e) {
  return function(r) {
    for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      n[o - 1] = arguments[o];
    return vr(e, r, n);
  };
}
function ri(e) {
  return function() {
    for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
      a[n] = arguments[n];
    return kr(e, a);
  };
}
function h(e, r) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Be;
  ra && ra(e, null);
  let n = r.length;
  for (; n--; ) {
    let o = r[n];
    if (typeof o == "string") {
      const t = a(o);
      t !== o && (Xa(r) || (r[n] = t), o = t);
    }
    e[o] = !0;
  }
  return e;
}
function ye(e) {
  const r = ya(null);
  for (const [a, n] of pa(e))
    fa(e, a) !== void 0 && (r[a] = n);
  return r;
}
function He(e, r) {
  for (; e !== null; ) {
    const n = fa(e, r);
    if (n) {
      if (n.get)
        return Y(n.get);
      if (typeof n.value == "function")
        return Y(n.value);
    }
    e = Ja(e);
  }
  function a(n) {
    return console.warn("fallback value for", n), null;
  }
  return a;
}
const ia = H(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gr = H(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ur = H(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ai = H(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cr = H(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ii = H(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), na = H(["#text"]), oa = H(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), mr = H(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ta = H(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ue = H(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ni = X(/\{\{[\w\W]*|[\w\W]*\}\}/gm), oi = X(/<%[\w\W]*|[\w\W]*%>/gm), ti = X(/\${[\w\W]*}/gm), li = X(/^data-[\-\w.\u00B7-\uFFFF]/), si = X(/^aria-[\-\w]+$/), _a = X(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), di = X(/^(?:\w+script|data):/i), gi = X(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ha = X(/^html$/i);
var la = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: ni,
  ERB_EXPR: oi,
  TMPLIT_EXPR: ti,
  DATA_ATTR: li,
  ARIA_ATTR: si,
  IS_ALLOWED_URI: _a,
  IS_SCRIPT_OR_DATA: di,
  ATTR_WHITESPACE: gi,
  DOCTYPE_NAME: ha
});
const ui = function() {
  return typeof window == "undefined" ? null : window;
}, ci = function(r, a) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let n = null;
  const o = "data-tt-policy-suffix";
  a && a.hasAttribute(o) && (n = a.getAttribute(o));
  const t = "dompurify" + (n ? "#" + n : "");
  try {
    return r.createPolicy(t, {
      createHTML(d) {
        return d;
      },
      createScriptURL(d) {
        return d;
      }
    });
  } catch (d) {
    return console.warn("TrustedTypes policy " + t + " could not be created."), null;
  }
};
function wa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ui();
  const r = (m) => wa(m);
  if (r.version = "3.0.6", r.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return r.isSupported = !1, r;
  let {
    document: a
  } = e;
  const n = a, o = n.currentScript, {
    DocumentFragment: t,
    HTMLTemplateElement: d,
    Node: s,
    Element: k,
    NodeFilter: p,
    NamedNodeMap: $ = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: O,
    DOMParser: J,
    trustedTypes: c
  } = e, _ = k.prototype, w = He(_, "cloneNode"), y = He(_, "nextSibling"), j = He(_, "childNodes"), S = He(_, "parentNode");
  if (typeof d == "function") {
    const m = a.createElement("template");
    m.content && m.content.ownerDocument && (a = m.content.ownerDocument);
  }
  let v, b = "";
  const {
    implementation: C,
    createNodeIterator: Z,
    createDocumentFragment: z,
    getElementsByTagName: V
  } = a, {
    importNode: I
  } = n;
  let E = {};
  r.isSupported = typeof pa == "function" && typeof S == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: re,
    ERB_EXPR: We,
    TMPLIT_EXPR: we,
    DATA_ATTR: qa,
    ARIA_ATTR: Wa,
    IS_SCRIPT_OR_DATA: xa,
    ATTR_WHITESPACE: zr
  } = la;
  let {
    IS_ALLOWED_URI: Ar
  } = la, P = null;
  const Er = h({}, [...ia, ...gr, ...ur, ...cr, ...na]);
  let L = null;
  const Mr = h({}, [...oa, ...mr, ...ta, ...Ue]);
  let A = Object.seal(ya(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ve = null, Xe = null, Pr = !0, Je = !0, Lr = !1, qr = !0, ge = !1, ne = !1, Ze = !1, Qe = !1, ue = !1, xe = !1, Ne = !1, Wr = !0, xr = !1;
  const Na = "user-content-";
  let er = !0, ke = !1, ce = {}, me = null;
  const Nr = h({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Rr = null;
  const Cr = h({}, ["audio", "video", "img", "source", "image", "track"]);
  let rr = null;
  const Ir = h({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Re = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", Q = "http://www.w3.org/1999/xhtml";
  let pe = Q, ar = !1, ir = null;
  const Ra = h({}, [Re, Ce, Q], dr);
  let oe = null;
  const Ca = ["application/xhtml+xml", "text/html"], Ia = "text/html";
  let q = null, fe = null;
  const Da = a.createElement("form"), Dr = function(i) {
    return i instanceof RegExp || i instanceof Function;
  }, nr = function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(fe && fe === i)) {
      if ((!i || typeof i != "object") && (i = {}), i = ye(i), oe = // eslint-disable-next-line unicorn/prefer-includes
      Ca.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? oe = Ia : oe = i.PARSER_MEDIA_TYPE, q = oe === "application/xhtml+xml" ? dr : Be, P = "ALLOWED_TAGS" in i ? h({}, i.ALLOWED_TAGS, q) : Er, L = "ALLOWED_ATTR" in i ? h({}, i.ALLOWED_ATTR, q) : Mr, ir = "ALLOWED_NAMESPACES" in i ? h({}, i.ALLOWED_NAMESPACES, dr) : Ra, rr = "ADD_URI_SAFE_ATTR" in i ? h(
        ye(Ir),
        // eslint-disable-line indent
        i.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        q
        // eslint-disable-line indent
      ) : Ir, Rr = "ADD_DATA_URI_TAGS" in i ? h(
        ye(Cr),
        // eslint-disable-line indent
        i.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        q
        // eslint-disable-line indent
      ) : Cr, me = "FORBID_CONTENTS" in i ? h({}, i.FORBID_CONTENTS, q) : Nr, ve = "FORBID_TAGS" in i ? h({}, i.FORBID_TAGS, q) : {}, Xe = "FORBID_ATTR" in i ? h({}, i.FORBID_ATTR, q) : {}, ce = "USE_PROFILES" in i ? i.USE_PROFILES : !1, Pr = i.ALLOW_ARIA_ATTR !== !1, Je = i.ALLOW_DATA_ATTR !== !1, Lr = i.ALLOW_UNKNOWN_PROTOCOLS || !1, qr = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ge = i.SAFE_FOR_TEMPLATES || !1, ne = i.WHOLE_DOCUMENT || !1, ue = i.RETURN_DOM || !1, xe = i.RETURN_DOM_FRAGMENT || !1, Ne = i.RETURN_TRUSTED_TYPE || !1, Qe = i.FORCE_BODY || !1, Wr = i.SANITIZE_DOM !== !1, xr = i.SANITIZE_NAMED_PROPS || !1, er = i.KEEP_CONTENT !== !1, ke = i.IN_PLACE || !1, Ar = i.ALLOWED_URI_REGEXP || _a, pe = i.NAMESPACE || Q, A = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && Dr(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && Dr(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (A.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ge && (Je = !1), xe && (ue = !0), ce && (P = h({}, [...na]), L = [], ce.html === !0 && (h(P, ia), h(L, oa)), ce.svg === !0 && (h(P, gr), h(L, mr), h(L, Ue)), ce.svgFilters === !0 && (h(P, ur), h(L, mr), h(L, Ue)), ce.mathMl === !0 && (h(P, cr), h(L, ta), h(L, Ue))), i.ADD_TAGS && (P === Er && (P = ye(P)), h(P, i.ADD_TAGS, q)), i.ADD_ATTR && (L === Mr && (L = ye(L)), h(L, i.ADD_ATTR, q)), i.ADD_URI_SAFE_ATTR && h(rr, i.ADD_URI_SAFE_ATTR, q), i.FORBID_CONTENTS && (me === Nr && (me = ye(me)), h(me, i.FORBID_CONTENTS, q)), er && (P["#text"] = !0), ne && h(P, ["html", "head", "body"]), P.table && (h(P, ["tbody"]), delete ve.tbody), i.TRUSTED_TYPES_POLICY) {
        if (typeof i.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Te('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof i.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Te('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        v = i.TRUSTED_TYPES_POLICY, b = v.createHTML("");
      } else
        v === void 0 && (v = ci(c, o)), v !== null && typeof b == "string" && (b = v.createHTML(""));
      H && H(i), fe = i;
    }
  }, Hr = h({}, ["mi", "mo", "mn", "ms", "mtext"]), Ur = h({}, ["foreignobject", "desc", "title", "annotation-xml"]), Ha = h({}, ["title", "style", "font", "a", "script"]), Ie = h({}, gr);
  h(Ie, ur), h(Ie, ai);
  const or = h({}, cr);
  h(or, ii);
  const Ua = function(i) {
    let l = S(i);
    (!l || !l.tagName) && (l = {
      namespaceURI: pe,
      tagName: "template"
    });
    const u = Be(i.tagName), T = Be(l.tagName);
    return ir[i.namespaceURI] ? i.namespaceURI === Ce ? l.namespaceURI === Q ? u === "svg" : l.namespaceURI === Re ? u === "svg" && (T === "annotation-xml" || Hr[T]) : !!Ie[u] : i.namespaceURI === Re ? l.namespaceURI === Q ? u === "math" : l.namespaceURI === Ce ? u === "math" && Ur[T] : !!or[u] : i.namespaceURI === Q ? l.namespaceURI === Ce && !Ur[T] || l.namespaceURI === Re && !Hr[T] ? !1 : !or[u] && (Ha[u] || !Ie[u]) : !!(oe === "application/xhtml+xml" && ir[i.namespaceURI]) : !1;
  }, te = function(i) {
    je(r.removed, {
      element: i
    });
    try {
      i.parentNode.removeChild(i);
    } catch (l) {
      i.remove();
    }
  }, tr = function(i, l) {
    try {
      je(r.removed, {
        attribute: l.getAttributeNode(i),
        from: l
      });
    } catch (u) {
      je(r.removed, {
        attribute: null,
        from: l
      });
    }
    if (l.removeAttribute(i), i === "is" && !L[i])
      if (ue || xe)
        try {
          te(l);
        } catch (u) {
        }
      else
        try {
          l.setAttribute(i, "");
        } catch (u) {
        }
  }, Br = function(i) {
    let l = null, u = null;
    if (Qe)
      i = "<remove></remove>" + i;
    else {
      const N = Za(i, /^[\r\n\t ]+/);
      u = N && N[0];
    }
    oe === "application/xhtml+xml" && pe === Q && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
    const T = v ? v.createHTML(i) : i;
    if (pe === Q)
      try {
        l = new J().parseFromString(T, oe);
      } catch (N) {
      }
    if (!l || !l.documentElement) {
      l = C.createDocument(pe, "template", null);
      try {
        l.documentElement.innerHTML = ar ? b : T;
      } catch (N) {
      }
    }
    const x = l.body || l.documentElement;
    return i && u && x.insertBefore(a.createTextNode(u), x.childNodes[0] || null), pe === Q ? V.call(l, ne ? "html" : "body")[0] : ne ? l.documentElement : x;
  }, Fr = function(i) {
    return Z.call(
      i.ownerDocument || i,
      i,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT,
      null
    );
  }, Ba = function(i) {
    return i instanceof O && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof $) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function");
  }, Gr = function(i) {
    return typeof s == "function" && i instanceof s;
  }, ee = function(i, l, u) {
    E[i] && De(E[i], (T) => {
      T.call(r, l, u, fe);
    });
  }, Yr = function(i) {
    let l = null;
    if (ee("beforeSanitizeElements", i, null), Ba(i))
      return te(i), !0;
    const u = q(i.nodeName);
    if (ee("uponSanitizeElement", i, {
      tagName: u,
      allowedTags: P
    }), i.hasChildNodes() && !Gr(i.firstElementChild) && G(/<[/\w]/g, i.innerHTML) && G(/<[/\w]/g, i.textContent))
      return te(i), !0;
    if (!P[u] || ve[u]) {
      if (!ve[u] && Kr(u) && (A.tagNameCheck instanceof RegExp && G(A.tagNameCheck, u) || A.tagNameCheck instanceof Function && A.tagNameCheck(u)))
        return !1;
      if (er && !me[u]) {
        const T = S(i) || i.parentNode, x = j(i) || i.childNodes;
        if (x && T) {
          const N = x.length;
          for (let U = N - 1; U >= 0; --U)
            T.insertBefore(w(x[U], !0), y(i));
        }
      }
      return te(i), !0;
    }
    return i instanceof k && !Ua(i) || (u === "noscript" || u === "noembed" || u === "noframes") && G(/<\/no(script|embed|frames)/i, i.innerHTML) ? (te(i), !0) : (ge && i.nodeType === 3 && (l = i.textContent, De([re, We, we], (T) => {
      l = Se(l, T, " ");
    }), i.textContent !== l && (je(r.removed, {
      element: i.cloneNode()
    }), i.textContent = l)), ee("afterSanitizeElements", i, null), !1);
  }, Vr = function(i, l, u) {
    if (Wr && (l === "id" || l === "name") && (u in a || u in Da))
      return !1;
    if (!(Je && !Xe[l] && G(qa, l))) {
      if (!(Pr && G(Wa, l))) {
        if (!L[l] || Xe[l]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Kr(i) && (A.tagNameCheck instanceof RegExp && G(A.tagNameCheck, i) || A.tagNameCheck instanceof Function && A.tagNameCheck(i)) && (A.attributeNameCheck instanceof RegExp && G(A.attributeNameCheck, l) || A.attributeNameCheck instanceof Function && A.attributeNameCheck(l)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            l === "is" && A.allowCustomizedBuiltInElements && (A.tagNameCheck instanceof RegExp && G(A.tagNameCheck, u) || A.tagNameCheck instanceof Function && A.tagNameCheck(u)))
          )
            return !1;
        } else if (!rr[l]) {
          if (!G(Ar, Se(u, zr, ""))) {
            if (!((l === "src" || l === "xlink:href" || l === "href") && i !== "script" && Qa(u, "data:") === 0 && Rr[i])) {
              if (!(Lr && !G(xa, Se(u, zr, "")))) {
                if (u)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Kr = function(i) {
    return i.indexOf("-") > 0;
  }, Xr = function(i) {
    ee("beforeSanitizeAttributes", i, null);
    const {
      attributes: l
    } = i;
    if (!l)
      return;
    const u = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L
    };
    let T = l.length;
    for (; T--; ) {
      const x = l[T], {
        name: N,
        namespaceURI: U,
        value: le
      } = x, be = q(N);
      let B = N === "value" ? le : ei(le);
      if (u.attrName = be, u.attrValue = B, u.keepAttr = !0, u.forceKeepAttr = void 0, ee("uponSanitizeAttribute", i, u), B = u.attrValue, u.forceKeepAttr || (tr(N, i), !u.keepAttr))
        continue;
      if (!qr && G(/\/>/i, B)) {
        tr(N, i);
        continue;
      }
      ge && De([re, We, we], (Zr) => {
        B = Se(B, Zr, " ");
      });
      const Jr = q(i.nodeName);
      if (Vr(Jr, be, B)) {
        if (xr && (be === "id" || be === "name") && (tr(N, i), B = Na + B), v && typeof c == "object" && typeof c.getAttributeType == "function" && !U)
          switch (c.getAttributeType(Jr, be)) {
            case "TrustedHTML": {
              B = v.createHTML(B);
              break;
            }
            case "TrustedScriptURL": {
              B = v.createScriptURL(B);
              break;
            }
          }
        try {
          U ? i.setAttributeNS(U, N, B) : i.setAttribute(N, B), aa(r.removed);
        } catch (Zr) {
        }
      }
    }
    ee("afterSanitizeAttributes", i, null);
  }, Fa = function m(i) {
    let l = null;
    const u = Fr(i);
    for (ee("beforeSanitizeShadowDOM", i, null); l = u.nextNode(); )
      ee("uponSanitizeShadowNode", l, null), !Yr(l) && (l.content instanceof t && m(l.content), Xr(l));
    ee("afterSanitizeShadowDOM", i, null);
  };
  return r.sanitize = function(m) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, u = null, T = null, x = null;
    if (ar = !m, ar && (m = "<!-->"), typeof m != "string" && !Gr(m))
      if (typeof m.toString == "function") {
        if (m = m.toString(), typeof m != "string")
          throw Te("dirty is not a string, aborting");
      } else
        throw Te("toString is not a function");
    if (!r.isSupported)
      return m;
    if (Ze || nr(i), r.removed = [], typeof m == "string" && (ke = !1), ke) {
      if (m.nodeName) {
        const le = q(m.nodeName);
        if (!P[le] || ve[le])
          throw Te("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (m instanceof s)
      l = Br("<!---->"), u = l.ownerDocument.importNode(m, !0), u.nodeType === 1 && u.nodeName === "BODY" || u.nodeName === "HTML" ? l = u : l.appendChild(u);
    else {
      if (!ue && !ge && !ne && // eslint-disable-next-line unicorn/prefer-includes
      m.indexOf("<") === -1)
        return v && Ne ? v.createHTML(m) : m;
      if (l = Br(m), !l)
        return ue ? null : Ne ? b : "";
    }
    l && Qe && te(l.firstChild);
    const N = Fr(ke ? m : l);
    for (; T = N.nextNode(); )
      Yr(T) || (T.content instanceof t && Fa(T.content), Xr(T));
    if (ke)
      return m;
    if (ue) {
      if (xe)
        for (x = z.call(l.ownerDocument); l.firstChild; )
          x.appendChild(l.firstChild);
      else
        x = l;
      return (L.shadowroot || L.shadowrootmode) && (x = I.call(n, x, !0)), x;
    }
    let U = ne ? l.outerHTML : l.innerHTML;
    return ne && P["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && G(ha, l.ownerDocument.doctype.name) && (U = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + U), ge && De([re, We, we], (le) => {
      U = Se(U, le, " ");
    }), v && Ne ? v.createHTML(U) : U;
  }, r.setConfig = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    nr(m), Ze = !0;
  }, r.clearConfig = function() {
    fe = null, Ze = !1;
  }, r.isValidAttribute = function(m, i, l) {
    fe || nr({});
    const u = q(m), T = q(i);
    return Vr(u, T, l);
  }, r.addHook = function(m, i) {
    typeof i == "function" && (E[m] = E[m] || [], je(E[m], i));
  }, r.removeHook = function(m) {
    if (E[m])
      return aa(E[m]);
  }, r.removeHooks = function(m) {
    E[m] && (E[m] = []);
  }, r.removeAllHooks = function() {
    E = {};
  }, r;
}
var mi = wa();
const pi = (e) => {
  let a = e;
  for (let n = 0; n < 5; n++) {
    const o = decodeURIComponent(a);
    if (o === a)
      return o;
    a = o;
  }
  return a;
}, fi = (e) => {
  const r = [
    // https://zh.wikipedia.org/wiki/前岐镇"
    // https://en.wikipedia.org/wiki/Cat#Section
    /^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/wiki\/([^#?]+)/,
    // https://en.wikipedia.org/w/index.php?title=Cat
    // https://zh.wikipedia.org/w/index.php?title=太阳帆&action=purge
    /^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/w\/index.php\?title=([^#&]+)/
  ];
  for (let a = 0; a < r.length; a++) {
    const n = r[a].exec(e);
    if (n)
      return { lang: n[1], mobile: !!n[2], title: pi(n[3]) };
  }
  return null;
}, R = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, va = () => window.navigator.onLine, ka = (e) => ["ar", "arc", "arz", "dv", "fa", "ha", "he", "khw", "ks", "ku", "ps", "ur", "yi", "pnb", "ckb", "mzn", "glk", "ug", "sd", "azb", "lrc"].indexOf(e) === -1 ? "ltr" : "rtl", yi = {
  format: "json",
  formatversion: 2,
  origin: "*"
}, ba = (e, r) => (r = lr(lr({}, yi), r), `https://${e}.wikipedia.org/w/api.php` + "?" + Object.keys(r).map((n) => `${n}=${encodeURIComponent(r[n])}`).join("&")), _i = (e) => e.replace(/https:\/\/(.*?)\./, (r) => r + "m."), sa = (e) => {
  const r = new window.DOMParser().parseFromString(e, "text/html");
  for (const a of r.querySelectorAll("span"))
    a.style.display === "none" && a.remove();
  return r.body.textContent || "";
}, hi = (e) => mi.sanitize(e), da = () => ({ height: window.innerHeight, width: window.innerWidth }), Ye = () => "wprov=wppw2" + (R ? "t" : ""), Ge = (e, r, a, n = !0) => `https://${e}${a ? ".m" : ""}.wikipedia.org/wiki/${encodeURIComponent(r)}${n ? `?${Ye()}` : ""}`, ja = () => {
  console.log("Wikipedia Preview - version 1.10.0 (5dd2d45)");
}, ga = (...e) => {
  console.error.apply(console, e);
}, wi = {
  "@metadata": {
    authors: [
      "MRidhaAJ"
    ]
  },
  "continue-reading": "إقره بعد",
  "gallery-loading-error": "صار شي غلط وإنته تحمل هاي الصورة",
  "gallery-loading-error-offline": "ماكو نت",
  "gallery-loading-error-refresh": "حدث",
  "gallery-loading-still": "بعده جاي يحمل",
  "gallery-unknown-author": "المؤلف ما تعرفه",
  "preview-error-message": "أكو مشكلة وإنته تعرض النتيجة",
  "preview-console-error-message": "العرض مو موجود لهاي المقالة '1$' (لغة:2$)",
  "read-on-wiki": "إقرا على ويكيبيديا",
  "read-more": "إقرا بعد على ويكيبيديا",
  "preview-disambiguation-message": "هاذ العنوان <strong>$1>/strong يشبه أكثر من مقالة وحدة على ويكيبيديا.",
  "preview-offline-message": "ماكو نت",
  "preview-offline-cta": "عيدها مرة ثانية"
}, vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wi
}, Symbol.toStringTag, { value: "Module" })), ki = {
  "@metadata": {
    authors: [
      "Katelem"
    ]
  },
  "continue-reading": "Fo isi kifuk",
  "read-more": "Fuk owuwa ofifi me Wìkìpedia"
}, bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ki
}, Symbol.toStringTag, { value: "Module" })), ji = {
  "@metadata": {
    authors: [
      "Proabscorp!"
    ]
  },
  "continue-reading": "पढ़ना जारी रखौ",
  "gallery-loading-error": "हैय चित्र क लोड करै मँ त्रुटि होलौ छेलै",
  "gallery-loading-error-offline": "कोय इंटरनेट कनेक्शन उपलब्ध नाय छौं।",
  "gallery-loading-error-refresh": "टटका करौ",
  "gallery-loading-still": "अभीयो लोड होय रहलौ छौं",
  "gallery-unknown-author": "लेखक अज्ञात छौं",
  "preview-error-message": "हैय पूर्वावलोकन क प्रदर्शित करै घड़ियाँ एगो समस्या होलौं।",
  "preview-console-error-message": "लेख '$1' लेली पूर्वावलोकन अनुपलब्ध (भाषा: $2)",
  "read-on-wiki": "विकिपीडिया प पढ़ौ",
  "read-more": "विकिपीडिया प आरू पढ़ौ",
  "preview-disambiguation-message": "शीर्षक <strong>$1</strong> विकिपीडिया प एगो सँ अधिक लेख सँ संबंधित छै।",
  "preview-offline-message": "कोय इंटरनेट कनेक्शन उपलब्ध नाय छौं।",
  "preview-offline-cta": "फेनु प्रयास करौ"
}, Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ji
}, Symbol.toStringTag, { value: "Module" })), Ti = {
  "@metadata": {
    authors: [
      "Hhaboh162002",
      "Meno25",
      "NEHAOUA",
      "محمد أحمد عبد الفتاح"
    ]
  },
  "continue-reading": "مواصلة القراءة",
  "gallery-loading-error": "حدث خطأ أثناء تحميل هذه الصورة",
  "gallery-loading-error-offline": "لا يوجد اتصال متاح بالإنترنت.",
  "gallery-loading-error-refresh": "تحديث",
  "gallery-loading-still": "جاري التحميل",
  "gallery-unknown-author": "المؤلف غير معروف",
  "preview-error-message": "كانت هناك مشكلة في عرض هذه المعاينة.",
  "preview-console-error-message": "العرض غير متوفر للمقالة '$1' (اللغة: $2)",
  "read-on-wiki": "اقرأ على ويكيبيديا",
  "read-more": "اقرأ المزيد عن ويكيبيديا",
  "preview-disambiguation-message": "العنوان <strong>$1</strong> ذو صلة بأكثر من مقالة واحدة على ويكيبيديا.",
  "preview-offline-message": "لا يوجد اتصال متاح بالإنترنت.",
  "preview-offline-cta": "حاول مرة أخرى"
}, $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ti
}, Symbol.toStringTag, { value: "Module" })), Oi = {
  "@metadata": {
    authors: [
      "Mohsin Ali"
    ]
  },
  "continue-reading": "পঢ়া অব্যাহত ৰাখক",
  "gallery-loading-error": "এই ছবিখন ল'ড কৰোঁতে কিবা ত্ৰুটি ঘটিছে",
  "gallery-loading-error-offline": "ইণ্টাৰনেট সংযোগ উপলব্ধ নহয়।",
  "gallery-loading-error-refresh": "সতেজ কৰক",
  "gallery-loading-still": "এতিয়াও ল'ড হৈ আছে",
  "gallery-unknown-author": "লেখক অজ্ঞাত",
  "preview-error-message": "এই পূৰ্বলোকনটো দেখুৱাওঁতে কিবা সমস্যা হৈছে।",
  "preview-console-error-message": "প্ৰবন্ধ '$1'ৰ বাবে পূৰ্বলোকন উপলব্ধ নহয় (ভাষা: $2)",
  "read-on-wiki": "ৱিকিপিডিয়াত পঢ়ক",
  "read-more": "ৱিকিপিডিয়াত অধিক পঢ়ক",
  "preview-disambiguation-message": "<strong>$1</strong> শীৰ্ষকটো ৱিকিপিডিয়াৰ একাধিক প্ৰবন্ধৰ সৈতে সম্পৰ্কিত।",
  "preview-offline-message": "ইণ্টাৰনেট সংযোগ উপলব্ধ নহয়।",
  "preview-offline-cta": "আকৌ চেষ্টা কৰক"
}, zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oi
}, Symbol.toStringTag, { value: "Module" })), Ai = {
  "@metadata": {
    authors: [
      "Augustus A C",
      "Gazimagomedov",
      "Omarov M."
    ]
  },
  "continue-reading": "Жеги цӀализе",
  "gallery-loading-error": "Гьаб сурат жаниреххулаго мекъ лӀугьана",
  "gallery-loading-error-offline": "Интернеталде рухь гьечӀо.",
  "gallery-loading-error-refresh": "ЦӀигьабизе",
  "gallery-loading-still": "ГъоркьцӀай унеб буго",
  "gallery-unknown-author": "Автор лъларо",
  "preview-error-message": "Цебеккун хал гьабулеб мехалъ гъалатӀ лъугӀана",
  "preview-console-error-message": "'$1' макъалаялъул цебеккун хал гьабун бажаруларо (мацӀ: $2)",
  "read-on-wiki": "Википедиялда цӀализе",
  "read-more": "ЦӀикӀкӀун цӀале Википедиялда",
  "preview-disambiguation-message": "Гьаб <strong>$1</strong> абураб цӀар Википедиялда бугеб чанго гьумералъе данде ккола.",
  "preview-offline-message": "Интернеталде рухь гьечӀо.",
  "preview-offline-cta": "Цоги нухалъ хӀалбихье"
}, Ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ai
}, Symbol.toStringTag, { value: "Module" })), Mi = {
  "@metadata": {
    authors: [
      "AZISS",
      "Şeyx Şamil"
    ]
  },
  "continue-reading": "Oxumağa davam et",
  "gallery-loading-error": "Bu şəkili yükləyərkən xəta baş verdi",
  "gallery-loading-error-offline": "İnternet bağlantısı yoxdur.",
  "gallery-loading-error-refresh": "Yenilə",
  "gallery-loading-still": "Hələ yüklənir",
  "gallery-unknown-author": "Naməlum müəllif",
  "preview-error-message": "Səhifəyə ilkin baxış göstərilməsi ilə bağlı çətinlik yarandı",
  "preview-console-error-message": "' $1 ' məqaləsi üçün önizləmə mümkün deyil (Dil: $2 )",
  "read-on-wiki": "Vikipediyada oxu",
  "read-more": "Vikipediyada daha ətraflı oxu",
  "preview-disambiguation-message": "<strong>$1</strong> başlığı Vikipediyada birdən çox məqalə ilə bağlıdır.",
  "preview-offline-message": "İnternet bağlantısı yoxdur.",
  "preview-offline-cta": "Yenidən cəhd edin"
}, Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mi
}, Symbol.toStringTag, { value: "Module" })), Li = {
  "@metadata": {
    authors: [
      "Roustammr",
      "Sagan"
    ]
  },
  "continue-reading": "Уҡыуҙы дауам итергә",
  "gallery-loading-error": "Рәсемде йөкмәткән ваҡытта хата килеп сыҡты",
  "gallery-loading-error-offline": "Интернетҡа тоташыу юҡ",
  "gallery-loading-error-refresh": "Яңыртырға",
  "gallery-loading-still": "Тәйәү дауам ителә",
  "gallery-unknown-author": "Билдәһеҙ автор",
  "preview-error-message": "Алдан ҡараған ваҡытта хата килеп сыҡты",
  "preview-console-error-message": "'$1' мәҡәләһен алдан ҡарап булмай (Тел: $2)",
  "read-on-wiki": "Википедияла уҡырға",
  "read-more": "Был турала күберәк Википедияла уҡырға",
  "preview-disambiguation-message": "<strong>$1</strong> исеме Википедияла берҙән күберәк мәҡәлә исеменә ҡарай",
  "preview-offline-message": "Интернетҡа тоташыу юҡ",
  "preview-offline-cta": "Яңынан ҡабатлап ҡарарға"
}, qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Li
}, Symbol.toStringTag, { value: "Module" })), Wi = {
  "@metadata": {
    authors: [
      "Chinamoonroll",
      "Joseagush"
    ]
  },
  "continue-reading": "Lanturang ngawacén",
  "gallery-loading-error": "Wénten sané iwang ri tatkala uah gambar",
  "gallery-loading-error-offline": "Nénten wénten konéksi internét.",
  "gallery-loading-error-refresh": "Segerang",
  "gallery-loading-still": "Tasih ngantosin",
  "gallery-unknown-author": "$1 Panyurat nénten kauningin",
  "preview-error-message": "Wénten pikobet rikala ngédengang pratayang puniki.",
  "preview-console-error-message": "Pracingak tqn kasedia antuk suratan '$1' (Basa: $2)",
  "read-on-wiki": "Wacén ring Wikipédia",
  "read-more": "Lanturang wacén ring Wikipédia",
  "preview-disambiguation-message": "Murda <strong>$1</strong> kakait langkung saking satunggal suratan ring Wikipédia.",
  "preview-offline-message": "Nénten wénten konéksi internét.",
  "preview-offline-cta": "Coba malih"
}, xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wi
}, Symbol.toStringTag, { value: "Module" })), Ni = {
  "@metadata": {
    authors: [
      "Mucalexx"
    ]
  },
  "continue-reading": "Mi'm lessen weiderdoah",
  "gallery-loading-error": "Ban Loon voh dém Büdel hod's an Feeler geem.",
  "gallery-loading-error-offline": "Es is koah Internetvabindung vurhánden",
  "gallery-loading-error-refresh": "Aktualisian",
  "gallery-loading-still": "Werd noh gloon",
  "gallery-unknown-author": "Urheewer néd bekánnt",
  "preview-error-message": "Es hod a Próblém ba da Áhzoag vo dera Vurschau geem.",
  "preview-console-error-message": "Vurschau fier Artiké „$1“ néd vafiagbor (Sprooch: $2)",
  "read-on-wiki": "In da Wikipedia leesen",
  "read-more": "Mearer ba da Wikipedia",
  "preview-disambiguation-message": "Da Titel <strong>$1</strong> beziagt sé auf mearer ois wia oan Artiké a'da Wikipedia.",
  "preview-offline-message": "Es is koah Internetvabindung vurhánden",
  "preview-offline-cta": "Nohamoi vasuachen"
}, Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ni
}, Symbol.toStringTag, { value: "Module" })), Ci = {
  "@metadata": {
    authors: [
      "Moshtank"
    ]
  },
  "continue-reading": "وانگءِ دامدار",
  "gallery-loading-error": "اے اکسءِ گݔجگءِ ٹݔما مِشتِکے پݔش آتک",
  "gallery-loading-error-offline": "شمئی اینترنت کَھت اِنت۔",
  "gallery-loading-error-refresh": "نۏک کنگ",
  "gallery-loading-still": "ھنگت گݔجَگئن/لود بییگئن",
  "gallery-unknown-author": "ناپججارݔن لِککۏک",
  "preview-error-message": "اے پݔشسۏجءِ سۏج دیگ ٹݔما مِشتِکے پݔش آتک۔",
  "preview-console-error-message": "پݔشسۏج پہ '$1' ءِ نبشتانکا دسرسا نئت(زبان:$2)",
  "read-on-wiki": "ویکیپدیاءِ سرئی بوان",
  "read-more": "گݔشتر ویکی پدیاءِ سرا بوانی",
  "preview-disambiguation-message": "سرگال <strong>$1</strong> مہ ویکیپدیا گۏن گݔش چہ یک نبشتانکے امگرنچ اِنت۔",
  "preview-offline-message": "شمئی اینترنت کَھت اِنت۔",
  "preview-offline-cta": "پدا کۏشست کن"
}, Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ci
}, Symbol.toStringTag, { value: "Module" })), Di = {
  "@metadata": {
    authors: [
      "Renessaince",
      "W"
    ]
  },
  "continue-reading": "Працягваць чытаньне",
  "gallery-loading-error": "Пры запампоўцы гэтага відарысу здарылася памылка.",
  "gallery-loading-error-offline": "Няма даступнага злучэньня зь Сецівам.",
  "gallery-loading-error-refresh": "Абнавіць",
  "gallery-loading-still": "Дагэтуль пампуецца",
  "gallery-unknown-author": "Творца невядомы(-ая)",
  "preview-error-message": "Падчас адлюстраваньня гэтага перадпрагляду ўзьнікла складанасьць.",
  "preview-console-error-message": "Прагляд для артыкулу '$1' немагчымы (мова: $2)",
  "read-on-wiki": "Чытаць у Вікіпэдыі",
  "read-more": "Чытаць больш у Вікіпэдыі",
  "preview-disambiguation-message": "Загаловак <strong>$1</strong> тычыцца больш як аднаго артыкула ў Вікіпэдыі.",
  "preview-offline-message": "Няма даступнага злучэньня зь Сецівам.",
  "preview-offline-cta": "Спрабаваць зноў"
}, Hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Di
}, Symbol.toStringTag, { value: "Module" })), Ui = {
  "@metadata": {
    authors: [
      "Bangrapip"
    ]
  },
  "continue-reading": "Terus Ngebaca",
  "gallery-loading-error": "Ada ngablu pas munggah ni gambar",
  "gallery-loading-error-offline": "Kaga' ada bungselan internèt.",
  "gallery-loading-error-refresh": "Segerin",
  "gallery-loading-still": "Masing munggah",
  "gallery-unknown-author": "Mualip kaga' ditauin",
  "preview-error-message": "Ada mas'alah pas mampangin ni terawangan.",
  "preview-console-error-message": "Terawangan kaga' ada bakal artikel '$' (Basa: $2)",
  "read-on-wiki": "Baca di Wikipédi",
  "read-more": "Baca lebi lanjut pasal Wikipédi",
  "preview-disambiguation-message": "Judul <strong>$1</strong> ada kaètan ama lebi deri atu artikel di Wikipédi.",
  "preview-offline-message": "Kaga' ada bungselan internèt.",
  "preview-offline-cta": "Jal lagi"
}, Bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" })), Fi = {
  "@metadata": {
    authors: [
      "Ezagren"
    ]
  },
  "continue-reading": "Lanjutakan Mambaca",
  "gallery-loading-error": "Ada kasalahan wayah mamuat gambar ngini.",
  "gallery-loading-error-offline": "Kadada sambungan internét.",
  "gallery-loading-error-refresh": "Sigarakan",
  "gallery-loading-still": "Masih mamuat",
  "gallery-unknown-author": "$1 Panulis kada dipinandui",
  "preview-error-message": "Ada ungkara wayah manampaiakan titilikan ngini.",
  "preview-console-error-message": "Titilikan kadada gasan artikal '$1' (Basa: $2)",
  "read-on-wiki": "Baca di Wikipidia",
  "read-more": "Baca labih lanjut pasal Wikipidia",
  "preview-disambiguation-message": "Judul <strong>$1</strong> tarait lawan labih matan satu artikal di Wikipidia.",
  "preview-offline-message": "Kadada sambungan internét.",
  "preview-offline-cta": "Cubai pulang"
}, Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fi
}, Symbol.toStringTag, { value: "Module" })), Yi = {
  "@metadata": {
    authors: [
      "Khun Chit Phuu",
      "ခွန်ဖန်ဒွဲ့"
    ]
  },
  "continue-reading": "အဝ်ႏထွားဒေါ့ꩻ သွုပ်ယင်းသွူ",
  "gallery-loading-error": "အဝ်ႏဒင်ႏထင်ႏရုက်ပွုံႏယိုကျာꩻ အမာႏအဝ်ႏထိုꩻသွူ။",
  "gallery-loading-error-offline": "အဉ်တာနဲတ်လိုင်ႏ အဲဉ်ထဝ်းသွူ။",
  "gallery-loading-error-refresh": "ကောႏချာယင်းအထျꩻ",
  "gallery-loading-still": "အဝ်ႏမာꩻနေဒွိုန်းထာꩻမာꩻတွင်ꩻ",
  "gallery-unknown-author": "ကေားတဲမ်းသား သေတဝ်း",
  "preview-error-message": "အဝ်ႏအွဉ်ႏနယ် ထွားကျိုႏရီးယိုတွင်ꩻ ကိစ္စတဗာႏ ပေါႏထိုꩻသွူ။",
  "preview-console-error-message": "ထွားကျိုႏရီး ရွမ်ဖြုဲင်ꩻ '$1' အတာႏ ထီႏတဝ်းတမုဲင်ꩻမုဲင်ꩻသွူ။ (ဘာႏသာႏငေါဝ်းငွါ: $2)",
  "read-on-wiki": "ဟော်ꩻထွားသွော့ꩻ ဝီခီပီးဒီးယားကို",
  "read-more": "ထွား‌ထဲင်းယင်း ဝီခီပီးဒီးယားကို",
  "preview-disambiguation-message": "ကတူႏစဲဉ်ႏ <strong>$1</strong> နဝ်ꩻ အဝ်ႏဆွိုက်စပ်တွမ်ႏရွမ်ဖြုဲင်ꩻ ဝီခီပီးဒီးယားလောင်း တဗာႏလွုမ်ꩻကာႏတဝ်းသွူ။",
  "preview-offline-message": "ထာꩻသွုပ်ဆွိုက် အဉ်တာနဲက် အဲဉ်ထဝ်းသွူ။",
  "preview-offline-cta": "ကျိုꩻစာꩻထဲင်း တလဲင်ႏဟုဲင်း"
}, Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yi
}, Symbol.toStringTag, { value: "Module" })), Ki = {
  "@metadata": {
    authors: [
      "Titodutta",
      "Yahya",
      "আফতাবুজ্জামান"
    ]
  },
  "continue-reading": "পড়া অব্যাহত রাখুন",
  "gallery-loading-error": "এই ছবি লোড করার সময় একটি ত্রুটি হয়েছে",
  "gallery-loading-error-offline": "কোনও ইন্টারনেট সংযোগ নেই।",
  "gallery-loading-error-refresh": "পুনঃসতেজ করুন",
  "gallery-loading-still": "এখনও লোড হচ্ছে",
  "gallery-unknown-author": "লেখক অজানা",
  "preview-error-message": "প্রাকদর্শন দেখানোর সময় একটি সমস্যা হয়েছে।",
  "preview-console-error-message": "'$1' নিবন্ধের পূর্বরূপ অনুপলব্ধ (ভাষা: $2 )",
  "read-on-wiki": "উইকিপিডিয়ায় পড়ুন",
  "read-more": "উইকিপিডিয়ায় আরও পড়ুন",
  "preview-disambiguation-message": "<strong>$1</strong> শিরোনাম একাধিক উইকিপিডিয়া নিবন্ধের সাথে সম্পর্কিত।",
  "preview-offline-message": "কোনও ইন্টারনেট সংযোগ নেই।",
  "preview-offline-cta": "আবার চেষ্টা করুন"
}, Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ki
}, Symbol.toStringTag, { value: "Module" })), Ji = {
  "@metadata": {
    authors: [
      "Adriendelucca",
      "Huñvreüs"
    ]
  },
  "continue-reading": "Kenderc'hel da lenn",
  "gallery-loading-error": "Ur fazi ez eus bet en ur gargañ ar skeudenn-mañ",
  "gallery-loading-error-offline": "Kennask internet ebet.",
  "gallery-loading-error-refresh": "Freskaat",
  "gallery-loading-still": "O kargañ",
  "gallery-unknown-author": "Aozer dianav",
  "preview-error-message": "Ur fazi zo bet en ur ziskouez an alberz-mañ",
  "preview-console-error-message": 'Rakwel ebet da gaout evit ar pennad "$1" (Yezh: $2)',
  "read-on-wiki": "Lenn war Wikipedia",
  "read-more": "Lenn muioc'h war Wikipedia",
  "preview-disambiguation-message": "An titl <strong>$1</strong> a zo liammet ouzh meur a bennad war Wikipedia.",
  "preview-offline-message": "Kennask internet ebet.",
  "preview-offline-cta": "Klask en-dro"
}, Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ji
}, Symbol.toStringTag, { value: "Module" })), Qi = {
  "@metadata": {
    authors: [
      "Filipinayzd"
    ]
  },
  "continue-reading": "Padagusa a pagbasa",
  "gallery-loading-error": "Agko sala sa pagkarga kading imahe",
  "gallery-loading-error-offline": "Udang koneksyon sa internet.",
  "gallery-loading-error-refresh": "Uliton",
  "gallery-loading-still": "Kinakarga pa",
  "gallery-unknown-author": "Diri isi a kagsurat",
  "preview-error-message": "Agko sala mantang ipinapabayad ading patan-aw",
  "read-on-wiki": "Magbasa sa Wikipedia",
  "read-more": "Magbasa pa sa Wikipedia",
  "preview-disambiguation-message": "Ana titulong <strong>$1</strong> katakod sa dakul pa sa usad na artikulo sa Wikipedia.",
  "preview-offline-message": "Udang koneksyon sa internet.",
  "preview-offline-cta": "Purbari dayday"
}, en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qi
}, Symbol.toStringTag, { value: "Module" })), rn = {
  "@metadata": {
    authors: [
      "Fitoschido",
      "Mguix"
    ]
  },
  "continue-reading": "Continua llegint",
  "gallery-loading-error": "S'ha produït un error en carregar aquesta imatge",
  "gallery-loading-error-offline": "Cap connexió d'internet disponible.",
  "gallery-loading-error-refresh": "Actualitzar",
  "gallery-loading-still": "carregant-se",
  "gallery-unknown-author": "Autoria desconeguda",
  "preview-error-message": "S'ha produït un problema en mostrar aquesta previsualització.",
  "preview-console-error-message": "Previsualització no disponible per a l'article '$1' (Idioma: $2)",
  "read-on-wiki": "Llegiu a la Viquipèdia",
  "read-more": "Llegeixi més en Viquipèdia",
  "preview-disambiguation-message": "El títol <strong>$1</strong> està enllaçat a més d'un article a la Viquipèdia.",
  "preview-offline-message": "Cap connexió d'internet disponible.",
  "preview-offline-cta": "Torneu-ho a provar"
}, an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn
}, Symbol.toStringTag, { value: "Module" })), nn = {
  "@metadata": {
    authors: [
      "Умар"
    ]
  },
  "continue-reading": "Кхин дӀа йеша",
  "gallery-loading-error": "Сурт чудоккхуш гӀалат даьлла",
  "gallery-loading-error-offline": "Интернет йац.",
  "gallery-loading-error-refresh": "Карлайаккха",
  "gallery-loading-still": "Чуйаккхар дӀадоьдуш ду",
  "gallery-unknown-author": "Ца вевза автор.",
  "preview-error-message": "Хьалхе хьожуш гӀалат даьлла.",
  "preview-console-error-message": "Хьалхе хьажар '$1' йаззаман дац (мотт: $2)",
  "read-on-wiki": "Йеша Википедехь",
  "read-more": "Кхин сов йеша Википедехь",
  "preview-disambiguation-message": "<strong>$1</strong> цӀе йолуш цхьаналла а сов йаззам бу Википедехь.",
  "preview-offline-message": "Интернет йац.",
  "preview-offline-cta": "Кхин цӀа гӀорта"
}, on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn
}, Symbol.toStringTag, { value: "Module" })), tn = {
  "@metadata": {
    authors: [
      "Halbast"
    ]
  },
  "continue-reading": "بەردەوام ببە لە خوێندنەوە",
  "gallery-loading-error": "ھەڵەیەک لە بارکردنی ئەم وێنەیە ڕوویدا",
  "gallery-loading-error-offline": "ھیچ پەیوەندییەکی ئینتەرنێت بەردەست نییە.",
  "gallery-loading-error-refresh": "نوێکردنەوە",
  "gallery-loading-still": "ھێشتا لە بارکردن دایە",
  "gallery-unknown-author": "نووسەر نەزانراوە",
  "preview-error-message": "کێشەیەک ھەبوو لە پیشاندنانی ئەم پێشبینییەدا.",
  "preview-console-error-message": "پێشبینی بەردەست نییە بۆ وتاری '$1' (زمان: $2)",
  "read-on-wiki": "بیخوێنەوە لە ویکیپیدیا",
  "read-more": "زیاتر بخوێنەوە لە ویکیپیدیا",
  "preview-disambiguation-message": "ناونیشانی <strong>$1</strong> پەیوەندیی بە زیاتر لە یەک وتارەوە ھەیە لە ویکیپیدیا.",
  "preview-offline-message": "ھیچ پەیوەندییەکی ئینتەرنێت بەردەست نییە.",
  "preview-offline-cta": "ھەوڵ بدەرەوە"
}, ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn
}, Symbol.toStringTag, { value: "Module" })), sn = {
  "@metadata": {
    authors: [
      "Antho201723"
    ]
  },
  "continue-reading": "Continua à leghje",
  "gallery-loading-error": "Caricamentu fiascatu di sta figura",
  "gallery-loading-error-offline": "Varuna cunnessione internet",
  "gallery-loading-error-refresh": "Attualizà",
  "gallery-loading-still": "Si carica",
  "gallery-unknown-author": "Autore scunisciutu",
  "preview-error-message": "Ci hè statu un prublema durante a visualisazione di l'anteprima.",
  "preview-console-error-message": "Anteprima indispunibile per l'articulu '$1' (Lingua: $2)",
  "read-on-wiki": "Leghje nant'à Wikipedia",
  "read-more": "Per sapene di più nant'à Wikipedia",
  "preview-disambiguation-message": "U titulu <strong>$1</strong> hè in leia incù più d'un articulu nant'à Wikipedia.",
  "preview-offline-message": "Varruna cunnession internet dispunibile.",
  "preview-offline-cta": "Turnà à pruvà"
}, dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), gn = {
  "@metadata": {
    authors: [
      "TayfunEt.",
      "Zolgoyo"
    ]
  },
  "continue-reading": "Oqumağa devam et",
  "gallery-loading-error": "Resimni yükler ekende hata çıqqa berdi",
  "gallery-loading-error-offline": "İnternet bağlantısı qısıtlı.",
  "gallery-loading-error-refresh": "Yañart",
  "gallery-loading-still": "Daa yüklene",
  "gallery-unknown-author": "Yaratıcı bilinmey",
  "preview-error-message": "Bu önizlemeni körünti ettirken sorun çıqtı.",
  "preview-console-error-message": "'$1' maqalesi içün önizleme mümkün degil (Til: $2)",
  "read-on-wiki": "Vikipediyada oqu",
  "read-more": "Vikipediyada daa oqumağa mevcut",
  "preview-disambiguation-message": "<strong>$1</strong> Vikipediyada birden fazla maqalenen ilgili.",
  "preview-offline-message": "İnternet bağlantısı qısıtlı.",
  "preview-offline-cta": "Tekrar deneñiz"
}, un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn
}, Symbol.toStringTag, { value: "Module" })), cn = {
  "@metadata": {
    authors: [
      "Matěj Suchánek",
      "Robins7"
    ]
  },
  "continue-reading": "Pokračovat ve čtení",
  "gallery-loading-error": "Při načítání tohoto obrázku došlo k chybě",
  "gallery-loading-error-offline": "Není dostupné internetové připojení.",
  "gallery-loading-error-refresh": "Obnovit",
  "gallery-unknown-author": "Autor neznámý",
  "preview-error-message": "Při zobrazování tohoto náhledu se objevil problém.",
  "read-on-wiki": "Přečíst na Wikipedii",
  "read-more": "Přečíst více na Wikipedii",
  "preview-disambiguation-message": "Název <strong>$1</strong> souvisí s více než jedním článkem na Wikipedii.",
  "preview-offline-message": "Není dostupné internetové připojení.",
  "preview-offline-cta": "Zkusit znovu"
}, mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), pn = {
  "@metadata": {
    authors: [
      "Afalau",
      "Robin Owain"
    ]
  },
  "continue-reading": "Parhau i Ddarllen",
  "gallery-loading-error": "Cafwyd nam yn llwytho'r ddelwedd hon",
  "gallery-loading-error-offline": "Dim cysylltiad rhyngrwyd.",
  "gallery-loading-error-refresh": "Adfywio",
  "gallery-loading-still": "Dal wrthi'n llwytho",
  "gallery-unknown-author": "Awdur anhysbys",
  "preview-error-message": "Gafwyd gwall tra'n ceisio arddangos y rhagolwg",
  "preview-console-error-message": "Nid yw'r rhagolwg ar gael am erthygl '$1' (Iaith: $2)",
  "read-on-wiki": "Darllen ar Wicipedia",
  "read-more": "Darllen rhagor ar Wicipedia",
  "preview-disambiguation-message": "Mae'r teitl <strong>$1</strong> yn berthnasol i fwy nag un erthygl ar Wicipedia.",
  "preview-offline-message": "Dim cysylltiad rhyngrwyd.",
  "preview-offline-cta": "Ceisiwch eto"
}, fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pn
}, Symbol.toStringTag, { value: "Module" })), yn = {
  "@metadata": {
    authors: [
      "Peterleth",
      "Saederup92"
    ]
  },
  "continue-reading": "Fortsæt læsning",
  "gallery-loading-error": "Der opstod en fejl under indlæsning af dette billede",
  "gallery-loading-error-offline": "Ingen internetforbindelse tilgængelig.",
  "gallery-loading-error-refresh": "Genindlæs",
  "gallery-loading-still": "Indlæser stadig",
  "gallery-unknown-author": "Ukendt forfatter",
  "preview-error-message": "Der opstod et problem under visning af denne forhåndsvisning.",
  "preview-console-error-message": "Forhåndsvisning er ikke tilgængelig for artiklen '$1' (Sprog: $2)",
  "read-on-wiki": "Læs på Wikipedia",
  "read-more": "Læs mere på Wikipedia",
  "preview-disambiguation-message": "Titel <strong>$1</strong> er relateret til mere end én artikel på Wikipedia.",
  "preview-offline-message": "Ingen internetforbindelse tilgængelig.",
  "preview-offline-cta": "Prøv igen"
}, _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yn
}, Symbol.toStringTag, { value: "Module" })), hn = {
  "@metadata": {
    authors: [
      "BPX-web",
      "DraconicDark",
      "Elliot",
      "ManuelFranz"
    ]
  },
  "continue-reading": "Mit dem Lesen fortfahren",
  "gallery-loading-error": "Beim Laden dieses Bildes gab es einen Fehler.",
  "gallery-loading-error-offline": "Es ist keine Internetverbindung vorhanden.",
  "gallery-loading-error-refresh": "Aktualisieren",
  "gallery-loading-still": "Wird noch geladen",
  "gallery-unknown-author": "Urheber unbekannt.",
  "preview-error-message": "Es gab ein Problem bei der Anzeige dieser Vorschau.",
  "preview-console-error-message": "Vorschau für Artikel „$1“ nicht verfügbar (Sprache: $2)",
  "read-on-wiki": "Auf Wikipedia lesen",
  "read-more": "Mehr bei Wikipedia",
  "preview-disambiguation-message": "Titel <strong>$1</strong> bezieht sich auf mehr als einen Artikel auf Wikipedia.",
  "preview-offline-message": "Es ist keine Internetverbindung vorhanden.",
  "preview-offline-cta": "Erneut versuchen"
}, wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), vn = {
  "@metadata": {
    authors: [
      "1917 Ekim Devrimi",
      "GolyatGeri",
      "Mirzali",
      "Orbot707"
    ]
  },
  "continue-reading": "Wanayışi dewam kerê",
  "gallery-loading-error": "No asange bar kerdış de xeta veciye",
  "gallery-loading-error-offline": "Gıreniyeyi interneti çıniyo",
  "gallery-loading-error-refresh": "Anewe kerê",
  "gallery-loading-still": "Hewna beno bar",
  "gallery-unknown-author": "Nuştekarê nêzanıyeni",
  "preview-error-message": "Mocnayışê nê verqayti de xırabiye esta.",
  "preview-console-error-message": "Verasayış serba pela '$1' nêguriyeno (Zıwann: $2)",
  "read-on-wiki": "Wikipediya de bıwanê",
  "read-more": "Wikipedia sero tayna bıwanê",
  "preview-disambiguation-message": "Serey <strong>$1</strong> yew ra zêde meqaleyê Wikipedia ya eleqeyıno.",
  "preview-offline-message": "Gıreniyeyi interneti çıniyo",
  "preview-offline-cta": "Anciya bıcerebne"
}, kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vn
}, Symbol.toStringTag, { value: "Module" })), bn = {
  "@metadata": {
    authors: [
      "Geraki",
      "Norhorn"
    ]
  },
  "continue-reading": "Συνέχεια ανάγνωσης",
  "gallery-loading-error": "Παρουσιάστηκε σφάλμα κατά τη φόρτωση αυτής της εικόνας",
  "gallery-loading-error-offline": "Δεν υπάρχει διαθέσιμη σύνδεση στο διαδίκτυο.",
  "gallery-loading-error-refresh": "Ανανέωση",
  "gallery-loading-still": "Ακόμα φορτώνει",
  "gallery-unknown-author": "Άγνωστος συγγραφέας",
  "preview-error-message": "Υπήρξε κάποιο πρόβλημα κατά την εμφάνιση αυτής της προεπισκοπήσης.",
  "preview-console-error-message": "Η προεπισκόπηση δεν είναι διαθέσιμη για το λήμμα «$1» (Γλώσσα: $2)",
  "read-on-wiki": "Διαβάστε στη Βικιπαίδεια",
  "read-more": "Διαβάστε περισσότερα στη Βικιπαίδεια",
  "preview-disambiguation-message": "Ο τίτλος <strong>$1</strong> σχετίζεται με περισσότερα από ένα λήμματα στη Βικιπαίδεια.",
  "preview-offline-message": "Δεν υπάρχει διαθέσιμη σύνδεση στο διαδίκτυο.",
  "preview-offline-cta": "Δοκιμάστε ξανά"
}, jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bn
}, Symbol.toStringTag, { value: "Module" })), Sn = {
  "@metadata": {
    authors: [
      "Alefar"
    ]
  },
  "continue-reading": "Continue Reading",
  "gallery-loading-error": "There was an error loading this image!",
  "gallery-loading-error-offline": "No internet connection available!",
  "gallery-loading-error-refresh": "Refresh",
  "gallery-loading-still": "Still loading",
  "gallery-unknown-author": "Author unknown",
  "preview-error-message": "There was an issue while displaying this preview.",
  "read-on-wiki": "Read on Wikipedia",
  "read-more": "Read more on Wikipedia",
  "preview-offline-message": "No internet connection available!",
  "preview-offline-cta": "TRY AGAIN"
}, Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" })), Sa = {
  "continue-reading": "Continue Reading",
  "gallery-loading-error": "There was an error loading this image",
  "gallery-loading-error-offline": "No internet connection available.",
  "gallery-loading-error-refresh": "Refresh",
  "gallery-loading-still": "Still loading",
  "gallery-unknown-author": "Author unknown",
  "preview-error-message": "There was an issue while displaying this preview.",
  "preview-console-error-message": "Preview unavailable for article '$1' (Language: $2)",
  "read-on-wiki": "Read on Wikipedia",
  "read-more": "Read more on Wikipedia",
  "preview-disambiguation-message": "Title <strong>$1</strong> is related to more than one article on Wikipedia.",
  "preview-offline-message": "No internet connection available.",
  "preview-offline-cta": "Try again"
}, $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sa
}, Symbol.toStringTag, { value: "Module" })), On = {
  "@metadata": {
    authors: [
      "Avengium",
      "Fitoschido",
      "Rodney Araujo"
    ]
  },
  "continue-reading": "Continuar leyendo",
  "gallery-loading-error": "Se produjo un error al cargar esta imagen",
  "gallery-loading-error-offline": "No hay conexión a internet disponible.",
  "gallery-loading-error-refresh": "Actualizar",
  "gallery-loading-still": "Todavía sigue cargando",
  "gallery-unknown-author": "Autor desconocido",
  "preview-error-message": "Hubo un problema al mostrar esta previsualización",
  "preview-console-error-message": "Vista previa no disponible para el artículo '$1' (Idioma: $2)",
  "read-on-wiki": "Ver en Wikipedia",
  "read-more": "Leer más en Wikipedia",
  "preview-disambiguation-message": "El título <strong>$1</strong> está relacionado a más de un artículo en Wikipedia.",
  "preview-offline-message": "No hay conexión a internet disponible.",
  "preview-offline-cta": "Reintentar"
}, zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), An = {
  "@metadata": {
    authors: [
      "Darafsh",
      "Jeeputer"
    ]
  },
  "continue-reading": "ادامهٔ مطالعه",
  "gallery-loading-error": "در هنگام بارگذاری این تصویر خطایی رخ داد",
  "gallery-loading-error-offline": "اتصال به اینترنت مقدور نیست.",
  "gallery-loading-error-refresh": "تازه‌سازی",
  "gallery-loading-still": "همچنان در حال بارگیری",
  "gallery-unknown-author": "مؤلف ناشناخته",
  "preview-error-message": "مشکلی هنگام نمایش این پیش‌نمایش پیش آمد.",
  "preview-console-error-message": "پیش‌نمایش برای مقالهٔ '$1' در دسترس نیست (زبان: $2)",
  "read-on-wiki": "در ویکی‌پدیا بخوانید",
  "read-more": "مطالعهٔ بیشتر در ویکی‌پدیا",
  "preview-disambiguation-message": "عنوان <strong>$1</strong> در ویکی‌پدیا با بیش از یک مقاله مرتبط است.",
  "preview-offline-message": "اتصال به اینترنت مقدور نیست.",
  "preview-offline-cta": "تلاش مجدد"
}, En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: An
}, Symbol.toStringTag, { value: "Module" })), Mn = {
  "@metadata": {
    authors: [
      "Gregorynelsonmensah1"
    ]
  },
  "continue-reading": "Toa w'akenkan do",
  "gallery-unknown-author": "Yennyim nyia a ɔkyerɛwee",
  "read-on-wiki": "Kenkan wɔ Wikipedia do",
  "read-more": "Kenkan bi ka ho wɔ Wikipedia do",
  "preview-offline-cta": "Yɛ no bio"
}, Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mn
}, Symbol.toStringTag, { value: "Module" })), Ln = {
  "@metadata": {
    authors: [
      "Actuallyisjoha",
      "Alluk.",
      "Nike",
      "Pyscowicz",
      "SMAUG"
    ]
  },
  "continue-reading": "Jatka lukemista",
  "gallery-loading-error": "Kuvan lataaminen epäonnistui",
  "gallery-loading-error-offline": "Ei Internet-yhteyttä",
  "gallery-loading-error-refresh": "Päivitä",
  "gallery-loading-still": "Ladataan edelleen",
  "gallery-unknown-author": "Tuntematon tekijä",
  "preview-error-message": "Esikatselua ei voida näyttää",
  "preview-console-error-message": "Esikatselu ei ole saatavilla artikkelille ”$1” (kieli: $2)",
  "read-on-wiki": "Lue Wikipediassa",
  "read-more": "Lue lisää Wikipediassa",
  "preview-disambiguation-message": "Otsikko <strong>$1</strong> liittyy useampaan Wikipedia-artikkeliin.",
  "preview-offline-message": "Ei internet-yhteyttä.",
  "preview-offline-cta": "Yritä uudelleen"
}, qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ln
}, Symbol.toStringTag, { value: "Module" })), Wn = {
  "@metadata": {
    authors: [
      "Gomoko",
      "PhilW",
      "Verdy p",
      "Wladek92"
    ]
  },
  "continue-reading": "Continuer à lire",
  "gallery-loading-error": "Une erreur s’est produite durant le chargement de cette image.",
  "gallery-loading-error-offline": "Aucune connexion Internet disponible.",
  "gallery-loading-error-refresh": "Rafraîchir",
  "gallery-loading-still": "Chargement encore en cours",
  "gallery-unknown-author": "Auteur inconnu",
  "preview-error-message": "Un problème est survenu en affichant cet aperçu.",
  "preview-console-error-message": "Aperçu non disponible pour l’article « $1 » (langue : $2)",
  "read-on-wiki": "Lire sur Wikipédia",
  "read-more": "Lire davantage sur Wikipédia",
  "preview-disambiguation-message": "Le titre <strong>$1</strong> est lié à plus d’un article dans Wikipédia.",
  "preview-offline-message": "Aucune connexion Internet disponible.",
  "preview-offline-cta": "Essayez à nouveau"
}, xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn
}, Symbol.toStringTag, { value: "Module" })), Nn = {
  "@metadata": {
    authors: [
      "Beunice",
      "Cinebeunice"
    ]
  },
  "continue-reading": "Continuer à lire",
  "gallery-loading-error": "Une erreur s’est produite durant le chargement de cette image.",
  "gallery-loading-error-offline": "Aucune connexion Internet disponible.",
  "gallery-loading-error-refresh": "Actualiser",
  "gallery-loading-still": "Chargement encore en cours",
  "gallery-unknown-author": "Auteur inconnu",
  "preview-error-message": "Un problème est survenu en affichant cet aperçu.",
  "preview-console-error-message": "Aperçu non disponible pour l’article '$1' (langue : $2)",
  "read-on-wiki": "Lire sur Wikipédia",
  "read-more": "Lire davantage sur Wikipédia",
  "preview-disambiguation-message": "Le titre <strong>$1</strong> est lié à plus d’un article dans Wikipédia.",
  "preview-offline-message": "Aucune connexion Internet disponible.",
  "preview-offline-cta": "Essayez à nouveau"
}, Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nn
}, Symbol.toStringTag, { value: "Module" })), Cn = {
  "@metadata": {
    authors: [
      "Histnou",
      "Istwalezanti"
    ]
  },
  "continue-reading": "Kontinyé li",
  "gallery-loading-error": "Té ni on érè lè nou té ka chajé imaj-lasa",
  "gallery-loading-error-offline": "Pa ni p'on entènèt.",
  "gallery-loading-error-refresh": "Aktiyalizé",
  "gallery-loading-still": "I toujou ka chajé",
  "gallery-unknown-author": "Nou pa konnèt otè-lasa",
  "preview-error-message": "Té ni on pwoblèm toupannan nou té ka afiché prévizyalizasyon-lasa",
  "read-on-wiki": "Li asi Wikipédya",
  "read-more": "Li plis asi Wikipédya",
  "preview-offline-message": "Pa ni p'on entènèt ba-w.",
  "preview-offline-cta": "Woukoumansé"
}, In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn
}, Symbol.toStringTag, { value: "Module" })), Dn = {
  "@metadata": {
    authors: [
      "StarrySky"
    ]
  },
  "continue-reading": "Lean air adhart a’ leughadh",
  "gallery-loading-error": "Bha mearachd ann a' luchdadh an dealbh seo",
  "gallery-loading-error-offline": "Chan eil ceangal eadar-lìn ri fhaighinn.",
  "gallery-loading-error-refresh": "ùraich",
  "gallery-loading-still": "A’ luchdachadh fhathast",
  "gallery-unknown-author": "Ùghdar neo-aithnichte",
  "preview-error-message": "Bha duilgheadas ann fhad 's a bha sinn a' taisbeanadh an ro-shealladh seo.",
  "preview-console-error-message": "Chan eil ro-shealladh ri fhaighinn airson artaigil '$1' (Cànan: $2)",
  "read-on-wiki": "Leugh air Wikipedia",
  "read-more": "Leugh tuilleadh air Wikipedia",
  "preview-disambiguation-message": "Tha an tiotal <strong>$1</strong> co-cheangailte ri barrachd air aon artaigil air Wikipedia.",
  "preview-offline-message": "Chan eil ceangal eadar-lìn ri fhaighinn.",
  "preview-offline-cta": "Feuch a-rithist"
}, Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dn
}, Symbol.toStringTag, { value: "Module" })), Un = {
  "@metadata": {
    authors: [
      "Maria zaos",
      "Toliño"
    ]
  },
  "continue-reading": "Continúe a ler",
  "gallery-loading-error": "Houbo un erro ó cargar esta imaxe",
  "gallery-loading-error-offline": "Non hai dispoñible ningunha conexión a internet.",
  "gallery-loading-error-refresh": "Refrescar",
  "gallery-loading-still": "Cargando",
  "gallery-unknown-author": "Autor descoñecido",
  "preview-error-message": "Houbo un problema ó amosar esta vista previa.",
  "preview-console-error-message": 'Vista previa dispoñible para o artigo "$1" (lingua: $2)',
  "read-on-wiki": "Ler na Wikipedia",
  "read-more": "Ler máis na Wikipedia",
  "preview-disambiguation-message": 'O título "<strong>$1</strong>" está relacionado con máis dun artigo na Wikipedia.',
  "preview-offline-message": "Non hai dispoñible ningunha conexión a internet.",
  "preview-offline-cta": "Ténteo de novo"
}, Bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Un
}, Symbol.toStringTag, { value: "Module" })), Fn = {
  "@metadata": {
    authors: [
      "شیخ"
    ]
  },
  "continue-reading": "خؤندنˇ دۊمباله",
  "gallery-loading-error": "سأب دأنه تصوير جؤرأکشئنه",
  "gallery-loading-error-refresh": "جؤنأگيتن",
  "gallery-loading-still": "هلئه جؤر أردره",
  "preview-error-message": "مۊشکيل دأنه پيش-نمايشˇ نۊشؤن دأن ئبه.",
  "read-on-wiki": "ويکيپديا مئنه خؤندن",
  "read-more": "ويکيپديا مئنه ويشته خؤندن"
}, Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fn
}, Symbol.toStringTag, { value: "Module" })), Yn = {
  "@metadata": {
    authors: [
      "P. S. F. Freitas"
    ]
  },
  "continue-reading": "Emoñe'ẽve",
  "gallery-loading-error": "Oĩkuri peteĩ jejavy ojejupívo ko ta'anga",
  "gallery-loading-error-offline": "Ndaipóri internet joajuha ojeguerekóva.",
  "gallery-loading-error-refresh": "Embopyahu",
  "gallery-loading-still": "Omba'apo gueteri",
  "gallery-unknown-author": "Ndojekuaái ijapohára",
  "preview-error-message": "Oĩkuri peteĩ apuñuái ojehechauka aja ko kuatia recharã.",
  "preview-console-error-message": "Ndaipóri kuatia recharã '$1'-pe g̃uarã (Ñe'ẽ: $2)",
  "read-on-wiki": "Ehecha Vikipetãme",
  "read-more": "Ehechave Vikipetãme",
  "preview-disambiguation-message": "Ko <strong>$1</strong> ojoaju heta kuatiáre Vikipetãme.",
  "preview-offline-message": "Ndaipóri internet joajuha ojeguerekóva.",
  "preview-offline-cta": "Eñeha'ã jey"
}, Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yn
}, Symbol.toStringTag, { value: "Module" })), Kn = {
  "@metadata": {
    authors: [
      "PastelKos"
    ]
  },
  "continue-reading": "Διατελεῖν τὸ ἀναγιγνώσκειν",
  "gallery-loading-error": "Ὑπῆρξε ἁμαρτία τῷ ἐπιφορτίζειν τήνδε τὴν εἰκόνα",
  "gallery-loading-error-offline": "Όὐ διατίθεται διαδυκτίου σύνδεσις.",
  "gallery-loading-error-refresh": "Ἀναψύχειν",
  "gallery-loading-still": "Ἔτι ἐπιφορτίζεται",
  "gallery-unknown-author": "Ἄδηλος συγγραφεύς",
  "preview-error-message": "Ὑπῆρξε ἀπορία τῷ προεπισκοπεῖν",
  "read-on-wiki": "Ἀναγιγνώσκειν τῇ Οὐικιπαιδείᾳ",
  "read-more": "Ἀναγιγνώσκειν πλείω τῇ Οὐικιπαιδείᾳ",
  "preview-disambiguation-message": "Ὁ τίτλος '''$1''' τείνει εἰς πολλὰς ἐγγραφὰς τῇ Οὐικιπαιδείᾳ",
  "preview-offline-message": "Όὐ διατίθεται διαδυκτίου σύνδεσις.",
  "preview-offline-cta": "Πάλιν πειρᾶν"
}, Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" })), Jn = {
  "@metadata": {
    authors: [
      "CptViraj"
    ]
  },
  "continue-reading": "વાંચવાનું ચાલુ રાખો",
  "gallery-loading-error-offline": "કોઈ ઇન્ટરનેટ જોડાણ ઉપલબ્ધ નથી.",
  "gallery-loading-error-refresh": "તાજું કરો",
  "gallery-loading-still": "હજી લાવી રહ્યું છે",
  "gallery-unknown-author": "લેખક અજ્ઞાત",
  "read-on-wiki": "વિકિપીડિયા પર વાંચો",
  "read-more": "વિકિપીડિયા પર વધુ વાંચો",
  "preview-disambiguation-message": "શીર્ષક <strong>$1</strong> એ વિકિપીડિયા પર એકથી વધુ લેખને સંગત છે.",
  "preview-offline-message": "કોઈ ઇન્ટરનેટ જોડાણ ઉપલબ્ધ નથી.",
  "preview-offline-cta": "ફરી પ્રયત્ન કરો"
}, Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jn
}, Symbol.toStringTag, { value: "Module" })), Qn = {
  "@metadata": {
    authors: [
      "MacTire02"
    ]
  },
  "continue-reading": "Lhaih er oaie",
  "gallery-loading-error": "Va marranys ayn tra va'n jalloo laadey",
  "gallery-loading-error-offline": "Cha nel kiangley eddyr-voggyl ry-gheddyn.",
  "gallery-loading-error-refresh": "Ooree",
  "gallery-loading-still": "Foast laadey",
  "gallery-unknown-author": "Ughtar gyn fys",
  "preview-error-message": "Va marranys ayn taishbyney yn roie-haishbynys",
  "preview-console-error-message": "Cha nel roie-haishbynys ayn da'n art '$1' (Çhengey: $2)",
  "read-on-wiki": "Lhaih er Wikipedia",
  "read-more": "Lhaih tooilley er Wikipedia",
  "preview-disambiguation-message": "Ta'n enmys <strong>$1</strong> kianglt rish ny smoo na un art er Wikipedia.",
  "preview-offline-message": "Cha nel kiangley eddyr-voggyl ry-gheddyn.",
  "preview-offline-cta": "Jean reesht eh"
}, eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), ro = {
  "@metadata": {
    authors: [
      "Em-em"
    ]
  },
  "continue-reading": "Cigaba da karatu",
  "gallery-loading-error": "Akwai kuskure shigarwa a wannan hoto",
  "gallery-loading-error-offline": "Babu hadin intanet ayanzu.",
  "gallery-loading-error-refresh": "Daidaita",
  "gallery-loading-still": "Har yanzu yana shiga",
  "gallery-unknown-author": "Ba'a san mawallafi ba",
  "preview-error-message": "Akwai yar matsala sanda ake saukar wannan kwajin gani.",
  "preview-console-error-message": "Babu kwajin gani ga makalar '$1' (Language: $2)",
  "read-on-wiki": "Karanta a Wikipedia",
  "read-more": "Karanta kari a Wikipedia",
  "preview-disambiguation-message": "Lakabi <strong>$1</strong> ya danganci fiye da makala daya a Wikipedia.",
  "preview-offline-message": "Babu hadin intanet ayanzu.",
  "preview-offline-cta": "Sake gwadawa"
}, ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ro
}, Symbol.toStringTag, { value: "Module" })), io = {
  "@metadata": {
    authors: [
      "Amire80",
      "YaronSh"
    ]
  },
  "continue-reading": "המשך קריאה",
  "gallery-loading-error": "אירעה שגיאה בעת טעינת התמונה הזאת",
  "gallery-loading-error-offline": "אין חיבור זמין לאינטרנט.",
  "gallery-loading-error-refresh": "רענון",
  "gallery-loading-still": "עדיין בטעינה",
  "gallery-unknown-author": "היוצר אינו ידוע",
  "preview-error-message": "הייתה בעיה עם הצגת התצוגה המקדימה הזאת.",
  "preview-console-error-message": "אין תצוגה מקדימה זמינה לערך ‚$1’ (שפה: $2)",
  "read-on-wiki": "לקרוא בוויקיפדיה",
  "read-more": "לקרוא עוד בוויקיפדיה",
  "preview-disambiguation-message": "הכותרת <strong>$1</strong> קשורה ליותר מערך אחד בוויקיפדיה.",
  "preview-offline-message": "אין חיבור זמין לאינטרנט.",
  "preview-offline-cta": "לנסות שוב"
}, no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: io
}, Symbol.toStringTag, { value: "Module" })), oo = {
  "@metadata": {
    authors: [
      "Abijeet Patro"
    ]
  },
  "continue-reading": "पढ़ना जारी रखें",
  "read-more": "विकिपीडिया पर अधिक पढ़ें"
}, to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oo
}, Symbol.toStringTag, { value: "Module" })), lo = {
  "@metadata": {
    authors: [
      "Bugoslav",
      "Neptune, the Mystic"
    ]
  },
  "continue-reading": "Nastavite čitati",
  "gallery-loading-error": "Došlo je do pogreške pri učitavanju ove slike",
  "gallery-loading-error-refresh": "Učitaj ponovno",
  "gallery-unknown-author": "Nepoznat autor",
  "read-on-wiki": "Pročitajte na Wikipediji",
  "read-more": "Pročitajte više na Wikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1</strong> povezan je s više članaka na Wikipediji.",
  "preview-offline-cta": "Pokušajte ponovo"
}, so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lo
}, Symbol.toStringTag, { value: "Module" })), go = {
  "@metadata": {
    authors: [
      "Kitanago"
    ]
  },
  "continue-reading": "Kontinye li",
  "gallery-loading-error": "Te gen yon erè pandan w ap chaje imaj sa a.",
  "gallery-loading-error-offline": "Pa gen koneksyon entènèt ki disponib.",
  "gallery-loading-error-refresh": "Relanse",
  "gallery-loading-still": "L ap chaje",
  "gallery-unknown-author": "Otè a enkoni",
  "preview-error-message": "Te gen yon pwoblèm pandan w ap montre apèsi sa a.",
  "preview-console-error-message": "Apèsi pa disponib pou atik '$1' (Lang: $2 )",
  "read-on-wiki": "Li sou Wikipedya",
  "read-more": "Li plis sou Wikipedya",
  "preview-disambiguation-message": "Tit <strong>$1</strong> gen rapò ak plis pase yon atik sou Wikipedya.",
  "preview-offline-message": "Pa gen koneksyon entènèt ki disponib.",
  "preview-offline-cta": "Eseye ankò"
}, uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), co = {
  "@metadata": {
    authors: [
      "Dj",
      "Hanna Tardos"
    ]
  },
  "gallery-loading-error": "Hiba történt a kép betöltésekor",
  "gallery-loading-error-offline": "Nincs internetkapcsolat.",
  "gallery-loading-error-refresh": "Frissítés",
  "gallery-loading-still": "Még mindig tölt",
  "gallery-unknown-author": "Ismeretlen szerző",
  "preview-error-message": "Hiba történt az előnézet megjelenítésekor.",
  "preview-console-error-message": 'A(z) "$1" szócikk előnézete nem érhető el (nyelv: $2)',
  "read-on-wiki": "Olvass a Wikipédián",
  "read-more": "Olvass tovább a Wikipédián",
  "preview-disambiguation-message": "<strong>$1</strong> cím egynél több cikkhez kapcsolódik a Wikipédián.",
  "preview-offline-message": "Nincs internetkapcsolat",
  "preview-offline-cta": "Próbáld újra"
}, mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: co
}, Symbol.toStringTag, { value: "Module" })), po = {
  "@metadata": {
    authors: [
      "Kareyac"
    ]
  },
  "continue-reading": "Շարունակել կարդալ",
  "gallery-loading-error-refresh": "Թարմացնել",
  "gallery-unknown-author": "Հեղինակը անհայտ է",
  "read-on-wiki": "Կարդալ Վիքպեդիայում",
  "preview-offline-cta": "Կրկին փորձել"
}, fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: po
}, Symbol.toStringTag, { value: "Module" })), yo = {
  "@metadata": {
    authors: [
      "Azniv Stepanian",
      "Շահէն"
    ]
  },
  "continue-reading": "Շարունակել կարդալ",
  "gallery-loading-error": "Այս էջը չբացուեցաւ:",
  "gallery-loading-error-offline": "Համացանցի կապ չկայ:",
  "gallery-loading-error-refresh": "Թարմացնել",
  "gallery-loading-still": "Տակաւին կը բացուի",
  "gallery-unknown-author": "Հեղինակը անյայտ է",
  "preview-error-message": "Հարց մը կայ այս բաժինը բանալու:",
  "preview-console-error-message": "Այս բաժինը գոյութիւն չունի «$1» յօդուածին համար: (Լեզու՝ $2)",
  "read-on-wiki": "Կարդալ Ուիքիփետիայի վրայ",
  "read-more": "Կարդալ յաւելեալ Ուիքիփետիայի վրայ",
  "preview-disambiguation-message": "<strong>$1</strong> վերնագիրը կապուած է մէկէ աւելի Ուիքիփետիայի յօդուածի:",
  "preview-offline-message": "Համացանցի կապ չկայ:",
  "preview-offline-cta": "Կրկին փորձէ"
}, _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yo
}, Symbol.toStringTag, { value: "Module" })), ho = {
  "@metadata": {
    authors: [
      "McDutchie"
    ]
  },
  "continue-reading": "Continuar a leger",
  "gallery-loading-error": "Un error occurreva durante le cargamento de iste imagine",
  "gallery-loading-error-offline": "Necun connexion a internet disponibile.",
  "gallery-loading-error-refresh": "Refrescar",
  "gallery-loading-still": "Cargamento ancora in curso",
  "gallery-unknown-author": "Autor incognite",
  "preview-error-message": "Un problema ha occurrite in le rendition de iste previsualisation.",
  "preview-console-error-message": "Previsualisation indisponibile pro le articulo '$1' (Lingua: $2)",
  "read-on-wiki": "Leger sur Wikipedia",
  "read-more": "Leger plus sur Wikipedia",
  "preview-disambiguation-message": "Le titulo <strong>$1</strong> es associate a plus de un articulo sur Wikipedia.",
  "preview-offline-message": "Necun connexion a internet disponibile.",
  "preview-offline-cta": "Reprobar"
}, wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ho
}, Symbol.toStringTag, { value: "Module" })), vo = {
  "@metadata": {
    authors: [
      "Akmaie Ajam",
      "Daud I.F. Argana",
      "Herryz",
      "Joseagush",
      "Sonic Speedy"
    ]
  },
  "continue-reading": "Lanjutkan Membaca",
  "gallery-loading-error": "Terjadi kesalahan saat memuat gambar ini.",
  "gallery-loading-error-offline": "Tidak ada koneksi internet.",
  "gallery-loading-error-refresh": "Muat ulang",
  "gallery-loading-still": "Masih memuat",
  "gallery-unknown-author": "$1 Penulis tidak diketahui",
  "preview-error-message": "Ada masalah ketika menampilkan pratayang ini.",
  "preview-console-error-message": "Pratinjau tidak ada untuk artikel '$1' (Bahasa: $2)",
  "read-on-wiki": "Baca di Wikipedia",
  "read-more": "Baca lebih lanjut tentang Wikipedia",
  "preview-disambiguation-message": "Judul <strong>$1</strong> terkait dengan lebih dari satu artikel di Wikipedia.",
  "preview-offline-message": "Tidak ada koneksi internet.",
  "preview-offline-cta": "Coba lagi"
}, ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vo
}, Symbol.toStringTag, { value: "Module" })), bo = {
  "@metadata": {
    authors: [
      "Joao Xavier"
    ]
  },
  "continue-reading": "Durigar lektado",
  "gallery-loading-error": "Eventis eroro dum charjo di ca imajo",
  "gallery-loading-error-offline": "Nula konekto al interreto disponebla.",
  "gallery-loading-error-refresh": "Rinovigar",
  "gallery-loading-still": "Charjo duras",
  "gallery-unknown-author": "Nekonocata autoro",
  "preview-error-message": "Eventis problemo dum la montro di ca previdado.",
  "preview-console-error-message": "Previdado ne esas posibla por l'artiklo '$1' (Idiomo: $2)",
  "read-on-wiki": "Lektez che Wikipedio",
  "read-more": "Lektez pluse che Wikipedio",
  "preview-disambiguation-message": "La titulo <strong>$1</strong> uzesas en plu kam 1 artiklo che Wikipedio.",
  "preview-offline-message": "Nula konekto al interreto disponebla.",
  "preview-offline-cta": "Probez itere"
}, jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bo
}, Symbol.toStringTag, { value: "Module" })), So = {
  "@metadata": {
    authors: [
      "Sveinki",
      "Sveinn í Felli"
    ]
  },
  "continue-reading": "Halda lestri áfram",
  "gallery-loading-error": "Upp kom villa við að hlaða inn þessari mynd",
  "gallery-loading-error-offline": "Engin internettenging er tiltæk.",
  "gallery-loading-error-refresh": "Endurlesa",
  "gallery-loading-still": "Ennþá að lesa inn",
  "gallery-unknown-author": "Óþekkur höfundur",
  "preview-error-message": "Það kom upp vandamál við að birta þessa forskoðun.",
  "preview-console-error-message": "Forskoðun er ekki til fyrir greinina '$1' (Tungumál: $2)",
  "read-on-wiki": "Lesa á Wikipedia",
  "read-more": "Lesta meira á Wikipedia",
  "preview-disambiguation-message": "Titillinn <strong>$1</strong> tengist fleiri en einni grein á Wikipedia.",
  "preview-offline-message": "Engin internettenging er tiltæk.",
  "preview-offline-cta": "Reyndu aftur"
}, To = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So
}, Symbol.toStringTag, { value: "Module" })), $o = {
  "@metadata": {
    authors: [
      "Ajeje Brazorf",
      "Beta16",
      "GpieroMW",
      "Luca.favorido"
    ]
  },
  "continue-reading": "Continua a leggere",
  "gallery-loading-error": "Si è verificato un errore durante il caricamento di questa immagine",
  "gallery-loading-error-offline": "Nessuna connessione internet disponibile.",
  "gallery-unknown-author": "Autore sconosciuto",
  "read-on-wiki": "Leggi su Wikipedia",
  "read-more": "Ulteriori informazioni su Wikipedia",
  "preview-offline-message": "Nessuna connessione internet disponibile.",
  "preview-offline-cta": "Riprova"
}, Oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $o
}, Symbol.toStringTag, { value: "Module" })), zo = {
  "@metadata": {
    authors: [
      "Omotecho",
      "RYOUMA1117",
      "そらたこ",
      "バレロン"
    ]
  },
  "continue-reading": "続けて読む",
  "gallery-loading-error": "画像の読み込み中にエラーが発生しました。",
  "gallery-loading-error-offline": "インターネット接続が見つかりません。",
  "gallery-loading-error-refresh": "更新",
  "gallery-loading-still": "読み込み中",
  "gallery-unknown-author": "作者不明",
  "preview-error-message": "プレビューを表示する際にエラーが発生しました。",
  "preview-console-error-message": "現在$1のプレビューは利用できません。（言語：$2）",
  "read-on-wiki": "ウィキペディアで読む",
  "read-more": "ウィキペディアでさらに読む",
  "preview-disambiguation-message": "標題<strong>$1</strong>はウィキペディアに複数の関連項目があります。",
  "preview-offline-message": "インターネット接続が見つかりません。",
  "preview-offline-cta": "もう一度お試しください"
}, Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" })), Eo = {
  "@metadata": {
    authors: [
      "Ajiniyaz Nurniyazov"
    ]
  },
  "continue-reading": "Oqıwdı dawam etiw",
  "gallery-loading-error": "Bul súwretti júklewde qátelik júz berdi",
  "gallery-loading-error-offline": "Internet baylanısı joq.",
  "gallery-loading-error-refresh": "Jańalaw",
  "gallery-loading-still": "Ele júklenip atır",
  "gallery-unknown-author": "Avtor belgisiz",
  "preview-error-message": "Aldınnan kóriwdi kórsetiwde mashqala júz berdi.",
  "preview-console-error-message": '"$1" (Til: $2) maqalası ushın aldınnan kóriw ilajsız',
  "read-on-wiki": "Wikipediada oqıw",
  "read-more": "Wikipediada kóbirek oqıw",
  "preview-disambiguation-message": "Atama <strong>$1</strong> Wikipediadaǵı birneshe maqalaǵa tiyisli.",
  "preview-offline-message": "Internet baylanısı joq.",
  "preview-offline-cta": "Qayta urınıp kóriw"
}, Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eo
}, Symbol.toStringTag, { value: "Module" })), Po = {
  "@metadata": {
    authors: [
      "Kambai Akau"
    ]
  },
  "continue-reading": "Ya a̠son di̠ fang",
  "gallery-loading-error": "Ghyuap ku nyia̱ mi̱ di̠n kpa̠t ghwughwu huni",
  "gallery-loading-error-offline": "A̱myim a̱cyetaneang ka bwuk.",
  "gallery-loading-error-refresh": "Bu shyim",
  "gallery-loading-still": "Ku ni̱ shyia̱ di̱ nyia̱ lodi",
  "gallery-unknown-author": "Á̠ lyen a̠tyulyuut wu bah",
  "preview-error-message": "A̱fi̱fa ku nshyia̱ mi̱ di̱n tyai nwuan-a̱son huni.",
  "preview-console-error-message": "Nwuan-a̱son nshyia̱ mat ati̱kut '$1' (A̱lyem: $2) bah",
  "read-on-wiki": "Fang mi̱ Wukipedia",
  "read-more": "Fang nkyang njhyang mi̱ Wukipedia",
  "preview-disambiguation-message": "A̠pyia̠ a̠lyiat <strong>$1</strong> byia̠ a̱meang ma̠ng ati̱kut a̱ swak a̱nyiung mi̠ Wukipedia.",
  "preview-offline-message": "A̱myim a̱cyetaneang ka bwuk.",
  "preview-offline-cta": "Bu kwan"
}, Lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Po
}, Symbol.toStringTag, { value: "Module" })), qo = {
  "@metadata": {
    authors: [
      "Cgmbo"
    ]
  },
  "continue-reading": "Landa Kutanga",
  "gallery-loading-error": "Kifu me salama na ntangu ya kutula kifwanisu yai",
  "gallery-loading-error-offline": "Connection ya internet kele ve.",
  "gallery-loading-error-refresh": "Bandulula",
  "gallery-loading-still": "Yo ke landa kubaka bima",
  "gallery-unknown-author": "Munkwa na yo me zabana ve",
  "preview-error-message": "Kifu me salama na ntangu ya kusonga kima yai.",
  "read-on-wiki": "Tanga na Wikipedia",
  "read-more": "Tanga mambu mingi na Wikipedia",
  "preview-disambiguation-message": "Ntu-diambu <strong>$1</strong> ke na kuwakana ti masolo mingi na Wikipedia.",
  "preview-offline-message": "Connection ya internet kele ve.",
  "preview-offline-cta": "Meka diaka"
}, Wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qo
}, Symbol.toStringTag, { value: "Module" })), xo = {
  "@metadata": {
    authors: [
      "EWDAja"
    ]
  },
  "continue-reading": "توروسكو مباچا",
  "gallery-loading-error": "وات كسالهن هاراک مبوکاک گامبر سيج",
  "gallery-loading-error-offline": "مكّا كونيكسي اينترنيت",
  "gallery-loading-error-refresh": "موات اولڠ",
  "gallery-loading-still": "لوكوک مبوکاک",
  "gallery-unknown-author": "ڤنوليس مک تيكاڤنداي",
  "preview-error-message": "وات ماساله هارک نمڤيلكو ڤراتياڠ سيج",
  "preview-console-error-message": "ڤراتينجاو مكّا اونتوک ارتيكيل '$' (باس:2$)",
  "read-on-wiki": "باچ د ويكيڤيديا",
  "read-more": "باچ لوبيه لنجوت د ويكيڤيديا",
  "preview-disambiguation-message": "جودول <strong>$1</strong> تيكاهيک ريک ليو جک اوسي ارتيكيل ويكيڤيديا",
  "preview-offline-message": "مكّا كونيكسي اينترنيت",
  "preview-offline-cta": "چوبا لاگي"
}, No = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xo
}, Symbol.toStringTag, { value: "Module" })), Ro = {
  "@metadata": {
    authors: [
      "Es Krim 5 Juta Rasa"
    ]
  },
  "continue-reading": "Torusko mbaca",
  "gallery-loading-error": "Uwat kasalahan harak mbukak gambar sija",
  "gallery-loading-error-offline": "Makka koneksi internet",
  "gallery-loading-error-refresh": "Muat ulang",
  "gallery-loading-still": "Lokok mbukak",
  "gallery-unknown-author": "Panulis mak tikapandai",
  "preview-error-message": "Uwat masalah harak nampilko pratayang sija.",
  "preview-console-error-message": "Pratinjau makka untuk artikel '$1' (Basa: $2)",
  "read-on-wiki": "Baca di Wikipedia",
  "read-more": "Baca lobih lanjut di Wikipedia",
  "preview-disambiguation-message": "Judul<strong>$1</strong> tikahik rik liyu jak osai artikel di Wikipedia.",
  "preview-offline-message": "Makka koneksi internet",
  "preview-offline-cta": "Cuba lagi"
}, Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ro
}, Symbol.toStringTag, { value: "Module" })), Io = {
  "@metadata": {
    authors: [
      "1917 Ekim Devrimi"
    ]
  },
  "continue-reading": "Wanayışi dewam ke",
  "gallery-loading-error": "No resım barkerdış de xeta veciye",
  "gallery-loading-error-offline": "Gıreniyeyi interneti çıniyo",
  "gallery-loading-error-refresh": "Anewe ke",
  "gallery-loading-still": "Hewna beno bar",
  "gallery-unknown-author": "Nuştekarê nêzanıyeni",
  "preview-error-message": "Mocnayışê nê verqayti de xırabiye esta.",
  "read-on-wiki": "Wikipediya de bıwanê",
  "read-more": "Wikipedia sero tayna bıwanê",
  "preview-disambiguation-message": "Sernamey <strong>$1</strong> yew ra zêde meqaleyê Wikipedia ya eleqeyıno.",
  "preview-offline-message": "Gıreniyeyi interneti çıniyo",
  "preview-offline-cta": "Anciya bıcerebne"
}, Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Ho = {
  "@metadata": {
    authors: [
      "Darzz"
    ]
  },
  "continue-reading": "Оқуды жалғастыру",
  "gallery-loading-error": "Бұл сурет жүктелгенде, қате орын алды.",
  "gallery-loading-error-offline": "Интернет қосылымы жоқ.",
  "gallery-loading-error-refresh": "Жаңарту",
  "gallery-loading-still": "Әлі жүктелуде",
  "gallery-unknown-author": "Автор белгісіз",
  "preview-error-message": "Бұл алдын ала көру көрсетілгенде, қате орын алды.",
  "preview-console-error-message": '"$1" (тіл: $2) мақаласын алдын ала көру қолжетімсіз',
  "read-on-wiki": "Уикипедиядан оқу",
  "read-more": "Уикипедиядан көбірек оқу",
  "preview-disambiguation-message": "<strong>$1</strong> атауы Уикипедиядағы бірден көп мақалаға сілтейді.",
  "preview-offline-message": "Интернет қосылымы жоқ.",
  "preview-offline-cta": "Қайталау"
}, Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Bo = {
  "@metadata": {
    authors: [
      "Pokno Royal",
      "គីមស៊្រុន"
    ]
  },
  "continue-reading": "បន្តការអាន",
  "gallery-loading-error": "មានបញ្ហាក្នុងការផ្ទុករូបភាពនេះ",
  "gallery-loading-error-offline": "គ្មានបណ្ដាញអ៊ីនធើណិតទេ។",
  "gallery-loading-error-refresh": "ផ្ទុកឡើងវិញ",
  "gallery-loading-still": "កំពុងផ្ទុក",
  "gallery-unknown-author": "អ្នកនិពន្ធមិនស្គាល់",
  "preview-error-message": "មានបញ្ហាពេលបង្ហាញការមើលមុននេះ។",
  "preview-console-error-message": "គ្មានការមើលមុនសម្រាប់អត្ថបទ $1 (ភាសា៖ $2) ទេ",
  "read-on-wiki": "អាននៅលើវិគីភីឌា",
  "read-more": "អានបន្ថែមនៅលើវិគីភីឌា",
  "preview-disambiguation-message": "ចំណងជើង <strong>$1</strong> បានជាប់ទាក់ទងជាមួយអត្ថបទច្រើនជាងមួយនៅក្នុងវិគីភីឌា។",
  "preview-offline-message": "គ្មានបណ្ដាញអ៊ីនធើណិតទេ។",
  "preview-offline-cta": "ព្យាយាមម្ដងទៀត"
}, Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bo
}, Symbol.toStringTag, { value: "Module" })), Go = {
  "@metadata": {
    authors: [
      "AVSmalnad77",
      "ಮಲ್ನಾಡಾಚ್ ಕೊಂಕ್ಣೊ"
    ]
  },
  "gallery-loading-error-offline": "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಲಭ್ಯವಿಲ್ಲ.",
  "gallery-loading-error-refresh": "ಪುನಶ್ಚೇತನಗೊಳಿಸು",
  "gallery-loading-still": "ಇನ್ನೂ ಲೋಡ್ ಆಗುತ್ತಿದೆ",
  "read-on-wiki": "ವಿಕಿಪೀಡಿಯದಲ್ಲಿ ಓದು",
  "read-more": "ವಿಕಿಪೀಡಿಯದಲ್ಲಿ ಇನ್ನಷ್ಟು ಓದು",
  "preview-offline-message": "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಲಭ್ಯವಿಲ್ಲ.",
  "preview-offline-cta": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ"
}, Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), Vo = {
  "@metadata": {
    authors: [
      "Songhee",
      "Ykhwong",
      "그냥기여자"
    ]
  },
  "continue-reading": "계속 읽기",
  "gallery-loading-error": "이 이미지를 불러오는 동안 오류가 발생했습니다",
  "gallery-loading-error-offline": "인터넷이 연결되어 있지 않습니다.",
  "gallery-loading-error-refresh": "새로 고침",
  "gallery-loading-still": "계속 로딩 중",
  "gallery-unknown-author": "작자 미상",
  "preview-error-message": "이 미리보기를 표시하는 중 오류가 있었습니다.",
  "preview-console-error-message": "'$1' 문서를 미리 볼 수 없습니다 (언어: $2)",
  "read-on-wiki": "위키백과에서 보기",
  "read-more": "위키백과에서 추가 내용 읽기",
  "preview-disambiguation-message": "<strong>$1</strong> 항목은 위키백과 내 둘 이상의 문서와 연관되어 있습니다.",
  "preview-offline-message": "인터넷이 연결되어 있지 않습니다.",
  "preview-offline-cta": "다시 시도"
}, Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vo
}, Symbol.toStringTag, { value: "Module" })), Xo = {
  "@metadata": {
    authors: [
      "Къарачайлы"
    ]
  },
  "continue-reading": "Окъугъанынгы андан ары бардыр",
  "gallery-loading-error": "Бу сурат джюклене тургъанлай халат болду",
  "gallery-loading-error-offline": "Интернетге байлам джокъду",
  "gallery-loading-error-refresh": "Джангырт",
  "gallery-loading-still": "Алкъын джюклене турады",
  "gallery-unknown-author": "Автору белгисизди",
  "preview-error-message": "Бу ал къарауну кёргюзген заманда проблема чыкъды",
  "preview-console-error-message": "'$1' (Тил: $2) статьяны ал къарауу ишлемейди",
  "read-on-wiki": "Википедияда окъу",
  "read-more": "Андан да асламысын Википедияда окъу",
  "preview-disambiguation-message": "<strong>$1</strong> башлыкъ Википедияда бирден аслам статья бла байламлыды.",
  "preview-offline-message": "Интернетге байлам джокъду",
  "preview-offline-cta": "Энтда сынаб кёр"
}, Jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xo
}, Symbol.toStringTag, { value: "Module" })), Zo = {
  "@metadata": {
    authors: [
      "Tajamul9"
    ]
  },
  "continue-reading": "پرُن جٲری تھاوُن",
  "gallery-loading-error": "شَکل لوڑ کَرنَس مَنٛز أس اَکھ غلطی.",
  "gallery-loading-error-offline": "اِنٹَرنیٹ رٲبطہٕ چھنہٕ مَیَسر.",
  "gallery-loading-error-refresh": "تازٕ کٕرو",
  "gallery-loading-still": "وُنہِ چھُ لوڈ گژھان",
  "gallery-unknown-author": "نامعلوم مُصنِف",
  "preview-error-message": "یہِ جَھلَک ہاوٕنس منٛز اوس اکھ ٹُھر.",
  "preview-console-error-message": "'$1' (زبان: $2) مَضموٗن کھأترٕ چھنہٕ جَھلَک مَیَسر",
  "read-on-wiki": "پٕریٚو وِکیٖپیٖڈیاہَس پؠٹھ",
  "read-more": "پییہٚ پٕریٚو وِکیٖپیٖڈیاہَس پؠٹھ",
  "preview-disambiguation-message": "ناو <مضبوط>$1</مضبوط> چھُ رلان اَکہِ کھۄٚتہٕ زیادٕ مَضموٗنن سٕتی وِکیٖمیڈِیاہَس پؠٹھ.",
  "preview-offline-message": "اِنٹَرنیٹ رٲبطہٕ چھنہٕ مَیَسر.",
  "preview-offline-cta": "بیٚیہِ کٔرِو کوشِش"
}, Qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zo
}, Symbol.toStringTag, { value: "Module" })), et = {
  "@metadata": {
    authors: [
      "Bikarhêner"
    ]
  },
  "continue-reading": "Xwendinê Bidomîne",
  "gallery-loading-error": "Çewtiyeke derket di barkirina vê wêneyê de",
  "gallery-loading-error-offline": "Girêdaneke înternetê yê berdest tine ye.",
  "gallery-loading-error-refresh": "Nû bike",
  "gallery-loading-still": "Hê jî tê barkirin",
  "gallery-unknown-author": "Nivîskar nenas e",
  "preview-error-message": "Çewtiyeke derket holê gava pêşdîtin dihate nîşandin.",
  "preview-console-error-message": "Pêşdîtin ne berdest e ji bo gotara '$1' (Ziman: $2)",
  "read-on-wiki": "Li ser Wîkîpediyayê bixwîne",
  "read-more": "Zêdetir bixwîne li ser Wîkîpediyayê",
  "preview-disambiguation-message": "Sernavê <strong>$1</strong> eleqedarê ji yekî zêdetir gotaran e li ser Wîkîpediyayê.",
  "preview-offline-message": "Girêdaneke înternetê yê berdest nîne.",
  "preview-offline-cta": "Cardin biceribîne"
}, rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: et
}, Symbol.toStringTag, { value: "Module" })), at = {
  "@metadata": {
    authors: [
      "Enye Lav"
    ]
  },
  "continue-reading": "Лыддьыны водзӧ",
  "gallery-loading-error": "Серпас пыртӧдігӧн мыйкӧ торксьӧма",
  "gallery-loading-error-offline": "Ӧтуввезкӧд йитӧд абу",
  "gallery-loading-error-refresh": "Выльмӧдны",
  "gallery-loading-still": "Век на пыртӧдам",
  "gallery-unknown-author": "Авторыс абу тӧдса",
  "preview-error-message": "Водзвыв видзӧдігӧн мыйкӧ абу лючки мунӧма",
  "preview-console-error-message": "'$1' статьясӧ водзвыв видзӧдны он вермы (кыв: $2)",
  "read-on-wiki": "Лыддьыны Википедияысь",
  "read-more": "Водзӧ лыддьыны Википедияысь",
  "preview-disambiguation-message": "Википедияын <strong>$1</strong> нима гижӧдыс ӧтиысь унджык.",
  "preview-offline-message": "Ӧтуввезкӧд йитчыны оз артмы",
  "preview-offline-cta": "Видлӧй нӧшта ӧтчыд"
}, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), nt = {
  "@metadata": {
    authors: [
      "Les Meloures",
      "Robby",
      "Volvox"
    ]
  },
  "continue-reading": "Virufuere mat Liesen",
  "gallery-loading-error": "Feeler beim eropluede vum Bild",
  "gallery-loading-error-offline": "Et gëtt keng Internetverbindung",
  "gallery-loading-error-refresh": "Aktualiséieren",
  "gallery-loading-still": "Gëtt nach gelueden",
  "gallery-unknown-author": "Auteur onbekannt",
  "preview-error-message": "Et gouf e Probleem fir dëst ze weisen",
  "preview-console-error-message": "Virschau fir den Artikel '$1' net verfügbar (Sprooch: $2)",
  "read-on-wiki": "Op Wikipedia liesen",
  "read-more": "Liest méi op Wikipedia",
  "preview-disambiguation-message": "Den Titel <strong>$1</strong> bezitt sech op méi wéi een Artikel op Wikipedia.",
  "preview-offline-message": "Et gëtt keng Internetverbindung.",
  "preview-offline-cta": "Probéiert nach emol"
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt
}, Symbol.toStringTag, { value: "Module" })), tt = {
  "@metadata": {
    authors: [
      "Asenoner"
    ]
  },
  "continue-reading": "Liej inant",
  "gallery-loading-error": "L ie suzedù n fal a ciarië chësta foto",
  "gallery-loading-error-offline": "L ne ie deguna cunescion cun l'internet.",
  "gallery-loading-error-refresh": "Cëria da nuef",
  "gallery-loading-still": "Cëria mo for",
  "gallery-unknown-author": "Autor scunesciù",
  "preview-error-message": "L ie unì su n problem a mustré chësta preududa.",
  "preview-console-error-message": "Preududa nia da garat per l articul '$1' (Rujeneda: $2)",
  "read-on-wiki": "Liej sun Wikipedia",
  "read-more": "Liej de plu sun Wikipedia",
  "preview-disambiguation-message": "Titul <strong>$1</strong> ie culegà cun plu de un n articul sun Wikipedia.",
  "preview-offline-message": "L ne ie deguna cunescion cun l'internet.",
  "preview-offline-cta": "Prova mo n iede"
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tt
}, Symbol.toStringTag, { value: "Module" })), st = {
  "@metadata": {
    authors: [
      "Salvemm el lombard"
    ]
  },
  "continue-reading": "Va adree a lensger",
  "gallery-loading-error": "A gh'è stad un error in del caregà questa pagina chì",
  "gallery-loading-error-offline": "A gh'è nissuna conession a l'internet disponibil.",
  "gallery-loading-error-refresh": "Atualiza:",
  "gallery-loading-still": "An'mò 'dree a caregà",
  "gallery-unknown-author": "Autor minga conossud",
  "preview-error-message": "A gh'è stad on problema intanta che la vegniva mostrada la pagina de vedè prima.",
  "read-on-wiki": "Lensg in su Wikipedia",
  "read-more": "Lengs pussée su Wikipedia",
  "preview-disambiguation-message": "El titol <strong>$1</strong> l'è correlad con pussée de vun articol in su Wikipedia.",
  "preview-offline-message": "A gh'è nissuna coneesion a l'internet disponibil",
  "preview-offline-cta": "Provegh ancamò"
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: st
}, Symbol.toStringTag, { value: "Module" })), gt = {
  "@metadata": {
    authors: [
      "Lookruk"
    ]
  },
  "continue-reading": "ອ່ານຕໍ່",
  "gallery-loading-error": "ເກີດຂໍ້ຜິດພາດຂະນະໂຫຼດຮູບນີ້",
  "gallery-loading-error-offline": "ບໍ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ",
  "gallery-loading-error-refresh": "ໂຫຼດໃໝ່",
  "gallery-loading-still": "ກຳລັງໂຫຼດຢູ່",
  "gallery-unknown-author": "ບໍ່ຮູ້ຈັກຜູ້ຂຽນ",
  "preview-error-message": "ມີບັນຫາໃນຂະນະທີ່ສະແດງຕົວຢ່າງນີ້",
  "preview-console-error-message": "ບໍ່ມີຕົວຢ່າງສໍາລັບບົດຄວາມ '$1' (ພາສາ: $2)",
  "read-on-wiki": "ອ່ານບົນວິກິພີເດຍ",
  "read-more": "ອ່ານເພີ່ມເຕີມບົນວິກິພີເດຍ",
  "preview-disambiguation-message": "ຫົວຂໍ້ <strong>$1</strong> ແມ່ນກ່ຽວຂ້ອງກັບບົດຄວມຫຼາຍກວ່າໜຶ່ງບົດຄວາມໃນວິກິພີເດຍ",
  "preview-offline-message": "ບໍ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ",
  "preview-offline-cta": "ລອງ​ອີກ​ຄັ້ງ"
}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gt
}, Symbol.toStringTag, { value: "Module" })), ct = {
  "@metadata": {
    authors: [
      "Nokeoo"
    ]
  },
  "continue-reading": "Skaityti toliau",
  "gallery-loading-error": "Įkeliant šį paveikslėlį įvyko klaida",
  "gallery-loading-error-offline": "Nėra interneto ryšio.",
  "gallery-loading-error-refresh": "Atnaujinti",
  "gallery-loading-still": "Vis dar kraunasi",
  "gallery-unknown-author": "Autorius nežinomas",
  "preview-error-message": "Rodant šią peržiūrą kilo problema.",
  "preview-console-error-message": "Straipsnio „$1“ peržiūra neprieinama (kalba: $2)",
  "read-on-wiki": "Skaitykite Vikipedijoje",
  "read-more": "Daugiau skaitykite Vikipedijoje",
  "preview-disambiguation-message": "Pavadinimas <strong>$1</strong> susijęs su daugiau nei vienu straipsniu Vikipedijoje.",
  "preview-offline-message": "Nėra interneto ryšio.",
  "preview-offline-cta": "Bandykite dar kartą"
}, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ct
}, Symbol.toStringTag, { value: "Module" })), pt = {
  "@metadata": {
    authors: [
      "Boesenbergia"
    ]
  },
  "continue-reading": "Terrosaghi Maca",
  "gallery-loading-error": "Bâḍâ sè sala bâkto mowa' ghâmbhâr sè arèya",
  "gallery-loading-error-offline": "Taḍâ' sambhungan internèt.",
  "gallery-loading-error-refresh": "Pa'anyar",
  "gallery-loading-still": "Ghi' mowa'",
  "gallery-unknown-author": "Sè meccè' ta' èkataowè",
  "preview-error-message": "Bâḍâ masalah bâkto ngangglaghi tangas arèya.",
  "read-on-wiki": "Bâca è Wikipèḍia",
  "read-more": "Bâca terrosana è Wikipèḍia",
  "preview-disambiguation-message": "Bhul-ombhul <strong>$1</strong> akaè' ka lebbi ḍâri sèttong serradhân è Wikipèḍia.",
  "preview-offline-message": "Taḍâ' sambhungan internèt.",
  "preview-offline-cta": "Jhâjhâl polè"
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pt
}, Symbol.toStringTag, { value: "Module" })), yt = {
  "@metadata": {
    authors: [
      "ऐक्टिवेटेड्"
    ]
  },
  "continue-reading": "पढ़ेला जारी रखी",
  "gallery-loading-error": "इचित्र आरोपणमे त्रुटि होएल्",
  "gallery-loading-error-offline": "कोइयो अन्तर्जालसम्पर्क उपलब्ध नहई।",
  "gallery-loading-error-refresh": "नवीकरण",
  "gallery-loading-still": "अखनीयो आरोपित होइत्",
  "gallery-unknown-author": "अज्ञात लेखक",
  "preview-error-message": "इ झलक देखावेमे एगो समस्या होलै।",
  "preview-console-error-message": "लेख '$1' (भासा: $2) ला झलक अनुपलब्ध",
  "read-on-wiki": "बिकिपीडियापर पढ़ी",
  "read-more": "बिकिपीडियापर आउ पढ़ी",
  "preview-disambiguation-message": "सीर्सक <strong>$1</strong> बिकिपीडियापर एकसे बेसी लेखसे सम्बन्धित हई",
  "preview-offline-message": "कोइयो अन्तर्जालसम्पर्क उपलब्ध नहई।",
  "preview-offline-cta": "फिन प्रयास करी"
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yt
}, Symbol.toStringTag, { value: "Module" })), ht = {
  "@metadata": {
    authors: [
      "Bjankuloski06"
    ]
  },
  "continue-reading": "Продолжете со читање",
  "gallery-loading-error": "Се јави грешка при вчитувањето на сликава.",
  "gallery-loading-error-offline": "Нема врска со семрежјето.",
  "gallery-loading-error-refresh": "Превчитај",
  "gallery-loading-still": "Сè уште се вчитува",
  "gallery-unknown-author": "Непознат автор",
  "preview-error-message": "Се јави проблем при приказот на прегледот.",
  "preview-console-error-message": "Прегледот е недостапен за статијата „$1“ (Јазик: $2)",
  "read-on-wiki": "Прочитајте на Википедија",
  "read-more": "Прочитајте повеќе на Википедија",
  "preview-disambiguation-message": "Насловот <strong>$1</strong> е поврзансо повеќе од една статија на Википедија.",
  "preview-offline-message": "Нема врска со семрежјето.",
  "preview-offline-cta": "Обиди се пак"
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht
}, Symbol.toStringTag, { value: "Module" })), vt = {
  "@metadata": {
    authors: [
      "Kiran Gopi"
    ]
  },
  "continue-reading": "വായന തുടരുക",
  "gallery-loading-error": "ഈ ചിത്രം എടുക്കുന്നതിൽ പിഴവുണ്ടായി.",
  "gallery-loading-error-refresh": "പുതുക്കുക"
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vt
}, Symbol.toStringTag, { value: "Module" })), bt = {
  "@metadata": {
    authors: [
      "Anand.orkhon"
    ]
  },
  "continue-reading": "Цааш унших",
  "gallery-loading-error": "Зургийг уншихад алдаа гарлаа",
  "gallery-loading-error-offline": "Интернэт холболт байхгүй байна.",
  "gallery-loading-error-refresh": "Дахин ачааллах",
  "gallery-loading-still": "Ачаалсаар байна",
  "gallery-unknown-author": "Зохиогч тодорхойгүй",
  "preview-error-message": "Урьдчилж харах явцад асуудал гарлаа.",
  "preview-console-error-message": "' $1 ' нийтлэлийг урьдчилан харах боломжгүй (Хэл: $2 )",
  "read-on-wiki": "Википедиа-аас уншаарай",
  "read-more": "Википедиа-аас дэлгэрэнгүй уншаарай",
  "preview-disambiguation-message": "<strong>$1</strong> гарчиг нь Википедиа дээрх нэгээс олон нийтлэлтэй холбоотой байна.",
  "preview-offline-message": "Интернэт холболт байхгүй байна.",
  "preview-offline-cta": "Дахин оролдоно уу"
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bt
}, Symbol.toStringTag, { value: "Module" })), St = {
  "@metadata": {
    authors: [
      "Laitei",
      "Taytay",
      "Teitei Para"
    ]
  },
  "continue-reading": "Reih pazao",
  "gallery-loading-error": "He hmâthlâ â khâ hai nota pâna sâkha a y",
  "gallery-loading-error-offline": "Internet azaona y vei.",
  "gallery-loading-error-refresh": "Pathieh",
  "gallery-loading-still": "A khâh hai chy",
  "gallery-unknown-author": "Rohtuh pahno leipa",
  "preview-error-message": "He mochhilina â palâ hai nota pâna sâkha a y.",
  "preview-console-error-message": "Châpaw '$1' châta mochhilina â hmô (Reihchâ: $2)",
  "read-on-wiki": "Wikipedia liata reih",
  "read-more": "Wikipedia liata reina mode",
  "preview-disambiguation-message": "Chôtlâhpi <strong>$1</strong> nata a zaopa châpawzy Wikipedia lia sâkha hlâ hluh a y.",
  "preview-offline-message": "Internet a zaona y vei.",
  "preview-offline-cta": "A zaoh via"
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), $t = {
  "@metadata": {
    authors: [
      "Tofeiku"
    ]
  },
  "continue-reading": "Teruskan Membaca",
  "gallery-loading-error": "Terdapat ralat memuatkan imej ini",
  "gallery-loading-error-offline": "Tiada sambungan Internet.",
  "gallery-loading-error-refresh": "Segar semula",
  "gallery-loading-still": "Masih memuatkan",
  "gallery-unknown-author": "Pengarang tidak diketahui",
  "preview-error-message": "Terdapat masalah ketika memaparkan pralihat ini.",
  "preview-console-error-message": "Pralihat tidak tersedia untuk rencana '$1' (Bahasa: $2)",
  "read-on-wiki": "Baca tentang Wikipedia",
  "read-more": "Baca lebih lanjut di Wikipedia",
  "preview-disambiguation-message": "Tajuk <strong>$1</strong> berkaitan dengan lebih daripada satu rencana di Wikipedia.",
  "preview-offline-message": "Tiada sambungan Internet.",
  "preview-offline-cta": "Cuba lagi"
}, Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t
}, Symbol.toStringTag, { value: "Module" })), zt = {
  "@metadata": {
    authors: [
      "Chrisportelli",
      "ToniSant"
    ]
  },
  "continue-reading": "Kompli Aqra",
  "gallery-loading-error": "L-istampa ma setgħetx titla'",
  "gallery-loading-error-offline": "Bħalissa m'hemmx konnessjoni tal-internet disponibbli.",
  "gallery-loading-error-refresh": "Aġġorna",
  "gallery-loading-still": "Għadha tielgħa",
  "gallery-unknown-author": "L-awtur mhuwiex magħruf",
  "preview-error-message": "Kien hemm problema biex titla' l-wirja minn qabel.",
  "preview-console-error-message": "Il-wirja minn qabel għall-artiklu '$1' (Lingwa: $2)",
  "read-on-wiki": "Aqra fuq il-Wikipedija",
  "read-more": "Aqra aktar fuq il-Wikipedija",
  "preview-disambiguation-message": "It-titlu <strong>$1</strong> għandu x'jaqsam ma' aktar minn artiklu wieħed fuq il-Wikipedija.",
  "preview-offline-message": "Bħalissa m'hemmx konnessjoni tal-internet disponibbli.",
  "preview-offline-cta": "Erġa' pprova"
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zt
}, Symbol.toStringTag, { value: "Module" })), Et = {
  "@metadata": {
    authors: [
      "Dr Lotus Black",
      "Sithu015"
    ]
  },
  "continue-reading": "ဆက်လက် ဖတ်ရှုရန်",
  "gallery-loading-error": "ဤ ပုံကို တင်ဆောင်စဉ် အမှား တစ်ခု ဖြစ်ခဲ့သည်။",
  "gallery-loading-error-offline": "အင်တာနက် ဆက်သွယ်မှု မရရှိပါ။",
  "gallery-loading-error-refresh": "ပြန်စရန်",
  "gallery-loading-still": "အလုပ် လုပ်နေတုန်းပါ",
  "gallery-unknown-author": "ဖန်တီးသူ မသိ",
  "preview-error-message": "ဤအကြိုမြင်ကွင်းကို ပြသနေစဥ် ကိစ္စတစ်ခုရှိခဲ့သည်။",
  "preview-console-error-message": "ဆောင်းပါး '$1' အတွက် အကြိုမြင်ကွင်း မရရှိနိုင်ပါ (ဘာသာစကား: $2)",
  "read-on-wiki": "ဝီကီပီးဒီးယား တွင် ဖတ်ရန်",
  "read-more": "ဝီကီပီးဒီးယားတွင် ပိုမို ဖတ်ပါ",
  "preview-disambiguation-message": "ခေါင်းစဥ် <strong>$1</strong> သည် ဝီကီပီးဒီးယား တွင် ‌ဆောင်းပါး တစ်ခုထပ် ပို၍ ဆက်စပ်နေသည်။",
  "preview-offline-message": "အင်တာနက် ဆက်သွယ်မှု မရရှိပါ။",
  "preview-offline-cta": "ထပ်မံ ကြိုးစားပါ"
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et
}, Symbol.toStringTag, { value: "Module" })), Pt = {
  "@metadata": {
    authors: [
      "Finizio",
      "Ruthven"
    ]
  },
  "continue-reading": "Continua 'a lettura",
  "gallery-loading-error": "Aggio sbagliato carrecanno sta figura",
  "gallery-loading-error-offline": "Interner nu funziona",
  "gallery-loading-error-refresh": "Agghiuorna",
  "gallery-loading-still": "Stong ancora carrecann'",
  "gallery-unknown-author": "Autore scanosciuto",
  "preview-error-message": "Sta nu problema facenno verè st'anteprimma",
  "preview-console-error-message": "L'anteprimma nun ce sta pe ll'articulo '$1' (Lengua: $2)",
  "read-on-wiki": "Liegge 'ncoppa a Wikipedia",
  "read-more": "Liegge 'e cchiù 'ncoppa a Wikipedia",
  "preview-disambiguation-message": "'O titulo <strong>$1</strong> s'arriferisce a cchiù 'e n'articulo ncopp’a Wikipedia",
  "preview-offline-message": "Internet nun funziona",
  "preview-offline-cta": "Prova n'ata vota"
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pt
}, Symbol.toStringTag, { value: "Module" })), qt = {
  "@metadata": {
    authors: [
      "EdoAug",
      "Jon Harald Søby",
      "Kingu"
    ]
  },
  "continue-reading": "Fortsett å lese",
  "gallery-loading-error": "Kunne ikke laste inn denne siden",
  "gallery-loading-error-offline": "Ikke tilkoblet Internett.",
  "gallery-loading-error-refresh": "Gjeoppfrisk",
  "gallery-loading-still": "Laster fremdeles …",
  "gallery-unknown-author": "Ukjent forfatter",
  "preview-error-message": "Kunne ikke forhåndsvise.",
  "preview-console-error-message": "Forhåndsvisning er ikke tilgjengelig for artikkelen «$1» (Språk: $2)",
  "read-on-wiki": "Les på Wikipedia",
  "read-more": "Les mer på Wikipedia",
  "preview-disambiguation-message": "Tittelen <strong>$1</strong> er tilknyttet mer enn én artikkel på Wikipedia.",
  "preview-offline-message": "Ingen tilgjengelige tilkoblinger til Internett.",
  "preview-offline-cta": "Prøv igjen"
}, Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), xt = {
  "@metadata": {
    authors: [
      "Nirajan pant"
    ]
  },
  "continue-reading": "पढाइलाई निरन्तरता दिनुहोस्",
  "gallery-loading-error": "यस छबिलाई खोल्दा यहाँ केही त्रुटि हुन गएको छ",
  "gallery-loading-error-offline": "इन्टरनेट जडान उपलब्ध छैन्।",
  "gallery-loading-error-refresh": "पुन:ताजा",
  "gallery-loading-still": "अझै खुलिरहेको छ",
  "gallery-unknown-author": "अज्ञात लेखक",
  "preview-error-message": "यस पूर्वावलोकनलाई प्रदर्शन गर्दा यहाँ केही उलझन भइरहेको छ।",
  "preview-console-error-message": "लेख '$1' (भाषा: $2) का लागि पूर्वावलोकन उपलब्ध छैन्",
  "read-on-wiki": "विकिपिडियामा पढ्नुहोस्",
  "read-more": "थप विकिपिडियामा पढ्नुहोस्",
  "preview-disambiguation-message": "<strong>$1</strong> शीर्षक विकिपिडियामा रहेका एकभन्दा बढी लेखहरूसँग सम्बन्धित छ।",
  "preview-offline-message": "इन्टरनेट जडान उपलब्ध छैन्।",
  "preview-offline-cta": "पुन: प्रयास गर्नुहोस्"
}, Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xt
}, Symbol.toStringTag, { value: "Module" })), Rt = {
  "@metadata": {
    authors: [
      "Anugrahgori",
      "Slaia"
    ]
  },
  "continue-reading": "Tohugö wombaso",
  "gallery-loading-error": "So zifasala me tehalö gambara andre",
  "gallery-loading-error-offline": "Lö hadöi jaringan internet.",
  "gallery-loading-error-refresh": "Fuli halö",
  "gallery-loading-still": "Muhalö na sa",
  "gallery-unknown-author": "Lö töi zamazökhi",
  "preview-error-message": "So zifasala götö wangoroma'ö khala-khala andre.",
  "preview-console-error-message": "Lö fangoroma'ö sura '$1' (Li: $2)",
  "read-on-wiki": "Baso yaŵa ba Wikipedia",
  "read-more": "Baso na sa yaŵa ba Wikipedia",
  "preview-disambiguation-message": "Högö <strong>$1</strong> no fakhai ba ha'uga ngawua zura ba Wikipedia",
  "preview-offline-message": "Lö hadöi jaringan internet.",
  "preview-offline-cta": "Fuli tesi"
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rt
}, Symbol.toStringTag, { value: "Module" })), It = {
  "@metadata": {
    authors: [
      "Nskjnv"
    ]
  },
  "continue-reading": "సురుమ్ వాసిప్స అనేకద్",
  "gallery-loading-error": "ఈ బొమ్మన్ ఒలిపేకత్తి గల్తీ ఎద్దిన్",
  "gallery-loading-error-offline": "ఇంటర్నెట్ అంతె వరేద్",
  "gallery-loading-error-refresh": "పెన అదుం",
  "gallery-loading-still": "ఇంకా లోడ్ ఏర్సద్",
  "gallery-unknown-author": "వాయకన్ద్ ఎరుకతోద్",
  "preview-error-message": "ఇత్తి ఒలిపేకత్తి ఎద్దో గల్తీ ఎద్దిన్",
  "preview-console-error-message": "ఈ పేజీ పోదే గొట్టిక్ తొతె '$1' (గొట్టి: $2)",
  "read-on-wiki": "వికిపీడియాత్ వాసిపుర్",
  "read-more": "ఇంకా పెన వికీపీడియాత్ వాసిపుర్",
  "preview-disambiguation-message": "పేరొక్కద్ తెలుగు ఎన ఎక్కువ వికీపీడియా గొట్టిక్ అంచా",
  "preview-offline-message": "ఇంటర్నెట్ అంతె వరేద్",
  "preview-offline-cta": "పెన అదుం"
}, Dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: It
}, Symbol.toStringTag, { value: "Module" })), Ht = {
  "@metadata": {
    authors: [
      "Mainframe98",
      "Nickthijssen1994",
      "Romaine"
    ]
  },
  "continue-reading": "Verder lezen",
  "gallery-loading-error": "Er is een fout opgetreden bij het laden van deze afbeelding",
  "gallery-loading-error-offline": "Geen internetverbinding beschikbaar.",
  "gallery-loading-error-refresh": "Vernieuwen",
  "gallery-loading-still": "Nog steeds aan het laden",
  "gallery-unknown-author": "Auteur onbekend",
  "preview-error-message": "Er is een probleem opgetreden bij het weergeven van deze voorvertoning",
  "preview-console-error-message": "Voorbeeldweergave onbeschikbaar voor artikel '$1' (Taal: $2)",
  "read-on-wiki": "Op Wikipedia lezen",
  "read-more": "Meer lezen op Wikipedia",
  "preview-disambiguation-message": "De titel <strong>$1</strong> is gerelateerd aan meer dan één artikel op Wikipedia.",
  "preview-offline-message": "Geen internetverbinding beschikbaar.",
  "preview-offline-cta": "Probeer het opnieuw"
}, Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ht
}, Symbol.toStringTag, { value: "Module" })), Bt = {
  "@metadata": {
    authors: [
      "Sophie"
    ]
  },
  "continue-reading": "Fortsett å lesa",
  "gallery-loading-error-offline": "Ikkje tilkopla på Internett.",
  "gallery-unknown-author": "Ukjend forfattar",
  "read-on-wiki": "Les på Wikipedia",
  "read-more": "Les meir på Wikipedia",
  "preview-offline-message": "Ikkje tilkopla på Internett.",
  "preview-offline-cta": "Prøv igjen"
}, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bt
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  "@metadata": {
    authors: [
      "Noktonissian"
    ]
  },
  "continue-reading": "ᩋ᩵ᩣ᩠ᨶᨲᩬᩴ᩵ᨳᩯ᩠ᨾ",
  "gallery-loading-error": "ᨠᩮᩥ᩠ᨯᨠᩣ᩠ᩁᨹᩥ᩠ᨯᨻᩖᩣ᩠ᨯᨲᩬᩁᩉᩖᩰᩫᨯ᩺ᨽᩣ᩠ᨻᨶᩦ᩶",
  "gallery-loading-error-offline": "ᨷᩴᨾᩦᩈᩢᨬ᩠ᨬᩣ᩠ᨱᩋᩥ᩠ᨶᨴᩮᩬᩥᩁ᩺ᨶᩮᩢ᩠ᨴ",
  "gallery-loading-error-refresh": "ᩉᩖᩰᩫᨯ᩺ᨳᩯ᩠ᨾᩉ᩠ᨾᩱ᩵",
  "gallery-loading-still": "ᨿᩢ᩠ᨦᩉᩖᩰᩫᨯ᩺ᨷᩴᩓ᩠ᩅ",
  "gallery-unknown-author": "ᨷᩴ᩵ᩁᩪ᩶ᨧᩢ᩠ᨠᨹᩪ᩶ᨡ᩠ᨿᩁ",
  "preview-error-message": "ᨠᩣ᩠ᩁᩈᨯᩯ᩠ᨦᨹᩫ᩠ᩃᨲᩫ᩠ᩅᩀ᩵ᩣ᩠ᨦᨶᩦ᩶ᨾᩦᨷᩢᨬ᩠ᩉᩣ",
  "preview-console-error-message": 'ᨷᩴ᩵ᨾᩦᨲ᩠ᩅᩫᩀ᩵ᩣ᩠ᨦᨡᩬᨦᨷᩫ᩠ᨴᨤ᩠ᩅᩣ᩠ᨾ "$1" (ᨽᩣᩈᩣ: $2)',
  "read-on-wiki": "ᩋ᩵ᩣ᩠ᨶᨯᩱ᩶ᨶᩲᩅᩥᨠᩥᨽᩦᨯ᩠ᨿᩮ",
  "read-more": "ᩋ᩵ᩣ᩠ᨶᨲᩬᩴ᩵ᨯᩱ᩶ᨶᩲᩅᩥᨠᩥᨽᩦᨯ᩠ᨿᩮ",
  "preview-disambiguation-message": "ᩉ᩠ᩅᩫᨡᩬᩴ᩶ <strong>$1</strong> ᨠ᩠ᨿ᩵ᩅᨡᩬ᩶ᨦᨠᩢ᩠ᨷᨷᩫ᩠ᨴᨤ᩠ᩅᩣ᩠ᨾᨷᩫ᩠ᨶᩅᩥᨠᩥᨽᩦᨯ᩠ᨿᩮᨶᩢ᩠ᨠᩉᩖᩮᩬᩥᩋᨶᩧ᩠᩵ᨦᨷᩫ᩠ᨴᨤ᩠ᩅᩣ᩠ᨾ",
  "preview-offline-message": "ᨷᩴᨾᩦᩈᩢᨬ᩠ᨬᩣ᩠ᨱᩋᩥ᩠ᨶᨴᩮᩬᩥᩁ᩺ᨶᩮᩢ᩠ᨴ",
  "preview-offline-cta": "ᩃᩬᨦᨳᩯ᩠ᨾᩉ᩠ᨾᩱ᩵"
}, Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" })), Vt = {
  "@metadata": {
    authors: [
      "Lancine.kounfantoh.fofana"
    ]
  },
  "continue-reading": "ߘߐ߬ߞߊ߬ߙߊ߲߬ߠߌ߲ ߘߊߓߊ߲߫",
  "gallery-loading-error": "ߝߎ߬ߕߎ߲߬ߕߌ ߘߏ߫ ߕߘߍ߬ ߦߋ߫ ߦߋ߲߬ ߖߌ߬ߦߊ߬ߓߍ ߣߌ߲߬ ߟߊߢߎ߲߫ ߕߎߡߊ ߟߊ߫.",
  "gallery-loading-error-offline": "ߓߟߐߟߐ ߜߊ߲߬ߞߎ߲߬ߠߌ߲߫ ߕߍ߫ ߦߋ߲߬",
  "gallery-loading-error-refresh": "ߞߵߊ߬ ߟߊߛߎߡߊ߫",
  "gallery-loading-still": "ߊ߬ ߟߊߢߎ߲ ߦߴߌ ߘߐ߫ ߡߎߣߎ߲߬",
  "gallery-unknown-author": "ߛߓߍߦߟߊ߫ ߡߊߟߐ߲ߓߊߟߌ",
  "preview-error-message": "ߝߙߋߞߋ ߘߏ߫ ߕߘߍ߬ ߦߴߊ߬ ߘߐ߫ ߦߋߟߌ ߣߌ߲߬ ߠߊߓߊ߯ߙߊ߫ ߕߎߡߊ ߟߊ߫.",
  "preview-console-error-message": "ߢߍߦߋߟߌ߫ ߕߴߦߋ߲߬ ߞߎߡߘߊ «$1» ߢߍ߫ (ߞߊ߲:$2)",
  "read-on-wiki": "ߘߐ߬ߞߊ߬ߙߊ߲߬ߠߌ߲ ߞߍ߫ ߥߞߌߔߋߘߌߦߊ ߞߊ߲߬",
  "read-more": "ߘߏ߫ ߜߘߍ߫ ߟߎ߫ ߘߐߞߊ߬ߙߊ߲߫ ߥߞߌߔߋߘߌߦߊ ߞߊ߲߬",
  "preview-disambiguation-message": "ߞߎ߲߬ߕߐ߮ <strong>$1</strong> ߜߋ߲߭ߞߘߎ߬ߢߐ߲߮ ߞߊߛߌߦߊ߫ ߞߎߡߘߊ߫ ߞߋߟߋ߲߫ ߘߌ߫ ߥߞߌߔߋߘߌߦߊ ߣߌ߲߬ ߠߊ߫.",
  "preview-offline-message": "ߓߟߐߟߐ ߜߊ߲߬ߞߎ߲߬ߠߌ߲߫ ߕߍ߫ ߦߋ߲߬.",
  "preview-offline-cta": "ߊ߬ ߡߊߝߍߣߍ߲߫ ߕߎ߲߯"
}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vt
}, Symbol.toStringTag, { value: "Module" })), Xt = {
  "@metadata": {
    authors: [
      "Kakonjo"
    ]
  },
  "continue-reading": "Gumizamu n'oshoma",
  "gallery-loading-error": "Habaho Enshobi omu kworeka ekishushani ekyi",
  "gallery-loading-error-offline": "Tihariho okukwatanisa kwa internet okuliho",
  "gallery-loading-error-refresh": "Garuza busya",
  "gallery-loading-still": "Kikiriyo Ni kiija",
  "gallery-unknown-author": "Nyakukikora tari kumanywa",
  "preview-error-message": "Ekyi nikyo Kya kiri ekizibu omu kworeka ebiriyo nibikorwa",
  "preview-console-error-message": "Ebiriyo nibikorwa tibiriho ahabwa orubaju '$1' (Orurimi:$2)",
  "read-on-wiki": "Shoma Ahari Wikipediya",
  "read-more": "Shoma bingi Ahari wikipediya",
  "preview-disambiguation-message": "Omutwe mukuru <strong>$1</strong> gwiine obuzaare nana Engingo enyiingi aha Wikipediya",
  "preview-offline-message": "Tihiine internet yoona eriho hati",
  "preview-offline-cta": "Gyezaho ogudi murundi"
}, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xt
}, Symbol.toStringTag, { value: "Module" })), Zt = {
  "@metadata": {
    authors: [
      "BrennodAloisi",
      "Nicolas Eynaud"
    ]
  },
  "continue-reading": "Contunhar a legir",
  "gallery-loading-error": "Una error a agut luòc durant lo cargament d'aquel imatge.",
  "gallery-loading-error-offline": "Ges de connexion internet disponible",
  "gallery-loading-error-refresh": "Refrescar",
  "gallery-loading-still": "Cargament totjorn en cors",
  "gallery-unknown-author": "Autor desconegut",
  "read-on-wiki": "Legir sus Wikipèdia",
  "read-more": "Legir mai sus Wikipèdia",
  "preview-disambiguation-message": "Lo títol <strong>$1</strong> es liat a mai d'un article dins Wikipèdia.",
  "preview-offline-message": "Ges de connexion internet disponible.",
  "preview-offline-cta": "Ensajatz tornamai"
}, Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" })), el = {
  "@metadata": {
    authors: [
      "Maammee"
    ]
  },
  "continue-reading": "Dubbisuu itti fufi",
  "gallery-loading-error": "Dogoggara suura kana fee'utti ta'e",
  "gallery-loading-error-offline": "Konnekshiniin intarneetaa hin jiru.",
  "gallery-loading-error-refresh": "Haaromsi",
  "gallery-loading-still": "Ammayyu fe'aara",
  "gallery-unknown-author": "Barreessaan hin beekamu",
  "preview-error-message": "Yeroo yaalii kana agarsiisuu dhimma ta'e.",
  "read-on-wiki": "Wikipiidiyaa irra Dubbisi",
  "read-more": "Dabalata Wikipiidiyaa irra dubbisi",
  "preview-disambiguation-message": "Mata duree <strong>$1</strong> Wikipiidiyaa irra barruu tokko ol waliin walqabata.",
  "preview-offline-message": "Konnekshiniin intarneetaa hin jiru.",
  "preview-offline-cta": "Irra deebi'ii yaali"
}, rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), al = {
  "@metadata": {
    authors: [
      "Kuldeepburjbhalaike"
    ]
  },
  "continue-reading": "ਪੜ੍ਹਨਾ ਜਾਰੀ ਰੱਖੋ",
  "gallery-loading-error": "ਇਸ ਚਿੱਤਰ ਨੂੰ ਲੋਡ ਕਰਨ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਸੀ",
  "gallery-loading-error-offline": "ਕੋਈ ਇੰਟਰਨੈਟ ਕਨੈਕਸ਼ਨ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
  "gallery-loading-error-refresh": "ਤਾਜ਼ਾ ਕਰੋ",
  "gallery-loading-still": "ਹਾਲੇ ਵੀ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ",
  "gallery-unknown-author": "ਅਣਜਾਣ ਲੇਖਕ",
  "preview-error-message": "ਇਸ ਪੂਰਵ-ਝਲਕ ਨੂੰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਨ ਦੌਰਾਨ ਕੋਈ ਸਮੱਸਿਆ ਆਈ ਸੀ।",
  "preview-console-error-message": "ਲੇਖ '$1' (ਭਾਸ਼ਾ: $2) ਲਈ ਪੂਰਵ-ਝਲਕ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
  "read-on-wiki": "ਵਿਕੀਪੀਡੀਆ 'ਤੇ ਪੜ੍ਹੋ",
  "read-more": "ਵਿਕੀਪੀਡੀਆ 'ਤੇ ਹੋਰ ਪੜ੍ਹੋ",
  "preview-disambiguation-message": "ਸਿਰਲੇਖ <strong>$1</strong> ਵਿਕੀਪੀਡੀਆ 'ਤੇ ਇੱਕ ਤੋਂ ਵੱਧ ਲੇਖਾਂ ਨਾਲ ਸਬੰਧਤ ਹੈ।",
  "preview-offline-message": "ਕੋਈ ਇੰਟਰਨੈਟ ਕਨੈਕਸ਼ਨ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
  "preview-offline-cta": "ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ"
}, il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: al
}, Symbol.toStringTag, { value: "Module" })), nl = {
  "@metadata": {
    authors: [
      "ObaTango"
    ]
  },
  "continue-reading": "Sigui lesa",
  "gallery-loading-error": "Tabatin un eror ora di karga e imágen akí",
  "gallery-loading-error-offline": "No tin konekshon di internèt.",
  "gallery-loading-error-refresh": "Aktualisá",
  "gallery-loading-still": "Ainda ta karga",
  "gallery-unknown-author": "Outor deskonosí",
  "preview-error-message": "Tabatin un problema ora di mustra e bista previo akí.",
  "preview-console-error-message": "No tin bista previo pa artíkulo '$1' (Idioma: $2)",
  "read-on-wiki": "Lesa riba Wikipedia",
  "read-more": "Lesa mas riba Wikipedia",
  "preview-disambiguation-message": "E título <strong>$1</strong>ta relashoná ku mas di un artíkulo riba Wikipedia.",
  "preview-offline-message": "No tin konekshon di internèt disponibel.",
  "preview-offline-cta": "Purba di nobo"
}, ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nl
}, Symbol.toStringTag, { value: "Module" })), tl = {
  "@metadata": {
    authors: [
      "Chrumps",
      "Krzyz23",
      "Rail"
    ]
  },
  "continue-reading": "Czytaj dalej",
  "gallery-loading-error": "Podczas ładowania tego obrazu wystąpił błąd",
  "gallery-loading-error-offline": "Nie ma dostępnego połączenia internetowego.",
  "gallery-loading-error-refresh": "Odśwież",
  "gallery-loading-still": "Wciąż wczytuję",
  "gallery-unknown-author": "Autor nieznany",
  "preview-error-message": "Wystąpił problem podczas wyświetlania podglądu.",
  "preview-console-error-message": "Podgląd niedostępny dla artykułu „$1” (język: $2)",
  "read-on-wiki": "Przeczytaj na Wikipedii",
  "read-more": "Przeczytaj więcej na Wikipedii",
  "preview-disambiguation-message": "Tytuł <strong>$1</strong> jest związany z więcej niż jednym artykułem na Wikipedii.",
  "preview-offline-message": "Nie ma dostępnego połączenia internetowego.",
  "preview-offline-cta": "Spróbuj ponownie"
}, ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tl
}, Symbol.toStringTag, { value: "Module" })), sl = {
  "@metadata": {
    authors: [
      "Abbas dhothar",
      "Bgo eiu"
    ]
  },
  "continue-reading": "ہور پڑھایو",
  "gallery-loading-error": "ایہہ تصویر لوڈ کر نہیں سکیا",
  "gallery-loading-error-offline": "انٹرنیٹ کنیکشن دستیاب نہیں ا‏‏ے۔",
  "gallery-loading-error-refresh": "تازہ کرو",
  "gallery-loading-still": "حالیہ لوڈ کردے",
  "gallery-unknown-author": "لیکھک نامعلوم",
  "preview-error-message": "ایہہ ویکھ نیہں سکیا۔",
  "read-on-wiki": "وِکیپیڈیا تے پڑھایو",
  "read-more": "ویکیپیڈیا اُتے ہور پڑھو",
  "preview-offline-message": "انٹرنیٹ کنیکشن دستیاب نئيں ا‏‏ے۔",
  "preview-offline-cta": "فیر کرو"
}, dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sl
}, Symbol.toStringTag, { value: "Module" })), gl = {
  "@metadata": {
    authors: [
      "Eduardo Addad de Oliveira",
      "Eduardoaddad",
      "Juan90264",
      "LeFaith"
    ]
  },
  "continue-reading": "Continuar lendo",
  "gallery-loading-error": "Ocorreu um erro ao carregar esta imagem",
  "gallery-loading-error-offline": "Sem ligação à Internet disponível.",
  "gallery-loading-error-refresh": "Atualizar",
  "gallery-loading-still": "Ainda carregando",
  "gallery-unknown-author": "Autor desconhecido",
  "preview-error-message": "Ocorreu um problema ao exibir esta pré-visualização.",
  "preview-console-error-message": "Pré-visualização indisponível para o artigo '$1' (Idioma: $2)",
  "read-on-wiki": "Leia na Wikipédia",
  "read-more": "Leia mais na Wikipédia",
  "preview-disambiguation-message": "Título <strong>$1</strong> está relacionado a mais de um artigo na Wikipédia.",
  "preview-offline-message": "Sem ligação à Internet disponível.",
  "preview-offline-cta": "Tente novamente"
}, ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gl
}, Symbol.toStringTag, { value: "Module" })), cl = {
  "@metadata": {
    authors: [
      "Dvpita",
      "Hamilton Abreu"
    ]
  },
  "continue-reading": "Continuar a ler",
  "gallery-loading-error": "Ocorreu um erro ao carregar esta imagem",
  "gallery-loading-error-offline": "Não existe ligação à Internet.",
  "gallery-loading-error-refresh": "Atualizar",
  "gallery-loading-still": "Carregamento em curso",
  "gallery-unknown-author": "Autor desconhecido",
  "preview-error-message": "Ocorreu um erro durante a apresentação desta antevisão.",
  "preview-console-error-message": "Antevisão indisponível para o artigo '$1' (língua: $2)",
  "read-on-wiki": "Ler na Wikipédia",
  "read-more": "Leia mais na Wikipédia",
  "preview-disambiguation-message": "O título <strong>$1</strong> está relacionado com mais do que um artigo na Wikipédia.",
  "preview-offline-message": "Não existe ligação à Internet.",
  "preview-offline-cta": "Tente novamente"
}, ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cl
}, Symbol.toStringTag, { value: "Module" })), pl = {
  "@metadata": {
    authors: [
      "Nike"
    ]
  },
  "continue-reading": "The message shown in the footer part of the preview popup that allows user to continue reading the summary",
  "gallery-loading-error": "Message shown with fullscreen gallery loading error",
  "gallery-loading-error-offline": "Message shown with fullscreen gallery when offline",
  "gallery-loading-error-refresh": "Message shown with fullscreen gallery loading error",
  "gallery-loading-still": "Message shown 5 seconds after a fullscreen gallery image starts loading",
  "gallery-unknown-author": "Message shown if image author is unknown",
  "preview-error-message": "Message shown with a preview loading error",
  "preview-console-error-message": `Message shown in the JavaScript console when a preview cannot be shown due to an error. Params: 
* $1 - Title of the article.
* $2 - Language code of the article.`,
  "read-on-wiki": "Message shown in the Call to Action (CTA) of a preview loading error or disambiguation page",
  "read-more": "The message shown in the footer part of the preview popup that brings user to the wikipedia page to read more about the article",
  "preview-disambiguation-message": `The message shown for disambiguation pages. Params: 
* $1 - Title of the disambiguation page.`,
  "preview-offline-message": "The message shown when offline",
  "preview-offline-cta": "The message shown as the call to action (CTA) when offline"
}, fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pl
}, Symbol.toStringTag, { value: "Module" })), yl = {
  "@metadata": {
    authors: [
      "Ferdinand IF99"
    ]
  },
  "continue-reading": "Bandanya Usoma",
  "gallery-loading-error": "Habayemwo ikosa mu kwugurura iyi sanamu",
  "gallery-loading-error-offline": "Nta interinete ihari",
  "gallery-loading-error-refresh": "Subiramwo",
  "gallery-loading-still": "Biracuguruka"
}, _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yl
}, Symbol.toStringTag, { value: "Module" })), hl = {
  "@metadata": {
    authors: [
      "NGC 54"
    ]
  },
  "continue-reading": "Continuă lectura",
  "gallery-loading-error": "A apărut o eroare la încărcarea acestei imagini",
  "gallery-loading-error-offline": "Nu este disponibilă nicio conexiune la internet.",
  "gallery-loading-error-refresh": "Reîmprospătează",
  "gallery-loading-still": "Încă se încarcă",
  "gallery-unknown-author": "Autor necunoscut",
  "preview-error-message": "A apărut o eroare la afișarea acestei previzualizări.",
  "preview-console-error-message": "Previzualizare indisponibilă pentru articolul '$1' (Limbă: $2)",
  "read-on-wiki": "Citiți pe Wikipedia",
  "read-more": "Citiți mai mult pe Wikipedia",
  "preview-disambiguation-message": "Titlul <strong>$1</strong> este legat de mai mult de un singur articol pe Wikipedia.",
  "preview-offline-message": "Nu este disponibilă nicio conexiune la internet.",
  "preview-offline-cta": "Reîncearcă"
}, wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hl
}, Symbol.toStringTag, { value: "Module" })), vl = {
  "@metadata": {
    authors: [
      "Joetaras"
    ]
  },
  "continue-reading": "Condinue a leggere",
  "gallery-loading-error": "ha assute 'nerrore carecanne st'immaggine",
  "gallery-loading-error-offline": "Nisciuna connessione Indernette disponibbele.",
  "gallery-loading-error-refresh": "Aggiorne",
  "gallery-loading-still": "Stoche a careche angore",
  "gallery-unknown-author": "Autore scanusciute",
  "preview-error-message": "Ha assute 'nu probbleme sus a'u 'ndrucamende de l'andeprime.",
  "preview-console-error-message": "Andeprime indisponibbele pa vôsce '$1' (Lènghe: $2)",
  "read-on-wiki": "'Mbormaziune sus a Uicchipèdie",
  "read-more": "Otre 'mbormaziune sus a Uicchipèdie",
  "preview-disambiguation-message": "'U titole <strong>$1</strong> jè collegate a cchiù de 'na vôsce sus a Uicchipèdie.",
  "preview-offline-message": "Nisciuna connessione Indernette disponibbele.",
  "preview-offline-cta": "Pruève arrete"
}, kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vl
}, Symbol.toStringTag, { value: "Module" })), bl = {
  "@metadata": {
    authors: [
      "Facenapalm",
      "Okras",
      "Pacha Tchernof"
    ]
  },
  "continue-reading": "Продолжить чтение",
  "gallery-loading-error": "Произошла ошибка при загрузке изображения",
  "gallery-loading-error-offline": "Нет подключения к Интернету.",
  "gallery-loading-error-refresh": "Обновить",
  "gallery-loading-still": "Загрузка продолжается",
  "gallery-unknown-author": "Автор неизвестен.",
  "preview-error-message": "Возникла проблема в ходе предпросмотра.",
  "preview-console-error-message": "Предпросмотр недоступен для статьи '$1'  (язык: $2)",
  "read-on-wiki": "Читать в Википедии",
  "read-more": "Читать далее в Википедии",
  "preview-disambiguation-message": "Название <strong>$1</strong> относится к более чем одной статье в Википедии.",
  "preview-offline-message": "Нет подключения к Интернету.",
  "preview-offline-cta": "Попробуйте ещё раз"
}, jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bl
}, Symbol.toStringTag, { value: "Module" })), Sl = {
  "@metadata": {
    authors: [
      "Durga Soren"
    ]
  },
  "gallery-loading-error": "ᱪᱤᱛᱟ.ᱨ ᱞᱟᱫᱮᱜ ᱨᱮ ᱦᱩᱲᱟ.ᱜ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ",
  "gallery-loading-still": "ᱱᱤᱛ ᱦᱚᱸ ᱞᱟᱫᱮᱜ ᱠᱟᱱ ᱜᱮᱭᱟ"
}, Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sl
}, Symbol.toStringTag, { value: "Module" })), $l = {
  "@metadata": {
    authors: [
      "L2212"
    ]
  },
  "continue-reading": "Sighi a lèghere",
  "gallery-loading-error": "B'at àpidu una faddina in su carrigamentu de custa immàgine",
  "gallery-loading-error-offline": "Peruna connessione a ìnternet a disponimentu.",
  "gallery-loading-error-refresh": "Agiorna",
  "gallery-loading-still": "Galu carrighende",
  "gallery-unknown-author": "Autore disconnotu",
  "preview-error-message": "B'at àpidu unu problema in sa visualizatzione de custa antiprima.",
  "preview-console-error-message": "Antiprima no a disponimentu pro s'artìculu '$1' (Limba: $2)",
  "read-on-wiki": "Leghe in Wikipedia",
  "read-more": "Àteras informatziones in Wikipedia",
  "preview-disambiguation-message": "Su tìtulu <strong>$1</strong> est ligadu a prus de un'artìculu in Wikipedia.",
  "preview-offline-message": "Peruna connessione a ìnternet a disponimentu.",
  "preview-offline-cta": "Torra a proare"
}, Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $l
}, Symbol.toStringTag, { value: "Module" })), zl = {
  "@metadata": {
    authors: [
      "Ajeje Brazorf"
    ]
  },
  "continue-reading": "Cuntinua a lèggiri",
  "gallery-loading-error-offline": "Nudda cunnissioni Internet dispunìbbili.",
  "gallery-unknown-author": "Auturi scanusciuta",
  "preview-console-error-message": "Antiprima nun dispunìbbili pâ vuci '$1' (lingua: $2)",
  "read-on-wiki": "Leggi supra Wikipedia",
  "read-more": "Ulteriuri nfurmazziuni supra Wikipedia",
  "preview-offline-message": "Nudda cunnissioni Internet dispunìbbili."
}, Al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zl
}, Symbol.toStringTag, { value: "Module" })), El = {
  "@metadata": {
    authors: [
      "Mehtab ahmed"
    ]
  },
  "continue-reading": "پڙھڻ جاري رکو",
  "gallery-loading-error": "ھن عڪس کي لاھڻ ۾ ڪا چُڪَ ٿي.",
  "gallery-loading-error-offline": "ڪوبہ انٽرنيٽ ڪنيڪشن موجود ناهي.",
  "gallery-loading-error-refresh": "تازو ڪريو",
  "gallery-loading-still": "اڃا لوڊ ٿي رهيو آهي",
  "gallery-unknown-author": "مصنف اڻڄاتل",
  "preview-error-message": "ھي پيش-نگاھ ڏيکارڻ ۾ ڪو مسئلو ھيو.",
  "preview-console-error-message": "مضمون '$1' (ٻولي: $2) لاءِ پيش-نگاھ دستياب ناهي",
  "read-on-wiki": "وڪيپيڊيا تي پڙهو",
  "read-more": "وڪيپيڊيا تي وڌيڪ پڙھو",
  "preview-disambiguation-message": "عنوان <strong>$1</strong> وڪيپيڊيا تي هڪ کان وڌيڪ مضمونن سان لاڳاپيل آهي.",
  "preview-offline-message": "ڪوبہ انٽرنيٽ ڪنيڪشن موجود ناهي.",
  "preview-offline-cta": "ٻيھر ڪوشش ڪريو"
}, Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: El
}, Symbol.toStringTag, { value: "Module" })), Pl = {
  "@metadata": {
    authors: [
      "Vlad5250"
    ]
  },
  "continue-reading": "Nastavite čitati",
  "gallery-loading-error": "Došlo je do greške pri učitavanju ove slike",
  "gallery-loading-error-offline": "Internetska veza nije dostupna.",
  "gallery-loading-error-refresh": "Preučitaj",
  "gallery-loading-still": "I dalje se učitava",
  "gallery-unknown-author": "Nepoznat autor",
  "preview-error-message": "Došlo je do problema prilikom prikazivanja ovog pregleda.",
  "preview-console-error-message": "Pregled nije dostupan za članak '$1' (Jezik: $2)",
  "read-on-wiki": "Pročitajte na Wikipediji",
  "read-more": "Pročitajte više na Wikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1</strong> povezan jes više članaka na Wikipediji.",
  "preview-offline-message": "Internetska veza nije dostupna.",
  "preview-offline-cta": "Pokušajte ponovo"
}, Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pl
}, Symbol.toStringTag, { value: "Module" })), ql = {
  "@metadata": {
    authors: [
      "Olve Utne"
    ]
  },
  "continue-reading": "Biso låhkåmin",
  "gallery-loading-error-refresh": "Lässti bielev åđđåsist",
  "gallery-loading-still": "Änj vil lässtimin",
  "gallery-unknown-author": "Namadis tjállej",
  "preview-error-message": "Ij máhte vuosedit dáv åvvdåvuosedimev.",
  "read-on-wiki": "Lågå Wikipedian",
  "read-more": "Lågå ienap Wikipedian",
  "preview-offline-cta": "Gähttjalada"
}, Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ql
}, Symbol.toStringTag, { value: "Module" })), xl = {
  "@metadata": {
    authors: [
      "Jaroslav.micek",
      "Yardom78"
    ]
  },
  "continue-reading": "Pokračovať v čítaní",
  "gallery-loading-error": "Pri načítavaní tohto obrázku došlo k chybe.",
  "gallery-loading-error-offline": "Nieje dostupné internetové pripojenie.",
  "gallery-loading-error-refresh": "Obnoviť",
  "gallery-loading-still": "Stále načítava",
  "gallery-unknown-author": "Autor neznámy",
  "preview-error-message": "Pri zobrazovaní tohto náhľadu sa objavil problém.",
  "preview-console-error-message": "Pre článok '$1' nie je dostupný náhľad (jazyk: $2)",
  "read-on-wiki": "Čítať na Wikipédii",
  "read-more": "Čítať viac na Wikipédii",
  "preview-disambiguation-message": "Názov  <strong>$1</strong> súvisí s viac než jedným artiklom na Wikipédii.",
  "preview-offline-message": "Nieje dostupné internetové pripojenie.",
  "preview-offline-cta": "Skúsiť znova"
}, Nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xl
}, Symbol.toStringTag, { value: "Module" })), Rl = {
  "@metadata": {
    authors: [
      "Eleassar"
    ]
  },
  "continue-reading": "Nadaljuj branje",
  "gallery-loading-error": "Pri nalaganju te slike je prišlo do napake",
  "gallery-loading-error-offline": "Internetna povezava ni na voljo.",
  "gallery-loading-error-refresh": "Osveži",
  "gallery-loading-still": "Še vedno nalagam",
  "gallery-unknown-author": "Avtor neznan",
  "preview-error-message": "Pri prikazovanju tega predogleda je prišlo do napake.",
  "preview-console-error-message": "Predogled za članek »$1« (jezik: $2) ni na voljo",
  "read-on-wiki": "Berite v Wikipediji",
  "read-more": "Več o tem v Wikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1<&strong> se povezuje z več kot enim člankom v Wikipediji.",
  "preview-offline-message": "Internetna povezava ni na voljo.",
  "preview-offline-cta": "Poskusite znova"
}, Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), Il = {
  "@metadata": {
    authors: [
      "Seipinne"
    ]
  },
  "continue-reading": "Juáđhi luuhâm",
  "gallery-loading-error": "Kove luođđim ij luhostum",
  "gallery-loading-error-offline": "Ij internet-ohtâvuođâ",
  "gallery-loading-error-refresh": "Peivid",
  "gallery-loading-still": "Luođiimin vala-uv",
  "gallery-unknown-author": "Tubdâmettum tahhee",
  "preview-error-message": "Munekejâdem ij pyevti čäittiđ",
  "preview-console-error-message": "Munekejâdem ij lah ooláádmuddoost artikkâlân '$1' (Kielâ: $2)",
  "read-on-wiki": "Luuvâ Wikipediast",
  "read-more": "Luuvâ lase Wikipediast",
  "preview-disambiguation-message": "Paječaalâ <strong>$1</strong> lahta eenâb ko oohtân Wikipedia-artikkâlân.",
  "preview-offline-message": "Ij internet-ohtâvuođâ.",
  "preview-offline-cta": "Iirât uđđâsist"
}, Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Il
}, Symbol.toStringTag, { value: "Module" })), Hl = {
  "@metadata": {
    authors: [
      "Abdullahi"
    ]
  },
  "continue-reading": "Sii Akhri",
  "gallery-loading-error-refresh": "Cusbooneysii",
  "gallery-unknown-author": "Qoraha lama yaqaan",
  "read-on-wiki": "Ka akhri Wikipedia",
  "read-more": "Faahfaahin dheeraad ka aqri Wikipedia"
}, Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hl
}, Symbol.toStringTag, { value: "Module" })), Bl = {
  "@metadata": {
    authors: [
      "Kosovastar"
    ]
  },
  "continue-reading": "Vazhdo leximin",
  "gallery-loading-error": "Pati një gabim gjatë ngarkimit të këtij imazhi",
  "gallery-loading-error-refresh": "Rifresko",
  "gallery-loading-still": "Akoma po ngarkohet",
  "read-on-wiki": "Lexo në Wikipedia",
  "read-more": "Më shumë në Wikipedia"
}, Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bl
}, Symbol.toStringTag, { value: "Module" })), Gl = {
  "@metadata": {
    authors: [
      "Kizule",
      "Milicevic01"
    ]
  },
  "continue-reading": "Настави читање",
  "gallery-loading-error": "Дошло је до грешке при учитавању ове слике",
  "gallery-loading-error-offline": "Нема интернета.",
  "gallery-loading-error-refresh": "Освежи",
  "gallery-loading-still": "Још се учитава",
  "gallery-unknown-author": "Непознат аутор",
  "preview-error-message": "Дошло је до грешке при приказивању овог прегледа.",
  "preview-console-error-message": "Преглед није доступан за чланак „$1” (језик: $2)",
  "read-on-wiki": "Види на Википедији",
  "read-more": "Види више на Википедији",
  "preview-disambiguation-message": "Наслов <strong>$1</strong> се односи на више од једног чланка на Википедији.",
  "preview-offline-message": "Нема доступне интернет конекције.",
  "preview-offline-cta": "Покушај поново"
}, Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gl
}, Symbol.toStringTag, { value: "Module" })), Vl = {
  "@metadata": {
    authors: []
  },
  "continue-reading": "Nastavi čitanje",
  "gallery-loading-error": "Došlo je do greške pri učitavanju ove slike",
  "gallery-loading-error-offline": "Nema interneta.",
  "gallery-loading-error-refresh": "Osveži",
  "gallery-loading-still": "Još se učitava",
  "gallery-unknown-author": "Nepoznat autor",
  "preview-error-message": "Došlo je do greške pri prikazivanju ovog pregleda.",
  "preview-console-error-message": "Pregled nije dostupan za članak '$1' (jezik: $2)",
  "read-on-wiki": "Vidi na Vikipediji",
  "read-more": "Vidi više na Vikipediji",
  "preview-disambiguation-message": "Naslov <strong>$1</strong> se odnosi na više od jednog članka na Vikipediji.",
  "preview-offline-message": "Nema dostupne internet konekcije.",
  "preview-offline-cta": "Pokušaj ponovo"
}, Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vl
}, Symbol.toStringTag, { value: "Module" })), Xl = {
  "@metadata": {
    authors: [
      "Sabelöga",
      "WikiPhoenix"
    ]
  },
  "continue-reading": "Fortsätt läsa",
  "gallery-loading-error": "Ett fel inträffade när sidan laddades in.",
  "gallery-loading-error-offline": "Ingen internetanslutning är tillgänglig.",
  "gallery-loading-error-refresh": "Uppdatera",
  "gallery-loading-still": "Läser fortfarande in",
  "gallery-unknown-author": "Okänd författare",
  "preview-error-message": "Det uppstod ett problem när förhandsvisningen skulle visas.",
  "preview-console-error-message": 'Förhandsgranskning är inte tillgänglig för artikeln "$1" (Språk: $2)',
  "read-on-wiki": "Läs på Wikipedia",
  "read-more": "Läs mer på Wikipedia",
  "preview-disambiguation-message": "Titeln <strong>$1</strong> är relaterad till fler än en artikel på Wikipedia.",
  "preview-offline-message": "Ingen internetanslutning är tillgänglig.",
  "preview-offline-cta": "Försök igen"
}, Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xl
}, Symbol.toStringTag, { value: "Module" })), Zl = {
  "@metadata": {
    authors: [
      "এম আবু সাঈদ"
    ]
  },
  "continue-reading": "ꠚꠠꠣ ꠍꠣꠟꠣꠁꠀ ꠎꠣꠅꠇꠣ",
  "gallery-loading-error": "ꠍꠛꠤꠉꠥ ꠟꠃꠒ ꠅꠀꠔ ꠡꠝꠂꠡꠡꠣ ꠅꠁꠉꠦꠍ",
  "gallery-loading-error-offline": "ꠁꠘ꠆ꠐꠣꠞꠘꠦꠐꠞ ꠡꠋꠉꠧ ꠚꠣꠞ ꠘꠣ",
  "gallery-loading-error-refresh": "ꠛꠣꠃꠇ꠆ꠇꠞꠧ",
  "gallery-loading-still": "ꠄꠛꠧ ꠟꠃꠒ ꠅꠞ",
  "gallery-unknown-author": "ꠅꠍꠤꠘ ꠟꠦꠈꠞꠣ",
  "preview-error-message": "ꠁ ꠀꠉ-ꠖꠦꠈꠘꠤ ꠖꠦꠈꠣꠘꠤꠞ ꠡꠝꠄꠇꠥ ꠄꠈꠣꠘ ꠡꠝꠂꠡꠡꠣ ꠅꠁꠍꠦ",
  "preview-console-error-message": "'$1' ꠚꠣꠔꠣ ꠈꠣꠘꠔꠣꠞ ꠀꠉ-ꠖꠦꠈꠘꠤ ꠘꠣꠄ (ꠝꠣꠔ: $2)",
  "read-on-wiki": "ꠃꠁꠇꠤꠙꠤꠒꠤꠀꠔ ꠚꠠꠇꠣ",
  "read-more": "ꠃꠁꠇꠤꠙꠤꠒꠤꠀꠔ ꠀꠞꠧ ꠚꠠꠇꠣ",
  "preview-disambiguation-message": "ꠐꠣꠁꠐꠦꠟ <strong>$1</strong> ꠁꠇꠣꠘ ꠃꠁꠇꠤꠙꠤꠒꠤꠀꠞ ꠄꠈ ꠔꠘꠦ ꠛꠦꠡꠤ ꠚꠣꠔꠣ ꠡꠝ꠆ꠙꠞꠇꠤꠔ",
  "preview-offline-message": "ꠁꠘ꠆ꠐꠣꠞꠘꠦꠐ ꠝꠤꠟꠦꠞ ꠘꠣ",
  "preview-offline-cta": "ꠢꠤꠛ꠆ꠛꠣꠞ ꠍꠦꠡꠐꠣ ꠈꠞꠂꠘ"
}, Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zl
}, Symbol.toStringTag, { value: "Module" })), es = {
  "@metadata": {
    authors: [
      "Krol111"
    ]
  },
  "continue-reading": "Czytej dalij",
  "gallery-loading-error": "We czasie ładowanio tego ôbrozka wystōmpiōł feler",
  "gallery-loading-error-offline": "Internec niydostympny.",
  "gallery-loading-error-refresh": "Ôdświyż",
  "gallery-loading-still": "Durch ładujã",
  "gallery-unknown-author": "Autor niyznōmy",
  "preview-error-message": "Wystōmpiōł feler przi wyświytlaniu podglōndu.",
  "preview-console-error-message": "Nie ma podglōndu lo artikla „$1” (godka: $2)",
  "read-on-wiki": "Przeczytej na Wikipedyji",
  "read-more": "Przeczytej wiyncyj na Wikipedyji",
  "preview-disambiguation-message": "Titel <strong>$1</strong> mo cosik ze wiyncyj jak jednym artiklym na Wikipedyji.",
  "preview-offline-message": "Internec niydostympny.",
  "preview-offline-cta": "Sprōbuj zaś"
}, rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: es
}, Symbol.toStringTag, { value: "Module" })), as = {
  "@metadata": {
    authors: [
      "Fahimrazick",
      "Siddhan"
    ]
  },
  "continue-reading": "வாசிப்பைத் தொடர்",
  "gallery-loading-error": "இந்தப் படத்தை ஏற்றுவதில் பிழை இருந்தது",
  "gallery-loading-error-offline": "இணைய இணைப்பு இல்லை",
  "gallery-loading-error-refresh": "புதுப்பி",
  "gallery-loading-still": "இன்னும் ஏற்றப்படுகிறது",
  "gallery-unknown-author": "அறயப்படாத ஆசிரியர்",
  "preview-error-message": "இந்த மாதிரிக்காட்சியைக் காண்பிக்கும் போது சிக்கல் ஏற்பட்டது.",
  "preview-console-error-message": "'$1' கட்டுரைக்கான முன்னோட்டம் கிடைக்கவில்லை (மொழி: $2)",
  "read-on-wiki": "விக்கிபீடியாவில் வாசி",
  "read-more": "விக்கிபீடியாவில் மேலும் வாசி",
  "preview-disambiguation-message": "தலைப்பு <strong>$1</strong> என்பது விக்கிபீடியாவில் ஒன்றுக்கும் மேற்பட்ட கட்டுரைகளுடன் தொடர்புடையது.",
  "preview-offline-message": "இணைய இணைப்பு இல்லை",
  "preview-offline-cta": "மீண்டும் முயல்க"
}, is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: as
}, Symbol.toStringTag, { value: "Module" })), ns = {
  "@metadata": {
    authors: [
      "Chaduvari",
      "Veeven"
    ]
  },
  "continue-reading": "చదవడం కొనసాగించండి",
  "gallery-loading-error": "ఈ బొమ్మను చూపించడంలో పొరపాటు జరిగింది",
  "gallery-loading-error-offline": "అంతర్జాల అనుసంధానమేదీ అందుబాటులో లేదు.",
  "gallery-loading-error-refresh": "తాజాపరుచు",
  "gallery-loading-still": "ఇంకా లోడవుతోంది",
  "gallery-unknown-author": "గుర్తుతెలియని రచయిత",
  "preview-error-message": "ఈ మునుజూపు చూపుటలో ఏదో సమస్య వచ్చింది.",
  "preview-console-error-message": "'$1' వ్యాసానికి మునుజూపు అందుబాటులో లేదు (భాష: $2)",
  "read-on-wiki": "వికీపీడియాలో చదవండి",
  "read-more": "ఇంకా వికీపీడియాలో చదవండి",
  "preview-disambiguation-message": "<strong>$1</strong> పేరు ఒకటి కంటే ఎక్కువ వికీపీడియా వ్యాసాలకు సంబంధించివుంది.",
  "preview-offline-message": "అంతర్జాల అనుసందానమేదీ అందుబాటులో లేదు.",
  "preview-offline-cta": "మళ్ళీ ప్రయత్నించండి"
}, os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ns
}, Symbol.toStringTag, { value: "Module" })), ts = {
  "@metadata": {
    authors: [
      "Just Sayori",
      "Lookruk",
      "Patsagorn Y.",
      "Prame Tan"
    ]
  },
  "continue-reading": "อ่านต่อ",
  "gallery-loading-error": "เกิดข้อผิดพลาดขณะโหลดภาพนี้",
  "gallery-loading-error-offline": "ไม่มีสัญญาณอินเทอร์เน็ต",
  "gallery-loading-error-refresh": "รีเฟรช",
  "gallery-loading-still": "กำลังโหลดอยู่",
  "gallery-unknown-author": "ไม่รู้จักผู้เขียน",
  "preview-error-message": "มีปัญหาในการแสดงผลตัวอย่างนี้",
  "preview-console-error-message": 'ไม่มีตัวอย่างสำหรับบทความ "$1" (ภาษา: $2)',
  "read-on-wiki": "อ่านบนวิกิพีเดีย",
  "read-more": "อ่านเพิ่มเติมบนวิกิพีเดีย",
  "preview-disambiguation-message": "หัวข้อ <strong>$1</strong> เกี่ยวข้องกับบทความบนวิกิพีเดียมากกว่าหนึ่งบทความ",
  "preview-offline-message": "ไม่มีสัญญาณอินเทอร์เน็ต",
  "preview-offline-cta": "ลองอีกครั้ง"
}, ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ts
}, Symbol.toStringTag, { value: "Module" })), ss = {
  "@metadata": {
    authors: [
      "Joanmp17"
    ]
  },
  "gallery-loading-error-refresh": "ኣሓድስ",
  "read-on-wiki": "ኣብ ዊኪፐድያ ኣንብብ",
  "read-more": "ተወሳኺ ኣብ ዊኪፐድያ ኣንብብ"
}, ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), gs = {
  "@metadata": {
    authors: [
      "Bbeshir"
    ]
  },
  "continue-reading": "ቅራኣት ዋስል",
  "gallery-unknown-author": "ለይት ኣማራ ኬትባይ",
  "read-on-wiki": "ዲብ ዊኪፐድያ ቅርእዎ",
  "read-more": "ዲብ ዊኪፐድያ ዚያደት ቅርኦ",
  "preview-offline-cta": "ካልእ ጅርብ"
}, us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gs
}, Symbol.toStringTag, { value: "Module" })), cs = {
  "@metadata": {
    authors: [
      "TayfunEt.",
      "Zolgoyo"
    ]
  },
  "continue-reading": "Okaň",
  "gallery-loading-error": "Bu suraty ýüklemekde ýalňyşlyk boldy",
  "gallery-loading-error-offline": "Internet birikmesi ýok.",
  "gallery-loading-error-refresh": "Täzelendir",
  "gallery-loading-still": "Entegem ýükleýär",
  "gallery-unknown-author": "Awtory näbelli",
  "preview-error-message": "Bu deslapky syn görkezilende bir mesele ýüze çykdy.",
  "preview-console-error-message": "'$1' makalasy üçin deslapky syn (Dil: $2)",
  "read-on-wiki": "Wikipediýada okaň",
  "read-more": "Wikipediýada has giňişleýin okaň",
  "preview-disambiguation-message": "Ady <strong>$1</strong> Wikipediýada birden köp makala bilen baglanyşykly.",
  "preview-offline-message": "Internet birikmesi ýok.",
  "preview-offline-cta": "Täzeden synanş"
}, ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), ps = {
  "@metadata": {
    authors: [
      "GinawaSaHapon",
      "Mrkczr"
    ]
  },
  "continue-reading": "Magpatuloy sa pagbabasa",
  "gallery-loading-error": "Nagka-error habang nilo-load ang larawang ito",
  "gallery-loading-error-offline": "Hindi konektado sa internet.",
  "gallery-loading-error-refresh": "I-refresh",
  "gallery-loading-still": "Naglo-load pa rin",
  "gallery-unknown-author": "Di kilalang may-akda",
  "preview-error-message": "Nagkaroon ng isyu habang pinapakita ang pasilip na ito.",
  "preview-console-error-message": "Walang pasilip para sa artikulong '$1' (Wika: $2)",
  "read-on-wiki": "Basahin sa Wikipedia",
  "read-more": "Magbasa pa sa Wikipedia",
  "preview-disambiguation-message": "Nauugnay ang pamagat na <strong>$1</strong> sa higit sa isang artikulo sa Wikipedia.",
  "preview-offline-message": "Hindi konektado sa internet.",
  "preview-offline-cta": "Subukan muli"
}, fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ps
}, Symbol.toStringTag, { value: "Module" })), ys = {
  "@metadata": {
    authors: [
      "Patriot Kor",
      "Patriot Kur",
      "Гусейн"
    ]
  },
  "continue-reading": "Hande Dəvomkə",
  "gallery-loading-error": "Шикили әловә кардејәдә хәто беше",
  "gallery-loading-error-offline": "İnterneti əloğə ni.",
  "gallery-loading-error-refresh": "Nukardə",
  "gallery-loading-still": "Hələn bo",
  "gallery-unknown-author": "Noməlumə mıəllif",
  "preview-error-message": "Бә нав дијә карде хәто беше.",
  "preview-console-error-message": "Preview unavailable for article '$1' (Language: $2)",
  "read-on-wiki": "Byhand Vikipedijədə",
  "read-more": "Ve byhand Vikipedijədə",
  "preview-disambiguation-message": "Ном <strong>$1</strong> ујғуне бә и гыләјсә ве Википедиа мәғолә.",
  "preview-offline-message": "Interneti əloğə ni.",
  "preview-offline-cta": "Nubəsəton čəhd bykə"
}, _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ys
}, Symbol.toStringTag, { value: "Module" })), hs = {
  "@metadata": {
    authors: [
      "SpanishSnake"
    ]
  },
  "continue-reading": "o awen lukin",
  "gallery-loading-error": "sitelen ni li kama la, pakala li kama.",
  "gallery-loading-error-offline": "linja ala li lon.",
  "gallery-loading-error-refresh": "o kama sin",
  "gallery-loading-still": "ijo li awen kama",
  "gallery-unknown-author": "jan pali li sona ala",
  "preview-error-message": "lukin li kama la, pakala li kama.",
  "preview-console-error-message": "$2 la, lukin pi lipu '$1' li lon ala",
  "read-on-wiki": "o lukin lon lipu Wikipesija",
  "read-more": "o lukin e mute lon lipu Wikipesija",
  "preview-disambiguation-message": "nimi <strong>$1</strong> li tawa lipu mute lon lipu Wikipesija.",
  "preview-offline-message": "linja ala li lon.",
  "preview-offline-cta": "o alasa sin"
}, ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), vs = {
  "@metadata": {
    authors: [
      "Hedda",
      "MuratTheTurkish",
      "Sayginer"
    ]
  },
  "continue-reading": "Okumaya Devam Et",
  "gallery-loading-error": "Bu görsel yüklenirken bir hata oluştu",
  "gallery-loading-error-offline": "İnternet bağlantısı yok.",
  "gallery-loading-error-refresh": "Yenile",
  "gallery-loading-still": "Hâlâ yükleniyor",
  "gallery-unknown-author": "Yazar bilinmiyor",
  "preview-error-message": "Bu önizlemeyi görüntülerken bir sorun oluştu.",
  "preview-console-error-message": "'$1' (Dil: $2) maddesinin önizlemesi mevcut değil",
  "read-on-wiki": "Vikipedi'de oku",
  "read-more": "Vikipedi'de daha fazla okuyun",
  "preview-disambiguation-message": "<strong>$1</strong> başlığı, Vikipedi'deki birden fazla madde ile ilgilidir.",
  "preview-offline-message": "İnternet bağlantısı yok.",
  "preview-offline-cta": "Tekrar dene"
}, ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" })), bs = {
  "@metadata": {
    authors: [
      "Run Li",
      "Ерней"
    ]
  },
  "continue-reading": "Укуны дәвам итү",
  "gallery-loading-error": "Рәсем төягәндә хата килеп чыкты",
  "gallery-loading-error-offline": "Итернетка тоташмаган",
  "gallery-loading-error-refresh": "Яңарту",
  "gallery-loading-still": "Төяү бара",
  "gallery-unknown-author": "Автор билгесез",
  "preview-error-message": "Алдан караганда хата килеп чыкты",
  "preview-console-error-message": "$2 телендәге '$1' мәкаләсен алдан карап булмый",
  "read-on-wiki": "Википедиядә уку",
  "read-more": "Википедиядә тулырак уку",
  "preview-disambiguation-message": "Википедиядә <strong>$1</strong> исемле берничә мәкалә бар",
  "preview-offline-message": "Итернетка тоташмаган",
  "preview-offline-cta": "Кабатлагыз"
}, js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), Ss = {
  "@metadata": {
    authors: [
      "Tumbuka Arch"
    ]
  },
  "continue-reading": "Pitilizgani kuŵelenga",
  "gallery-loading-error": "Panguwa suzgo pakuloda chithuzi ichi",
  "gallery-loading-error-offline": "Intaneti yachimbila.",
  "gallery-loading-error-refresh": "Yezgaso",
  "gallery-loading-still": "Ichali kuloda",
  "gallery-unknown-author": "Mlemba wambula zina",
  "preview-error-message": "Pasangika suzgo pakuoneska ichi",
  "preview-console-error-message": "Preview unavailable for article '$1' (Language: $2)",
  "read-on-wiki": "Ẇelengani pa Wikipedia",
  "read-more": "Ẇelengani vinandi pa Wikipedia",
  "preview-disambiguation-message": "Mutu uwu <strong>$1</strong> una vyakulemba vinandi pa Wikipedia.",
  "preview-offline-message": "Intaneti palije.",
  "preview-offline-cta": "Yezgaso"
}, Ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ss
}, Symbol.toStringTag, { value: "Module" })), $s = {
  "@metadata": {
    authors: [
      "Riverman"
    ]
  },
  "continue-reading": "Номчуурун уламчылаар",
  "gallery-loading-error": "Чурукту чүдүрүп турда чазыг болу берген",
  "gallery-loading-error-offline": "Интернетке коштунулга чок.",
  "gallery-loading-error-refresh": "Чаартыр",
  "gallery-loading-still": "Ам-даа чүдүрүп тур",
  "gallery-unknown-author": "Автору билдинмес",
  "preview-error-message": "Пре-көрүлде көргүзүп турда проблема үнген.",
  "preview-console-error-message": "'$1' деп чүүл пре-көрүлдези болдунмас (Дыл: $2)",
  "read-on-wiki": "Википедияга номчуур",
  "read-more": "Википедияга ам-даа номчуур",
  "preview-disambiguation-message": "<strong>$1</strong> деп ат Википедияда чаңгыстан хөй чүүлге хамааржыр.",
  "preview-offline-message": "Интернетке коштунулга чок.",
  "preview-offline-cta": "Катап шенептиңер"
}, Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" })), zs = {
  "@metadata": {
    authors: [
      "Kotwys"
    ]
  },
  "gallery-loading-error": "Та суредэз кыскыку янгыш кылдӥз",
  "gallery-loading-error-refresh": "Выльдоно",
  "gallery-loading-still": "Али но кыскиське"
}, As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zs
}, Symbol.toStringTag, { value: "Module" })), Es = {
  "@metadata": {
    authors: [
      "DDPAT",
      "Ice bulldog",
      "Piramidion"
    ]
  },
  "continue-reading": "Продовжити читання",
  "gallery-loading-error": "Сталася помилка при завантаженні цього зображення",
  "gallery-loading-error-offline": "Немає підключення до Інтернету.",
  "gallery-loading-error-refresh": "Оновити",
  "gallery-loading-still": "Все ще завантажується",
  "gallery-unknown-author": "Автор невідомий",
  "preview-error-message": "Сталася якась проблема під час показу цього попереднього перегляду.",
  "preview-console-error-message": "Попередній перегляд статті «$1» недоступний (мова: $2)",
  "read-on-wiki": "Читати у Вікіпедії",
  "read-more": "Читати більше у Вікіпедії",
  "preview-disambiguation-message": "Назва <strong>$1</strong> стосується більш ніж одної статті у Вікіпедії.",
  "preview-offline-message": "Немає підключення до Інтернету.",
  "preview-offline-cta": "Спробуйте ще раз"
}, Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es
}, Symbol.toStringTag, { value: "Module" })), Ps = {
  "@metadata": {
    authors: [
      "Zafar Shamsiddinov",
      "Шоҳидахоним"
    ]
  },
  "continue-reading": "O‘qishni davom ettirish",
  "gallery-loading-error": "Rasmni yuklashda xatolik",
  "gallery-loading-error-offline": "Tarmoqqa ulanish mavjud emas",
  "gallery-loading-error-refresh": "Yangilash",
  "gallery-loading-still": "Hali ham yuklanmoqda",
  "gallery-unknown-author": "Muallif nomaʼlum",
  "preview-error-message": "Oldindan koʻrishni namoyish qilishda xatolik yuz berdi.",
  "preview-console-error-message": "'$1' maqolasini oldindan koʻrib boʻlmaydi (Tili: $2)",
  "read-on-wiki": "Vikipediyada oʻqing",
  "read-more": "Vikipediada batafsil oʻqing",
  "preview-disambiguation-message": "<strong>$1</strong> sarlavhasi Vikipediyadagi bir nechta maqolalarga tegishlidir.",
  "preview-offline-message": "Internetga ulanilmagan.",
  "preview-offline-cta": "Qaytadan"
}, Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ps
}, Symbol.toStringTag, { value: "Module" })), qs = {
  "@metadata": {
    authors: [
      "Keo010122",
      "Nguyễn Mạnh An"
    ]
  },
  "continue-reading": "Tiếp tục đọc",
  "gallery-loading-error": "Đã xảy ra lỗi khi tải hình ảnh này",
  "gallery-loading-error-offline": "Không có kết nối internet.",
  "gallery-loading-error-refresh": "Làm mới",
  "gallery-loading-still": "Đang tải",
  "gallery-unknown-author": "Tác giả không rõ",
  "preview-error-message": "Đã xảy ra sự cố khi hiển thị bản xem trước này.",
  "preview-console-error-message": "Không có bản xem trước cho bài viết '$1' (Ngôn ngữ: $2)",
  "read-on-wiki": "Đọc trên Wikipedia",
  "read-more": "Đọc thêm trên Wikipedia",
  "preview-disambiguation-message": "Tiêu đề <strong>$1</strong> có liên quan đến nhiều bài viết trên Wikipedia.",
  "preview-offline-message": "Không có kết nối internet.",
  "preview-offline-cta": "Thử lại"
}, Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qs
}, Symbol.toStringTag, { value: "Module" })), xs = {
  "@metadata": {
    authors: [
      "Ella Lachow"
    ]
  },
  "continue-reading": "Nabbabuwaa Doomma",
  "gallery-loading-error": "Ha misiliyaa ehiishin balay de'ees",
  "gallery-loading-error-offline": "Interneetee gaytotettay baawa.",
  "gallery-loading-error-refresh": "Ooraxissa",
  "gallery-loading-still": "Hanno gaakkanawu ehiidi de'ees",
  "gallery-unknown-author": "Xaafidaagee erettenna",
  "preview-error-message": "Ha zari be'uwaa bessishin metoy merettiis.",
  "preview-console-error-message": "Xuufiya $1 (Doonaa:$2) zaari be'oy baawa",
  "read-on-wiki": "Wikkiimiidiyaan nabbaba",
  "read-more": "Daruwaa Wikkiipeediyaan nabbaba",
  "preview-disambiguation-message": "Huuphe yohoy <strong>$1</strong> Wikkiipeediyaan issuwaappe dariyaa xaafotuura gayttees.",
  "preview-offline-message": "Interneetee gaytotettay baawa.",
  "preview-offline-cta": "Zaara mala"
}, Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), Rs = {
  "@metadata": {
    authors: [
      "Lea.Fakauvea"
    ]
  },
  "continue-reading": "Hoko atu tau lau",
  "gallery-loading-error": "Ne'e hala te fakahā o te pāki aeni",
  "gallery-loading-error-offline": "Mole ha'ele te neti.",
  "gallery-loading-error-refresh": "Fakafo'ou",
  "gallery-loading-still": "Kei lolotoga mai",
  "gallery-unknown-author": "Mole ilo'i pe ko ai ne'e ina tohi",
  "preview-error-message": "Ne'e tō hala tona fakahā atu fakatomu'a.",
  "read-on-wiki": "Lau i te Wikipedia",
  "read-more": "Fakakātoā atu tona lau i te Wikipedia",
  "preview-disambiguation-message": "Pāsina <strong>$1</strong> e 'alu tahi mo 'ihi ake pāsina o te Wikipedia.",
  "preview-offline-message": "Mole ha'ele te neti.",
  "preview-offline-cta": "Toe faiga'i."
}, Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rs
}, Symbol.toStringTag, { value: "Module" })), Is = {
  "@metadata": {
    authors: [
      "Алия"
    ]
  },
  "continue-reading": "Цааран умшх",
  "gallery-loading-error": "Зургиг умшхд эндү һарла",
  "gallery-loading-error-offline": "Интернет холвлт бәәхш.",
  "gallery-loading-error-refresh": "Дәкн ацалх",
  "gallery-loading-still": "Ацалсар бәәнә",
  "gallery-unknown-author": "Зокаһач тодрха биш",
  "preview-error-message": "Урдчлҗ харх йовцд асудл һарла.",
  "preview-console-error-message": "' $1 ' өгүллиг урдчлн харх болмҗго (келн: $2)",
  "read-on-wiki": "Википедиаһас умштн",
  "read-more": "Википедиаһас делгрңгү умштн",
  "preview-disambiguation-message": "<strong>$1</strong> һарцгнь Википедиа деерк негнәс олн өгүллтә холвата бәәнә.",
  "preview-offline-message": "Интернет холвлт бәәхш.",
  "preview-offline-cta": "Дәкн орлдтн"
}, Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Is
}, Symbol.toStringTag, { value: "Module" })), Hs = {
  "@metadata": {
    authors: [
      "Narazeni"
    ]
  },
  "continue-reading": "კითხირიშ გაგჷნძორაფა",
  "gallery-loading-error": "თე სურათიშ დინოხარგუაშ ბორჯის ჩილათაქ მოხვადჷ",
  "gallery-loading-error-offline": "ვა რე ინტერნეტწკჷმა ჭირინაფა",
  "gallery-loading-error-refresh": "გოახალაფა",
  "gallery-loading-still": "ასეშა იხარგჷ",
  "gallery-unknown-author": "ავტორი უჩინებუ რე",
  "preview-error-message": "თე გიწოთოლორაფაშ ძირაფაშ ბორჯის პრობლემაქ მუკორჩქინდჷ.",
  "preview-console-error-message": "გიწოთოლორაფა ვა რე ხემიოჭირონაფუ სტატიაშო '1' (ნინა: $2)",
  "read-on-wiki": "ვიკიპედიას კითხირი",
  "read-more": "უმოსიშ კითხირი ვიკიპედიას",
  "preview-disambiguation-message": "დუდჯოხო <strong>$1</strong> ვიკიპედიას ართშე უმოსი სტატიაწკჷმა რე მერსხილი.",
  "preview-offline-message": "ვა რე ინტერნეტწკჷმა რსხუ.",
  "preview-offline-cta": "კჷნ ქოცადით"
}, Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs
}, Symbol.toStringTag, { value: "Module" })), Bs = {
  "@metadata": {
    authors: [
      "Karapananguasú Kururú Teremembé",
      "Maracajá Teremembé"
    ]
  },
  "continue-reading": "E-kaçakiri umũgitá",
  "gallery-loading-error": "Umereçe'ana yepé yawiçawa ĩdé reiku'ana rewatá kuá çãgawa",
  "gallery-loading-error-offline": "Ti aikué yumũdiçawa internet upé yukuawa.",
  "gallery-loading-error-refresh": "Mukuiriwara",
  "gallery-loading-still": "Uwatá uikú raĩ",
  "gallery-unknown-author": "Munhãgara kanhẽma",
  "preview-error-message": "Umereçe'ana yepé iwaçuçawa umukameẽ ramẽ kuá maãgawa enũdé.",
  "preview-console-error-message": "Maãgawa enũdé yukuawaĩma kuatiara '$1' arã (Language: $2)",
  "read-on-wiki": "E-maã wikipedia upé",
  "read-more": "E-mũgitá píri Wikipedia upé",
  "preview-disambiguation-message": "Titapawa <strong>$1</strong> uikú umuatiana yepé píri kuatiara Wikipedia upé.",
  "preview-offline-message": "Ti aikué yumũdiçawa internet irũ yukuawa.",
  "preview-offline-cta": "E-çaá amũ ruê"
}, Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bs
}, Symbol.toStringTag, { value: "Module" })), Gs = {
  "@metadata": {
    authors: [
      "Winston Sung"
    ]
  },
  "continue-reading": "繼續睇",
  "gallery-loading-error": "載入呢張圖嗰陣出現錯誤",
  "gallery-loading-error-offline": "上唔到網。",
  "gallery-loading-error-refresh": "重新整理",
  "gallery-loading-still": "仲載入緊",
  "gallery-unknown-author": "作者未知",
  "preview-error-message": "顯示呢個預覽嗰陣出現問題。",
  "preview-console-error-message": "文章「$1」無法預覽（語言：$2）",
  "read-on-wiki": "喺維基百科上面睇",
  "read-more": "喺維基百科上面睇多啲",
  "preview-disambiguation-message": "標題<strong>$1</strong>同維基百科入面多過一篇文章有關。",
  "preview-offline-message": "上唔到網。",
  "preview-offline-cta": "再試過"
}, Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" })), Vs = {
  "@metadata": {
    authors: [
      "Hakim1bal",
      "Ya2sine"
    ]
  },
  "continue-reading": "ⵙⵎⴷ ⵙⵓⵍ ⵜⵉⵖⵔⵉ",
  "gallery-loading-error-refresh": "ⵙⵎⴰⵢⵏⵓ",
  "gallery-loading-still": "ⵉⵙⵓⵍ ⵓⵣⴷⴰⵎ",
  "gallery-unknown-author": "ⴰⵎⴳⴰⵢ ⴰⵔⵉⵙⵎ",
  "read-on-wiki": "ⵖⵔ ⴳ ⵡⵉⴽⵉⴱⵉⴷⵢⴰ",
  "read-more": "ⵖⵔ ⵓⴳⴳⴰⵔ ⴳ ⵡⵉⴽⵉⴱⵉⴷⵢⴰ"
}, Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vs
}, Symbol.toStringTag, { value: "Module" })), Xs = {
  "@metadata": {
    authors: [
      "Gerongfenh",
      "GuoPC",
      "Shizhao",
      "SkEy",
      "沈澄心"
    ]
  },
  "continue-reading": "继续阅读",
  "gallery-loading-error": "加载这个图像时出现了问题。",
  "gallery-loading-error-offline": "无可用的因特网连接",
  "gallery-loading-error-refresh": "刷新",
  "gallery-loading-still": "仍在读取",
  "gallery-unknown-author": "作者不明",
  "preview-error-message": "显示此预览时出现问题",
  "preview-console-error-message": "条目“$1”无法预览（语言：$2）",
  "read-on-wiki": "在维基百科上阅读",
  "read-more": "在维基百科上阅读更多内容",
  "preview-disambiguation-message": "在维基百科上，标题<strong>$1</strong>对应多篇条目。",
  "preview-offline-message": "无可用的因特网连接",
  "preview-offline-cta": "重试"
}, Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xs
}, Symbol.toStringTag, { value: "Module" })), Zs = {
  "@metadata": {
    authors: [
      "Kly"
    ]
  },
  "continue-reading": "繼續閱讀",
  "gallery-loading-error": "載入此圖片時發生錯誤",
  "gallery-loading-error-offline": "沒有可用的網路連線。",
  "gallery-loading-error-refresh": "重新整理",
  "gallery-loading-still": "繼續載入",
  "gallery-unknown-author": "作者未知",
  "preview-error-message": "在顯示此預覽時出現問題。",
  "preview-console-error-message": "條目「$1」無法預覽（語言：$2）",
  "read-on-wiki": "在維基百科上閱讀",
  "read-more": "在維基百科閱讀更多條目",
  "preview-disambiguation-message": "標題<strong>$1</strong>與維基百科裡一個以上條目相關。",
  "preview-offline-message": "沒有可用的網路連線。",
  "preview-offline-cta": "再試一次"
}, Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zs
}, Symbol.toStringTag, { value: "Module" })), ed = {
  "@metadata": {
    authors: [
      "StarrySky",
      "捍粵者"
    ]
  },
  "continue-reading": "繼續閱讀",
  "gallery-loading-error": "載入此圖片時發生錯誤。",
  "gallery-loading-error-offline": "沒有可用的網路連線。",
  "gallery-loading-error-refresh": "刷新",
  "gallery-loading-still": "繼續載入",
  "gallery-unknown-author": "作者未知",
  "preview-error-message": "在顯示此預覽時出現問題。",
  "preview-console-error-message": "條目「$1」無法預覽（語言：$2）",
  "read-on-wiki": "在維基百科上閱讀",
  "read-more": "在維基百科上閱讀更多",
  "preview-disambiguation-message": "標題<strong>$1</strong>與維基百科一條以上條目有關。",
  "preview-offline-message": "沒有可用的網路連線。",
  "preview-offline-cta": "再試一次"
}, rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ed
}, Symbol.toStringTag, { value: "Module" })), _e = {
  en: Sa
}, F = (e, r, ...a) => {
  if (!_e[e])
    try {
      _e[e] = ad(`./../i18n/${e}.json`).default;
    } catch (o) {
      _e[e] = {};
    }
  let n = _e[e] && _e[e][r] || _e.en[r] || r;
  return a.forEach((o, t) => {
    n = n.replace(new RegExp(`\\$${t + 1}`, "g"), o);
  }), n;
};
function ad(e) {
  switch (e) {
    case "./../i18n/acm":
    case "./../i18n/acm.json":
      return vi;
    case "./../i18n/ann":
    case "./../i18n/ann.json":
      return bi;
    case "./../i18n/anp":
    case "./../i18n/anp.json":
      return Si;
    case "./../i18n/ar":
    case "./../i18n/ar.json":
      return $i;
    case "./../i18n/as":
    case "./../i18n/as.json":
      return zi;
    case "./../i18n/av":
    case "./../i18n/av.json":
      return Ei;
    case "./../i18n/az":
    case "./../i18n/az.json":
      return Pi;
    case "./../i18n/ba":
    case "./../i18n/ba.json":
      return qi;
    case "./../i18n/ban":
    case "./../i18n/ban.json":
      return xi;
    case "./../i18n/bar":
    case "./../i18n/bar.json":
      return Ri;
    case "./../i18n/bcc":
    case "./../i18n/bcc.json":
      return Ii;
    case "./../i18n/be-tarask":
    case "./../i18n/be-tarask.json":
      return Hi;
    case "./../i18n/bew":
    case "./../i18n/bew.json":
      return Bi;
    case "./../i18n/bjn":
    case "./../i18n/bjn.json":
      return Gi;
    case "./../i18n/blk":
    case "./../i18n/blk.json":
      return Vi;
    case "./../i18n/bn":
    case "./../i18n/bn.json":
      return Xi;
    case "./../i18n/br":
    case "./../i18n/br.json":
      return Zi;
    case "./../i18n/bto":
    case "./../i18n/bto.json":
      return en;
    case "./../i18n/ca":
    case "./../i18n/ca.json":
      return an;
    case "./../i18n/ce":
    case "./../i18n/ce.json":
      return on;
    case "./../i18n/ckb":
    case "./../i18n/ckb.json":
      return ln;
    case "./../i18n/co":
    case "./../i18n/co.json":
      return dn;
    case "./../i18n/crh-latn":
    case "./../i18n/crh-latn.json":
      return un;
    case "./../i18n/cs":
    case "./../i18n/cs.json":
      return mn;
    case "./../i18n/cy":
    case "./../i18n/cy.json":
      return fn;
    case "./../i18n/da":
    case "./../i18n/da.json":
      return _n;
    case "./../i18n/de":
    case "./../i18n/de.json":
      return wn;
    case "./../i18n/diq":
    case "./../i18n/diq.json":
      return kn;
    case "./../i18n/el":
    case "./../i18n/el.json":
      return jn;
    case "./../i18n/en-gb":
    case "./../i18n/en-gb.json":
      return Tn;
    case "./../i18n/en":
    case "./../i18n/en.json":
      return $n;
    case "./../i18n/es":
    case "./../i18n/es.json":
      return zn;
    case "./../i18n/fa":
    case "./../i18n/fa.json":
      return En;
    case "./../i18n/fat":
    case "./../i18n/fat.json":
      return Pn;
    case "./../i18n/fi":
    case "./../i18n/fi.json":
      return qn;
    case "./../i18n/fr":
    case "./../i18n/fr.json":
      return xn;
    case "./../i18n/frc":
    case "./../i18n/frc.json":
      return Rn;
    case "./../i18n/gcf":
    case "./../i18n/gcf.json":
      return In;
    case "./../i18n/gd":
    case "./../i18n/gd.json":
      return Hn;
    case "./../i18n/gl":
    case "./../i18n/gl.json":
      return Bn;
    case "./../i18n/glk":
    case "./../i18n/glk.json":
      return Gn;
    case "./../i18n/gn":
    case "./../i18n/gn.json":
      return Vn;
    case "./../i18n/grc":
    case "./../i18n/grc.json":
      return Xn;
    case "./../i18n/gu":
    case "./../i18n/gu.json":
      return Zn;
    case "./../i18n/gv":
    case "./../i18n/gv.json":
      return eo;
    case "./../i18n/ha":
    case "./../i18n/ha.json":
      return ao;
    case "./../i18n/he":
    case "./../i18n/he.json":
      return no;
    case "./../i18n/hi":
    case "./../i18n/hi.json":
      return to;
    case "./../i18n/hr":
    case "./../i18n/hr.json":
      return so;
    case "./../i18n/ht":
    case "./../i18n/ht.json":
      return uo;
    case "./../i18n/hu":
    case "./../i18n/hu.json":
      return mo;
    case "./../i18n/hy":
    case "./../i18n/hy.json":
      return fo;
    case "./../i18n/hyw":
    case "./../i18n/hyw.json":
      return _o;
    case "./../i18n/ia":
    case "./../i18n/ia.json":
      return wo;
    case "./../i18n/id":
    case "./../i18n/id.json":
      return ko;
    case "./../i18n/io":
    case "./../i18n/io.json":
      return jo;
    case "./../i18n/is":
    case "./../i18n/is.json":
      return To;
    case "./../i18n/it":
    case "./../i18n/it.json":
      return Oo;
    case "./../i18n/ja":
    case "./../i18n/ja.json":
      return Ao;
    case "./../i18n/kaa":
    case "./../i18n/kaa.json":
      return Mo;
    case "./../i18n/kcg":
    case "./../i18n/kcg.json":
      return Lo;
    case "./../i18n/kg":
    case "./../i18n/kg.json":
      return Wo;
    case "./../i18n/kge-arab":
    case "./../i18n/kge-arab.json":
      return No;
    case "./../i18n/kge":
    case "./../i18n/kge.json":
      return Co;
    case "./../i18n/kiu":
    case "./../i18n/kiu.json":
      return Do;
    case "./../i18n/kk-cyrl":
    case "./../i18n/kk-cyrl.json":
      return Uo;
    case "./../i18n/km":
    case "./../i18n/km.json":
      return Fo;
    case "./../i18n/kn":
    case "./../i18n/kn.json":
      return Yo;
    case "./../i18n/ko":
    case "./../i18n/ko.json":
      return Ko;
    case "./../i18n/krc":
    case "./../i18n/krc.json":
      return Jo;
    case "./../i18n/ks-arab":
    case "./../i18n/ks-arab.json":
      return Qo;
    case "./../i18n/ku-latn":
    case "./../i18n/ku-latn.json":
      return rt;
    case "./../i18n/kv":
    case "./../i18n/kv.json":
      return it;
    case "./../i18n/lb":
    case "./../i18n/lb.json":
      return ot;
    case "./../i18n/lld":
    case "./../i18n/lld.json":
      return lt;
    case "./../i18n/lmo":
    case "./../i18n/lmo.json":
      return dt;
    case "./../i18n/lo":
    case "./../i18n/lo.json":
      return ut;
    case "./../i18n/lt":
    case "./../i18n/lt.json":
      return mt;
    case "./../i18n/mad":
    case "./../i18n/mad.json":
      return ft;
    case "./../i18n/mag":
    case "./../i18n/mag.json":
      return _t;
    case "./../i18n/mk":
    case "./../i18n/mk.json":
      return wt;
    case "./../i18n/ml":
    case "./../i18n/ml.json":
      return kt;
    case "./../i18n/mn":
    case "./../i18n/mn.json":
      return jt;
    case "./../i18n/mrh":
    case "./../i18n/mrh.json":
      return Tt;
    case "./../i18n/ms":
    case "./../i18n/ms.json":
      return Ot;
    case "./../i18n/mt":
    case "./../i18n/mt.json":
      return At;
    case "./../i18n/my":
    case "./../i18n/my.json":
      return Mt;
    case "./../i18n/nap":
    case "./../i18n/nap.json":
      return Lt;
    case "./../i18n/nb":
    case "./../i18n/nb.json":
      return Wt;
    case "./../i18n/ne":
    case "./../i18n/ne.json":
      return Nt;
    case "./../i18n/nia":
    case "./../i18n/nia.json":
      return Ct;
    case "./../i18n/nit":
    case "./../i18n/nit.json":
      return Dt;
    case "./../i18n/nl":
    case "./../i18n/nl.json":
      return Ut;
    case "./../i18n/nn":
    case "./../i18n/nn.json":
      return Ft;
    case "./../i18n/nod":
    case "./../i18n/nod.json":
      return Yt;
    case "./../i18n/nqo":
    case "./../i18n/nqo.json":
      return Kt;
    case "./../i18n/nyn":
    case "./../i18n/nyn.json":
      return Jt;
    case "./../i18n/oc":
    case "./../i18n/oc.json":
      return Qt;
    case "./../i18n/om":
    case "./../i18n/om.json":
      return rl;
    case "./../i18n/pa":
    case "./../i18n/pa.json":
      return il;
    case "./../i18n/pap":
    case "./../i18n/pap.json":
      return ol;
    case "./../i18n/pl":
    case "./../i18n/pl.json":
      return ll;
    case "./../i18n/pnb":
    case "./../i18n/pnb.json":
      return dl;
    case "./../i18n/pt-br":
    case "./../i18n/pt-br.json":
      return ul;
    case "./../i18n/pt":
    case "./../i18n/pt.json":
      return ml;
    case "./../i18n/qqq":
    case "./../i18n/qqq.json":
      return fl;
    case "./../i18n/rn":
    case "./../i18n/rn.json":
      return _l;
    case "./../i18n/ro":
    case "./../i18n/ro.json":
      return wl;
    case "./../i18n/roa-tara":
    case "./../i18n/roa-tara.json":
      return kl;
    case "./../i18n/ru":
    case "./../i18n/ru.json":
      return jl;
    case "./../i18n/sat":
    case "./../i18n/sat.json":
      return Tl;
    case "./../i18n/sc":
    case "./../i18n/sc.json":
      return Ol;
    case "./../i18n/scn":
    case "./../i18n/scn.json":
      return Al;
    case "./../i18n/sd":
    case "./../i18n/sd.json":
      return Ml;
    case "./../i18n/sh":
    case "./../i18n/sh.json":
      return Ll;
    case "./../i18n/sje":
    case "./../i18n/sje.json":
      return Wl;
    case "./../i18n/sk":
    case "./../i18n/sk.json":
      return Nl;
    case "./../i18n/sl":
    case "./../i18n/sl.json":
      return Cl;
    case "./../i18n/smn":
    case "./../i18n/smn.json":
      return Dl;
    case "./../i18n/so":
    case "./../i18n/so.json":
      return Ul;
    case "./../i18n/sq":
    case "./../i18n/sq.json":
      return Fl;
    case "./../i18n/sr-ec":
    case "./../i18n/sr-ec.json":
      return Yl;
    case "./../i18n/sr-el":
    case "./../i18n/sr-el.json":
      return Kl;
    case "./../i18n/sv":
    case "./../i18n/sv.json":
      return Jl;
    case "./../i18n/syl":
    case "./../i18n/syl.json":
      return Ql;
    case "./../i18n/szl":
    case "./../i18n/szl.json":
      return rs;
    case "./../i18n/ta":
    case "./../i18n/ta.json":
      return is;
    case "./../i18n/te":
    case "./../i18n/te.json":
      return os;
    case "./../i18n/th":
    case "./../i18n/th.json":
      return ls;
    case "./../i18n/ti":
    case "./../i18n/ti.json":
      return ds;
    case "./../i18n/tig":
    case "./../i18n/tig.json":
      return us;
    case "./../i18n/tk":
    case "./../i18n/tk.json":
      return ms;
    case "./../i18n/tl":
    case "./../i18n/tl.json":
      return fs;
    case "./../i18n/tly":
    case "./../i18n/tly.json":
      return _s;
    case "./../i18n/tok":
    case "./../i18n/tok.json":
      return ws;
    case "./../i18n/tr":
    case "./../i18n/tr.json":
      return ks;
    case "./../i18n/tt-cyrl":
    case "./../i18n/tt-cyrl.json":
      return js;
    case "./../i18n/tum":
    case "./../i18n/tum.json":
      return Ts;
    case "./../i18n/tyv":
    case "./../i18n/tyv.json":
      return Os;
    case "./../i18n/udm":
    case "./../i18n/udm.json":
      return As;
    case "./../i18n/uk":
    case "./../i18n/uk.json":
      return Ms;
    case "./../i18n/uz":
    case "./../i18n/uz.json":
      return Ls;
    case "./../i18n/vi":
    case "./../i18n/vi.json":
      return Ws;
    case "./../i18n/wal":
    case "./../i18n/wal.json":
      return Ns;
    case "./../i18n/wls":
    case "./../i18n/wls.json":
      return Cs;
    case "./../i18n/xal":
    case "./../i18n/xal.json":
      return Ds;
    case "./../i18n/xmf":
    case "./../i18n/xmf.json":
      return Us;
    case "./../i18n/yrl":
    case "./../i18n/yrl.json":
      return Fs;
    case "./../i18n/yue-hant":
    case "./../i18n/yue-hant.json":
      return Ys;
    case "./../i18n/zgh":
    case "./../i18n/zgh.json":
      return Ks;
    case "./../i18n/zh-hans":
    case "./../i18n/zh-hans.json":
      return Js;
    case "./../i18n/zh-hant":
    case "./../i18n/zh-hant.json":
      return Qs;
    case "./../i18n/zh-hk":
    case "./../i18n/zh-hk.json":
      return rd;
    default:
      throw new Error("Cann't found module: " + e);
  }
}
const id = (e, r, a, n = Me) => {
  const t = ba(e, {
    action: "query",
    prop: "extracts|pageimages",
    exsentences: 4,
    explaintext: 1,
    exsectionformat: "plain",
    piprop: "thumbnail",
    pilimit: 1,
    titles: r
  }) + "&" + Ye();
  n(t, (d) => {
    const s = d.query.pages[Object.keys(d.query.pages)[0]];
    return s.extract ? {
      title: r,
      extractHtml: "<p>" + s.extract + "</p>",
      imgUrl: s.thumbnail ? s.thumbnail.source : null,
      dir: ka(e),
      type: "standard"
    } : !1;
  }, a);
}, nd = (e, r, a, n = Me) => {
  const o = `https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(r)}?${Ye()}`;
  n(o, (t, d) => t ? t.type === "standard" || t.type === "disambiguation" ? {
    title: t.titles.canonical,
    extractHtml: hi(t.extract_html),
    imgUrl: t.thumbnail ? t.thumbnail.source : null,
    dir: t.dir,
    type: t.type
  } : t.type === "no-extract" && t.description ? {
    title: t.titles.canonical,
    extractHtml: "<p>" + t.description + "</p>",
    imgUrl: t.thumbnail ? t.thumbnail.source : null,
    dir: t.dir,
    type: "standard"
  } : (ga(F(e, "preview-console-error-message", r, e), t), !1) : (ga(F(e, "preview-console-error-message", r, e), d), !1), a);
}, Ta = (e, r, a, n = Me) => r.indexOf(":") === -1 ? nd(e, r, a, n) : id(e, r, a, n), od = (e, r, a, n = Me) => {
  const o = `https://${e}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(r)}`;
  n(o, (t) => (t.items || []).reduce((k, p) => {
    if (p.showInGallery && p.type === "image") {
      const $ = p && p.srcset && `https:${p.srcset[0].src}`, O = {
        caption: p.caption && p.caption.text.trim(),
        thumb: $,
        title: p.title
      };
      return k.concat(O);
    }
    return k;
  }, []), a);
}, td = (e, r, a, n = Me) => {
  const o = {
    action: "query",
    prop: "imageinfo",
    iiextmetadatafilter: "License|LicenseShortName|ImageDescription|Artist",
    iiextmetadatalanguage: e,
    iiextmetadatamultilang: 1,
    iiurlwidth: da().width,
    iiurlheight: da().height,
    iiprop: "url|extmetadata",
    titles: r
  }, t = ba(e, o);
  n(t, (d) => {
    const k = d.query.pages[0].imageinfo;
    if (!k)
      return {};
    const { Artist: p, ImageDescription: $, LicenseShortName: O } = k[0].extmetadata, J = p && sa(p.value), c = $ && sa(
      typeof $.value == "string" && $.value || $.value[e] || $.value[Object.keys($.value)[0]]
    ), _ = k[0].thumburl;
    return {
      author: J,
      description: c,
      license: O && O.value,
      filePage: _i(k[0].descriptionshorturl),
      bestFitImageUrl: _
    };
  }, a);
}, Ve = 1, $a = 2, ze = () => window.innerWidth, pr = () => window.innerHeight, g = {
  screenX: null,
  originalMarginLeft: null,
  currentMarginLeft: null,
  originalTransition: null,
  imgOriginalTransition: null,
  durationStart: null,
  translateX: 0,
  translateY: 0,
  clientX: null,
  clientY: null,
  imageRect: {}
}, M = [];
let Oe = -1, Ae = !1;
const Pe = (e) => e.target.nodeName === "IMG" ? e.target : e.target.querySelector("img"), Oa = (e) => e ? Number(e.slice(e.indexOf("scale") + 6, -1)) : Ve, ld = (e) => {
  const a = new RegExp("translate3d\\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px").exec(e);
  return a ? `translate3d(${a.groups.x}px, ${a.groups.y}px, 0px)` : `translate3d(${g.translateX}px, ${g.translateY}px, 0px)`;
}, fr = (e, r) => {
  const n = [
    `${r}-item-caption`,
    `${r}-item-caption-expand-cue`,
    `${r}-item-caption-text`,
    `${r}-item-attribution`,
    `${r}-button`
  ].find((o) => e.target.className.indexOf(o) > -1);
  return e.pointerType !== "touch" || n;
}, Fe = () => Ae, $r = (e) => e.naturalHeight <= e.naturalWidth, sd = (e) => e.naturalWidth + 50 < ze(), yr = () => M.length, dd = (e, r = null) => {
  const a = {}, n = () => r.clientY > e.naturalHeight && !$r(e) ? e.naturalHeight : r.clientY;
  return M.length === 2 ? (a.x = (M[0].clientX + M[1].clientX) / 2, a.y = (M[0].clientY + M[1].clientY) / 2) : (a.x = r.clientX, a.y = n()), a;
}, za = (e, r) => {
  const a = dd(e, r);
  return $r(e) ? a.y = a.y - e.naturalHeight : sd(e) && (a.x = e.naturalWidth / 2, a.y = e.naturalHeight / 2), `${a.x}px ${a.y}px`;
}, gd = (e) => {
  for (let r = 0; r < M.length; r++)
    if (M[r].pointerId === e.pointerId) {
      M.splice(r, 1);
      break;
    }
}, Aa = (e) => {
  e && (e.style.transition = g.imgOriginalTransition, e.style.transform = `scale(${Ve})`, Ae = !1, g.translateX = 0, g.translateY = 0);
}, ud = (e) => {
  const r = Pe(e);
  g.clientX = null, g.clientY = null, g.translateX = 0, g.translateY = 0, r.style.transformOrigin = za(r, e), Fe() ? (r.style.transform = `scale(${Ve})`, Ae = !1) : (r.style.transform = `scale(${$a})`, Ae = !0);
}, cd = (e) => {
  const r = Pe(e);
  if (!r)
    return;
  const a = r.getBoundingClientRect();
  if (g.imageRect.top = a.top, g.imageRect.bottom = a.bottom, g.imageRect.left = a.left, g.imageRect.right = a.right, M.length < 1) {
    const n = window.getComputedStyle(r);
    g.imgOriginalTransition = n.transition;
  }
  M.push(e);
}, md = (e) => {
  const r = Pe(e), a = r.style.transform, n = 0.01, o = 0.4;
  let t = Oa(a);
  const d = ld(a);
  for (let s = 0; s < M.length; s++)
    if (e.pointerId === M[s].pointerId) {
      M[s] = e;
      break;
    }
  if (M.length === 2) {
    const s = Math.abs(M[0].clientX - M[1].clientX), k = Math.abs(M[0].clientY - M[1].clientY), p = Math.sqrt(Math.pow(s, 2) + Math.pow(k, 2));
    Oe > 0 && (r.style.transformOrigin = za(r), r.style.transition = "unset", p > Oe && (Ae = !0, t + n < $a && (t += n, r.style.transform = `${d} scale(${t})`)), p < Oe && (t - n > Ve + o ? (t -= n, r.style.transform = `${d} scale(${t})`) : Aa(r))), Oe = p;
  }
}, pd = (e, r, a, n, o) => {
  const t = Pe(e);
  if (!t)
    return;
  const d = t.style.transform, s = Oa(d), k = ze() / 8, p = ze() - k, $ = $r(t) ? pr() / 4 : pr() / 8, O = pr() - $, J = 80;
  t.style.transition = "unset", (!g.clientX || !g.clientY) && (g.clientX = e.clientX, g.clientY = e.clientY);
  const c = g.translateX + (e.clientX - g.clientX), _ = g.translateY + (e.clientY - g.clientY), w = _ - g.translateY >= 0, y = c - g.translateX >= 0, j = () => {
    const b = g.imageRect.left < k && y || g.imageRect.right > p && !y, C = g.imageRect.top < $ && w || g.imageRect.bottom > O && !w;
    return b && C;
  }, S = () => {
    g.imageRect.top = g.imageRect.top + (_ - g.translateY), g.imageRect.bottom = g.imageRect.bottom + (_ - g.translateY), g.imageRect.left = g.imageRect.left + (c - g.translateX), g.imageRect.right = g.imageRect.right + (c - g.translateX), g.translateX = c, g.translateY = _, g.clientX = e.clientX, g.clientY = e.clientY;
  }, v = Math.abs(c) - Math.abs(g.translateX) > J;
  if (j())
    S(), t.style.transform = `translate3d(${c}px, ${_}px, 0px) scale(${s})`;
  else if (v) {
    const b = o === "ltr" && c < 0 || o === "rtl" && c > 0;
    !b && a[n - 1] ? r(-1) : b && a[n + 1] && r(1);
  }
}, fd = (e) => {
  const r = Pe(e);
  r && (r.style.transition = g.imgOriginalTransition), gd(e), g.clientX = null, g.clientY = null, M.length < 2 && (Oe = -1);
}, yd = (e, r, a) => {
  const n = window.getComputedStyle(r);
  g.durationStart = Date.now(), g.screenX = e.clientX, g.originalMarginLeft = +n[a].slice(0, -2), g.currentMarginLeft = +n[a].slice(0, -2), g.originalTransition = n.transition, r.style.transition = "unset";
}, _d = (e, r, a, n) => {
  const t = e.clientX - g.screenX;
  g.currentMarginLeft = g.originalMarginLeft + t * (n === "ltr" ? 1 : -1), r.style[a] = g.currentMarginLeft + "px", e.preventDefault();
}, hd = (e, r, a, n, o) => {
  const t = g.originalMarginLeft - g.currentMarginLeft, d = Date.now() - g.durationStart;
  Math.abs(t / ze()) > 0.4 || d <= 300 && Math.abs(t) > 5 ? a(t > 0 ? 1 : -1) : r.style[n] = -ze() * o + "px";
};
let br = [];
const jr = (e, r, a, n = void 0) => {
  e.addEventListener(r, a, n), br.push([e, r, a, n]);
}, wd = () => {
  br.forEach((e) => {
    const [r, a, n, o] = e;
    r.removeEventListener(a, n, o);
  }), br = [];
};
let D = 0, ie = "", Ke, Sr, de;
const Ee = () => window.innerWidth, f = "wp-gallery-fullscreen-slider", vd = (e, r, a, n = [], o = "") => {
  const t = n.map(
    () => `
		<div class="${f}-item">
				<div class="${f}-item-loading">
						<div class="${f}-item-loading-spinner">
								<div class="${f}-item-loading-spinner-animation">
										<div class="${f}-item-loading-spinner-animation-bounce"></div>
								</div>
						</div>
						<div class="${f}-item-loading-text">${F(e, "gallery-loading-still")}</div>
				</div>
				<div class="${f}-item-loading-error">
					<div class="${f}-item-loading-error-text">${F(e, "gallery-loading-error")}</div>
					<div class="${f}-item-loading-error-refresh">${F(e, "gallery-loading-error-refresh")}</div>
				</div>
		</div>
		`.trim()
  ).join("");
  return n.some((d, s) => d.thumb === o ? (D = s, !0) : !1), ie = r, Ke = e, Sr = n, de = a, `
		<div class="${f}" style="${ie === "ltr" ? "margin-left" : "margin-right"}:-${D * Ee()}px">
				<div class="${f}-button previous"></div>
				<div class="${f}-button next"></div>
				${t}
		</div>
		`.trim();
}, kd = (e, r) => {
  const a = () => e.description ? e.description : r.caption ? r.caption : "", n = (k) => {
    const p = ["CC", "BY", "SA", "Fair", "Public"];
    let $ = "";
    return p.forEach((O) => {
      k && k.indexOf(O) !== -1 && ($ += `<div class="${f}-item-attribution-info-${O.toLowerCase()}"></div>`);
    }), $;
  }, o = e.author ? e.author : F(Ke, "gallery-unknown-author"), t = e.filePage, d = a();
  return `
		<div class="${f}-item-caption">
			${(Ee() < 400 && d.length > 128 ? !0 : Ee() > 400 && d.length > 142) ? `<div class="${f}-item-caption-expand-cue"></div>` : ""}
			${d ? `<div class="${f}-item-caption-text"><bdi>${d}</bdi></div>` : ""}
		</div>
		<div class="${f}-item-attribution">
			<div class="${f}-item-attribution-info">
				${n(e.license)}
				${o ? `<bdi class="${f}-item-attribution-info-author">${o}</bdi>` : ""}
			</div>
			${t ? `<div class="${f}-item-attribution-more-info">
				<a href="${t}" class="${f}-item-attribution-more-info-link" target="_blank"></a>
			</div>` : ""}
		</div>
	`.trim();
}, Ea = (e, r = !1) => {
  const a = e.querySelector("img"), n = e.querySelector(`.${f}-item-loading`), o = e.querySelector(`.${f}-item-loading-error`);
  if (r && (de.querySelector(`.${f}`).querySelectorAll(`.${f}-item`).forEach((s) => {
    const k = s.querySelector("img"), p = s.querySelector(`.${f}-item-caption`), $ = s.querySelector(`.${f}-item-attribution`);
    k && s.removeChild(k), p && s.removeChild(p), $ && s.removeChild($);
  }), ae(0, !0), n.style.visibility = "visible", o.style.visibility = "hidden"), a.complete)
    n.style.visibility = "hidden", o.style.visibility = "hidden", a.style.visibility = "visible";
  else {
    const t = e.querySelector(`.${f}-item-loading-text`), d = setTimeout(() => {
      t.style.visibility = "visible";
    }, 5e3);
    a.addEventListener("load", () => {
      n.style.visibility = "hidden", o.style.visibility = "hidden", t.style.visibility = "hidden", clearTimeout(d);
    }), a.addEventListener("error", () => {
      const s = e.querySelector(`.${f}-item-loading-error-refresh`);
      if (n.style.visibility = "hidden", a.style.visibility = "hidden", !va()) {
        const k = e.querySelector(`.${f}-item-loading-error-text`);
        k.innerText = F(Ke, "gallery-loading-error-offline"), o.classList.add("offline");
      }
      o.style.visibility = "visible", clearTimeout(d), s.addEventListener("click", () => {
        Ea(e, !0);
      });
    });
  }
}, Ma = (e, r = !1) => {
  const a = e.querySelector(`.${f}-item-caption-text`), n = e.querySelector(`.${f}-item-caption-expand-cue`), o = e.querySelector(".expanded");
  n && o || r && n ? (n.classList.remove("expanded"), a.style.maxHeight = "80px") : n && (n.classList.add("expanded"), a.style.maxHeight = "241px");
}, _r = (e, r = !1) => {
  const o = de.querySelector(`.${f}`).querySelectorAll(`.${f}-item`)[e];
  o && td(
    Ke,
    Sr[e].title,
    (t) => {
      const d = o.querySelector("img"), s = o.querySelector(`.${f}-item-caption`);
      d || (r ? o.insertAdjacentHTML("beforeend", `<img src="${t.bestFitImageUrl}?timestamp=${Date.now()}"/>`) : o.insertAdjacentHTML("beforeend", `<img src="${t.bestFitImageUrl}"/>`), Ea(o)), s || (o.insertAdjacentHTML(
        "beforeend",
        kd(t, Sr[e])
      ), o.querySelector(`.${f}-item-caption`).addEventListener("click", () => {
        Ma(o);
      }));
    }
  );
}, ae = (e = 1, r = !1) => {
  const a = de.querySelector(`.${f}`), n = a.querySelectorAll(`.${f}-item`), o = a.querySelector(".next"), t = a.querySelector(".previous"), d = D + e, s = n[d], k = n[D].querySelector("img");
  s && (Ma(n[D], !0), D += e, o.style.opacity = D === n.length - 1 ? "0.5" : "1", t.style.opacity = D === 0 ? "0.5" : "1", Aa(k), _r(D, r), _r(D + 1, r), _r(D - 1, r)), a.style[ie === "ltr" ? "marginLeft" : "marginRight"] = -Ee() * D + "px";
}, hr = () => {
  ae(-1);
}, bd = () => {
  const e = de.querySelector(`.${f}`), r = ie === "ltr" ? "marginLeft" : "marginRight", a = e.querySelectorAll(`.${f}-item`);
  e.addEventListener("pointerdown", (n) => {
    fr(n, f) || (cd(n), yr() === 1 && !Fe() && yd(n, e, r));
  }), e.addEventListener("pointermove", (n) => {
    fr(n, f) || (yr() > 1 ? md(n) : Fe() ? pd(n, ae, a, D, ie) : _d(n, e, r, ie));
  }), e.addEventListener("pointerout", (n) => {
    fr(n, f) || (e.style.transition = g.originalTransition, yr() === 1 && !Fe() && hd(n, e, ae, r, D), fd(n));
  });
}, jd = () => {
  de.querySelector(".wp-gallery-fullscreen").classList.toggle("wp-gallery-fullscreen-focus-mode");
}, Sd = () => {
  const e = de.querySelector(`.${f}`), r = e.querySelectorAll(`.${f}-item`), a = e.querySelector(".next"), n = e.querySelector(".previous");
  let o = !1;
  ae(0), bd(), e.addEventListener("click", (s) => {
    (s.target.className === `${f}-item` || s.target.tagName === "IMG") && (o ? (clearTimeout(o), o = null, ud(s)) : o = setTimeout(() => {
      o = null, jd();
    }, 300));
  });
  const t = function(s) {
    s.style.transition = "unset", s.style.marginLeft = -D * Ee() + "px";
  };
  let d;
  jr(window, "resize", () => {
    const s = document.querySelector("." + f);
    t(s), clearTimeout(d), d = setTimeout(() => {
      s.style.removeProperty("transition");
    }, 100);
  }), r.length === 1 ? (n.style.visibility = "hidden", a.style.visibility = "hidden") : (a.addEventListener("click", () => {
    ae();
  }), n.addEventListener("click", () => {
    hr();
  }), jr(window, "keydown", ({ key: s }) => {
    switch (s) {
      case "ArrowRight":
      case "Right":
        ie === "ltr" ? ae() : hr();
        break;
      case "ArrowLeft":
      case "Left":
        ie === "ltr" ? hr() : ae();
        break;
    }
  }));
}, he = "wp-gallery-fullscreen", Td = (e, r) => `
		<div class="${he}" lang="${e}" dir="${r}">
			<div class="${he}-close"></div>
			<div class="${he}-main"></div>
		</div>
	`.trim(), ua = (e) => {
  const r = e.querySelector(`.${he}`);
  e.removeChild(r), wd();
}, $d = (e, r, a, n, o = document.body) => {
  o.insertAdjacentHTML("beforeend", Td(a, n)), o.querySelector(`.${he}-main`).insertAdjacentHTML("beforeend", vd(a, n, o, e, r)), o.querySelector(`.${he}-close`).addEventListener("click", () => {
    ua(o);
  }), jr(window, "keydown", ({ key: d }) => {
    (d === "Escape" || d === "Esc") && ua(o);
  }), Sd();
}, Od = (e, r) => {
  const a = document.createElement("div");
  return a.classList.add("wikipediapreview-gallery-row"), e.forEach((n) => {
    const o = document.createElement("div");
    o.classList.add("wikipediapreview-gallery-image"), o.style.backgroundImage = `url(${n.thumb})`, o.addEventListener("click", (t) => {
      const d = t.target.style.backgroundImage.slice(4, -1).replace(/"/g, "");
      $d(e, d, r.lang, r.dir);
    }), a.appendChild(o);
  }), a;
}, zd = (e) => {
  let r = [], a = [];
  const n = (c, _) => {
    const w = setTimeout(c, _);
    return a.push(w), w;
  }, o = () => {
    a.forEach((c) => {
      clearTimeout(c);
    }), a = [];
  }, t = (c, _, w, y = void 0) => {
    c.addEventListener(_, w, y), r.push([c, _, w, y]);
  }, d = () => {
    r.forEach((c) => {
      const [_, w, y, j] = c;
      _.removeEventListener(w, y, j);
    }), r = [];
  }, s = (c) => {
    const _ = c.toElement || c.relatedTarget || c.target, w = e.element.currentTargetElement;
    if (_ !== w && !e.element.contains(_)) {
      const y = n(e.hide, 300), j = () => {
        clearTimeout(y);
      };
      t(e.element, "mouseenter", j);
    }
  }, k = (c) => {
    const _ = e.element.querySelector(".wikipediapreview-body"), w = e.element.querySelector(".wikipediapreview-header"), y = e.element.querySelector(".wikipediapreview-footer-cta") || e.element.querySelector(".wikipediapreview-footer-loading");
    if (_)
      if (e.element.style[2] === "bottom" || e.element.style.bottom) {
        const j = e.element.getBoundingClientRect().top, S = parseInt(
          window.getComputedStyle(_).maxHeight.slice(0, -2)
        );
        _.style.maxHeight = Math.min(c, S + j) + "px";
      } else {
        const j = e.element.getBoundingClientRect().top, S = window.getComputedStyle(w).height.slice(0, -2), v = y ? window.getComputedStyle(y).height.slice(0, -2) : 0, b = window.innerHeight - j - S - v;
        _.style.maxHeight = Math.min(c, b) + "px";
      }
  }, p = () => {
    const { lang: _, title: w } = e;
    e.element.component.wikipediapreview.classList.add("expanded"), R || k(496), !e.loading && _ && w && od(_, w, (y) => {
      const j = e.element.component.wikipediapreviewGallery;
      y && y.length > 0 ? j.appendChild(Od(y, e)) : e.element.component.body.removeChild(j);
    });
  }, $ = (c) => {
    let _, w, y, j;
    const S = c.querySelector(".wikipediapreview-header"), v = c.querySelector(".wikipediapreview-body"), b = (z) => {
      _ = z.touches[0].clientY, y = window.getComputedStyle(v), j = Number(y.height.slice(0, -2));
    }, C = (z, V) => {
      V && z.preventDefault();
      const I = z.touches[0].clientY, E = _ - I, re = j + E, we = !c.querySelector(".wikipediapreview.expanded") && !V || V;
      v.style.transition = "auto", w = I, we && (v.style.maxHeight = re + "px");
    }, Z = (z) => {
      const V = c.querySelector(".wikipediapreview.expanded"), I = _ - w, E = Math.abs(I) > 80, re = !V && !z || z;
      v.style.transition = "all 0.25s ease-in-out", I < 0 && E && re ? e.hide() : I > 0 && E && re && !V ? (v.style.maxHeight = "70vh", p()) : v.style.maxHeight = j + "px";
    };
    t(v, "touchstart", b), t(v, "touchmove", (z) => {
      C(z, !1);
    }), t(v, "touchend", () => Z(!1)), t(S, "touchstart", b), t(S, "touchmove", (z) => {
      C(z, !0);
    }), t(S, "touchend", () => Z(!0));
  };
  return { onHide: () => {
    e.element.component.wikipediapreview.classList.remove("expanded"), e.lang = null, e.title = null, e.loading = !1;
    const c = e.element.querySelector(".wikipediapreview-body");
    c.style.transition = "auto", d(), o();
  }, onShow: (c) => {
    if (c.component = {
      body: c.querySelector(".wikipediapreview-body"),
      wikipediapreview: c.querySelector(".wikipediapreview"),
      wikipediapreviewGallery: c.querySelector(".wikipediapreview-gallery"),
      closeBtn: c.querySelector(".wikipediapreview-header-closebtn"),
      readMore: c.querySelector(".wikipediapreview-footer-cta-readmore"),
      content: c.querySelector(".wikipediapreview-body > p")
    }, c.component.content && c.component.content.getBoundingClientRect().height < 248 ? p() : R || k(248), t(c.component.closeBtn, "click", e.hide), c.component.readMore && t(c.component.readMore, "click", p), R) {
      const _ = document.querySelector(".wp-dark-screen");
      t(_, "click", e.hide, !0), $(c);
    } else
      t(c, "mouseleave", s), t(c.currentTargetElement, "mouseleave", s);
  }, onExpand: p };
};
let W;
const Ad = (e, r, a, n, o) => {
  const t = e.left + e.width / 2, d = e.top + e.height / 2, s = t <= n / 2, k = d <= o / 2, p = s ? e.left : e.left + e.width - r, $ = k ? e.top + e.height : "", O = k ? "" : o - e.top;
  return { left: p, top: $, bottom: O };
}, wr = (e) => e && e + "px", Ed = (e) => ({
  left: e.left - 3,
  right: e.right + 3,
  top: e.top - 3,
  bottom: e.bottom + 3
}), Md = (e, { x: r, y: a }) => {
  const n = e.getClientRects();
  for (let o = 0; o < n.length; o++) {
    const t = Ed(n[o]);
    if (r >= t.left && r <= t.right && a >= t.top && a <= t.bottom)
      return n[o];
  }
  return n[0] || e.getBoundingClientRect();
}, Pd = (e, r = window) => {
  W || (W = r.document.createElement("div"), W.classList.add("wp-popup"), W.style.visibility = "hidden", e.appendChild(W));
  const a = {
    /* onShow, onHide */
  };
  return { show: (d, s, k) => {
    W.innerHTML = d;
    const p = Ad(
      Md(s, k),
      W.offsetWidth,
      W.offsetHeight,
      r.innerWidth,
      r.innerHeight
    );
    W.style.left = wr(p.left), W.style.top = wr(p.top), W.style.bottom = wr(p.bottom), W.currentTargetElement = s, W.style.visibility = "visible", a.onShow && a.onShow(W);
  }, hide: () => {
    a.onHide && a.onHide(W), W.style.visibility = "hidden", W.currentTargetElement = null;
  }, subscribe: (d = {}) => {
    d.onShow && (a.onShow = d.onShow), d.onHide && (a.onHide = d.onHide);
  }, element: W };
};
let K, Pa;
const Ld = (e) => {
  if (!e.querySelector(".wp-dark-screen")) {
    const r = e.createElement("div");
    r.classList.add("wp-dark-screen"), e.body.appendChild(r), Pa = e.body.style.overflow, e.body.style.overflow = "hidden";
  }
}, qd = (e) => {
  const r = e.getElementsByClassName("wp-dark-screen");
  e.body.removeChild(r[0]), e.body.style.overflow = Pa;
}, Wd = (e, r = window) => {
  K || (K = r.document.createElement("div"), K.classList.add("wp-touch-popup"), K.style.visibility = "hidden", e.appendChild(K));
  const a = {
    /* onShow, onHide */
  };
  return { show: (s) => {
    K.innerHTML = s, K.style.visibility = "visible", Ld(r.document), a.onShow && a.onShow(K);
  }, hide: () => {
    a.onHide && a.onHide(K), K.style.visibility = "hidden", qd(r.document);
  }, expand: () => {
    a.onExpand && a.onExpand();
  }, subscribe: (s = {}) => {
    s.onShow && (a.onShow = s.onShow), s.onHide && (a.onHide = s.onHide), s.onExpand && (a.onExpand = s.onExpand);
  }, element: K };
}, Le = (e, r = "") => `
		<div class="wikipediapreview-header">
			${r ? `<div class="wikipediapreview-header-image" style="${`background-image:url('${r}');background-size:cover;`}"></div>` : ""}
			<div class="wikipediapreview-header-wordmark${r ? " wikipediapreview-header-wordmark-with-image" : ""} wikipediapreview-header-wordmark-${e}"></div>
			<div class="wikipediapreview-header-closebtn"></div>
		</div>
`.trim(), Or = (e, r, a) => `
		<div class="wikipediapreview-body wikipediapreview-body-${e}">
			<div class="wikipediapreview-body-message">
				<div class="wikipediapreview-body-icon"></div>
					${r}
			</div>
			<div class="wikipediapreview-body-action">
				${a}
			</div>
		</div>
`.trim(), La = (e, r, a) => `<a href="${Ge(e, r, a)}" target="_blank" class="wikipediapreview-cta-readonwiki">${F(e, "read-on-wiki")}</a>`, qe = (e, r, a, n, o, t) => {
  const d = t === "detect" ? "" : `wikipediapreview-${t}-theme`;
  return `
		<div class="wikipediapreview ${r ? "mobile" : ""} ${d}" lang="${e}" dir="${a}">
			${n}
			${o}
		</div>
	`.trim();
}, Tr = (e, r, a, n) => {
  const o = r.imgUrl, t = `
			<div class="wikipediapreview-body">
				${r.extractHtml}
				<div class="wikipediapreview-gallery">
				</div>
			</div>
			<div class="wikipediapreview-footer">
				<span class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readmore">${F(e, "continue-reading")}</span>
				<a href="${Ge(e, r.title, a)}" class="wikipediapreview-footer-cta wikipediapreview-footer-cta-readonwiki" target="_blank">${F(e, "read-more")}</a>
			</div>
		`.trim();
  return qe(
    e,
    a,
    r.dir,
    Le(e, o),
    t,
    n
  );
}, xd = (e, r, a, n) => {
  const o = `
		<div class="wikipediapreview-body wikipediapreview-body-loading">
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line smaller"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line larger"></div>
			<div class="wikipediapreview-body-loading-line medium"></div>
			<div class="wikipediapreview-body-loading-line smaller"></div>
		</div>
		<div class="wikipediapreview-footer-loading"></div>
	`.trim();
  return qe(r, e, a, Le(r), o, n);
}, Nd = (e, r, a, n, o) => {
  const t = `<span>${F(r, "preview-error-message")}</span>`, d = La(r, a, e);
  return qe(r, e, n, Le(r), Or("error", t, d), o);
}, Rd = (e, r, a, n, o) => {
  const t = `<span>${F(r, "preview-disambiguation-message", a)}</span>`, d = La(r, a, e);
  return qe(r, e, n, Le(r), Or("disambiguation", t, d), o);
}, Cd = (e, r, a, n) => {
  const o = `<span>${F(r, "preview-offline-message")}</span>`, t = `<a>${F(r, "preview-offline-cta")}</a>`;
  return qe(r, e, a, Le(r), Or("offline", o, t), n);
}, $e = (e, r, a) => {
  const n = e && e[r];
  if (n instanceof Function)
    try {
      n.apply(null, a);
    } catch (o) {
      console.log("Error invoking Wikipedia Preview custom callback", o);
    }
}, Id = (e, r, a) => {
  Ta(r, e, (n) => {
    a(Tr(r, n, R));
  });
}, ca = (e, r) => {
  const a = [];
  (typeof e == "string" || e instanceof String) && Array.prototype.forEach.call(
    document.querySelectorAll(e),
    (n) => {
      a.push(n);
    }
  ), (e instanceof Document || e instanceof Element) && a.push(e), Array.isArray(e) && e.forEach((n) => {
    n instanceof Element && a.push(n);
  }), a.forEach((n) => r(n));
};
let ma, se;
function Dd({
  root: e = document,
  selector: r = "[data-wikipedia-preview]",
  lang: a = "en",
  detectLinks: n = !1,
  popupContainer: o = document.body,
  events: t = {},
  debug: d = !1,
  prefersColorScheme: s = "detect"
}) {
  const k = a, p = R ? Wd(o) : Pd(o), $ = zd(p), O = {}, J = [], c = [];
  se = s;
  const _ = (w, y = !1) => {
    w.preventDefault();
    const j = Date.now(), { currentTarget: S } = y ? O : w, v = y ? O.title : decodeURIComponent(S.getAttribute("data-wp-title") || S.textContent), b = y ? O.lang : S.getAttribute("data-wp-lang") || k, C = y ? O.pointerPosition : { x: w.clientX, y: w.clientY }, Z = ka(b);
    p.element.currentTargetElement === S && !y || (ma = j, p.element.style.visibility === "visible" && p.hide(), p.loading = !0, p.dir = Z, p.show(
      xd(R, b, Z, se),
      S,
      C
    ), Ta(b, v, (z) => {
      if (j === ma && p.loading) {
        if (p.loading = !1, z) {
          if (p.lang = b, p.title = v, z.type === "standard")
            p.show(
              Tr(b, z, R, se),
              S,
              C
            ), $e(t, "onShow", [v, b, "standard"]);
          else if (z.type === "disambiguation") {
            const I = z.extractHtml ? Tr(b, z, R, se) : (
              // fallback message when no extract is found on disambiguation page
              Rd(
                R,
                b,
                z.title,
                z.dir,
                se
              )
            );
            p.show(
              I,
              S,
              C
            ), $e(t, "onShow", [v, b, "disambiguation"]);
          }
        } else if (va())
          p.show(
            Nd(R, b, v, Z, se),
            S,
            C
          ), $e(t, "onShow", [v, b, "error"]);
        else {
          p.show(
            Cd(R, b, Z, se),
            S,
            C
          ), $e(t, "onShow", [v, b, "offline"]);
          const I = document.querySelector(".wikipediapreview-body-action");
          O.lang = b, O.title = v, O.pointerPosition = C, O.target = S, I.addEventListener("click", (E) => {
            _(E, !0);
          });
        }
        const V = p.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");
        if (V && V.addEventListener("click", () => {
          $e(t, "onWikiRead", [v, b]);
        }), S.tagName === "A") {
          const I = Ye().split("="), E = new URL(S.href);
          E.searchParams.set(I[0], I[1]), S.href = E.href;
        }
      }
    }));
  };
  p.subscribe($), ca(e, (w) => {
    Array.prototype.forEach.call(
      w.querySelectorAll(r),
      (y) => {
        R ? y.addEventListener("click", _) : y.addEventListener("mouseenter", _), J.push({
          text: y.textContent,
          title: y.getAttribute("data-wp-title") || y.textContent,
          lang: y.getAttribute("data-wp-lang") || k
        });
      }
    );
  }), n && ca(e, (w) => {
    Array.prototype.forEach.call(
      w.querySelectorAll("a"),
      (y) => {
        const j = fi(y.getAttribute("href"));
        j && (y.setAttribute("data-wp-title", j.title), y.setAttribute("data-wp-lang", j.lang), R ? y.addEventListener("click", _) : y.addEventListener("mouseenter", _), c.push({
          text: y.textContent,
          title: j.title,
          lang: j.lang
        }));
      }
    );
  }), d && (console.group("Wikipedia Preview [debug mode]"), console.group(`Searching for "${r}" inside ${e}, Total links found: ${J.length}`), J.forEach((w, y) => {
    console.log(y + 1, `${w.text} -> ${Ge(w.lang, w.title, R, !1)}`);
  }), console.groupEnd(), n && (console.group(`Searching for links to Wikipedia, Total links found: ${c.length}`), c.forEach((w, y) => {
    console.log(y + 1, `${w.text} -> ${Ge(w.lang, w.title, R, !1)}`);
  }), console.groupEnd()), console.groupEnd());
}
ja();
const Ud = { init: Dd, version: ja, getPreviewHtml: Id };
export {
  Ud as default
};
