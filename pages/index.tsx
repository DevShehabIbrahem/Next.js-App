import type { NextPage } from "next";

import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Movies from "../components/Movies/Movies";
import Herosection from "../components/Herosection/Herosection";
import Sidebar from "../components/sidebar/Sidebar";

interface datatype {
  results: [];
}

const Home: NextPage<datatype> = (props): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Herosection props={props} />
      <div className="flex">
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center justify-items-center my-[5rem]">
          {props?.results?.map((m: any) => (
            <Movies {...m} key={m?.id} />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return {
    props: data,
  };
};
