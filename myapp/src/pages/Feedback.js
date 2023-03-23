import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Feedback() {
    return (
        <div>
            <h2 className='p-4'>Feedback</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>How much do you like this character?</Form.Label>
                    <Form.Range />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Enter your feedback here" rows={3} />
                </Form.Group>
            </Form>
            
            <Button>Submit</Button>
           

        </div>
    )

}
export default Feedback;