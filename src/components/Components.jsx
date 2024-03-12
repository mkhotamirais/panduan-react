import { FaEdit, FaExclamationCircle, FaEye, FaPlus, FaReact, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { BtnSidebarCollapse } from "./Collapses";
import { parseISO, formatDistanceToNow } from "date-fns";

export const Logo = () => (
  <a href="/" className="flex items-center gap-1">
    <FaReact className="text-2xl sm:text-3xl text-cyan-400" />
    <div className="flex flex-col text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
      <span className="leading-none sm:leading-none text-base sm:text-lg font-semibold">ReactJs</span>
      <span className="text-xs sm:text-sm">panduan</span>
    </div>
  </a>
);

export const Title = ({ title }) => {
  const { sidebarList } = useSelector((state) => state.collapse);
  return (
    <div className="inline-flex gap-2 items-center">
      <BtnSidebarCollapse className={`${sidebarList.length > 0 ? "block" : "hidden"} sm:hidden`} />
      <H1>{title}</H1>
    </div>
  );
};
Title.propTypes;

export const Loading = () => (
  <div className="flex justify-center mt-12">
    <PiSpinner className="text-2xl animate-spin" />
  </div>
);

export const Err = ({ children }) => (
  <div className="flex flex-col items-center gap-3 justify-center mt-12">
    <div className="text-rose-500 italic">{children}</div>
    <Prev />
  </div>
);
Err.propTypes;

export const Prev = ({ className }) => (
  <Link to={-1} className={`${className} text-sm inline-block hover:text-blue-600`}>
    <FaArrowLeft />
  </Link>
);
Prev.propTypes;

export const Next = ({ className }) => {
  return (
    <Link to={1} className={`${className} text-sm inline-block hover:text-blue-600`}>
      <FaArrowRight />
    </Link>
  );
};
Next.propTypes;

export const H1 = ({ children = "H1", className }) => (
  <div className={`${className} text-xl font-medium capitalize my-2`}>{children}</div>
);
H1.propTypes;

export const Breadcrumb = ({ className }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  path[0] = <FaHome className="inline-block" />;
  let content;
  content = path.map((p, i) => {
    let to;
    if (i === 0) to = "..";
    else if (p === "detail" || p === "update") to = "#";
    else to = "/" + location.pathname.split("/").splice(1, path.indexOf(p)).join("/");
    return (
      <Link to={to} key={p} className="hover:underline hover:opacity-70">
        <span className="mr-0">{p.length ? p.split("-").join(" ") : p}</span>
        <span>{i !== path.length - 1 ? <FaChevronRight className="inline-block text-xs mx-1 text-gray-400" /> : null}</span>
      </Link>
    );
  });

  return (
    <div
      className={`${className} text-sm text-gray-700 flex items-center mt-1 mb-2 bg-blue-50 bg-opacity-50 py-2 px-2 rounded border-b border-blue-400`}
    >
      <div className="flex mr-5 gap-3 items-center">
        <Prev />
        <Next />
      </div>
      <div className="leading-none">{content}</div>
    </div>
  );
};
Breadcrumb.propTypes;

export const GridCard = ({ children = "GridCard", className }) => (
  <div className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2`}>
    {children}
  </div>
);
GridCard.propTypes;

export const Menus = ({ menus }) => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const [active, setActive] = useState(null);
  useEffect(() => {
    setActive(pathArr[2]);
  }, [pathArr]);
  return (
    <div className="flex gap-2 border-b py-1 px-2 mb-2 text-gray-700">
      {menus.map((m) => (
        <Link
          onClick={() => setActive(m)}
          key={m}
          to={m === "home" ? "" : m}
          className={`${active === m ? "text-blue-600" : ""} capitalize`}
        >
          {m}
        </Link>
      ))}
    </div>
  );
};
Menus.propTypes;

export const PostBtn = ({ className }) => (
  <div className={`${className}`}>
    <Link to="post" className="flex items-center justify-center my-2 text-white w-6 h-6 bg-blue-500 rounded-full">
      <FaPlus className="text-sm" />
    </Link>
  </div>
);
PostBtn.propTypes;

export const Actions = ({ className, modalView, modalDelete, id }) => {
  return (
    <div className={`${className} flex w-full border border-blue-300 rounded-lg justify-around p-2`}>
      <button onClick={modalView} className="text-blue-500 hover:opacity-70">
        <FaEye />
      </button>
      <Link to={`detail/${id}`} className="text-yellow-500 hover:opacity-70">
        <FaExclamationCircle />
      </Link>
      <Link to={`update/${id}`} className="text-green-500 hover:opacity-70">
        <FaEdit />
      </Link>
      <button onClick={modalDelete} className="text-red-500 hover:opacity-70">
        <FaTrash />
      </button>
    </div>
  );
};
Actions.propTypes;

export const TimeAgo = ({ time, className }) => {
  let timeAgo = "";
  if (time) {
    const date = parseISO(time);
    const period = formatDistanceToNow(date);
    timeAgo = `${period} ago`;
  }
  return <span className={`${className} text-sm`}>{timeAgo}</span>;
};
TimeAgo.propTypes;
