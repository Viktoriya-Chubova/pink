<template>
  <div class="cards">
    <div class="cards__item-image">
      <div
        class="cards__image"
        :class="{ cards__imageTablet: item.viewTablet }"
        v-for="item in data"
        :key="item"
      >
        <img :src="require(`@/assets/images/inform/${item.screen}.png`)" />
      </div>
    </div>
    <div class="cards__item-info">
      <div class="cards__info" v-for="item in data" :key="item">
        <p class="cards__title">{{ item.title }}</p>
        <p class="cards__text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    data: {
      type: Array,
      defaulf: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.cards {
  &__item-image,
  &__item-info {
    display: flex;
    justify-content: space-around;
  }
  &__info {
    width: 300px;
    text-align: center;
    position: relative;
    top: -80px;
    border-top: 4px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      #00000067 49.8%,
      rgba(0, 0, 0, 0) 93.23%
    );
    border-image-slice: 1;
    background-color: $grey;
    padding-top: 59px;
    line-height: 30px;
  }
  &__title {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 35px;
    padding: 0 30px;
    color: $black;
  }

  &__text {
    padding: 0 24px;
  }
}
@media screen and (max-width: 991.98px) {
  .cards {
    display: flex;
    gap: 42px;
    &__item-image,
    &__item-info {
      flex-direction: column;
      justify-content: flex-start;
    }
    &__item-info {
      padding-top: 30px;
    }
    &__image {
      display: none;
    }
    &__imageTablet {
      display: block;
      height: 488px;
      overflow: hidden;
      & img {
        padding: 0;
        height: 547px;
      }
    }

    &__info {
      width: 100%;
      position: static;
      border-top: none;
      border-image: none;
      padding: 0;
      line-height: 24px;
      text-align: left;
    }
    &__title {
      padding: 0;
      margin: 0;
      font-size: 18px;
      margin-bottom: 24px;

    }

    &__text {
      margin: 0;
      margin-bottom: 46px;
      padding: 0;
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 767.98px) {
  .cards {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;

    &__image {
      height: 277px;
      & img {
        height: 320px;
      }
    }
    &__info {
      text-align: center;
    }
  }
}
</style>