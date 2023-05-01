import axios from 'axios'; //npm i axios


const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',

    params: {
        apikey: 'b510ac27b2f7bc91d6c849a0585868c7'
    }
});

export default api;


//https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=20&apikey=



//https://gateway.marvel.com:443/v1/public/series/489