import { call, put, all, takeLatest } from 'redux-saga/effects'; //npm i redux-saga || verificaações asyncs e retorna ao reducer
import {toast} from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 600);
});

function* exampleRequest(){ //função geradora
    try{
        yield call(requisicao);
        yield put(actions.ClicaBotaoSuccess());
        toast.success("Sucesso!")
    }
    catch{
        toast.error('Error');
        yield put(actions.ClicaBotaoFailure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
]);
