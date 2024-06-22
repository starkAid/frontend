import Image from "next/image"
import worldmap from "../../../public/worldMap.svg"

const HeroSection = () => {
    return (
        <section className="w-full h-auto md:h-[500px] lg:h-[500px] relative">
            <div className="w-full h-full bg-saBluelite">
                <Image src={worldmap} alt="Image" width={1440} height={560} quality={100} priority />
            </div>

            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center bg-saBlue/30">
                <h1 className="text-gray-50 text-5xl font-bold text-center mb-2">Explore Projects:</h1>
                <h1 className="text-gray-50 text-4xl font-bold text-center">Drive Impact through your support</h1>
            </div>
        </section>
    )
}

export default HeroSection