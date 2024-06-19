import { MdOutlineArrowRightAlt } from "react-icons/md"
import { starknet, tokenflow, voyager, dynamic } from "../../../public/partners"
import Image from "next/image"
import { useMemo } from "react";
import box from "../../../public/donation-box.png"
import guage from "../../../public/gauge.png"
import dots from "../../../public/circleElements.png"

const HeroSection = () => {
    const partners = useMemo(() => [starknet, tokenflow, voyager, dynamic], []);

    return (
        <section className="w-full h-auto md:h-[600px] overflow-x-hidden lg:h-[600px] lg:px-12 md:px-8 px-4 flex md:flex-row flex-col lg:gap-10 md:gap-4 gap-6 items-center justify-center">
            <div className="md:flex-1 w-full flex flex-col gap-3 items-start order-2 md:order-1">
                <small className="text-saBluelite font-light text-base"> - Crowdfunding</small>
                <h1 className="text-saBlue font-bold lg:text-5xl text-4xl">Empower Change</h1>
                <h2 className="text-saBlue font-semibold lg:text-4xl text-3xl">Fund Tomorrow Solutions Today</h2>
                <p className="text-sm my-2 text-gray-700">Join our dedicated platform in transforming how we support vital causes. Our crowdfunding application on <strong className="text-saBluelite">Starknet</strong> connects you directly with the most pressing scientific research initiatives and disaster relief efforts. By leveraging blockchain technology, we ensure that every contribution you make is transparent, secure, and impactful. Whether you’re a donor, a researcher, or an NGO, become a part of a community that is driving real change where it’s needed most.</p>

                <div className="flex gap-4">
                    <button className="text-gray-200 bg-saOrange rounded-md hover:bg-saBluelite font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Learn more
                        <MdOutlineArrowRightAlt className="text-xl" />
                    </button>
                    <button className="text-gray-700 bg-gray-200 rounded-md border border-gray-300 font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Donate
                    </button>
                </div>

                <div className="flex flex-col gap-3 mt-10">
                    <h4 className="text-gray-500 capitalize">Our partners</h4>
                    <div className="flex md:gap-6 gap-4 items-center">
                        {
                            partners.map((item, index) => (
                                <div key={index} className="md:w-[120px] w-[105px]">
                                    <Image src={item} alt={`partner${index}`} width={526} height={96} quality={100} priority className="w-full h-full" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="md:w-[40%] pt-6 md:pt-0 w-full md:h-[400px] order-1 md:order-2">
                <div className="relative w-full">
                    <Image src={box} alt="box" width={2980} height={2981} quality={100} priority className="w-full h-full" />

                    <div className="absolute md:bottom-16 bottom-10 md:-left-14 -left-8 w-[130px]">
                        <Image src={guage} alt="icon" className="w-full" width={984} height={964} priority quality={100} />
                    </div>

                    <div className="absolute top-28 md:left-10 left-4 w-[70px]">
                        <Image src={dots} alt="icon" className="w-full" width={371} height={286} priority quality={100} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection