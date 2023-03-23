import { useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Disney({character}){

    //sort the films length
    const [showfilm, setShowfilm] = useState(character.films.length != 0);

    return (
        <div>
            { showfilm && 
            <>
                <h2>{character.name}</h2>
                <img src={character.imageUrl}/>
                <div className="d-flex justify-content-center">
                    <Accordion defaultActiveKey="0" className="w-50">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Films</Accordion.Header>
                            <Accordion.Body>
                                {character.films.map((ele,idx)=>(
                                    <div key={idx}>{ele}</div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Park Attractions</Accordion.Header>
                            <Accordion.Body>
                                {character.parkAttractions.map((ele,idx)=>(
                                    <div key={idx}>{ele}</div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                            
                    </Accordion>
                </div>
                
                
            </> 
            }

         
            
        </div>
    )
}
export default Disney;