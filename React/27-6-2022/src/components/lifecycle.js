import React from 'react';

class Lifecycle extends React.Component 
{
    
    render(){
        console.log('render');
        return(
            <>
                <h1>Lifecycle</h1>
                <button onClick={this.handleAdd}>Add</button>
            </>
        );

    }
}

export default Lifecycle;