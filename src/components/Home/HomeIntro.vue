<template>
  <section class="intro">
    <div class="container">
      <div class="intro__content">
        <p class="intro__title">Взгляните на жизнь иначе!</p>
        <div class="intro__phone"></div>
        <div class="intro__bottom">
          <u-button class="intro__btn">Скачать приложение</u-button>
          <div class="intro__logo">
            <a href="https://www.apple.com/" target="_blank"
              ><img src="@/assets/images/logo/apple-logo.png" alt=""
            /></a>
            <a href="https://www.android.com/" target="_blank"
              ><img src="@/assets/images/logo/android-logo.png" alt=""
            /></a>
            <a href="https://www.microsoft.com/" target="_blank"
              ><img src="@/assets/images/logo/microsoft-logo.png" alt=""
            /></a>
          </div>       
        <p class="intro__text">
          Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
        </p>
      </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "HomeIntro",
  components: {  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/layouts/index.scss";
.intro {
  background-image: url(../../assets/images/phone.png),
    url(../../assets/images/intro-image.jpg);
  background-repeat: no-repeat, no-repeat;
  background-position: 60% 100%, 50% 50%;
  background-size: 1050px, cover;

  padding-top: 210px;
  height: 100%;

  &__content {
    color: $white;
    font-weight: 300;
    max-width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 130px;
  }
  &__title {
    font-size: 50px;
    margin-bottom: 50px;
    line-height: 120%;
  }
  
  &__btn {
    margin-bottom: 67px;
  }
  &__logo {
    margin-bottom: 58px;
    a {
      margin-right: 35px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media screen and (max-width: 991.98px) {
  .intro {
    &__title {
      font-size: 40px;
      margin-bottom: 39px;
    }
    &__content{
      padding-bottom: 120px;
    }
    &__btn {
      font-size: 18px;
      margin-bottom: 39px;
    }

    &__logo {
      margin-bottom: 38px;
    }
  }
}
@media screen and (max-width: 767.98px) {
  .intro {
    background-position: 50% 100%, 50% 50%;
    background-size: 700px, cover;
    height: 100%;
  }
}
@media screen and (max-width: 479.98px) {
  .intro {
    height: 100%;
    background: #1d2631 url(../../assets/images/intro-image.jpg) 50% 0 no-repeat;
    padding-top: 110px;
    &__content {
      max-width: 100%;
      margin: 0 auto;
      padding-bottom: 0px;
    }
    &__title {
      font-size: 24px;
      margin-bottom: 34px;
      width: 300px;
    }

    &__phone {
      width: 100%;
      height: 322px;
      background: transparent url(../../assets/images/phone.png) no-repeat;
      background-size: cover;
      
      background-position: 80%;
    }
    &__bottom{
      padding: 28px 10px 38px;
      background: $darkblue;
    }
    &__btn {
      font-size: 18px;
      margin-bottom: 32px;
      width: 100%;
    }

    &__logo {
      margin-bottom: 28px;
    }
  }
  .container {
    padding: 0;
  }
}
</style>