
import Vue from 'vue'
import JConfirmModal from '../components/itms/JConfirmModal.vue'
export default function (options) {
  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
  }
  options.visible = true
  var ConfirmModal = Vue.extend(JConfirmModal)
  const app = new ConfirmModal().$mount(document.createElement('div'))
  for (const key in options) {
    if (key === 'ok') {
      app.$options.methods[key] = options[key]
    }
    app[key] = options[key]
  }
  document.body.appendChild(app.$el)
}
