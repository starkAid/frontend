import { Company, Navlinks, Resources } from "@/data/Nav"
import logo from "../../../public/logo/logowhite.png"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


const Footer = () => {
    return (
        <footer className="w-full flex flex-col bg-saBlue ">
            <main className="w-full md:px-16 px-4 py-24 flex md:flex-row flex-col md:gap-4 gap-6">
                <div className="md:w-[40%] w-full flex flex-col gap-3">
                    <div className="md:w-20 md:h-20 w-14 h-14">
                        <Image src={logo} width={292} height={292} alt='logo' className='w-full h-full' quality={100} priority />
                    </div>
                    <p className="text-sm text-gray-200">Join our dedicated platform in transforming how we support vital causes. Our crowdfunding application on Starknet connects you directly with the most pressing scientific research initiatives and disaster relief efforts.</p>
                    <div className="flex items-center gap-3">
                        <Link href={`/`} className="text-gray-300 h-10 w-10 flex items-center justify-center hover:bg-saBluelite rounded">
                            <FaFacebookF />
                        </Link>
                        <Link href={`/`} className="text-gray-300 h-10 w-10 flex items-center justify-center hover:bg-saBluelite rounded">
                            <FaTwitter />
                        </Link>
                        <Link href={`/`} className="text-gray-300 h-10 w-10 flex items-center justify-center hover:bg-saBluelite rounded">
                            <FaLinkedin />
                        </Link>
                        <Link href={`/`} className="text-gray-300 h-10 w-10 flex items-center justify-center hover:bg-saBluelite rounded">
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
                <section className="w-full flex-1 flex md:flex-row md:justify-between flex-col gap-6 md:gap-0 md:pl-12 pl-3">
                    <div className="flex flex-col md:gap-6 gap-4">
                        <h4 className="text-gray-200 font-semibold capitalize">Quick links</h4>
                        <div className="flex flex-col items-start gap-3 text-sm text-gray-200">
                            {
                                Navlinks.map((link, index) => (
                                    <Link key={index} href={link.href} className="hover:text-saOrange">{link.name}</Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-gray-200 font-semibold capitalize">Resources</h4>
                        <div className="flex flex-col items-start gap-3 text-sm text-gray-200">
                            {
                                Resources.map((link, index) => (
                                    <Link key={index} href={link.href} className="hover:text-saOrange">{link.name}</Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-gray-200 font-semibold capitalize">Company</h4>
                        <div className="flex flex-col items-start gap-3 text-sm text-gray-200">
                            {
                                Company.map((link, index) => (
                                    <Link key={index} href={link.href} className="hover:text-saOrange">{link.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <aside className="border-t border-gray-300/30">
                <p className="px-4 py-6 text-center text-gray-400 text-xs">StarkAid Crowdfunding Agency - All Rights Reserved</p>
            </aside>
        </footer>

    )
}

export default Footer