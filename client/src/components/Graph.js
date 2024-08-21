import { CategoryScale, Chart, Legend, Title, Tooltip, Colors } from "chart.js";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

Chart.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Colors
)

export const LineGraph = ({ chartData }) => {
  const counts = {};
  chartData.map((d) => d.name).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  // console.log(counts)

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // interaction: {
    //   intersect: false
    // },
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        position: "bottom",
        text: 'Name from Data'
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: ["John", "Julia", "Larry", "Mary", "Nick"],
    datasets: [
      {
        label: "Name",
        data: [counts["John"], counts["Julia"], counts["Larry"], counts["Mary"], counts["Nick"]],
        borderColor: "black",
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 2,
        fill: true
      }
    ]
  }

  return (
    <Line options={options} data={data} />
  )
}

export const PieGraph = ({ chartData }) => {
  const counts = {};
  chartData.forEach(function (x) { counts[x.name] = (counts[x.name] || 0) + x.quantity; });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        position: "bottom",
        text: 'Quantity per Name'
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Quantity",
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  }

  return (
    <Pie options={options} data={data} />
  )
}

export const BarGraph = ({ chartData }) => {
  const counts = {}
  chartData.forEach(function (x) { counts[x.name] = (counts[x.name] || 0) + x.quantity; });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        position: "bottom",
        text: 'Quantity per Name'
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Name",
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  return (
    <Bar options={options} data={data} />
  )
}

export const HorizontalBarGraph = ({ chartData }) => {
  const counts = {
    "January": 0,
    "February": 0,
    "March": 0,
    "April": 0,
    "May": 0,
    "June": 0,
    "July": 0,
    "August": 0,
    "September": 0,
    "October": 0,
    "November": 0,
    "December": 0
  };
  chartData.map((e) => {
    // if (new Date(e.orderDate).getFullYear() == 2020)
    return new Date(e.orderDate).getMonth()
  }).forEach((d) => {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    counts[month[d]] = (counts[month[d]] || 0) + 1;
  });

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        position: "bottom",
        text: 'Total Month from Data'
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Quantity",
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  return (
    <Bar options={options} data={data} />
  )
}


export const MonthBarGraph = ({ chartData }) => {
  const counts = {
    "January": 0,
    "February": 0,
    "March": 0,
    "April": 0,
    "May": 0,
    "June": 0,
    "July": 0,
    "August": 0,
    "September": 0,
    "October": 0,
    "November": 0,
    "December": 0
  };
  chartData.forEach((d) => {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthNum = new Date(d.orderDate).getMonth();
    counts[month[monthNum]] = (counts[month[monthNum]] || 0) + d.quantity;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        position: "bottom",
        text: 'Quantity per Month'
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Quantity",
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  return (
    <Bar options={options} data={data} />
  )
}

export const DoughnutGraph = ({ chartData }) => {
  const counts = {};
  chartData.forEach((d) => {
    d.item = d.item.toLowerCase();
    counts[d.item] = (counts[d.item] || 0) + d.quantity;
  })

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        position: "bottom",
        text: 'Quantity per Type of Item'
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  }

  return (
    <Doughnut options={options} data={data} />
  )
}

// const counts = {
//   "January": 0,
//   "February": 0,
//   "March": 0,
//   "April": 0,
//   "May": 0,
//   "June": 0,
//   "July": 0,
//   "August": 0,
//   "September": 0,
//   "October": 0,
//   "November": 0,
//   "December": 0
// };
// chartData.map((e) => {
//   // if (new Date(e.orderDate).getFullYear() == 2020)
//   return new Date(e.orderDate).getMonth()
// }).forEach((d) => {
//   let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//   counts[month[d]] = (counts[month[d]] || 0) + 1;
// });

// const counts = {};
// chartData.forEach((d) => {
//   d.item = d.item.toLowerCase();
//   if(!counts[d.item]) {
//     counts[d.item] = {};
//   }  
//   counts[d.item][d.name] = (counts[d.item][d.name] || 0) + 1;
// })
// console.log(counts);

// const counts = {};
// chartData.forEach((d) => {
//   console.log(d);
//   if(!counts[d.name]) {
//     counts[d.name] = {};
//   }
  
//   counts[d.name][d.item] = (counts[d.name][d.item] || 0) + 1;
// })
// console.log(counts);



// const data = {
//   labels: Object.keys(counts),
//   datasets: [
//     {
//       label: "Name",
//       data: Object.values(counts),
//       borderColor: "black",
//       borderWidth: 2
//     }
//   ]
// }