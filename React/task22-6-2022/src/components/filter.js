import React from "react";


class  Filter extends React.Component{
    state = {
        names : ["Khozama","Mohammad","Lujain","Nada","Ayman"]
    }
     search = ()=>{
        const element = document.getElementById('search').value;
        if(element==''){
            this.setState({
                names:["Khozama","Mohammad","Lujain","Nada","Ayman"]
            })  
        }else{

            const filter =  this.state.names.filter((name)=>{
                return(name.includes(element));
            })
            this.setState({
                names:filter
            })
            
        }
       
    }
    
    render(){
        const name = this.state.names.map((name)=>{
            return(
                <p>{name}</p>
            )
        })
    return(
        <div className="m-5">
            <h3>Task 3  </h3>
            <form className="mb-3">
                <input type="text" placeholder="Search" onChange={this.search} id="search" />
            </form>
            
           <p>{name}</p> 
        </div>
    );
}
}

export default Filter;