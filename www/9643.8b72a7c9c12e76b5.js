'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [9643],
  {
    9643: (m, p, r) => {
      r.r(p), r.d(p, { stripe_payment_request_button: () => o });
      var i = r(5861),
        s = r(4767),
        u = r(3574);
      const o = class {
        constructor(t) {
          (0, s.r)(this, t),
            (this.stripeLoaded = (0, s.c)(this, 'stripeLoaded', 7)),
            (this.loadStripeStatus = ''),
            this.publishableKey ? this.initStripe(this.publishableKey) : (this.loadStripeStatus = 'failure');
        }
        setPaymentMethodEventHandler(t) {
          var e = this;
          return (0, i.Z)(function* () {
            e.paymentMethodEventHandler = t;
          })();
        }
        setPaymentRequestShippingOptionEventHandler(t) {
          var e = this;
          return (0, i.Z)(function* () {
            e.shippingOptionEventHandler = t;
          })();
        }
        setPaymentRequestShippingAddressEventHandler(t) {
          var e = this;
          return (0, i.Z)(function* () {
            e.shippingAddressEventHandler = t;
          })();
        }
        stripeLoadedEventHandler() {
          const t = { stripe: this.stripe };
          this.stripeDidLoaded && this.stripeDidLoaded(t), this.stripeLoaded.emit(t);
        }
        setPaymentRequestOption(t) {
          var e = this;
          return (0, i.Z)(function* () {
            return (e.paymentRequestOption = t), e;
          })();
        }
        initStripe(t) {
          var e = this;
          return (0, i.Z)(function* () {
            (e.loadStripeStatus = 'loading'),
              (0, u.l)(t)
                .then((n) => {
                  (e.loadStripeStatus = 'success'), (e.stripe = n);
                })
                .catch((n) => {
                  console.log(n), (e.loadStripeStatus = 'failure');
                })
                .then(() => {
                  if (e.stripe) return e.initElement();
                })
                .then(() => {
                  !e.stripe || e.stripeLoadedEventHandler();
                });
          })();
        }
        initElement() {
          var t = this;
          return (0, i.Z)(function* () {
            const e = t.stripe.elements(),
              n = t.stripe.paymentRequest(t.paymentRequestOption),
              l = e.create('paymentRequestButton', { paymentRequest: n }),
              h = t.el.querySelector('#payment-request-button');
            (yield n.canMakePayment()) &&
              (l.mount(h),
              t.el.querySelector('#payment-request').classList.add('visible'),
              t.paymentMethodEventHandler &&
                n.on('paymentmethod', (a) => {
                  t.paymentMethodEventHandler(a, t.stripe);
                }),
              t.shippingOptionEventHandler &&
                n.on('shippingoptionchange', (a) => {
                  t.shippingOptionEventHandler(a, t.stripe);
                }),
              t.shippingAddressEventHandler &&
                n.on('shippingaddresschange', (a) => {
                  t.shippingAddressEventHandler(a, t.stripe);
                }));
          })();
        }
        render() {
          return (0, s.h)(
            s.H,
            null,
            (0, s.h)('div', { id: 'payment-request' }, (0, s.h)('div', { id: 'payment-request-button' })),
            (0, s.h)('slot', null)
          );
        }
        get el() {
          return (0, s.g)(this);
        }
      };
      o.style = ':host{display:block}';
    },
  },
]);
