<template>
  <div class="app">
   <router-view></router-view>
  </div>
</template>
<script>

export default {
  name:'space',
  components:{

  },
  data() {
    return {
      goodsList:[],
      city:'广州市'
    }
  },
  created(){
  },
  methods:{
   
  }
}
</script>
<style  scoped>
  .app{
    padding: 0;
    margin: 0;
  }
</style>