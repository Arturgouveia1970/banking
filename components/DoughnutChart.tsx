'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ accounts }: DoughnutChartProps) {
    const data = {
      datasets: [
        {
            label: 'Banks',
            data: [1250, 2500, 3750],
            backgroundColor: ['#2f91fa', '#ffa500', '#0747b6']
        }
      ],
      labels: ['Atlantic', 'BFA', 'Standard'] 
    }

  return (
    <Doughnut 
      data={data}
      options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
      }} 
    />
  )
}

export default DoughnutChart