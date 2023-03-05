import { useState } from 'react';
import DeveloperWidget from './DeveloperWidget'

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

  const renderProfileDev = () => {
    // const {
    //   owner,
    //   owenerUrl
    // } = data;

    return (
      <div className='profile__container'>
        <h1>Profile</h1>
        <div className="profile">
          <div className="profile__image">
            {/* <img src={owenerUrl} alt="profile" /> */}
             <button className='button__follow'>Follow</button>
            <div className="profile__name">name</div>
          </div>
          <div className="profile__info">
            <div className='flex'>
              <div className='info'>
                <div className='info__label'>Followers</div>
                <div className='info__value'>1</div>
              </div>
              <div className='info'>
                <div className='info__label'>Repositiories</div>
                <div className='info__value'>1</div>
              </div>
            </div>
            <div className='info'>
              <div className='info__label'>Contributions</div>
              <div className='info__value'>1</div>
            </div>
            <div className='info'>
              <div className='info__label'>Commits</div>
              <div className='info__value'>1</div>
            </div>
            <div className='info'>
              <div className='info__label'>Pull Requests</div>
              <div className='info__value'>1</div>
            </div>
            <div>Funded Projects</div>
            <h3>Near</h3>
            <div>Likes</div><div>Ideas</div>
            <button className='button__review'>Review</button>
          </div>
        </div>
      </div>
    )
  }

  const sorted = data.sort((a, b) => {
    return a.owner.toLowerCase() > b.owner.toLowerCase() ? 1 : -1
  })

  const renderList = sorted?.map((item, index) => {
    return (
      <div
        key={index}
        className="list__name"
        onClick={() => handleNameClick(item.owner)}>
          {item.owner}
      </div>
    )
  })
  console.log({entity})
  return (
    <div className="list">
      {!isProfile && renderList}
      {isProfile && <DeveloperWidget username={entity} />}
    </div>
  );
}