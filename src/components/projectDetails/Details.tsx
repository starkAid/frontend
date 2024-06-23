'use client'
import { IoStarSharp } from "react-icons/io5"
import { user1 } from "../../../public/projects"
import Image from "next/image"
import { FaCalendar, FaCaretLeft, FaCaretRight, FaCoins } from "react-icons/fa"
import { d1 } from "../../../public/detail"
import Slider, { Settings } from "react-slick";
import { useRef } from "react"
const Details = () => {
    const sliderRef = useRef<Slider | null>(null);

    // Function for next button 
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    // Slider settings
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <section className="w-full my-20 grid md:px-20 px-4 md:grid-cols-2 md:gap-6">
            <main className="w-full h-[410px] relative">
                <Slider ref={sliderRef} {...settings}>
                    <div className="w-full h-[410px]">
                        <Image src={d1} alt="image" width={2940} height={2224} quality={100} priority />
                    </div>
                    <div className="w-full h-[410px]">
                        <Image src={d1} alt="image" width={2940} height={2224} quality={100} priority />
                    </div>
                    <div className="w-full h-[410px]">
                        <Image src={d1} alt="image" width={2940} height={2224} quality={100} priority />
                    </div>
                </Slider>
                <div className="absolute bottom-4 right-4 flex items-center gap-4">
                    <button
                        onClick={previous}
                        className="text-white"
                        type="button">
                        <FaCaretLeft className="text-lg" />
                    </button>
                    <button
                        onClick={next}
                        className="text-white"
                        type="button">
                        <FaCaretRight className="text-lg" />
                    </button>
                </div>
            </main>
            <aside className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-3 mt-2">
                    <Image src={user1} alt="user" width={50} height={50} className="rounded-full" />
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                            <span className="text-saBlue md:text-base text-sm font-medium">Web3bridge Labs</span>
                            <span className="flex">
                                {
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <IoStarSharp key={index} className="text-amber-500 text-sm" />
                                    ))
                                }
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-saBlue text-sm font-medium">2 Campaigns</span>
                            <span className="text-gray-700 text-sm font-light">Lagos, Nigeria</span>
                        </div>
                    </div>
                </div>
                <h1 className="text-saBluelite font-semibold text-lg">Wildfire Warriors: Restoring Habitats and Homes</h1>
                <p className="text-saBlue text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <div className={`w-full h-1.5 overflow-hidden bg-gray-200 rounded-lg relative  `}>
                    <div className="absolute h-full left-0 top-0 bg-saOrange" style={{ width: `${60}%` }}></div>
                </div>

                <div className="flex flex-wrap items-start gap-10 mt-4">
                    <div className="flex items-start gap-2">
                        <FaCoins className="text-gray-700 text-xl" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-saBlue text-base font-semibold">$ 65,235</span>
                            <span className="text-xs text-gray-700 font-light">Total Raised</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        <FaCalendar className="text-gray-700 text-xl" />
                        <div className="flex flex-col gap-0.5">
                            <span className="text-saBlue text-base font-semibold">235</span>
                            <span className="text-xs text-gray-700 font-light">Days to go</span>
                        </div>
                    </div>

                    <button className="text-gray-200 hover:bg-saOrange rounded-md bg-saBluelite md:ml-6 font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Fund this project
                    </button>
                </div>

                <p className="text-saBlue text-sm -mb-2 mt-3">Project Notes:</p>
                <p className="text-saBlue text-sm p-5 rounded-sm bg-gray-300/50">Addressing the urgent need for habitat restoration and community rebuilding in areas affected by wildfires.</p>
            </aside>
        </section>
    )
}

export default Details