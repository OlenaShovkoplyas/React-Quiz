import { Component } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Header.css';


export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return ( 
            <> 
                <ButtonGroup className='btn'>           
                    <Button sx={{color: 'green'}} className='btn1'>Registration</Button>            
                </ButtonGroup>
                <ButtonGroup className='btn'>           
                    <Button sx={{color: 'green'}}>Log In</Button>            
                </ButtonGroup>
            </>
        )
    }    
}
