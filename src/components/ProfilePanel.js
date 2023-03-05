import {useState} from 'react';
import List from './List';
import Search from './Search';

import classNames from 'classnames';

export default function ProfilePanel(
  {
    setSelectedEntity,
    selectedEntity,
    chainObj = {}
  }
){
  const [selectedTab, setSelectedTab] = useState('users')
  let combinedData = {...chainObj?.repos}
  
  if (Object.keys(chainObj?.reposTest).length) {
    combinedData = {
      ...combinedData,
      ...chainObj.reposTest
    }
  }

  return (
    <div className='sidepanel-profile'>
      <div className="flex tabs">
        <span
          className={
            classNames({'selected': selectedTab === 'users'})
          }
            onClick={() => setSelectedTab('users')}>Developers</span>
        <span
          className={
            classNames({'selected': selectedTab === 'orgs'})
          }
          onClick={() => setSelectedTab('orgs')}>Organizations</span>
      </div>
      {!selectedEntity && <Search />}
      <List
        selectedEntity={selectedEntity}
        setSelectedEntity={setSelectedEntity}
        data={combinedData[selectedTab]}
      />
    </div>
  )
}