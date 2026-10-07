// import axios from "axios";

import axios from "axios";

const client = axios.create({
    baseURL:"https://6ac69ae7bea0e72cf5c92bfb.mockapi.io/"
});
export async function getMovies(){
    const {data} = await client("/movies")
    return data;
}
export async function getMovie(id:number){
    const {data} = await client(`/movies/${id}`)
    return data;
}