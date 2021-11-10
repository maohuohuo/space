<template>
  <div>
    <div>组件一</div>
    <button @click="add">+1</button>
    count={{count}}
  </div>
</template>
<script>
export default {
  name:'Count',
  data() {
    return {
      count:0
    }
  },
  activated(){
    // alert('组件一处于活动状态')
  },
  deactivated(){
    // alert('组件一处于非活动状态')
  },
  methods:{
    add(){
      this.count++
    }
  }
}
</script>
<style scoped>

</style>