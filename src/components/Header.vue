<template>
  
  <div class="navbar">
    <div class="container">
      <div class="navbar__wrapper">
        <div class="navbar__content">
          <logo-header></logo-header>
          <ul class="navbar__list">
            <li class="navbar__item" v-for="item in data" :key="item">
              <router-link href="" :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>          
        </div>
        <div>
          <div class="burgermenu" @click="show = !show">
            <a href="#" type="button" class="burgermenu__burger" v-if="!show">
              <img
                class="burgermenu__image"
                src="../assets/images/icons/openmenu.svg"
                alt=""
              />
            </a>
            <a href="#" type="button" class="burgermenu__burger" v-else>
              <img
                class="burgermenu__image"
                src="../assets/images/icons/closemenu.svg"
                alt=""
              />
            </a>
          </div>
          <transition name="burger">
            <ul class="burgermenu__list" v-if="show">
              <li
                class="burgermenu__item"
                v-for="item in data"
                :key="item"
                @click="show = false"
              >
                <router-link href="" :to="item.path">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from "./LogoHeader.vue";

export default {
  name: "Header",
  props: { 
    data: {
      type: Array,
      default: () => [], //возвращает пустой массив
    },
  },
  data() {
    return {
      show: false,
    };
  },
  components: { LogoHeader },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.navbar {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  /* position: fixed;  постоянно вверху станицы*/
  position: absolute;
  width: 100%;
  z-index: 100;
  font-size: 18px;
  display: block;
  padding: 27px 0 43px;
  @media screen and (max-width: 479.98px) {
    padding: 10px 0 12px;
  }
  &__wrapper{
    @media screen and (max-width: 767.98px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
  }
  }
  .container{
    display: block;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
  }
  &__logo {
    position: relative;
    z-index: 5;
  }

  &__list {
    display: flex;
    font-size: 18px;
    margin: 0;
    padding: 0;
    align-items: center;

    & a {
      text-decoration: none;
      color: $white;

      &:hover {
        color: $pink;
      }
      &:active {
        color: $white;
        opacity: 0.3;
      }
    }
    @media screen and (max-width: 767.98px) {
      display: none;
    }
  }
  &__item {
    padding: 0;
    list-style-type: none;
    margin-right: 79px;
    text-align: center;

    &:last-child {
      margin: 0px;
    }
    @media screen and (max-width: 991.98px) {
      margin-right: 40px;
    }
  }
}

.router-link-exact-active {
  border-bottom: 2px solid $white;
  padding-bottom: 10px;
}

.burgermenu {
  display: none;

  @media screen and (max-width: 767.98px) {
    display: block;
  }
  
  &__burger {
    display: flex;
    justify-content: flex-end;
  }

  &__list {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    padding-top: 110px;
    font-weight: 700;
    background-color: $darkblue;
    z-index: -2;

    @media screen and (max-width: 767.98px) {
      display: block;
    }
    @media screen and (max-width: 479.98px) {
      padding-top: 79px;
    }
    & a {
      text-decoration: none;
      color: $white;
    }
  }
  &__item {
    text-align: center;
    padding: 25px 0;
    border: 1px solid $black;
  }
}
.burger-enter-active,
.burger-leave-active {
  transition: opacity 0.3s ease;
}

.burger-enter-from,
.burger-leave-to {
  opacity: 0;
}

</style>