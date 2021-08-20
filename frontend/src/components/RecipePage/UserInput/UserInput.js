import React, { Component } from 'react'
import { Card, CardTitle, Button, Input, Col, Row } from 'reactstrap';
import './UserInput.css'




class UserInput extends React.Component{
    constructor(props){
        super(props);
        this.state = { ingredients: '', text_data:''}

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }
    
    handleAddClick(){
        if(this.state.text_data !== ''){

            var tempIngredient = '';

            if(this.state.ingredients === ''){
                tempIngredient = this.state.text_data;
            }
            else{
                tempIngredient = this.state.ingredients + ' ' + this.state.text_data;
            }

            
            this.setState({ingredients: tempIngredient, text_data: ''});
            console.log(this.state.ingredients);
        }
    }

    handleSearchClick(){
        //Call API here.
    }

    handleChange(event){

        
        this.setState({text_data: event.target.value});
        console.log(this.state);
        
        
    }

    render()
    {
        return(
        <div>
            <Col sm="4">
                <Card body className="card-style">
                    <CardTitle className="title-text">Add your ingredients</CardTitle>

                    <Row>

                        <Col>
                            <Input onChange={this.handleChange} value={this.state.text_data}>Add your ingredients</Input>
                        </Col>

                        <Col>
                            <Button className="button-background" onClick={this.handleAddClick}><text className="button-text">Add</text></Button>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                        <text className="subtitle-text">    Your ingredients: {this.state.ingredients}</text>
                        </Col>
                    </Row>


                    <h1></h1>
                    <Button className="button-background" onClick={this.handleSearchClick}><text className="button-text">Search</text></Button>
                </Card>
            </Col>
        </div>)
    }

}


export default UserInput;
    