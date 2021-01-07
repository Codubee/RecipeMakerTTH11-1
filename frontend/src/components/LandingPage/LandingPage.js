import React from 'react'
import Explanation from './Explanation/Explanation';
import Tools from './Tools/Tools';
import Features from './Features/Features.js'
import Team from './Team/Team'
import Recipe from '../Recipe/Recipe.js'

function LandingPage(){
    return(
        <>
            <Explanation/>
            <Features/>
            <Tools/>
            <Team/>
            <Recipe/>
        </>
    )
}

export default LandingPage;