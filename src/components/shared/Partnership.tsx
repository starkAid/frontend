import { useMemo } from "react";
import { starknet, tokenflow, voyager, dynamic } from "../../../public/partners";
import Image from "next/image";


const Partnership = () => {
    const partners = useMemo(() => [starknet, tokenflow, voyager, dynamic], []);
    return (
        <section className="w-full flex flex-col items-center my-16 gap-4">
            <h2 className="text-saBlue text-xl capitalize font-semibold">Our Partnership</h2>
            <main className="w-full flex flex-wrap justify-center items-center md:gap-4 gap-x-4 gap-y-1">
                {
                    partners.map((item, index) => (
                        <div key={index} className="md:w-[150px] py-2 w-[40%]">
                            <Image src={item} alt={`partner${index}`} width={526} height={120} quality={100} priority className="w-full h-full" />
                        </div>
                    ))
                }
            </main>
        </section>
    )
}

export default Partnership