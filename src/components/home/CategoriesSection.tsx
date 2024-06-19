const CategoriesSection = () => {

    return (
        <section className="w-full h-auto md:h-[600px] overflow-x-hidden lg:h-[600px] lg:px-12 md:px-8 px-4 items-center justify-center ui-gradient-bg">
            <div className="u-class-half">
            <div className="text-saBluelite font-light text-base ui-section-name">
                Categories
            </div>
            <div className="text-saBlue font-semibold lg:text-4xl text-3xl ui-section-header">
                Explore Our Crowdfunding Featured Catagories
            </div>
            <div className="ui-section-paragraph"> <p className="text-sm my-2 text-gray-700">
                Dive into a diverse range of projects where your support can make a significant impact. Choose a category that resonates with your passion and start making a difference today.</p>
            </div>
            <div className="ui-card-grid">
                <div className="ui-card">
                    <span className="ui-card-icon">
                       <img src="./tech.png" alt="image"/>
                    </span>
                    <span>
                        Scientific Research
                    </span>
                </div>
                <div className="ui-card">
                    <span className="ui-card-icon">
                        <img src="./medic.png" alt="image"/>
                    </span>
                    <span>
                        Disaster Relief
                    </span>
                </div>
            </div>
            </div>

        </section>
    )
}

export default CategoriesSection