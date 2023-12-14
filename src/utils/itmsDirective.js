/*
 * @Author: meifeng mei.feng@asiainfo-sec.com
 * @Date: 2023-06-14 10:40:47
 * @LastEditors: meifeng mei.feng@asiainfo-sec.com
 * @LastEditTime: 2023-06-14 17:55:36
 * @FilePath: \ai-itms-web-ui\src\utils\itmsDirective.js
 * @Description:
 *
 * Copyright (c) 2023 by ${meifeng}, All Rights Reserved.
 */
import Vue from 'vue'

Vue.directive('label-btn', {
  inserted: function(el, binding) {
    const left = binding.value
    if (left) {
      el.style.left = `${left}px`
    }
  }
})
