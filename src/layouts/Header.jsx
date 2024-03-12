import { useState } from "react";
import { Logo } from "../components/Components";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { BtnNavCollapse, NavCollapse, SidebarCollapse } from "../components/Collapses";
import { useSelector } from "react-redux";
const menus = ["home", "components", "hooks", "accessibility", "mini projects"];

export const Header = () => {
  const [dark, setDark] = useState(false);
  const { sidebarList } = useSelector((state) => state.collapse);

  return (
    <>
      <header
        className={`z-50 border-b h-16 w-full sticky top-0 flex px-3 lg:px-16 items-center gap-4 sm:gap-4 md:gap-8 bg-white sm:bg-transparent sm:backdrop-blur justify-between`}
      >
        <Logo />
        <BtnNavCollapse />
        <NavCollapse id="no-collapse-nav" menus={menus} />
        <div className="flex items-center gap-3 text-xl sm:text-2xl sm:order-2 w-full sm:w-min">
          <button onClick={() => setDark(!dark)} className="relative w-5 sm:w-6 h-5 sm:h-6 overflow-hidden">
            <FaSun className={`${dark ? "top-full" : "top-0"} absolute transition-all duration-0-100`} />
            <FaMoon className={`${dark ? "top-0" : "-top-full"} absolute transition-all duration-0-100`} />
          </button>
          <a href="/">
            <FaGithub />
          </a>
        </div>
      </header>
      <NavCollapse id="collapse-nav" menus={menus} />
      <SidebarCollapse className={`${sidebarList.length > 0 ? "block" : "hidden"} sm:translate-y-0`} />
    </>
  );
};
