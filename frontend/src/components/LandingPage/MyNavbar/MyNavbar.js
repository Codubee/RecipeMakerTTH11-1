import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


function MyNavbar()
{
    return(
    <div> 
        <Navbar>
            
            <NavbarBrand> 
            Home 
            </NavbarBrand>

            <NavbarBrand href="https://github.com/Codubee/RecipeMakerTTH11-1">
            GitHub
            </NavbarBrand>

            <NavbarBrand>
            Second
            </NavbarBrand>

        </Navbar> 
    </div>
    );
}

    /*  
        
        TO DO: Find out how to link to the home page, find out why nothing is rendering on the app, find out the correct labels for the navbar
        */
export default MyNavbar
