


const Weather = (props) =>{
    return(
        <div>
            {
                props.temp && <p>{props.temp}</p>
            }
            {
                props.city && <p>{props.city}</p>
            }
            {
                props.country && <p>{props.country}</p>
            }
            {
                props.humidity && <p>{props.humidity}</p>
            }
            {
                props.description && <p>{props.description}</p>
            }

            {
                props.error && <p>{props.error}</p>
            }

        </div>
    );
}

export default Weather;