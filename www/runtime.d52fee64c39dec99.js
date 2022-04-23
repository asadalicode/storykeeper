(() => {
  'use strict';
  var e,
    g = {},
    v = {};
  function f(e) {
    var c = v[e];
    if (void 0 !== c) return c.exports;
    var a = (v[e] = { id: e, loaded: !1, exports: {} });
    return g[e].call(a.exports, a, a.exports, f), (a.loaded = !0), a.exports;
  }
  (f.m = g),
    (e = []),
    (f.O = (c, a, d, n) => {
      if (!a) {
        var t = 1 / 0;
        for (r = 0; r < e.length; r++) {
          for (var [a, d, n] = e[r], i = !0, b = 0; b < a.length; b++)
            (!1 & n || t >= n) && Object.keys(f.O).every((p) => f.O[p](a[b]))
              ? a.splice(b--, 1)
              : ((i = !1), n < t && (t = n));
          if (i) {
            e.splice(r--, 1);
            var l = d();
            void 0 !== l && (c = l);
          }
        }
        return c;
      }
      n = n || 0;
      for (var r = e.length; r > 0 && e[r - 1][2] > n; r--) e[r] = e[r - 1];
      e[r] = [a, d, n];
    }),
    (f.n = (e) => {
      var c = e && e.__esModule ? () => e.default : () => e;
      return f.d(c, { a: c }), c;
    }),
    (() => {
      var c,
        e = Object.getPrototypeOf ? (a) => Object.getPrototypeOf(a) : (a) => a.__proto__;
      f.t = function (a, d) {
        if (
          (1 & d && (a = this(a)),
          8 & d || ('object' == typeof a && a && ((4 & d && a.__esModule) || (16 & d && 'function' == typeof a.then))))
        )
          return a;
        var n = Object.create(null);
        f.r(n);
        var r = {};
        c = c || [null, e({}), e([]), e(e)];
        for (var t = 2 & d && a; 'object' == typeof t && !~c.indexOf(t); t = e(t))
          Object.getOwnPropertyNames(t).forEach((i) => (r[i] = () => a[i]));
        return (r.default = () => a), f.d(n, r), n;
      };
    })(),
    (f.d = (e, c) => {
      for (var a in c) f.o(c, a) && !f.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: c[a] });
    }),
    (f.f = {}),
    (f.e = (e) => Promise.all(Object.keys(f.f).reduce((c, a) => (f.f[a](e, c), c), []))),
    (f.u = (e) =>
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
        7010: '0cd839f5d44ae19d',
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
    (f.miniCssF = (e) => {}),
    (f.o = (e, c) => Object.prototype.hasOwnProperty.call(e, c)),
    (() => {
      var e = {},
        c = 'ngx-new:';
      f.l = (a, d, n, r) => {
        if (e[a]) e[a].push(d);
        else {
          var t, i;
          if (void 0 !== n)
            for (var b = document.getElementsByTagName('script'), l = 0; l < b.length; l++) {
              var o = b[l];
              if (o.getAttribute('src') == a || o.getAttribute('data-webpack') == c + n) {
                t = o;
                break;
              }
            }
          t ||
            ((i = !0),
            ((t = document.createElement('script')).type = 'module'),
            (t.charset = 'utf-8'),
            (t.timeout = 120),
            f.nc && t.setAttribute('nonce', f.nc),
            t.setAttribute('data-webpack', c + n),
            (t.src = f.tu(a))),
            (e[a] = [d]);
          var s = (_, p) => {
              (t.onerror = t.onload = null), clearTimeout(u);
              var y = e[a];
              if ((delete e[a], t.parentNode && t.parentNode.removeChild(t), y && y.forEach((h) => h(p)), _))
                return _(p);
            },
            u = setTimeout(s.bind(null, void 0, { type: 'timeout', target: t }), 12e4);
          (t.onerror = s.bind(null, t.onerror)), (t.onload = s.bind(null, t.onload)), i && document.head.appendChild(t);
        }
      };
    })(),
    (f.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (f.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      f.tu = (c) => (
        void 0 === e &&
          ((e = { createScriptURL: (a) => a }),
          'undefined' != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy('angular#bundler', e))),
        e.createScriptURL(c)
      );
    })(),
    (f.p = ''),
    (() => {
      var e = { 3666: 0 };
      (f.f.j = (d, n) => {
        var r = f.o(e, d) ? e[d] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else if (3666 != d) {
            var t = new Promise((o, s) => (r = e[d] = [o, s]));
            n.push((r[2] = t));
            var i = f.p + f.u(d),
              b = new Error();
            f.l(
              i,
              (o) => {
                if (f.o(e, d) && (0 !== (r = e[d]) && (e[d] = void 0), r)) {
                  var s = o && ('load' === o.type ? 'missing' : o.type),
                    u = o && o.target && o.target.src;
                  (b.message = 'Loading chunk ' + d + ' failed.\n(' + s + ': ' + u + ')'),
                    (b.name = 'ChunkLoadError'),
                    (b.type = s),
                    (b.request = u),
                    r[1](b);
                }
              },
              'chunk-' + d,
              d
            );
          } else e[d] = 0;
      }),
        (f.O.j = (d) => 0 === e[d]);
      var c = (d, n) => {
          var b,
            l,
            [r, t, i] = n,
            o = 0;
          if (r.some((u) => 0 !== e[u])) {
            for (b in t) f.o(t, b) && (f.m[b] = t[b]);
            if (i) var s = i(f);
          }
          for (d && d(n); o < r.length; o++) f.o(e, (l = r[o])) && e[l] && e[l][0](), (e[r[o]] = 0);
          return f.O(s);
        },
        a = (self.webpackChunkngx_new = self.webpackChunkngx_new || []);
      a.forEach(c.bind(null, 0)), (a.push = c.bind(null, a.push.bind(a)));
    })();
})();
