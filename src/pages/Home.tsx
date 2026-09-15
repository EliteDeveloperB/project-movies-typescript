import { useEffect, useState } from "react"
import { getMovies } from "../api/api"
import Movie from "../component/Movie"
import type {MovieProps} from "../services/type"
import { Link } from "react-router-dom"
import Continer from "../component/continer/Continer"


function Home() {
  const [movies,setMovies] = useState<MovieProps[]>([])
 useEffect(()=>{
    getMovies().then((res)=>{
      setMovies(res)
   })
 },[])
 console.log(movies)
  return (
    <>
   <Continer>
    <div className="p-4">
      <h1 className="text-2xl font-bold  my-2">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        movies.map((item)=>(
          <Link to={`/movie/${item.id}`}>
        <Movie key={item.id} {...item}/> 
      </Link>
      ))
    }
 </div>
    </div>

    </Continer>
    </>
  )
}

export default Home
