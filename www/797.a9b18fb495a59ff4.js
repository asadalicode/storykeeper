'use strict';
(self.webpackChunkngx_new = self.webpackChunkngx_new || []).push([
  [797],
  {
    797: (O, u, s) => {
      s.r(u), s.d(u, { VoiceRecorderWeb: () => D });
      var v = s(7423),
        t = s(5861),
        p = s(6351);
      const l = () => new Error('FAILED_TO_RECORD'),
        c = () => new Error('RECORDING_HAS_NOT_STARTED'),
        R = () => new Error('FAILED_TO_FETCH_RECORDING'),
        w = ['audio/aac', 'audio/webm;codecs=opus', 'audio/mp4', 'audio/webm', 'audio/ogg;codecs=opus'],
        h = () => new Promise(() => {});
      class r {
        constructor() {
          (this.mediaRecorder = null), (this.chunks = []), (this.pendingResult = h());
        }
        static canDeviceVoiceRecord() {
          return (0, t.Z)(function* () {
            var e;
            return null ==
              (null === (e = null == navigator ? void 0 : navigator.mediaDevices) || void 0 === e
                ? void 0
                : e.getUserMedia) || null == r.getSupportedMimeType()
              ? { value: !1 }
              : { value: !0 };
          })();
        }
        startRecording() {
          var e = this;
          return (0, t.Z)(function* () {
            if (null != e.mediaRecorder) throw new Error('ALREADY_RECORDING');
            if (!(yield r.canDeviceVoiceRecord()).value) throw new Error('DEVICE_CANNOT_VOICE_RECORD');
            if (!(yield r.hasAudioRecordingPermission().catch(() => ({ value: !0 }))).value)
              throw new Error('MISSING_PERMISSION');
            return (
              navigator.mediaDevices
                .getUserMedia({ audio: !0 })
                .then(e.onSuccessfullyStartedRecording.bind(e))
                .catch(e.onFailedToStartRecording.bind(e)),
              { value: !0 }
            );
          })();
        }
        stopRecording() {
          var e = this;
          return (0, t.Z)(function* () {
            if (null == e.mediaRecorder) throw c();
            try {
              return e.mediaRecorder.stop(), e.pendingResult;
            } catch (i) {
              throw R();
            } finally {
              e.prepareInstanceForNextOperation();
            }
          })();
        }
        static hasAudioRecordingPermission() {
          return (0, t.Z)(function* () {
            return navigator.permissions
              .query({ name: 'microphone' })
              .then((e) => ({ value: 'granted' === e.state }))
              .catch(() => {
                throw new Error('COULD_NOT_QUERY_PERMISSION_STATUS');
              });
          })();
        }
        static requestAudioRecordingPermission() {
          return (0, t.Z)(function* () {
            return (yield r.hasAudioRecordingPermission().catch(() => ({ value: !1 }))).value
              ? { value: !0 }
              : navigator.mediaDevices
                  .getUserMedia({ audio: !0 })
                  .then(() => ({ value: !0 }))
                  .catch(() => ({ value: !1 }));
          })();
        }
        pauseRecording() {
          if (null == this.mediaRecorder) throw c();
          return 'recording' === this.mediaRecorder.state
            ? (this.mediaRecorder.pause(), Promise.resolve({ value: !0 }))
            : Promise.resolve({ value: !1 });
        }
        resumeRecording() {
          if (null == this.mediaRecorder) throw c();
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
          const e = w.find((i) => MediaRecorder.isTypeSupported(i));
          return null != e ? e : null;
        }
        onSuccessfullyStartedRecording(e) {
          var i = this;
          this.pendingResult = new Promise((n, g) => {
            (this.mediaRecorder = new MediaRecorder(e)),
              (this.mediaRecorder.onerror = () => {
                g(l()), this.prepareInstanceForNextOperation();
              }),
              (this.mediaRecorder.onstop = (0, t.Z)(function* () {
                const d = r.getSupportedMimeType();
                if (null == d) g(R());
                else {
                  const m = new Blob(i.chunks, { type: d }),
                    T = yield r.blobToBase64(m),
                    N = yield (0, p.Z)(m);
                  i.prepareInstanceForNextOperation(),
                    n({ value: { recordDataBase64: T, mimeType: d, msDuration: 1e3 * N } });
                }
              })),
              (this.mediaRecorder.ondataavailable = (d) => this.chunks.push(d.data)),
              this.mediaRecorder.start();
          });
        }
        onFailedToStartRecording() {
          throw (this.prepareInstanceForNextOperation(), l());
        }
        static blobToBase64(e) {
          return new Promise((i) => {
            const n = new FileReader();
            (n.onloadend = () => i(String(n.result))), n.readAsDataURL(e);
          });
        }
        prepareInstanceForNextOperation() {
          if (null != this.mediaRecorder && 'recording' === this.mediaRecorder.state)
            try {
              this.mediaRecorder.stop();
            } catch (e) {}
          (this.pendingResult = h()), (this.mediaRecorder = null), (this.chunks = []);
        }
      }
      class D extends v.Uw {
        constructor() {
          super(...arguments), (this.voiceRecorderInstance = new r());
        }
        canDeviceVoiceRecord() {
          return r.canDeviceVoiceRecord();
        }
        hasAudioRecordingPermission() {
          return r.hasAudioRecordingPermission();
        }
        requestAudioRecordingPermission() {
          return r.requestAudioRecordingPermission();
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
  },
]);
