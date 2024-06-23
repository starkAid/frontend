'use client'
import { FormEvent, useMemo, useState } from "react"
import Logo from "../shared/Logo"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import { FaUserCircle } from "react-icons/fa"
import { useAccount, useContract, useContractWrite } from "@starknet-react/core"
import { registerABI } from "@/abis/RegisterABI"
import { stringToHex } from "@/utils/Converter"
import { toast } from "sonner"



const RegisterUser = () => {
    const [username, setUsername] = useState("")

    const router = useRouter()

    const { address: userAddress } = useAccount();

    const { contract } = useContract({
        abi: registerABI,
        address: process.env.NEXT_PUBLIC_AUTH_CONTRACT_ADDRESS,
    });

    // const calls = useMemo(() => {
    //     if (!userAddress || !contract) return [];
    //     const feltUsername = stringToHex(username);
    //     return contract.populateTransaction["register_user"]!([username, feltUsername]);
    // }, [contract, userAddress, username]);

    // const {
    //     writeAsync,
    //     data,
    //     isPending,
    // } = useContractWrite({
    //     calls,
    // });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (userAddress) {
            // writeAsync()
        } else {
            toast.error("Please connect your wallet", {
                position: "top-right",
            })
        }
    }

    const handleGoBack = () => {
        router.back()
    }
    return (
        <section className="w-full min-h-screen bg-saOrange/[6%] relative flex flex-col items-start lg:p-10 md:p-4">
            <Logo className='w-14 h-14' />
            <h1 className='lg:text-3xl md:text-xl font-medium text-saOrange mt-32 lg:w-[300px] md:w-[200px]'>Let&apos;s begin your journey on StarkAid</h1>

            <main className='absolute top-0 right-0 md:w-[70%] w-full min-h-screen z-20 md:shadow-2xl md:rounded-s-xl lg:px-40 md:px-20 py-20 bg-white px-4 flex flex-col items-start justify-center '>
                <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className="w-28 h-28 rounded-full flex justify-center items-center border border-gray-500">
                        <FaUserCircle className="text-gray-500 text-8xl" />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="username" className='text-sm text-gray-600 ml-1'>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" id="username" className='w-full py-3 px-3 border border-gray-300 text-sm focus:border-saOrange outline-none rounded-lg' placeholder='Enter your username' />
                    </div>

                    <div className='w-full mt-4'>
                        <button type='submit' className="text-gray-200 hover:bg-saOrange hover:text-saBluelite rounded shadow-xl bg-saBluelite font-medium text-sm px-8 py-3 capitalize">
                            Submit
                        </button>
                    </div>
                </form>
            </main>

            <button type="button" onClick={handleGoBack} className="px-3.5 py-2 bg-saBluelite duration-200 transition-all hover:bg-saOrange text-white md:text-2xl text-base rounded-[3px] absolute right-6 top-6 z-30">
                <FaArrowLeftLong />
            </button>
        </section>
    )
}

export default RegisterUser