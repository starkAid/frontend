import Image from "next/image"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import img from "../../../public/authorProfile.png"
import { user1 } from "../../../public/projects"
import { IoStarSharp } from "react-icons/io5"

const ImpactSection = () => {

    return (
        <section className="w-full flex flex-col mt-24 gap-4 md:px-20 px-4">
            <small className="text-saBluelite text-lg font-semibold">Success Story</small>
            <div className="flex md:flex-row flex-col md:items-center items-start w-full justify-between gap-4 md:gap-0">
                <div className="w-full flex flex-col gap-6 md:w-[70%]">
                    <h3 className="text-2xl text-saBluelite font-semibold md:text-4xl">Impact Stories: Our Successes in Action</h3>
                    <p className="text-sm text-saBlue">Explore our collection of success stories that highlight the profound impact of your contributions. Each story showcases the tangible results of our funded projects in scientific research and disaster relief, illustrating how every donation helps forge a path to recovery and discovery.</p>
                </div>
                <button className="text-gray-200 hover:bg-saOrange rounded-md bg-saBluelite font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                    View more
                    <MdOutlineArrowRightAlt className="text-xl" />
                </button>
            </div>

            <main className="w-full md:h-[430px] mt-12 grid md:grid-cols-2 md:gap-8 gap-4">
                <div className="w-full md:h-full h-[300px]">
                    <Image src={img} alt="image" className="w-full h-full object-cover rounded-lg" width={718} height={525} priority quality={100} />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-saBluelite">Revolutionizing Blockchain: Breakthroughs at Web3 Research Lab</h2>
                    <p className="text-sm text-saBlue">In a landmark project funded through our platform, the Web3 Research Lab has achieved groundbreaking advancements in blockchain scalability and security. Their innovative approach to decentralized protocols has not only enhanced transaction efficiency but also significantly reduced costs, setting new standards in the industry. This success story demonstrates the power of targeted funding, enabling researchers to push the boundaries of technology and pave the way for a more robust and accessible digital future.</p>
                    <h1 className="md:text-5xl text-3xl font-semibold text-saBluelite">$ 24,553,852.24</h1>
                    <small className="text-saBlue text-sm">Total Funded</small>

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
                </div>
            </main>
        </section>
    )
}

export default ImpactSection