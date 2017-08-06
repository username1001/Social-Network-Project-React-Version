import React, { Component } from 'react';

import slider1 from '../../images/LoginPage/slider1.jpg';
import slider2 from '../../images/LoginPage/slider2.jpg';
import slider3 from '../../images/LoginPage/slider3.jpg';

import iphone from '../../images/LoginPage/iphone.png';

class Animation extends React.Component{
  componentDidMount(){
    let i = 0;
    const timeGap = 4000;  // timer for slider
    const images = document.getElementById("img-slider").childNodes;
    
    const changeImg = () => {
      images[i].classList.remove("current-img")
      if( i<images.length-1){
        ++i
      } else {
        i = 0;
      }
      images[i].classList.add("current-img")
      setTimeout(changeImg,timeGap)
    }
    changeImg();
  }
  
  render(){
    return (
      <div className="iphone">
        <img src={iphone}/>
        <div id="img-slider">
          <img className="current-img" src={slider1}/>
          <img src={slider2}/>
          <img src={slider3}/>
        </div>
      </div>
    )
  }
}

export default Animation;