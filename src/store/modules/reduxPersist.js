import storage from "redux-persist/lib/storage"; //npm i redux-persist | ajuda a persistir os valores na seção do usuário temporariamente
import { persistReducer } from "redux-persist";

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
    const persistedReducers = persistReducer(
        {
            key: 'REACT-BASE',
            storage : storage,
            whitelist: ['example'] //chave de root reducer
        },
        reducers
    );
    return persistedReducers;
};
