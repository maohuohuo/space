<template>
  <div>
    <button @click="componentId='Count'">组件1</button>
    <button @click="componentId='Comp'">组件2</button>
    <keep-alive include="Count">
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>
<script>
import Count from './Count.vue'
import Comp from './Comp.vue'
export default {
  components:{
    Count,
    Comp
  },
  data() {
    return {
      flag:0,
      componentId:'Count'
    }
  },
}
</script>
<style  scoped>

</style>