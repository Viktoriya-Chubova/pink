<template>
  <div class="home">
    <HomeIntro></HomeIntro>
    <HomeInform></HomeInform>
    <HomeEffect></HomeEffect>
    <HomeCarousel :data="CarouselData"></HomeCarousel>
    <HomeTariff :data="TariffData"></HomeTariff>
    <HomeContacts></HomeContacts>
    <GoogleMaps></GoogleMaps>
  </div>
</template>

<script>
import HomeIntro from "../components/Home/HomeIntro.vue";
import HomeInform from "../components/Home/HomeInform.vue";
import HomeEffect from "../components/Home/HomeEffect.vue";
import HomeCarousel from "../components/Home/HomeCarousel.vue";
import { CarouselData, TariffData } from "@/data/data.dummy";
import HomeTariff from "../components/Home/HomeTariff.vue";
import HomeContacts from "../components/Home/HomeContacts.vue";
import GoogleMaps from "../components/GoogleMaps.vue";
export default {
  name: "Home",
  components: {
    HomeIntro,
    HomeInform,
    HomeEffect,
    HomeCarousel,
    HomeTariff,
    HomeContacts,
    GoogleMaps,
  },
  data() {
    return {
      CarouselData: CarouselData,
      TariffData: TariffData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
</style>