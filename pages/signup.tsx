import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import useAuth from "../Hooks/useAuth";

const SignUp = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setuserName] = useState<string>("");
  const router = useRouter();
  const { signUp } = useAuth();

  interface Inputs {
    email: string;
    password: string;
  }

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await signUp(email, password);
    router.push("/login");
  };

  return (
    <div className="h-screen w-full  pt-[100px] bg-hero-pattern">
      <div className="flex justify-center mx-auto">
        <div className=" h-[440px]  md:bg-gradient-to-t md:from-[#141414c2] md:to-black text-white  mx-[2rem] md:w-[50%] lg:w-[40%]">
          <h1 className="text-[2rem] font-bold mb-7 text-center ">Sign UP</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center md:mx-16"
          >
            <input
              value={email}
              placeholder="Your Email"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full "
              autoComplete="off"
              {...register("email")}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-500 font-semibold mb-5">
              {errors.email?.message}
            </p>

            <input
              value={password}
              placeholder="Your password"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              autoComplete="off"
              {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 font-semibold">
              {errors?.password?.message}
            </p>

            <input
              type="submit"
              value="Sign Up"
              className="bg-[#e50914] md:text-[18px] font-semibold py-1 px-12 cursor-pointer w-full text-center  my-5 "
            />

            <div className="flex  flex-col justify-between w-full pt-2">
              <div className="text-[#737373] flex gap-3">
                <span> New User?</span>
                <Link href="/signup" className="hover:underline text-white">
                  Sign up now.
                </Link>
              </div>
              <div className="text-[#737373] flex gap-3">
                <span> you have account?</span>
                <Link href="/login" className="hover:underline text-white">
                  Sign In now.
                </Link>
              </div>
              <div>
                <h1>NedHelp?</h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
