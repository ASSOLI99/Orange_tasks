import React from 'react';
import Weather  from './components/weather';
import Form from './components/form';

//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends React.Component{
  state = {
    temp : '',
    city : '',
    country : '',
    humidity : '',
    description : '',
    error : ''
  }
  weather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`)

    const data = await api.json();
    if(city && country){

      this.setState({
        temp : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
      })
    }

    console.log(data)
  }
  render(){
    return(
      <div>
        <Form weather = {this.weather}/>
        <Weather 
          temp = {this.state.temp}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}


export default App;