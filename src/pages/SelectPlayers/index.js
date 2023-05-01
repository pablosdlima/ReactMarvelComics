import React, {useState, useEffect} from "react";
import { GetCharacters } from "../../services/endpoints";
import { Container } from "../../styles/GlobalStyles";
import {PlayersConteiner } from "./styled";

export default function SelectPlayers(){

    const [characters, setCharacters] = useState([]);

    const handleMouseOut = (id) => {
       document.getElementById(`img_${id}`).style.display = 'none';
    }

    const handleMouseOver = (id) => {
       document.getElementById(`img_${id}`).style.display = 'block';
    }

    

    useEffect(() => {
        (async () => {
            const response = await GetCharacters();
            setCharacters(response);
        })();
            //posibilidade de return
    }, []);


    return(
    <>
       <Container style={{display: "flex"}}>
        <img src="../../styles/img/marvel-logo-4.png" alt="errr" className="position-absolute"/>
           <div className=" rounded m-2 w-50  position-relative bg-white shadow-lg efect">
                {characters.map(item => (
                    <div id={`img_${item.id}`} className="w-100 h-100 position-absolute bg-danger" style={{display:"none"}}>
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Thumbnail" className="card-img-top h-100" />
                        <div className="card-body bg-danger p-4 text-white">
                                <h4 className="card-text text-center h1">{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <PlayersConteiner>
                {characters.map(item => (
                    <div key={item.id} className="w-25 position-relative m-2 my-component border bg-white shadow-lg" onMouseOver={() => handleMouseOver(item.id)} onMouseOut={() => handleMouseOut(item.id)}>
                        <div className="position-absolute p-3">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="Thumbnail" className="w-100 h-100 shadow-lg p-1 mb-2 bg-white rounded" />
                        </div>
                        <div id={`borda_${item.id}`} className="position-absolute w-100 h-100"></div>
                    </div>
                ))}         
            </PlayersConteiner>
       </Container>
    </>
    )
};