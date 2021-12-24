import m from "mithril"
import { ChartJSComponent } from "./ChartJScomponent"
import { P5Component } from "./P5Component"
import { TwoButtonsComponent } from "./TwoButtonsComponent"

export function MainView({ attrs }) {
  let state = {
    data: 2,
    count: 3,
    ploty_data: {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16],
    },
  }

  const Hello = {
    view: function () {
      return m("main", [
        m("h1", { class: "title" }, "Mithril Test App"),
        m("div", {
          oncreate: ({ dom }) => {
            Plotly.newPlot(dom, [state.ploty_data], {
              margin: { t: 0 },
            })
          },
        }),
        m(ChartJSComponent),
        m(TwoButtonsComponent, { name: "these are buttons..." }),
        m(
          "button",
          {
            onclick: function () {
              state.count++
            },
          },
          "Counter"
        ),
        m("div", state.count),
        m("h2", "A P5 Component"),
        m(P5Component),
      ])
    },
  }

  return Hello
}
