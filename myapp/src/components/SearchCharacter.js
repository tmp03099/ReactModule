import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function SearchCharacter({searchChar,setChar}){
  //set input default
  const [inputData, setInputData] = useState({char:"", movie:""});

  //handle change on the input
  const handleChange = (element) =>{
    console.log(element);

    setInputData({...inputData, char: element.target.value});
  }

  const handleSubmit = async (element) => {
    element.preventDefault();
    const data = await searchChar(inputData.char);

    setChar(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3" >
        <Form.Control
          placeholder="Character Name"
          value={inputData.char}
          onChange={handleChange}
        />

        <Button variant="outline-secondary" 
                id="button-addon2"
                type="submit"
        >
          Search
        </Button>
      </InputGroup>

    </Form>
  )
}
export default SearchCharacter;