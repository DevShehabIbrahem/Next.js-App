import { AiFillStar } from "react-icons/ai";

import ErrorImge from "../assests/Error.jpg";
import MyImage from "./MyImage";
import Link from "next/link";
import { NextPage } from "next";
import { selectState } from "../Redux/Reducers/MoviesSlice";
import { useSelector } from "react-redux";
import Image from "next/image";

const prefixs: string = "https://image.tmdb.org/t/p/original";
interface datatype {
  results?: [];
}
const RowSidebar: NextPage<datatype> = (): JSX.Element => {
  const state = useSelector(selectState);
  return (
    <>
      <div className="flex justify-center items-center opacity-[0.8] hover:opacity-[1] duration-300 transition-all ">
        <Link href={`/MoviesDetails/${state?.id}`} className="flex">
          <div className="overflow-hidden  mt-5 w-full  ">
            <MyImage
              src={
                state?.poster_path
                  ? `${prefixs}${state?.poster_path}`
                  : ErrorImge
              }
              alt=""
              width={"7rem"}
            />
          </div>
        </Link>

        <div className="flex flex-col justify-center items-center mt-5 ml-1 gap-[2rem] ">
          <span className="flex items-center gap-2 bg-red-600 text-white text-[1rem]  px-[9px] rounded-[100px] ">
            {state?.vote_average}
            <AiFillStar />
          </span>

          <span className="text-[1rem] text-center pt-2 flex items-center justify-center font-bold text-white">
            {state?.original_title}
          </span>
          <span className="text-[1rem] text-center pt-2 flex items-center justify-center font-bold">
            {state?.release_date}
          </span>
        </div>
      </div>
    </>
  );
};

export default RowSidebar;
