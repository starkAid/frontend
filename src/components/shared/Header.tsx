'use client'
import Link from "next/link"
import Logo from "./Logo"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { Navlinks } from "@/data/Nav";


const Header = () => {
    const pathname = usePathname();

    return (
        <header className="w-full lg:px-12 md:px-8 px-4 flex justify-between items-center h-20">
            <Logo className="md:w-14 md:h-14 w-12 h-12" />

            <div className="hidden md:flex h-full items-center gap-6 justify-center">
                {Navlinks.map((link, _key) => (
                    <Link
                        href={link.href}
                        key={_key}
                        className={cn(
                            "text-sm text-gray-600  relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-saBluelite before:rounded-lg  before:transition-all before:duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-saOrange after:rounded-lg after:delay-150 after:transition-all after:duration-300",
                            {
                                "before:w-full after:w-1/2 text-saBluelite": link.href == pathname,
                                "hover:before:w-full hover:after:w-1/2 hover:text-saBluelite":
                                    link.href != pathname,
                            }
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center justify-end gap-3">
                <button
                    type="button"
                    className="text-saOrange bg-white rounded-md border border-saOrange hover:bg-saOrange transition-all duration-300 hover:text-gray-200 text-sm px-6 py-2 flex items-center gap-1.5"
                >
                    <FaUser />
                    Connect
                </button>

                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>

        </header>
    )
}

export default Header

