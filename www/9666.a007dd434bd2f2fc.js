'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [9666],
  {
    9666: (m, u, r) => {
      r.r(u), r.d(u, { GoogleAuthWeb: () => p });
      var i = r(5861),
        d = r(7423);
      const o = JSON.parse(
        '{"Gr":{"e":{"scopes":["profile","email"],"serverClientId":"380937119202-59cm8u3kvv6tjub7qp918tmcoohk8327.apps.googleusercontent.com"}}}'
      );
      class p extends d.Uw {
        constructor() {
          super();
        }
        get webConfigured() {
          return 'undefined' != typeof document && document.getElementsByName('google-signin-client_id').length > 0;
        }
        loadScript() {
          const e = 'gapi';
          if (!(null == document ? void 0 : document.getElementById(e))) {
            var s = document.getElementsByTagName('head')[0],
              n = document.createElement('script');
            (n.type = 'text/javascript'),
              (n.defer = !0),
              (n.async = !0),
              (n.id = e),
              (n.onload = this.platformJsLoaded),
              (n.src = 'https://apis.google.com/js/platform.js'),
              s.appendChild(n);
          }
        }
        init() {
          !this.webConfigured ||
            ((this.gapiLoaded = new Promise((e) => {
              (window.gapiResolve = e), this.loadScript();
            })),
            this.addUserChangeListener());
        }
        platformJsLoaded() {
          gapi.load('auth2', () => {
            const e = { client_id: document.getElementsByName('google-signin-client_id')[0].content };
            null != o.Gr.e && null != o.Gr.e.scopes && (e.scope = o.Gr.e.scopes.join(' ')),
              gapi.auth2.init(e),
              window.gapiResolve();
          });
        }
        signIn() {
          var e = this;
          return (0, i.Z)(function* () {
            return new Promise(
              (function () {
                var t = (0, i.Z)(function* (s, n) {
                  try {
                    var g,
                      c = !1;
                    try {
                      c = null != o.Gr.e.serverClientId;
                    } catch (h) {}
                    c
                      ? (g = (yield gapi.auth2.getAuthInstance().grantOfflineAccess()).code)
                      : yield gapi.auth2.getAuthInstance().signIn();
                    const a = gapi.auth2.getAuthInstance().currentUser.get();
                    c && (yield a.reloadAuthResponse());
                    const l = e.getUserFrom(a);
                    (l.serverAuthCode = g), s(l);
                  } catch (a) {
                    n(a);
                  }
                });
                return function (s, n) {
                  return t.apply(this, arguments);
                };
              })()
            );
          })();
        }
        refresh() {
          return (0, i.Z)(function* () {
            const e = yield gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
            return { accessToken: e.access_token, idToken: e.id_token };
          })();
        }
        signOut() {
          return (0, i.Z)(function* () {
            return gapi.auth2.getAuthInstance().signOut();
          })();
        }
        addUserChangeListener() {
          var e = this;
          return (0, i.Z)(function* () {
            yield e.gapiLoaded,
              gapi.auth2.getAuthInstance().currentUser.listen((t) => {
                e.notifyListeners('userChange', t.isSignedIn() ? e.getUserFrom(t) : null);
              });
          })();
        }
        getUserFrom(e) {
          const t = {},
            s = e.getBasicProfile();
          (t.email = s.getEmail()),
            (t.familyName = s.getFamilyName()),
            (t.givenName = s.getGivenName()),
            (t.id = s.getId()),
            (t.imageUrl = s.getImageUrl()),
            (t.name = s.getName());
          const n = e.getAuthResponse(!0);
          return (t.authentication = { accessToken: n.access_token, idToken: n.id_token }), t;
        }
      }
    },
  },
]);
