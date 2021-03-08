const API_TOKEN = "72f1576af78d6cbbd756e719236a695f"



export function getFilmsFromApi(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
} 

export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}



export const baseURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+ API_TOKEN ;