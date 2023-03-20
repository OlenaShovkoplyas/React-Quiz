import React from "react";
import './Footer.css'

export default function Footer() {
  return ( 
    <div className="footer">
      <div className="d-flex">
        <ul>
          <li>
            <a href="" className="about">About Us</a>
          </li>
          <li>
            <a href="" className="privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="" className="email">Email: quiz-game@gmail.com</a>
          </li>
        </ul>
      </div>

      <div className="d-flex">
        <ul>
          <li>
            <a href="" className="contacts">Contacts</a>
          </li>
          <li>
            <a href="" className="public">Public</a>
          </li>            
        </ul>
      </div> 
    </div>      
  )}
