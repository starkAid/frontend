'use client'
import { RotatingLines } from 'react-loader-spinner'

export default function ProgressLoader() {

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex justify-center items-center">
            <RotatingLines
                visible={true}
                width="96"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                strokeColor="#FF7468"
            />
        </div>
    );
}