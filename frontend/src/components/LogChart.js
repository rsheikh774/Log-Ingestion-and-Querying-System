import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function LogChart({ logs }) {
  const levelCounts = logs.reduce((acc, log) => {
    acc[log.level] = (acc[log.level] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(levelCounts),
    datasets: [
      {
        label: "Logs by Level",
        data: Object.values(levelCounts),
        backgroundColor: ["#dc3545", "#ffc107", "#0d6efd", "#6c757d"],
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div
      className="card p-4 mb-4 shadow-sm"
      style={{ maxWidth: 600, margin: "0 auto", height: 300 }}
    >
      <h5 className="mb-3 text-center">📊 Logs by Level</h5>
      <Bar data={data} options={options} />
    </div>
  );
}

export default LogChart;
