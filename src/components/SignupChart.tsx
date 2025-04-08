
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store/useStore";

// We'll use React.lazy instead of next/dynamic
const ReactApexChart = React.lazy(() => import("react-apexcharts"));

interface SignupChartProps {
  data: { week: string; signups: number }[];
}

const SignupChart: React.FC<SignupChartProps> = ({ data }) => {
  const theme = useStore(state => state.theme);
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle client-side only rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const chartOptions = {
    chart: {
      id: "weekly-signups",
      toolbar: {
        show: false,
      },
      fontFamily: "inherit",
      background: "transparent",
    },
    colors: ["#6366f1"],
    xaxis: {
      categories: data.map(item => item.week),
      labels: {
        style: {
          colors: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
    },
    grid: {
      borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
      strokeDashArray: 4,
    },
    tooltip: {
      theme: theme,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#8b5cf6"],
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
  };

  const chartSeries = [
    {
      name: "New Signups",
      data: data.map(item => item.signups),
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-md font-medium">Weekly Signups</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="chart">
          {isMounted ? (
            <React.Suspense fallback={<div className="h-[300px] flex items-center justify-center">Loading chart...</div>}>
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={300}
              />
            </React.Suspense>
          ) : (
            <div className="h-[300px] flex items-center justify-center">
              Loading chart...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SignupChart;
