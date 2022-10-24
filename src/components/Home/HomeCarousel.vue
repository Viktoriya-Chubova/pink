<template>
  <section class="carousel-content">
    <div class="container">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators carousel-content__carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{ active: item.active }"
            v-for="item in data"
            :key="item"
          >
            <div class="item">
              <img
                class="item__quote"
                src="@/assets/images/quotes.png"
                alt=""
              />
              <p class="item__text">{{ item.text }}</p>
              <p class="item__name">{{ item.name }}</p>
              <p class="item__about">{{ item.about }}</p>
            </div>
          </div>
        </div>
        <div class="carousel-content__btns">
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  </section>
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

.item {
  padding: 72px 105px 40px;
  text-align: center;

  &__quote {
    margin-bottom: 58px;
  }
  &__text {
    margin-bottom: 50px;
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 17px;
    color: $black;
  }
  &__about {
    margin-bottom: 49px;
  }
}
.carousel-content {
  &__carousel-indicators {
    display: none;
  }
  position: relative;
  z-index: 2;
  background: $white;
}
.carousel-control-prev {
  justify-content: flex-start;
}
.carousel-control-next {
  justify-content: flex-end;
}
@media screen and (max-width: 991.98px) {
  .carousel-content {
    &__btns {
      display: none;
    }

    &__carousel-indicators {
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid $darkblue;
        margin-right: 7px;
      }

      .active {
        background: $white;
        border-radius: 50%;
        outline: none;
        border: 3px solid $darkblue;
      }
    }
  }
  .item {
    padding: 109px 0 49px;
    &__quote {
      display: none;
    }
    &__name {
      font-size: 20px;
      margin-bottom: 17px;
    }
    &__about {
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 479.98px) {
  .item {
    padding: 50px 0 40px;
    display: flex;
    flex-direction: column-reverse;
    &__text {
      font-size: 14px;
      margin-bottom: 30px;
    }
    &__name {
      font-size: 18px;
      margin-bottom: 31px;
    }
    &__about {
      display: none;
    }
  }
  .carousel-content {
    &__carousel-indicators {
      margin-bottom: 40px;
    }
  }
}
</style>