'use client'
import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";


const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[99]">
            {
                isVisible && (<button type="button" onClick={scrollToTop} className="px-3.5 py-3.5 bg-saBluelite duration-200 transition-all hover:bg-saOrange text-white md:text-2xl text-base rounded-[3px]">
                    <MdDoubleArrow className=" -rotate-90" />
                </button>)
            }
        </div>


    )
}

export default ScrollToTopButton