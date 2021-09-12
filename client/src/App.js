import './App.css';
import {useEffect, useState} from 'react'

function App() { 
  const [data, setData] = useState({})
  useEffect(() => {
    // same as axios.get
    fetch('/api/test').then(data=> {
      setData(data)
    })
  }, []) //Component did mount
  return (
    <div className="App">
      {JSON.stringify(data, null, 4)}
    </div>
  );
}

export default App;
