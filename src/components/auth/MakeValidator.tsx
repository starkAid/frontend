'use client'
import React from 'react'
import Logo from '../shared/Logo'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'


const MakeValidator = () => {

    const router = useRouter()

    const handleGoBack = () => {
        router.push("/")
    }
    return (
        <section className="w-full min-h-screen bg-saOrange/[6%] relative flex flex-col items-start md:p-10">
            <Logo className='w-14 h-14' />
            <h1 className='text-2xl font-medium text-saOrange mt-32 w-[300px]'>Become a Guardian of Integrity: Join as a Validator</h1>

            <main className='absolute top-0 right-0 md:w-[70%] w-full min-h-screen z-20 md:shadow-2xl md:rounded-s-xl md:px-20 py-20 bg-white px-4 flex flex-col items-start justify-center '>
                <div className='flex flex-col'>
                    {/* Terms and conditions  */}

                    {/* checkbox */}

                    {/* Stake button */}
                </div>
            </main>

            <button type="button" onClick={handleGoBack} className="px-3.5 py-2 bg-saBluelite duration-200 transition-all hover:bg-saOrange text-white md:text-2xl text-base rounded-[3px] absolute right-6 top-6 z-30">
                <FaArrowLeftLong />
            </button>
        </section>
    )
}

export default MakeValidator