<template>
  <div>
    <button @click="add">count加一</button>
    count={{count}}
  </div>
</template>
<script>
import bus from './eventBus.js'
export default {
  data() {
    return {
      count:0
    }
  },
  methods:{
    add(){
      this.count++
      //调用bus.emit()方法触发自定义事件，把数据发送过去
      bus.emit('countChange',this.count)
    }
  }
}
</script>
<style scoped>

</style>