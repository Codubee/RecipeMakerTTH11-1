import react from 'react';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo'
import { Jumbotron } from 'reactstrap';

function Recipes() {
    //return <h2>Find a recipe</h2>
    return (
        <div >
            <Jumbotron className="jumbotron-style">
                <h1 className="display-3" >Find a recipe</h1>
            </Jumbotron>
            <YouTubeVideo recipe='carbonara' />
        </div>
    );
}
export default Recipes;