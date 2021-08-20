import axios from 'axios';
import { postYouTubeVideos } from '../../AxiosRequests/postYouTubeVideos';

/**
 *  Use Jest to mock Axios to test async requests
 */
jest.mock('axios');

describe('YouTube Recipe Videos', () => {
    const body = { 
        recipe: 'steak' 
    };
    const urls = [
        "https://www.youtube.com/watch?v=nsw0Px-Pho8",
        "https://www.youtube.com/watch?v=AmC9SmCBUj4",
        "https://www.youtube.com/watch?v=kbpIYAnt-7k",
        "https://www.youtube.com/watch?v=5jDEfyXtEyQ",
        "https://www.youtube.com/watch?v=nPsL6CFOwsQ",
        "https://www.youtube.com/watch/dAJq1FoXMFY",
        "https://www.youtube.com/watch?v=ir5U88d_3iI",
        "https://www.youtube.com/watch?v=bTdjweyIhnE",
        "https://www.youtube.com/watch?v=INiAM1u925E"
    ];


    it('should get YouTube urls', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(urls));
        await expect(postYouTubeVideos(body)).resolves.toEqual(urls);
        expect(axios.post).toHaveBeenCalledWith('/youtubeRecipe', body);
    })

    it ('should fail to get YouTube urls', async () => {
        const errorMessage = 'Error doing post request.';
        axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(postYouTubeVideos(urls)).rejects.toThrow(errorMessage);
    })
})