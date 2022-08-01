exports.id = "component---src-templates-post-jshead";
exports.ids = ["component---src-templates-post-jshead"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ B),
/* harmony export */   "MainImage": () => (/* binding */ z),
/* harmony export */   "Placeholder": () => (/* binding */ O),
/* harmony export */   "StaticImage": () => (/* binding */ V),
/* harmony export */   "generateImageData": () => (/* binding */ f),
/* harmony export */   "getImage": () => (/* binding */ M),
/* harmony export */   "getImageData": () => (/* binding */ x),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ m),
/* harmony export */   "getSrc": () => (/* binding */ S),
/* harmony export */   "getSrcSet": () => (/* binding */ N),
/* harmony export */   "withArtDirection": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





function n() {
  return n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, n.apply(this, arguments);
}

function o(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var s = [.25, .5, 1, 2],
    l = [750, 1080, 1366, 1920],
    d = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    u = function (e) {
  return console.warn(e);
},
    c = function (e, t) {
  return e - t;
},
    h = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function g(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function p(e) {
  var t = e.layout,
      i = void 0 === t ? "constrained" : t,
      r = e.width,
      o = e.height,
      s = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: c,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !d && (d = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (d || 1.3333333333333333))) : (r || (r = o && d ? o * d : s.width ? s.width : o ? Math.round(o / 1.3333333333333333) : 800), d && !o ? o = Math.round(r / d) : d || (d = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: d,
    layout: i,
    formats: c
  }));
}

function m(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = p(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function f(e) {
  var t,
      a = (e = p(e)).pluginName,
      i = e.sourceMetadata,
      r = e.generateImageSource,
      o = e.layout,
      d = e.fit,
      c = e.options,
      m = e.width,
      f = e.height,
      b = e.filename,
      E = e.reporter,
      k = void 0 === E ? {
    warn: u
  } : E,
      M = e.backgroundColor,
      S = e.placeholderURL;
  if (a || k.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = g(b)) : i = {
    width: m,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || g(b) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (k.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));

  var x = function (e) {
    var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        d = void 0 === o ? {
      warn: u
    } : o,
        c = e.breakpoints,
        h = void 0 === c ? l : c,
        g = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === i ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          d = e.reporter,
          c = void 0 === d ? {
        warn: u
      } : d,
          h = a.width / a.height,
          g = v(void 0 === l ? s : l);

      if (i && r) {
        var p = y(a, {
          width: i,
          height: r,
          fit: o
        });
        i = p.width, r = p.height, h = p.aspectRatio;
      }

      i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
      var m = i;

      if (a.width < i || a.height < r) {
        var f = a.width < i ? "width" : "height";
        c.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
      }

      return {
        sizes: g.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * i);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: h,
        presentationWidth: m,
        presentationHeight: Math.round(m / h),
        unscaledWidth: i
      };
    }(e) : "constrained" === i ? w(e) : "fullWidth" === i ? w(n({
      breakpoints: h
    }, e)) : (d.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
      sizes: [r.width],
      presentationWidth: r.width,
      presentationHeight: r.height,
      aspectRatio: r.width / r.height,
      unscaledWidth: r.width
    });
  }(n({}, e, {
    sourceMetadata: i
  })),
      I = {
    sources: []
  },
      W = e.sizes;

  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(b, t, Math.round(t / x.aspectRatio), e, d, c);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      k.warn("[" + a + "] The resolver for image " + b + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: h(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: h(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var R = {
    images: I,
    layout: o,
    backgroundColor: M
  };

  switch (S && (R.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      R.width = x.presentationWidth, R.height = x.presentationHeight;
      break;

    case "fullWidth":
      R.width = 1, R.height = 1 / x.aspectRatio;
      break;

    case "constrained":
      R.width = e.width || x.presentationWidth || 1, R.height = (R.width || 1) / x.aspectRatio;
  }

  return R;
}

var v = function (e) {
  return Array.from(new Set([1].concat(e))).sort(c);
};

function w(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      l = e.outputPixelDensities,
      d = e.breakpoints,
      u = e.layout,
      h = a.width / a.height,
      g = v(void 0 === l ? s : l);

  if (i && r) {
    var p = y(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, h = p.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / h), i || (i = r * h);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == d ? void 0 : d.length) > 0 ? (t = d.filter(function (e) {
    return e <= a.width;
  })).length < d.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== u || t.includes(i) || t.push(i), {
    sizes: t = t.sort(c),
    aspectRatio: h,
    presentationWidth: m,
    presentationHeight: Math.round(m / h),
    unscaledWidth: i
  };
}

function y(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var b = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    E = ["images", "placeholder"];

function k() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

var M = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImage);
  }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    S = function (e) {
  var t, a, i;
  return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    N = function (e) {
  var t, a, i;
  return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function x(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      s = e.sourceHeight,
      l = e.pluginName,
      u = void 0 === l ? "getImageData" : l,
      c = e.formats,
      h = void 0 === c ? ["auto"] : c,
      g = e.breakpoints,
      p = e.options,
      m = o(e, b);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = d), f(n({}, m, {
    pluginName: u,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}

function I(e, t) {
  var a,
      i,
      r,
      s = e.images,
      l = e.placeholder,
      d = n({}, o(e, E), {
    images: n({}, s, {
      sources: []
    }),
    placeholder: l && n({}, l, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, l.sources)), d;
}

var W,
    R = ["src", "srcSet", "loading", "alt", "shouldLoad"],
    j = ["fallback", "sources", "shouldLoad"],
    _ = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      d = t.shouldLoad,
      u = o(t, R);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, u, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: l
  }));
},
    A = function (t) {
  var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      d = o(t, j),
      u = d.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_, n({}, d, a, {
    sizes: u,
    shouldLoad: l
  }));
  return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: l ? i : void 0,
      "data-srcset": l ? void 0 : i,
      sizes: u
    });
  }), c) : c;
};

_.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, A.displayName = "Picture", A.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};

var T = ["fallback"],
    O = function (t) {
  var a = t.fallback,
      i = o(t, T);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
};

O.displayName = "Placeholder", O.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (W = A.propTypes) ? void 0 : W.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};

