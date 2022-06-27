

const Form = (props) =>{
    return(
        <form className="container" onSubmit={props.weather}>
            <input type="text" name="city" placeholder = "Enter City" className="form-control m-3"/>  
            <input type="text" name="country" placeholder = "Enter Country"  className="form-control m-3" /> 

            <button className="btn btn-secondary m-3">GET</button> 
        </form>
    );
}

export default Form;