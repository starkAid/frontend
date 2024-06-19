"use client";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Navlinks } from "@/data/Nav";
import Logo from "./Logo";
import { RiMenu5Fill } from "react-icons/ri";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoIosLogIn } from "react-icons/io";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className=" bg-saBluelite text-gray-300" size="icon">
                    <RiMenu5Fill className="text-xl" />
                </Button>
            </SheetTrigger>
            <SheetContent >
                <main className="w-full h-full flex flex-col justify-between">
                    <div className="w-full flex flex-col justify-between gap-16 items-start">
                        <Logo className="w-20 h-20" />

                        <ul className="flex flex-col gap-6 pl-2">
                            {Navlinks.map((link) => (
                                <li key={link.name}>
                                    <SheetClose asChild>
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-base  text-saBluelite  transition duration-200",
                                                {
                                                    "text-saOrange": link.href == pathname,
                                                    "hover:text-saOrange": link.href != pathname,
                                                }
                                            )}>
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-4 items-center">
                        <button className="text-xs capitalize bg-saBluelite text-gray-200 flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 hover:bg-saOrange hover:text-saBluelite">
                            <IoIosLogIn className="text-lg" />
                            Apply for Funding
                        </button>
                        <button className="text-xs capitalize bg-saBluelite text-gray-200 flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 hover:bg-saOrange hover:text-saBluelite">
                            <IoIosLogIn className="text-lg" />
                            Apply As Validator
                        </button>
                    </div>
                </main>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav