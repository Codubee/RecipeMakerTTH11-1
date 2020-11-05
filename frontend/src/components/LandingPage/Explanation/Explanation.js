import React from 'react';
import { Jumbotron } from 'reactstrap';

const Explanation = (props) =>
{
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Recipe Maker</h1>
                <p className="lead">Simply upload pictures or type in the ingredients you have in your pantry and fridge, and Recipe Maker will generate a matching recipe.</p>
            </Jumbotron>
        </div>
    );
};
export default Explanation;