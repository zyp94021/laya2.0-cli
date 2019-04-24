import { MVC } from './MvcMgr'

export const Click = ui => {
  return (View, name, descriptor) => {
    const EventType = Laya.Event.CLICK
    MVC.forEach(value => {
      console.log(value.views)
      console.log(View.constructor.viewKey)

      const view = value.views.get(6)
      console.log(view)
      if (view) {
        view.Event = view.Event || new Map()
        let event = view.Event.get(EventType)
        if (!event) {
          event = new Map()
          view.Event.set(ui, event)
        }
        let funcList = event.get(ui)
        if (!funcList) {
          funcList = []
          event.set(ui, funcList)
        }
        view.Event.push(descriptor.value)
      }
    })
    return descriptor
  }
}

export const bindEvent = view => {
  console.log(view)
  if (view.Event) {
    view.Event.forEach((eventType, uiEvent) => {
      console.log(eventType, uiEvent)
      uiEvent.forEach((ui, func) => {
        console.log(ui, func)
        func.forEach(func => {
          console.log(view.view[ui])
          console.log(eventType)
          console.log(func)
          view.view[ui].on(eventType, view.view, func)
        })
      })
    })
  }
}
