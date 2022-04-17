import React, { useEffect } from 'react'
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState;
  useEffect = () => {
    callAPI();
  }
  const callAPI = () => {
    fetch("http://localhost:4000/blog")
      .then((res) => res.text())
      .then((data) => setData(data));
  };
  return (
    <div className="App">
      <div>
        {data}
      </div>
    </div>
  );
}

export default App;
