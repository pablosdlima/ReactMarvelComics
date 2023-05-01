import styled from 'styled-components';
import * as colors from '../../config/colors';


export const PlayersConteiner = styled.div`
    width:75%;
    height:99%;
    margin:5px;
    border-radius:5px;
    display: flex;
    flex-wrap: wrap; // Quebra a linha
    flex-direction: row;
    justify-content: space-around;
    align-itens:center;
    

   
`;

export const ImagePerson = styled.div`
    width:25%;
    height:90%;
    background-color:${colors.primaryColor};
    border-radius:2%;
`;