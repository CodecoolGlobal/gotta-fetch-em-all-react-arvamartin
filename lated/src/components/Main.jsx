import { useEffect, useState } from "react";


function randomColor() {
  const colors = ["#FFA500", "#03a9f4", "#6DB465", "#90EE90", "#F5F5F5", "#FFFF00", "#F2C14E", '#00FFFF', "#7FFFD4", "#DAA520", "#F0E68C"];
  return colors[Math.floor(Math.random() * colors.length)];
}




function Main() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/location');
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="custom-container">
      <h1 style={{ margin: "189px 0", color: "yellow", fontSize: "100px"  }}>Locations:</h1>
      {data.map((location, index) => (
        <p
          style={{ backgroundColor: randomColor(), margin: "7px 0", fontWeight: "bold",  borderRadius: "20px", fontSize: "20px" }}
          key={index} >
          <br />
          {location.name.charAt(0).toUpperCase() + location.name.slice(1)}
          <br />
          <button  className="custom-button"> Chose me!</button>
        </p>
      ))}
    </div>
  );
}

export default Main;
