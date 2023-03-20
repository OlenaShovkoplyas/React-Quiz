import React from "react";
import './Footer.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
import LocalPoliceSharpIcon from '@mui/icons-material/LocalPoliceSharp';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';
import logoman from '../../logoman.png'


export default function Footer() {
  return ( 
    <div className="footer"> 
      <div className="footer-box">        
        <a href="" className="about">
          <RoofingSharpIcon />
          About Us
        </a>
        <a href="" className="privacy">
          <LocalPoliceSharpIcon />
          Privacy Policy
        </a>          
        <a href="" className="email">
          <MailOutlineSharpIcon />
          quiz-game@gmail.com
        </a>          
      </div>

      <div className="footer-box">        
        <a href="" >
          <TelegramIcon />
          Telegram
        </a>
        <a href="" >
          <FacebookOutlinedIcon />
          Facebook
        </a>
        <a href="" >
          <ForwardToInboxSharpIcon />
          Contact Us
        </a>
      </div>

      <div className="footer-box">
        <a href="" className="support">              
          <SupportAgentSharpIcon />
          Support
        </a>
        <a href="" className="public">
          <Diversity1SharpIcon />
          Public
        </a>          
      </div>

      <div className="footer-box">
        <img src={logoman} />
      </div> 
    </div>      
  )}
  