const TeamSection = () => {

    return (
        <section className="w-full h-auto md:h-[600px] overflow-x-hidden lg:h-[600px] lg:px-12 md:px-8 px-4 items-center justify-center ui-no-scroll u-class-mb-50">
            <div className="u-class-half">
                <div className="text-saBluelite font-light text-base ui-section-name">
                    Team Members
                </div>
                <div className="text-saBlue font-semibold lg:text-4xl text-3xl ui-section-header">
                   Meet Our Awesome Team Members
                </div>
                <div className="ui-section-paragraph"> <p className="text-sm my-2 text-gray-700">
                    Meet our exceptional team of committed experts, each bringing a unique blend of skills and passion to the forefront of our mission. Together, they drive our initiatives forward, ensuring that every project not only meets but exceeds the expectations of our community and stakeholders.
                    </p>
                </div>
            </div>

            <div className="ui-team-grid">
                 <div className="ui-team-card">
                    <div className="ui-team-img">
                        <img src="./team/1.png" alt="" />
                    </div>
                    <div className="text-saBluelite font-light text-base ui-team-member">
                        Emmanuel Signor
                    </div>
                    <div className="ui-team-position">
                        CEO/Founder
                    </div>
                </div>
                 <div className="ui-team-card">
                    <div className="ui-team-img">
                        <img src="./team/1.png" alt="" />
                    </div>
                    <div className="text-saBluelite font-light text-base ui-team-member">
                        Emmanuel Signor
                    </div>
                    <div className="ui-team-position">
                        CEO/Founder
                    </div>
                </div>
                 <div className="ui-team-card">
                    <div className="ui-team-img">
                        <img src="./team/1.png" alt="" />
                    </div>
                    <div className="text-saBluelite font-light text-base ui-team-member">
                        Emmanuel Signor
                    </div>
                    <div className="ui-team-position">
                        CEO/Founder
                    </div>
                </div>
                 <div className="ui-team-card">
                    <div className="ui-team-img">
                        <img src="./team/1.png" alt="" />
                    </div>
                    <div className="text-saBluelite font-light text-base ui-team-member">
                        Emmanuel Signor
                    </div>
                    <div className="ui-team-position">
                        CEO/Founder
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TeamSection