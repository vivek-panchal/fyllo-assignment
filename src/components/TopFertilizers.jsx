import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const TopFertilizers = ({ data }) => {
  const topFertilizers = data
    .sort((a, b) => b.requirement - a.requirement)
    .slice(0, 5)
    .map(fertilizer => ({
      name: fertilizer.name + ' (' + fertilizer.state + ')',
      value: fertilizer.requirement
    }));

  return (
    <div>
      <h3>Top 5 Fertilizers in Demand</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={topFertilizers}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {topFertilizers.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopFertilizers;
