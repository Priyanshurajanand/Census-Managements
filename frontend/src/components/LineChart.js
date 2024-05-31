import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [hasData, setHasData] = useState(false);

  const fetchChartData = async () => {
    const response = await fetch('http://localhost:3000/counts');
    const result = await response.json();
    
    if (result.vaccinated.length === 0 && result.notVaccinated.length === 0) {
      setHasData(false);
    } else {
      setHasData(true);

      const labels = [...new Set([...result.vaccinated, ...result.notVaccinated].map(d => d.age))].sort((a, b)=> a-b);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Vaccinated',
            data: labels.map(age => {
              const data = result.vaccinated.find(d => d.age === age);
              return data ? data.count : 0;
            }),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Not Vaccinated',
            data: labels.map(age => {
              const data = result.notVaccinated.find(d => d.age === age);
              return data ? data.count : 0;
            }),
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      });
    }
  };

  useEffect(() => {
    fetchChartData();
  },[] );

  if (!hasData) {
    return <div className="text-center p-4">No data available</div>;
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Number of vaccinated / unvaccinated people vs age',
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of People',
        },
      },
    },
  };

  return (
    <div className="p-4 m-20 bg-white rounded shadow-md">
      <Line data={chartData} options={options

      } />
    </div>
  );
};

export default LineChart;
