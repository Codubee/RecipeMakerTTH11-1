import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNavbar.css'
import {
    Navbar,
    Button,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'reactstrap';


/*
//Compact button component, 
const LinkButton = (props) => {
    return(
        <>
        <Button color="info" className="button-background" href = {props.url} target={props.target}>
           <text className="button-text">{props.label}</text>
        </Button>
        &nbsp;
        </>
    )
}
*/

function MyNavbar() {
    return(
    <div> 
        <Navbar id="navbar-background" expand="md"> 
            
            <h2 id="navbar-title">
                Recipe Maker
            </h2>

            <Button color="info" className="button-background" href = "/">
                <text className="button-text">Home</text>
            </Button>
            &nbsp;


           
            <Button color="info" className="button-background" href = "/test">
                <text className="button-text">Find a recipe</text>
            </Button>
            &nbsp;

            
            <Button color="info" className="button-background" href = "https://github.com/Codubee/RecipeMakerTTH11-1" target="_blank">
                <text className="button-text">GitHub</text>
            </Button>
            &nbsp;

        </Navbar> 
    </div>

    );
}

    
export default MyNavbar
