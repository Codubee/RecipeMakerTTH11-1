import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNavbar.css'
import {
    Navbar,
    Button
  } from 'reactstrap';

  import ButtonSpacer from '../ButtonSpacer/ButtonSpacer'


const LinkButton = (props) => {
    return(
        <>
        <Button id="button-background" href = {props.url}>
           <text className="button-text">{props.label}</text>
        </Button>
        <ButtonSpacer/>
        </>
    )
}

function MyNavbar() {
    return(
    <div> 
        <Navbar id="navbar-background" expand="md">
            
            <h2 id="navbar-title">
                Recipe Maker
            </h2>
            
            <ButtonSpacer/>

            <LinkButton 
            label="Home" 
            url="/" 
            />

            <LinkButton 
            label="Find a recipe" 
            url="/test"
            />
            
            <LinkButton 
            label="GitHub" 
            url="https://github.com/Codubee/RecipeMakerTTH11-1"
            />

        </Navbar> 
    </div>
    );
}

    
export default MyNavbar
