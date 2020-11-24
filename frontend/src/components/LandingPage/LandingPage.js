import React from 'react'
import Explanation from './Explanation/Explanation';
import Tools from './Tools/Tools';
import Features from './Features/Features.js'
import Team from './Team/Team'

function LandingPage(){
    return(
        <>
            <Explanation/>
            <Features/>
            <Tools/>
            <Team/>
        </>
    )
}

export default LandingPage;