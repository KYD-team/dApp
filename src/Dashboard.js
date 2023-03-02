import {useState} from 'react';

import CanvasMenu from './CanvasMenu';
import { SidePanel, Nav } from './components';
import { avalanche, binance } from './mock';

const map = {
  Snowtrace: avalanche,
  Binance: binance,
}

export default function Dashboard (){
  const [isOpen, togglePanel] = useState(false);
  const [selectedChain, setSelectedChain] = useState({});

  return (
    <div className="dashboard">
      <Nav />
      <SidePanel chain={map[selectedChain]} isOpen={isOpen} />
      <CanvasMenu togglePanel={togglePanel} setSelectedChain={setSelectedChain} />
    </div>
  );
}
