import { useState } from 'react';

export default function ListRespos(
  {
    data,
    setSelectedEntity,
  }
) {
  const [isProfile, setIsProfile] = useState(false)
  const [entity, setEntity] = useState(null)
  
  const handleNameClick = (name) => {
    console.log("nameClick")
    setEntity(name)
    setIsProfile(true)
  }

  const renderProfileDev = (data) => {
    const {
      owner,
      owenerUrl
    } = data;

    return (
      <div>
        <h1>Profile</h1>
        <div className="profile">
          <div className="profile__image">
            <img src={owenerUrl} alt="profile" />
             <button>Follow</button>
            <div>{owner}</div>
          </div>
          <div className="profile__info">
            <div>Followers</div>
            <div>Repositiories</div>
            <div>Contributions</div>
            <div>Commits</div>
            <div>Pull Requests</div>
            <div>Funded Projects</div>
            <h3>Near</h3>
            <div>Likes</div><div>Ideas</div>
            <button>Review</button>
          </div>
        </div>
      </div>
    )
  }

  const sorted = data.sort((a, b) => {
    return a.owner.toLowerCase() > b.owner.toLowerCase() ? 1 : -1
  })

  return (
    <div className="list">
      {sorted?.map((item, index) => {
        return (
          <div
            key={index}
            className="list__name"
            onClick={() => handleNameClick(item.owner)}>
              {item.owner}
          </div>
        )
      })}
    </div>
  );
}