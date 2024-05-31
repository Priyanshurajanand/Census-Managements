import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [hasData, setHasData] = useState(false);

  const fetchChartData = async () => {
    const response = await fetch('http://localhost:3000/results');
    const result = await response.json();
    if (result.data.length === 0) {
      setHasData(false);
    } else {
      setHasData(true);
      const labels = [...new Set(result.data.map(d => d.age))];
      const genders = ['male', 'female', 'other'];
      
      const datasets = genders.map(gender => ({
        label: gender,
        data: labels.map(age => {
          const data = result.data.find(d => d.age === age && d.gender === gender);
          return data ? data.count : 0;
        }),
        backgroundColor: gender === 'male' ? 'rgba(54, 162, 235, 0.6)' :
                         gender === 'female' ? 'rgba(255, 99, 132, 0.6)' :
                         'rgba(75, 192, 192, 0.6)',
        borderColor: gender === 'male' ? 'rgba(54, 162, 235, 1)' :
                     gender === 'female' ? 'rgba(255, 99, 132, 1)' :
                     'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }));

      setChartData({
        labels,
        datasets,
      });
    }
  };

  useEffect(() => {
    fetchChartData();
  }, );

  if (!hasData) {
    return <div className="text-center p-4">No data available</div>;
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: ' number of people from each gender  vs age',
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
      <Bar data={chartData} options={options}/>
    </div>
  );
};

export default BarChart;
