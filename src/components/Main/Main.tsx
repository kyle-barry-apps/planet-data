import {FC, useContext, useState } from 'react'
import { PlanetContext } from '../../contexts/PlanetContext';
import Planet from '../../models/Planet'
import './main.css'

interface MainProps {
  planetData: Planet[] | undefined;
}

const Main: FC<MainProps> = ({ planetData }) => {

  const planetColors: { [key: string]: string } = {
    mercury: '#419EBB',
    venus: '#EDA249',
    earth: '#6D2ED5',
    mars: '#D14C32',
    jupiter: '#D83A34',
    saturn: '#CD5120',
    uranus: '#1EC1A2',
    neptune: '#2D68F0'
  }

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

  const getBackgroundColor = (): string => {
    if (selectedPlanet) {
      return planetColors[selectedPlanet?.name.toLowerCase()]
    }
    else {
      return ''
    }
  }


  return (
    <main className='main-container'>
      <div className="main__img-and-data-container">
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
              Source:&nbsp;
              {selectedDescription === 'overview' ? (
                <a target='_blank' rel="noreferrer" href={selectedPlanet?.overview.source}>
                  Wikipedia
                </a>
              ) : selectedDescription === 'structure' ? (
                <a target='_blank' rel="noreferrer" href={`${selectedPlanet?.overview.source}#Internal_structure`}>
                  Wikipedia
                </a>
              ) : (
                <a target='_blank' rel="noreferrer" href={`${selectedPlanet?.overview.source}#Surface_geology`}>
                  Wikipedia
                </a>
              )}
            </div>
          </div>
          <div className="main__options">
            <div className={selectedDescription === 'overview' ? 'main__btn active' : 'main__btn'} style={{
              backgroundColor: selectedDescription === 'overview' ? getBackgroundColor() : 'transparent'
            }} onClick={() => setSelectedDescription('overview')}>01 Overview</div>
            <div style={{
              backgroundColor: selectedDescription === 'structure' ? getBackgroundColor() : 'transparent'
            }} className={selectedDescription === 'structure' ? 'main__btn active' : 'main__btn'}onClick={() => setSelectedDescription('structure')}>02 Internal Structure</div>
            <div style={{
              backgroundColor: selectedDescription === 'geology' ? getBackgroundColor() : 'transparent'
            }} className={selectedDescription === 'geology' ? 'main__btn active' : 'main__btn'} onClick={() => setSelectedDescription('geology')}>03 Surface Geology</div>
          </div>
         </div> 
      </div>
      <div className="main__extra-data">
        <div className="main__extra-data-item">
          <h3>Rotation Time</h3>
          <span>{selectedPlanet?.rotation}</span>
        </div>
        <div className="main__extra-data-item">
          <h3>Revolution Time</h3>
          <span>{selectedPlanet?.revolution}</span>
        </div>
        <div className="main__extra-data-item">
          <h3>Radius</h3>
          <span>{selectedPlanet?.radius}</span>
        </div>
        <div className="main__extra-data-item">
          <h3>Average Temp.</h3>
          <span>{selectedPlanet?.temperature}</span>
        </div>
      </div>
      
    </main>
  )
}

export default Main