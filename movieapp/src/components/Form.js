import { useState } from 'react';
import { Form as BForm, Button } from 'react-bootstrap';

function Form({movieSearch, setMovies}){

    //formData is an object
    const [formData, setFormData] = useState({searchTerm: ""}); //can make multiple input like ({seachTerm:"", lastName: "", firstName: ""})

    //handle change on the input
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value}); // [e.target.name]: e.target.value - useful when you have many input as you want
    }

    //handle the on submit form
    const handleSubmit = async (e) =>{
        //stop the browser auto refesh
        e.preventDefault(); 
        const data = await movieSearch(formData.searchTerm);
        setMovies(data);
    }
 
    return(
        <div className="mt-3">
            <h1 className="sm fw-bold py-4">MOVIE INFORMATION</h1>
            <BForm onSubmit={handleSubmit} className="py-3">
                <BForm.Group className='mb-3'>
                    <BForm.Control type="text"
                        placeholder="Enter movie title here"
                        value={formData.searchTerm}
                        name="searchTerm"
                        onChange={handleChange}
                    />
                    <Button type="submit">Search</Button>
                </BForm.Group>
            </BForm>
        </div>
    )
}
export default Form;