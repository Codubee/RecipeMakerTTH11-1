import React, { Component } from 'react'
import { Card, CardSubtitle, CardTitle, Form, Button, Input, Col } from 'reactstrap';

class UserInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { ingredients: '' }
        //this.handleClick = this.handleClick.bind(this);
        //this.handleChange = this.handleChange.bind(this);


    }

    render()
    {
        return(
        <div>
            <Col sm="3">
                <Card body>
                <CardTitle>Enter your ingredients</CardTitle>
                <CardSubtitle>Enter your ingredients separated by spaces</CardSubtitle>
                <Input>Test</Input>
                <Button>Search</Button>
                </Card>
            </Col>
        </div>)
    }

}


export default UserInput;
    