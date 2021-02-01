import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Explanation.css'

// document.body.style.backgroundColor = "#e3c3b2";

function Explanation()
{
    return (
        <div>
            <Jumbotron className="jumbotron-style">
                <h1 className="display-3" >Recipe Maker</h1>
                <p className="lead" id="explanation-text">Simply upload pictures or type in the ingredients you have in your pantry and fridge, and Recipe Maker will generate a matching recipe.</p>
            </Jumbotron>
        </div>
    );
};
export default Explanation;