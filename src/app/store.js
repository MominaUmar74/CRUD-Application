import dftexpreducer from '../features/user/userSlice.js';
const store = configureStore(
    {
        reducer:
        {
            user: dftexpreducer,
        },});
export default store;