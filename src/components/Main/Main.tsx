import React, {FC} from 'react'
import Planet from '../../models/Planet'
import './main.css'

interface MainProps {
  planetData: Planet[] | undefined;
}

const Main: FC<MainProps> = ({ planetData }) => {

  return (
    <main className='main-container'>
    </main>
  )
}

export default Main