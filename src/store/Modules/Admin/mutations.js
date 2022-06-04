export default {
    KullaniciDepola(state, payload) {
        // console.log("payload - ", payload);
        state.kullanici = payload.data.mesaj;
    }
}