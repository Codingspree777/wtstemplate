import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LineGraphProps {
  data: Array<{
    date: string;
    timestamp: string;
    value: string;
  }>;
}

const LineGraph = ({ data }: LineGraphProps) => {
  return (
    <ResponsiveContainer width="80%" height={500}>
      <LineChart
        width={900}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" tickMargin={5} />
        <YAxis type={"number"} tickCount={100} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
