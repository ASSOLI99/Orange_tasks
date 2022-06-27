import React from 'react';
import Navbar from './components/navbar';
import Home  from './components/home';
import About from './components/about';
import Counter from './counter';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import './app.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'khaled',
      email:'khaled@gmail.com',
      phone:'0777785585'
    }
  }
  render(){

    return (
      <BrowserRouter>
  
      <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/counter' element={<Counter />} />
        </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
