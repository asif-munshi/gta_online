"use client";

import { useState, useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {showTopBtn && (
        <ArrowSmallUpIcon
          className="fixed bottom-10 right-6 z-20 h-12 w-12 animate-bounce cursor-pointer rounded-full border-2 border-white bg-blue-600 text-white transition-all ease-in-out"
          onClick={goToTop}
          strokeWidth={2}
        />
      )}
    </div>
  );
}
