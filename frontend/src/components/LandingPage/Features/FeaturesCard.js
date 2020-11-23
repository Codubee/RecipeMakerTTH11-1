import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import './Features.css'

// function for repeated features card
function FeaturesCard(props) {
    return(
        <Card className="card-style"> 
            <CardImg 
                top width="100%" 
                src={props.img} 
                alt={props.alttext}
                id="pictures"
            />
            <CardBody className="card-body-style">
                <CardTitle tag="h5">
                    <div className="card-title-div" >{props.title}</div></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 card-subtitle">{props.sub}</CardSubtitle>
                <CardText className= "card-text">{props.text}</CardText>
            </CardBody>
        </Card>
    );
};


export default FeaturesCard;