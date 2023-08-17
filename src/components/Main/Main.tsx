import {FC, useContext, useState} from 'react'
import { PlanetContext } from '../../contexts/PlanetContext';
import Planet from '../../models/Planet'
import './main.css'

interface MainProps {
  planetData: Planet[] | undefined;
}

const Main: FC<MainProps> = ({ planetData }) => {

  const [selectedDescription, setSelectedDescription] = useState<string>('overview')

  const planetContext = useContext(PlanetContext);

  if (!planetContext) {
    return null; 
  }

  const { planet } = planetContext;

  const selectedPlanet: Planet | undefined = planetData?.find((p) => p.name === planet)

  return (
    <main className='main-container'>
       <div className="main__img-container">
        <img src={`/assets/planet-${selectedPlanet?.name.toLowerCase()}.svg`} alt="" />
       </div>
       <div className="main__data">
        <div className="main__data-container">
          <h1>{selectedPlanet?.name}</h1>
          <div className="main__description">
            <p>

            {selectedDescription === 'overview' ? selectedPlanet?.overview.content : selectedDescription === 'structure' ? selectedPlanet?.structure.content : selectedPlanet?.geology.content}
            </p>
          </div>
          <div className="main__wiki">
            Source : <a target='_blank' href={selectedPlanet?.overview.source}>Wikipedia</a>
          </div>
        </div>
        <div className="main__options">
          <div className="main__overview" onClick={() => setSelectedDescription('overview')}>01 Overview</div>
          <div className="main__structure" onClick={() => setSelectedDescription('structure')}>02 Internal Structure</div>
          <div className="main__geology" onClick={() => setSelectedDescription('geology')}>03 Surface Geology</div>
        </div>
       </div>
    </main>
  )
}

export default Main