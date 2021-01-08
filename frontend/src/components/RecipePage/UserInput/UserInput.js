import React, { Component } from 'react'
import { Card, CardSubtitle, CardTitle, Form, Button, Input, Col } from 'reactstrap';
import './UserInput.css'

class UserInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { ingredients: '' }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    handleClick(){
        console.log(this.state.ingredients);
        //Edit to call the api later!
    }

    handleChange(event){
        this.setState({ingredients: event.target.value});
    }

    render()
    {
        return(
        <div>
            <Col sm="3">
                <Card body className="card-style">
                <CardTitle className="title-text">Enter your ingredients</CardTitle>
                <CardSubtitle className="subtitle-text">Type your ingredients and separate them using spaces</CardSubtitle>
                <Input onChange={this.handleChange}>Test</Input>
                <h1></h1>
                <Button onClick={this.handleClick}>Search</Button>
                </Card>
            </Col>
        </div>)
    }

}


export default UserInput;
    