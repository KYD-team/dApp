export default function Stats({
  title,
  value,
}){
  return (
    <div className="stat">
      <span>{title}</span>
      <h1>{value}</h1>
    </div>
  )
}