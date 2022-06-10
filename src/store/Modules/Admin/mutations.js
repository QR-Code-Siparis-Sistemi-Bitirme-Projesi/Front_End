export default {
    KullaniciDepola(state, payload) {
        state.kullanici = payload.data.mesaj;
    }
}