import Vue from 'vue'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css';
import store from '@/store/store';

Vue.config.productionTip = false;
export const EventBus = new  Vue();

Vue.directive('highlight',{
  bind(el,binding,vnode ) {
    let delay = 0;

    if(binding.modifiers['delay']) {
      delay = 500;
    }

    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor=binding.value;
        el.style.color = `#fff`;
      }
      else{
        el.style.color = binding.value;
      }

    },delay);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
