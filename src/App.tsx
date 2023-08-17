import { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Planet from './models/Planet';
import './App.css';

function App() {
  const [data, setData] = useState<Planet[]>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/data.json')
      const json = await data.json()
      setData(json)
    }

    fetchData()
    .catch(err => console.log(err))
  }, [])


  return (
    <>
    <Navigation />
    <Main planetData={data}/>
    </>
  );
}

export default App;
