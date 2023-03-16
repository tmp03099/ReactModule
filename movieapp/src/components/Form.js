import { useState } from 'react';

function Form({movieSearch}){

    //formData is an object
    const [formData, setFormData] = useState({searchTerm: ""}); //can make multiple input like ({seachTerm:"", lastName: "", firstName: ""})

    //handle change on the input
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value}); // [e.target.name]: e.target.value - useful when you have many input as you want
    }

    //handle the on submit form
    const handleSubmit = (e) =>{
        //stop the browser auto refesh
        e.preventDefault(); 
        movieSearch(formData.searchTerm);
    }
 
    return(
        <div className="headApp">
            <h1 className="title fw-bold py-4">MOVIE INFORMATION</h1>
            <form onSubmit={handleSubmit} className="py-3">
                <input type="text"
                       placeholder="Enter movie title here"
                       value={formData.searchTerm}
                       name="searchTerm"
                       onChange={handleChange}
                />
                <input type="submit" value="SUBMIT" className="btn btn-primary mx-2"  />
            </form>
        </div>
    )
}
export default Form;