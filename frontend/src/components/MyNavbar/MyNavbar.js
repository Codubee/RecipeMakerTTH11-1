import React from 'react'
import './MyNavbar.css'
import LinkButton from '../LinkButton/LinkButton'
import {Navbar} from 'reactstrap';

function MyNavbar() {
    return(
    <div> 
        <Navbar id="navbar-background" expand="md"> 
            
            <h2 id="navbar-title">
                Recipe Maker
            </h2>

            <LinkButton label="Home" url="/"/>

            <LinkButton label="Find a recipe" url="/findRecipe"/>
        
            <LinkButton label="GitHub" url="https://github.com/Codubee/RecipeMakerTTH11-1" target="_blank"/>
            

        </Navbar> 
    </div>

    );
}

    
export default MyNavbar
