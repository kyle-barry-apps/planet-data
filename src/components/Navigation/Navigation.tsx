import React, { FC, useState, useContext } from 'react';
import { PlanetContext } from '../../contexts/PlanetContext';
import './navigation.css';

const Navigation: FC = () => {
  const planetContext = useContext(PlanetContext);
  const [showMenu, setShowMenu] = useState<boolean>(false)

  console.log(showMenu)

  if (!planetContext) {
    return null; 
  }

  const { planet, setPlanet } = planetContext;

  return (
    <nav className='nav'>
      <div className='nav-title'>
        The planets
      </div>
      <ul className='nav-list'>
        <li className={planet === 'Mercury' ? 'active' : ''} onClick={() => setPlanet('Mercury')}>Mercury</li>
        <li className={planet === 'Venus' ? 'active' : ''} onClick={() => setPlanet('Venus')}>Venus</li>
        <li className={planet === 'Earth' ? 'active' : ''} onClick={() => setPlanet('Earth')}>Earth</li>
        <li className={planet === 'Mars' ? 'active' : ''} onClick={() => setPlanet('Mars')}>Mars</li>
        <li className={planet === 'Jupiter' ? 'active' : ''} onClick={() => setPlanet('Jupiter')}>Jupiter</li>
        <li className={planet === 'Saturn' ? 'active' : ''} onClick={() => setPlanet('Saturn')}>Saturn</li>
        <li className={planet === 'Uranus' ? 'active' : ''} onClick={() => setPlanet('Uranus')}>Uranus</li>
        <li className={planet === 'Neptune' ? 'active' : ''} onClick={() => setPlanet('Neptune')}>Neptune</li>
      </ul>
      <div className='nav-burger' onClick={()=> setShowMenu(!showMenu)}>
        <img src="/assets/icon-hamburger.svg" alt="burger menu" />
      </div>
    </nav>
  );
}

export default Navigation;






