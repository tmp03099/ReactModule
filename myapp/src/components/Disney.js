import { useState, useEffect} from 'react';

function Disney({character}){

    //sort the films length
    const [showfilm, setShowfilm] = useState(character.films.length != 0);

    return (
        <div>
            { showfilm && 
            <>
                <h2>{character.films[0]}</h2>
                <img src={character.imageUrl}/>
                <p>Character Name: {character.name}</p>
            </> 
            }

         
            
        </div>
    )
}
export default Disney;