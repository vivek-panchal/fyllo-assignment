import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FertilizerChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#61dafb" />
        <YAxis stroke="#61dafb" />
        <Tooltip contentStyle={{ backgroundColor: '#3d3d3d', border: 'none' }} />
        <Legend />
        <Line type="monotone" dataKey="requirement" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="availability" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FertilizerChart;