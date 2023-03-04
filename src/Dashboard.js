import {useState} from 'react';

import CanvasMenu from './CanvasMenu';
import { SidePanel, Nav, StatsPanel } from './components';
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

  console.log(StatsPanel)

  const title = (
    <div>
      <h1>Know Your Developer</h1>
      <span>Where developers build trust so users can avoid fraud</span>
    </div>
  )

  const ccStyleClosed ={
    marginLeft: 180,
    marginTop: 150,
  }
  const ccStyleOpen ={
    marginLeft: 300,
    marginTop: 50,
  }

  const ccStyle = isOpen ? ccStyleOpen : ccStyleClosed;
  
  return (
    <div className="dashboard">
      <Nav />
      <SidePanel chain={map[selectedChain]} isOpen={isOpen} />
      <div className='canvas__container' style={ccStyle}>
        {!isOpen && title}
        {isOpen && <StatsPanel />}
        <CanvasMenu togglePanel={togglePanel} setSelectedChain={setSelectedChain} />
      </div>
    </div>
  );
}
