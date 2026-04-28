"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-photos"}>All Photos</NavLink>
          </li>
          <li>
            <NavLink href={"/pricing"}>Pricing</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link href={"/signup"}>
                <button className="btn  bg-gray-400 text-white px-5 py-2 rounded-lg font-bold cursor-pointer">
                  SignUp
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/signin"}>
                <button className="btn  bg-gray-400 text-white px-5 py-2 rounded-lg font-bold cursor-pointer">
                  SignIn
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
