import React  from "react";
import  './about.css' ;
import image from './coding.png';

class About extends React.Component{
    
    render(){
        console.log(image)
        return(
            <div className="aboutStyle">
                <div>Hi from About</div>

                <img src={image} />
            </div>
        )
    }
}

export default About;