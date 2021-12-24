export const ChartJSComponent = {
  view: function (vnode) {
    return m("main", [
      m("canvas", {
        id: "myChart1",
        height: 600,
        width: 1200,
        oncreate: ({ dom }) => {
          draw(dom, "line")
        },
      }),
      m("canvas", {
        id: "myChart2",
        height: 600,
        width: 1200,
        oncreate: ({ dom }) => {
          draw(dom, "bar")
        },
      }),
    ])
  },
}

export function draw(context, type) {
  const labels = ["A", "B", "C", "D", "E", "D"]
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Some Data",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          0,
        ],
      },
    ],
  }

  const config = {
    type: type,
    data,
    options: {
      responsive: false,
    },
  }
  const myChart = new Chart(context, config)
}
