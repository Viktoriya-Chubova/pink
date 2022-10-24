<template>
  <section class="inform">
    <div class="inform__title">
      <div class="container">
        <p class="inform__title_text">Устали от серости мегаполиса?</p>
        <p>Нам есть, что вам <br />предложить!</p>
      </div>
    </div>
    <div class="inform__cards">
      <div class="container">
        <InformCards :data="InformData" class="inform__card"></InformCards>
      </div>
    </div>
  </section>
</template>

<script>
import InformCards from "../Home/InformCards.vue";
import { InformData } from "@/data/data.dummy";
export default {
  components: {
    InformCards,
  },
  data() {
    return {
      InformData: InformData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.inform {
  background: $white;

  &__title {
    font-weight: 300;
    font-size: 50px;
    text-align: center;
    margin-bottom: 70px;
    margin-top: 77px;
    @media screen and (max-width: 991.98px) {
      font-size: 40px;
      margin-bottom: 47px;
      margin-top: 58px;
    }
    @media screen and (max-width: 767.98px) {
      font-size: 24px;
      margin-bottom: 35px;
      margin-top: 46px;
      &_text {
        margin-bottom: 24px;
      }
    }
  }
  &__cards {
    position: relative;
    z-index: 1;

    &:before {
      background: $grey;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -30;
    }

    &:before {
      top: 0;
      transform: skewY(-1.5deg);
      transform-origin: 100% 0;
    }
  }
}
</style>