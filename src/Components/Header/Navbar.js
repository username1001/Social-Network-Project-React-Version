import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Navbar extends Component {

 

  render() {
    return (
      
   <nav className="navbar-main">
    <div className="navbar-nav">
     <div className="navbar-left">
       <div>
       <Link to="https://www.instagram.com/" className="fa fa-instagram fa-2x"></Link>
       </div>
      <div className="vertical-line"></div>
       <div>
      <Link className="navbar-brand" to="https://www.instagram.com/">Instagram</Link>
      </div>
    </div>
    <div className="inputSearch">
      <input type="text"
             placeholder="Search"
             />
      <span className="fa fa-search"></span>
    </div>
    <ul className="navbar-right">
      <li><Link to="https://www.instagram.com/explore/people/"><span className="fa fa-compass fa-2x"></span></Link></li>
      <li><Link to="#"><span className="fa fa-heart-o fa-2x"></span></Link></li>
      <li><Link to="https://www.instagram.com/petra__vos/"><span className="fa fa-user-o fa-2x"></span></Link></li>
    </ul>
  </div>
</nav>
     
    );
  }
}

export default Navbar;
