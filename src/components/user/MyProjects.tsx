import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ProjectLists } from "../home/RecentProjects"
import { listOfProjects } from "@/data/Projects"

const MyProjects = () => {
    return (
        <main className="w-full flex flex-col md:px-20 px-4 md:my-32 my-20">
            <section className="w-full flex flex-col md:flex-row md:justify-between md:items-center items-start gap-4 md:gap-0">
                <div className="flex items-center gap-2">
                    <button className="text-gray-200 hover:bg-saOrange rounded-md bg-saBluelite font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Ongoing
                    </button>

                    <button className="text-saBluelite hover:bg-saOrange rounded-md bg-[#F6FBFA] font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Completed
                    </button>

                </div>

                <Select >
                    <SelectTrigger className="w-[180px] outline-none text-saBluelite">
                        <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                    </SelectContent>
                </Select>
            </section>

            <section className="w-full my-12">
                <ProjectLists data={listOfProjects.slice(0, 4)} />
            </section>


        </main>
    )
}

export default MyProjects