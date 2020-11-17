import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import './Features.css'

// function for repeated features card
function FeaturesCard(props) {
    return(
        <Card style={{borderWidth:4, borderColor:"white"}}> 
            <CardImg 
                top width="100%" 
                src={props.img} 
                alt={props.alttext}
                id="pictures"
            />
            <CardBody style={{backgroundColor:"#284d46"}}>
                <CardTitle tag="h5">
                    <div style={{color:"#e3c3b2", fontWeight:"bold", fontSize:19}}>{props.title}</div></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text muted" style={{color:"#e3c3b2", fontSize:12}}>{props.sub}</CardSubtitle>
                <CardText style ={{color:"white"}}>{props.text}</CardText>
            </CardBody>
        </Card>
    );
};


export default FeaturesCard;