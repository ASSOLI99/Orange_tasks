import React from 'react';
import './additem.css'
class Additem extends React.Component
{
    state ={
        id:Math.random(),
        name:'',
        age :0
    }

    changeHandle =(e) =>{
        this.setState({

            [e.target.id] :e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.add(this.state)
        
        this.setState({
            name:'',
            age:''
        })
    }
    
    render(){
        
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id='name' placeholder="Enter Name " className='form-control' onChange={this.changeHandle} value={this.state.name}/>
                    <input type="number" id='age' placeholder="Enter age " className='form-control' onChange={this.changeHandle} value={this.state.age} />
                    <button className='btn btn-primary'>Add</button>
                </form>
            </div>
        )
    }
}

export default Additem;