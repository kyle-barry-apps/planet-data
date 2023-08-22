import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Planet from "./models/Planet";
import { PlanetProvider } from "./contexts/PlanetContext";
import { MenuProvider } from "./contexts/MenuContext";
import "./App.css";

function App() {
  const [data, setData] = useState<Planet[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data.json");
      const json = await data.json();
      setData(json);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <MenuProvider>
      <PlanetProvider>
        <Navigation />
        <Main planetData={data} />
      </PlanetProvider>
    </MenuProvider>
  );
}

export default App;
