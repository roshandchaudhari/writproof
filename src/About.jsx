import logo from './logo.svg'
import './App.css'
import web from '../src/images/rocket.svg'
import about from '../src/images/online.svg'

import { NavLink } from 'react-router-dom'
import Common from './Common'

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={about}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  )
}

export default About
