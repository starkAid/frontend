import { MdOutlineArrowRightAlt } from "react-icons/md"
import { starknet, tokenflow, voyager } from "../../../public/partners"
import Image from "next/image"
import { useMemo } from "react";


const HeroSection = () => {
    const partners = useMemo(() => [starknet, tokenflow, voyager], []);

    return (
        <section className="w-full h-auto md:h-[] lg:h-[600px] bg-sky-100 lg:px-12 md:px-8 px-4 flex md:flex-row flex-col items-center justify-center">
            <div className="flex-1 flex flex-col gap-3 items-start order-2 md:order-1">
                <small className="text-saBluelite font-light text-base"> - Crowdfunding</small>
                <h1 className="text-saBlue font-bold text-5xl">Empower Change</h1>
                <h2 className="text-saBlue font-semibold text-4xl">Fund Tomorrow Solutions Today</h2>
                <p className="text-sm my-2 text-gray-700">Join our dedicated platform in transforming how we support vital causes. Our crowdfunding application on <strong className="text-saBluelite">Starknet</strong> connects you directly with the most pressing scientific research initiatives and disaster relief efforts. By leveraging blockchain technology, we ensure that every contribution you make is transparent, secure, and impactful. Whether you’re a donor, a researcher, or an NGO, become a part of a community that is driving real change where it’s needed most.</p>

                <div className="flex gap-4">
                    <button className="text-gray-200 bg-saOrange rounded-md hover:bg-saBluelite font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Learn more
                        <MdOutlineArrowRightAlt />
                    </button>
                    <button className="text-gray-700 bg-gray-200 rounded-md border border-gray-300 font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Donate
                    </button>
                </div>

                <div className="flex flex-col gap-2 mt-10">
                    <h4 className="text-gray-400 capitalize">Our partners</h4>
                    <div className="flex gap-6 items-center">
                        {
                            partners.map((item, index) => (
                                <div key={index} className="w-[120px]">
                                    <Image src={item} alt={`partner${index}`} width={526} height={96} quality={100} priority className="w-full h-full" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-[40%] h-[400px] order-1 md:order-2">
                <div className="relative w- h-">

                </div>
            </div>
        </section>
    )
}

export default HeroSection