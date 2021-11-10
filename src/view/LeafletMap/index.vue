<template>
  <div class="content">
    <div id="map"></div>
    <!-- <el-button type="success">Success</el-button> -->
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../util/tileLayer.baidu.js";
export default {
    data() {  
      return {
        count:0,
        map:null
      }
    },
    mounted(){
      this.initMap()
      this.initLayer()
      
    },
    methods:{
      initMap(){
         let map = L.map("map", {
          minZoom: 5,
          maxZoom: 14,
          center: [39.550339, 150.114129],
          zoom: 12,
          zoomControl: false,
          attributionControl: false,
          crs: L.CRS.Baidu
        }).setView([36,103.50],5);
        this.map = map//data上需要挂载
        window.map = map;
        // L.tileLayer(
        //   "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
        // ).addTo(map); 
        L.tileLayer.baidu({layer: 'vec'}).addTo(map);
    },
    initLayer(){
      // 标记
      // L.marker([40.264533, 122.225718], { icon: _this.markerIcon1 }).addTo(_this.map)
      //   .bindPopup('popupContent')
      // 利用geoJson绘制边界
      var geoData
      var style = {
        color: '#ffffff', // 边框颜色
        weight: 4, // 边框粗细
        opacity: 0.4, // 透明度
        fillColor: 'blue', // 区域填充颜色
        fillOpacity: 0.5 // 区域填充颜色的透明
      }
      this.$http.get('/china.geoJson').then(res => { // 获取public下的test.json文件数据
        geoData = res.data
         L.geoJSON(geoData, {
          style: function (feature) {
            console.log(feature, 'feature')
            return style
          },
          onEachFeature:(feature,layer)=>{
            var that=this
            layer.on({
                mouseover: function(){
                  layer.setStyle({ fillColor: "red" })
                },//鼠标移入事件
                mouseout:function(){
                  layer.setStyle({ fillColor: "blue" })
                },
                dblclick:function(){
                  var subGeoJson={
                    type: "FeatureCollection",
                    features: [geoData.features[feature.properties.subFeatureIndex]]
                  }
                  that.initSubLayer(subGeoJson)
                }
            })
          }
        }).eachLayer(function (layer) {
          layer.bindPopup(layer.feature.properties.name)
        }).addTo(this.map)
        // this.map.fitBounds(geoView.getBounds())
      })
    },
    initSubLayer(subGeoJson){
      var style = {
        color: '#ffffff', // 边框颜色
        weight: 4, // 边框粗细
        opacity: 0.4, // 透明度
        fillColor: 'yellow', // 区域填充颜色
        fillOpacity: 0.5 // 区域填充颜色的透明
      }
      var subGeoView = L.geoJSON(subGeoJson, {
          style: function (feature) {
            console.log(feature, 'feature')
            return style
          }
      }).eachLayer(function (layer) {
          layer.bindPopup(layer.feature.properties.name)
      }).addTo(this.map)
      // console.log(this.map);
      this.map.fitBounds(subGeoView.getBounds())
      // this.map.setView(subGeoJson.features[0].properties.center, 2)

    },
    changeColor(e){
      e.target.feature.properties.fillColor='red'
      console.log(e.target.feature.properties.fillColor);
    }
  }
}
</script>
<style scoped>
.content{
  height: 100%;
  /* text-decoration: none; */
  padding: 10px;
}
#map{
  height: 100vh;
}
</style>