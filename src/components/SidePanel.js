import { useState } from 'react';
import classNames from 'classnames';

import StatsWidget from './StatsWidget';

export default function SidePanel({isOpen, chain = {}}) { 
  const panelClass = classNames({
    'side-panel': true,
    'open': isOpen,
  });
  
   return  (
     <div className={panelClass}>
       <h4>{chain.title}</h4>
       <h2 className='chain-name'>
        {chain.explorerName}
      </h2>
       <p>{chain.description}</p>
       <br></br>
       <br></br>
       <br></br>
       <StatsWidget title="Teams" count="1234" />
       <StatsWidget title="Developers" count="1234" />
     </div>
  )
}