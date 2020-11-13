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

  import ButtonSpacer from '../ButtonSpacer/ButtonSpacer'


const LinkButton = (props) => {
    return(
        <>
        <Button color="info" id="button-background" href = {props.url}>
           <text className="button-text">{props.label}</text>
        </Button>
        <ButtonSpacer/>
        </>
    )
}

const DropButton = (props) => {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    return(
        <ButtonDropdown color="info" id="button-background" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="info" caret>
                <text className="button-text">Info</text>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="/team"> The Team </DropdownItem>
                    <DropdownItem href="/tools"> Tools </DropdownItem>
                </DropdownMenu>
        </ButtonDropdown>

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

            <DropButton/>
            <ButtonSpacer/>

        </Navbar> 
    </div>

    );
}

    
export default MyNavbar