var z = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t, {
    shouldLoad: !0
  }))));
};

z.displayName = "MainImage", z.propTypes = A.propTypes;

var L = ["children"],
    q = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
    }
  });
},
    C = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    D = function (a) {
  var i = a.children,
      r = o(a, L);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, null));
},
    P = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    H = ["style", "className"],
    F = function (e) {
  return e.replace(/\n/g, "");
},
    B = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      d = t.image,
      u = t.loading,
      c = void 0 === u ? "lazy" : u,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, P);
  if (!d) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  s && (r = s), g = n({
    objectFit: m,
    objectPosition: f,
    backgroundColor: p
  }, g);

  var w = d.width,
      y = d.height,
      b = d.layout,
      E = d.images,
      M = d.placeholder,
      S = d.backgroundColor,
      N = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return k() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (k() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, H),
      R = {
    fallback: void 0,
    sources: []
  };

  return E.fallback && (R.fallback = n({}, E.fallback, {
    srcSet: E.fallback.srcSet ? F(E.fallback.srcSet) : void 0
  })), E.sources && (R.sources = E.sources.map(function (e) {
    return n({}, e, {
      srcSet: F(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
    style: n({}, x, l, {
      backgroundColor: p
    }),
    className: I + (r ? " " + r : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, {
    layout: b,
    width: w,
    height: y
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, function (e, t, a, i, r, o, s, l) {
    var d = {};
    o && (d.backgroundColor = o, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = o, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), s && (d.objectFit = s), l && (d.objectPosition = l);
    var u = n({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: n({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return k() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(M, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({
    "data-gatsby-image-ssr": "",
    className: h
  }, v, function (e, t, a, i, r) {
    return void 0 === r && (r = {}), k() || (r = n({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, r)), n({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: n({}, r, {
        opacity: 0
      })
    });
  }("eager" === c, 0, R, c, g)))));
},
    G = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    V = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, G);
    return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
      image: r
    }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(B),
    U = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    X = new Set(["fixed", "fullWidth", "constrained"]),
    Y = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: U,
  height: U,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !X.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

V.displayName = "StaticImage", V.propTypes = Y;


/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");




const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("section",  false ? 0 : {
  target: "e1v0oy570",
  label: "Wrapper"
})("margin:0 auto auto;width:100%;max-width:", props => props.theme.sizes.maxWidth, ";padding:3em 1.5em 2em;flex-grow:1;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRzhCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Db250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW46IDAgYXV0byBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRofTtcbiAgcGFkZGluZzogM2VtIDEuNWVtIDJlbTtcbiAgZmxleC1ncm93OiAxO1xuYFxuXG5jb25zdCBDb250YWluZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiA8V3JhcHBlcj57cHJvcHMuY2hpbGRyZW59PC9XcmFwcGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJcbiJdfQ== */"));

const Container = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper, null, props.children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");




const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("footer",  false ? 0 : {
  target: "e12hzzzc2",
  label: "Wrapper"
})("display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;margin:0 auto;max-width:", props => props.theme.sizes.maxWidth, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRzZCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2l6ZXMubWF4V2lkdGh9O1xuYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIHBhZGRpbmc6IDFlbSAwIDJlbTtcbiAgbWFyZ2luOiAwIDEuNWVtO1xuYFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yZXNwb25zaXZlLnNtYWxsfSkge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gICAgfVxuICAgICY6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPFdyYXBwZXI+XG4gICAgPExpc3Q+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY29udGVudGZ1bC5jb20vXCJcbiAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9mbzl0d3lyd3B2ZWcvNDRiYVA5R3RtOHFFMlVtbThDUXdRay9jNDMzMjU0NjNkMWNiNWRiMmVmOTdmY2EwNzg4ZWE1NS9Qb3dlcmVkQnlDb250ZW50ZnVsX0xpZ2h0QmFja2dyb3VuZC5zdmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cbiAgICAgICAgICAgIGFsdD1cIlBvd2VyZWQgYnkgQ29udGVudGZ1bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yeWFud2llbWVyL2dhdHNieS1zdGFydGVyLWdjblwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIGdhdHNieS1zdGFydGVyLWdjblxuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgYnl7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnlhbndpZW1lclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIEByeWFud2llbWVyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0xpc3Q+XG4gIDwvV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iXX0= */"));

const List = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("ul",  false ? 0 : {
  target: "e12hzzzc1",
  label: "List"
})("display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;width:100%;border-top:1px solid ", props => props.theme.colors.secondary, ";padding:1em 0 2em;margin:0 1.5em;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWXNCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2l6ZXMubWF4V2lkdGh9O1xuYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIHBhZGRpbmc6IDFlbSAwIDJlbTtcbiAgbWFyZ2luOiAwIDEuNWVtO1xuYFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yZXNwb25zaXZlLnNtYWxsfSkge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gICAgfVxuICAgICY6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPFdyYXBwZXI+XG4gICAgPExpc3Q+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY29udGVudGZ1bC5jb20vXCJcbiAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9mbzl0d3lyd3B2ZWcvNDRiYVA5R3RtOHFFMlVtbThDUXdRay9jNDMzMjU0NjNkMWNiNWRiMmVmOTdmY2EwNzg4ZWE1NS9Qb3dlcmVkQnlDb250ZW50ZnVsX0xpZ2h0QmFja2dyb3VuZC5zdmdcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cbiAgICAgICAgICAgIGFsdD1cIlBvd2VyZWQgYnkgQ29udGVudGZ1bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yeWFud2llbWVyL2dhdHNieS1zdGFydGVyLWdjblwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIGdhdHNieS1zdGFydGVyLWdjblxuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgYnl7JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnlhbndpZW1lclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIEByeWFud2llbWVyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0xpc3Q+XG4gIDwvV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iXX0= */"));

const Item = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("li",  false ? 0 : {
  target: "e12hzzzc0",
  label: "Item"
})("display:inline-block;padding:0.25em 0;width:100%;@media screen and (min-width: ", props => props.theme.responsive.small, "){width:auto;}a{font-weight:600;transition:all 0.2s;color:", props => props.theme.colors.text, ";&:hover{color:", props => props.theme.colors.highlight, ";}&:visited{color:", props => props.theme.colors.text, ";}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJzQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRofTtcbmBcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBwYWRkaW5nOiAxZW0gMCAyZW07XG4gIG1hcmdpbjogMCAxLjVlbTtcbmBcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjI1ZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBhIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5oaWdobGlnaHR9O1xuICAgIH1cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxMaXN0PlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNvbnRlbnRmdWwuY29tL1wiXG4gICAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLmN0ZmFzc2V0cy5uZXQvZm85dHd5cndwdmVnLzQ0YmFQOUd0bThxRTJVbW04Q1F3UWsvYzQzMzI1NDYzZDFjYjVkYjJlZjk3ZmNhMDc4OGVhNTUvUG93ZXJlZEJ5Q29udGVudGZ1bF9MaWdodEJhY2tncm91bmQuc3ZnXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XG4gICAgICAgICAgICBhbHQ9XCJQb3dlcmVkIGJ5IENvbnRlbnRmdWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcnlhbndpZW1lci9nYXRzYnktc3RhcnRlci1nY25cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBnYXRzYnktc3RhcnRlci1nY25cbiAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIGJ5eycgJ31cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3J5YW53aWVtZXJcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBAcnlhbndpZW1lclxuICAgICAgICA8L2E+XG4gICAgICA8L0l0ZW0+XG4gICAgPC9MaXN0PlxuICA8L1dyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl19 */"));

const Footer = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(List, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Item, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
  href: "https://www.contentful.com/",
  rel: "nofollow noopener noreferrer",
  target: "_blank"
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
  src: "https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg",
  style: {
    width: '100px'
  },
  alt: "Powered by Contentful"
}))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Item, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
  href: "https://github.com/ryanwiemer/gatsby-starter-gcn",
  target: "_blank",
  rel: "noopener noreferrer"
}, "gatsby-starter-gcn"), ' ', "by", ' ', (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
  href: "https://github.com/ryanwiemer",
  target: "_blank",
  rel: "noopener noreferrer"
}, "@ryanwiemer"))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("section",  false ? 0 : {
  target: "ev0vqal2",
  label: "Wrapper"
})("position:relative;min-height:300px;height:auto;@media (min-width: ", props => props.theme.responsive.small, "){height:", props => props.height || 'auto', ";}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk4QiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvSGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdhdHNieUltYWdlIH0gZnJvbSAnZ2F0c2J5LXBsdWdpbi1pbWFnZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0IHx8ICdhdXRvJ307XG4gIH1cbmBcbmNvbnN0IEJnSW1nID0gc3R5bGVkKEdhdHNieUltYWdlKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgei1pbmRleDogMjtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2l6ZXMubWF4V2lkdGhDZW50ZXJlZH07XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuYFxuXG5jb25zdCBIZXJvID0gcHJvcHMgPT4gKFxuICA8V3JhcHBlciBoZWlnaHQ9e3Byb3BzLmhlaWdodH0+XG4gICAgPEJnSW1nIGltYWdlPXtwcm9wcy5pbWFnZS5nYXRzYnlJbWFnZURhdGF9IGFsdD17cHJvcHMuaW1hZ2UudGl0bGV9IC8+XG4gICAgPFRpdGxlPntwcm9wcy50aXRsZX08L1RpdGxlPlxuICA8L1dyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cbiJdfQ== */"));

