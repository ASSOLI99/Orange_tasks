import React from 'react';
import Additem from './components/additem/additem';

import Todolist from './components/todolist/todolist';

class App extends React.Component
{
  state ={
    items : [
      {id:1 , name:'khaled' , age:28},
      {id: 2 , name : 'ali' , age :30}
    ]
  }

  deleteitem = (id)=>{
    let items=this.state.items.filter(item => {
      return item.id !== id;
    })

    this.setState({items})
  }

  additem =(item)=>{
    let allitems = this.state.items;
    allitems.push(item);
    this.setState({items:allitems})
  }
  render(){

    return(
      <>
        <Todolist items={this.state.items} delete={this.deleteitem} />
        <Additem add = {this.additem}/>
      </>
    );
  }
}

export default App;