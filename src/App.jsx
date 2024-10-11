import React from 'react';
import DataGrid from './components/DataGrid';
import FertilizerChart from './components/FertilizerChart';
import TopFertilizers from './components/TopFertilizers';
import LeastAvailableFertilizers from './components/LeastAvailableFertilizers';
import { fertilizerData } from './data/fertilizerData';
import './index.css'

function App() {
  return (
    <div className="App">
      <h1>Fertilizer Dashboard</h1>

      <div className="dashboard-container">
  
        <div className="chart-container">
          <h2>Fertilizer Data Grid</h2>
          <DataGrid data={fertilizerData} />
        </div>

        <div className="chart-container">
          <h2>Fertilizer Availability/Requirement</h2>
          <FertilizerChart data={fertilizerData} />
        </div>

        <div className="top-fertilizer-container">
          <div className="chart-container">
            <TopFertilizers data={fertilizerData} />
          </div>

          <div className="chart-container">
            <LeastAvailableFertilizers data={fertilizerData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
