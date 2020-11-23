/*
This component will have a title and description of the team members.
*/

import React from 'react';
import {CardDeck} from 'reactstrap';
import TeamCard from './TeamCard';
import './Team.css'

function Team(){
    return(
        <div className ="container componentBGColor">
        <h1 className = "home display-4">Meet the Team!</h1>

            <br></br>
            <CardDeck className="text-white">
                <TeamCard
                    fName = "Alekhya"
                    lName = "Pinnamaneni"
                    subtitle = "Major and Class"
                    text = "(Info about ourselves)"
                    github = "https://github.com/alekhyapinnamaneni"
                />

                <TeamCard
                    fName = "Sung Hyun"
                    lName = "Hwang"
                    subtitle = "Major and Class"
                    text = "(Info about ourselves)"
                    github = "https://github.com/sunghyun96"
                />

                <TeamCard
                    fName = "Stacey"
                    lName = "Masi"
                    subtitle = "Major and Class"
                    text = "(Info about ourselves)"
                    github = "https://github.com/Stacey-Masi"
                />

                <TeamCard
                    fName = "Sai Abhiroop"
                    lName = "Tanjavuru"
                    subtitle = "Major and Class"
                    text = "(Info about ourselves)"
                    github = "https://github.com/saitanjavuru"
                />

                <TeamCard
                    fName = "Adem"
                    lName = "Odza"
                    subtitle = "Major and Class"
                    text = "(Info about ourselves)"
                    github = "https://github.com/AdemOdza"
                />
            </CardDeck>

        </div>
    )

}

export default Team;