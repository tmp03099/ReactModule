import { useState, useEffect} from 'react';

function Disney({character}){

    const [showFlim, setShowFlim] = useState(false);

    useEffect(()=>{
        
    })

    return (
        <div>
            {showFlim && <h2>{character.films}</h2>}
            <h2>{character.name}</h2>
            <p>{character.tvShows}</p>
        </div>
    )
}
export default Disney;