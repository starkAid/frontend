import Image from 'next/image'
import headerLogo from "../../../public/logo/logo.png"


const Logo = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Image src={headerLogo} width={292} height={292} alt='logo' className='w-full h-full' quality={100} priority />
        </div>
    )
}

export default Logo