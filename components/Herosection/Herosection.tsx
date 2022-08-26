import { useSelector } from "react-redux";
import { selectState } from "../../Redux/Reducers/MoviesSlice";

const Herosection = (props: any) => {
  const state = useSelector(selectState);

  return (
    <div
      className="text-white object-contain h-[590px] overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${state?.backdrop_path}")`,
        backgroundPosition: "center center",
        position: "relative",
        width: "100%",
      }}
    >
      <div className=" ml-5 md:ml-[30px] pt-[8rem] md:pt-[13rem] h-[190px] md:w-[38rem] relative z-10">
        <h1 className="text-[3rem] font-bold pb-[0.3rem]">
          {state?.title || state?.name || state?.original_name}
        </h1>

        <div>
          <button className="bg-[#171717] hover:bg-[#262626] mr-2 px-5 py-[0.5rem] transition-all ease-in rounded">
            Read More
          </button>
        </div>

        <h1 className="w-[20rem] md:w-[45rem] leading-[1.6] text-[1.1rem] font-bold pt-[1rem] max-w-[360px] h-[80px]">
          {state?.overview?.length >= 100 &&
            state?.overview?.slice(0, 118) + "..."}
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
            " linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)",
        }}
      />
    </div>
  );
};

export default Herosection;
