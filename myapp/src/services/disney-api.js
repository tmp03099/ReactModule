import axios from 'axios';

export const getCharacters = async () =>{
    try{
        const response = await fetch(`https://api.disneyapi.dev/characters?page=91`); //characters?pageSize=10 
        console.log(response);
        const data = response.json ();
        console.log(data);
        return data;
        
    }catch(error){
        console.error(error);
    }
}