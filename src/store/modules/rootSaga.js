import {all} from 'redux-saga/effects';

import example from './example/sagas';

export default function* rootSaga(){
    return yield all([example]);
}

//responsável por permitir que o saga esculte as ações


//saga verifica se a request das ações possui resposta
//se sim, execulta o reducer


//saga é parecido com a request de promisses | validação
//reducer seria o retorno principal
