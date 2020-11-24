/*
TeamCard.js for repeated Team Cards
*/

import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle} from 'reactstrap';
import './Team.css'

function TeamCard(props){
    return(

        
        <Card body className = "text-center cardStyling">
            <CardTitle tag="h4" className ="titleText">{props.fName}<br></br>{props.lName}</CardTitle>
            <br></br>
            <CardSubtitle tag ="h5">{props.subtitle}</CardSubtitle>
            <br></br>
            <CardText tag ="h6">{props.text}</CardText>
            <br></br>
            <Button className="buttonStyling" href={props.github} target="_blank" >GitHub</Button>
            <br></br>
            <Button className="buttonStyling">LinkedIn</Button>
        </Card>
        
        
    )

}

export default TeamCard;