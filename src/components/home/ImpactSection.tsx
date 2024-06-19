import { MdOutlineArrowRightAlt } from "react-icons/md"
import UserInfo from "@/components/ui/userinfo";


const ImpactSection = () => {

    return (
        <section className="w-full h-auto md:h-[600px] overflow-x-hidden lg:h-[600px] lg:px-12 md:px-8 px-4 items-center justify-center ui-no-scroll u-class-mb-50">
          <div className="text-saBluelite font-light text-base ui-section-name u-class-left-align u-class-mt-100">
                    Success Story
            </div>
              <div className="text-saBlue font-semibold lg:text-4xl text-3xl ui-section-header u-class-left-align">
                   Impact Stories: Our Successes in Action
            </div>
            <div className="storybox u-class-mb-50">
                <p className="storybox-text">
                    Explore our collection of success stories that highlight the profound impact of your contributions. Each story showcases the tangible results of our funded projects in scientific research and disaster relief, illustrating how every donation helps forge a path to recovery and discovery.
                </p>
                  <button className="text-gray-200 bg-saOrange rounded-md hover:bg-saBluelite font-medium text-sm px-6 py-2 flex items-center gap-1 capitalize u-class-fit-content">
                        Learn more
                        <MdOutlineArrowRightAlt className="text-xl" />
                    </button>
            </div>
            <div className="about-impact">
                <div className="about-impact-img">
                    <img src="./authorProfile.png" alt="" />
                </div>
                <div className="about-impact-card">
                    <h1 className="text-saBlue font-semibold lg:text-3xl text-2xl ui-section-header u-class-left-align">
                        Revolutionizing Blockchain: Breakthroughs at Web3 Research Lab
                    </h1>
                    <p className="u-class-left-align u-class-mb-10">
                        In a landmark project funded through our platform, the Web3 Research Lab has achieved groundbreaking advancements in blockchain scalability and security. Their innovative approach to decentralized protocols has not only enhanced transaction efficiency but also significantly reduced costs, setting new standards in the industry. This success story demonstrates the power of targeted funding, enabling researchers to push the boundaries of technology and pave the way for a more robust and accessible digital future.
                    </p>
                    <h1 className="text-saBlue font-semibold lg:text-3xl text-2xl  u-class-left-align u-class-mb-10">
                        $ 24,553,852.24
                    </h1>
                    <p className="u-class-left-align u-class-mb-10">
                        Total funded
                    </p>

                    <UserInfo imgSrc="./1.png" name="Web3Bridge Labs" noCampaigns={2} location="Lagos, State" />
                </div>
            </div>

        </section>
    )
}

export default ImpactSection