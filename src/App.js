import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [ip, setIp] = useState("");
  const [ipInfo, setIpInfo] = useState([]);

  const handleSetIpAddress = (event) => {
    console.log(event.target.value);
    setIp(event.target.value);
  };
  const APIKEY = process.env.APIKEY;
  const url = `https://geo.ipify.org/api/v2/country?apiKey=at_${process.env.APIKEY}&ipAddress=${ip}`;

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setIpInfo("");
    axios.get(url).then((response) => {
      setIpInfo(response.data);
      console.log(typeof ipInfo);
    });
  };

  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={ip} onChange={handleSetIpAddress} />
        <button type="submit">GO!</button>
      </form>

      <div className="ipInfo">
        <div className="part">
          <p>ipInfo address</p>
          <h3>{ipInfo.ip}</h3>
        </div>

        <div className="part">
          <p>ISP</p>
          <h3>{ipInfo.isp}</h3>
        </div>
        <div className="part">
          <p>ISP Region</p>
          <h3>{ipInfo.location["region"]}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
