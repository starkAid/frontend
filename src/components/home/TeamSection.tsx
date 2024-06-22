import Image from "next/image"
import team1 from "../../../public/team/1.png"
import team2 from "../../../public/team/2.png"
import team3 from "../../../public/team/3.png"
import team4 from "../../../public/team/4.png"
import { useMemo } from "react"

const TeamSection = () => {

    const images = useMemo(() => [team1, team2, team3, team4], []);

    return (
        <section className="w-full md:px-20 px-4 flex flex-col items-center md:gap-6 gap-4">
            <h3 className="md:text-base text-sm text-saBlue font-semibold uppercase">Team members</h3>
            <h1 className="md:text-4xl text-2xl text-saBluelite font-semibold capitalize">Meet Our Great Members</h1>
            <p className="text-sm md:w-[70%] text-center text-saBlue">Meet our exceptional team of committed experts, each bringing a unique blend of skills and passion to the forefront of our mission. Together, they drive our initiatives forward, ensuring that every project not only meets but exceeds the expectations of our community and stakeholders.</p>

            <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 md:gap-8 gap-8 my-12">
                {
                    members.map((member, index) => (
                        <div key={index} className="w-full flex flex-col items-center">
                            <div className="w-full h-[300px] overflow-hidden rounded-lg">
                                <Image src={images[index]} alt='team' className="w-full h-full object-cover" width={1524} height={1444} quality={100} priority />
                            </div>
                            <h3 className="text-saBluelite text-lg text-center font-semibold mt-2">{member.name}</h3>
                            <p className="text-saBlue text-xs text-center font-light">{member.role}</p>
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default TeamSection

const members = [
    {
        name: "Emmanuel",
        role: "Smart Contract & Frontend Engineer",
    },
    {
        name: "Mary",
        role: "Smart Contract Engineer"
    },
    {
        name: "Ekarika",
        role: "Smart Contract & Backend Engineer"
    },
    {
        name: "Timothy",
        role: "UI/UX Designer & Frontend Developer"
    }
]