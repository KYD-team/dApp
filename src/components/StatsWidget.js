export default function StatsWidget({ title="title", count="value" }) {
  return (
    <div className="stats-widget">
      <h3>{title}</h3>
      <h2>{count}</h2>
    </div>
  );
}