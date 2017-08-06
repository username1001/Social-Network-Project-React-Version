import React, { Component } from 'react';

const FooterLinks = [
    "ABOUT US",
    "SUPPORT",
    "BLOG",
    "PRESS",
    "API",
    "JOBS",
    "PRIVACY",
    "TERMS",
    "DIRECTORY",
    "LANGUAGE"
]

const FooterList = FooterLinks.map(link,i  => 
    <li key={i}>{link}</li>
)

const Footer = () =>  (
  <div className="login-page-footer">
      <ul>
          {FooterList}
      </ul>
  </div>
)

export default Footer;