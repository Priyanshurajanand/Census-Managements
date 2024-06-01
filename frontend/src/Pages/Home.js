import React from 'react';
import CensusTable from '../components/CensusTable';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

const Home = () => {

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Vaccination Census</h1>
      <h2 className="text-xl font-bold mt-8 mb-4">Census Data</h2>
      <CensusTable />
      <h2 className="text-xl font-bold mt-8 mb-4">Vaccination Trends among different ages</h2>
      <LineChart />

      <h2 className="text-xl font-bold mt-8 mb-4">Gender Distribution by Age</h2>
      <BarChart />
    </div>
  );
};

export default Home;
