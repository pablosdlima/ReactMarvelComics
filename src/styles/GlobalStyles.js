import styled, {createGlobalStyle} from "styled-components";
import * as colors from '../config/colors'; //importa tudo de colors
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle` //reset css
    *{
        margin:0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
        background-color: ${colors.primaryColor};
    }
    html, body, #root{
        height: 100%;
    }
    
`;

export const Container = styled.section`
    max-width: 99%;
    height:99vh;
    margin:0 auto;
    background-color: silver;
    padding: 5%;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

