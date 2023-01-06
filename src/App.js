import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () =>{

  const [csvArray, setCsvArray] = useState([])
  const [ip, setIp] = useState("")
  const [displayData, setDisplayData] = useState("")

  const handleChange = (e) => {
    setIp(e.target.value)
  }

  const get_data = () => {
    axios.get('http://192.168.1.34:8089/')
    .then(res => {
      setCsvArray(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleSubmit = () => {
    let myIp = csvArray.filter(item => {
      return item[0] === ip
    })
    setDisplayData(myIp)
  }
  useEffect(() => {
    get_data();
  },[])

  console.log(csvArray)
  return (
    <div className="App">
      <input placeholder='Provide input' onChange={(e) => handleChange(e)}></input>
      <button onClick={handleSubmit}>Submit</button>
      {displayData.length!==0 && displayData}
    </div>
  );
}

export default App;
