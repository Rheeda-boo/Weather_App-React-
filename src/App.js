import React from 'react';
import './App.css';
const api = {
  key: "a43375849c950e522f5c40d99bf2f003",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className = "searchBox">
          <input type = "text" className = "searchBar" placeholder = "Search..."/>
        </div>
      </main>
    </div>
  );
}

export default App;