const BgImg = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage,  false ? 0 : {
  target: "ev0vqal1",
  label: "BgImg"
})( false ? 0 : {
  name: "ri0e4c",
  styles: "position:absolute;width:100%;height:100%;&::before{content:'';background:rgba(0, 0, 0, 0.25);position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;z-index:1;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlpQyIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvSGVyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdhdHNieUltYWdlIH0gZnJvbSAnZ2F0c2J5LXBsdWdpbi1pbWFnZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0IHx8ICdhdXRvJ307XG4gIH1cbmBcbmNvbnN0IEJnSW1nID0gc3R5bGVkKEdhdHNieUltYWdlKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgei1pbmRleDogMjtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2l6ZXMubWF4V2lkdGhDZW50ZXJlZH07XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuYFxuXG5jb25zdCBIZXJvID0gcHJvcHMgPT4gKFxuICA8V3JhcHBlciBoZWlnaHQ9e3Byb3BzLmhlaWdodH0+XG4gICAgPEJnSW1nIGltYWdlPXtwcm9wcy5pbWFnZS5nYXRzYnlJbWFnZURhdGF9IGFsdD17cHJvcHMuaW1hZ2UudGl0bGV9IC8+XG4gICAgPFRpdGxlPntwcm9wcy50aXRsZX08L1RpdGxlPlxuICA8L1dyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Title = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h1",  false ? 0 : {
  target: "ev0vqal0",
  label: "Title"
})("z-index:2;font-size:3em;text-transform:capitalize;font-weight:600;position:absolute;width:100%;max-width:", props => props.theme.sizes.maxWidthCentered, ";padding:0 1rem;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;color:white;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9IZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCdUIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0hlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHYXRzYnlJbWFnZSB9IGZyb20gJ2dhdHNieS1wbHVnaW4taW1hZ2UnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUuc21hbGx9KSB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodCB8fCAnYXV0byd9O1xuICB9XG5gXG5jb25zdCBCZ0ltZyA9IHN0eWxlZChHYXRzYnlJbWFnZSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRoQ2VudGVyZWR9O1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbmBcblxuY29uc3QgSGVybyA9IHByb3BzID0+IChcbiAgPFdyYXBwZXIgaGVpZ2h0PXtwcm9wcy5oZWlnaHR9PlxuICAgIDxCZ0ltZyBpbWFnZT17cHJvcHMuaW1hZ2UuZ2F0c2J5SW1hZ2VEYXRhfSBhbHQ9e3Byb3BzLmltYWdlLnRpdGxlfSAvPlxuICAgIDxUaXRsZT57cHJvcHMudGl0bGV9PC9UaXRsZT5cbiAgPC9XcmFwcGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvXG4iXX0= */"));

const Hero = props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Wrapper, {
  height: props.height
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(BgImg, {
  image: props.image.gatsbyImageData,
  alt: props.image.title
}), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Title, null, props.title));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _styles_globalStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globalStyles.js */ "./src/styles/globalStyles.js");








