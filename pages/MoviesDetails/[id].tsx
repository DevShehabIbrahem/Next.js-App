import Image from "next/image";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const index = ({ MoviesDetails }: { MoviesDetails: string | any }) => {
  const prefixs: string = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <div
        className="overflow-hidden text-white object-contain h-[590px]"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${MoviesDetails?.backdrop_path}")`,
          backgroundPosition: "center center",
          position: "relative",
          width: "100%",
        }}
      >
        <div className="ml-[30px] pt-[80px] md:pt-[140px] h-[190px] md:w-[38rem] relative z-10 ">
          <h1 className="text-[3rem] font-bold pb-[0.3rem]">
            {MoviesDetails?.title ||
              MoviesDetails?.name ||
              MoviesDetails?.original_name}
          </h1>
        </div>

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)",
          }}
        />

        <div className="relative top-28 left-3 md:left-10 ">
          <Image
            src={
              MoviesDetails?.poster_path &&
              `${prefixs}${MoviesDetails?.poster_path}`
            }
            alt="poster"
            className=" z-50 rounded-2xl"
            width={200}
            height={300}
          />
        </div>
      </div>

      {/* Details */}
      <div className=" mb-[9rem] md:mb-[5rem] space-y-9 text-[1.5rem]  mt-11 px-5 md:px-0 md:ml-12 max-w-2xl  text-white ">
        <div className="space-x-6">
          <span className="title_span">Name</span>
          <span>{MoviesDetails?.title || MoviesDetails.original_title}</span>
        </div>

        <div className=" flex items-center space-x-6">
          <span>Story</span>
          <span>
            {MoviesDetails?.overview.length >= 100 &&
              MoviesDetails?.overview.slice(0, 100)}
          </span>
        </div>

        <div className="flex items-center">
          <span className="mr-8">Rate</span>
          <span>
            <CircularProgressbar
              className="w-[7rem] h-[7rem] "
              value={MoviesDetails?.vote_average}
              text={MoviesDetails?.vote_average + "%"}
            />
          </span>
        </div>

        <div className="space-x-6">
          <span className="">date</span>
          <span>{MoviesDetails?.release_date} </span>
        </div>

        <div className="space-x-6">
          <span>language</span>
          <span>{MoviesDetails?.original_language} </span>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center md:flex-row gap-2 md:gap-5 ">
          <p>Type</p>
          <span className="flex flex-wrap md:flex-nowrap items-center gap-5">
            {MoviesDetails?.genres?.map(({ name }: { name: string }) => (
              <span
                className="text-white text-[0.8rem]  border   border-red-500 text-center rounded-[100px] px-5 py-1 gap-5 w-auto"
                key={name}
              >
                <span className="font-bold text-white">{name}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  const paths = data.results.map((i: any) => {
    return {
      params: { id: i.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const data = await res.json();
  return {
    props: { MoviesDetails: data },
  };
};
