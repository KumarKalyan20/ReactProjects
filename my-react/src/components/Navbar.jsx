import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
      <h1 className="navbar-brand" href="#">My Portfolio</h1>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span> 
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
       </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

