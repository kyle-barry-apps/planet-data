import React, { FC, useState } from 'react'
import './navigation.css'

const Navigation: FC = () => {
  const [planet, setPlanet] = useState<string>('Mercury')

  return (
    <nav className='nav'>
      <div className='nav-title'>
        The planets
      </div>
      <ul className='nav-list'>
        <li className={planet === 'Mercury' ? 'active' : ''} onClick={()=>setPlanet('Mercury')}>Mercury</li>
        <li className={planet === 'Venus' ? 'active' : ''} onClick={()=>setPlanet('Venus')}>Venus</li>
        <li className={planet === 'Earth' ? 'active' : ''} onClick={()=>setPlanet('Earth')}>Earth</li>
        <li className={planet === 'Mars' ? 'active' : ''} onClick={()=>setPlanet('Mars')}>Mars</li>
        <li className={planet === 'Jupiter' ? 'active' : ''} onClick={()=>setPlanet('Jupiter')}>Jupiter</li>
        <li className={planet === 'Saturn' ? 'active' : ''} onClick={()=>setPlanet('Saturn')}>Saturn</li>
        <li className={planet === 'Uranus' ? 'active' : ''} onClick={()=>setPlanet('Uranus')}>Uranus</li>
        <li className={planet === 'Neptune' ? 'active' : ''} onClick={()=>setPlanet('Neptune')}>Neptune</li>
      </ul>
    </nav>
  )
}

export default Navigation