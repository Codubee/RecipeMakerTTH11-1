/*
This component will have a title and description of the team members.
*/

import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

function Team(){
    return (
        <div>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Alekhya Pinnamaneni</CardTitle>
                <CardText>Worked on explanation component</CardText>
            </Card>
            <Card body inverse color="info">
                <CardTitle tag="h5">Sung Hyun Hwang</CardTitle>
                <CardText>Worked on tool component</CardText>
            </Card>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Stacey Masi</CardTitle>
                <CardText>Worked on features component</CardText>
            </Card>
            <Card body inverse color="info">
                <CardTitle tag="h5">Sai Abhiroop Tanjavuru</CardTitle>
                <CardText>Worked on team component</CardText>
            </Card>
            <Card body inverse color="primary">
                <CardTitle tag="h5">Adem Odza</CardTitle>
                <CardText>Worked on navbar</CardText>
            </Card>
        </div>
    );
};

export default Team;