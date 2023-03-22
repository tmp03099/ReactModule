import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function SearchCharacter({searchChar,setChar}){

  //set input default
  const [inputData, setInputData] = useState({char:"", movie:""});

  //handle change on the input
  const handleChange = (element) =>{
    setInputData({...inputData, [element.target.name] : element.target.value});
  }


  const handleClick = async (element) => {
    element.preventDefault();
    const data = await searchChar(inputData.char);
    console.log("A");
    setChar(data);
  }

    return (
      <InputGroup className="mb-3" onSubmit={handleClick}>
        <Form.Control
          placeholder="Character Name"
          onChange={handleChange}
        />

        <Button variant="outline-secondary" 
                id="button-addon2"
                type="submit"
                
                
        >
          Search
        </Button>
      </InputGroup>
    )
}
export default SearchCharacter;