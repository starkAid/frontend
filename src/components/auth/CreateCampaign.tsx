'use client'
import React, { FormEvent, useCallback, useEffect, useMemo, useState } from 'react'
import Logo from '../shared/Logo'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { SlPicture } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { toast } from 'sonner';
import { useAccount, useContract, useSendTransaction } from '@starknet-react/core';
import { campaignABI } from '@/abis/CreateCampaignABI';
import { dateToSeconds, stringToFelt } from '@/utils/Converter';

const Campaign = () => {
    const router = useRouter()

    const [selectedFiles, setSelectedFiles] = useState<any[]>([null, null, null]);
    const [imageURIs, setImageURIs] = useState<string[]>(["", "", ""]);

    const handleSelectImage = (index: number) => ({ target }: { target: any }) => {
        const newFiles = [...selectedFiles];
        newFiles[index] = target.files[0];
        setSelectedFiles(newFiles);
    };

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState<number>()
    const [location, setLocation] = useState("")
    const [budget, setBudget] = useState("")
    const [bio, setBio] = useState("")
    const [desc, setDesc] = useState("")
    const [deadline, setDeadline] = useState("")

    const [calls, setCalls] = useState<any>(undefined);


    // Text upload to Pinata
    const uploadTextToIPFS = useCallback(async (text: string) => {
        try {
            const formData = new FormData();
            const blob = new Blob([text], { type: 'text/plain' });
            formData.append("file", blob, "text.txt");

            const response = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
                        pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
                    },
                }
            );

            const fileUrl = response.data.IpfsHash;
            toast.success("Text uploaded successfully", { position: "top-right" });
            return fileUrl;
        } catch (error) {
            console.log("Pinata API Error:", error);
            toast.error("Error uploading text", { position: "top-right" });
            return "";
        }
    }, []);


    // Getting Image URI
    const uploadImageToIPFS = useCallback(async (file: File) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
                        pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
                    },
                }
            );

            const fileUrl = response.data.IpfsHash;
            toast.success("Image URI fetched successfully", { position: "top-right" });
            return fileUrl;
        } catch (error) {
            console.log("Pinata API Error:", error);
            toast.error("Error fetching image URI", { position: "top-right" });
            return "";
        }
    }, []);


    useEffect(() => {
        const uploadImages = async () => {
            const newURIs = await Promise.all(
                selectedFiles.map((file, index) => file ? uploadImageToIPFS(file) : "")
            );
            setImageURIs(newURIs);
        };

        if (selectedFiles.some(file => file)) {
            uploadImages();
        }
    }, [selectedFiles, uploadImageToIPFS]);


    const { address: userAddress } = useAccount();

    const { contract } = useContract({
        abi: campaignABI,
        address: process.env.NEXT_PUBLIC_CAMPAIGN_CONTRACT_ADDRESS as `0x${string}`,
    });


    useEffect(() => {
        const prepareCalls = async () => {
            if (!contract || !userAddress || !name || !title || !amount || !location || !budget || !bio || !desc || !deadline || !imageURIs[0] || !imageURIs[1] || !imageURIs[2]) return;

            // Upload the text to IPFS and get CIDs
            const [budgetCID, bioCID, descCID] = await Promise.all([
                uploadTextToIPFS(budget),
                uploadTextToIPFS(bio),
                uploadTextToIPFS(desc),
            ]);

            // Convert to Felt
            const convertedName = stringToFelt(name);
            const convertedTitle = stringToFelt(title);
            const convertedLocation = stringToFelt(location);
            const convertedBudget = stringToFelt(budgetCID);
            const convertedBio = stringToFelt(bioCID);
            const convertedDesc = stringToFelt(descCID);
            const convertedImageURIs = imageURIs.map((uri) => stringToFelt(uri));
            //convert to seconds
            const convertedDeadline = dateToSeconds(deadline);

            // Set the calls
            setCalls([contract.populate("create_campaign", [
                convertedName,
                convertedTitle,
                convertedBio,
                convertedDesc,
                convertedBudget,
                convertedImageURIs[0],
                convertedImageURIs[1],
                convertedImageURIs[2],
                amount,
                convertedLocation,
                convertedDeadline,
            ])]);
        };

        prepareCalls();

    }, [contract, userAddress, name, title, amount, location, budget, bio, desc, deadline, imageURIs, uploadTextToIPFS]);


    const {
        sendAsync,
        error,
        isSuccess,
        isError
    } = useSendTransaction({
        calls
    });


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (calls && userAddress) {
            try {
                await sendAsync();
            } catch (err) {
                toast.error("Transaction failed", {
                    position: "top-right",
                });
            }
        } else {
            toast.error("Please connect your wallet", {
                position: "top-right",
            })
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Campaign created successfully", {
                position: "top-right",
            });
            router.push('/dashboard/user');
        }

        if (isError) {
            toast.error(error?.message || "Transaction failed", {
                position: "top-right",
            });
        }
    }, [isSuccess, isError, router, error?.message]);

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
                        {/* image selections */}
                        {[0, 1, 2].map((index) => (
                            <div key={index} className="h-[120px] border border-gray-300 rounded relative">
                                {selectedFiles[index] ? (
                                    <Image
                                        src={URL.createObjectURL(selectedFiles[index])}
                                        alt={`image${index + 1}`}
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
                                    id={`selectImgFile${index}`}
                                    onChange={handleSelectImage(index)}
                                />
                                <label
                                    htmlFor={`selectImgFile${index}`}
                                    className="absolute -right-1 p-1 rounded -bottom-1 cursor-pointer bg-saBluelite border-[0.5px] border-gray-200 text-gray-200"
                                >
                                    <FiEdit />
                                </label>
                            </div>
                        ))}
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
                        {imageURIs.map((uri, index) => (
                            <div key={index} className='w-full flex flex-col'>
                                <label htmlFor={`imageURI${index}`} className='text-sm text-gray-600 ml-1'>
                                    {`Image URI ${index + 1}`}
                                </label>
                                <input
                                    type="text"
                                    value={uri}
                                    name={`imageURI${index}`}
                                    id={`imageURI${index}`}
                                    className='w-full py-3 px-3 border text-sm border-gray-300 focus:border-saOrange outline-none rounded-lg'
                                    placeholder='Image URI'
                                    readOnly
                                    required
                                />
                            </div>
                        ))}

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