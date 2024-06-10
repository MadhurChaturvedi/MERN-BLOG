import React from "react";
import { Button, Navbar, Label, TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2" fluid rounded>
      <Link
        to="/"
        className=" self-center whitespace-nowrap text-sm sm:text-xl dark:text-white"
      >
        <Button className="" outline gradientDuoTone="purpleToPink">
          Blog's
        </Button>
      </Link>
      <form>
        <TextInput
          id="Search"
          type="Search"
          rightIcon={CiSearch}
          placeholder="Search"
          required
          className=" hidden lg:inline"
        />
      </form>
      <Button
        className=" lg:hidden"
        outline
        gradientDuoTone="purpleToPink"
        pill
      >
        <CiSearch />
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
        >
          <IoMoonOutline />
        </Button>
        <Link to="/signin">
          <Button className=" " outline gradientDuoTone="purpleToBlue">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
