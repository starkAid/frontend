interface UserInfoProps {
    imgSrc: string,
    name: string,
    noCampaigns: number,
    location: string
}


const UserInfo = ({ imgSrc, name, noCampaigns, location }: UserInfoProps) => {
    return (
        <div className="UserInfo">
            <div className="user-img">
                <img src="./team/1.png" alt="" />
            </div>
            <div className="user-info">
                <p className="small">{name} * * *</p>
                <p>
                    <span className="tiny">{noCampaigns} Campaigns</span>
                    <span className="tiny"> * </span>
                    <span className="tiny">{location}</span>
                </p>
            </div>
        </div>
    )
}

export default UserInfo