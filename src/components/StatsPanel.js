import Card from './Card'

export default function StatsPanel() {
  return (
    <div className="stats-panel">
      <h4>Members</h4>
      <Card />
      <h4>Contracts Deployed</h4>
      <Card />
      <h4>Projects</h4>
    </div>
  )
}