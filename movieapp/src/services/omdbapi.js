  //fetch data from API
  export const getMovie = async (searchTerm) => {
    try{
        console.log(searchTerm);
        const response = await fetch (`https://www.omdbapi.com/?apikey=388622ef&t=${searchTerm}`);
        const data = await response.json();
        return data;
    }catch(e){
        console.log.error(e);
    }
  } 