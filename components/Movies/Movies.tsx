import React, { FC, useEffect } from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import MyImage from "../../shared/MyImage";

import Errorimage from "../../assests/Error.jpg";
import { useDispatch } from "react-redux";
import { FetchMoviesDetails } from "../../Redux/Reducers/MoviesSlice";

const prefixs: string = "https://image.tmdb.org/t/p/original";

interface PropsType {
  id: number;
  vote_average: string;
  poster_path: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
}

const Movies: FC<PropsType> = ({
  id,
  vote_average,
  poster_path,
  original_title,
  backdrop_path,
  overview,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      FetchMoviesDetails({
        id,
        vote_average,
        poster_path,
        original_title,
        backdrop_path,
        overview,
      })
    );
  }, [
    dispatch,
    id,
    vote_average,
    poster_path,
    original_title,
    backdrop_path,
    overview,
  ]);

  return (
    <>
      <Link
        href={`/MoviesDetails/${id}`}
        className="duration-300 transition-all  "
        key={id}
      >
        <div className="opacity-[0.8] hover:opacity-[1] cursor-pointer relative overflow-hidden md:hover:scale-105 p-2 delay-300 transition-all">
          <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem] px-3 absolute top-3 right-5 rounded-[100px] z-20">
            {vote_average}
            <AiFillStar />
          </span>

          <MyImage
            src={poster_path ? `${prefixs}${poster_path}` : Errorimage}
            alt="Movie"
            className="rounded-2xl border-2 border-red-200"
          />
          <span className="text-[1.2rem] text-center pt-2 flex items-center justify-center font-bold text-white">
            {original_title}
          </span>
        </div>
      </Link>
    </>
  );
};

export default Movies;
