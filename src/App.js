
import './App.css';
import { useState } from 'react';

function App() {
  const [search,setSearch] = useState('');
  const[data,setData] = useState('');
  async function fetchData () {
    const data1  = await fetch('https://openweathermap.org/data/2.5/find?q='+search+'&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric');
    const data2 = await data1.json();
    console.log(data2)
    setData(data2);
  }
  return (
    <div className="App">
      <h1 className='app-title'>Weather Forcast App </h1>
      <div className='search-container'>
        <img className='background-image' src='https://www.awxcdn.com/adc-assets/images/hero/4/1920x450.jpg' alt='background-image'/>
          <div className='search-box'>
            <input type='text' placeholder='search your city' value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
            <button onClick={()=>{fetchData()}}>Search</button>
          </div>
      </div>
      {data && <div className='display-container'>
        <div className='display-card'>
        <p className='city-name'> {data.list[0].name} City </p>
        <p>Temp - {Math.floor(data.list[0].main.temp / 10)} Degree Celsius </p>
        <hr/>
        <p>Humidity - {data.list[0].main.humidity} %</p>
        <hr/>
        <p>Air Pressure - {data.list[0].main.pressure} hPa</p>
        <hr/>
        </div>
      </div>}
    </div>  
  );
}

export default App;
