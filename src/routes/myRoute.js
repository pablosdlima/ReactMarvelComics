import React from 'react';
import {Route, Navigate} from 'react-router-dom'; //redirect == Navigate
import { PropTypes } from 'prop-types';

export default function MyRoute({element: Element, isClosed, ...rest}){

    const isLoggedIn = false;

    if(isClosed && !isLoggedIn){ //verifica se o usuario está logado.

        console.log("dentro do if")
        return(
            <Navigate
                to={{pathname: '/login', state: {prevPath: rest.location.pathname}}}
            />
        )
    }
    return <Route {...rest} element={<Element/>}/>
}

MyRoute.defaultProps = {
    isClosed:false,
};

MyRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,

};//npm i prop-types
