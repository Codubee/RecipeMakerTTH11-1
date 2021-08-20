import React from 'react';
import axios from 'axios';
import './YouTubeVideo.css';
import { postYouTubeVideos } from '../../AxiosRequests/postYouTubeVideos';
import { CardDeck } from 'reactstrap';
import ReactPlayer from "react-player";

class YouTubeVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // recipeName is passed in as a prop so that it can be determined by the component using the Recipe Search API
            recipeName: props.recipe,
            recipeLinks: []
        };
    }

    componentDidMount() {
        console.log(this.state.recipeName);

        const body = {
            recipe: this.state.recipeName
        }

        // The imported post request to the YouTube API from postYouTubeVideos.js
        postYouTubeVideos(body)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    recipeLinks: response.data.urls
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render () {
        /**
         *  Use the urls array for use in the map method to display all videos to the user
         *  NOTE: Install the React Player component with npm install react-player before running
         */
        return (
            <div className='youtube-video-div'>
                <h1 className='display-4'>Try out these recipes!</h1>
                <hr className='my-4' id='break' />
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