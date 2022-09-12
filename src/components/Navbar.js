import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link me-5 active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className='form-check-label'  htmlFor="flexSwitchCheckDefault">
           {props.mode==='light'?'enable':'disable'} dark mode
          </label>
        </div>
      </div>
    </nav>
  );
}
