import logo from './logo.svg'
import './App.css'
import { NavLink } from 'react-router-dom'

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt="..."
            width="142"
            height="142"
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              <strong>{props.title}</strong>
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
