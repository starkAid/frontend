'use client'
import { registerABI } from "@/abis/RegisterABI";
import { useAccount, useContractRead } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const router = useRouter()

    const { address: userAddress } = useAccount();

    const { data, isError, isLoading, error } = useContractRead({
        functionName: "get_user_id",
        args: [userAddress as string],
        abi: registerABI,
        address: process.env.NEXT_PUBLIC_AUTH_CONTRACT_ADDRESS,
        watch: false,
    });


    useEffect(() => {
        if (!isLoading && (data?.toString() === "0")) {
            router.push('/register');
        }
    }, [data, isLoading, router]);

    return (
        <section className="w-full">
            <main className="w-full">{children}</main>
        </section>
    );

}