import { useEffect, useState } from "react";

const useLockScroll = () => {
  const style = document.body.style;
  const [isLocked, setIsLocked] = useState(style.overflowY === "auto");
  useEffect(() => {
    style.overflowY = isLocked ? "auto" : "hidden";
  }, [isLocked, style]);
  const toggle = () => setIsLocked(!isLocked);
  return [isLocked, toggle];
};

export default useLockScroll;
