'use client'
import React, { FormEvent, useState } from 'react'
import Logo from '../shared/Logo'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'


const Campaign = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState('')
    const [location, setLocation] = useState("")
    const [files, setFiles] = useState([])
    const [timeline, setTimline] = useState("")
    const [bio, setBio] = useState("")
    const [about, setAbout] = useState("")
    const [howSpent, setHowSpent] = useState("")


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const handleGoBack = () => {
        router.back()
    }
    return (
        <section className="w-full min-h-screen bg-saOrange/[6%] relative flex flex-col items-start lg:p-10 md:p-4">
            <Logo className='w-14 h-14' />
            <h1 className='lg:text-3xl md:text-xl font-medium text-saOrange mt-32 lg:w-[300px] md:w-[200px]'>Let&apos;s begin your fundraising journey</h1>

            <main className='absolute top-0 right-0 md:w-[70%] w-full min-h-screen z-20 md:shadow-2xl md:rounded-s-xl md:px-20 py-20 bg-white px-4 flex flex-col items-start justify-center '>
                <form onSubmit={handleSubmit} className='w-full grid md:grid-cols-2 md:gap-6 gap-4'>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="name" className='text-sm text-gray-600 ml-1'>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" className='w-full py-3 px-3 border border-gray-300 text-sm focus:border-saOrange outline-none rounded-lg' placeholder='Enter your name' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="title" className='text-sm text-gray-600 ml-1'>Campaign title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter campaign title' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="amount" className='text-sm text-gray-600 ml-1'>Target Amount</label>
                        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} name="amount" id="amount" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter target amount' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="location" className='text-sm text-gray-600 ml-1'>Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} name="location" id="location" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter location' />
                    </div>

                    <div className='w-full flex flex-col'>
                        <label htmlFor="image" className='text-sm text-gray-600 ml-1'>Images (minimum of 3)</label>
                        <input type="file" multiple name="image" id="image" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="timeline" className='text-sm text-gray-600 ml-1'>Timeline</label>
                        <input type="text" value={timeline} onChange={(e) => setTimline(e.target.value)} name="timeline" id="timeline" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter timeline' />
                    </div>

                    <div className='w-full md:col-span-2 flex flex-col'>
                        <label htmlFor="bio" className='text-sm text-gray-600 ml-1'>Campaign Bio (brief)</label>
                        <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} id="bio" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg resize-y h-24' placeholder='Write...' />
                    </div>
                    <div className='w-full md:col-span-2 flex flex-col'>
                        <label htmlFor="about" className='text-sm text-gray-600 ml-1'>About Campaign</label>
                        <textarea name="about" value={about} onChange={(e) => setAbout(e.target.value)} id="about" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg resize-y h-24' placeholder='Write...' />
                    </div>

                    <div className='w-full flex flex-col md:col-span-2'>
                        <label htmlFor="spent" className='text-sm text-gray-600 ml-1'>How will be the funding be spent/used?</label>
                        <input type="text" value={howSpent} onChange={(e) => setHowSpent(e.target.value)} name="spent" id="spent" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter your explanation' />
                    </div>
                    <div className='w-full md:col-span-2 mt-4'>
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

export default Campaign