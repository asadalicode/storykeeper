(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [797],
  {
    797: (N, v, i) => {
      'use strict';
      i.r(v), i.d(v, { VoiceRecorderWeb: () => U });
      var L = i(7423),
        c = i(5861),
        h = i(6351);
      const T = () => new Error('FAILED_TO_RECORD'),
        O = () => new Error('RECORDING_HAS_NOT_STARTED'),
        A = () => new Error('FAILED_TO_FETCH_RECORDING'),
        I = ['audio/aac', 'audio/webm;codecs=opus', 'audio/mp4', 'audio/webm', 'audio/ogg;codecs=opus'],
        m = () => new Promise(() => {});
      class p {
        constructor() {
          (this.mediaRecorder = null), (this.chunks = []), (this.pendingResult = m());
        }
        static canDeviceVoiceRecord() {
          return (0, c.Z)(function* () {
            var a;
            return null ==
              (null === (a = null == navigator ? void 0 : navigator.mediaDevices) || void 0 === a
                ? void 0
                : a.getUserMedia) || null == p.getSupportedMimeType()
              ? { value: !1 }
              : { value: !0 };
          })();
        }
        startRecording() {
          var a = this;
          return (0, c.Z)(function* () {
            if (null != a.mediaRecorder) throw new Error('ALREADY_RECORDING');
            if (!(yield p.canDeviceVoiceRecord()).value) throw new Error('DEVICE_CANNOT_VOICE_RECORD');
            if (!(yield p.hasAudioRecordingPermission().catch(() => ({ value: !0 }))).value)
              throw new Error('MISSING_PERMISSION');
            return (
              navigator.mediaDevices
                .getUserMedia({ audio: !0 })
                .then(a.onSuccessfullyStartedRecording.bind(a))
                .catch(a.onFailedToStartRecording.bind(a)),
              { value: !0 }
            );
          })();
        }
        stopRecording() {
          var a = this;
          return (0, c.Z)(function* () {
            if (null == a.mediaRecorder) throw O();
            try {
              return a.mediaRecorder.stop(), a.pendingResult;
            } catch (E) {
              throw A();
            } finally {
              a.prepareInstanceForNextOperation();
            }
          })();
        }
        static hasAudioRecordingPermission() {
          return (0, c.Z)(function* () {
            return navigator.permissions
              .query({ name: 'microphone' })
              .then((a) => ({ value: 'granted' === a.state }))
              .catch(() => {
                throw new Error('COULD_NOT_QUERY_PERMISSION_STATUS');
              });
          })();
        }
        static requestAudioRecordingPermission() {
          return (0, c.Z)(function* () {
            return (yield p.hasAudioRecordingPermission().catch(() => ({ value: !1 }))).value
              ? { value: !0 }
              : navigator.mediaDevices
                  .getUserMedia({ audio: !0 })
                  .then(() => ({ value: !0 }))
                  .catch(() => ({ value: !1 }));
          })();
        }
        pauseRecording() {
          if (null == this.mediaRecorder) throw O();
          return 'recording' === this.mediaRecorder.state
            ? (this.mediaRecorder.pause(), Promise.resolve({ value: !0 }))
            : Promise.resolve({ value: !1 });
        }
        resumeRecording() {
          if (null == this.mediaRecorder) throw O();
          return 'paused' === this.mediaRecorder.state
            ? (this.mediaRecorder.resume(), Promise.resolve({ value: !0 }))
            : Promise.resolve({ value: !1 });
        }
        getCurrentStatus() {
          return Promise.resolve(
            null == this.mediaRecorder
              ? { status: 'NONE' }
              : 'recording' === this.mediaRecorder.state
              ? { status: 'RECORDING' }
              : 'paused' === this.mediaRecorder.state
              ? { status: 'PAUSED' }
              : { status: 'NONE' }
          );
        }
        static getSupportedMimeType() {
          if (null == (null == MediaRecorder ? void 0 : MediaRecorder.isTypeSupported)) return null;
          const a = I.find((E) => MediaRecorder.isTypeSupported(E));
          return null != a ? a : null;
        }
        onSuccessfullyStartedRecording(a) {
          var E = this;
          this.pendingResult = new Promise((b, D) => {
            (this.mediaRecorder = new MediaRecorder(a)),
              (this.mediaRecorder.onerror = () => {
                D(T()), this.prepareInstanceForNextOperation();
              }),
              (this.mediaRecorder.onstop = (0, c.Z)(function* () {
                const G = p.getSupportedMimeType();
                if (null == G) D(A());
                else {
                  const C = new Blob(E.chunks, { type: G }),
                    Z = yield p.blobToBase64(C),
                    B = yield (0, h.Z)(C);
                  E.prepareInstanceForNextOperation(),
                    b({ value: { recordDataBase64: Z, mimeType: G, msDuration: 1e3 * B } });
                }
              })),
              (this.mediaRecorder.ondataavailable = (G) => this.chunks.push(G.data)),
              this.mediaRecorder.start();
          });
        }
        onFailedToStartRecording() {
          throw (this.prepareInstanceForNextOperation(), T());
        }
        static blobToBase64(a) {
          return new Promise((E) => {
            const b = new FileReader();
            (b.onloadend = () => E(String(b.result))), b.readAsDataURL(a);
          });
        }
        prepareInstanceForNextOperation() {
          if (null != this.mediaRecorder && 'recording' === this.mediaRecorder.state)
            try {
              this.mediaRecorder.stop();
            } catch (a) {}
          (this.pendingResult = m()), (this.mediaRecorder = null), (this.chunks = []);
        }
      }
      class U extends L.Uw {
        constructor() {
          super(...arguments), (this.voiceRecorderInstance = new p());
        }
        canDeviceVoiceRecord() {
          return p.canDeviceVoiceRecord();
        }
        hasAudioRecordingPermission() {
          return p.hasAudioRecordingPermission();
        }
        requestAudioRecordingPermission() {
          return p.requestAudioRecordingPermission();
        }
        startRecording() {
          return this.voiceRecorderInstance.startRecording();
        }
        stopRecording() {
          return this.voiceRecorderInstance.stopRecording();
        }
        pauseRecording() {
          return this.voiceRecorderInstance.pauseRecording();
        }
        resumeRecording() {
          return this.voiceRecorderInstance.resumeRecording();
        }
        getCurrentStatus() {
          return this.voiceRecorderInstance.getCurrentStatus();
        }
      }
    },
    6351: (N, v, i) => {
      'use strict';
      var c = i(7957);
      v.Z = function f(g) {
        return P.apply(this, arguments);
      };
      var h = c(i(6780)),
        l = c(i(5877));
      function P() {
        return (P = (0, l.default)(
          h.default.mark(function g(s) {
            var u, T;
            return h.default.wrap(function (O) {
              for (;;)
                switch ((O.prev = O.next)) {
                  case 0:
                    return (
                      (u = document.createElement('video')),
                      (T = new Promise(function (A, k) {
                        u.addEventListener('loadedmetadata', function () {
                          u.duration === 1 / 0
                            ? ((u.currentTime = Number.MAX_SAFE_INTEGER),
                              (u.ontimeupdate = function () {
                                (u.ontimeupdate = null), A(u.duration), (u.currentTime = 0);
                              }))
                            : A(u.duration);
                        }),
                          (u.onerror = function (I) {
                            return k(I.target.error);
                          });
                      })),
                      (u.src = 'string' == typeof s || s instanceof String ? s : window.URL.createObjectURL(s)),
                      O.abrupt('return', T)
                    );
                  case 4:
                  case 'end':
                    return O.stop();
                }
            }, g);
          })
        )).apply(this, arguments);
      }
    },
    7854: (N) => {
      var v = (function (i) {
        'use strict';
        var h,
          L = Object.prototype,
          c = L.hasOwnProperty,
          l = 'function' == typeof Symbol ? Symbol : {},
          f = l.iterator || '@@iterator',
          P = l.asyncIterator || '@@asyncIterator',
          g = l.toStringTag || '@@toStringTag';
        function s(r, e, t) {
          return Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }), r[e];
        }
        try {
          s({}, '');
        } catch (r) {
          s = function (e, t, o) {
            return (e[t] = o);
          };
        }
        function u(r, e, t, o) {
          var d = Object.create((e && e.prototype instanceof p ? e : p).prototype),
            R = new Y(o || []);
          return (
            (d._invoke = (function Z(r, e, t) {
              var o = O;
              return function (d, R) {
                if (o === k) throw new Error('Generator is already running');
                if (o === I) {
                  if ('throw' === d) throw R;
                  return W();
                }
                for (t.method = d, t.arg = R; ; ) {
                  var y = t.delegate;
                  if (y) {
                    var S = B(y, t);
                    if (S) {
                      if (S === m) continue;
                      return S;
                    }
                  }
                  if ('next' === t.method) t.sent = t._sent = t.arg;
                  else if ('throw' === t.method) {
                    if (o === O) throw ((o = I), t.arg);
                    t.dispatchException(t.arg);
                  } else 'return' === t.method && t.abrupt('return', t.arg);
                  o = k;
                  var w = T(r, e, t);
                  if ('normal' === w.type) {
                    if (((o = t.done ? I : A), w.arg === m)) continue;
                    return { value: w.arg, done: t.done };
                  }
                  'throw' === w.type && ((o = I), (t.method = 'throw'), (t.arg = w.arg));
                }
              };
            })(r, t, R)),
            d
          );
        }
        function T(r, e, t) {
          try {
            return { type: 'normal', arg: r.call(e, t) };
          } catch (o) {
            return { type: 'throw', arg: o };
          }
        }
        i.wrap = u;
        var O = 'suspendedStart',
          A = 'suspendedYield',
          k = 'executing',
          I = 'completed',
          m = {};
        function p() {}
        function U() {}
        function _() {}
        var a = {};
        s(a, f, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          b = E && E(E(H([])));
        b && b !== L && c.call(b, f) && (a = b);
        var D = (_.prototype = p.prototype = Object.create(a));
        function G(r) {
          ['next', 'throw', 'return'].forEach(function (e) {
            s(r, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function C(r, e) {
          function t(d, R, y, S) {
            var w = T(r[d], r, R);
            if ('throw' !== w.type) {
              var j = w.arg,
                F = j.value;
              return F && 'object' == typeof F && c.call(F, '__await')
                ? e.resolve(F.__await).then(
                    function (M) {
                      t('next', M, y, S);
                    },
                    function (M) {
                      t('throw', M, y, S);
                    }
                  )
                : e.resolve(F).then(
                    function (M) {
                      (j.value = M), y(j);
                    },
                    function (M) {
                      return t('throw', M, y, S);
                    }
                  );
            }
            S(w.arg);
          }
          var o;
          this._invoke = function n(d, R) {
            function y() {
              return new e(function (S, w) {
                t(d, R, S, w);
              });
            }
            return (o = o ? o.then(y, y) : y());
          };
        }
        function B(r, e) {
          var t = r.iterator[e.method];
          if (t === h) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (r.iterator.return && ((e.method = 'return'), (e.arg = h), B(r, e), 'throw' === e.method)) return m;
              (e.method = 'throw'), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return m;
          }
          var o = T(t, r.iterator, e.arg);
          if ('throw' === o.type) return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), m;
          var n = o.arg;
          return n
            ? n.done
              ? ((e[r.resultName] = n.value),
                (e.next = r.nextLoc),
                'return' !== e.method && ((e.method = 'next'), (e.arg = h)),
                (e.delegate = null),
                m)
              : n
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              m);
        }
        function Q(r) {
          var e = { tryLoc: r[0] };
          1 in r && (e.catchLoc = r[1]),
            2 in r && ((e.finallyLoc = r[2]), (e.afterLoc = r[3])),
            this.tryEntries.push(e);
        }
        function V(r) {
          var e = r.completion || {};
          (e.type = 'normal'), delete e.arg, (r.completion = e);
        }
        function Y(r) {
          (this.tryEntries = [{ tryLoc: 'root' }]), r.forEach(Q, this), this.reset(!0);
        }
        function H(r) {
          if (r) {
            var e = r[f];
            if (e) return e.call(r);
            if ('function' == typeof r.next) return r;
            if (!isNaN(r.length)) {
              var t = -1,
                o = function n() {
                  for (; ++t < r.length; ) if (c.call(r, t)) return (n.value = r[t]), (n.done = !1), n;
                  return (n.value = h), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: W };
        }
        function W() {
          return { value: h, done: !0 };
        }
        return (
          (U.prototype = _),
          s(D, 'constructor', _),
          s(_, 'constructor', U),
          (U.displayName = s(_, g, 'GeneratorFunction')),
          (i.isGeneratorFunction = function (r) {
            var e = 'function' == typeof r && r.constructor;
            return !!e && (e === U || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (i.mark = function (r) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(r, _) : ((r.__proto__ = _), s(r, g, 'GeneratorFunction')),
              (r.prototype = Object.create(D)),
              r
            );
          }),
          (i.awrap = function (r) {
            return { __await: r };
          }),
          G(C.prototype),
          s(C.prototype, P, function () {
            return this;
          }),
          (i.AsyncIterator = C),
          (i.async = function (r, e, t, o, n) {
            void 0 === n && (n = Promise);
            var d = new C(u(r, e, t, o), n);
            return i.isGeneratorFunction(e)
              ? d
              : d.next().then(function (R) {
                  return R.done ? R.value : d.next();
                });
          }),
          G(D),
          s(D, g, 'Generator'),
          s(D, f, function () {
            return this;
          }),
          s(D, 'toString', function () {
            return '[object Generator]';
          }),
          (i.keys = function (r) {
            var e = [];
            for (var t in r) e.push(t);
            return (
              e.reverse(),
              function o() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in r) return (o.value = n), (o.done = !1), o;
                }
                return (o.done = !0), o;
              }
            );
          }),
          (i.values = H),
          (Y.prototype = {
            constructor: Y,
            reset: function (r) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = h),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = h),
                this.tryEntries.forEach(V),
                !r)
              )
                for (var e in this) 't' === e.charAt(0) && c.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = h);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (r) {
              if (this.done) throw r;
              var e = this;
              function t(S, w) {
                return (d.type = 'throw'), (d.arg = r), (e.next = S), w && ((e.method = 'next'), (e.arg = h)), !!w;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var n = this.tryEntries[o],
                  d = n.completion;
                if ('root' === n.tryLoc) return t('end');
                if (n.tryLoc <= this.prev) {
                  var R = c.call(n, 'catchLoc'),
                    y = c.call(n, 'finallyLoc');
                  if (R && y) {
                    if (this.prev < n.catchLoc) return t(n.catchLoc, !0);
                    if (this.prev < n.finallyLoc) return t(n.finallyLoc);
                  } else if (R) {
                    if (this.prev < n.catchLoc) return t(n.catchLoc, !0);
                  } else {
                    if (!y) throw new Error('try statement without catch or finally');
                    if (this.prev < n.finallyLoc) return t(n.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (r, e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.tryLoc <= this.prev && c.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var n = o;
                  break;
                }
              }
              n && ('break' === r || 'continue' === r) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
              var d = n ? n.completion : {};
              return (
                (d.type = r),
                (d.arg = e),
                n ? ((this.method = 'next'), (this.next = n.finallyLoc), m) : this.complete(d)
              );
            },
            complete: function (r, e) {
              if ('throw' === r.type) throw r.arg;
              return (
                'break' === r.type || 'continue' === r.type
                  ? (this.next = r.arg)
                  : 'return' === r.type
                  ? ((this.rval = this.arg = r.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === r.type && e && (this.next = e),
                m
              );
            },
            finish: function (r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var t = this.tryEntries[e];
                if (t.finallyLoc === r) return this.complete(t.completion, t.afterLoc), V(t), m;
              }
            },
            catch: function (r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var t = this.tryEntries[e];
                if (t.tryLoc === r) {
                  var o = t.completion;
                  if ('throw' === o.type) {
                    var n = o.arg;
                    V(t);
                  }
                  return n;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (r, e, t) {
              return (
                (this.delegate = { iterator: H(r), resultName: e, nextLoc: t }),
                'next' === this.method && (this.arg = h),
                m
              );
            },
          }),
          i
        );
      })(N.exports);
      try {
        regeneratorRuntime = v;
      } catch (i) {
        'object' == typeof globalThis
          ? (globalThis.regeneratorRuntime = v)
          : Function('r', 'regeneratorRuntime = r')(v);
      }
    },
    5877: (N) => {
      function v(L, c, h, l, f, P, g) {
        try {
          var s = L[P](g),
            u = s.value;
        } catch (T) {
          return void h(T);
        }
        s.done ? c(u) : Promise.resolve(u).then(l, f);
      }
      N.exports = function i(L) {
        return function () {
          var c = this,
            h = arguments;
          return new Promise(function (l, f) {
            var P = L.apply(c, h);
            function g(u) {
              v(P, l, f, g, s, 'next', u);
            }
            function s(u) {
              v(P, l, f, g, s, 'throw', u);
            }
            g(void 0);
          });
        };
      };
    },
    7957: (N) => {
      N.exports = function v(i) {
        return i && i.__esModule ? i : { default: i };
      };
    },
    6780: (N, v, i) => {
      N.exports = i(7854);
    },
  },
]);
