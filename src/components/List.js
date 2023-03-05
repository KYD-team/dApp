import { useState } from 'react';
import DeveloperWidget from './DeveloperWidget'

export default function ListRespos(
  {
    data,
    setSelectedEntity,
    selectedEntity,
  }
) {
  const [isProfile, setIsProfile] = useState(false)
  
  const handleNameClick = (name) => {
    console.log("nameClick")
    setSelectedEntity(name)
    setIsProfile(true)
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

  return (
    <div className="list">
      {!selectedEntity && renderList}
      {selectedEntity && <DeveloperWidget username={selectedEntity} />}
    </div>
  );
}