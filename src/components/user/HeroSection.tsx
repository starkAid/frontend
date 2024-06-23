import Image from "next/image"
import bg from "../../../public/detailsHero.png"

const HeroSection = () => {
    return (
        <section className="w-full md:h-[244px] h-[350px] flex flex-col items-center justify-center relative">
            <Image src={bg} alt="mask" className="w-full h-full object-cover" width={7680} height={1000} quality={100} priority />

            <div className="w-full h-full bg-[#24245C]/[60%] absolute top-0 left-0 flex flex-col justify-center items-center gap-4 px-4 md:px-0">
                <h1 className="text-white md:text-4xl text-2xl capitalize font-semibold">Dashboard</h1>
            </div>
        </section>
    )
}

export default HeroSection