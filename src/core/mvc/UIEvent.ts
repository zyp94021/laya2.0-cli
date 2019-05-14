import { updateMVCItem } from './MvcMgr'

export const Click = (ui, ...args) => {
  return (View, name, descriptor) => {
    const EventType = Laya.Event.CLICK
    const mvc = updateMVCItem({ viewKey: View.constructor.viewKey })
    mvc.event = mvc.event || {}
    const event = mvc.event
    event[EventType] = event[EventType] || {}
    const eventUI = event[EventType]
    eventUI[ui] = eventUI[ui] || []
    eventUI[ui].push({ func: descriptor.value, arg: args })

    return descriptor
  }
}

export const bindEvent = mvc => {
  if (mvc.event) {
    Object.entries(mvc.event).forEach(event => {
      const type = event[0]
      const eventUI = event[1]
      Object.entries(eventUI).forEach(eventUI => {
        const ui = eventUI[0]
        const func = eventUI[1]
        func.forEach(func => {
          mvc.view[ui].on(type, mvc.view, () => {
            func.func.apply(mvc.view, func.arg)
          })
        })
      })
    })
  }
}
