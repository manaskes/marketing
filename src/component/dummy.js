import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";


function Structure({ sidebar, rightSidebar, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      setScrollTimeout(setTimeout(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;
        const scrollPosition = scrollY + windowHeight;

        // Define the thresholds for each section
        const loginThreshold = bodyHeight * 0.25; // 25% of the page height
        const documentationThreshold = bodyHeight * 0.75; // 75% of the page height

        // Determine which section the user is currently viewing based on scroll position
        if (scrollPosition < loginThreshold) {
          navigate("/");
        } else if (scrollPosition >= loginThreshold && scrollPosition < documentationThreshold) {
          navigate("/login");
        } else {
          navigate("/documentation");
        }
      }, 250)); // Wait for 250 milliseconds after scrolling stops
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [navigate, scrollTimeout]);

  return (
    <div className="flex h-screen background-image">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <nav className="flex w-100 h-full">
            <div className="w-full flex mx-auto px-6 py-8">{sidebar}</div>
          </nav>
          <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
            <div className="flex w-full mx-auto px-6 py-8">
              {children}
            </div>
          </main>
          <nav className="flex w-72 h-full">
            <div className="w-full flex mx-auto px-6 py-8">
              {rightSidebar}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Structure;