const Root = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e16mhi8c1",
  label: "Root"
})("font-family:", props => props.theme.fonts.body, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IGdsb2JhbFN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWxTdHlsZXMuanMnXG5cbmNvbnN0IFJvb3QgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5ib2R5fTtcbmBcblxuY29uc3QgU2tpcCA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5ib2R5fTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzI4NjdjZjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtMTAwJTtcbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIHRvcDogMDtcbiAgfVxuYFxuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0VGFiKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3VzZXItaXMtdGFiYmluZycpXG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Um9vdCBjbGFzc05hbWU9XCJzaXRlUm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlQ29udGVudFwiPlxuICAgICAgICA8U2tpcCBocmVmPVwiI21haW5cIiBpZD1cInNraXAtbmF2aWdhdGlvblwiPlxuICAgICAgICAgIFNraXAgdG8gY29udGVudFxuICAgICAgICA8L1NraXA+XG4gICAgICAgIDxNZW51IC8+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsU3R5bGVzfSAvPlxuICAgIDwvUm9vdD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */"));

const Skip = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("a",  false ? 0 : {
  target: "e16mhi8c0",
  label: "Skip"
})("font-family:", props => props.theme.fonts.body, ";padding:0 1rem;line-height:60px;background:#2867cf;color:white;z-index:101;position:fixed;top:-100%;&:hover{text-decoration:underline;}&:focus,&:active,&:hover{top:0;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCB7IGdsb2JhbFN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWxTdHlsZXMuanMnXG5cbmNvbnN0IFJvb3QgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5ib2R5fTtcbmBcblxuY29uc3QgU2tpcCA9IHN0eWxlZC5hYFxuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5ib2R5fTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzI4NjdjZjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtMTAwJTtcbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIHRvcDogMDtcbiAgfVxuYFxuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0VGFiKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3VzZXItaXMtdGFiYmluZycpXG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Um9vdCBjbGFzc05hbWU9XCJzaXRlUm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlQ29udGVudFwiPlxuICAgICAgICA8U2tpcCBocmVmPVwiI21haW5cIiBpZD1cInNraXAtbmF2aWdhdGlvblwiPlxuICAgICAgICAgIFNraXAgdG8gY29udGVudFxuICAgICAgICA8L1NraXA+XG4gICAgICAgIDxNZW51IC8+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsU3R5bGVzfSAvPlxuICAgIDwvUm9vdD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */"));

const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing');
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => window.addEventListener('keydown', handleFirstTab), []);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(Root, {
    className: "siteRoot"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "siteContent"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(Skip, {
    href: "#main",
    id: "skip-navigation"
  }, "Skip to content"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    id: "main"
  }, props.children)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.Global, {
    styles: _styles_globalStyles_js__WEBPACK_IMPORTED_MODULE_4__.globalStyles
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./src/hooks/use-site-metadata.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");






const Header = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",  false ? 0 : {
  target: "e1h6nnwi1",
  label: "Header"
})("background:", props => props.theme.colors.primary, ";width:100%;padding:1.5em 0;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUs0QiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IHVzZVNpdGVNZXRhZGF0YSB9IGZyb20gJy4uL2hvb2tzL3VzZS1zaXRlLW1ldGFkYXRhJ1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuNWVtIDA7XG5gXG5jb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRofTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMS41ZW07XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogRGFya0dyYXk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IGFjdGl2ZUxpbmtTdHlsZSA9IHtcbiAgY29sb3I6ICd3aGl0ZScsXG59XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWVudUxpbmtzIH0gPSB1c2VTaXRlTWV0YWRhdGEoKVxuICByZXR1cm4gKFxuICAgIDxIZWFkZXI+XG4gICAgICA8TmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge21lbnVMaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICA8TGluayB0bz17bGluay5zbHVnfSBhY3RpdmVTdHlsZT17YWN0aXZlTGlua1N0eWxlfT5cbiAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9OYXY+XG4gICAgPC9IZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19 */"));

const Nav = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("nav",  false ? 0 : {
  target: "e1h6nnwi0",
  label: "Nav"
})("width:100%;max-width:", props => props.theme.sizes.maxWidth, ";margin:0 auto;padding:0 1.5em;ul{display:flex;justify-content:space-between;}li{display:inline-block;margin-left:1em;&:first-of-type{position:relative;margin:0;flex-basis:100%;}}a{text-decoration:none;color:DarkGray;font-weight:600;transition:all 0.2s;border-bottom:2px solid ", props => props.theme.colors.text, ";&:hover{color:white;}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9NZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVzQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IHVzZVNpdGVNZXRhZGF0YSB9IGZyb20gJy4uL2hvb2tzL3VzZS1zaXRlLW1ldGFkYXRhJ1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuNWVtIDA7XG5gXG5jb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRofTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMS41ZW07XG5cbiAgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogRGFya0dyYXk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IGFjdGl2ZUxpbmtTdHlsZSA9IHtcbiAgY29sb3I6ICd3aGl0ZScsXG59XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWVudUxpbmtzIH0gPSB1c2VTaXRlTWV0YWRhdGEoKVxuICByZXR1cm4gKFxuICAgIDxIZWFkZXI+XG4gICAgICA8TmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge21lbnVMaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICA8TGluayB0bz17bGluay5zbHVnfSBhY3RpdmVTdHlsZT17YWN0aXZlTGlua1N0eWxlfT5cbiAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9OYXY+XG4gICAgPC9IZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudVxuIl19 */"));

const activeLinkStyle = {
  color: 'white'
};

const Menu = () => {
  const {
    menuLinks
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__.useSiteMetadata)();
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Header, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Nav, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", null, menuLinks.map(link => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    key: link.name
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: link.slug,
    activeStyle: activeLinkStyle
  }, link.name))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/components/PageBody.js":
/*!************************************!*\
  !*** ./src/components/PageBody.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");




__webpack_require__(/*! prismjs/themes/prism.css */ "./node_modules/prismjs/themes/prism.css");

