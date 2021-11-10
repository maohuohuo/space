<template>
  <div>
    <div>组件二</div>
    <button @click="add">+1</button>
    count={{count}}
  </div>
</template>
<script>
export default {
  name:'Comp',
  data() {
    return {
      count:0
    }
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