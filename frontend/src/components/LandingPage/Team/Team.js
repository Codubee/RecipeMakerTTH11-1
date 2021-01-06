/*
This component will have a title and description of the team members.
*/

import React from 'react';
import {CardDeck} from 'reactstrap';
import TeamCard from './TeamCard';
import './Team.css'

function Team(){
    return(

        <div className ="container">
        <h1 className = "home display-4">Meet the Team!</h1>

            <br></br>
            <CardDeck className="text-white">
                <TeamCard
                    fName = "Alekhya"
                    lName = "Pinnamaneni"
                    subtitle = "B.S. Computer Science, Class of 2024"
                    text = "(Info about ourselves)"
                    linkedin = ""
                    github = "https://github.com/alekhyapinnamaneni"
                />

                <TeamCard
                    fName = "Sung Hyun"
                    lName = "Hwang"
                    subtitle = "M.S. Computer Science, Class of 2022"
                    text = "(Info about ourselves)"
                    linkedin = "https://www.linkedin.com/in/sung-hyun-hwang-02aa17170/"
                    github = "https://github.com/sunghyun96"
                />

                <TeamCard
                    fName = "Stacey"
                    lName = "Masi"
                    subtitle = "B.S. Computer Science, Class of 2023"
                    text = "Undergraduate computer science student with interests in app development and cybersecurity"
                    linkedin = "https://www.linkedin.com/in/stacey-masi"
                    github = "https://github.com/Stacey-Masi"
                />

                <TeamCard
                    fName = "Sai Abhiroop"
                    lName = "Tanjavuru"
                    subtitle = "B.S. Computer Science, Class of 2022"
                    text = "(Info about ourselves)"
                    linkedin = ""
                    github = "https://github.com/saitanjavuru"
                />

                <TeamCard
                    fName = "Adem"
                    lName = "Odza"
                    subtitle = "B.S. Computer Science, Class of 2023"
                    text = "(Info about ourselves)"
                    linkedin = "https://www.linkedin.com/in/adem-odza/"
                    github = "https://github.com/AdemOdza"
                />
            </CardDeck>
        </div>
    )

}

export default Team;