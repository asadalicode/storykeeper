'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [3549],
  {
    6974: (W, h, l) => {
      l.r(h), l.d(h, { StripeWeb: () => k });
      var d = l(5861),
        v = l(7423),
        s = l(2903),
        a = l(4132);
      const w = (e = window) => {
          if (void 0 === e) return [];
          e.Ionic = e.Ionic || {};
          let t = e.Ionic.platforms;
          return (
            null == t &&
              ((t = e.Ionic.platforms = g(e)), t.forEach((n) => e.document.documentElement.classList.add(`plt-${n}`))),
            t
          );
        },
        g = (e) => Object.keys(S).filter((t) => S[t](e)),
        c = (e) => !!(o(e, /iPad/i) || (o(e, /Macintosh/i) && m(e))),
        u = (e) => o(e, /android|sink/i),
        m = (e) => Y(e, '(any-pointer:coarse)'),
        y = (e) => f(e) || b(e),
        f = (e) => !!(e.cordova || e.phonegap || e.PhoneGap),
        b = (e) => {
          const t = e.Capacitor;
          return !!(null == t ? void 0 : t.isNative);
        },
        o = (e, t) => t.test(e.navigator.userAgent),
        Y = (e, t) => e.matchMedia(t).matches,
        S = {
          ipad: c,
          iphone: (e) => o(e, /iPhone/i),
          ios: (e) => o(e, /iPhone|iPod/i) || c(e),
          android: u,
          phablet: (e) => {
            const t = e.innerWidth,
              n = e.innerHeight,
              i = Math.min(t, n),
              r = Math.max(t, n);
            return i > 390 && i < 520 && r > 620 && r < 800;
          },
          tablet: (e) => {
            const t = e.innerWidth,
              n = e.innerHeight,
              i = Math.min(t, n),
              r = Math.max(t, n);
            return c(e) || ((e) => u(e) && !o(e, /mobile/i))(e) || (i > 460 && i < 820 && r > 780 && r < 1400);
          },
          cordova: f,
          capacitor: b,
          electron: (e) => o(e, /electron/i),
          pwa: (e) => !(!e.matchMedia('(display-mode: standalone)').matches && !e.navigator.standalone),
          mobile: m,
          mobileweb: (e) => m(e) && !y(e),
          desktop: (e) => !m(e),
          hybrid: y,
        };
      class k extends v.Uw {
        constructor() {
          super({ name: 'Stripe', platforms: ['web'] });
        }
        initialize(t) {
          var n = this;
          return (0, d.Z)(function* () {
            if ('string' != typeof t.publishableKey || 0 === t.publishableKey.trim().length)
              throw new Error('you must provide a valid key');
            n.publishableKey = t.publishableKey;
          })();
        }
        createPaymentSheet(t) {
          var n = this;
          return (0, d.Z)(function* () {
            var i;
            n.publishableKey
              ? ((n.paymentSheet = document.createElement('stripe-payment-sheet')),
                null === (i = document.querySelector('body')) || void 0 === i || i.appendChild(n.paymentSheet),
                yield customElements.whenDefined('stripe-payment-sheet'),
                (n.paymentSheet.publishableKey = n.publishableKey),
                (n.paymentSheet.intentClientSecret = t.paymentIntentClientSecret),
                (n.paymentSheet.intentType = 'payment'),
                n.notifyListeners(s.Y.Loaded, null))
              : n.notifyListeners(s.Y.FailedToLoad, null);
          })();
        }
        presentPaymentSheet() {
          var t = this;
          return (0, d.Z)(function* () {
            if (!t.paymentSheet) throw new Error();
            const n = yield t.paymentSheet.present();
            if (void 0 === n) return t.notifyListeners(s.Y.Canceled, null), { paymentResult: s.Y.Canceled };
            const {
                detail: { stripe: i, cardNumberElement: r },
              } = n,
              p = yield i.createPaymentMethod({ type: 'card', card: r });
            return (
              t.paymentSheet.updateProgress('success'),
              t.paymentSheet.remove(),
              void 0 !== p.error
                ? (t.notifyListeners(s.Y.Failed, null), { paymentResult: s.Y.Failed })
                : (t.notifyListeners(s.Y.Completed, null), { paymentResult: s.Y.Completed })
            );
          })();
        }
        createPaymentFlow(t) {
          var n = this;
          return (0, d.Z)(function* () {
            var i;
            n.publishableKey
              ? ((n.paymentSheet = document.createElement('stripe-payment-sheet')),
                null === (i = document.querySelector('body')) || void 0 === i || i.appendChild(n.paymentSheet),
                yield customElements.whenDefined('stripe-payment-sheet'),
                (n.paymentSheet.publishableKey = n.publishableKey),
                (n.paymentSheet.applicationName = '@capacitor-community/stripe'),
                t.hasOwnProperty('paymentIntentClientSecret')
                  ? ((n.paymentSheet.intentType = 'payment'),
                    (n.paymentSheet.intentClientSecret = t.paymentIntentClientSecret))
                  : ((n.paymentSheet.intentType = 'setup'),
                    (n.paymentSheet.intentClientSecret = t.setupIntentClientSecret)),
                ((e, t) => ('string' == typeof e && ((t = e), (e = void 0)), ((e) => w(e))(e).includes(t)))(
                  window,
                  'ios'
                )
                  ? ((n.paymentSheet.buttonLabel = 'Add card'), (n.paymentSheet.sheetTitle = 'Add a card'))
                  : (n.paymentSheet.buttonLabel = 'Add'),
                n.notifyListeners(a.I.Loaded, null))
              : n.notifyListeners(a.I.FailedToLoad, null);
          })();
        }
        presentPaymentFlow() {
          var t = this;
          return (0, d.Z)(function* () {
            if (!t.paymentSheet) throw new Error();
            t.notifyListeners(a.I.Opened, null);
            const n = yield t.paymentSheet.present().catch(() => {});
            if (void 0 === n) throw (t.notifyListeners(a.I.Canceled, null), new Error());
            const {
                detail: { stripe: i, cardNumberElement: r },
              } = n,
              { token: p } = yield i.createToken(r);
            if (void 0 === p || void 0 === p.card) throw new Error();
            return (
              (t.flowStripe = i),
              (t.flowCardNumberElement = r),
              t.notifyListeners(a.I.Created, { cardNumber: p.card.last4 }),
              { cardNumber: p.card.last4 }
            );
          })();
        }
        confirmPaymentFlow() {
          var t = this;
          return (0, d.Z)(function* () {
            if (!t.paymentSheet || !t.flowStripe || !t.flowCardNumberElement) throw new Error();
            return (
              void 0 !==
                (yield t.flowStripe.createPaymentMethod({ type: 'card', card: t.flowCardNumberElement })).error &&
                t.notifyListeners(a.I.Failed, null),
              t.paymentSheet.updateProgress('success'),
              t.paymentSheet.remove(),
              t.notifyListeners(a.I.Completed, null),
              { paymentResult: a.I.Completed }
            );
          })();
        }
        isApplePayAvailable() {
          throw this.unimplemented('Not implemented on web.');
        }
        createApplePay() {
          throw this.unimplemented('Not implemented on web.');
        }
        presentApplePay() {
          throw this.unimplemented('Not implemented on web.');
        }
        isGooglePayAvailable() {
          throw this.unimplemented('Not implemented on web.');
        }
        createGooglePay() {
          throw this.unimplemented('Not implemented on web.');
        }
        presentGooglePay() {
          throw this.unimplemented('Not implemented on web.');
        }
      }
    },
  },
]);
