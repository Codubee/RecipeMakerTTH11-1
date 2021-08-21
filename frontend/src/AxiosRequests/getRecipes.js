import axios from axios;

export function getRecipes(body){
    return axios.get('/recipe', body)
}