const Body = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ejhfsuj0",
  label: "Body"
})("margin:0 auto;max-width:", props => props.theme.sizes.maxWidthCentered, ";h1,h2,h3{font-weight:600;line-height:1.25;margin:0 0 1rem 0;text-transform:capitalize;}h1{font-size:1.5em;}h2{font-size:1.25em;}h3{font-size:1em;}p{line-height:1.6;margin:0 0 2em 0;}a{transition:0.2s;color:", props => props.theme.colors.text, ";&:hover{color:", props => props.theme.colors.highlight, ";}}del{text-decoration:line-through;}strong{font-weight:600;}em{font-style:italic;}ul,ol{margin:0 0 2em 0;}ul{li{list-style:disc;list-style-position:inside;line-height:1.25;&:last-child{margin:0;}}}ol{li{list-style:decimal;list-style-position:inside;line-height:1.25;&:last-child{margin:0;}}}hr{border-style:solid;border-color:", props => props.theme.colors.secondary, ";margin:0 0 2em 0;}blockquote{font-style:italic;border-left:4px solid ", props => props.theme.colors.secondary, ";padding:0 0 0 0.5em;}pre{margin:0 0 2em 0;border-radius:2px;background:", props => props.theme.colors.secondary, "!important;span{background:inherit!important;}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9QYWdlQm9keS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJdUIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1BhZ2VCb2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5yZXF1aXJlKCdwcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3MnKVxuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aENlbnRlcmVkfTtcbiAgaDEsXG4gIGgyLFxuICBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgfVxuXG4gIGEge1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gICAgfVxuICB9XG5cbiAgZGVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgfVxuICBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgZW0ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIH1cblxuICB1bCB7XG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogZGlzYztcbiAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9sIHtcbiAgICBsaSB7XG4gICAgICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xuICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaHIge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xuICB9XG5cbiAgYmxvY2txdW90ZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgICBwYWRkaW5nOiAwIDAgMCAwLjVlbTtcbiAgfVxuXG4gIHByZSB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX0gIWltcG9ydGFudDtcbiAgICBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgUGFnZUJvZHkgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJvZHlcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuYm9keS5jaGlsZE1hcmtkb3duUmVtYXJrLmh0bWwgfX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VCb2R5XG4iXX0= */"));

const PageBody = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Body, {
    dangerouslySetInnerHTML: {
      __html: props.body.childMarkdownRemark.html
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBody);

/***/ }),

/***/ "./src/components/PostDetails.js":
/*!***************************************!*\
  !*** ./src/components/PostDetails.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1ds93xh2",
  label: "Wrapper"
})("margin:0 auto 2em;max-width:", props => props.theme.sizes.maxWidthCentered, ";span{margin:0 0.5rem;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0byAyZW07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aENlbnRlcmVkfTtcbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgfVxuYFxuXG5jb25zdCBEYXRlID0gc3R5bGVkLnBgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmBcblxuY29uc3QgUmVhZGluZ1RpbWUgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYFxuXG5jb25zdCBQb3N0RGV0YWlscyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxEYXRlPvCfk4Uge3Byb3BzLmRhdGV9PC9EYXRlPlxuICAgICAgPHNwYW4+4oCiPC9zcGFuPlxuICAgICAgPFJlYWRpbmdUaW1lPntg4o+x77iPJHtwcm9wcy50aW1lVG9SZWFkfSBtaW4gcmVhZCBgfTwvUmVhZGluZ1RpbWU+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3REZXRhaWxzXG4iXX0= */"));

