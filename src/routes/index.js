import React from "react";
import {Routes, Route} from 'react-router-dom';
import SelectPlayers from "../pages/SelectPlayers";
//import MyRoute from './myRoute';

export default function Rotas(){
    return(
        <>
            <Routes>
                <Route path='/' element={<SelectPlayers/>}/>
                {/* <Route exact path='/' element={<MyRoute Element={Login}></MyRoute>}/> */}
            </Routes>
        </>
    )
}
