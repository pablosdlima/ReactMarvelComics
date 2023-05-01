import {persistStore} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducers(rootReducer),
    applyMiddleware(sagaMiddleware)
    ); //verifica mudanças nos estados e dispara a ação.

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
                        //redux é semelhante as triggers // lembra um pouco.
