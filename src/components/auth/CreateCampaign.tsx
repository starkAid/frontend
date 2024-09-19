'use client'
import React, { FormEvent, useState } from 'react'
import Logo from '../shared/Logo'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { SlPicture } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";

const Campaign = () => {
    const router = useRouter()

    const [selectedImgOneFile, setSelectedImgOneFile] = useState<any>();
    const [selectedImgTwoFile, setSelectedImgTwoFile] = useState<any>();
    const [selectedImgThreeFile, setSelectedImgThreeFile] = useState<any>();

    const handleSelectImgOneImage = ({ target }: { target: any }) => {
        setSelectedImgOneFile(target.files[0]);
    };
    const handleSelectImgTwoImage = ({ target }: { target: any }) => {
        setSelectedImgTwoFile(target.files[0]);
    };
    const handleSelectImgThreeImage = ({ target }: { target: any }) => {
        setSelectedImgThreeFile(target.files[0]);
    };

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState<number>()
    const [location, setLocation] = useState("")
    const [budget, setBudget] = useState("")
    const [bio, setBio] = useState("")
    const [desc, setDesc] = useState("")
    const [deadline, setDeadline] = useState("")

    const [imageOneURI, setImageOneURI] = useState("")
    const [imageTwoURI, setImageTwoURI] = useState("")
    const [imageThreeURI, setImageThreeURI] = useState("")


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const handleGoBack = () => {
        router.back()
    }
    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-saOrange/[6%] to-white relative flex flex-col items-start lg:p-10 md:p-4">
            <Logo className='w-14 h-14' />
            <h1 className='lg:text-3xl md:text-xl font-medium text-saOrange mt-32 lg:w-[300px] md:w-[200px]'>Let&apos;s begin your fundraising journey</h1>

            <main className='absolute top-0 right-0 md:w-[70%] w-full min-h-screen z-20 md:shadow-2xl md:rounded-s-xl md:px-20 py-20 bg-white px-4 flex flex-col items-start justify-center '>
                {/* Image Selections */}
                <article className="w-full flex flex-col gap-4 mb-8">
                    <h1 className='text-gray-600 '>Choose your campaign images</h1>

                    <div className='w-full grid md:grid-cols-3 gap-8'>
                        {/* image 1 */}
                        <div className="h-[120px] border border-gray-300 rounded relative ">
                            {selectedImgOneFile ? (
                                <Image
                                    src={URL.createObjectURL(selectedImgOneFile)}
                                    alt="image1"
                                    className="w-full h-full object-cover"
                                    width={440}
                                    height={440}
                                    priority
                                    quality={100}
                                />
                            ) : (
                                <span className="relative flex justify-center items-center w-full h-full">
                                    <SlPicture className="relative text-6xl inline-flex rounded text-gray-300" />
                                </span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                className="hidden"
                                id="selectImgOneFile"
                                onChange={handleSelectImgOneImage}
                            />
                            <label
                                htmlFor="selectImgOneFile"
                                className="absolute -right-1 p-1 rounded -bottom-1 cursor-pointer bg-saBluelite border-[0.5px] border-gray-200 text-gray-200"
                            >
                                <FiEdit />
                            </label>
                        </div>

                        {/* image 2 */}
                        <div className="h-[120px] border border-gray-300 rounded relative ">
                            {selectedImgTwoFile ? (
                                <Image
                                    src={URL.createObjectURL(selectedImgTwoFile)}
                                    alt="image2"
                                    className="w-full h-full object-cover"
                                    width={440}
                                    height={440}
                                    priority
                                    quality={100}
                                />
                            ) : (
                                <span className="relative flex justify-center items-center w-full h-full">
                                    <SlPicture className="relative text-6xl inline-flex rounded text-gray-300" />
                                </span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                className="hidden"
                                id="selectImgTwoFile"
                                onChange={handleSelectImgTwoImage}
                            />
                            <label
                                htmlFor="selectImgTwoFile"
                                className="absolute -right-1 p-1 rounded -bottom-1 cursor-pointer bg-saBluelite border-[0.5px] border-gray-200 text-gray-200"
                            >
                                <FiEdit />
                            </label>
                        </div>

                        {/* image 3 */}
                        <div className="h-[120px] border border-gray-300 rounded relative ">
                            {selectedImgThreeFile ? (
                                <Image
                                    src={URL.createObjectURL(selectedImgThreeFile)}
                                    alt="image3"
                                    className="w-full h-full object-cover"
                                    width={440}
                                    height={440}
                                    priority
                                    quality={100}
                                />
                            ) : (
                                <span className="relative flex justify-center items-center w-full h-full">
                                    <SlPicture className="relative text-6xl inline-flex rounded text-gray-300" />
                                </span>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                className="hidden"
                                id="selectImgThreeFile"
                                onChange={handleSelectImgThreeImage}
                            />
                            <label
                                htmlFor="selectImgThreeFile"
                                className="absolute -right-1 p-1 rounded -bottom-1 cursor-pointer bg-saBluelite border-[0.5px] border-gray-200 text-gray-200"
                            >
                                <FiEdit />
                            </label>
                        </div>
                    </div>
                </article>


                {/* form */}
                <form onSubmit={handleSubmit} className='w-full '>
                    <main className='w-full grid md:grid-cols-2 md:gap-6 gap-4'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="name" className='text-sm text-gray-600 ml-1'>Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" className='w-full py-3 px-3 border border-gray-300 text-sm focus:border-saOrange outline-none rounded-lg' placeholder='Enter your name' required />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="title" className='text-sm text-gray-600 ml-1'>Campaign title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter campaign title' required />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="amount" className='text-sm text-gray-600 ml-1'>Target Amount</label>
                            <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} name="amount" id="amount" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter target amount' required />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="location" className='text-sm text-gray-600 ml-1'>Location</label>
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} name="location" id="location" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Enter location' required />
                        </div>

                        <div className='w-full flex flex-col md:col-span-2'>
                            <label htmlFor="deadline" className='text-sm text-gray-600 ml-1'>Campaign deadline</label>
                            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} name="deadline" id="deadline" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='' required />
                        </div>

                        <div className='w-full md:col-span-2 flex flex-col'>
                            <label htmlFor="bio" className='text-sm text-gray-600 ml-1'>Campaign Bio (brief)</label>
                            <textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} id="bio" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg resize-y h-24' placeholder='Write...' required />
                        </div>
                        <div className='w-full md:col-span-2 flex flex-col'>
                            <label htmlFor="desc" className='text-sm text-gray-600 ml-1'> Campaign Description</label>
                            <textarea name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg resize-y h-24' placeholder='Write...' required />
                        </div>

                        <div className='w-full md:col-span-2 flex flex-col'>
                            <label htmlFor="budget" className='text-sm text-gray-600 ml-1'> Budget Plan</label>
                            <textarea name="budget" value={budget} onChange={(e) => setBudget(e.target.value)} id="budget" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg resize-y h-24' placeholder='Write...' required />
                        </div>


                    </main>

                    <main className='w-full grid md:grid-cols-3 md:gap-6 gap-4 md:mt-6 mt-4'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="imageURI" className='text-sm text-gray-600 ml-1'>First Image URI</label>
                            <input type="text" value={imageOneURI} name="imageURI" id="imageURI" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Image URI' readOnly required />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor="imageURI" className='text-sm text-gray-600 ml-1'>Second Image URI</label>
                            <input type="text" value={imageTwoURI} name="imageURI" id="imageURI" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Image URI' readOnly required />
                        </div>

                        <div className='w-full flex flex-col'>
                            <label htmlFor="imageURI" className='text-sm text-gray-600 ml-1'>Third Image URI</label>
                            <input type="text" value={imageThreeURI} name="imageURI" id="imageURI" className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg' placeholder='Image URI' readOnly required />
                        </div>

                        <div className='w-full flex justify-center md:col-span-3 mt-4'>
                            <button type='submit' className="text-gray-200 hover:bg-saOrange hover:text-saBluelite rounded shadow-xl bg-saBluelite font-medium text-sm px-8 py-3 capitalize">
                                Submit
                            </button>
                        </div>
                    </main>
                </form>
            </main>

            <button type="button" onClick={handleGoBack} className="px-3.5 py-2 bg-saBluelite duration-200 transition-all hover:bg-saOrange text-white md:text-2xl text-base rounded-[3px] absolute right-6 top-6 z-30">
                <FaArrowLeftLong />
            </button>
        </section>
    )
}

export default Campaign