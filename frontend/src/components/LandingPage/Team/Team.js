/*
This component will have a title and description of the team members.
*/

import React from 'react';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardDeck} from 'reactstrap';
import './Team.css'

document.body.style.backgroundColor="#e3c3b2";

function Team(){
    return (
        <div className ="container">
        <h1 className = "home display-4">Meet the Team!</h1>

            <br></br>
            <CardDeck className="text-white">
                    
                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4">Alekhya Pinnamaneni</CardTitle>
                        <br></br>
                        <CardSubtitle tag ="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag ="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button href="https://github.com/alekhyapinnamaneni" target="_blank" inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>GitHub</Button>
                        <Button inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4">Sung Hyun Hwang</CardTitle>
                        <br></br>
                        <CardSubtitle tag ="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button href="https://github.com/sunghyun96" target="_blank" inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>GitHub</Button>
                        <Button inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4">Stacey Masi</CardTitle>
                        <br></br>
                        <CardSubtitle tag="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button href="https://github.com/Stacey-Masi" target="_blank" inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>GitHub</Button>
                        <Button inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4">Sai Abhiroop Tanjavuru</CardTitle>
                        <br></br>
                        <CardSubtitle tag="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button href="https://github.com/saitanjavuru" target="_blank" inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>GitHub</Button>
                        <Button inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>LinkedIn</Button>
                    </Card>

                    <Card body className = "text-center cardStyling">
                        <CardTitle tag="h4">Adem Odza</CardTitle>
                        <br></br>
                        <CardSubtitle tag="h5">Major and Class</CardSubtitle>
                        <br></br>
                        <CardText tag="h6">(Info about ourselves)</CardText>
                        <br></br>
                        <Button href="https://github.com/AdemOdza" target="_blank" inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>GitHub</Button>
                        <Button inverse style={{backgroundColor: '#2D4D46', borderColor: '#F1EEE9'}}>LinkedIn</Button>
                    </Card>
            </CardDeck>
        </div>
    );
};

export default Team;