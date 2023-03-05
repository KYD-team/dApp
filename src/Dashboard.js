import {useState} from 'react';

import CanvasMenu from './CanvasMenu';
import {
  SidePanel,
  Nav,
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
  const [selectedEntity, setSelectedEntity] = useState({});

  console.log(StatsPanel)

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
    marginLeft: 340,
    marginTop: 0,
  }

  const ccStyle = isOpen ? ccStyleOpen : ccStyleClosed;
  
  return (
    <div className="dashboard">
      <SidePanel
        setSelectedEntity={setSelectedEntity}
        chain={map[selectedChain]}
        isOpen={isOpen}
      />
      <div
        className='canvas__container'
        style={ccStyle}
      >
        {!isOpen && title}
        {isOpen && <StatsPanel/>}
        <CanvasMenu
          isOpen={isOpen}
          togglePanel={togglePanel}
          setSelectedChain={setSelectedChain}
        />
         {isOpen && <ProfilePanel chainObj={map[selectedChain]} />}
      </div>
    </div>
  );
}
