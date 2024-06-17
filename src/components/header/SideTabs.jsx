import { NavLink } from "react-router-dom";
import Tab from "./Tab";
import Cursor from "./Cursor";
import { useState } from "react";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const activeLink = "text-blue-300 !bg-red-800 p-5";
  const inactiveLink = "text-black p-5";
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full  p-1"
    >
      <NavLink to="/">
        <Tab setPosition={setPosition}>Home</Tab>{" "}
      </NavLink>
      <NavLink to="/form">
        <Tab setPosition={setPosition}>Trucks</Tab>
      </NavLink>

      <Cursor position={position} />
    </ul>
  );
};

export default SlideTabs