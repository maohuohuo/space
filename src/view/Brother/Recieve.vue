<template>
  <div>
     接收到的数据为{{count}}
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
  created(){
    //创建自定义事件，里面的参数是接收到的数据
    bus.on('countChange',(count)=>{
      this.count=count
    })
  }
}
</script>
<style scoped>

</style>