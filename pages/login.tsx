import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import useAuth from "../Hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

const SignIn = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [login, setLogin] = useState<boolean>(false);

  const { signIn, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    }
  };

  return (
    <div className="h-screen w-full cover pt-[100px] bg-hero-pattern">
      <div className="flex justify-center">
        <div className="form h-[440px]  md:bg-gradient-to-t md:from-[#141414c2] md:to-black text-white  mx-[2rem]  md:w-[50%] lg:w-[40%] ">
          <h1 className="text-[2rem] font-bold mb-7 text-center ">Sign In</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col items-center h-full space-y-[20px] md:mx-16"
          >
            <input
              value={email}
              placeholder="Your Email"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              autoComplete="off"
              {...register("email", { required: true })}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="text-red-500 font-semibold">
              {errors.email?.message}
            </p>

            <input
              type="password"
              value={password}
              placeholder="Your password"
              className="py-2 pl-3 rounded bg-[#333333] outline-none w-full"
              autoComplete="off"
              {...register("password", { required: true })}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 font-semibold">
              {errors.password?.message}
            </p>

            <input
              type="submit"
              value="SignIn"
              className="bg-[#e50914] md:text-[18px] font-semibold py-1 px-12 cursor-pointer w-full text-center "
              onClick={() => setLogin(true)}
            />

            <div className="flex justify-between w-full">
              <div className="text-[#737373] flex gap-3">
                <span> New User?</span>
                <Link
                  href="/signup"
                  className="hover:underline text-white"
                  onClick={() => setLogin(false)}
                >
                  Sign up now.
                </Link>
              </div>
              <div>
                <h1>NedHelp?</h1>
              </div>
            </div>

            <p className="text-red-500 font-semibold">
              {error && "This account does not exist"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
