import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false, 
        position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const list = [
    {
        "day": "2022-01-01",
        "orderCount": 1
      },
      {
        "day": "2022-01-02",
        "orderCount": 2
      },
      {
        "day": "2022-01-03",
        "orderCount": 3
      },
      {
        "day": "2022-01-04",
        "orderCount": 4
      },
      {
        "day": "2022-01-05",
        "orderCount": 5
      },
      {
        "day": "2022-01-06",
        "orderCount": 6
      },
      {
        "day": "2022-01-07",
        "orderCount": 8
      },
      {
        "day": "2022-01-08",
        "orderCount": 12
      },
      {
        "day": "2022-01-09",
        "orderCount": 14
      },
      {
        "day": "2022-01-10",
        "orderCount": 20
      },
      {
        "day": "2022-01-11",
        "orderCount": 22
      },
      {
        "day": "2022-01-12",
        "orderCount": 23
      },
      {
        "day": "2022-01-13",
        "orderCount": 14
      },
]

const labels = list.map((item) => item.day);
// console.log(labels)

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: list.map((item) => item.orderCount),
      backgroundColor: 'rgba(88, 107, 144, 1)',
    },
  ],
};

function BarChart() {
  return (
  <>
    <Bar options={options} data={data} />
  </>
  )
}

export default BarChart