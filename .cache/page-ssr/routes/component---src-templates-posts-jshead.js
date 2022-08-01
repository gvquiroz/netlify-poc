exports.id = "component---src-templates-posts-jshead";
exports.ids = ["component---src-templates-posts-jshead"];
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

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
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
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const Post = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("li",  false ? 0 : {
  target: "eafjpzo5",
  label: "Post"
})("position:relative;border:1px solid ", props => props.theme.colors.secondary, ";border-radius:2px;margin:0 0 1em;width:100%;transition:background 0.2s;@media screen and (min-width: ", props => props.theme.responsive.small, "){flex:", props => props.featured ? '0 0 100%' : '0 0 49%', ";margin:0 0 2vw;}@media screen and (min-width: ", props => props.theme.responsive.medium, "){flex:", props => props.featured ? '0 0 100%' : '0 0 32%', ";}&:hover{background:", props => props.theme.colors.tertiary, ";}a{display:flex;flex-flow:column;height:100%;width:100%;color:", props => props.theme.colors.text, ";text-decoration:none;.gatsby-image-wrapper{height:0;padding-bottom:60%;@media screen and (min-width: ", props => props.theme.responsive.small, "){.gatsby-image-wrapper{}padding-bottom:", props => props.featured ? '40%' : '60%', ";}}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtzQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2dhdHNieSdcbmltcG9ydCB7IEdhdHNieUltYWdlIH0gZnJvbSAnZ2F0c2J5LXBsdWdpbi1pbWFnZSdcblxuY29uc3QgUG9zdCA9IHN0eWxlZC5saWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luOiAwIDAgMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICBmbGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLmZlYXR1cmVkID8gJzAgMCAxMDAlJyA6ICcwIDAgNDklJyl9O1xuICAgIG1hcmdpbjogMCAwIDJ2dztcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5tZWRpdW19KSB7XG4gICAgZmxleDogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICcwIDAgMTAwJScgOiAnMCAwIDMyJScpfTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRlcnRpYXJ5fTtcbiAgfVxuICBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLmdhdHNieS1pbWFnZS13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2MCU7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgICBwcm9wcy50aGVtZS5yZXNwb25zaXZlLnNtYWxsfSkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICc0MCUnIDogJzYwJScpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkKEdhdHNieUltYWdlKWBcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXB4O1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbTtcbmBcblxuY29uc3QgRGF0ZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luOiAwIDFyZW0gMC41cmVtO1xuICBjb2xvcjogZ3JheTtcbmBcblxuY29uc3QgUmVhZGluZ1RpbWUgPSBzdHlsZWQuaDRgXG4gIG1hcmdpbjogMCAxcmVtIDEuNXJlbTtcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmNvbnN0IEV4Y2VycHQgPSBzdHlsZWQucGBcbiAgbWFyZ2luOiAwIDFyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbmBcblxuY29uc3QgQ2FyZCA9ICh7IHNsdWcsIGhlcm9JbWFnZSwgdGl0bGUsIHB1Ymxpc2hEYXRlLCBib2R5LCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtoZXJvSW1hZ2UgJiYgYm9keSAmJiAoXG4gICAgICAgIDxQb3N0IGZlYXR1cmVkPXtwcm9wcy5mZWF0dXJlZH0+XG4gICAgICAgICAgPExpbmsgdG89e2Ake3Byb3BzLmJhc2VQYXRofS8ke3NsdWd9L2B9PlxuICAgICAgICAgICAgPFN0eWxlZEltZ1xuICAgICAgICAgICAgICBpbWFnZT17aGVyb0ltYWdlLmdhdHNieUltYWdlRGF0YX1cbiAgICAgICAgICAgICAgYWx0PXtoZXJvSW1hZ2UudGl0bGV9XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17JyNlZWVlZWUnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgIDxEYXRlPntwdWJsaXNoRGF0ZX08L0RhdGU+XG4gICAgICAgICAgICA8UmVhZGluZ1RpbWU+XG4gICAgICAgICAgICAgIHtib2R5LmNoaWxkTWFya2Rvd25SZW1hcmsudGltZVRvUmVhZH0gbWluIHJlYWRcbiAgICAgICAgICAgIDwvUmVhZGluZ1RpbWU+XG4gICAgICAgICAgICA8RXhjZXJwdFxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYm9keS5jaGlsZE1hcmtkb3duUmVtYXJrLmV4Y2VycHQsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Qb3N0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0= */"));

