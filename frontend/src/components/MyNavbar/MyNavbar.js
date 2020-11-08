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
    NavbarText,
    Button
  } from 'reactstrap';
  import ButtonSpacer from '../ButtonSpacer/ButtonSpacer'



function MyNavbar()
{
    return(
    <div> 
        <Navbar color="dark" expand="md">
            
            <h2 style={{color: "whitesmoke"}}>
                Recipe Maker
            </h2>

            
            <ButtonSpacer/>

            <Button href="/">
                Home
            </Button>
            
            <ButtonSpacer/>

            <Button href="/test">
                Find a recipe
            </Button>
            
            <ButtonSpacer/>

            <Button href="https://github.com/Codubee/RecipeMakerTTH11-1">
                GitHub
            </Button>


            

        </Navbar> 
    </div>
    );
}

    
export default MyNavbar
