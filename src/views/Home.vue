<template>
  <div class="home">
    <HomeIntro></HomeIntro>
    <HomeInform></HomeInform>
    <HomeEffect ></HomeEffect>
    <HomeCarousel :data="CarouselData"></HomeCarousel>
    <HomeTariff :data="TariffData"></HomeTariff>
    <HomeContacts></HomeContacts>
  </div>
</template>

<script>
import HomeIntro from "../components/HomeIntro.vue";
import HomeInform from "../components/HomeInform.vue";
import HomeEffect from "../components/HomeEffect.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
import {CarouselData, TariffData} from '@/data/data.dummy'
import HomeTariff from "../components/HomeTariff.vue";
import HomeContacts from "../components/HomeContacts.vue";
export default {
    name: "Home",
    components: {
    HomeIntro,
    HomeInform,
    HomeEffect,
    HomeCarousel,
    HomeTariff,
    HomeContacts
},
    data(){
        return{
          CarouselData:CarouselData,
          TariffData:TariffData
        }
      }
  
}
</script>

<style lang="scss" scoped>
@import "../assets/layouts/index.scss";


</style>