import type{ MovieProps } from "../services/type"
type TMovie = MovieProps;
import {FaPlayCircle}from "react-icons/fa"
import { FaStar } from "react-icons/fa6"

function Movie({image,title,rating}: TMovie) {
  return (
    <div className="shadow rounded h-full  ">
        <img className="w-full rounded-t " src={image}alt="" />
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <button className="my-2 ml-2 ">
                  <FaPlayCircle />
                </button>
                <h1 className="font-bold">{title}</h1>
            </div>
                <div className="flex mr-1 pl-1 border-l border-gray-400 ">
                  <button>
                    <FaStar className="text-yellow-400" />
                  </button>

                    <h4>{rating}</h4>
                </div>
        </div>
    </div>

  )
}

export default Movie