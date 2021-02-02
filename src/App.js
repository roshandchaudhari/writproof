import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './footer'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
