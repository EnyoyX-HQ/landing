'use client'

import { Box } from '@mantine/core'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#334155',
      },
      grid: {
        display: false, // Set to false to hide vertical grid lines
      },
    },
    y: {
      ticks: {
        color: '#64748B',
        callback: function (value: any) {
          if (value >= 1000000) {
            return value / 1000000 + 'm' // Display 10m instead of 10,000,000
          } else if (value >= 1000) {
            return value / 1000 + 'K' // Display 10K instead of 10,000
          } else {
            return value
          }
        },
      },
      grid: {
        display: true, // Set to true to show horizontal grid lines
        color: '#E2E8F0',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

interface LineChartProps {
  data: number[]
  labels: string[]
}

const LineChart = ({ data, labels }: LineChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        color: 'red',
        borderColor: '#94A3B8',
        borderWidth: 1,
        pointRadius: 2,
        backgroundColor: '#94A3B8',
      },
    ],
  }
  return (
    <Box mt={5}>
      <Line data={chartData} options={options} />
    </Box>
  )
}

export default LineChart
