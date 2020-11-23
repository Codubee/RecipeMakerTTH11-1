/*
This component will have a title and description of the team members.
*/

import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardDeck} from 'reactstrap';
import './Team.css'

function Team(){
    return (
        <div className ="container componentBGColor">
        <h1 className = "home display-4">Meet the Team!</h1>

            <br></br>
            <CardDeck className="text-white">
                    
                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4" className ="titleText">Alekhya Pinnamaneni</CardTitle>
                        <br></br>
                        <CardSubtitle tag ="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag ="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button className="buttonStyling" href="https://github.com/alekhyapinnamaneni" target="_blank" >GitHub</Button>
                        <br></br>
                        <Button className="buttonStyling">LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4" className ="titleText">Sung Hyun Hwang</CardTitle>
                        <br></br>
                        <CardSubtitle tag ="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button className="buttonStyling" href="https://github.com/sunghyun96" target="_blank">GitHub</Button>
                        <br></br>
                        <Button className="buttonStyling">LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4" className ="titleText">Stacey<br></br>Masi</CardTitle>
                        <br></br>
                        <CardSubtitle tag="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button className="buttonStyling" href="https://github.com/Stacey-Masi" target="_blank">GitHub</Button>
                        <br></br>
                        <Button className="buttonStyling">LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4" className ="titleText">Sai Abhiroop Tanjavuru</CardTitle>
                        <br></br>
                        <CardSubtitle tag="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button className="buttonStyling" href="https://github.com/saitanjavuru" target="_blank">GitHub</Button>
                        <br></br>
                        <Button className="buttonStyling">LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4" className ="titleText">
                            Adem<br></br>Odza</CardTitle>
                        <br></br>
                        <CardSubtitle tag="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button className="buttonStyling" href="https://github.com/AdemOdza" target="_blank">GitHub</Button>
                        <br></br>
                        <Button className="buttonStyling">LinkedIn</Button>
                    </Card>
            </CardDeck>
        </div>
    );
};

export default Team;