'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [9884],
  {
    9884: (l, c, t) => {
      t.r(c), t.d(c, { FacebookLoginWeb: () => a });
      var r = t(5861),
        u = t(7423);
      class a extends u.Uw {
        constructor() {
          super({ name: 'FacebookLogin', platforms: ['web'] });
        }
        login(e) {
          return (0, r.Z)(function* () {
            return (
              console.log('FacebookLoginWeb.login', e),
              new Promise((s, n) => {
                FB.login(
                  (o) => {
                    console.debug('FB.login', o),
                      'connected' === o.status
                        ? s({ accessToken: { token: o.authResponse.accessToken } })
                        : n({ accessToken: { token: null } });
                  },
                  { scope: e.permissions.join(',') }
                );
              })
            );
          })();
        }
        logout() {
          return (0, r.Z)(function* () {
            return new Promise((e) => {
              FB.logout(() => e());
            });
          })();
        }
        getCurrentAccessToken() {
          return (0, r.Z)(function* () {
            return new Promise((e, s) => {
              FB.getLoginStatus((n) => {
                'connected' === n.status
                  ? e({
                      accessToken: {
                        applicationId: void 0,
                        declinedPermissions: [],
                        expires: void 0,
                        isExpired: void 0,
                        lastRefresh: void 0,
                        permissions: [],
                        token: n.authResponse.accessToken,
                        userId: n.authResponse.userID,
                      },
                    })
                  : s({ accessToken: { token: null } });
              });
            });
          })();
        }
        getProfile(e) {
          return (0, r.Z)(function* () {
            const s = e.fields.join(',');
            return new Promise((n, o) => {
              FB.api('/me', { fields: s }, (i) => {
                i.error ? o(i.error.message) : n(i);
              });
            });
          })();
        }
      }
    },
  },
]);
