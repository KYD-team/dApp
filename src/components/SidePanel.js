import Card from './Card'
import classNames from 'classnames';

import StatsWidget from './StatsWidget';

export default function SidePanel({
  isOpen,
  chain = {},
}) { 
  const {title, description, explorerName, repos = {}} = chain;
  
  const panelClass = classNames({
    'side-panel': true,
    'open': isOpen,
  });
  
  return (
    <div className={panelClass}>
      <h4>{title}</h4>
      <h2 className='chain-name'>
        {explorerName}
      </h2>
      <p>{description}</p>
      <br></br>
      <br></br>
      <br></br>
      <StatsWidget title="Teams" count={repos?.orgs?.length} />
      <StatsWidget title="Developers" count={repos?.users?.length} />
    </div>
  )
}