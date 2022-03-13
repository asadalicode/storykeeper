'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [7205],
  {
    7205: (m, h, r) => {
      r.r(h), r.d(h, { stripe_payment_sheet: () => a });
      var t = r(5861),
        n = r(4767);
      const a = class {
        constructor(e) {
          (0, n.r)(this, e),
            (this.closed = (0, n.c)(this, 'closed', 7)),
            (this.showLabel = !1),
            (this.shouldUseDefaultFormSubmitAction = !0),
            (this.intentType = 'payment'),
            (this.showCloseButton = !0),
            (this.zip = !0),
            (this.open = !1);
        }
        componentDidLoad() {
          this.el.querySelector('stripe-sheet').addEventListener('close', () => {
            this.closed.emit();
          });
        }
        getStripePaymentSheetElement() {
          var e = this;
          return (0, t.Z)(function* () {
            return e.el.querySelector('stripe-payment');
          })();
        }
        present() {
          var e = this;
          return (0, t.Z)(function* () {
            return (
              (e.open = !0),
              new Promise((s, i) => {
                e.el.querySelector('stripe-payment').addEventListener(
                  'formSubmit',
                  (function () {
                    var p = (0, t.Z)(function* (u) {
                      s(u);
                    });
                    return function (u) {
                      return p.apply(this, arguments);
                    };
                  })()
                ),
                  e.el.addEventListener('closed', () => i());
              })
            );
          })();
        }
        updateProgress(e) {
          var s = this;
          return (0, t.Z)(function* () {
            return s.el.querySelector('stripe-payment').updateProgress(e);
          })();
        }
        destroy() {
          var e = this;
          return (0, t.Z)(function* () {
            e.el.querySelector('stripe-payment').remove(), e.el.remove();
          })();
        }
        setPaymentRequestButton(e) {
          var s = this;
          return (0, t.Z)(function* () {
            const i = s.el.getElementsByTagName('stripe-payment');
            if (i.length < 1) return;
            const o = i[0];
            !o || (o.setAttribute('show-payment-request-button', 'true'), o.setPaymentRequestOption(e));
          })();
        }
        render() {
          return (0, n.h)(
            'stripe-sheet',
            { open: this.open, showCloseButton: this.showCloseButton },
            (0, n.h)('stripe-payment', {
              showLabel: this.showLabel,
              publishableKey: this.publishableKey,
              intentClientSecret: this.intentClientSecret,
              shouldUseDefaultFormSubmitAction: this.shouldUseDefaultFormSubmitAction,
              handleSubmit: this.handleSubmit,
              stripeDidLoaded: this.stripeDidLoaded,
              intentType: this.intentType,
              zip: this.zip,
              buttonLabel: this.buttonLabel,
              sheetTitle: this.sheetTitle,
              applicationName: this.applicationName,
            })
          );
        }
        get el() {
          return (0, n.g)(this);
        }
      };
      a.style = ':host{display:block}';
    },
  },
]);
