import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link to="/">
  <a className="navbar-brand" >MyNotesApp</a>
      </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <Link to="/">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
</Link>
      <Link to="/mynotes">
<li className="nav-item active">

        <a className="nav-link" href="#">My Notes <span className="sr-only"></span></a>
      </li>
      </Link>

     


      </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar