import axios from 'axios';

/**
 *  Function used to perform the axios post request
 *  Separated from the rest of the request to allow for cleaner YouTubeVideo.test.js
 * 
 *  @param { string } body 
 */
export function postYouTubeVideos(body) {
    return axios.post('/youtubeRecipe', body)
}