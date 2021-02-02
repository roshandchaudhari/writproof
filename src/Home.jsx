import logo from './logo.svg'
import './App.css'
import web from '../src/images/rocket.svg'
import { NavLink } from 'react-router-dom'
import Common from './Common'
import Blog from './Blog'

function Home() {
  return (
    <>
      <Common
        name="We are the developers"
        imgsrc={web}
        visit="/blog"
        btnname="Get Started"
      />
      <Blog />
    </>
  )
}

export default Home
