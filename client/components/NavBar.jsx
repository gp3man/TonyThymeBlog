import React from "react";
import { NavLink } from "react-router-dom";
import ThemeController from "./ThemeSwitcher.jsx";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <section
      id="NavBar"
      className="fixed top-0 left-0 right-0 h-[58px] w-screen p-4 z-40 flex flex-row opacity-90 dark:opacity-80 bg-slate-600 dark:bg-gray-900 text-slate-300  dark:text-slate-100 shadow justify-around"
    >
      <div className="text-slate-50 dark:text-slate-50 italic font-extralight  top-[50%] cursor-pointer">
        <p className="mobi:text-xs sm:text-2xl bg-gradient-to-t from-slate-50 to-green-500 bg-clip-text text-transparent">Tony Thyme</p>
      </div>

      <div className="flex flex-row text-slate-300 dark:text-slate-200 pr-4  justify-around">
        {location.pathname === "/" && (
          <NavLink to={"/Recipes"}>
            <p className="border-green-500 hover:text-blue-400 dark:border-green-300 border-opacity-30 border-r-2 px-3 cursor-crosshair mobi:text-xs sm:text-base">
            Recipes
            </p>
          </NavLink>
        )}
        {location.pathname === "/Recipes" && (
          <NavLink to={"/"}>
            <p className="border-green-500 hover:text-blue-400 dark:border-green-300 border-opacity-30 border-r-2 px-3 cursor-crosshair mobi:text-xs sm:text-base">
              Home
            </p>
          </NavLink>
        )}
        {location.pathname === "/" && (
          <a
            className="border-green-500 dark:border-green-300 hover:text-blue-400 border-opacity-30 border-r-2 px-3 cursor-crosshair mobi:text-xs sm:text-base"
            onClick={handleScroll}
          >
            Contact
          </a>
        )}
        <ThemeController />
      </div>
    </section>
  );
};
const handleScroll = (evt) => {
  evt.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
export default NavBar;
