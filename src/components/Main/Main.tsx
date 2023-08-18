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

  const imgToDisplay: string =
  selectedDescription === 'overview' || selectedDescription === 'geology'
    ? `/assets/planet-${selectedPlanet?.name.toLowerCase()}.svg`
    : `/assets/planet-${selectedPlanet?.name.toLowerCase()}-internal.svg`;

  const geologyImage: string | null = 
    selectedDescription === 'geology' ? `assets/geology-${selectedPlanet?.name.toLowerCase()}.png` : null

  return (
    <main className='main-container'>
       <div className="main__img-container">
        <img src={imgToDisplay} alt="planet" />
        {geologyImage && <img className='main__geology-image' src={geologyImage} alt='geology'/>}
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
          <div className={selectedDescription === 'overview' ? "main__btn active" : 'main__btn'} onClick={() => setSelectedDescription('overview')}>01 Overview</div>
          <div className={selectedDescription === 'structure' ? "main__btn active" : 'main__btn'} onClick={() => setSelectedDescription('structure')}>02 Internal Structure</div>
          <div className={selectedDescription === 'geology' ? "main__btn active" : 'main__btn'} onClick={() => setSelectedDescription('geology')}>03 Surface Geology</div>
        </div>
       </div>
    </main>
  )
}

export default Main