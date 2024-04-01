import { useNotification} from "@kyvg/vue3-notification";
const notification = useNotification()

const showNotification = {
  error: (message) => {
    notification.notify({
      title: message,
      type: 'error'
    })
  },
  warning: (message) => {
    notification.notify({
      title: message,
      type: 'warn'
    })
  },
  success: (message) => {
    notification.notify({
      title: message,
      type:'success'
    })
  }
}

export {
   notification,
    showNotification
}
