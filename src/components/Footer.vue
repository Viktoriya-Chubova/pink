<template>
  <div class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">
          <a href="/">
            <img
              class="footer__logo_desktop"
              src="../assets/images/logo/logoDesktopFooter.svg"
              alt=""
            />
            <img
              class="footer__logo_tablet"
              src="../assets/images/logo/logoTabletFooter.svg"
              alt=""
            />
          </a>
        </div>
        <div class="footer__links">
          <div class="footer__link" v-for="item in data" :key="item">
            <a href="#"
              ><img :src="require(`../assets/images/icons/${item.image}.png`)"
            /></a>
          </div>
        </div>
        <div class="footer__developed">
          <p class="footer__text">Разработано</p>
          <img src="../assets/images/icons/academy.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    data: {
      type: Array,
      default: () => [], //возвращает пустой массив
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.footer {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 75px 0;
  }

  &__links {
    display: flex;
    gap: 11px;
  }
  &__link {
    border: 3px solid rgba($darkblue, 0.1);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      border: 3px solid $darkblue;
    }
    &:active {
      opacity: 0.3;
    }
  }

  &__developed {
    display: flex;
    align-items: center;
  }
  &__text {
    margin-right: 13px;
  }

  &__logo {
    &_tablet {
      display: none;
    }
  }
}
@media screen and (max-width: 767.98px) {
  .footer {
    &__content {
      justify-content: space-around;
      gap: 20px;
      flex-wrap: wrap;
    }
    &__logo {
      &_desktop {
        display: none;
      }

      &_tablet {
        display: block;
      }
    }
    &__text {
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 479.98px) {
  .footer {
    &__content {
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>