const Date = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("p",  false ? 0 : {
  target: "e1ds93xh1",
  label: "Date"
})( false ? 0 : {
  name: "1r5gb7q",
  styles: "display:inline-block",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXcUIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0byAyZW07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aENlbnRlcmVkfTtcbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgfVxuYFxuXG5jb25zdCBEYXRlID0gc3R5bGVkLnBgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmBcblxuY29uc3QgUmVhZGluZ1RpbWUgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYFxuXG5jb25zdCBQb3N0RGV0YWlscyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxEYXRlPvCfk4Uge3Byb3BzLmRhdGV9PC9EYXRlPlxuICAgICAgPHNwYW4+4oCiPC9zcGFuPlxuICAgICAgPFJlYWRpbmdUaW1lPntg4o+x77iPJHtwcm9wcy50aW1lVG9SZWFkfSBtaW4gcmVhZCBgfTwvUmVhZGluZ1RpbWU+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3REZXRhaWxzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const ReadingTime = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("p",  false ? 0 : {
  target: "e1ds93xh0",
  label: "ReadingTime"
})( false ? 0 : {
  name: "1r5gb7q",
  styles: "display:inline-block",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0RGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNEIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1Bvc3REZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0byAyZW07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aENlbnRlcmVkfTtcbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgfVxuYFxuXG5jb25zdCBEYXRlID0gc3R5bGVkLnBgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmBcblxuY29uc3QgUmVhZGluZ1RpbWUgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYFxuXG5jb25zdCBQb3N0RGV0YWlscyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxEYXRlPvCfk4Uge3Byb3BzLmRhdGV9PC9EYXRlPlxuICAgICAgPHNwYW4+4oCiPC9zcGFuPlxuICAgICAgPFJlYWRpbmdUaW1lPntg4o+x77iPJHtwcm9wcy50aW1lVG9SZWFkfSBtaW4gcmVhZCBgfTwvUmVhZGluZ1RpbWU+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3REZXRhaWxzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const PostDetails = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Date, null, "\uD83D\uDCC5 ", props.date), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", null, "\u2022"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(ReadingTime, null, `⏱️${props.timeToRead} min read `));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostDetails);

/***/ }),

/***/ "./src/components/PostLinks.js":
/*!*************************************!*\
  !*** ./src/components/PostLinks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e15ljq4k3",
  label: "Wrapper"
})( false ? 0 : {
  name: "1d42qcz",
  styles: "margin:-2em 0 0 0;padding:0 1.5em 2em",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSTBCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0TGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IC0yZW0gMCAwIDA7XG4gIHBhZGRpbmc6IDAgMS41ZW0gMmVtO1xuYFxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRoQ2VudGVyZWR9O1xuICBhIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFByZXZpb3VzTGluayA9IHN0eWxlZChMaW5rKWBcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBvcmRlcjogMTtcbmBcblxuY29uc3QgTmV4dExpbmsgPSBzdHlsZWQoTGluaylgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBvcmRlcjogMjtcbmBcblxuY29uc3QgUG9zdExpbmtzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEJveD5cbiAgICAgICAge3Byb3BzLnByZXZpb3VzICYmIChcbiAgICAgICAgICA8UHJldmlvdXNMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtwcm9wcy5wcmV2aW91cy5zbHVnfS9gfT5cbiAgICAgICAgICAgICYjODU5MjsgUHJldlxuICAgICAgICAgIDwvUHJldmlvdXNMaW5rPlxuICAgICAgICApfVxuICAgICAgICB7cHJvcHMubmV4dCAmJiAoXG4gICAgICAgICAgPE5leHRMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtwcm9wcy5uZXh0LnNsdWd9L2B9PlxuICAgICAgICAgICAgTmV4dCAmIzg1OTQ7XG4gICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlua3NcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Box = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e15ljq4k2",
  label: "Box"
})("display:flex;justify-content:space-between;margin:0 auto;width:100%;max-width:", props => props.theme.sizes.maxWidthCentered, ";a{background:", props => props.theme.colors.primary, ";color:white;padding:1em;border-radius:2px;text-decoration:none;transition:0.2s;&:hover{background:", props => props.theme.colors.highlight, ";}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3NCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0TGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IC0yZW0gMCAwIDA7XG4gIHBhZGRpbmc6IDAgMS41ZW0gMmVtO1xuYFxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRoQ2VudGVyZWR9O1xuICBhIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFByZXZpb3VzTGluayA9IHN0eWxlZChMaW5rKWBcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBvcmRlcjogMTtcbmBcblxuY29uc3QgTmV4dExpbmsgPSBzdHlsZWQoTGluaylgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBvcmRlcjogMjtcbmBcblxuY29uc3QgUG9zdExpbmtzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEJveD5cbiAgICAgICAge3Byb3BzLnByZXZpb3VzICYmIChcbiAgICAgICAgICA8UHJldmlvdXNMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtwcm9wcy5wcmV2aW91cy5zbHVnfS9gfT5cbiAgICAgICAgICAgICYjODU5MjsgUHJldlxuICAgICAgICAgIDwvUHJldmlvdXNMaW5rPlxuICAgICAgICApfVxuICAgICAgICB7cHJvcHMubmV4dCAmJiAoXG4gICAgICAgICAgPE5leHRMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtwcm9wcy5uZXh0LnNsdWd9L2B9PlxuICAgICAgICAgICAgTmV4dCAmIzg1OTQ7XG4gICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlua3NcbiJdfQ== */"));

const PreviousLink = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,  false ? 0 : {
  target: "e15ljq4k1",
  label: "PreviousLink"
})( false ? 0 : {
  name: "1mcwo7s",
  styles: "margin-right:auto;order:1",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJpQyIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvUG9zdExpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZ2F0c2J5J1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAtMmVtIDAgMCAwO1xuICBwYWRkaW5nOiAwIDEuNWVtIDJlbTtcbmBcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aENlbnRlcmVkfTtcbiAgYSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5oaWdobGlnaHR9O1xuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBQcmV2aW91c0xpbmsgPSBzdHlsZWQoTGluaylgXG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgb3JkZXI6IDE7XG5gXG5cbmNvbnN0IE5leHRMaW5rID0gc3R5bGVkKExpbmspYFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3JkZXI6IDI7XG5gXG5cbmNvbnN0IFBvc3RMaW5rcyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCb3g+XG4gICAgICAgIHtwcm9wcy5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPFByZXZpb3VzTGluayB0bz17YCR7cHJvcHMuYmFzZVBhdGh9LyR7cHJvcHMucHJldmlvdXMuc2x1Z30vYH0+XG4gICAgICAgICAgICAmIzg1OTI7IFByZXZcbiAgICAgICAgICA8L1ByZXZpb3VzTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb3BzLm5leHQgJiYgKFxuICAgICAgICAgIDxOZXh0TGluayB0bz17YCR7cHJvcHMuYmFzZVBhdGh9LyR7cHJvcHMubmV4dC5zbHVnfS9gfT5cbiAgICAgICAgICAgIE5leHQgJiM4NTk0O1xuICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpbmtzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const NextLink = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,  false ? 0 : {
  target: "e15ljq4k0",
  label: "NextLink"
})( false ? 0 : {
  name: "gcrc60",
  styles: "margin-left:auto;order:2",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9Qb3N0TGlua3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUM2QiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvUG9zdExpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZ2F0c2J5J1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAtMmVtIDAgMCAwO1xuICBwYWRkaW5nOiAwIDEuNWVtIDJlbTtcbmBcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aENlbnRlcmVkfTtcbiAgYSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5oaWdobGlnaHR9O1xuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBQcmV2aW91c0xpbmsgPSBzdHlsZWQoTGluaylgXG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgb3JkZXI6IDE7XG5gXG5cbmNvbnN0IE5leHRMaW5rID0gc3R5bGVkKExpbmspYFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3JkZXI6IDI7XG5gXG5cbmNvbnN0IFBvc3RMaW5rcyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCb3g+XG4gICAgICAgIHtwcm9wcy5wcmV2aW91cyAmJiAoXG4gICAgICAgICAgPFByZXZpb3VzTGluayB0bz17YCR7cHJvcHMuYmFzZVBhdGh9LyR7cHJvcHMucHJldmlvdXMuc2x1Z30vYH0+XG4gICAgICAgICAgICAmIzg1OTI7IFByZXZcbiAgICAgICAgICA8L1ByZXZpb3VzTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb3BzLm5leHQgJiYgKFxuICAgICAgICAgIDxOZXh0TGluayB0bz17YCR7cHJvcHMuYmFzZVBhdGh9LyR7cHJvcHMubmV4dC5zbHVnfS9gfT5cbiAgICAgICAgICAgIE5leHQgJiM4NTk0O1xuICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L1dyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpbmtzXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const PostLinks = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Wrapper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Box, null, props.previous && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(PreviousLink, {
    to: `${props.basePath}/${props.previous.slug}/`
  }, "\u2190 Prev"), props.next && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(NextLink, {
    to: `${props.basePath}/${props.next.slug}/`
  }, "Next \u2192")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostLinks);

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1946181227_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1946181227.json */ "./public/page-data/sq/d/1946181227.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");





const SEO = ({
  title,
  description,
  image
}) => {
  const {
    site
  } = _public_page_data_sq_d_1946181227_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const defaultImage = site.siteMetadata.siteUrl + site.siteMetadata.image;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || defaultImage;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    htmlAttributes: {
      lang: `en`
    },
    title: title,
    defaultTitle: site.siteMetadata.title,
    titleTemplate: `%s | ${site.siteMetadata.title}`
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    charSet: "utf-8"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "image",
    content: image
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "description",
    content: metaDescription
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    property: "og:title",
    content: title
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    property: "og:image",
    content: metaImage
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    property: "og:description",
    content: metaDescription
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "twitter:title",
    content: title
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "twitter:image",
    content: metaImage
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
    name: "twitter:description",
    content: metaDescription
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/components/TagList.js":
/*!***********************************!*\
  !*** ./src/components/TagList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");





const List = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("ul",  false ? 0 : {
  target: "exdd84b1",
  label: "List"
})("width:100%;margin:0 auto 1em auto;max-width:", props => props.theme.sizes.maxWidthCentered, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9UYWdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlzQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvVGFnTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2dhdHNieSdcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvIDFlbSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2l6ZXMubWF4V2lkdGhDZW50ZXJlZH07XG5gXG5cbmNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMC4yNWVtIDAuMjVlbSAwO1xuICBhIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRlcnRpYXJ5fTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgVGFnTGlzdCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIHtwcm9wcy50YWdzLm1hcCh0YWcgPT4gKFxuICAgICAgICA8VGFnIGtleT17dGFnLmlkfT5cbiAgICAgICAgICA8TGluayB0bz17YCR7cHJvcHMuYmFzZVBhdGh9L3RhZy8ke3RhZy5zbHVnfS9gfT57dGFnLnRpdGxlfTwvTGluaz5cbiAgICAgICAgPC9UYWc+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnTGlzdFxuIl19 */"));

const Tag = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("li",  false ? 0 : {
  target: "exdd84b0",
  label: "Tag"
})("display:inline-block;margin:0 0.25em 0.25em 0;a{float:left;transition:0.2s;background:", props => props.theme.colors.tertiary, ";padding:0.5em;border-radius:2px;text-transform:capitalize;text-decoration:none;color:", props => props.theme.colors.text, ";border:1px solid ", props => props.theme.colors.secondary, ";&:hover{background:", props => props.theme.colors.secondary, ";}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9UYWdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVxQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvVGFnTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2dhdHNieSdcblxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvIDFlbSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2l6ZXMubWF4V2lkdGhDZW50ZXJlZH07XG5gXG5cbmNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMC4yNWVtIDAuMjVlbSAwO1xuICBhIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRlcnRpYXJ5fTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgVGFnTGlzdCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIHtwcm9wcy50YWdzLm1hcCh0YWcgPT4gKFxuICAgICAgICA8VGFnIGtleT17dGFnLmlkfT5cbiAgICAgICAgICA8TGluayB0bz17YCR7cHJvcHMuYmFzZVBhdGh9L3RhZy8ke3RhZy5zbHVnfS9gfT57dGFnLnRpdGxlfTwvTGluaz5cbiAgICAgICAgPC9UYWc+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnTGlzdFxuIl19 */"));

const TagList = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(List, null, props.tags.map(tag => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag, {
    key: tag.id
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `${props.basePath}/tag/${tag.slug}/`
  }, tag.title))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagList);

