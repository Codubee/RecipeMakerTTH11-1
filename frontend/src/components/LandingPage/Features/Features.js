/* 
    This component will have a title and a description of the features 
    Features include: 
        - snap a picture or manually enter ingredients
        - getting recipes with ingredients you have
        - seeing nutritional information
        - and getting videos to go along with your recipe
*/

//src="https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg" 

import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Jumbotron } from 'reactstrap';
import './Features.css'

// constant for the card used throughout this file
const FeaturesCard = (props) => {
    return(
        <Card>
            <CardImg 
                top width="50%" 
                src={props.img} 
                alt={props.alttext} />
            <CardBody>
                <CardTitle tag="h5"><div>{props.title}</div></CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text muted">{props.sub}</CardSubtitle>
                <CardText>
                    {props.text}
                </CardText>
            </CardBody>
        </Card>
    );
};

// function displayed on screen
function Features(){
    return(
       <>
        <Jumbotron>
            <h1 id="features-header" className="display-4">Features</h1>
        </Jumbotron>
        <CardDeck>
        <FeaturesCard
            img = "https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg" 
            alttext = "picture of ingredients"
            title = "Snap a Picture or Manual Insert"
            sub = "Entry made easy"
            text = "We let you choose how you'd like to enter your ingredients.
                        Center your camera on your ingredients or manually insert your ingredients."
        />
        <FeaturesCard
            img = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
            alttext = "recipe on a phone"
            title = "Recipes Based on Your Ingredients"
            sub = "Reduce searching"
            text = "It is difficult finding recipes with all the ingredients you have. 
                        We reduce your searching by displaying possible recipes with the ingredients given."
        />
        <FeaturesCard
            img = "https://cdn.pixabay.com/photo/2018/04/28/08/26/menu-3356826_1280.jpg"  
            alttext = "different food groups"
            title = "Get Nutritional Information"
            sub = "Upfront clarity"
            text = "Not all recipes are made equal and neither is nutrition.
                        Along with the recipe, we provide the nutritional information.
                        We want you to be as informed as possible about your decision."
        />
        <FeaturesCard
            img = "https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_1280.jpg"
            alttext = "youtube on a phone"
            title = "Watch the Videos"
            sub = "Visually follow along"
            text = "Videos are always nice, especially when making a new recipe.
                        We make sure to provde a video to reduce the time you would spend searching for a follow along."
        />
        </CardDeck>
        </> 
    );
}

// function Features() {
//     return(
//         <>
//         <Jumbotron>
//             <h1 id="features-header" className="display-4">Features</h1>
//         </Jumbotron>
//         <CardDeck>
//             <Card>
//                 <CardImg 
//                     top width="50%" 
//                     src="https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg" 
//                     alt="picture of ingredients" />
//                 <CardBody>
//                     <CardTitle tag="h5">Snap a Picture or Manual Insert</CardTitle>
//                     <CardSubtitle tag="h6" className="mb-2 text muted">Entry made easy</CardSubtitle>
//                     <CardText>
//                         We let you choose how you'd like to enter your ingredients.
//                         Center your camera on your ingredients or manually insert your ingredients.
//                     </CardText>
//                 </CardBody>
//             </Card>

//             <Card>
//                 <CardImg 
//                     top width="50%" 
//                     src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" 
//                     alt="recipe on a phone" />
//                 <CardBody>
//                     <CardTitle tag="h5">Recipes Based on Your Ingredients</CardTitle>
//                     <CardSubtitle tag="h6" className="mb-2 text muted">Reduce searching</CardSubtitle>
//                     <CardText>
//                         It is difficult finding recipes with all the ingredients you have. 
//                         We reduce your searching by displaying possible recipes with the ingredients given.
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </CardDeck>

//         <CardDeck>
//             <Card>
//                 <CardImg 
//                     top width="50%" 
//                     src="https://cdn.pixabay.com/photo/2018/04/28/08/26/menu-3356826_1280.jpg" 
//                     alt="different food groups" />
//                 <CardBody>
//                     <CardTitle tag="h5">Get Nutritional Information</CardTitle>
//                     <CardSubtitle tag="h6" className="mb-2 text muted">Upfront clarity</CardSubtitle>
//                     <CardText>
//                         Not all recipes are made equal and neither is nutrition.
//                         Along with the recipe, we provide the nutritional information.
//                         We want you to be as informed as possible about your decision.
//                     </CardText>
//                 </CardBody>
//             </Card>

//             <Card>
//                 <CardImg 
//                     top width="50%" 
//                     src="https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_1280.jpg" 
//                     alt="youtube on a phone" />
//                 <CardBody>
//                     <CardTitle tag="h5">Watch the Videos</CardTitle>
//                     <CardSubtitle tag="h6" className="mb-2 text muted">Visually follow along</CardSubtitle>
//                     <CardText>
//                         Videos are always nice, especially when making a new recipe.
//                         We make sure to provde a video to reduce the time you would spend searching for a follow along.
//                     </CardText>
//                 </CardBody>
//             </Card>
//         </CardDeck>
//         </>
//     );
// }


export default Features;