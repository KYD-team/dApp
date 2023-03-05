export default function Card({
  devCount = 0,
  devChange = 0,
  teamsCount = 0,
  teamsChange = 0,
}){
  return (
    <div>
      <table className="card">
        <tbody>
          <tr className="card__header">
            <th style={{textAlign: "left"}}>Users</th>
            <th>In 2023</th>
            <th>Change</th>
          </tr>
          <tr>
            <td style={{textAlign: "left"}}>Developers</td>
            <td>{devCount}</td>
            <td>{devChange}</td>
          </tr>
          <tr>
            <td style={{textAlign: "left"}}>Teams</td>
            <td>{teamsCount}</td>
            <td>{teamsChange}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}