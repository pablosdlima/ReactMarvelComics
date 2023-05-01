import * as types from '../types';

const initialState = {
    botaoClicado: false,
}

export default function reducer( state = initialState, action){ //escuta uma ação, retorna um state //action é disparada pelo proprio reducer
    switch(action.type){
        case types.BOTAO_CLICADO_SUCCESS:{
            console.log("sucesso!");
            const newState = {...state}; //recebe sempre o novo estado.
            newState.botaoClicado = !newState.botaoClicado;

            return newState;
        }
        case types.BOTAO_CLICADO_FAILURE:{
            console.log("deu erro :(");
            return state;
        }
        case types.BOTAO_CLICADO_REQUEST:{
            console.log("fiz a requisição");
            return state;
        }
        default: {
            return state;
        }
    }
} //intercepta as ações.
