import api from "./axios";

export const GetCharacters = (async () =>{
    try{
        const result = await api.get('/characters?limit=9&offset=135');
        // const result = await api.get('/characters?limit=20');
        return result.data.data.results;
    }catch(error){
        return error;
    }
});