const StyledImg = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage,  false ? 0 : {
  target: "eafjpzo4",
  label: "StyledImg"
})( false ? 0 : {
  name: "1s0ao55",
  styles: "border-top-left-radius:1px;border-top-right-radius:1px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDcUMiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgeyBHYXRzYnlJbWFnZSB9IGZyb20gJ2dhdHNieS1wbHVnaW4taW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUuc21hbGx9KSB7XG4gICAgZmxleDogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICcwIDAgMTAwJScgOiAnMCAwIDQ5JScpfTtcbiAgICBtYXJnaW46IDAgMCAydnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUubWVkaXVtfSkge1xuICAgIGZsZXg6ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnMCAwIDEwMCUnIDogJzAgMCAzMiUnKX07XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeX07XG4gIH1cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+XG4gICAgICAgICAgcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnNDAlJyA6ICc2MCUnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChHYXRzYnlJbWFnZSlgXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XG5gXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtIDAuNXJlbTtcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmNvbnN0IFJlYWRpbmdUaW1lID0gc3R5bGVkLmg0YFxuICBtYXJnaW46IDAgMXJlbSAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xuYFxuXG5jb25zdCBFeGNlcnB0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5gXG5cbmNvbnN0IENhcmQgPSAoeyBzbHVnLCBoZXJvSW1hZ2UsIHRpdGxlLCBwdWJsaXNoRGF0ZSwgYm9keSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb0ltYWdlICYmIGJvZHkgJiYgKFxuICAgICAgICA8UG9zdCBmZWF0dXJlZD17cHJvcHMuZmVhdHVyZWR9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtzbHVnfS9gfT5cbiAgICAgICAgICAgIDxTdHlsZWRJbWdcbiAgICAgICAgICAgICAgaW1hZ2U9e2hlcm9JbWFnZS5nYXRzYnlJbWFnZURhdGF9XG4gICAgICAgICAgICAgIGFsdD17aGVyb0ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eycjZWVlZWVlJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICA8RGF0ZT57cHVibGlzaERhdGV9PC9EYXRlPlxuICAgICAgICAgICAgPFJlYWRpbmdUaW1lPlxuICAgICAgICAgICAgICB7Ym9keS5jaGlsZE1hcmtkb3duUmVtYXJrLnRpbWVUb1JlYWR9IG1pbiByZWFkXG4gICAgICAgICAgICA8L1JlYWRpbmdUaW1lPlxuICAgICAgICAgICAgPEV4Y2VycHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGJvZHkuY2hpbGRNYXJrZG93blJlbWFyay5leGNlcnB0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvUG9zdD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Title = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h2",  false ? 0 : {
  target: "eafjpzo3",
  label: "Title"
})( false ? 0 : {
  name: "vox9dm",
  styles: "font-size:1.5em;font-weight:600;text-transform:capitalize;margin:1rem 1rem 0.5rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDdUIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgeyBHYXRzYnlJbWFnZSB9IGZyb20gJ2dhdHNieS1wbHVnaW4taW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUuc21hbGx9KSB7XG4gICAgZmxleDogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICcwIDAgMTAwJScgOiAnMCAwIDQ5JScpfTtcbiAgICBtYXJnaW46IDAgMCAydnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUubWVkaXVtfSkge1xuICAgIGZsZXg6ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnMCAwIDEwMCUnIDogJzAgMCAzMiUnKX07XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeX07XG4gIH1cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+XG4gICAgICAgICAgcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnNDAlJyA6ICc2MCUnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChHYXRzYnlJbWFnZSlgXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XG5gXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtIDAuNXJlbTtcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmNvbnN0IFJlYWRpbmdUaW1lID0gc3R5bGVkLmg0YFxuICBtYXJnaW46IDAgMXJlbSAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xuYFxuXG5jb25zdCBFeGNlcnB0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5gXG5cbmNvbnN0IENhcmQgPSAoeyBzbHVnLCBoZXJvSW1hZ2UsIHRpdGxlLCBwdWJsaXNoRGF0ZSwgYm9keSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb0ltYWdlICYmIGJvZHkgJiYgKFxuICAgICAgICA8UG9zdCBmZWF0dXJlZD17cHJvcHMuZmVhdHVyZWR9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtzbHVnfS9gfT5cbiAgICAgICAgICAgIDxTdHlsZWRJbWdcbiAgICAgICAgICAgICAgaW1hZ2U9e2hlcm9JbWFnZS5nYXRzYnlJbWFnZURhdGF9XG4gICAgICAgICAgICAgIGFsdD17aGVyb0ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eycjZWVlZWVlJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICA8RGF0ZT57cHVibGlzaERhdGV9PC9EYXRlPlxuICAgICAgICAgICAgPFJlYWRpbmdUaW1lPlxuICAgICAgICAgICAgICB7Ym9keS5jaGlsZE1hcmtkb3duUmVtYXJrLnRpbWVUb1JlYWR9IG1pbiByZWFkXG4gICAgICAgICAgICA8L1JlYWRpbmdUaW1lPlxuICAgICAgICAgICAgPEV4Y2VycHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGJvZHkuY2hpbGRNYXJrZG93blJlbWFyay5leGNlcnB0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvUG9zdD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Date = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h3",  false ? 0 : {
  target: "eafjpzo2",
  label: "Date"
})( false ? 0 : {
  name: "w9bdb",
  styles: "margin:0 1rem 0.5rem;color:gray",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ec0IiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgeyBHYXRzYnlJbWFnZSB9IGZyb20gJ2dhdHNieS1wbHVnaW4taW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUuc21hbGx9KSB7XG4gICAgZmxleDogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICcwIDAgMTAwJScgOiAnMCAwIDQ5JScpfTtcbiAgICBtYXJnaW46IDAgMCAydnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUubWVkaXVtfSkge1xuICAgIGZsZXg6ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnMCAwIDEwMCUnIDogJzAgMCAzMiUnKX07XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeX07XG4gIH1cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+XG4gICAgICAgICAgcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnNDAlJyA6ICc2MCUnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChHYXRzYnlJbWFnZSlgXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XG5gXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtIDAuNXJlbTtcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmNvbnN0IFJlYWRpbmdUaW1lID0gc3R5bGVkLmg0YFxuICBtYXJnaW46IDAgMXJlbSAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xuYFxuXG5jb25zdCBFeGNlcnB0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5gXG5cbmNvbnN0IENhcmQgPSAoeyBzbHVnLCBoZXJvSW1hZ2UsIHRpdGxlLCBwdWJsaXNoRGF0ZSwgYm9keSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb0ltYWdlICYmIGJvZHkgJiYgKFxuICAgICAgICA8UG9zdCBmZWF0dXJlZD17cHJvcHMuZmVhdHVyZWR9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtzbHVnfS9gfT5cbiAgICAgICAgICAgIDxTdHlsZWRJbWdcbiAgICAgICAgICAgICAgaW1hZ2U9e2hlcm9JbWFnZS5nYXRzYnlJbWFnZURhdGF9XG4gICAgICAgICAgICAgIGFsdD17aGVyb0ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eycjZWVlZWVlJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICA8RGF0ZT57cHVibGlzaERhdGV9PC9EYXRlPlxuICAgICAgICAgICAgPFJlYWRpbmdUaW1lPlxuICAgICAgICAgICAgICB7Ym9keS5jaGlsZE1hcmtkb3duUmVtYXJrLnRpbWVUb1JlYWR9IG1pbiByZWFkXG4gICAgICAgICAgICA8L1JlYWRpbmdUaW1lPlxuICAgICAgICAgICAgPEV4Y2VycHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGJvZHkuY2hpbGRNYXJrZG93blJlbWFyay5leGNlcnB0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvUG9zdD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const ReadingTime = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h4",  false ? 0 : {
  target: "eafjpzo1",
  label: "ReadingTime"
})( false ? 0 : {
  name: "1gf1qw8",
  styles: "margin:0 1rem 1.5rem;color:gray",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlENkIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgeyBHYXRzYnlJbWFnZSB9IGZyb20gJ2dhdHNieS1wbHVnaW4taW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUuc21hbGx9KSB7XG4gICAgZmxleDogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICcwIDAgMTAwJScgOiAnMCAwIDQ5JScpfTtcbiAgICBtYXJnaW46IDAgMCAydnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUubWVkaXVtfSkge1xuICAgIGZsZXg6ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnMCAwIDEwMCUnIDogJzAgMCAzMiUnKX07XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeX07XG4gIH1cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+XG4gICAgICAgICAgcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnNDAlJyA6ICc2MCUnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChHYXRzYnlJbWFnZSlgXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XG5gXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtIDAuNXJlbTtcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmNvbnN0IFJlYWRpbmdUaW1lID0gc3R5bGVkLmg0YFxuICBtYXJnaW46IDAgMXJlbSAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xuYFxuXG5jb25zdCBFeGNlcnB0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5gXG5cbmNvbnN0IENhcmQgPSAoeyBzbHVnLCBoZXJvSW1hZ2UsIHRpdGxlLCBwdWJsaXNoRGF0ZSwgYm9keSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb0ltYWdlICYmIGJvZHkgJiYgKFxuICAgICAgICA8UG9zdCBmZWF0dXJlZD17cHJvcHMuZmVhdHVyZWR9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtzbHVnfS9gfT5cbiAgICAgICAgICAgIDxTdHlsZWRJbWdcbiAgICAgICAgICAgICAgaW1hZ2U9e2hlcm9JbWFnZS5nYXRzYnlJbWFnZURhdGF9XG4gICAgICAgICAgICAgIGFsdD17aGVyb0ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eycjZWVlZWVlJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICA8RGF0ZT57cHVibGlzaERhdGV9PC9EYXRlPlxuICAgICAgICAgICAgPFJlYWRpbmdUaW1lPlxuICAgICAgICAgICAgICB7Ym9keS5jaGlsZE1hcmtkb3duUmVtYXJrLnRpbWVUb1JlYWR9IG1pbiByZWFkXG4gICAgICAgICAgICA8L1JlYWRpbmdUaW1lPlxuICAgICAgICAgICAgPEV4Y2VycHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGJvZHkuY2hpbGRNYXJrZG93blJlbWFyay5leGNlcnB0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvUG9zdD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Excerpt = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("p",  false ? 0 : {
  target: "eafjpzo0",
  label: "Excerpt"
})( false ? 0 : {
  name: "qdaqqm",
  styles: "margin:0 1rem 1rem;line-height:1.6",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEd0IiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdnYXRzYnknXG5pbXBvcnQgeyBHYXRzYnlJbWFnZSB9IGZyb20gJ2dhdHNieS1wbHVnaW4taW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUuc21hbGx9KSB7XG4gICAgZmxleDogJHsocHJvcHMpID0+IChwcm9wcy5mZWF0dXJlZCA/ICcwIDAgMTAwJScgOiAnMCAwIDQ5JScpfTtcbiAgICBtYXJnaW46IDAgMCAydnc7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlc3BvbnNpdmUubWVkaXVtfSkge1xuICAgIGZsZXg6ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnMCAwIDEwMCUnIDogJzAgMCAzMiUnKX07XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeX07XG4gIH1cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC5nYXRzYnktaW1hZ2Utd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHsocHJvcHMpID0+XG4gICAgICAgICAgcHJvcHMudGhlbWUucmVzcG9uc2l2ZS5zbWFsbH0pIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7KHByb3BzKSA9PiAocHJvcHMuZmVhdHVyZWQgPyAnNDAlJyA6ICc2MCUnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChHYXRzYnlJbWFnZSlgXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW46IDFyZW0gMXJlbSAwLjVyZW07XG5gXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuaDNgXG4gIG1hcmdpbjogMCAxcmVtIDAuNXJlbTtcbiAgY29sb3I6IGdyYXk7XG5gXG5cbmNvbnN0IFJlYWRpbmdUaW1lID0gc3R5bGVkLmg0YFxuICBtYXJnaW46IDAgMXJlbSAxLjVyZW07XG4gIGNvbG9yOiBncmF5O1xuYFxuXG5jb25zdCBFeGNlcnB0ID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG5gXG5cbmNvbnN0IENhcmQgPSAoeyBzbHVnLCBoZXJvSW1hZ2UsIHRpdGxlLCBwdWJsaXNoRGF0ZSwgYm9keSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb0ltYWdlICYmIGJvZHkgJiYgKFxuICAgICAgICA8UG9zdCBmZWF0dXJlZD17cHJvcHMuZmVhdHVyZWR9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtwcm9wcy5iYXNlUGF0aH0vJHtzbHVnfS9gfT5cbiAgICAgICAgICAgIDxTdHlsZWRJbWdcbiAgICAgICAgICAgICAgaW1hZ2U9e2hlcm9JbWFnZS5nYXRzYnlJbWFnZURhdGF9XG4gICAgICAgICAgICAgIGFsdD17aGVyb0ltYWdlLnRpdGxlfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eycjZWVlZWVlJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICA8RGF0ZT57cHVibGlzaERhdGV9PC9EYXRlPlxuICAgICAgICAgICAgPFJlYWRpbmdUaW1lPlxuICAgICAgICAgICAgICB7Ym9keS5jaGlsZE1hcmtkb3duUmVtYXJrLnRpbWVUb1JlYWR9IG1pbiByZWFkXG4gICAgICAgICAgICA8L1JlYWRpbmdUaW1lPlxuICAgICAgICAgICAgPEV4Y2VycHRcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGJvZHkuY2hpbGRNYXJrZG93blJlbWFyay5leGNlcnB0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvUG9zdD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  ...props
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, heroImage && body && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Post, {
    featured: props.featured
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `${props.basePath}/${slug}/`
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledImg, {
    image: heroImage.gatsbyImageData,
    alt: heroImage.title,
    backgroundColor: '#eeeeee'
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Title, null, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Date, null, publishDate), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(ReadingTime, null, body.childMarkdownRemark.timeToRead, " min read"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Excerpt, {
    dangerouslySetInnerHTML: {
      __html: body.childMarkdownRemark.excerpt
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/CardList.js":
/*!************************************!*\
  !*** ./src/components/CardList.js ***!
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


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




const List = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("ul",  false ? 0 : {
  target: "el8hqtd0",
  label: "List"
})( false ? 0 : {
  name: "l26jln",
  styles: "display:flex;flex-flow:row wrap;justify-content:space-between;margin:0 auto;&::after{content:'';flex:0 0 32%;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9DYXJkTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHc0IiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL0NhcmRMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBmbGV4OiAwIDAgMzIlO1xuICB9XG5gXG5cbmNvbnN0IENhcmRMaXN0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gPExpc3Q+e3Byb3BzLmNoaWxkcmVufTwvTGlzdD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZExpc3RcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const CardList = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(List, null, props.children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardList);

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

/***/ "./src/components/Pagination.js":
/*!**************************************!*\
  !*** ./src/components/Pagination.js ***!
  \**************************************/
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
/* harmony import */ var _icons_SelectIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/SelectIcon */ "./src/icons/SelectIcon.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ert9h3",
  label: "Wrapper"
})("width:100%;margin:-1.5rem auto 2.5rem;max-width:", props => props.theme.sizes.maxWidth, ";padding:0 1.5rem;display:flex;flex-flow:row wrap;justify-content:space-between;align-items:baseline;" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUswQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC5xdWlyb3pAa29uZ2hxLmNvbS9nby9zcmMvZ2l0aHViLmNvbS9ndnF1aXJvei9nYXRzYnktc3RhcnRlci1nY24vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG5hdmlnYXRlLCBMaW5rIH0gZnJvbSAnZ2F0c2J5J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgU2VsZWN0SWNvbiBmcm9tICcuLi9pY29ucy9TZWxlY3RJY29uJ1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogLTEuNXJlbSBhdXRvIDIuNXJlbTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpemVzLm1heFdpZHRofTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuYFxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQoTGluaylgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luOiAwIDAgMCAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuaGlnaGxpZ2h0fTtcbiAgfVxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX0gIWltcG9ydGFudDtcbiAgfVxuYFxuXG5jb25zdCBOdW1iZXJzID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICBzdmcge1xuICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgIG1hcmdpbjogMCAwIDAgMC4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXJ0aWFyeX07XG4gIH1cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbmBcblxuY29uc3QgU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wdGlvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gXG5cbmNvbnN0IFBhZ2luYXRpb24gPSBwcm9wcyA9PiB7XG4gIGZ1bmN0aW9uIGNoYW5nZVBhZ2UoZSkge1xuICAgIG5hdmlnYXRlKFxuICAgICAgZS50YXJnZXQudmFsdWVcbiAgICAgICAgPyBgJHtwcm9wcy5jb250ZXh0LnBhZ2luYXRpb25QYXRofS8ke2UudGFyZ2V0LnZhbHVlfWBcbiAgICAgICAgOiBgJHtwcm9wcy5jb250ZXh0LnBhZ2luYXRpb25QYXRofS9gXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb3BzLmNvbnRleHQubnVtYmVyT2ZQYWdlcyA+IDEgJiYgKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8TnVtYmVycz5cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0Lmh1bWFuUGFnZU51bWJlcn17JyAnfVxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgcHJvcHMuY29udGV4dC5odW1hblBhZ2VOdW1iZXIgPT09IDFcbiAgICAgICAgICAgICAgICAgID8gYGBcbiAgICAgICAgICAgICAgICAgIDogcHJvcHMuY29udGV4dC5odW1hblBhZ2VOdW1iZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlUGFnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHByb3BzLmNvbnRleHQubnVtYmVyT2ZQYWdlcyB9LCAoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2Ake2kgPT09IDAgPyBgYCA6IGkgKyAxfWB9IGtleT17YHBhZ2Uke2kgKyAxfWB9PlxuICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgLyB7cHJvcHMuY29udGV4dC5udW1iZXJPZlBhZ2VzfSA8U2VsZWN0SWNvbiAvPlxuICAgICAgICAgIDwvTnVtYmVycz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Byb3BzLmNvbnRleHQucHJldmlvdXNQYWdlUGF0aCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdG89e2Ake3Byb3BzLmNvbnRleHQucHJldmlvdXNQYWdlUGF0aH1gfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj4mbGFycjs8L3NwYW4+IFByZXZcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb3BzLmNvbnRleHQubmV4dFBhZ2VQYXRoICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBvcmRlcjogMyB9fSB0bz17YCR7cHJvcHMuY29udGV4dC5uZXh0UGFnZVBhdGh9YH0+XG4gICAgICAgICAgICAgICAgTmV4dCA8c3Bhbj4mcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iXX0= */"));

const Button = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,  false ? 0 : {
  target: "ert9h2",
  label: "Button"
})("background:", props => props.theme.colors.primary, ";color:white;padding:1rem;border-radius:2px;margin:0 0 0 0.5rem;cursor:pointer;text-decoration:none;transition:0.3s all;&:hover{background:", props => props.theme.colors.highlight, ";}@media (hover: none){background:", props => props.theme.colors.primary, "!important;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCMkIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSwgTGluayB9IGZyb20gJ2dhdHNieSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFNlbGVjdEljb24gZnJvbSAnLi4vaWNvbnMvU2VsZWN0SWNvbidcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IC0xLjVyZW0gYXV0byAyLjVyZW07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aH07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKExpbmspYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDAgMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gIH1cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9ICFpbXBvcnRhbnQ7XG4gIH1cbmBcblxuY29uc3QgTnVtYmVycyA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgc3ZnIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBtYXJnaW46IDAgMCAwIDAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnl9O1xuICB9XG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5gXG5cbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcHRpb24ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYFxuXG5jb25zdCBQYWdpbmF0aW9uID0gcHJvcHMgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKGUpIHtcbiAgICBuYXZpZ2F0ZShcbiAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICAgID8gYCR7cHJvcHMuY29udGV4dC5wYWdpbmF0aW9uUGF0aH0vJHtlLnRhcmdldC52YWx1ZX1gXG4gICAgICAgIDogYCR7cHJvcHMuY29udGV4dC5wYWdpbmF0aW9uUGF0aH0vYFxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5jb250ZXh0Lm51bWJlck9mUGFnZXMgPiAxICYmIChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPE51bWJlcnM+XG4gICAgICAgICAgICB7cHJvcHMuY29udGV4dC5odW1hblBhZ2VOdW1iZXJ9eycgJ31cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIHByb3BzLmNvbnRleHQuaHVtYW5QYWdlTnVtYmVyID09PSAxXG4gICAgICAgICAgICAgICAgICA/IGBgXG4gICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRleHQuaHVtYW5QYWdlTnVtYmVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBhZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBwcm9wcy5jb250ZXh0Lm51bWJlck9mUGFnZXMgfSwgKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtgJHtpID09PSAwID8gYGAgOiBpICsgMX1gfSBrZXk9e2BwYWdlJHtpICsgMX1gfT5cbiAgICAgICAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIC8ge3Byb3BzLmNvbnRleHQubnVtYmVyT2ZQYWdlc30gPFNlbGVjdEljb24gLz5cbiAgICAgICAgICA8L051bWJlcnM+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0LnByZXZpb3VzUGFnZVBhdGggJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIHRvPXtgJHtwcm9wcy5jb250ZXh0LnByZXZpb3VzUGFnZVBhdGh9YH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+JmxhcnI7PC9zcGFuPiBQcmV2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0Lm5leHRQYWdlUGF0aCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgb3JkZXI6IDMgfX0gdG89e2Ake3Byb3BzLmNvbnRleHQubmV4dFBhZ2VQYXRofWB9PlxuICAgICAgICAgICAgICAgIE5leHQgPHNwYW4+JnJhcnI7PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuIl19 */"));

const Numbers = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "ert9h1",
  label: "Numbers"
})("border:1px solid ", props => props.theme.colors.secondary, ";border-radius:2px;display:inline-block;float:left;color:", props => props.theme.colors.text, ";padding:1rem;background:white;position:relative;transition:0.3s all;svg{fill:", props => props.theme.colors.text, ";margin:0 0 0 0.25rem;transition:0.3s all;}&:hover{background:", props => props.theme.colors.tertiary, ";}@media (hover: none){background:white!important;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDMEIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSwgTGluayB9IGZyb20gJ2dhdHNieSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFNlbGVjdEljb24gZnJvbSAnLi4vaWNvbnMvU2VsZWN0SWNvbidcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IC0xLjVyZW0gYXV0byAyLjVyZW07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aH07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKExpbmspYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDAgMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gIH1cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9ICFpbXBvcnRhbnQ7XG4gIH1cbmBcblxuY29uc3QgTnVtYmVycyA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgc3ZnIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBtYXJnaW46IDAgMCAwIDAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnl9O1xuICB9XG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5gXG5cbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcHRpb24ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYFxuXG5jb25zdCBQYWdpbmF0aW9uID0gcHJvcHMgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKGUpIHtcbiAgICBuYXZpZ2F0ZShcbiAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICAgID8gYCR7cHJvcHMuY29udGV4dC5wYWdpbmF0aW9uUGF0aH0vJHtlLnRhcmdldC52YWx1ZX1gXG4gICAgICAgIDogYCR7cHJvcHMuY29udGV4dC5wYWdpbmF0aW9uUGF0aH0vYFxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5jb250ZXh0Lm51bWJlck9mUGFnZXMgPiAxICYmIChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPE51bWJlcnM+XG4gICAgICAgICAgICB7cHJvcHMuY29udGV4dC5odW1hblBhZ2VOdW1iZXJ9eycgJ31cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIHByb3BzLmNvbnRleHQuaHVtYW5QYWdlTnVtYmVyID09PSAxXG4gICAgICAgICAgICAgICAgICA/IGBgXG4gICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRleHQuaHVtYW5QYWdlTnVtYmVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBhZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBwcm9wcy5jb250ZXh0Lm51bWJlck9mUGFnZXMgfSwgKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtgJHtpID09PSAwID8gYGAgOiBpICsgMX1gfSBrZXk9e2BwYWdlJHtpICsgMX1gfT5cbiAgICAgICAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIC8ge3Byb3BzLmNvbnRleHQubnVtYmVyT2ZQYWdlc30gPFNlbGVjdEljb24gLz5cbiAgICAgICAgICA8L051bWJlcnM+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0LnByZXZpb3VzUGFnZVBhdGggJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIHRvPXtgJHtwcm9wcy5jb250ZXh0LnByZXZpb3VzUGFnZVBhdGh9YH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+JmxhcnI7PC9zcGFuPiBQcmV2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0Lm5leHRQYWdlUGF0aCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgb3JkZXI6IDMgfX0gdG89e2Ake3Byb3BzLmNvbnRleHQubmV4dFBhZ2VQYXRofWB9PlxuICAgICAgICAgICAgICAgIE5leHQgPHNwYW4+JnJhcnI7PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuIl19 */"));

const Select = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("select",  false ? 0 : {
  target: "ert9h0",
  label: "Select"
})( false ? 0 : {
  name: "11hydmf",
  styles: "font-size:1rem;background:none;border:none;cursor:pointer;position:absolute;width:100%;left:0;right:0;bottom:0;top:0;color:transparent;option{color:black;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdENEIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSwgTGluayB9IGZyb20gJ2dhdHNieSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFNlbGVjdEljb24gZnJvbSAnLi4vaWNvbnMvU2VsZWN0SWNvbidcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IC0xLjVyZW0gYXV0byAyLjVyZW07XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaXplcy5tYXhXaWR0aH07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbmBcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKExpbmspYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbjogMCAwIDAgMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhpZ2hsaWdodH07XG4gIH1cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9ICFpbXBvcnRhbnQ7XG4gIH1cbmBcblxuY29uc3QgTnVtYmVycyA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgc3ZnIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBtYXJnaW46IDAgMCAwIDAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGVydGlhcnl9O1xuICB9XG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG5gXG5cbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcHRpb24ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuYFxuXG5jb25zdCBQYWdpbmF0aW9uID0gcHJvcHMgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VQYWdlKGUpIHtcbiAgICBuYXZpZ2F0ZShcbiAgICAgIGUudGFyZ2V0LnZhbHVlXG4gICAgICAgID8gYCR7cHJvcHMuY29udGV4dC5wYWdpbmF0aW9uUGF0aH0vJHtlLnRhcmdldC52YWx1ZX1gXG4gICAgICAgIDogYCR7cHJvcHMuY29udGV4dC5wYWdpbmF0aW9uUGF0aH0vYFxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5jb250ZXh0Lm51bWJlck9mUGFnZXMgPiAxICYmIChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPE51bWJlcnM+XG4gICAgICAgICAgICB7cHJvcHMuY29udGV4dC5odW1hblBhZ2VOdW1iZXJ9eycgJ31cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIHByb3BzLmNvbnRleHQuaHVtYW5QYWdlTnVtYmVyID09PSAxXG4gICAgICAgICAgICAgICAgICA/IGBgXG4gICAgICAgICAgICAgICAgICA6IHByb3BzLmNvbnRleHQuaHVtYW5QYWdlTnVtYmVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVBhZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBwcm9wcy5jb250ZXh0Lm51bWJlck9mUGFnZXMgfSwgKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtgJHtpID09PSAwID8gYGAgOiBpICsgMX1gfSBrZXk9e2BwYWdlJHtpICsgMX1gfT5cbiAgICAgICAgICAgICAgICAgIHtpICsgMX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIC8ge3Byb3BzLmNvbnRleHQubnVtYmVyT2ZQYWdlc30gPFNlbGVjdEljb24gLz5cbiAgICAgICAgICA8L051bWJlcnM+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0LnByZXZpb3VzUGFnZVBhdGggJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIHRvPXtgJHtwcm9wcy5jb250ZXh0LnByZXZpb3VzUGFnZVBhdGh9YH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+JmxhcnI7PC9zcGFuPiBQcmV2XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9wcy5jb250ZXh0Lm5leHRQYWdlUGF0aCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgb3JkZXI6IDMgfX0gdG89e2Ake3Byb3BzLmNvbnRleHQubmV4dFBhZ2VQYXRofWB9PlxuICAgICAgICAgICAgICAgIE5leHQgPHNwYW4+JnJhcnI7PC9zcGFuPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Pagination = props => {
  function changePage(e) {
    (0,gatsby__WEBPACK_IMPORTED_MODULE_2__.navigate)(e.target.value ? `${props.context.paginationPath}/${e.target.value}` : `${props.context.paginationPath}/`);
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, props.context.numberOfPages > 1 && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Wrapper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Numbers, null, props.context.humanPageNumber, ' ', (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Select, {
    value: props.context.humanPageNumber === 1 ? `` : props.context.humanPageNumber,
    onChange: changePage
  }, Array.from({
    length: props.context.numberOfPages
  }, (_, i) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
    value: `${i === 0 ? `` : i + 1}`,
    key: `page${i + 1}`
  }, i + 1))), "/ ", props.context.numberOfPages, " ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icons_SelectIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", null, props.context.previousPagePath && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button, {
    to: `${props.context.previousPagePath}`
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", null, "\u2190"), " Prev"), props.context.nextPagePath && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button, {
    style: {
      order: 3
    },
    to: `${props.context.nextPagePath}`
  }, "Next ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", null, "\u2192")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

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

/***/ "./src/icons/SelectIcon.js":
/*!*********************************!*\
  !*** ./src/icons/SelectIcon.js ***!
  \*********************************/
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




const SVG = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("svg",  false ? 0 : {
  target: "e1x199w0",
  label: "SVG"
})( false ? 0 : {
  name: "16zxbbs",
  styles: "padding:0;width:0.6rem",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsLnF1aXJvekBrb25naHEuY29tL2dvL3NyYy9naXRodWIuY29tL2d2cXVpcm96L2dhdHNieS1zdGFydGVyLWdjbi9zcmMvaWNvbnMvU2VsZWN0SWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHc0IiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwucXVpcm96QGtvbmdocS5jb20vZ28vc3JjL2dpdGh1Yi5jb20vZ3ZxdWlyb3ovZ2F0c2J5LXN0YXJ0ZXItZ2NuL3NyYy9pY29ucy9TZWxlY3RJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmNvbnN0IFNWRyA9IHN0eWxlZC5zdmdgXG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAwLjZyZW07XG5gXG5cbmNvbnN0IFNlbGVjdEljb24gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNWRyB2aWV3Qm94PVwiMCAwIDI5Mi4zNjIgMjkyLjM2MlwiPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yODYuOTM1LDY5LjM3N2MtMy42MTQtMy42MTctNy44OTgtNS40MjQtMTIuODQ4LTUuNDI0SDE4LjI3NGMtNC45NTIsMC05LjIzMywxLjgwNy0xMi44NSw1LjQyNFxuICBDMS44MDcsNzIuOTk4LDAsNzcuMjc5LDAsODIuMjI4YzAsNC45NDgsMS44MDcsOS4yMjksNS40MjQsMTIuODQ3bDEyNy45MDcsMTI3LjkwN2MzLjYyMSwzLjYxNyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOFxuICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3pcIlxuICAgICAgLz5cbiAgICA8L1NWRz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RJY29uXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const SelectIcon = props => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(SVG, {
    viewBox: "0 0 292.362 292.362"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424 C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428 s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectIcon);

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

/***/ "./src/templates/posts.js?export=head":
/*!********************************************!*\
  !*** ./src/templates/posts.js?export=head ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/startCase */ "./node_modules/lodash/startCase.js");
/* harmony import */ var lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_startCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardList */ "./src/components/CardList.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");











const Posts = ({
  data,
  pageContext
}) => {
  const posts = data.allContentfulPost.edges;
  const {
    humanPageNumber,
    basePath
  } = pageContext;
  const isFirstPage = humanPageNumber === 1;
  let featuredPost;
  let ogImage;

  try {
    featuredPost = posts[0].node;
  } catch (error) {
    featuredPost = null;
  }

  try {
    ogImage = posts[0].node.heroImage.gatsbyImageData.images.fallback.src;
  } catch (error) {
    ogImage = null;
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: lodash_startCase__WEBPACK_IMPORTED_MODULE_1___default()(basePath),
    image: ogImage
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, isFirstPage ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CardList__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, featuredPost, {
    featured: true,
    basePath: basePath
  })), posts.slice(1).map(({
    node: post
  }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: post.id
  }, post, {
    basePath: basePath
  })))) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_CardList__WEBPACK_IMPORTED_MODULE_4__["default"], null, posts.map(({
    node: post
  }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: post.id
  }, post, {
    basePath: basePath
  }))))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    context: pageContext
  }));
};

const query = "236917578";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/startCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


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
//# sourceMappingURL=component---src-templates-posts-jshead.js.map