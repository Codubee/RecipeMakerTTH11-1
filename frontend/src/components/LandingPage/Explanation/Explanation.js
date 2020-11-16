import React from 'react';
import { Jumbotron } from 'reactstrap';

document.body.style.backgroundColor = "#e3c3b2";

function Explanation()
{
    return (
        <div>
            <Jumbotron style={{backgroundColor: '#284d46'}}>
                <h1 className="display-3" style={{color: '#e3c3b2'}}>Recipe Maker</h1>
                <p className="lead" style={{color: '#e3c3b2'}}>Simply upload pictures or type in the ingredients you have in your pantry and fridge, and Recipe Maker will generate a matching recipe.</p>
            </Jumbotron>
        </div>
    );
};
export default Explanation;