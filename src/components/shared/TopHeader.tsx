import Link from "next/link"
import { Button } from "../ui/button"


const TopHeader = () => {
    return (
        <div className="w-full bg-white border-b border-[#F6FBFA] flex justify-between items-center h-[81px]">
            <div className="flex gap-6 items-center">
                <h3></h3>
                <div className="flex gap-4 items-center">
                    <Button></Button>
                    <Button></Button>
                </div>
            </div>
            <Link href={`/`} className=""></Link>
        </div>
    )
}

export default TopHeader