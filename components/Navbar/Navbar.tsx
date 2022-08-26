import { useState, useEffect } from "react";
import logo from "../../assests/logo.png";
import userimage from "../../assests/userProfile.png";

import MobileMenu from "../mobileMenu/MobileMenu";
import { AiOutlineMenu } from "react-icons/ai";
import { words } from "../../shared/words";

import Link from "next/link";
import Image from "next/image";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [navChange, setNavChange] = useState<boolean>(false);
  const [state, setState] = useState<boolean>(false);
  const { logout } = useAuth();

  const navChanged: string =
    "bg-black fixed w-full top-0 transition-all ease-in flex justify-between items-center px-5 py-1 z-30 ";

  const navNoChange: string =
    "bg-transparent fixed w-full top-0  transition-all ease-in flex justify-between items-center px-5 py-1 z-30";

  const NavbarChange = () => {
    if (window.scrollY >= 300) {
      setNavChange(true);
    } else {
      setNavChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavbarChange);
    return () => window.removeEventListener("scroll", NavbarChange);
  }, []);

  return (
    <div className={`${navChange ? navChanged : navNoChange}`}>
      <div className="flex items-center justify-between gap-20 p-1">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="mr-4"
            width={"60px"}
            height={"60px"}
          />
        </Link>

        <div className="hidden md:flex items-center text-white space-x-4 font-semibold">
          <Link href="/">Home</Link>
          {words.navlink.map((n: any) => (
            <Link href="/" key={n}>
              {n}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-2 gap-5 relative">
        <Image
          src={userimage}
          alt="user"
          className="mr-4"
          width={"60px"}
          height={"60px"}
          onClick={logout}
        />
      </div>

      {/* Mobile-Menu */}
      <span className="flex text-[2rem] cursor-pointer text-white md:hidden">
        <AiOutlineMenu onClick={() => setState(!state)} />
      </span>
      {state && <MobileMenu setState={setState} />}
    </div>
  );
};

export default Navbar;
