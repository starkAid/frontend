import Image from "next/image"
import worldmap from "../../../public/worldMap.svg"
import { IoSearchOutline } from "react-icons/io5"

const HeroSection = () => {
    return (
        <section className="w-full h-[250px] md:h-[500px] lg:h-[500px] relative">
            <div className="w-full h-full bg-saBluelite">
                <Image src={worldmap} alt="Image" width={1440} height={560} quality={100} priority />
            </div>

            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center bg-saBlue/30">
                <h1 className="text-gray-50 md:text-5xl text-3xl font-bold text-center mb-2">Explore Projects:</h1>
                <h1 className="text-gray-50 md:text-4xl text-2xl font-bold text-center">Drive Impact through your support</h1>
            </div>
            <div className="md:w-[60%] w-[90%] absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-lg py-4 px-4 shadow-2xl flex items-center">
                <input type="text" name="search" id="search" className="w-full flex-1 h-12 px-4 py-4 outline-none border-none text-saBluelite" placeholder="Find projects..." />

                <button className="w-12 h-12  flex items-center justify-center">
                    <IoSearchOutline className="text-2xl text-saBluelite font-bold" />
                </button>
            </div>
        </section>
    )
}

export default HeroSection