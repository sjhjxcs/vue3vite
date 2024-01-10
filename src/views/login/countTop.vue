<template>
  <div class="count-flop" :key="compKey">
    <div :class="item !== '.' ? 'count-flop-box' : 'count-flop-point'" v-for="(item, index) in ArrLIst" :key="index">
      <div v-if="item !== '.'" class="count-flop-content" :class="['rolling_' + item]">
        <div v-for="(item2, index2) in numberList" :key="index2" class="count-flop-num">{{ item2 }}</div>
      </div>
      <div v-else class="count-flop-content">.</div>
    </div>
    <div v-if="suffix" class="count-flop-unit">{{ suffix }}</div>
  </div>
</template>

<script setup name="countTop">
import { ref, watch,defineProps,onMounted } from 'vue';
const props = defineProps({
  val: {
    type: Number,
    required: true
  },
  suffix: {
    type: String,
    default: ''
  }
});

const ArrLIst = ref([]);
const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let compKey = 0;

watch(() => props.val, (newVal) => {
  ArrLIst.value = newVal.toString().split('');
  compKey += 1;
});

onMounted(() => {
  ArrLIst.value = props.val.toString().split('');
});
</script>

<style scoped>
.count-flop {
  display: inline-block;
  font-size: 0;
  /* 可更改 */
  height: 50px;
  line-height: 50px;
  font-size: 36px;
  color: #4898f1;
}

.count-flop > div {
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 100%;
}

.count-flop-box {
  /* 可更改 */
  margin-right: 5px;
  width: 36px;
  border: 1px solid rgba(72, 152, 241, 0.3);
  line-height: 48px;
  border-radius: 6px;
}

.count-flop-point {
  /* 可更改 */
  margin-right: 5px;
  width: 10px;
}

.count-flop-content {
  font-family: MicrosoftYaHei-Bold;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  animation-fill-mode: forwards !important;
}

/* 其余样式省略 */
</style>