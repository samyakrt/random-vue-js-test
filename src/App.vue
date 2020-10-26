<template>
  <div id="app">
    <div id="nav">
      <app-header></app-header>
      <router-view name="nav-top"></router-view>
      <router-view name="top"></router-view>
    </div>
    <transition name="slide" mode="out-in" >
        <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components:{
    'app-header':Header
  }  
}
</script>
<style scoped>

@keyframes  slide-out{
from {
  transform : translateX(0px);

}

to {
  transform : translateX(200px);
}

}

.slide-enter-active {
  animation : slide-out 1s reverse forwards;
}

.slide-leave-active {
  animation : slide-out 1s reverse  forwards;
}
</style>
