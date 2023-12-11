/**
 * 防连点
 * @Date: 2023-03-17
 * @LastEditors: zhangheng
 * v-dbClick || v-dbClick="3000"
 * @param { Number } 时间默认给的是1000
**/
export default {
    dbClick:{
        mounted(el, binding) {
            el.addEventListener('click',()=>{
                if(!el.disabled){
                    el.disabled=true
                    el.style.cursor = 'not-allowed';
                    setTimeout(()=>{
                        el.disabled=false
                        el.style.cursor = 'pointer';
                    },binding.value||1000)
                }
            })
        }
    }
}
