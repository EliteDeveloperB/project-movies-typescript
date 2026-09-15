import { useEffect, useState } from "react"
import { getMovie } from "../api/api"
import type { MovieProps } from "../services/type"
import {FaPlayCircle}from "react-icons/fa"
import { FaStar } from "react-icons/fa6"
import { useParams } from "react-router-dom"
import Continer from "../component/continer/Continer"


function MoviePage() {
  const [movie,setMovie]= useState<MovieProps>()
  const params = useParams<{id:string}>()
    useEffect(()=>{
        getMovie(Number(params.id)).then((res)=>{
          setMovie(res)
        })
    },[])
    console.log(movie)
  return (
    <>
    <Continer>
      <div className="w-72 shadow rounded m-auto mt-16 ">
            <img className="w-full rounded-t " src={movie?.image}alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button className="my-2 ml-2 ">
                      <FaPlayCircle />
                    </button>
                    <h1 className="font-bold">{movie?.title}</h1>
                </div>
                    <div className="flex mr-1 pl-1 border-l border-gray-400 ">
                      <button>
                        <FaStar className="text-yellow-400" />
                      </button>
    
                        <h4>{movie?.rating}</h4>
                    </div>
            </div>
        </div>

    </Continer>
    </>

    
   
  )
}

export default MoviePage