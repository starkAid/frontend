import Image from "next/image"
import mask from "../../../public/mask.png";

const Newsletter = () => {
    return (
        <section className="w-full md:h-[450px] h-[350px] flex flex-col items-center justify-center relative">
            <Image src={mask} alt="mask" className="w-full h-full object-cover" width={7680} height={2132} quality={100} priority />

            <div className="w-full h-full bg-[#24245C]/[79%] absolute top-0 left-0 flex flex-col justify-center items-center gap-8 px-4 md:px-0">
                <h1 className="md:text-4xl text-2xl md:w-1/2 w-full text-center font-semibold text-white">Don’t miss our weekly updates about donations</h1>
                <div className="md:w-1/2 w-full flex flex-row gap-2">
                    <input type="text" className="flex-1 bg-transparent text-white outline-none border border-white rounded-md p-4" placeholder="Enter your email address " />
                    <button className="text-gray-200 hover:bg-saBluelite rounded bg-saOrange font-medium text-sm px-8 py-3 flex items-center gap-1 uppercase shadow-lg shadow-saOrange/50 transition-all duration-300 hover:shadow-saBluelite/50">
                        subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter