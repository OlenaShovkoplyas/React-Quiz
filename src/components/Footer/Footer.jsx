import { Component } from "react";
import './Footer.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp';
import LocalPoliceSharpIcon from '@mui/icons-material/LocalPoliceSharp';
import ForwardToInboxSharpIcon from '@mui/icons-material/ForwardToInboxSharp';

export default class Footer extends Component {
  constructor() {
    super();
  }
  
  render() {
    return ( 
      <div className="footer"> 
        <div className="footer-box">        
          <a href="" className="about">
            <RoofingSharpIcon className="footer-icons"/>
            About Us
          </a>
          <a href="" className="privacy">
            <LocalPoliceSharpIcon className="footer-icons"/>
            Privacy Policy
          </a>          
          <a href="" className="email">
            <MailOutlineSharpIcon className="footer-icons"/>
            quiz-game@gmail.com
          </a>          
        </div>
  
        <div className="footer-box">        
          <a href="" >
            <TelegramIcon className="footer-icons"/>
            Telegram
          </a>
          <a href="" >
            <FacebookOutlinedIcon className="footer-icons"/>
            Facebook
          </a>
          <a href="" >
            <ForwardToInboxSharpIcon className="footer-icons"/>
            Contact Us
          </a>
        </div>
  
        <div className="footer-box">
          <a href="" className="support">              
            <SupportAgentSharpIcon className="footer-icons"/>
            Support
          </a>
          <a href="" className="public">
            <Diversity1SharpIcon className="footer-icons"/>
            Public
          </a>          
        </div> 
      </div>      
    )
  }
}
