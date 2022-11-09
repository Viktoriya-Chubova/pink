<template>
  <div class="app">
    <Header :data="HeaderData"></Header>
    <main class="content">
      <router-view/>
    </main>
    <Footer :data="FooterData"></Footer>
  </div> 
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {HeaderData, FooterData} from '@/data/data.dummy'
  export default {
  components: {
    Header,
    Footer
  },
  data(){
    return{
      HeaderData:HeaderData,
      FooterData: FooterData,

    }
  }
    
}
</script>

<style lang="scss" scoped>
@import './assets/layouts/index.scss';

  .app{    
    height: 100vh; //vh-высотa области просмотра
    display: flex;
    flex-direction: column;
    
  }
  
  .content {
    flex: 1;
  }
</style>