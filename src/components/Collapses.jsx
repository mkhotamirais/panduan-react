import { useDispatch, useSelector } from "react-redux";
import { setActiveNav, setCurrentNav, setOpenNav, setOpenSidebar, setSidebarList } from "../app/features/collapseSlice";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const BtnNavCollapse = () => {
  const dispatch = useDispatch();
  const { openNav } = useSelector((state) => state.collapse);
  return (
    <button
      onClick={() => dispatch(setOpenNav())}
      className={`order-2 block sm:hidden ${openNav && "rotate-180"} transition-all duration-300`}
    >
      {openNav ? <FaTimes className="text-xl text-cyan-500" /> : <FaBars className="text-xl text-cyan-500" />}
    </button>
  );
};

export const BtnSidebarCollapse = ({ className }) => {
  const { openSidebar } = useSelector((state) => state.collapse);
  const dispatch = useDispatch();

  const onSidebarClick = () => {
    dispatch(setOpenSidebar());
  };

  return (
    <button className={`${className} flex`} onClick={() => onSidebarClick()}>
      <TbLayoutSidebarRightCollapse
        className={`block sm:hidden text-2xl ${openSidebar ? "rotate-180" : "rotate-0"} transition-all duration-200`}
      />
    </button>
  );
};
BtnSidebarCollapse.propTypes;

export const NavCollapse = ({ id, menus }) => {
  const dispatch = useDispatch();
  const { activeNav, openNav } = useSelector((state) => state.collapse);
  const location = useLocation();
  const path = location.pathname.split("/");

  useEffect(() => {
    if (path[1] == "") path[1] = "home";
    dispatch(setActiveNav(path[1]?.split("-")?.join(" ")));
  }, [dispatch, path]);

  const contentMenus = menus.map((menu) => (
    <NavLink
      onClick={() => {
        dispatch(setCurrentNav(menu));
        dispatch(setActiveNav(menu));
        dispatch(setOpenNav());
      }}
      className={`${
        activeNav === menu ? "text-cyan-600" : "text-gray-600"
      } capitalize hover:text-cyan-500 font-medium w-full sm:w-auto p-2 sm:p-0 border-b sm:border-none`}
      key={menu}
      to={menu === "home" ? "" : menu.split(" ").join("-")}
    >
      {menu}
    </NavLink>
  ));

  let content;
  if (id == "no-collapse-nav") {
    content = <div className={`hidden sm:flex flex-row items-start gap-3 w-full`}>{contentMenus}</div>;
  } else if (id == "collapse-nav") {
    content = (
      <div
        onClick={() => dispatch(setOpenNav())}
        className={`z-40 fixed sm:hidden top-0 left-0 right-0 ${
          openNav ? "bottom-0" : "bottom-full"
        } transition-all duration-200`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-16 ${
            openNav ? "translate-y-0" : "-translate-y-full"
          } bg-white border p-3 rounded-b-lg flex flex-col gap-3 w-full transition-all duration-200`}
        >
          {contentMenus}
        </div>
      </div>
    );
  }
  return content;
};
NavCollapse.propTypes;

export const ContentSidebar = () => {
  const [active, setActive] = useState(null);
  const { activeNav, sidebarList } = useSelector((state) => state.collapse);
  const location = useLocation();
  const path = location.pathname.split("/");
  const dispatch = useDispatch();

  useEffect(() => {
    setActive(path[2]?.split("-").join(" "));
  }, [dispatch, path]);

  let content;
  if (sidebarList.length > 0) {
    content = sidebarList.map((item) => (
      <NavLink
        onClick={() => {
          setActive(item);
          dispatch(setOpenSidebar());
        }}
        to={`/${activeNav.split(" ").join("-")}/${item.split(" ").join("-")}`}
        key={item}
        className={`${
          active === item ? "text-white bg-cyan-500" : "text-gray-500 bg-gray-50"
        } hover:bg-cyan-200 rounded p-2 capitalize`}
      >
        {item}
      </NavLink>
    ));
  } else {
    content = <div className="text-center italic  ">Empty</div>;
  }

  return (
    <>
      <div className="flex gap-2 items-center sm:justify-center mb-3">
        <button onClick={() => dispatch(setOpenSidebar())} className="block sm:hidden text-gray-600 hover:text-red-600">
          <FaTimes className="text-xl" />
        </button>
        <h2 className="capitalize font-medium text-center text-cyan-600">{activeNav.split("-").join(" ")} menu</h2>
      </div>
      <div className="flex flex-col gap-2">{content}</div>
    </>
  );
};

export const SidebarCollapse = () => {
  const { openSidebar, openNav } = useSelector((state) => state.collapse);
  const dispatch = useDispatch();

  const onSidebarClick = () => {
    dispatch(setOpenSidebar());
    openNav ? dispatch(setOpenNav()) : null;
  };

  return (
    <div
      onClick={() => onSidebarClick()}
      className={`fixed sm:hidden top-16 bottom-0 right-0 left-0 ${
        openSidebar ? "z-10 opacity-100" : "opacity-0 -z-10"
      } transition-all duration-200 backdrop-blur backdrop-filter`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-r-md w-56 h-full border-r ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-200 p-3`}
      >
        <ContentSidebar />
      </div>
    </div>
  );
};

export const Sidebar = ({ className }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const dispatch = useDispatch();

  useEffect(() => {
    if (path[1] == "" || path[1] == "home") {
      dispatch(setSidebarList(["referensi", "ringkasan", "vanilla components", "tips"]));
    } else if (path[1] === "components") {
      dispatch(setSidebarList(["accordion", "pagination", "carousel"]));
    } else if (path[1] === "hooks") {
      dispatch(setSidebarList(["lifecycleclass", "usestate", "useeffect", "usecallback", "customhook"]));
    } else if (path[1] === "accessibility") {
      dispatch(setSidebarList([]));
    } else if (path[1] === "mini-projects") {
      dispatch(setSidebarList(["react crud", "redux crud"]));
    } else dispatch(setSidebarList([]));
  }, [dispatch, path]);

  return (
    <aside className={`${className} hidden sm:block`}>
      <ContentSidebar />
    </aside>
  );
};
Sidebar.propTypes;
