
const AboutSection = () => {

    return (
        <section className="w-full h-auto md:h-[600px] overflow-x-hidden lg:h-[600px] lg:px-12 md:px-8 px-4 flex md:flex-row flex-col lg:gap-10 md:gap-4 gap-6 items-center justify-center">
            <div className="md:flex-1 w-1/4 flex flex-col gap-3 items-start order-2 md:order-1">
                <small className="text-saBluelite font-light text-base"> - About us</small>
                <h1 className="text-saBlue font-bold lg:text-5xl text-4xl">Empower Change</h1>
                <h2 className="text-saBlue font-semibold lg:text-4xl text-3xl">Fund Tomorrow Solutions Today</h2>
                <p className="text-sm my-2 text-gray-700">
                    At CoinCrowd, we are driven by a simple yet powerful mission: to harness the transformative power of crowdfunding through blockchain technology, enabling impactful contributions to scientific research and disaster relief efforts. Our platform provides a decentralized, transparent, and secure environment where donors, researchers, NGOs, and validators come together to foster initiatives that can truly make a difference in the world.
                    <br />  <br />
                    Our vision is to create a world where every individual has the opportunity to contribute to significant causes and see the tangible impact of their donations. We believe in empowering communities, advancing scientific understanding, and providing immediate and effective relief to disaster-stricken areas. By leveraging the capabilities of the StarkNet blockchain, we aim to revolutionize how funds are raised, managed, and utilized, ensuring maximum transparency and accountability.
                    <br />  <br />
                    Our mission is to streamline the process of funding critical projects by eliminating intermediaries and fostering direct connections between donors and project initiators. We are committed to providing a robust platform for transparent and efficient project funding, empowering researchers and relief organizations to secure the resources they need without undue delay, and ensuring that every dollar donated is traceable and directly contributes to the project it supports.
                    <br />  <br />
                    Our core values are centered around transparency, integrity, innovation, and community. We ensure that every transaction on our platform is recorded on the blockchain, visible and verifiable by anyone, upholding the highest standards of honesty and ethical conduct in all our operations. We are continuously improving and adapting our platform to meet the evolving needs of our users and the challenges they aim to address, building a strong, supportive, and engaged community that drives our platform and the projects we support.
                </p>

                <div className="flex gap-4">
                    <button className="text-gray-700 bg-saOrange hover:bg-saBluelites rounded-md border border-gray-300 font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize">
                        Donate
                    </button>
                </div>
            </div>

        </section>
    )
}

export default AboutSection