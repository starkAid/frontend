"use client"

import Campaign from "@/components/auth/CreateCampaign";
import { registerABI } from "@/abis/RegisterABI";
import ProgressLoader from "@/components/shared/ProgressLoader";
import { useAccount, useReadContract } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CreateCampaign() {
    const router = useRouter()

    const { address: userAddress } = useAccount();

    const { data, isError, status, error } = useReadContract({
        abi: registerABI,
        functionName: "get_user_id",
        address: process.env.NEXT_PUBLIC_AUTH_CONTRACT_ADDRESS as `0x${string}`,
        args: [userAddress as `0x${string}`],
        watch: false,
    });


    useEffect(() => {
        if (status === "success" && (data?.toString() === "0")) {
            router.push('/register');
        }

        if (isError) {
            toast.error(error?.message, {
                position: "top-right",
            });
        }
    }, [data, status, router, isError, error?.message]);

    return (
        <main className="w-full">
            {
                status === "pending" ? <ProgressLoader /> : <Campaign />
            }
        </main>
    )
}