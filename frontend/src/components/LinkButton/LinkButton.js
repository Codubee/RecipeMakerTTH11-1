import React from 'react'
import '../MyNavbar/MyNavbar.css'
import {Button} from 'reactstrap';



//Compact button component
//Set prop 'target' to "_blank" to open the link in a new tab 
function LinkButton(props) {
    return(
        <>
        <Button style={{ background: 'rgb(176, 216, 201)' }} className="button-background" href = {props.url} target={props.target}>
           <text className="button-text">{props.label}</text>
        </Button>
        &nbsp;
        </>
    )
}
    
export default LinkButton
