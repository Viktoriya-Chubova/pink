<template>
  <div class="map">
     <GoogleMap
       api-key="AIzaSyDcEcAEBl4d-o8att1VF_N6O0t_qbBD8Eg"
       style="width: 100%; height: 500px"
       :center="center"
       :zoom="15"
     >
       <Marker :options="{ position: center }" />
     </GoogleMap>
  </div>
</template>
 
 <script >
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 59.93880784575303, lng: 30.32309031343181 };
    
    return { center };
  },
});
</script>
<style lang="scss" scoped>
.map{
   clip-path: polygon(50% 7vw, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
}
</style>