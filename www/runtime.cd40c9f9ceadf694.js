(() => {
  'use strict';
  var e,
    g = {},
    v = {};
  function t(e) {
    var c = v[e];
    if (void 0 !== c) return c.exports;
    var a = (v[e] = { id: e, loaded: !1, exports: {} });
    return g[e].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports;
  }
  (t.m = g),
    (e = []),
    (t.O = (c, a, d, b) => {
      if (!a) {
        var f = 1 / 0;
        for (r = 0; r < e.length; r++) {
          for (var [a, d, b] = e[r], i = !0, n = 0; n < a.length; n++)
            (!1 & b || f >= b) && Object.keys(t.O).every((p) => t.O[p](a[n]))
              ? a.splice(n--, 1)
              : ((i = !1), b < f && (f = b));
          if (i) {
            e.splice(r--, 1);
            var l = d();
            void 0 !== l && (c = l);
          }
        }
        return c;
      }
      b = b || 0;
      for (var r = e.length; r > 0 && e[r - 1][2] > b; r--) e[r] = e[r - 1];
      e[r] = [a, d, b];
    }),
    (t.n = (e) => {
      var c = e && e.__esModule ? () => e.default : () => e;
      return t.d(c, { a: c }), c;
    }),
    (() => {
      var c,
        e = Object.getPrototypeOf ? (a) => Object.getPrototypeOf(a) : (a) => a.__proto__;
      t.t = function (a, d) {
        if (
          (1 & d && (a = this(a)),
          8 & d || ('object' == typeof a && a && ((4 & d && a.__esModule) || (16 & d && 'function' == typeof a.then))))
        )
          return a;
        var b = Object.create(null);
        t.r(b);
        var r = {};
        c = c || [null, e({}), e([]), e(e)];
        for (var f = 2 & d && a; 'object' == typeof f && !~c.indexOf(f); f = e(f))
          Object.getOwnPropertyNames(f).forEach((i) => (r[i] = () => a[i]));
        return (r.default = () => a), t.d(b, r), b;
      };
    })(),
    (t.d = (e, c) => {
      for (var a in c) t.o(c, a) && !t.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: c[a] });
    }),
    (t.f = {}),
    (t.e = (e) => Promise.all(Object.keys(t.f).reduce((c, a) => (t.f[a](e, c), c), []))),
    (t.u = (e) =>
      (({ 2214: 'polyfills-core-js', 6748: 'polyfills-dom', 8592: 'common' }[e] || e) +
      '.' +
      {
        53: '42830fec14fd0f3e',
        388: '7dbd7785e6af6a67',
        410: '5566d5bbafd285c5',
        438: 'd6e2a1b72c38da8e',
        657: 'd30154497bf0d17b',
        661: '35b5d4e506003c21',
        797: 'a9b18fb495a59ff4',
        816: 'bdb96f368608d085',
        1033: 'f5909bdb660dc765',
        1118: '4df7084750b2f616',
        1217: 'b79af76723329ff7',
        1536: '9257f78831417c1a',
        1650: 'a073d3d604cc522a',
        1709: '6803d90bfa571157',
        2073: '17084538e15b218e',
        2214: '08fb6cb7ffd5bf44',
        2289: '1ffb9423beacf80b',
        2349: 'f1a9dd2f33b9d4b3',
        2442: '0c6f582ac35fe5f4',
        2513: '4dd747eb1067296e',
        2698: '15b24ae9d1533ff1',
        2773: '23fcf839349d4cae',
        2933: 'b9533e695b606bb9',
        3326: 'ab9e0c534e1eaf4a',
        3549: '0d97380a9ef9ac3d',
        3583: '1ac47ac4b5bed9e6',
        3648: 'a78952793a338f76',
        3802: '6df8b56028e948e7',
        3804: 'd956a0a0f364d312',
        4174: '95a449ce6c3c141b',
        4330: 'f604290a988ea787',
        4376: 'b65e054a7b8149a0',
        4432: '0d4093e4adf74671',
        4477: '7a079a72fdae16b9',
        4711: 'ef291d1c9299ab76',
        4753: '9c46d1681f28562f',
        4908: 'cee1b23035e6e7ee',
        4959: '40368efb36b7c447',
        5168: 'f2392f5a6a55b5b7',
        5349: '63ab4d80dd36e152',
        5652: '3409f6ede4d11ec0',
        5836: '93c5c8237c793a8f',
        6120: 'f1d2120be3b9ea73',
        6560: '511cc7c5b9e58862',
        6708: 'c79035943347202d',
        6748: 'de5aa1c0480698a8',
        7010: '54a1d7939b571e08',
        7205: 'f5dadd716d11dfe5',
        7544: '51349382e4e68649',
        7602: 'e523e05e023e233c',
        8034: '417b647ee0bd4eea',
        8136: '30c7415975733043',
        8592: 'bdb20ed26f91228d',
        8628: 'da5ece896cb7bf61',
        8939: 'b94993bc922f435c',
        9016: '404b5dbcce7c2c8d',
        9325: '9b1a913e274b023f',
        9434: 'f72834170b55736f',
        9536: '974074dc12f3c9e0',
        9643: '8b72a7c9c12e76b5',
        9654: '8807f106d2d27c7f',
        9666: 'a007dd434bd2f2fc',
        9824: '9d70b7005539caf3',
        9884: '378a5c0e162d99e1',
        9922: 'b25acb07aed031ab',
        9958: '714fe79ae6e05421',
      }[e] +
      '.js')),
    (t.miniCssF = (e) => {}),
    (t.o = (e, c) => Object.prototype.hasOwnProperty.call(e, c)),
    (() => {
      var e = {},
        c = 'ngx-new:';
      t.l = (a, d, b, r) => {
        if (e[a]) e[a].push(d);
        else {
          var f, i;
          if (void 0 !== b)
            for (var n = document.getElementsByTagName('script'), l = 0; l < n.length; l++) {
              var o = n[l];
              if (o.getAttribute('src') == a || o.getAttribute('data-webpack') == c + b) {
                f = o;
                break;
              }
            }
          f ||
            ((i = !0),
            ((f = document.createElement('script')).type = 'module'),
            (f.charset = 'utf-8'),
            (f.timeout = 120),
            t.nc && f.setAttribute('nonce', t.nc),
            f.setAttribute('data-webpack', c + b),
            (f.src = t.tu(a))),
            (e[a] = [d]);
          var s = (_, p) => {
              (f.onerror = f.onload = null), clearTimeout(u);
              var y = e[a];
              if ((delete e[a], f.parentNode && f.parentNode.removeChild(f), y && y.forEach((h) => h(p)), _))
                return _(p);
            },
            u = setTimeout(s.bind(null, void 0, { type: 'timeout', target: f }), 12e4);
          (f.onerror = s.bind(null, f.onerror)), (f.onload = s.bind(null, f.onload)), i && document.head.appendChild(f);
        }
      };
    })(),
    (t.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      t.tu = (c) => (
        void 0 === e &&
          ((e = { createScriptURL: (a) => a }),
          'undefined' != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy('angular#bundler', e))),
        e.createScriptURL(c)
      );
    })(),
    (t.p = ''),
    (() => {
      var e = { 3666: 0 };
      (t.f.j = (d, b) => {
        var r = t.o(e, d) ? e[d] : void 0;
        if (0 !== r)
          if (r) b.push(r[2]);
          else if (3666 != d) {
            var f = new Promise((o, s) => (r = e[d] = [o, s]));
            b.push((r[2] = f));
            var i = t.p + t.u(d),
              n = new Error();
            t.l(
              i,
              (o) => {
                if (t.o(e, d) && (0 !== (r = e[d]) && (e[d] = void 0), r)) {
                  var s = o && ('load' === o.type ? 'missing' : o.type),
                    u = o && o.target && o.target.src;
                  (n.message = 'Loading chunk ' + d + ' failed.\n(' + s + ': ' + u + ')'),
                    (n.name = 'ChunkLoadError'),
                    (n.type = s),
                    (n.request = u),
                    r[1](n);
                }
              },
              'chunk-' + d,
              d
            );
          } else e[d] = 0;
      }),
        (t.O.j = (d) => 0 === e[d]);
      var c = (d, b) => {
          var n,
            l,
            [r, f, i] = b,
            o = 0;
          if (r.some((u) => 0 !== e[u])) {
            for (n in f) t.o(f, n) && (t.m[n] = f[n]);
            if (i) var s = i(t);
          }
          for (d && d(b); o < r.length; o++) t.o(e, (l = r[o])) && e[l] && e[l][0](), (e[r[o]] = 0);
          return t.O(s);
        },
        a = (self.webpackChunkngx_new = self.webpackChunkngx_new || []);
      a.forEach(c.bind(null, 0)), (a.push = c.bind(null, a.push.bind(a)));
    })();
})();
