export default {
    PaylasimDepola(state, payload) {
        if (payload && payload.status === 200) {
            state.hataObj = {};
            state.storeMenu = payload.resData;
        }
    },
}