import Link from "next/link"
import { IoIosLogIn, IoIosMail } from "react-icons/io"



const TopHeader = () => {
    return (
        <div className="w-full bg-white border-b border-gray-200 hidden md:flex justify-between items-center py-3 lg:px-12 md:px-8">
            <div className="flex lg:gap-10 items-center">
                <h3 className="text-saBlue md:hidden lg:inline-block lg:text-sm text-xs">Welcome to StarkAid, Crowdfunding Agency</h3>
                <div className="flex gap-4 items-center">
                    <button className="text-xs capitalize bg-saBluelite text-gray-200 flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 hover:bg-saOrange hover:text-saBluelite">
                        <IoIosLogIn className="text-lg" />
                        Apply for Funding
                    </button>
                    <button className="text-xs capitalize bg-saBluelite text-gray-200 flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 hover:bg-saOrange hover:text-saBluelite">
                        <IoIosLogIn className="text-lg" />
                        Apply As Validator
                    </button>
                </div>
            </div>
            <Link href={`/`} className="text-saBluelite lg:text-sm text-xs hover:underline flex items-center gap-1">
                <IoIosMail className="text-lg" />
                support@starkaid.com
            </Link>
        </div>
    )
}

export default TopHeader