/***/ }),

/***/ "./src/hooks/use-site-metadata.js":
/*!****************************************!*\
  !*** ./src/hooks/use-site-metadata.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSiteMetadata": () => (/* binding */ useSiteMetadata)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3732430097_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3732430097.json */ "./public/page-data/sq/d/3732430097.json");

const useSiteMetadata = () => {
  const {
    site
  } = _public_page_data_sq_d_3732430097_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return site.siteMetadata;
};

/***/ }),

/***/ "./src/styles/globalStyles.js":
/*!************************************!*\
  !*** ./src/styles/globalStyles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalStyles": () => (/* binding */ globalStyles)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const globalStyles =  false ? 0 : {
  name: "1agktp0-globalStyles",
  styles: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}html,body{background:white;height:100%;}.siteRoot{height:100vh;display:flex;flex-direction:column;}.siteContent{display:flex;flex-direction:column;flex:1 0 auto;}footer{width:100%;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}@media screen and (min-width: 35em){html{margin-right:calc(-100vw + 100%);overflow-x:hidden;}}ol,ul,li{list-style:none;}blockquote,q{quotes:none;}blockquote::before,blockquote::after,q::before,q::after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}body{line-height:1;font-size:100%;font-variant-ligatures:none;text-rendering:optimizeLegibility;text-shadow:rgba(0, 0, 0, 0.01) 0 0 1px;font-weight:400;}img{display:block;width:100%;height:auto;}button,input,textarea,select{font-family:inherit;font-size:inherit;background:none;border:none;appearance:none;border-radius:0;resize:none;&:invalid{box-shadow:none;}&:focus{outline:5px auto #5e9ed6;outline:5px auto -webkit-focus-ring-color;}}body:not(.user-is-tabbing) button:focus,body:not(.user-is-tabbing) input:focus,body:not(.user-is-tabbing) select:focus,body:not(.user-is-tabbing) textarea:focus,body:not(.user-is-tabbing) a:focus{outline:none;};label:globalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvc3R5bGVzL2dsb2JhbFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDK0IiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9zdHlsZXMvZ2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5leHBvcnQgY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuIHYyLjAgfCAyMDExMDEyNlxuIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuICBodG1sLFxuICBib2R5LFxuICBkaXYsXG4gIHNwYW4sXG4gIGFwcGxldCxcbiAgb2JqZWN0LFxuICBpZnJhbWUsXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYsXG4gIHAsXG4gIGJsb2NrcXVvdGUsXG4gIHByZSxcbiAgYSxcbiAgYWJicixcbiAgYWNyb255bSxcbiAgYWRkcmVzcyxcbiAgYmlnLFxuICBjaXRlLFxuICBjb2RlLFxuICBkZWwsXG4gIGRmbixcbiAgZW0sXG4gIGltZyxcbiAgaW5zLFxuICBrYmQsXG4gIHEsXG4gIHMsXG4gIHNhbXAsXG4gIHNtYWxsLFxuICBzdHJpa2UsXG4gIHN0cm9uZyxcbiAgc3ViLFxuICBzdXAsXG4gIHR0LFxuICB2YXIsXG4gIGIsXG4gIHUsXG4gIGksXG4gIGNlbnRlcixcbiAgZGwsXG4gIGR0LFxuICBkZCxcbiAgb2wsXG4gIHVsLFxuICBsaSxcbiAgZmllbGRzZXQsXG4gIGZvcm0sXG4gIGxhYmVsLFxuICBsZWdlbmQsXG4gIHRhYmxlLFxuICBjYXB0aW9uLFxuICB0Ym9keSxcbiAgdGZvb3QsXG4gIHRoZWFkLFxuICB0cixcbiAgdGgsXG4gIHRkLFxuICBhcnRpY2xlLFxuICBhc2lkZSxcbiAgY2FudmFzLFxuICBkZXRhaWxzLFxuICBlbWJlZCxcbiAgZmlndXJlLFxuICBmaWdjYXB0aW9uLFxuICBmb290ZXIsXG4gIGhlYWRlcixcbiAgaGdyb3VwLFxuICBtZW51LFxuICBuYXYsXG4gIG91dHB1dCxcbiAgcnVieSxcbiAgc2VjdGlvbixcbiAgc3VtbWFyeSxcbiAgdGltZSxcbiAgbWFyayxcbiAgYXVkaW8sXG4gIHZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgLyogQWRkZWQgdG8gRml4IEZvb3RlciB0byBib3R0b20gb2Ygdmlld3BvcnQgKi9cbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5zaXRlUm9vdCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnNpdGVDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8qIEVuZCBGaXggdG8gUGxhY2UgRm9vdGVyIG9uIEJvdHRvbSBvZiBWaWV3cG9ydCAqL1xuXG4gIGFydGljbGUsXG4gIGFzaWRlLFxuICBkZXRhaWxzLFxuICBmaWdjYXB0aW9uLFxuICBmaWd1cmUsXG4gIGZvb3RlcixcbiAgaGVhZGVyLFxuICBoZ3JvdXAsXG4gIG1lbnUsXG4gIG5hdixcbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNWVtKSB7XG4gICAgaHRtbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTEwMHZ3ICsgMTAwJSk7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuICB9XG5cbiAgb2wsXG4gIHVsLFxuICBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGUsXG4gIHEge1xuICAgIHF1b3Rlczogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGU6OmJlZm9yZSxcbiAgYmxvY2txdW90ZTo6YWZ0ZXIsXG4gIHE6OmJlZm9yZSxcbiAgcTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogbm9uZTtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDEpIDAgMCAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgYnV0dG9uLFxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgJjppbnZhbGlkIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogNXB4IGF1dG8gIzVlOWVkNjtcbiAgICAgIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgICB9XG4gIH1cblxuICBib2R5Om5vdCgudXNlci1pcy10YWJiaW5nKSBidXR0b246Zm9jdXMsXG4gIGJvZHk6bm90KC51c2VyLWlzLXRhYmJpbmcpIGlucHV0OmZvY3VzLFxuICBib2R5Om5vdCgudXNlci1pcy10YWJiaW5nKSBzZWxlY3Q6Zm9jdXMsXG4gIGJvZHk6bm90KC51c2VyLWlzLXRhYmJpbmcpIHRleHRhcmVhOmZvY3VzLFxuICBib2R5Om5vdCgudXNlci1pcy10YWJiaW5nKSBhOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "./src/templates/post.js?export=head":
/*!*******************************************!*\
  !*** ./src/templates/post.js?export=head ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_PageBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageBody */ "./src/components/PageBody.js");
/* harmony import */ var _components_TagList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TagList */ "./src/components/TagList.js");
/* harmony import */ var _components_PostLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostLinks */ "./src/components/PostLinks.js");
/* harmony import */ var _components_PostDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostDetails */ "./src/components/PostDetails.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");











const PostTemplate = ({
  data,
  pageContext
}) => {
  const {
    title,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags
  } = data.contentfulPost;
  const previous = pageContext.prev;
  const next = pageContext.next;
  const {
    basePath
  } = pageContext;
  let ogImage;

  try {
    ogImage = heroImage.gatsbyImageData.images.fallback.src;
  } catch (error) {
    ogImage = null;
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: title,
    description: metaDescription ? metaDescription.internal.content : body.childMarkdownRemark.excerpt,
    image: ogImage
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    image: heroImage,
    height: '50vh'
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, tags && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_TagList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tags: tags,
    basePath: basePath
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PostDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
    date: publishDate,
    timeToRead: body.childMarkdownRemark.timeToRead
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PageBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    body: body
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_PostLinks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    previous: previous,
    next: next,
    basePath: basePath
  }));
};

const query = "2473908418";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostTemplate);

/***/ }),

/***/ "./node_modules/prismjs/themes/prism.css":
/*!***********************************************!*\
  !*** ./node_modules/prismjs/themes/prism.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/1946181227.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1946181227.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"GCN","description":"A starter template to build amazing static websites with Gatsby, Contentful and Netlify","image":"/images/share.jpg","siteUrl":"https://gcn.netlify.app"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3732430097.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3732430097.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"GCN","description":"A starter template to build amazing static websites with Gatsby, Contentful and Netlify","siteUrl":"https://gcn.netlify.app","image":"/images/share.jpg","menuLinks":[{"name":"Home","slug":"/"},{"name":"About","slug":"/about/"},{"name":"Contact","slug":"/contact/"}]}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-post-jshead.js.map