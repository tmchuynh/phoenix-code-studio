import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTheme } from "next-themes";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const dataSource = [
  { id: 2, name: "Introduction of New Concepts", value: 4.5 },
  { id: 3, name: "Collaborative Learning", value: 7 },
  { id: 6, name: "Q&A and Discussion", value: 2.5 },
  { id: 1, name: "Attendance Verification", value: 1 },
  { id: 5, name: "Review and Assessment", value: 3.5 },
];

const getCSSVariable = (variable: string): string => {
  if (typeof window === "undefined") {
    return "";
  }
  const rootStyle = window.getComputedStyle(document.documentElement);
  return rootStyle.getPropertyValue(variable).trim();
};

const DoughnutChartLabel = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateColors = () => {
      setBackgroundColors([
        getCSSVariable("--chart-1"),
        getCSSVariable("--chart-2"),
        getCSSVariable("--chart-3"),
        getCSSVariable("--chart-4"),
        getCSSVariable("--chart-5"),
      ]);
    };

    updateColors();
  }, [theme, mounted]);

  const totalValue = dataSource.reduce((acc, item) => acc + item.value, 0);

  const chartData = {
    labels: dataSource.map((item) => item.name),
    datasets: [
      {
        data: dataSource.map((item) => item.value),
        backgroundColor: backgroundColors,
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "start",
        labels: {
          color: getCSSVariable("--foreground"),
          boxWidth: 15,
          boxHeight: 10,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw as number;
            const percentage = ((value / totalValue) * 100).toFixed(2) + "%";
            return `${label}: ${percentage}`;
          },
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        formatter: (value: number) => {
          const percentage = ((value / totalValue) * 100).toFixed(2);
          return `${percentage}%`;
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  if (!mounted) return null;

  return (
    <div className="mx-auto w-[500px] h-[500px]">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChartLabel;
