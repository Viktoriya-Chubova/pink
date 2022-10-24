<template>
  <section class="effect">
    <div class="container">
      <div class="effect__content">
        <div class="effect__image">
          <img src="@/assets/images/effect24.png" alt="" />
        </div>
        <div class="effect__info">
          <div class="effect__title">Эффект на 24 часа!</div>
          <div class="effect__text">
            Британские ученые провели исследования и доказали, что положительный
            эффект от использования приложения длится целые сутки!
          </div>
          <a class="effect__link" href="">Узнать больше об исследовании</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Effect",
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";

.effect {
  position: relative;
  z-index: 2;
  background: $grey;
  padding-bottom: 67px;

  &__content {
    display: flex;
  }

  &__image {
    margin-right: 70px;
    margin-top: 17px;
  }

  &__info {
    padding-top: 115px;
  }

  &__title {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 37px;
    color: $black;
  }

  &__text {
    margin-bottom: 47px;
    line-height: 30px;
  }

  &__link {
    color: $pink;
    text-decoration: none;
    &:hover {
      color: rgba($pink, 0.6);
    }
  }
}
@media screen and (max-width: 991.98px) {
  .effect {
    padding-bottom: 0;
    background: $white;
    &__text,
    &__link {
      font-size: 14px;
    }
    &__image {
      margin-top: 54px;

      & img {
        width: 240px;
      }
    }
    &__info {
      padding-top: 102px;
    }
    &__title {
      margin-bottom: 24px;
    }
    &__text {
      margin-bottom: 24px;
    }
  }
}
@media screen and (max-width: 767.98px) {
  .effect {
    display: none;
  }
}
</style>