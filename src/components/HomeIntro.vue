<template>
   <section class="intro">
        <div class="container">          
            <div class="intro__content">
              <p class="intro__title">Взгляните на жизнь иначе!</p>
              <AppButton class="intro__btn">Скачать приложение</AppButton>
              <div class="intro__logo">
                <a href="https://www.apple.com/" target="_blank"><img src="../assets/images/logo/apple-logo.png" alt="" /></a>
                <a href="https://www.android.com/" target="_blank"><img src="../assets/images/logo/android-logo.png" alt="" /></a>
                <a href="https://www.microsoft.com/" target="_blank"><img src="../assets/images/logo/microsoft-logo.png" alt="" /></a>					
              </div>
              <p class="intro__text">Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8</p>
            </div>
            <div class="intro__phone">
              <!-- <img src="../assets/images/phone.png"> -->
            </div>
        </div>
    </section>
</template>

<script>
import AppButton from '../components/AppButton.vue';
   export default {
      name: 'HomeIntro',
      components: { AppButton }
   }
</script>

<style lang="scss" scoped>
@import "../assets/layouts/index.scss";
.intro {
  background: url('../assets/images/intro-image.jpg') no-repeat center;
  background-size: cover;
  min-height: 100vh;
  padding-top: 210px;
  height: 853px;
  
  &__content{
    color: $white;
    font-weight: 300;
    max-width: 300px;
    text-align: center;
    position: absolute;
    z-index: 2;
    
  }
  &__title {
    font-size: 50px;
    margin-bottom: 50px;
    
  }
  &__btn{
    margin-bottom: 67px;
  }
  &__logo {
    margin-bottom: 58px;
    a{
      margin-right: 35px;

      &:last-child{
        margin-right: 0;
      }
    }
  }

  &__text {
    
  }
  &__phone{
    position: absolute;
    top: 208px;
    width: 645px;
   
    
  }
}
</style>