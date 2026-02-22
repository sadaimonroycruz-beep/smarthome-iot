import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { name: "Ene", consumo: 400 },
  { name: "Feb", consumo: 300 },
  { name: "Mar", consumo: 500 },
]

function Dashboard() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="consumo" stroke="#1976d2" />
    </LineChart>
  )
}

export default Dashboard