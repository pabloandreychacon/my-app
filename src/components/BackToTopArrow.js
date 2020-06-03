import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./BackToTopArrow.scss";

const BackToTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 30) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 30) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default BackToTopArrow;
