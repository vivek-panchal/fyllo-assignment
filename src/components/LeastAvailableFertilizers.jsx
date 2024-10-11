import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LeastAvailableFertilizers = ({ data }) => {
  const leastAvailable = data
    .sort((a, b) => a.availability - b.availability)
    .slice(0, 5)
    .map(fertilizer => ({
      name: fertilizer.name + ' (' + fertilizer.state + ')',
      availability: fertilizer.availability
    }));

  return (
    <div>
      <h3>Top 5 Least Available Fertilizers</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={leastAvailable}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#61dafb" />
          <YAxis stroke="#61dafb" />
          <Tooltip contentStyle={{ backgroundColor: '#3d3d3d', border: 'none' }} />
          <Legend />
          <Bar dataKey="availability" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeastAvailableFertilizers;