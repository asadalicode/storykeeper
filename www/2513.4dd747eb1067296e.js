'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [2513],
  {
    2513: (zt, ue, U) => {
      U.r(ue), U.d(ue, { stripe_payment: () => Fe, stripe_sheet: () => Ae });
      var w = U(5861),
        g = U(4767),
        ze = U(3574);
      const qe = (i) => Object.keys(pe).filter((n) => pe[n](i)),
        te = (i) => !!(_(i, /iPad/i) || (_(i, /Macintosh/i) && $(i))),
        le = (i) => _(i, /android|sink/i),
        $ = (i) => tt(i, '(any-pointer:coarse)'),
        ce = (i) => fe(i) || de(i),
        fe = (i) => !!(i.cordova || i.phonegap || i.PhoneGap),
        de = (i) => {
          const n = i.Capacitor;
          return !(!n || !n.isNative);
        },
        _ = (i, n) => n.test(i.navigator.userAgent),
        tt = (i, n) => i.matchMedia(n).matches,
        pe = {
          ipad: te,
          iphone: (i) => _(i, /iPhone/i),
          ios: (i) => _(i, /iPhone|iPod/i) || te(i),
          android: le,
          phablet: (i) => {
            const n = i.innerWidth,
              r = i.innerHeight,
              e = Math.min(n, r),
              t = Math.max(n, r);
            return e > 390 && e < 520 && t > 620 && t < 800;
          },
          tablet: (i) => {
            const n = i.innerWidth,
              r = i.innerHeight,
              e = Math.min(n, r),
              t = Math.max(n, r);
            return te(i) || ((i) => le(i) && !_(i, /mobile/i))(i) || (e > 460 && e < 820 && t > 780 && t < 1400);
          },
          cordova: fe,
          capacitor: de,
          electron: (i) => _(i, /electron/i),
          pwa: (i) => !(!i.matchMedia('(display-mode: standalone)').matches && !i.navigator.standalone),
          mobile: $,
          mobileweb: (i) => $(i) && !ce(i),
          desktop: (i) => !$(i),
          hybrid: ce,
        },
        he = () => {
          const i = ((i = window) => {
            if (void 0 === i) return [];
            i.Ionic = i.Ionic || {};
            let n = i.Ionic.platforms;
            return (
              null == n &&
                ((n = i.Ionic.platforms = qe(i)),
                n.forEach((r) => i.document.documentElement.classList.add(`plt-${r}`))),
              n
            );
          })(void 0);
          return i.includes('ios') ? 'ios' : i.includes('android') ? 'android' : void 0;
        };
      function R(i) {
        return (R =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (r) {
                return typeof r;
              }
            : function (r) {
                return r && 'function' == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype
                  ? 'symbol'
                  : typeof r;
              })(i);
      }
      function nt(i, n, r) {
        return (
          n in i
            ? Object.defineProperty(i, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (i[n] = r),
          i
        );
      }
      function x(i) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? Object(arguments[n]) : {},
            e = Object.keys(r);
          'function' == typeof Object.getOwnPropertySymbols &&
            (e = e.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            e.forEach(function (t) {
              nt(i, t, r[t]);
            });
        }
        return i;
      }
      function C(i, n) {
        if (!(i instanceof n)) throw new TypeError('Cannot call a class as a function');
      }
      function ge(i, n) {
        for (var r = 0; r < n.length; r++) {
          var e = n[r];
          (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            'value' in e && (e.writable = !0),
            Object.defineProperty(i, e.key, e);
        }
      }
      function O(i, n, r) {
        return n && ge(i.prototype, n), r && ge(i, r), i;
      }
      function rt(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
      }
      const st = rt(
        (function it(i, n, r) {
          return (
            i(
              (r = {
                path: n,
                exports: {},
                require: function (e, t) {
                  return (function at() {
                    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
                  })();
                },
              }),
              r.exports
            ),
            r.exports
          );
        })(function (i) {
          function n(r) {
            return (
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? ((i.exports = n =
                    function (t) {
                      return typeof t;
                    }),
                  (i.exports.default = i.exports),
                  (i.exports.__esModule = !0))
                : ((i.exports = n =
                    function (t) {
                      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
                  (i.exports.default = i.exports),
                  (i.exports.__esModule = !0)),
              n(r)
            );
          }
          (i.exports = n), (i.exports.default = i.exports), (i.exports.__esModule = !0);
        })
      );
      function F(i) {
        if (void 0 === i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i;
      }
      function H(i, n) {
        return !n || ('object' !== st(n) && 'function' != typeof n) ? F(i) : n;
      }
      function I(i) {
        return (I = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (r) {
              return r.__proto__ || Object.getPrototypeOf(r);
            })(i);
      }
      function ne(i, n) {
        return (ne =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(i, n);
      }
      function J(i, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError('Super expression must either be null or a function');
        (i.prototype = Object.create(n && n.prototype, { constructor: { value: i, writable: !0, configurable: !0 } })),
          n && ne(i, n);
      }
      var ut = {
          type: 'logger',
          log: function (n) {
            this.output('log', n);
          },
          warn: function (n) {
            this.output('warn', n);
          },
          error: function (n) {
            this.output('error', n);
          },
          output: function (n, r) {
            console && console[n] && console[n].apply(console, r);
          },
        },
        E = new ((function () {
          function i(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            C(this, i), this.init(n, r);
          }
          return (
            O(i, [
              {
                key: 'init',
                value: function (r) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.prefix = e.prefix || 'i18next:'),
                    (this.logger = r || ut),
                    (this.options = e),
                    (this.debug = e.debug);
                },
              },
              {
                key: 'setDebug',
                value: function (r) {
                  this.debug = r;
                },
              },
              {
                key: 'log',
                value: function () {
                  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                  return this.forward(e, 'log', '', !0);
                },
              },
              {
                key: 'warn',
                value: function () {
                  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                  return this.forward(e, 'warn', '', !0);
                },
              },
              {
                key: 'error',
                value: function () {
                  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                  return this.forward(e, 'error', '');
                },
              },
              {
                key: 'deprecate',
                value: function () {
                  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
                  return this.forward(e, 'warn', 'WARNING DEPRECATED: ', !0);
                },
              },
              {
                key: 'forward',
                value: function (r, e, t, a) {
                  return a && !this.debug
                    ? null
                    : ('string' == typeof r[0] && (r[0] = ''.concat(t).concat(this.prefix, ' ').concat(r[0])),
                      this.logger[e](r));
                },
              },
              {
                key: 'create',
                value: function (r) {
                  return new i(
                    this.logger,
                    x({}, { prefix: ''.concat(this.prefix, ':').concat(r, ':') }, this.options)
                  );
                },
              },
            ]),
            i
          );
        })())(),
        N = (function () {
          function i() {
            C(this, i), (this.observers = {});
          }
          return (
            O(i, [
              {
                key: 'on',
                value: function (r, e) {
                  var t = this;
                  return (
                    r.split(' ').forEach(function (a) {
                      (t.observers[a] = t.observers[a] || []), t.observers[a].push(e);
                    }),
                    this
                  );
                },
              },
              {
                key: 'off',
                value: function (r, e) {
                  if (this.observers[r]) {
                    if (!e) return void delete this.observers[r];
                    this.observers[r] = this.observers[r].filter(function (t) {
                      return t !== e;
                    });
                  }
                },
              },
              {
                key: 'emit',
                value: function (r) {
                  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
                    t[a - 1] = arguments[a];
                  if (this.observers[r]) {
                    var o = [].concat(this.observers[r]);
                    o.forEach(function (u) {
                      u.apply(void 0, t);
                    });
                  }
                  if (this.observers['*']) {
                    var s = [].concat(this.observers['*']);
                    s.forEach(function (u) {
                      u.apply(u, [r].concat(t));
                    });
                  }
                },
              },
            ]),
            i
          );
        })();
      function V() {
        var i,
          n,
          r = new Promise(function (e, t) {
            (i = e), (n = t);
          });
        return (r.resolve = i), (r.reject = n), r;
      }
      function me(i) {
        return null == i ? '' : '' + i;
      }
      function ct(i, n, r) {
        i.forEach(function (e) {
          n[e] && (r[e] = n[e]);
        });
      }
      function re(i, n, r) {
        function e(s) {
          return s && s.indexOf('###') > -1 ? s.replace(/###/g, '.') : s;
        }
        function t() {
          return !i || 'string' == typeof i;
        }
        for (var a = 'string' != typeof n ? [].concat(n) : n.split('.'); a.length > 1; ) {
          if (t()) return {};
          var o = e(a.shift());
          !i[o] && r && (i[o] = new r()), (i = Object.prototype.hasOwnProperty.call(i, o) ? i[o] : {});
        }
        return t() ? {} : { obj: i, k: e(a.shift()) };
      }
      function ve(i, n, r) {
        var e = re(i, n, Object);
        e.obj[e.k] = r;
      }
      function Z(i, n) {
        var r = re(i, n),
          e = r.obj;
        if (e) return e[r.k];
      }
      function ye(i, n, r) {
        var e = Z(i, r);
        return void 0 !== e ? e : Z(n, r);
      }
      function be(i, n, r) {
        for (var e in n)
          '__proto__' !== e &&
            'constructor' !== e &&
            (e in i
              ? 'string' == typeof i[e] || i[e] instanceof String || 'string' == typeof n[e] || n[e] instanceof String
                ? r && (i[e] = n[e])
                : be(i[e], n[e], r)
              : (i[e] = n[e]));
        return i;
      }
      function D(i) {
        return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      var dt = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
      function pt(i) {
        return 'string' == typeof i
          ? i.replace(/[&<>"'\/]/g, function (n) {
              return dt[n];
            })
          : i;
      }
      var Y =
        'undefined' != typeof window &&
        window.navigator &&
        window.navigator.userAgent &&
        window.navigator.userAgent.indexOf('MSIE') > -1;
      function xe(i, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.';
        if (i) {
          if (i[n]) return i[n];
          for (var e = n.split(r), t = i, a = 0; a < e.length; ++a) {
            if ('string' == typeof t[e[a]] && a + 1 < e.length) return;
            if (void 0 === t[e[a]]) {
              for (var o = 2, s = e.slice(a, a + o).join(r), u = t[s]; void 0 === u && e.length > a + o; )
                o++, (u = t[(s = e.slice(a, a + o).join(r))]);
              if (void 0 === u) return;
              if ('string' == typeof u) return u;
              if (s && 'string' == typeof u[s]) return u[s];
              var l = e.slice(a + o).join(r);
              return l ? xe(u, l, r) : void 0;
            }
            t = t[e[a]];
          }
          return t;
        }
      }
      var ht = (function (i) {
          function n(r) {
            var e,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' };
            return (
              C(this, n),
              (e = H(this, I(n).call(this))),
              Y && N.call(F(e)),
              (e.data = r || {}),
              (e.options = t),
              void 0 === e.options.keySeparator && (e.options.keySeparator = '.'),
              void 0 === e.options.ignoreJSONStructure && (e.options.ignoreJSONStructure = !0),
              e
            );
          }
          return (
            J(n, i),
            O(n, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                },
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e);
                  t > -1 && this.options.ns.splice(t, 1);
                },
              },
              {
                key: 'getResource',
                value: function (e, t, a) {
                  var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                    u = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure,
                    l = [e, t];
                  a && 'string' != typeof a && (l = l.concat(a)),
                    a && 'string' == typeof a && (l = l.concat(s ? a.split(s) : a)),
                    e.indexOf('.') > -1 && (l = e.split('.'));
                  var c = Z(this.data, l);
                  return c || !u || 'string' != typeof a ? c : xe(this.data && this.data[e] && this.data[e][t], a, s);
                },
              },
              {
                key: 'addResource',
                value: function (e, t, a, o) {
                  var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                    u = this.options.keySeparator;
                  void 0 === u && (u = '.');
                  var l = [e, t];
                  a && (l = l.concat(u ? a.split(u) : a)),
                    e.indexOf('.') > -1 && ((o = t), (t = (l = e.split('.'))[1])),
                    this.addNamespaces(t),
                    ve(this.data, l, o),
                    s.silent || this.emit('added', e, t, a, o);
                },
              },
              {
                key: 'addResources',
                value: function (e, t, a) {
                  var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
                  for (var s in a)
                    ('string' == typeof a[s] || '[object Array]' === Object.prototype.toString.apply(a[s])) &&
                      this.addResource(e, t, s, a[s], { silent: !0 });
                  o.silent || this.emit('added', e, t, a);
                },
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, a, o, s) {
                  var u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
                    l = [e, t];
                  e.indexOf('.') > -1 && ((o = a), (a = t), (t = (l = e.split('.'))[1])), this.addNamespaces(t);
                  var c = Z(this.data, l) || {};
                  o ? be(c, a, s) : (c = x({}, c, a)), ve(this.data, l, c), u.silent || this.emit('added', e, t, a);
                },
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t);
                },
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t);
                },
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    'v1' === this.options.compatibilityAPI ? x({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                  );
                },
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data;
                },
              },
            ]),
            n
          );
        })(N),
        Se = {
          processors: {},
          addPostProcessor: function (n) {
            this.processors[n.name] = n;
          },
          handle: function (n, r, e, t, a) {
            var o = this;
            return (
              n.forEach(function (s) {
                o.processors[s] && (r = o.processors[s].process(r, e, t, a));
              }),
              r
            );
          },
        },
        we = {},
        ke = (function (i) {
          function n(r) {
            var e,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
              C(this, n),
              (e = H(this, I(n).call(this))),
              Y && N.call(F(e)),
              ct(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils',
                ],
                r,
                F(e)
              ),
              (e.options = t),
              void 0 === e.options.keySeparator && (e.options.keySeparator = '.'),
              (e.logger = E.create('translator')),
              e
            );
          }
          return (
            J(n, i),
            O(
              n,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e);
                  },
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} },
                      a = this.resolve(e, t);
                    return a && void 0 !== a.res;
                  },
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var a = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === a && (a = ':');
                    var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                      s = t.ns || this.options.defaultNS;
                    if (a && e.indexOf(a) > -1) {
                      var u = e.match(this.interpolator.nestingRegexp);
                      if (u && u.length > 0) return { key: e, namespaces: s };
                      var l = e.split(a);
                      (a !== o || (a === o && this.options.ns.indexOf(l[0]) > -1)) && (s = l.shift()), (e = l.join(o));
                    }
                    return 'string' == typeof s && (s = [s]), { key: e, namespaces: s };
                  },
                },
                {
                  key: 'translate',
                  value: function (e, t, a) {
                    var o = this;
                    if (
                      ('object' !== R(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t = this.options.overloadTranslationOptionHandler(arguments)),
                      t || (t = {}),
                      null == e)
                    )
                      return '';
                    Array.isArray(e) || (e = [String(e)]);
                    var s = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                      u = this.extractFromKey(e[e.length - 1], t),
                      l = u.key,
                      c = u.namespaces,
                      f = c[c.length - 1],
                      m = t.lng || this.language,
                      y = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (m && 'cimode' === m.toLowerCase()) {
                      if (y) {
                        var h = t.nsSeparator || this.options.nsSeparator;
                        return f + h + l;
                      }
                      return l;
                    }
                    var p = this.resolve(e, t),
                      d = p && p.res,
                      v = (p && p.usedKey) || l,
                      b = (p && p.exactUsedKey) || l,
                      S = Object.prototype.toString.apply(d),
                      P = ['[object Number]', '[object Function]', '[object RegExp]'],
                      L = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                      j = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      K = 'string' != typeof d && 'boolean' != typeof d && 'number' != typeof d;
                    if (j && d && K && P.indexOf(S) < 0 && ('string' != typeof L || '[object Array]' !== S)) {
                      if (!t.returnObjects && !this.options.returnObjects)
                        return (
                          this.options.returnedObjectHandler ||
                            this.logger.warn('accessing an object - but returnObjects options is not enabled!'),
                          this.options.returnedObjectHandler
                            ? this.options.returnedObjectHandler(v, d, x({}, t, { ns: c }))
                            : "key '".concat(l, ' (').concat(this.language, ")' returned an object instead of string.")
                        );
                      if (s) {
                        var Ie = '[object Array]' === S,
                          Q = Ie ? [] : {},
                          Ht = Ie ? b : v;
                        for (var M in d)
                          if (Object.prototype.hasOwnProperty.call(d, M)) {
                            var De = ''.concat(Ht).concat(s).concat(M);
                            (Q[M] = this.translate(De, x({}, t, { joinArrays: !1, ns: c }))),
                              Q[M] === De && (Q[M] = d[M]);
                          }
                        d = Q;
                      }
                    } else if (j && 'string' == typeof L && '[object Array]' === S)
                      (d = d.join(L)) && (d = this.extendTranslation(d, e, t, a));
                    else {
                      var je = !1,
                        X = !1,
                        Me = void 0 !== t.count && 'string' != typeof t.count,
                        Te = n.hasDefaultValue(t),
                        Vt = Me ? this.pluralResolver.getSuffix(m, t.count) : '',
                        q = t['defaultValue'.concat(Vt)] || t.defaultValue;
                      !this.isValidLookup(d) && Te && ((je = !0), (d = q)),
                        this.isValidLookup(d) || ((X = !0), (d = l));
                      var A = Te && q !== d && this.options.updateMissing;
                      if (X || je || A) {
                        if ((this.logger.log(A ? 'updateKey' : 'missingKey', m, f, l, A ? q : d), s)) {
                          var Ue = this.resolve(l, x({}, t, { keySeparator: !1 }));
                          Ue &&
                            Ue.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
                            );
                        }
                        var W = [],
                          ee = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                        if ('fallback' === this.options.saveMissingTo && ee && ee[0])
                          for (var ae = 0; ae < ee.length; ae++) W.push(ee[ae]);
                        else
                          'all' === this.options.saveMissingTo
                            ? (W = this.languageUtils.toResolveHierarchy(t.lng || this.language))
                            : W.push(t.lng || this.language);
                        var He = function (T, se, Ve) {
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(T, f, se, A ? Ve : d, A, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(T, f, se, A ? Ve : d, A, t),
                            o.emit('missingKey', T, f, se, d);
                        };
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && Me
                            ? W.forEach(function (oe) {
                                o.pluralResolver.getSuffixes(oe).forEach(function (T) {
                                  He([oe], l + T, t['defaultValue'.concat(T)] || q);
                                });
                              })
                            : He(W, l, q));
                      }
                      (d = this.extendTranslation(d, e, t, p, a)),
                        X && d === l && this.options.appendNamespaceToMissingKey && (d = ''.concat(f, ':').concat(l)),
                        X && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(d));
                    }
                    return d;
                  },
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, a, o, s) {
                    var u = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(e, a, o.usedLng, o.usedNS, o.usedKey, { resolved: o });
                    else if (!a.skipInterpolation) {
                      a.interpolation &&
                        this.interpolator.init(
                          x({}, a, { interpolation: x({}, this.options.interpolation, a.interpolation) })
                        );
                      var c,
                        l =
                          (a.interpolation && a.interpolation.skipOnVariables) ||
                          this.options.interpolation.skipOnVariables;
                      if (l) {
                        var f = e.match(this.interpolator.nestingRegexp);
                        c = f && f.length;
                      }
                      var m = a.replace && 'string' != typeof a.replace ? a.replace : a;
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (m = x({}, this.options.interpolation.defaultVariables, m)),
                        (e = this.interpolator.interpolate(e, m, a.lng || this.language, a)),
                        l)
                      ) {
                        var y = e.match(this.interpolator.nestingRegexp);
                        c < (y && y.length) && (a.nest = !1);
                      }
                      !1 !== a.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (var v = arguments.length, b = new Array(v), S = 0; S < v; S++) b[S] = arguments[S];
                            return s && s[0] === b[0] && !a.context
                              ? (u.logger.warn(
                                  'It seems you are nesting recursively key: '.concat(b[0], ' in key: ').concat(t[0])
                                ),
                                null)
                              : u.translate.apply(u, b.concat([t]));
                          },
                          a
                        )),
                        a.interpolation && this.interpolator.reset();
                    }
                    var p = a.postProcess || this.options.postProcess,
                      d = 'string' == typeof p ? [p] : p;
                    return (
                      null != e &&
                        d &&
                        d.length &&
                        !1 !== a.applyPostProcessor &&
                        (e = Se.handle(
                          d,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved ? x({ i18nResolved: o }, a) : a,
                          this
                        )),
                      e
                    );
                  },
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var o,
                      s,
                      u,
                      l,
                      c,
                      t = this,
                      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (
                      'string' == typeof e && (e = [e]),
                      e.forEach(function (f) {
                        if (!t.isValidLookup(o)) {
                          var m = t.extractFromKey(f, a),
                            y = m.key;
                          s = y;
                          var h = m.namespaces;
                          t.options.fallbackNS && (h = h.concat(t.options.fallbackNS));
                          var p = void 0 !== a.count && 'string' != typeof a.count,
                            d =
                              void 0 !== a.context &&
                              ('string' == typeof a.context || 'number' == typeof a.context) &&
                              '' !== a.context,
                            v = a.lngs
                              ? a.lngs
                              : t.languageUtils.toResolveHierarchy(a.lng || t.language, a.fallbackLng);
                          h.forEach(function (b) {
                            t.isValidLookup(o) ||
                              ((c = b),
                              !we[''.concat(v[0], '-').concat(b)] &&
                                t.utils &&
                                t.utils.hasLoadedNamespace &&
                                !t.utils.hasLoadedNamespace(c) &&
                                ((we[''.concat(v[0], '-').concat(b)] = !0),
                                t.logger.warn(
                                  'key "'
                                    .concat(s, '" for languages "')
                                    .concat(v.join(', '), '" won\'t get resolved as namespace "')
                                    .concat(c, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                                )),
                              v.forEach(function (S) {
                                if (!t.isValidLookup(o)) {
                                  l = S;
                                  var j,
                                    K,
                                    P = y,
                                    L = [P];
                                  for (
                                    t.i18nFormat && t.i18nFormat.addLookupKeys
                                      ? t.i18nFormat.addLookupKeys(L, y, S, b, a)
                                      : (p && (j = t.pluralResolver.getSuffix(S, a.count)),
                                        p && d && L.push(P + j),
                                        d && L.push((P += ''.concat(t.options.contextSeparator).concat(a.context))),
                                        p && L.push((P += j)));
                                    (K = L.pop());

                                  )
                                    t.isValidLookup(o) || ((u = K), (o = t.getResource(S, b, K, a)));
                                }
                              }));
                          });
                        }
                      }),
                      { res: o, usedKey: s, exactUsedKey: u, usedLng: l, usedNS: c }
                    );
                  },
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return !(
                      void 0 === e ||
                      (!this.options.returnNull && null === e) ||
                      (!this.options.returnEmptyString && '' === e)
                    );
                  },
                },
                {
                  key: 'getResource',
                  value: function (e, t, a) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, a, o)
                      : this.resourceStore.getResource(e, t, a, o);
                  },
                },
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue';
                    for (var a in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, a) &&
                        t === a.substring(0, t.length) &&
                        void 0 !== e[a]
                      )
                        return !0;
                    return !1;
                  },
                },
              ]
            ),
            n
          );
        })(N);
      function ie(i) {
        return i.charAt(0).toUpperCase() + i.slice(1);
      }
      var gt = (function () {
          function i(n) {
            C(this, i),
              (this.options = n),
              (this.whitelist = this.options.supportedLngs || !1),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = E.create('languageUtils'));
          }
          return (
            O(i, [
              {
                key: 'getScriptPartFromCode',
                value: function (r) {
                  if (!r || r.indexOf('-') < 0) return null;
                  var e = r.split('-');
                  return 2 === e.length || (e.pop(), 'x' === e[e.length - 1].toLowerCase())
                    ? null
                    : this.formatLanguageCode(e.join('-'));
                },
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (r) {
                  if (!r || r.indexOf('-') < 0) return r;
                  var e = r.split('-');
                  return this.formatLanguageCode(e[0]);
                },
              },
              {
                key: 'formatLanguageCode',
                value: function (r) {
                  if ('string' == typeof r && r.indexOf('-') > -1) {
                    var e = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                      t = r.split('-');
                    return (
                      this.options.lowerCaseLng
                        ? (t = t.map(function (a) {
                            return a.toLowerCase();
                          }))
                        : 2 === t.length
                        ? ((t[0] = t[0].toLowerCase()),
                          (t[1] = t[1].toUpperCase()),
                          e.indexOf(t[1].toLowerCase()) > -1 && (t[1] = ie(t[1].toLowerCase())))
                        : 3 === t.length &&
                          ((t[0] = t[0].toLowerCase()),
                          2 === t[1].length && (t[1] = t[1].toUpperCase()),
                          'sgn' !== t[0] && 2 === t[2].length && (t[2] = t[2].toUpperCase()),
                          e.indexOf(t[1].toLowerCase()) > -1 && (t[1] = ie(t[1].toLowerCase())),
                          e.indexOf(t[2].toLowerCase()) > -1 && (t[2] = ie(t[2].toLowerCase()))),
                      t.join('-')
                    );
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
                },
              },
              {
                key: 'isWhitelisted',
                value: function (r) {
                  return (
                    this.logger.deprecate(
                      'languageUtils.isWhitelisted',
                      'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'
                    ),
                    this.isSupportedCode(r)
                  );
                },
              },
              {
                key: 'isSupportedCode',
                value: function (r) {
                  return (
                    ('languageOnly' === this.options.load || this.options.nonExplicitSupportedLngs) &&
                      (r = this.getLanguagePartFromCode(r)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1
                  );
                },
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (r) {
                  var t,
                    e = this;
                  return r
                    ? (r.forEach(function (a) {
                        if (!t) {
                          var o = e.formatLanguageCode(a);
                          (!e.options.supportedLngs || e.isSupportedCode(o)) && (t = o);
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        r.forEach(function (a) {
                          if (!t) {
                            var o = e.getLanguagePartFromCode(a);
                            if (e.isSupportedCode(o)) return (t = o);
                            t = e.options.supportedLngs.find(function (s) {
                              if (0 === s.indexOf(o)) return s;
                            });
                          }
                        }),
                      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                      t)
                    : null;
                },
              },
              {
                key: 'getFallbackCodes',
                value: function (r, e) {
                  if (!r) return [];
                  if (
                    ('function' == typeof r && (r = r(e)),
                    'string' == typeof r && (r = [r]),
                    '[object Array]' === Object.prototype.toString.apply(r))
                  )
                    return r;
                  if (!e) return r.default || [];
                  var t = r[e];
                  return (
                    t || (t = r[this.getScriptPartFromCode(e)]),
                    t || (t = r[this.formatLanguageCode(e)]),
                    t || (t = r[this.getLanguagePartFromCode(e)]),
                    t || (t = r.default),
                    t || []
                  );
                },
              },
              {
                key: 'toResolveHierarchy',
                value: function (r, e) {
                  var t = this,
                    a = this.getFallbackCodes(e || this.options.fallbackLng || [], r),
                    o = [],
                    s = function (l) {
                      !l ||
                        (t.isSupportedCode(l)
                          ? o.push(l)
                          : t.logger.warn('rejecting language code not found in supportedLngs: '.concat(l)));
                    };
                  return (
                    'string' == typeof r && r.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load && s(this.formatLanguageCode(r)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          s(this.getScriptPartFromCode(r)),
                        'currentOnly' !== this.options.load && s(this.getLanguagePartFromCode(r)))
                      : 'string' == typeof r && s(this.formatLanguageCode(r)),
                    a.forEach(function (u) {
                      o.indexOf(u) < 0 && s(t.formatLanguageCode(u));
                    }),
                    o
                  );
                },
              },
            ]),
            i
          );
        })(),
        mt = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa',
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo',
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh',
            ],
            nr: [1],
            fc: 3,
          },
          { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
        ],
        vt = {
          1: function (n) {
            return Number(n > 1);
          },
          2: function (n) {
            return Number(1 != n);
          },
          3: function (n) {
            return 0;
          },
          4: function (n) {
            return Number(
              n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
            );
          },
          5: function (n) {
            return Number(
              0 == n ? 0 : 1 == n ? 1 : 2 == n ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5
            );
          },
          6: function (n) {
            return Number(1 == n ? 0 : n >= 2 && n <= 4 ? 1 : 2);
          },
          7: function (n) {
            return Number(1 == n ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          },
          8: function (n) {
            return Number(1 == n ? 0 : 2 == n ? 1 : 8 != n && 11 != n ? 2 : 3);
          },
          9: function (n) {
            return Number(n >= 2);
          },
          10: function (n) {
            return Number(1 == n ? 0 : 2 == n ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
          },
          11: function (n) {
            return Number(1 == n || 11 == n ? 0 : 2 == n || 12 == n ? 1 : n > 2 && n < 20 ? 2 : 3);
          },
          12: function (n) {
            return Number(n % 10 != 1 || n % 100 == 11);
          },
          13: function (n) {
            return Number(0 !== n);
          },
          14: function (n) {
            return Number(1 == n ? 0 : 2 == n ? 1 : 3 == n ? 2 : 3);
          },
          15: function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          },
          16: function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : 0 !== n ? 1 : 2);
          },
          17: function (n) {
            return Number(1 == n || (n % 10 == 1 && n % 100 != 11) ? 0 : 1);
          },
          18: function (n) {
            return Number(0 == n ? 0 : 1 == n ? 1 : 2);
          },
          19: function (n) {
            return Number(
              1 == n ? 0 : 0 == n || (n % 100 > 1 && n % 100 < 11) ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3
            );
          },
          20: function (n) {
            return Number(1 == n ? 0 : 0 == n || (n % 100 > 0 && n % 100 < 20) ? 1 : 2);
          },
          21: function (n) {
            return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
          },
          22: function (n) {
            return Number(1 == n ? 0 : 2 == n ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
          },
        };
      function yt() {
        var i = {};
        return (
          mt.forEach(function (n) {
            n.lngs.forEach(function (r) {
              i[r] = { numbers: n.nr, plurals: vt[n.fc] };
            });
          }),
          i
        );
      }
      var bt = (function () {
          function i(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            C(this, i),
              (this.languageUtils = n),
              (this.options = r),
              (this.logger = E.create('pluralResolver')),
              (this.rules = yt());
          }
          return (
            O(i, [
              {
                key: 'addRule',
                value: function (r, e) {
                  this.rules[r] = e;
                },
              },
              {
                key: 'getRule',
                value: function (r) {
                  return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
                },
              },
              {
                key: 'needsPlural',
                value: function (r) {
                  var e = this.getRule(r);
                  return e && e.numbers.length > 1;
                },
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (r, e) {
                  return this.getSuffixes(r).map(function (t) {
                    return e + t;
                  });
                },
              },
              {
                key: 'getSuffixes',
                value: function (r) {
                  var e = this,
                    t = this.getRule(r);
                  return t
                    ? t.numbers.map(function (a) {
                        return e.getSuffix(r, a);
                      })
                    : [];
                },
              },
              {
                key: 'getSuffix',
                value: function (r, e) {
                  var t = this,
                    a = this.getRule(r);
                  if (a) {
                    var o = a.plurals(a.noAbs ? e : Math.abs(e)),
                      s = a.numbers[o];
                    this.options.simplifyPluralSuffix &&
                      2 === a.numbers.length &&
                      1 === a.numbers[0] &&
                      (2 === s ? (s = 'plural') : 1 === s && (s = ''));
                    var u = function () {
                      return t.options.prepend && s.toString() ? t.options.prepend + s.toString() : s.toString();
                    };
                    return 'v1' === this.options.compatibilityJSON
                      ? 1 === s
                        ? ''
                        : 'number' == typeof s
                        ? '_plural_'.concat(s.toString())
                        : u()
                      : 'v2' === this.options.compatibilityJSON ||
                        (this.options.simplifyPluralSuffix && 2 === a.numbers.length && 1 === a.numbers[0])
                      ? u()
                      : this.options.prepend && o.toString()
                      ? this.options.prepend + o.toString()
                      : o.toString();
                  }
                  return this.logger.warn('no plural rule found for: '.concat(r)), '';
                },
              },
            ]),
            i
          );
        })(),
        xt = (function () {
          function i() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            C(this, i),
              (this.logger = E.create('interpolator')),
              (this.options = n),
              (this.format =
                (n.interpolation && n.interpolation.format) ||
                function (r) {
                  return r;
                }),
              this.init(n);
          }
          return (
            O(i, [
              {
                key: 'init',
                value: function () {
                  var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  r.interpolation || (r.interpolation = { escapeValue: !0 });
                  var e = r.interpolation;
                  (this.escape = void 0 !== e.escape ? e.escape : pt),
                    (this.escapeValue = void 0 === e.escapeValue || e.escapeValue),
                    (this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape),
                    (this.prefix = e.prefix ? D(e.prefix) : e.prefixEscaped || '{{'),
                    (this.suffix = e.suffix ? D(e.suffix) : e.suffixEscaped || '}}'),
                    (this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ','),
                    (this.unescapePrefix = e.unescapeSuffix ? '' : e.unescapePrefix || '-'),
                    (this.unescapeSuffix = this.unescapePrefix ? '' : e.unescapeSuffix || ''),
                    (this.nestingPrefix = e.nestingPrefix ? D(e.nestingPrefix) : e.nestingPrefixEscaped || D('$t(')),
                    (this.nestingSuffix = e.nestingSuffix ? D(e.nestingSuffix) : e.nestingSuffixEscaped || D(')')),
                    (this.nestingOptionsSeparator = e.nestingOptionsSeparator
                      ? e.nestingOptionsSeparator
                      : e.nestingOptionsSeparator || ','),
                    (this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3),
                    (this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat),
                    this.resetRegExp();
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.options && this.init(this.options);
                },
              },
              {
                key: 'resetRegExp',
                value: function () {
                  var r = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                  this.regexp = new RegExp(r, 'g');
                  var e = ''
                    .concat(this.prefix)
                    .concat(this.unescapePrefix, '(.+?)')
                    .concat(this.unescapeSuffix)
                    .concat(this.suffix);
                  this.regexpUnescape = new RegExp(e, 'g');
                  var t = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix);
                  this.nestingRegexp = new RegExp(t, 'g');
                },
              },
              {
                key: 'interpolate',
                value: function (r, e, t, a) {
                  var s,
                    u,
                    l,
                    o = this,
                    c =
                      (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
                  function f(d) {
                    return d.replace(/\$/g, '$$$$');
                  }
                  var m = function (v) {
                    if (v.indexOf(o.formatSeparator) < 0) {
                      var b = ye(e, c, v);
                      return o.alwaysFormat ? o.format(b, void 0, t, x({}, a, e, { interpolationkey: v })) : b;
                    }
                    var S = v.split(o.formatSeparator),
                      P = S.shift().trim(),
                      L = S.join(o.formatSeparator).trim();
                    return o.format(ye(e, c, P), L, t, x({}, a, e, { interpolationkey: P }));
                  };
                  this.resetRegExp();
                  var y = (a && a.missingInterpolationHandler) || this.options.missingInterpolationHandler,
                    h =
                      (a && a.interpolation && a.interpolation.skipOnVariables) ||
                      this.options.interpolation.skipOnVariables;
                  return (
                    [
                      {
                        regex: this.regexpUnescape,
                        safeValue: function (v) {
                          return f(v);
                        },
                      },
                      {
                        regex: this.regexp,
                        safeValue: function (v) {
                          return f(o.escapeValue ? o.escape(v) : v);
                        },
                      },
                    ].forEach(function (d) {
                      for (l = 0; (s = d.regex.exec(r)); ) {
                        if (void 0 === (u = m(s[1].trim())))
                          if ('function' == typeof y) {
                            var v = y(r, s, a);
                            u = 'string' == typeof v ? v : '';
                          } else {
                            if (h) {
                              u = s[0];
                              continue;
                            }
                            o.logger.warn('missed to pass in variable '.concat(s[1], ' for interpolating ').concat(r)),
                              (u = '');
                          }
                        else 'string' != typeof u && !o.useRawValueToEscape && (u = me(u));
                        var b = d.safeValue(u);
                        if (
                          ((r = r.replace(s[0], b)),
                          h
                            ? ((d.regex.lastIndex += b.length), (d.regex.lastIndex -= s[0].length))
                            : (d.regex.lastIndex = 0),
                          ++l >= o.maxReplaces)
                        )
                          break;
                      }
                    }),
                    r
                  );
                },
              },
              {
                key: 'nest',
                value: function (r, e) {
                  var o,
                    s,
                    t = this,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    u = x({}, a);
                  function l(y, h) {
                    var p = this.nestingOptionsSeparator;
                    if (y.indexOf(p) < 0) return y;
                    var d = y.split(new RegExp(''.concat(p, '[ ]*{'))),
                      v = '{'.concat(d[1]);
                    (y = d[0]), (v = (v = this.interpolate(v, u)).replace(/'/g, '"'));
                    try {
                      (u = JSON.parse(v)), h && (u = x({}, h, u));
                    } catch (b) {
                      return (
                        this.logger.warn('failed parsing options string in nesting for key '.concat(y), b),
                        ''.concat(y).concat(p).concat(v)
                      );
                    }
                    return delete u.defaultValue, y;
                  }
                  for (u.applyPostProcessor = !1, delete u.defaultValue; (o = this.nestingRegexp.exec(r)); ) {
                    var c = [],
                      f = !1;
                    if (-1 !== o[0].indexOf(this.formatSeparator) && !/{.*}/.test(o[1])) {
                      var m = o[1].split(this.formatSeparator).map(function (y) {
                        return y.trim();
                      });
                      (o[1] = m.shift()), (c = m), (f = !0);
                    }
                    if ((s = e(l.call(this, o[1].trim(), u), u)) && o[0] === r && 'string' != typeof s) return s;
                    'string' != typeof s && (s = me(s)),
                      s || (this.logger.warn('missed to resolve '.concat(o[1], ' for nesting ').concat(r)), (s = '')),
                      f &&
                        (s = c.reduce(function (y, h) {
                          return t.format(y, h, a.lng, x({}, a, { interpolationkey: o[1].trim() }));
                        }, s.trim())),
                      (r = r.replace(o[0], s)),
                      (this.regexp.lastIndex = 0);
                  }
                  return r;
                },
              },
            ]),
            i
          );
        })(),
        wt = (function (i) {
          function n(r, e, t) {
            var a,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return (
              C(this, n),
              (a = H(this, I(n).call(this))),
              Y && N.call(F(a)),
              (a.backend = r),
              (a.store = e),
              (a.services = t),
              (a.languageUtils = t.languageUtils),
              (a.options = o),
              (a.logger = E.create('backendConnector')),
              (a.state = {}),
              (a.queue = []),
              a.backend && a.backend.init && a.backend.init(t, o.backend, o),
              a
            );
          }
          return (
            J(n, i),
            O(n, [
              {
                key: 'queueLoad',
                value: function (e, t, a, o) {
                  var s = this,
                    u = [],
                    l = [],
                    c = [],
                    f = [];
                  return (
                    e.forEach(function (m) {
                      var y = !0;
                      t.forEach(function (h) {
                        var p = ''.concat(m, '|').concat(h);
                        !a.reload && s.store.hasResourceBundle(m, h)
                          ? (s.state[p] = 2)
                          : s.state[p] < 0 ||
                            (1 === s.state[p]
                              ? l.indexOf(p) < 0 && l.push(p)
                              : ((s.state[p] = 1),
                                (y = !1),
                                l.indexOf(p) < 0 && l.push(p),
                                u.indexOf(p) < 0 && u.push(p),
                                f.indexOf(h) < 0 && f.push(h)));
                      }),
                        y || c.push(m);
                    }),
                    (u.length || l.length) && this.queue.push({ pending: l, loaded: {}, errors: [], callback: o }),
                    { toLoad: u, pending: l, toLoadLanguages: c, toLoadNamespaces: f }
                  );
                },
              },
              {
                key: 'loaded',
                value: function (e, t, a) {
                  var o = e.split('|'),
                    s = o[0],
                    u = o[1];
                  t && this.emit('failedLoading', s, u, t),
                    a && this.store.addResourceBundle(s, u, a),
                    (this.state[e] = t ? -1 : 2);
                  var l = {};
                  this.queue.forEach(function (c) {
                    (function ft(i, n, r, e) {
                      var t = re(i, n, Object),
                        a = t.obj,
                        o = t.k;
                      (a[o] = a[o] || []), e && (a[o] = a[o].concat(r)), e || a[o].push(r);
                    })(c.loaded, [s], u),
                      (function St(i, n) {
                        for (var r = i.indexOf(n); -1 !== r; ) i.splice(r, 1), (r = i.indexOf(n));
                      })(c.pending, e),
                      t && c.errors.push(t),
                      0 === c.pending.length &&
                        !c.done &&
                        (Object.keys(c.loaded).forEach(function (f) {
                          l[f] || (l[f] = []),
                            c.loaded[f].length &&
                              c.loaded[f].forEach(function (m) {
                                l[f].indexOf(m) < 0 && l[f].push(m);
                              });
                        }),
                        (c.done = !0),
                        c.errors.length ? c.callback(c.errors) : c.callback());
                  }),
                    this.emit('loaded', l),
                    (this.queue = this.queue.filter(function (c) {
                      return !c.done;
                    }));
                },
              },
              {
                key: 'read',
                value: function (e, t, a) {
                  var o = this,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                    l = arguments.length > 5 ? arguments[5] : void 0;
                  return e.length
                    ? this.backend[a](e, t, function (c, f) {
                        c && f && s < 5
                          ? setTimeout(function () {
                              o.read.call(o, e, t, a, s + 1, 2 * u, l);
                            }, u)
                          : l(c, f);
                      })
                    : l(null, {});
                },
              },
              {
                key: 'prepareLoading',
                value: function (e, t) {
                  var a = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = arguments.length > 3 ? arguments[3] : void 0;
                  if (!this.backend)
                    return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), s && s();
                  'string' == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    'string' == typeof t && (t = [t]);
                  var u = this.queueLoad(e, t, o, s);
                  if (!u.toLoad.length) return u.pending.length || s(), null;
                  u.toLoad.forEach(function (l) {
                    a.loadOne(l);
                  });
                },
              },
              {
                key: 'load',
                value: function (e, t, a) {
                  this.prepareLoading(e, t, {}, a);
                },
              },
              {
                key: 'reload',
                value: function (e, t, a) {
                  this.prepareLoading(e, t, { reload: !0 }, a);
                },
              },
              {
                key: 'loadOne',
                value: function (e) {
                  var t = this,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                    o = e.split('|'),
                    s = o[0],
                    u = o[1];
                  this.read(s, u, 'read', void 0, void 0, function (l, c) {
                    l &&
                      t.logger.warn(
                        ''.concat(a, 'loading namespace ').concat(u, ' for language ').concat(s, ' failed'),
                        l
                      ),
                      !l &&
                        c &&
                        t.logger.log(''.concat(a, 'loaded namespace ').concat(u, ' for language ').concat(s), c),
                      t.loaded(e, l, c);
                  });
                },
              },
              {
                key: 'saveMissing',
                value: function (e, t, a, o, s) {
                  var u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                    ? this.logger.warn(
                        'did not save key "'.concat(a, '" as the namespace "').concat(t, '" was not yet loaded'),
                        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                      )
                    : null == a ||
                      '' === a ||
                      (this.backend &&
                        this.backend.create &&
                        this.backend.create(e, t, a, o, null, x({}, u, { isUpdate: s })),
                      e && e[0] && this.store.addResource(e[0], t, a, o));
                },
              },
            ]),
            n
          );
        })(N);
      function kt() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ['translation'],
          defaultNS: ['translation'],
          fallbackLng: ['dev'],
          fallbackNS: !1,
          whitelist: !1,
          nonExplicitWhitelist: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: 'all',
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: '.',
          nsSeparator: ':',
          pluralSeparator: '_',
          contextSeparator: '_',
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: 'fallback',
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (n) {
            var r = {};
            if (
              ('object' === R(n[1]) && (r = n[1]),
              'string' == typeof n[1] && (r.defaultValue = n[1]),
              'string' == typeof n[2] && (r.tDescription = n[2]),
              'object' === R(n[2]) || 'object' === R(n[3]))
            ) {
              var e = n[3] || n[2];
              Object.keys(e).forEach(function (t) {
                r[t] = e[t];
              });
            }
            return r;
          },
          interpolation: {
            escapeValue: !0,
            format: function (n, r, e, t) {
              return n;
            },
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1e3,
            skipOnVariables: !1,
          },
        };
      }
      function Le(i) {
        return (
          'string' == typeof i.ns && (i.ns = [i.ns]),
          'string' == typeof i.fallbackLng && (i.fallbackLng = [i.fallbackLng]),
          'string' == typeof i.fallbackNS && (i.fallbackNS = [i.fallbackNS]),
          i.whitelist &&
            (i.whitelist && i.whitelist.indexOf('cimode') < 0 && (i.whitelist = i.whitelist.concat(['cimode'])),
            (i.supportedLngs = i.whitelist)),
          i.nonExplicitWhitelist && (i.nonExplicitSupportedLngs = i.nonExplicitWhitelist),
          i.supportedLngs &&
            i.supportedLngs.indexOf('cimode') < 0 &&
            (i.supportedLngs = i.supportedLngs.concat(['cimode'])),
          i
        );
      }
      function G() {}
      var Ce = new ((function (i) {
          function n() {
            var r,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            if (
              (C(this, n),
              (r = H(this, I(n).call(this))),
              Y && N.call(F(r)),
              (r.options = Le(e)),
              (r.services = {}),
              (r.logger = E),
              (r.modules = { external: [] }),
              t && !r.isInitialized && !e.isClone)
            ) {
              if (!r.options.initImmediate) return r.init(e, t), H(r, F(r));
              setTimeout(function () {
                r.init(e, t);
              }, 0);
            }
            return r;
          }
          return (
            J(n, i),
            O(n, [
              {
                key: 'init',
                value: function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = arguments.length > 1 ? arguments[1] : void 0;
                  function o(h) {
                    return h ? ('function' == typeof h ? new h() : h) : null;
                  }
                  if (
                    ('function' == typeof t && ((a = t), (t = {})),
                    t.whitelist &&
                      !t.supportedLngs &&
                      this.logger.deprecate(
                        'whitelist',
                        'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'
                      ),
                    t.nonExplicitWhitelist &&
                      !t.nonExplicitSupportedLngs &&
                      this.logger.deprecate(
                        'whitelist',
                        'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'
                      ),
                    (this.options = x({}, kt(), this.options, Le(t))),
                    (this.format = this.options.interpolation.format),
                    a || (a = G),
                    !this.options.isClone)
                  ) {
                    E.init(this.modules.logger ? o(this.modules.logger) : null, this.options);
                    var s = new gt(this.options);
                    this.store = new ht(this.options.resources, this.options);
                    var u = this.services;
                    (u.logger = E),
                      (u.resourceStore = this.store),
                      (u.languageUtils = s),
                      (u.pluralResolver = new bt(s, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                      })),
                      (u.interpolator = new xt(this.options)),
                      (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                      (u.backendConnector = new wt(o(this.modules.backend), u.resourceStore, u, this.options)),
                      u.backendConnector.on('*', function (h) {
                        for (var p = arguments.length, d = new Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
                          d[v - 1] = arguments[v];
                        e.emit.apply(e, [h].concat(d));
                      }),
                      this.modules.languageDetector &&
                        ((u.languageDetector = o(this.modules.languageDetector)),
                        u.languageDetector.init(u, this.options.detection, this.options)),
                      this.modules.i18nFormat &&
                        ((u.i18nFormat = o(this.modules.i18nFormat)), u.i18nFormat.init && u.i18nFormat.init(this)),
                      (this.translator = new ke(this.services, this.options)),
                      this.translator.on('*', function (h) {
                        for (var p = arguments.length, d = new Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
                          d[v - 1] = arguments[v];
                        e.emit.apply(e, [h].concat(d));
                      }),
                      this.modules.external.forEach(function (h) {
                        h.init && h.init(e);
                      });
                  }
                  if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    var l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    l.length > 0 && 'dev' !== l[0] && (this.options.lng = l[0]);
                  }
                  !this.services.languageDetector &&
                    !this.options.lng &&
                    this.logger.warn('init: no languageDetector is used and no lng is defined');
                  var c = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
                  c.forEach(function (h) {
                    e[h] = function () {
                      var p;
                      return (p = e.store)[h].apply(p, arguments);
                    };
                  });
                  var f = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
                  f.forEach(function (h) {
                    e[h] = function () {
                      var p;
                      return (p = e.store)[h].apply(p, arguments), e;
                    };
                  });
                  var m = V(),
                    y = function () {
                      var p = function (v, b) {
                        e.isInitialized &&
                          e.logger.warn('init: i18next is already initialized. You should call init just once!'),
                          (e.isInitialized = !0),
                          e.options.isClone || e.logger.log('initialized', e.options),
                          e.emit('initialized', e.options),
                          m.resolve(b),
                          a(v, b);
                      };
                      if (e.languages && 'v1' !== e.options.compatibilityAPI && !e.isInitialized)
                        return p(null, e.t.bind(e));
                      e.changeLanguage(e.options.lng, p);
                    };
                  return this.options.resources || !this.options.initImmediate ? y() : setTimeout(y, 0), m;
                },
              },
              {
                key: 'loadResources',
                value: function (e) {
                  var t = this,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                    o = a,
                    s = 'string' == typeof e ? e : this.language;
                  if (
                    ('function' == typeof e && (o = e), !this.options.resources || this.options.partialBundledLanguages)
                  ) {
                    if (s && 'cimode' === s.toLowerCase()) return o();
                    var u = [],
                      l = function (m) {
                        m &&
                          t.services.languageUtils.toResolveHierarchy(m).forEach(function (h) {
                            u.indexOf(h) < 0 && u.push(h);
                          });
                      };
                    if (s) l(s);
                    else {
                      var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                      c.forEach(function (f) {
                        return l(f);
                      });
                    }
                    this.options.preload &&
                      this.options.preload.forEach(function (f) {
                        return l(f);
                      }),
                      this.services.backendConnector.load(u, this.options.ns, o);
                  } else o(null);
                },
              },
              {
                key: 'reloadResources',
                value: function (e, t, a) {
                  var o = V();
                  return (
                    e || (e = this.languages),
                    t || (t = this.options.ns),
                    a || (a = G),
                    this.services.backendConnector.reload(e, t, function (s) {
                      o.resolve(), a(s);
                    }),
                    o
                  );
                },
              },
              {
                key: 'use',
                value: function (e) {
                  if (!e)
                    throw new Error(
                      'You are passing an undefined module! Please check the object you are passing to i18next.use()'
                    );
                  if (!e.type)
                    throw new Error(
                      'You are passing a wrong module! Please check the object you are passing to i18next.use()'
                    );
                  return (
                    'backend' === e.type && (this.modules.backend = e),
                    ('logger' === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                    'languageDetector' === e.type && (this.modules.languageDetector = e),
                    'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                    'postProcessor' === e.type && Se.addPostProcessor(e),
                    '3rdParty' === e.type && this.modules.external.push(e),
                    this
                  );
                },
              },
              {
                key: 'changeLanguage',
                value: function (e, t) {
                  var a = this;
                  this.isLanguageChangingTo = e;
                  var o = V();
                  this.emit('languageChanging', e);
                  var u = function (c) {
                    !e && !c && a.services.languageDetector && (c = []);
                    var f = 'string' == typeof c ? c : a.services.languageUtils.getBestMatchFromCodes(c);
                    f &&
                      (a.language || ((a.language = f), (a.languages = a.services.languageUtils.toResolveHierarchy(f))),
                      a.translator.language || a.translator.changeLanguage(f),
                      a.services.languageDetector && a.services.languageDetector.cacheUserLanguage(f)),
                      a.loadResources(f, function (m) {
                        !(function (c, f) {
                          f
                            ? ((a.language = f),
                              (a.languages = a.services.languageUtils.toResolveHierarchy(f)),
                              a.translator.changeLanguage(f),
                              (a.isLanguageChangingTo = void 0),
                              a.emit('languageChanged', f),
                              a.logger.log('languageChanged', f))
                            : (a.isLanguageChangingTo = void 0),
                            o.resolve(function () {
                              return a.t.apply(a, arguments);
                            }),
                            t &&
                              t(c, function () {
                                return a.t.apply(a, arguments);
                              });
                        })(m, f);
                      });
                  };
                  return (
                    e || !this.services.languageDetector || this.services.languageDetector.async
                      ? !e && this.services.languageDetector && this.services.languageDetector.async
                        ? this.services.languageDetector.detect(u)
                        : u(e)
                      : u(this.services.languageDetector.detect()),
                    o
                  );
                },
              },
              {
                key: 'getFixedT',
                value: function (e, t) {
                  var a = this,
                    o = function s(u, l) {
                      var c;
                      if ('object' !== R(l)) {
                        for (var f = arguments.length, m = new Array(f > 2 ? f - 2 : 0), y = 2; y < f; y++)
                          m[y - 2] = arguments[y];
                        c = a.options.overloadTranslationOptionHandler([u, l].concat(m));
                      } else c = x({}, l);
                      return (c.lng = c.lng || s.lng), (c.lngs = c.lngs || s.lngs), (c.ns = c.ns || s.ns), a.t(u, c);
                    };
                  return 'string' == typeof e ? (o.lng = e) : (o.lngs = e), (o.ns = t), o;
                },
              },
              {
                key: 't',
                value: function () {
                  var e;
                  return this.translator && (e = this.translator).translate.apply(e, arguments);
                },
              },
              {
                key: 'exists',
                value: function () {
                  var e;
                  return this.translator && (e = this.translator).exists.apply(e, arguments);
                },
              },
              {
                key: 'setDefaultNamespace',
                value: function (e) {
                  this.options.defaultNS = e;
                },
              },
              {
                key: 'hasLoadedNamespace',
                value: function (e) {
                  var t = this,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if (!this.isInitialized)
                    return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
                  if (!this.languages || !this.languages.length)
                    return (
                      this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1
                    );
                  var o = this.languages[0],
                    s = !!this.options && this.options.fallbackLng,
                    u = this.languages[this.languages.length - 1];
                  if ('cimode' === o.toLowerCase()) return !0;
                  var l = function (m, y) {
                    var h = t.services.backendConnector.state[''.concat(m, '|').concat(y)];
                    return -1 === h || 2 === h;
                  };
                  if (a.precheck) {
                    var c = a.precheck(this, l);
                    if (void 0 !== c) return c;
                  }
                  return !(
                    !this.hasResourceBundle(o, e) &&
                    this.services.backendConnector.backend &&
                    (!l(o, e) || (s && !l(u, e)))
                  );
                },
              },
              {
                key: 'loadNamespaces',
                value: function (e, t) {
                  var a = this,
                    o = V();
                  return this.options.ns
                    ? ('string' == typeof e && (e = [e]),
                      e.forEach(function (s) {
                        a.options.ns.indexOf(s) < 0 && a.options.ns.push(s);
                      }),
                      this.loadResources(function (s) {
                        o.resolve(), t && t(s);
                      }),
                      o)
                    : (t && t(), Promise.resolve());
                },
              },
              {
                key: 'loadLanguages',
                value: function (e, t) {
                  var a = V();
                  'string' == typeof e && (e = [e]);
                  var o = this.options.preload || [],
                    s = e.filter(function (u) {
                      return o.indexOf(u) < 0;
                    });
                  return s.length
                    ? ((this.options.preload = o.concat(s)),
                      this.loadResources(function (u) {
                        a.resolve(), t && t(u);
                      }),
                      a)
                    : (t && t(), Promise.resolve());
                },
              },
              {
                key: 'dir',
                value: function (e) {
                  return (
                    e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
                    e
                      ? [
                          'ar',
                          'shu',
                          'sqr',
                          'ssh',
                          'xaa',
                          'yhd',
                          'yud',
                          'aao',
                          'abh',
                          'abv',
                          'acm',
                          'acq',
                          'acw',
                          'acx',
                          'acy',
                          'adf',
                          'ads',
                          'aeb',
                          'aec',
                          'afb',
                          'ajp',
                          'apc',
                          'apd',
                          'arb',
                          'arq',
                          'ars',
                          'ary',
                          'arz',
                          'auz',
                          'avl',
                          'ayh',
                          'ayl',
                          'ayn',
                          'ayp',
                          'bbz',
                          'pga',
                          'he',
                          'iw',
                          'ps',
                          'pbt',
                          'pbu',
                          'pst',
                          'prp',
                          'prd',
                          'ug',
                          'ur',
                          'ydd',
                          'yds',
                          'yih',
                          'ji',
                          'yi',
                          'hbo',
                          'men',
                          'xmn',
                          'fa',
                          'jpr',
                          'peo',
                          'pes',
                          'prs',
                          'dv',
                          'sam',
                        ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0
                        ? 'rtl'
                        : 'ltr'
                      : 'rtl'
                  );
                },
              },
              {
                key: 'createInstance',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                  return new n(e, t);
                },
              },
              {
                key: 'cloneInstance',
                value: function () {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                    o = x({}, this.options, t, { isClone: !0 }),
                    s = new n(o),
                    u = ['store', 'services', 'language'];
                  return (
                    u.forEach(function (l) {
                      s[l] = e[l];
                    }),
                    (s.services = x({}, this.services)),
                    (s.services.utils = { hasLoadedNamespace: s.hasLoadedNamespace.bind(s) }),
                    (s.translator = new ke(s.services, s.options)),
                    s.translator.on('*', function (l) {
                      for (var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), m = 1; m < c; m++)
                        f[m - 1] = arguments[m];
                      s.emit.apply(s, [l].concat(f));
                    }),
                    s.init(o, a),
                    (s.translator.options = s.options),
                    (s.translator.backendConnector.services.utils = {
                      hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
                    }),
                    s
                  );
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                  };
                },
              },
            ]),
            n
          );
        })(N))(),
        Oe = [],
        Ct = Oe.forEach,
        Ot = Oe.slice;
      function Et(i) {
        return (
          Ct.call(Ot.call(arguments, 1), function (n) {
            if (n) for (var r in n) void 0 === i[r] && (i[r] = n[r]);
          }),
          i
        );
      }
      var Ee = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        Pt = function (n, r, e) {
          var t = e || {};
          t.path = t.path || '/';
          var o = n + '=' + encodeURIComponent(r);
          if (t.maxAge > 0) {
            var s = t.maxAge - 0;
            if (isNaN(s)) throw new Error('maxAge should be a Number');
            o += '; Max-Age=' + Math.floor(s);
          }
          if (t.domain) {
            if (!Ee.test(t.domain)) throw new TypeError('option domain is invalid');
            o += '; Domain=' + t.domain;
          }
          if (t.path) {
            if (!Ee.test(t.path)) throw new TypeError('option path is invalid');
            o += '; Path=' + t.path;
          }
          if (t.expires) {
            if ('function' != typeof t.expires.toUTCString) throw new TypeError('option expires is invalid');
            o += '; Expires=' + t.expires.toUTCString();
          }
          if ((t.httpOnly && (o += '; HttpOnly'), t.secure && (o += '; Secure'), t.sameSite))
            switch ('string' == typeof t.sameSite ? t.sameSite.toLowerCase() : t.sameSite) {
              case !0:
                o += '; SameSite=Strict';
                break;
              case 'lax':
                o += '; SameSite=Lax';
                break;
              case 'strict':
                o += '; SameSite=Strict';
                break;
              case 'none':
                o += '; SameSite=None';
                break;
              default:
                throw new TypeError('option sameSite is invalid');
            }
          return o;
        },
        Rt = {
          name: 'cookie',
          lookup: function (n) {
            var r;
            if (n.lookupCookie && 'undefined' != typeof document) {
              var e = (function (n) {
                for (var r = n + '=', e = document.cookie.split(';'), t = 0; t < e.length; t++) {
                  for (var a = e[t]; ' ' === a.charAt(0); ) a = a.substring(1, a.length);
                  if (0 === a.indexOf(r)) return a.substring(r.length, a.length);
                }
                return null;
              })(n.lookupCookie);
              e && (r = e);
            }
            return r;
          },
          cacheUserLanguage: function (n, r) {
            r.lookupCookie &&
              'undefined' != typeof document &&
              (function (n, r, e, t) {
                var a =
                  arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: '/', sameSite: 'strict' };
                e && ((a.expires = new Date()), a.expires.setTime(a.expires.getTime() + 60 * e * 1e3)),
                  t && (a.domain = t),
                  (document.cookie = Pt(n, encodeURIComponent(r), a));
              })(r.lookupCookie, n, r.cookieMinutes, r.cookieDomain, r.cookieOptions);
          },
        },
        Nt = {
          name: 'querystring',
          lookup: function (n) {
            var r;
            if ('undefined' != typeof window)
              for (var t = window.location.search.substring(1).split('&'), a = 0; a < t.length; a++) {
                var o = t[a].indexOf('=');
                o > 0 && t[a].substring(0, o) === n.lookupQuerystring && (r = t[a].substring(o + 1));
              }
            return r;
          },
        },
        z = null,
        Re = function () {
          if (null !== z) return z;
          try {
            z = 'undefined' !== window && null !== window.localStorage;
            var n = 'i18next.translate.boo';
            window.localStorage.setItem(n, 'foo'), window.localStorage.removeItem(n);
          } catch (r) {
            z = !1;
          }
          return z;
        },
        _t = {
          name: 'localStorage',
          lookup: function (n) {
            var r;
            if (n.lookupLocalStorage && Re()) {
              var e = window.localStorage.getItem(n.lookupLocalStorage);
              e && (r = e);
            }
            return r;
          },
          cacheUserLanguage: function (n, r) {
            r.lookupLocalStorage && Re() && window.localStorage.setItem(r.lookupLocalStorage, n);
          },
        },
        B = null,
        Ne = function () {
          if (null !== B) return B;
          try {
            B = 'undefined' !== window && null !== window.sessionStorage;
            var n = 'i18next.translate.boo';
            window.sessionStorage.setItem(n, 'foo'), window.sessionStorage.removeItem(n);
          } catch (r) {
            B = !1;
          }
          return B;
        },
        Ft = {
          name: 'sessionStorage',
          lookup: function (n) {
            var r;
            if (n.lookupSessionStorage && Ne()) {
              var e = window.sessionStorage.getItem(n.lookupSessionStorage);
              e && (r = e);
            }
            return r;
          },
          cacheUserLanguage: function (n, r) {
            r.lookupSessionStorage && Ne() && window.sessionStorage.setItem(r.lookupSessionStorage, n);
          },
        },
        At = {
          name: 'navigator',
          lookup: function (n) {
            var r = [];
            if ('undefined' != typeof navigator) {
              if (navigator.languages)
                for (var e = 0; e < navigator.languages.length; e++) r.push(navigator.languages[e]);
              navigator.userLanguage && r.push(navigator.userLanguage),
                navigator.language && r.push(navigator.language);
            }
            return r.length > 0 ? r : void 0;
          },
        },
        It = {
          name: 'htmlTag',
          lookup: function (n) {
            var r,
              e = n.htmlTag || ('undefined' != typeof document ? document.documentElement : null);
            return e && 'function' == typeof e.getAttribute && (r = e.getAttribute('lang')), r;
          },
        },
        Dt = {
          name: 'path',
          lookup: function (n) {
            var r;
            if ('undefined' != typeof window) {
              var e = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
              if (e instanceof Array)
                if ('number' == typeof n.lookupFromPathIndex) {
                  if ('string' != typeof e[n.lookupFromPathIndex]) return;
                  r = e[n.lookupFromPathIndex].replace('/', '');
                } else r = e[0].replace('/', '');
            }
            return r;
          },
        },
        jt = {
          name: 'subdomain',
          lookup: function (n) {
            var r;
            if ('undefined' != typeof window) {
              var e = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
              e instanceof Array &&
                (r =
                  'number' == typeof n.lookupFromSubdomainIndex
                    ? e[n.lookupFromSubdomainIndex].replace('http://', '').replace('https://', '').replace('.', '')
                    : e[0].replace('http://', '').replace('https://', '').replace('.', ''));
            }
            return r;
          },
        },
        _e = (function () {
          function i(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            C(this, i), (this.type = 'languageDetector'), (this.detectors = {}), this.init(n, r);
          }
          return (
            O(i, [
              {
                key: 'init',
                value: function (r) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  (this.services = r),
                    (this.options = Et(e, this.options || {}, {
                      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
                      lookupQuerystring: 'lng',
                      lookupCookie: 'i18next',
                      lookupLocalStorage: 'i18nextLng',
                      lookupSessionStorage: 'i18nextLng',
                      caches: ['localStorage'],
                      excludeCacheFor: ['cimode'],
                    })),
                    this.options.lookupFromUrlIndex &&
                      (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                    (this.i18nOptions = t),
                    this.addDetector(Rt),
                    this.addDetector(Nt),
                    this.addDetector(_t),
                    this.addDetector(Ft),
                    this.addDetector(At),
                    this.addDetector(It),
                    this.addDetector(Dt),
                    this.addDetector(jt);
                },
              },
              {
                key: 'addDetector',
                value: function (r) {
                  this.detectors[r.name] = r;
                },
              },
              {
                key: 'detect',
                value: function (r) {
                  var e = this;
                  r || (r = this.options.order);
                  var t = [];
                  return (
                    r.forEach(function (a) {
                      if (e.detectors[a]) {
                        var o = e.detectors[a].lookup(e.options);
                        o && 'string' == typeof o && (o = [o]), o && (t = t.concat(o));
                      }
                    }),
                    this.services.languageUtils.getBestMatchFromCodes ? t : t.length > 0 ? t[0] : null
                  );
                },
              },
              {
                key: 'cacheUserLanguage',
                value: function (r, e) {
                  var t = this;
                  e || (e = this.options.caches),
                    e &&
                      ((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(r) > -1) ||
                        e.forEach(function (a) {
                          t.detectors[a] && t.detectors[a].cacheUserLanguage(r, t.options);
                        }));
                },
              },
            ]),
            i
          );
        })();
      (_e.type = 'languageDetector'),
        Ce.use(_e).init({
          fallbackLng: 'en',
          debug: !1,
          resources: {
            en: { translation: {} },
            ja: {
              translation: {
                Pay: '\u652f\u6255\u3046',
                'Failed to load Stripe':
                  '\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002',
                'Add your payment information': '\u652f\u6255\u60c5\u5831\u3092\u8ffd\u52a0',
                'Add card': '\u30ab\u30fc\u30c9\u3092\u8ffd\u52a0',
                'Add a card': '\u30ab\u30fc\u30c9\u3092\u8ffd\u52a0',
                Add: '\u8ffd\u52a0',
                'Card information': '\u30ab\u30fc\u30c9\u60c5\u5831',
                'Card Number': '\u30ab\u30fc\u30c9\u756a\u53f7',
                'MM / YY': '\u6708 / \u5e74',
                CVC: '\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b3\u30fc\u30c9(CVC)',
                'Country or region': '\u5730\u57df',
                'Postal Code': '\u90f5\u4fbf\u756a\u53f7',
              },
            },
          },
        });
      const k = Ce,
        Fe = class {
          constructor(i) {
            (0, g.r)(this, i),
              (this.stripeLoaded = (0, g.c)(this, 'stripeLoaded', 7)),
              (this.formSubmit = (0, g.c)(this, 'formSubmit', 7)),
              (this.defaultFormSubmitResult = (0, g.c)(this, 'defaultFormSubmitResult', 7)),
              (this.loadStripeStatus = ''),
              (this.intentType = 'payment'),
              (this.zip = !0),
              (this.sheetTitle = 'Add your payment information'),
              (this.buttonLabel = 'Pay'),
              (this.progress = ''),
              (this.errorMessage = ''),
              (this.zipCode = ''),
              (this.applicationName = '@stripe-elements/stripe-elements'),
              (this.showLabel = !1),
              (this.shouldUseDefaultFormSubmitAction = !0),
              this.publishableKey ? this.initStripe(this.publishableKey) : (this.loadStripeStatus = 'failure');
          }
          initStripe(i) {
            var n = this;
            return (0, w.Z)(function* () {
              (n.loadStripeStatus = 'loading'),
                (0, ze.l)(i)
                  .then((r) => {
                    (n.loadStripeStatus = 'success'), r.registerAppInfo({ name: n.applicationName }), (n.stripe = r);
                  })
                  .catch((r) => {
                    console.log(r), (n.errorMessage = r.message), (n.loadStripeStatus = 'failure');
                  })
                  .then(() => {
                    if (n.stripe) return n.initElement();
                  })
                  .then(() => {
                    !n.stripe || n.stripeLoadedEventHandler();
                  });
            })();
          }
          updateProgress(i) {
            var n = this;
            return (0, w.Z)(function* () {
              return (n.progress = i), n;
            })();
          }
          setErrorMessage(i) {
            var n = this;
            return (0, w.Z)(function* () {
              return (n.errorMessage = i), n;
            })();
          }
          setPaymentRequestOption(i) {
            var n = this;
            return (0, w.Z)(function* () {
              return (n.paymentRequestOption = i), n.createPaymentRequestButton(), n;
            })();
          }
          stripeLoadedEventHandler() {
            const i = { stripe: this.stripe };
            this.stripeDidLoaded && this.stripeDidLoaded(i), this.stripeLoaded.emit(i);
          }
          formSubmitEventHandler() {
            var i = this;
            return (0, w.Z)(function* () {
              const { cardCVC: n, cardExpiry: r, cardNumber: e, stripe: t } = i;
              i.formSubmit.emit({ cardCVCElement: n, cardExpiryElement: r, cardNumberElement: e, stripe: t });
            })();
          }
          defaultFormSubmitResultHandler(i) {
            var n = this;
            return (0, w.Z)(function* () {
              n.defaultFormSubmitResult.emit(i);
            })();
          }
          componentWillUpdate() {
            !this.publishableKey ||
              ['success', 'loading'].includes(this.loadStripeStatus) ||
              (this.initStripe(this.publishableKey), this.createPaymentRequestButton());
          }
          defaultFormSubmitAction(i, { stripe: n, cardNumberElement: r, intentClientSecret: e }) {
            var t = this;
            return (0, w.Z)(function* () {
              i.preventDefault();
              try {
                const { intentType: a } = t,
                  o = yield 'payment' === a
                    ? n.confirmCardPayment(e, { payment_method: { card: r } })
                    : n.confirmCardSetup(e, { payment_method: { card: r } });
                t.defaultFormSubmitResultHandler(o);
              } catch (a) {
                throw (t.defaultFormSubmitResultHandler(a), a);
              }
            })();
          }
          initElement() {
            var i = this;
            return (0, w.Z)(function* () {
              const n = i.stripe.elements(),
                r = ({ error: o }) => {
                  i.errorMessage = o ? o.message : '';
                };
              i.cardNumber = n.create('cardNumber', { placeholder: k.t('Card Number') });
              const e = i.el.querySelector('#card-number');
              i.cardNumber.mount(e), i.cardNumber.on('change', r), (i.cardExpiry = n.create('cardExpiry'));
              const t = i.el.querySelector('#card-expiry');
              i.cardExpiry.mount(t), i.cardExpiry.on('change', r), (i.cardCVC = n.create('cardCvc'));
              const a = i.el.querySelector('#card-cvc');
              i.cardCVC.mount(a),
                i.cardCVC.on('change', r),
                document.getElementById('stripe-card-element').addEventListener(
                  'submit',
                  (function () {
                    var o = (0, w.Z)(function* (s) {
                      const { cardCVC: u, cardExpiry: l, cardNumber: c, stripe: f, intentClientSecret: m } = i,
                        y = {
                          cardCVCElement: u,
                          cardExpiryElement: l,
                          cardNumberElement: c,
                          stripe: f,
                          intentClientSecret: m,
                          zipCode: i.zipCode,
                        };
                      i.progress = 'loading';
                      try {
                        i.handleSubmit
                          ? yield i.handleSubmit(s, y)
                          : !0 === i.shouldUseDefaultFormSubmitAction && m
                          ? yield i.defaultFormSubmitAction(s, y)
                          : s.preventDefault(),
                          yield i.formSubmitEventHandler(),
                          (i.handleSubmit || !0 === i.shouldUseDefaultFormSubmitAction) && (i.progress = 'success');
                      } catch (h) {
                        (i.errorMessage = h.message), (i.progress = 'failure');
                      }
                    });
                    return function (s) {
                      return o.apply(this, arguments);
                    };
                  })()
                );
            })();
          }
          componentDidLoad() {
            this.el.classList.add(he());
          }
          disconnectedCallback() {
            this.cardNumber && this.cardNumber.unmount(),
              this.cardExpiry && this.cardExpiry.unmount(),
              this.cardCVC && this.cardCVC.unmount();
          }
          createPaymentRequestButton() {
            const { showPaymentRequestButton: i, paymentRequestOption: n } = this;
            if (!i || !n || !document) return null;
            const r = document.getElementById('stripe-payment-request-button'),
              e = document.createElement('stripe-payment-request-button');
            r.appendChild(e);
            const {
              paymentRequestPaymentMethodHandler: t,
              paymentRequestShippingOptionChangeHandler: a,
              paymentRequestShippingAddressChangeHandler: o,
            } = n;
            customElements
              .whenDefined('stripe-payment-request-button')
              .then(
                () => (
                  e.setPaymentRequestOption(n),
                  t && e.setPaymentMethodEventHandler(t),
                  a && e.setPaymentRequestShippingOptionEventHandler(a),
                  o && e.setPaymentRequestShippingAddressEventHandler(o),
                  e.initStripe(this.publishableKey)
                )
              );
          }
          render() {
            const { errorMessage: i } = this;
            if ('failure' === this.loadStripeStatus) return (0, g.h)('p', null, k.t('Failed to load Stripe'));
            const n = 'loading' === this.progress;
            return (0, g.h)(
              'div',
              { class: 'stripe-payment-sheet-wrap' },
              (0, g.h)(
                'form',
                { id: 'stripe-card-element' },
                (0, g.h)('div', { class: 'stripe-heading' }, k.t(this.sheetTitle)),
                (0, g.h)('div', { id: 'stripe-payment-request-button' }),
                (0, g.h)('div', null, (0, g.h)('div', { class: 'stripe-section-title' }, k.t('Card information'))),
                (0, g.h)(
                  'div',
                  { class: 'payment-info card visible' },
                  (0, g.h)(
                    'fieldset',
                    { class: 'stripe-input-box' },
                    (0, g.h)(
                      'div',
                      null,
                      (0, g.h)(
                        'label',
                        null,
                        this.showLabel ? (0, g.h)('lenged', null, k.t('Card Number')) : null,
                        (0, g.h)('div', { id: 'card-number' })
                      )
                    ),
                    (0, g.h)(
                      'div',
                      { class: 'stripe-input-column', style: { display: 'flex' } },
                      (0, g.h)(
                        'label',
                        { style: { width: '50%' } },
                        this.showLabel ? (0, g.h)('lenged', null, k.t('MM / YY')) : null,
                        (0, g.h)('div', { id: 'card-expiry' })
                      ),
                      (0, g.h)(
                        'label',
                        { style: { width: '50%' } },
                        this.showLabel ? (0, g.h)('lenged', null, k.t('CVC')) : null,
                        (0, g.h)('div', { id: 'card-cvc' })
                      )
                    ),
                    (0, g.h)('div', { id: 'card-errors', class: 'element-errors' }, i)
                  )
                ),
                this.zip
                  ? (0, g.h)(
                      'div',
                      { style: { marginTop: '1.5rem' } },
                      (0, g.h)('div', { class: 'stripe-section-title' }, k.t('Country or region'))
                    )
                  : null,
                this.zip
                  ? (0, g.h)(
                      'div',
                      { class: 'payment-info card visible' },
                      (0, g.h)(
                        'fieldset',
                        { class: 'stripe-input-box' },
                        (0, g.h)(
                          'div',
                          null,
                          (0, g.h)(
                            'label',
                            null,
                            this.showLabel ? (0, g.h)('lenged', null, k.t('Postal Code')) : null,
                            (0, g.h)('input', {
                              id: 'zip',
                              name: 'zip',
                              type: 'text',
                              inputmode: 'numeric',
                              class: 'stripe-input-box StripeElement',
                              style: { width: '100%' },
                              placeholder: k.t('Postal Code'),
                              value: this.zipCode,
                              onInput: (r) => {
                                this.zipCode = r.target.value;
                              },
                            })
                          )
                        )
                      )
                    )
                  : null,
                (0, g.h)(
                  'div',
                  { style: { marginTop: '32px' } },
                  (0, g.h)(
                    'button',
                    { type: 'submit', disabled: n },
                    k.t('loading' === this.progress ? 'Loading' : this.buttonLabel)
                  )
                )
              )
            );
          }
          get el() {
            return (0, g.g)(this);
          }
        };
      Fe.style =
        ':root{--color-label:#565656;--color-placeholder:#acacac;--color-heading-text:#333;--color-text-error:#ef4444;--color-input-border:#e4e4e6;--color-button-text:rgba(255, 255, 255, 0.95);--color-button-text-disabled:rgba(255, 255, 255, 0.4);--color-primary:#0074d4}.stripe-payment-sheet-wrap{display:block;width:100%;background:#fff;padding:32px 16px}.stripe-payment-sheet-wrap *:where(:not(iframe,canvas,img,svg,video):not(svg *)){all:unset;display:revert;background:none;border:none;font-family:"Roboto", suns-serif;box-sizing:border-box}.stripe-payment-sheet-wrap button{cursor:pointer}.stripe-payment-sheet-wrap .StripeElement{padding:8px 16px;min-height:64px;border-bottom:1px solid var(--color-input-border);border-radius:4px;display:flex;justify-content:center;align-items:center}.stripe-payment-sheet-wrap .StripeElement>.__PrivateStripeElement{width:100%}.stripe-payment-sheet-wrap .stripe-input-box{background-color:#fff;border-radius:2px;filter:drop-shadow(0 0 1px var(--color-input-border))}.stripe-payment-sheet-wrap .stripe-input-column .StripeElement{border-right:1px solid var(--color-input-border)}.stripe-payment-sheet-wrap .stripe-input-column .StripeElement:last-child{border-right:none}.stripe-payment-sheet-wrap .stripe-heading{font-size:24px;font-weight:bold;color:var(--color-heading-text);margin-bottom:24px}.stripe-payment-sheet-wrap .stripe-section-title{font-size:14px;font-weight:bold;color:var(--color-label);margin-bottom:8px}.stripe-payment-sheet-wrap .payment-info label{color:var(--color-label)}.stripe-payment-sheet-wrap .stripe-element-errors{margin-top:8px;font-size:14px;color:var(--color-text-error)}.stripe-payment-sheet-wrap button{display:block;color:var(--color-button-text);background-color:var(--color-primary);width:100%;text-align:center;padding:16px 16px;font-size:18px;border-radius:8px;min-height:42px}.stripe-payment-sheet-wrap button:disabled{color:var(--color-button-text-disabled)}';
      const Ae = class {
        constructor(i) {
          (0, g.r)(this, i), (this.close = (0, g.c)(this, 'close', 7)), (this.showCloseButton = !0), (this.open = !1);
        }
        toggleModal() {
          var i = this;
          return (0, w.Z)(function* () {
            (i.open = !i.open), !1 === i.open && i.close.emit();
          })();
        }
        openModal() {
          var i = this;
          return (0, w.Z)(function* () {
            i.open = !0;
          })();
        }
        closeModal() {
          var i = this;
          return (0, w.Z)(function* () {
            (i.open = !1), i.close.emit();
          })();
        }
        componentDidLoad() {
          this.el.classList.add(he());
        }
        render() {
          const { open: i, showCloseButton: n } = this;
          return (0, g.h)(
            g.H,
            null,
            (0, g.h)(
              'div',
              { class: 'modal-row' + (i ? ' open' : ''), onClick: () => this.closeModal() },
              (0, g.h)(
                'div',
                { class: 'modal-child', onClick: (r) => r.stopPropagation() },
                n
                  ? (0, g.h)(
                      'div',
                      { class: 'modal-close-button-wrap' },
                      (0, g.h)('ion-icon', {
                        name: 'close',
                        size: 'large',
                        class: 'modal-close-button',
                        onClick: () => this.closeModal(),
                      })
                    )
                  : null,
                (0, g.h)('slot', null)
              )
            )
          );
        }
        get el() {
          return (0, g.g)(this);
        }
      };
      Ae.style =
        '*:where(:not(iframe,canvas,img,svg,video):not(svg *)){all:unset;display:revert;background:none;border:none;font-family:"Roboto", suns-serif;box-sizing:border-box}button{cursor:pointer}:root{--color-label:#565656;--color-placeholder:#acacac;--color-heading-text:#333;--color-text-error:#ef4444;--color-input-border:#e4e4e6;--color-button-text:rgba(255, 255, 255, 0.95);--color-button-text-disabled:rgba(255, 255, 255, 0.4);--color-primary:#0074d4}:host{display:block}.modal-row{display:none}.modal-row.open{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:1ch;background:rgba(0, 0, 0, 0.3)}.modal-child{padding:1.5rem;background-color:#fff;width:100%}.modal-close-button-wrap{padding-left:8px}.modal-close-button-wrap .modal-close-button{width:32px;display:block;fill:var(--color-label);cursor:pointer}';
    },
  },
]);
