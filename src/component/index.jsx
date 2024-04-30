import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import vedio from './vedio/bg.mp4';

const pages = ['/', '/about','/advertiser','/publisher', '/login', '/contact'];

function Structure({ sidebar, rightSidebar, children }) {
    const navigate = useNavigate();
    const containerRef = useRef(null); // Reference to the element that captures the scroll event
    let pageIndex = pages.indexOf(window.location.pathname); // Current index of the page based on the route
    const [transitioning, setTransitioning] = useState(false); // State to manage transition effect

    const handleScroll = (e) => {
        if (!transitioning) {
            if (e.deltaY > 0) {
                // Scroll down
                if (pageIndex < pages.length - 1) {
                    setTransitioning(true);
                    setTimeout(() => {
                        pageIndex += 1;
                        navigate(pages[pageIndex]);
                        setTransitioning(false);
                    }, 500); // Adjust transition time as needed
                }
            } else {
                // Scroll up
                if (pageIndex > 0) {
                    setTransitioning(true);
                    setTimeout(() => {
                        pageIndex -= 1;
                        navigate(pages[pageIndex]);
                        setTransitioning(false);
                    }, 1000); // Adjust transition time as needed
                }
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
    }, [pageIndex, transitioning]); // Re-bind event listener if pageIndex or transitioning state changes

    return (
        <div ref={containerRef} className="flex h-screen relative">
            {/* Video Element */}
            <video autoPlay muted loop className="video-background">
                <source src={vedio} type="video/mp4" />
            </video>
               {/* Transparent black overlay */}
               <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex h-full">
                    <nav className="flex w-100 h-full">
                        <div className="w-full flex mx-auto px-6 py-8">{sidebar}</div>
                    </nav>
                    <main className={`flex flex-col w-full overflow-x-hidden overflow-y-auto transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
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
