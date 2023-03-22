import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchCharacter(){
    return (
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Character Name"
          aria-label="Character name"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    )
}
export default SearchCharacter;