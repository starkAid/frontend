import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

const AboutProject = () => {
    return (
        <section className="w-full flex flex-col gap-3 md:px-20 px-4 mb-20">
            <h1 className='text-saBluelite text-2xl font-semibold'>About Project</h1>
            <p className="text-saBlue text-sm">The &quot;Wildfire Warriors: Restoring Habitats and Homes&quot; campaign is an intensive initiative designed to address the devastating effects of wildfires on both natural environments and human communities. As wildfires become more frequent and severe due to climate change, the need for a coordinated and effective response has never been more critical. This project is committed to not only restoring the damaged areas but also implementing preventative measures to safeguard against future disasters.</p>
            <p className="text-saBlue text-sm">Our mission begins with immediate relief efforts, providing essential resources such as food, water, and temporary shelter to those displaced by wildfires. However, our commitment goes beyond just addressing immediate needs. We are deeply invested in the long-term recovery and resilience of the affected regions. Here is a detailed breakdown of our comprehensive approach:</p>
            <p className="text-saBlue text-sm">Fundraising and Awareness: Continuous awareness campaigns and fundraising efforts are crucial to sustain our initiatives. We actively seek support from global donors to ensure that adequate resources are available to meet the extensive needs of wildfire recovery.</p>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 gap-4 mt-3'>
                <span className='flex items-center gap-1.5 text-sm'>
                    <FaRegCheckCircle className='text-saOrange' />
                    Emergency Response and Relief
                </span>
                <span className='flex items-center gap-1.5 text-sm'>
                    <FaRegCheckCircle className='text-saOrange' />
                    Emergency Response and Relief
                </span>
                <span className='flex items-center gap-1.5 text-sm'>
                    <FaRegCheckCircle className='text-saOrange' />
                    Emergency Response and Relief
                </span>
                <span className='flex items-center gap-1.5 text-sm'>
                    <FaRegCheckCircle className='text-saOrange' />
                    Emergency Response and Relief
                </span>
                <span className='flex items-center gap-1.5 text-sm'>
                    <FaRegCheckCircle className='text-saOrange' />
                    Emergency Response and Relief
                </span>
                <span className='flex items-center gap-1.5 text-sm'>
                    <FaRegCheckCircle className='text-saOrange' />
                    Emergency Response and Relief
                </span>
            </div>
        </section>
    )
}

export default AboutProject