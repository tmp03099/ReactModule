// import axios from 'axios';

export const getCharacters = async () =>{
    try{
        const response = await fetch(`https://api.disneyapi.dev/characters`);
        console.log(response);
        const data = response.json ();
        console.log(data);
        return data;
        
    }catch(error){
        console.error(error);
    }
}