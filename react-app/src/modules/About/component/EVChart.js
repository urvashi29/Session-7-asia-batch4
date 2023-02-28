import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EVChart = ({ evData }) => {
  return (
  
      <BarChart width={600} height={300} data={evData}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
 
  );
};

export default EVChart;
