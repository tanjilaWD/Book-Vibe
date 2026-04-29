import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";

const data = [
  { name: "The Great Gatsby", value: 192, fill: "#1E88E5" },
  { name: "To Kill a Mockingbird", value: 281, fill: "#00C49F" },
  { name: "1984", value: 328, fill: "#FFBB28" },
  { name: "The Alchemist", value: 177, fill: "#FF8042" },
  { name: "Pride and Prejudice", value: 279, fill: "#FF0000" }
];

const TriangleBar = ({ x, y, width, height, fill }) => {
  const path = `
    M ${x}, ${y + height}
    L ${x + width / 2}, ${y}
    L ${x + width}, ${y + height}
    Z
  `;

  return <path d={path} fill={fill} />;
};

export default function CustomChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="value" shape={<TriangleBar />}>
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}