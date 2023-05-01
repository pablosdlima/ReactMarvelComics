import { combineReducers } from "redux";

import exampleReducer from './example/reducer';

export default combineReducers({ //vários reducers para a importação.
    example: exampleReducer,
});

//responsável por permitir que o reducer esculte as ações.
