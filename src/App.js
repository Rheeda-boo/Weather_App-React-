import React from 'react';
import './App.css';
const api = {
  key: "a43375849c950e522f5c40d99bf2f003",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

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
          <input type = "text" className = "searchBar" placeholder = "Search..."/>
        </div>

        <div className ="locationBox">

          <div className = "location">
            Airport Ridge, Takoradi
          </div>

           <div className = "date">{dateBuilder(new Date())}</div>

          <div className = "weatherBox">

            <div className = "temp">
              15*c
            </div>

            <div className = "weather">Sunny</div>

          </div>
        </div> 
      </main>
    </div>
  );
}

export default App;
