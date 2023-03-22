import axios from 'axios';

export const getCharacters = async (char) =>{
    try{
        console.log(char);
        const response = await axios.get(`https://api.disneyapi.dev/character?name=${char}`); //characters?pageSize=10 
        console.log(response);
        const data = response.data.data;
        return data;
        
    }catch(error){
        console.error(error);
    }
}

export const getMovie = async (movie) =>{
    try{
        console.log(movie);
        const response = await axios.get(`https://api.disneyapi.dev/character?page=91`); //characters?pageSize=10 
        console.log(response);
        const data = response.data.data;
        return data;
        
    }catch(error){
        console.error(error);
    }
}

