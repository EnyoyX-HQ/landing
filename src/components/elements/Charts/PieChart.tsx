'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Box } from '@mantine/core'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 20,
        boxHeight: 20,
        padding: 20,
        color: '#334155',
        useBorderRadius: true,
        borderRadius: 83,
      },
    },
  },
}

const generateShadesOfGreen = (baseColor: any, count: any) => {
  const shades = []
  for (let i = 0; i < count; i++) {
    const shade = i === 0 ? baseColor : lightenDarkenColor(baseColor, i * 8)
    shades.push(shade)
  }
  return shades
}

const lightenDarkenColor = (color: any, percent: any) => {
  let num = parseInt(color.slice(1), 16)
  let amt = Math.round(2.55 * percent)
  let R = (num >> 16) + amt
  let G = ((num >> 8) & 0x00ff) + amt
  let B = (num & 0x0000ff) + amt
  return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`
}

interface PieChartProps {
  data: number[]
  labels: string[]
  type: string
}

const PieChart = ({ data, labels, type }: PieChartProps) => {
  const baseColor = '#16A34A'
  const backgroundColor = generateShadesOfGreen(baseColor, data?.length)

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `No. of ${type}`,
        data: data,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      },
    ],
  }

  return (
    <Box mt={10}>
      <Pie data={chartData} width={250} height={250} options={options} />
    </Box>
  )
}

export default PieChart
