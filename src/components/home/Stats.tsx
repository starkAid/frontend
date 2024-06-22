const Stats = () => {

    return (
        <section className="w-full h-auto md:h-[600px] overflow-x-hidden lg:h-[600px] lg:px-12 md:px-8 px-4 items-center justify-center ui-no-scroll u-class-mb-50">
          <div className="stats u-class-mt-10  0">
              <div className="stats-grid">
                  <div className="stat">
                      23,577
                      <span>Total Donors</span>
                  </div>

                  <div className="stat">
                      978K
                      <span>Donations</span>
                  </div>

                  <div className="stat">
                      762
                      <span>Projects</span>
                  </div>

                  <div className="stat">
                      851
                      <span>Communities</span>
                  </div>
              </div>
          </div>


        </section>
    )
}

export default Stats