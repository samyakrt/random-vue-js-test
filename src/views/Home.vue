<template>
  <div class="home">
    <!-- <form action="" method="post" @submit.prevent="login">
      <div>
        <input type="email" name="email" id="" placeholder="email" v-model="user.email">
      </div>

      <div>
        <input type="password" name="password" id="" placeholder="password" v-model="user.password">
      </div>

      <button type="submit">Login</button>
    </form> -->
    <!-- <h3 v-local-highlight:background.delay.blink="'green'">this is home component</h3> -->

    <router-view name="nav-top"></router-view>
    <div class="container">
      <div class="row">

        <div class="col-md-6">
              <br>

            <button class="btn btn-primary" @click="addItem">Add Item</button>

                <!-- <ul class="list-group"> -->
                  <transition-group name="slide" tag="ul" class="list-group"> 
                      <li class="list-group-item" v-for="(number,index) in numbers" @click="removeItem(index)" style="cursor:pointer;" :key="number">
                      {{number}}
                    </li>
                  </transition-group>
                <!-- </ul> -->
        </div>

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Animations</h1>

        <button class="btn btn-primary" @click="show  = !show">Show Alert</button>

        <transition name="fade" appear>
            <div class="mt-3 alert alert-info" v-if="show">
              this is some info
            </div>
         <!-- <div class="mt-3 alert alert-info" v-if="show">
              this is some info
            </div> -->
        
        </transition>

          <transition name="slide" type="animation" appear mode="out-in">
            <div class="mt-3 alert alert-info" v-if="show" key="info">
              this is some info
            </div>
            <div class="mt-3 alert alert-warning" v-else key="warning">
              this is some warning
            </div>
         <!-- <div class="mt-3 alert alert-info" v-if="show">
              this is some info
            </div> -->
      
        </transition>


              <transition 
            appear
            
            enter-active-class="animate__animated animate__bounce"
            leave-active-class="animate__animated animate__shakeX"
            
            >
            <div class="mt-3 alert alert-info" v-if="show" >
              this is some info
            </div>         
        
          </transition>

                  <hr>

        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
          <transition
          @beforeEnter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @beforeLeave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          name="test"
          :css="false" 
          >

          <!-- when using transition's javascript hooks, adding name property doesn't mean to ignore css property, to completely ignore the css class properties(name attr) add :css="false "which will ignore css property.  -->
        
            <div style="width:100px; height:100px;background-color:lightgreen"  class="mt-3" v-if="load">
              
            </div>
          </transition>
        </div>
      </div>
    </div>
    <hr>
    <button class="btn btn-primary" @click="selectedComponent = selectedComponent != 'Success' ? 'Success' : 'Danger'">Toggle Component</button>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" ></component>
    </transition> 


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
// console.log()
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";
import Success from './sucess';
import Danger from './danger';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Success,
    Danger
  },
  directives :{
  'local-highlight': {
      bind(el,binding,vnode) {
        
        let delay = 0;
        if(binding.modifiers['delay']) {
          delay = 500;
        }

        if(binding.modifiers['blink']) {
          let mainColor = binding.value;
          let secondary_color = 'blue';
          let currentColor = mainColor;

          setInterval(() => {
             currentColor == secondary_color ? currentColor= mainColor : currentColor = secondary_color;
             el.style.backgroundColor = currentColor;
          },1000);

        }
        else{
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
      }
      }
  },
data() {

return {
  user :{
    email:'',
    password:''
  },
  show:true,
  load:true,
  elementWidth : 300,
  selectedComponent : 'Success',
  numbers : [1,2,3,4,5,7]
}
},
  methods:{
    async login() {
      
      const res   = await axios.get('sanctum/csrf-cookie')
        axios.post('/login', this.user);
        this.$router.push('/dashboard');

    },

    removeItem(index) {
      this.numbers.splice(index,1)
    },

addItem( ) {
  const pos = Math.floor(Math.random() * this.numbers.length) ;
  this.numbers.splice(pos,0,this.numbers.length)
},

    beforeEnter(el) {
      console.log(`before enter`);
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },

    enter(el,done){
      console.log(`enter`);

      let round = 1;
      const interval = setInterval(() => {
        
        el.style.width = (this.elementWidth + (round * 10)) + `px`;
          round++;
          if(round == 10) {
            clearInterval(interval);
            done();
          }

      },500);
    },

    afterEnter(el) {
        console.log(`after enter`);
    },

    enterCancelled(el) {
      console.log(` enter cancelled`);
    },

    beforeLeave(el) {
      this.elementWidth = 200;
      el.style.width = `${this.elementWidth}px`;
    },

    leave(el,done) {
     let round = 1;
      const interval = setInterval(() => {
        
        el.style.width = this.elementWidth - (round * 10) + `px`;
          round++;

          if(round == 5) {
            clearInterval(interval);
            done();
          }

      },500);
      
    },

    afterLeave(el) {
    console.log(`after leave`);
    },

    leaveCancelled ( el) {
console.log(`leave cancelled`);
    },

    
  }
}
</script>


<style >

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
/* opacity: ; */
}

.fade-leave-active {
  transition: opacity 2s;
  opacity: 0;
}

.slide-enter {
opacity: 0;
}

.slide-enter-to {
  opacity: 1;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
  
}

.slide-leave {
  
}

.slide-leave-to {
  /* opacity: 1; */
  
}
.slide-leave-active {
  animation: slide-in 1s ease-out reverse;
  transition: opacity 1s;
  opacity: 0;
  position:absolute;
  
  
}

.slide-move {
  transition: transform 1s,position 1s;
}


@keyframes slide-in {
  from {
    transform : translateY(40px)
  }
  to {
    transform: translateY(0);
  }
}



@keyframes slide-out {
  from  {
    transform: translateY(0);
  }
  to {
    transform : translateY(20px)
  }
}




  
</style>