// import axios from "axios";

import axios from "axios";

const client = axios.create({
    baseURL:"http://localhost:8003"
});
export async function getMovies(){
    const {data} = await client("/Movies")
    return data;
}
export async function getMovie(id:number){
    const {data} = await client(`/Movies/${id}`)
    return data;
}