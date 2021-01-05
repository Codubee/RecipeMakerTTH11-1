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
    }

    handleChange(event){
        this.setState({ingredients: event.target.value});
    }

    render()
    {
        return(
        <div>
            <Col sm="4">
                <Card body className="card-style">
                <CardTitle className="title-text">Enter your ingredients</CardTitle>
                <CardSubtitle className="subtitle-text">Enter your ingredients separated by spaces</CardSubtitle>
                <Input onChange={this.handleChange}>Test</Input>
                <Button onClick={this.handleClick}>Search</Button>
                </Card>
            </Col>
        </div>)
    }

}


export default UserInput;
    