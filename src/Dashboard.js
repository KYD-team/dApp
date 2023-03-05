import {useState} from 'react';
import classNames from 'classnames';

import CanvasMenu from './CanvasMenu';
import {
  SidePanel,
  Reviews,
  StatsPanel,
  ProfilePanel
} from './components';
import { avalanche, binance, eth, poly, sol } from './configs/chains';

const map = {
  Snowtrace: avalanche,
  Bscscan: binance,
  Etherscan: eth,
  Polyscan: poly,
  Solscan: sol,
}

export default function Dashboard (){
  const [isOpen, togglePanel] = useState(false);
  const [selectedChain, setSelectedChain] = useState({});
  const [selectedEntity, setSelectedEntity] = useState(null);

  const title = (
    <div className='headline'>
      <h1>Know Your Developer</h1>
      <span>Where developers build trust so users can avoid fraud</span>
    </div>
  )

  const ccStyleClosed ={
    marginLeft: 100,
    marginTop: 150,
  }
  const ccStyleOpen ={
    marginLeft: 280,
    marginTop: 0,
  }

  const ccStyle = isOpen ? ccStyleOpen : ccStyleClosed;
  const profileClass = classNames({'nav-tab':true, 'selected':selectedEntity})
  const chainClass = classNames({'nav-tab':true, 'selected': !selectedEntity})

  console.log("profileClass")
  console.log(profileClass)
  return (
    <div className="dashboard">
      <div className='flex'>
        <SidePanel
          chain={map[selectedChain]}
          isOpen={isOpen}
        />
        {isOpen && (
          <div className='nav-tabs'>
            <div style={{paddingRight: "20px"}} onClick={()=> togglePanel(false)} className='nav-tab'>Home</div> 
            &gt;
            <div style={{paddingLeft: "20px", paddingRight: "20px"}} onClick={()=> setSelectedEntity(null)} className={chainClass}>{selectedChain}</div> 
            {selectedEntity && (
              <>
                &gt;
                <div style={{paddingLeft: "20px"}} className={profileClass}>{selectedEntity}</div> 
              </>
            )}
          </div>
        )}
       </div>
      <div
        className='canvas__container'
        style={ccStyle}
      >
        {!isOpen && title}
        {isOpen && !selectedEntity && <StatsPanel chain={map[selectedChain]} />}
        {isOpen && selectedEntity && <Reviews />}
        <CanvasMenu
          isOpen={isOpen}
          togglePanel={togglePanel}
          setSelectedChain={setSelectedChain}
        />
         {isOpen && (
          <ProfilePanel
            selectedEntity={selectedEntity}
            setSelectedEntity={setSelectedEntity}
            chainObj={map[selectedChain]} />
        )}
      </div>
    </div>
  );
}
