import React from 'react';
import axios from 'axios';
import './YouTubeVideo.css';
import {Button, Card, CardDeck, Col, Row} from 'reactstrap';
import ReactPlayer from "react-player";

 /**
  *  Hardcoded urls array for testing
  * 
  *  const urls = [
     "https://www.youtube.com/watch?v=nsw0Px-Pho8",
     "https://www.youtube.com/watch?v=AmC9SmCBUj4",
     "https://www.youtube.com/watch?v=kbpIYAnt-7k",
     "https://www.youtube.com/watch?v=5jDEfyXtEyQ",
     "https://www.youtube.com/watch?v=nPsL6CFOwsQ",
     "https://www.youtube.com/watch/dAJq1FoXMFY",
     "https://www.youtube.com/watch?v=ir5U88d_3iI",
     "https://www.youtube.com/watch?v=bTdjweyIhnE",
     "https://www.youtube.com/watch?v=INiAM1u925E"
] */


class YouTubeVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // recipeName is passed in as a prop so that it can be determined by the component using the Recipe Search API
            recipeName: props.recipe,
            recipeLinks: []
        };
    }

    // Change 
    componentDidMount() {
        console.log(this.state.recipeName);

        const body = {
            recipe: this.state.recipeName
        }
        
        axios.post('/youtubeRecipe', body)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    recipeLinks: response.data.urls
                });
                console.log(this.state);
            });
    }

    render () {
        /**
         *  Use the urls array for use in the map method to display all videos to the user
         */
        return (
            <div className='youtube-video-div'>
                <h1 className='display-4'>Try out these recipes!</h1>
                <CardDeck>
                    {this.state.recipeLinks.map((url) => (
                        <div className='each-video'>
                            <ReactPlayer url={url} controls='true' width='480px' height='270px'/>
                        </div>
                    ))}
                </CardDeck>
            </div>
        );

    }
}

export default YouTubeVideo;