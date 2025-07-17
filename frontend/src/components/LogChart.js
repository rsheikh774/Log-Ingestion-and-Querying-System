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
        backgroundColor: [
          "rgba(239, 68, 68, 0.7)", // error - red
          "rgba(234, 179, 8, 0.7)", // warn - yellow
          "rgba(59, 130, 246, 0.7)", // info - blue
          "rgba(107, 114, 128, 0.7)", // debug/other - gray
        ],
        borderColor: [
          "rgba(239, 68, 68, 1)",
          "rgba(234, 179, 8, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(107, 114, 128, 1)",
        ],
        borderWidth: 1,
        borderRadius: 8,
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
          color: "#475569", // slate-600
        },
      },
      x: {
        ticks: {
          color: "#475569",
        },
      },
    },
  };

  return (
    <div className="chart-wrapper fade-in">
      <h5 className="mb-3 text-center">📊 Logs by Level</h5>
      <div style={{ height: "280px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default LogChart;
