import React  from 'react';

class Home extends React.Component{
    render(){
        const st = {
            color:"red" , fontSize:"30px"
        }
        return(
            <div style={st}>
               <p>Hi from Home</p> 
              
               
            </div>
        )
    }
}

export default Home;