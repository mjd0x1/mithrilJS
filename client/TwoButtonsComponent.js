export const TwoButtonsComponent = {
  view: function (vnode) {
    return m("main", [
      m("button", vnode.attrs.name),
      m("button", vnode.attrs.name),
    ])
  },
}
