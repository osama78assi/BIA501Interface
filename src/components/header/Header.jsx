import { NavLink } from "react-router-dom";
import SlideTabsExample from "./SideTabsExample";

const Header = () => {
  return (
    <div className="header-main w-ful bg-blue-300 flex flex-row justify-between items-center px-10">
      <div>
        <h1 className="select-none">
          <NavLink to="/" className="text-gray-700 font-bold">
            BIA ASSIGNMENT
          </NavLink>
        </h1>
      </div>
      <div>
        <SlideTabsExample />
      </div>
    </div>
  );
};

export default Header;
