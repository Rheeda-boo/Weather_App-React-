import React, {useState} from 'react';
import './App.css';
const api = {
  key: "a43375849c950e522f5c40d99bf2f003",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery("")
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month  = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className = "searchBox">
          <input 
            type = "text" 
            className = "searchBar" 
            placeholder = "Search..."
            onChange = {e => setQuery(e.target.value)}
            value = {query}
            onKeyPress = {search}
            />
        </div>

        {(typeof weather.main != "undefined") ? ( 

          <div>
            <div className ="locationBox"> 

              <div className = "location">
                {weather.name}, {weather.sys.country}
              </div>

              <div className = "date">{dateBuilder(new Date())}</div>
              </div> 
              <div className = "weatherBox">

                <div className = "temp">
                  {Math.round(weather.main.temp) }°C
                </div>

                <div className = "weather">Sunny</div>

              </div>
        </div>

  
          ) : ("")}
     </main>
  </div>
  );
}

export default App;
