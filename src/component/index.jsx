import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const pages = ["/", "/login", "/documentation", "/documentation"];

function Structure({ sidebar, rightSidebar, children }) {
    const navigate = useNavigate();
    const containerRef = useRef(null); // Reference to the element that captures the scroll event
    let pageIndex = pages.indexOf(window.location.pathname); // Current index of the page based on the route

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            // Scroll down
            if (pageIndex < pages.length - 1) {
                pageIndex += 1;
                navigate(pages[pageIndex]);
            }
        } else {
            // Scroll up
            if (pageIndex > 0) {
                pageIndex -= 1;
                navigate(pages[pageIndex]);
            }
        }
    };

    // Adding and removing event listener
    useEffect(() => {
        const div = containerRef.current;
        if (div) {
            div.addEventListener('wheel', handleScroll, { passive: true });

            return () => {
                div.removeEventListener('wheel', handleScroll);
            };
        }
    }, [pageIndex]); // Re-bind event listener if pageIndex changes

    return (
        <div ref={containerRef} className="flex h-screen background-image">
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
