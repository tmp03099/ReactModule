import { useState, useEffect} from 'react';

function Disney({character}){

    //sort the films length
    const [showfilm, setShowfilm] = useState(character.films.length != 0);

    return (
        <div>
            { showfilm && 
            <>
                <h2>{character.name}</h2>
                <img src={character.imageUrl}/>
                <h3>Films</h3>
                {character.films.map((ele,idx)=>(
                    <div key={idx}>{ele}</div>
                ))}
            </> 
            }

         
            
        </div>
    )
}
export default Disney;