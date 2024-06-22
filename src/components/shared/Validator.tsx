import Image from "next/image"
import panel1 from "../../../public/panel1.png"
import panel2 from "../../../public/panel2.png"

const Validator = () => {
    return (
        <section className="w-full h-[200px] flex md:flex-row flex-col items-center gap-3 justify-center md:justify-between bg-saOrange md:px-20 px-4 relative overflow-hidden">
            <h1 className="text-white md:text-4xl text-2xl md:text-start text-center font-semibold">Become A Campaign Validator Now!</h1>
            <button className="text-gray-200 hover:bg-gray-200 hover:text-saBluelite rounded shadow-xl bg-saBluelite font-medium text-sm px-8 py-3 flex items-center gap-1 capitalize">
                Join Now
            </button>

            <div className="absolute left-0 top-[40%] md:w-[70px] w-[50px]">
                <Image src={panel1} alt='shape' className="w-full" width={425} height={336} quality={100} priority />
            </div>
            <div className="absolute left-6 -bottom-4 md:w-[100px] w-[80px]">
                <Image src={panel2} alt='shape' className="w-full" width={615} height={484} quality={100} priority />
            </div>
        </section>
    )
}

export default Validator