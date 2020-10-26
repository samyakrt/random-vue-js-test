import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
    counter : 0
    },
    getters : {
        doubleCounter (state) {
            return state.counter *2;
        },

        stringCounter(state) {
            return state.counter ;
        }
    },
    mutations : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        sayHi(state) {
            console.log(`Hi`)
        }
    },
    actions : {
        increment : (context) => {
            setTimeout(() => {
                context.commit("increment");
            },3000)
        },
        decrement(context) {
            context.commit('decrement')
        }
    }
});

export default store;
