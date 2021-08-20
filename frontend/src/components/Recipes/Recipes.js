import react from 'react';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo'
import { Jumbotron } from 'reactstrap';
import Recipe from '../Recipe/Recipe';

function Recipes() {
    //return <h2>Find a recipe</h2>
    return (
        <div >
            <Jumbotron className="jumbotron-style">
                <h1 className="display-3" >Find a recipe</h1>
            </Jumbotron>
            <Recipe/>
            <YouTubeVideo recipe='carbonara' />
        </div>
    );
}
export default Recipes;