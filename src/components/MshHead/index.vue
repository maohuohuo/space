<template>
  <div  :style="{backgroundColor:bgcolor,color:color,fsize:fsize}" class="msh-head">
    {{title}}
  </div>
</template>
<script>
export default {
  name:'MshHead',
  props:{
    title:{
      type:String,
      default:'msh-head'
    },
    color:{
      type:String,
      default:'#a1a3a6'
    },
    bgcolor:{
      type:String,
      default:'#d3d7d4'
    },
    fsize:{
      type:String,
      default:'14px'
    }
  }
}
</script>
<style lang="less" scoped>
.msh-head{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  
}
</style>