import { listOfProjects, listTypes } from "@/data/Projects"
import Image from "next/image"
import { FaCalendar, FaCoins } from "react-icons/fa"
import { IoStarSharp } from "react-icons/io5"


const RecentProjects = () => {
    return (
        <section className="w-full flex flex-col md:px-20 px-4 my-32 gap-8">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-saBlue font-semibold lg:text-4xl text-3xl">Recent Projects</h1>
                <p className="text-sm text-saBlue md:w-[70%] text-center">Explore our Recent Projects to see the latest initiatives seeking your support. From cutting-edge scientific research aimed at solving global challenges to urgent disaster relief operations in crisis-affected areas, our platform empowers you to contribute directly to the projects that matter most. Join us in making a difference today by supporting these vital efforts.</p>
            </div>

            <ProjectLists data={listOfProjects.slice(0, 4)} />
        </section>
    )
}

export default RecentProjects


export const ProjectLists = ({ data }: { data: listTypes[] }) => {
    return (
        <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 md:gap-8 gap-8">
            {
                data.map((item, index) => (
                    <ProjectCard key={index} {...item} />
                ))
            }

        </main>
    )
}


const ProjectCard = ({ image, category, title, progress, totalraised, daysleft, userImage, username, stars, campaignCount, city, country }: listTypes) => {
    return (
        <div className="flex flex-col rounded-lg bg-gray-50 overflow-hidden border border-gray-300/50 group">
            <div className="w-full h-36 overflow-hidden">
                <Image src={image} alt="project" width={526} height={96} quality={100} priority className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <h3 className="text-saBlue font-semibold text-sm">{category}</h3>
                <p className="text-saBlue font-medium text-sm">{title}</p>
                <div className={`w-full h-1.5 overflow-hidden bg-gray-200 rounded-lg relative  `}>
                    <div className="absolute h-full left-0 top-0 bg-saOrange" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <FaCoins className="text-gray-700 text-lg" />
                    <span className="text-gray-700 text-xs font-light">Total Raised ${totalraised}</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaCalendar className="text-gray-700 text-lg" />
                    <span className="text-gray-700 text-xs font-light">{daysleft} Days left</span>
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <Image src={userImage} alt="user" width={34} height={34} className="rounded-full" />
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-1">
                            <span className="text-saBlue text-xs font-medium">{username}</span>
                            <span className="flex">
                                {
                                    Array.from({ length: stars }).map((_, index) => (
                                        <IoStarSharp key={index} className="text-amber-500 text-xs" />
                                    ))
                                }
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-saBlue text-[0.55rem] font-medium">{campaignCount} Campaigns</span>

                            <span className="text-gray-700 text-[0.6rem] font-light">{city}, {country}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}