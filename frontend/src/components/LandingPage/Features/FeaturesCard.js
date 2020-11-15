import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import './Features.css'

// including id="pictures" makes the picture format stretch when on split screen but even when on full screen
// removing id="pictures" will make nutrition card slightly longer

// function for repeated features card
function FeaturesCard(props) {
    return(
        <Card>
            <CardImg 
                top width="100%" 
                src={props.img} 
                alt={props.alttext}
                //id="pictures"
            />
            <CardBody>
                <CardTitle tag="h5"><div>{props.title}</div></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text muted">{props.sub}</CardSubtitle>
                <CardText>{props.text}</CardText>
            </CardBody>
        </Card>
    );
};


export default FeaturesCard;