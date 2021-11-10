<template>
  <div class="content">
    首页
    <ul>
      <li>
        1、<router-link to='/reg-test'>正则表达式</router-link>
      </li>
      <li>
        2、<router-link to='/leaflet-map'>leaflet地图</router-link>
      </li>
      <li>
        3、<router-link to='/canvas'>canvas</router-link>
      </li>
    </ul>
    <!-- <el-button type="success">Success</el-button> -->
  </div>
</template>
<script>
export default {
  data() {  
    return {
      count:0
    }
  }
}
</script>
<style scoped>
.content{
  /* text-decoration: none; */
  padding: 10px;
}
button{
  cursor: pointer;
  width: 100%;
  height: 50px;
  background-color: green;
  color: #fff;
}
.count{
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}
.box{
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-top: 50px;
  background-color: blueviolet;
  color: #fff;
}
</style>