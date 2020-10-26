<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>

        <button class="btn ml-3 btn-primary" @click="decrement">decrement</button>
    </div>
</template>


<script>
import {mapMutations,mapActions} from 'vuex';

export default {
   
    
    methods : {
        // ...mapMutations([
        //     'increment',
        //     'decrement'
        // ]),

        ...mapActions([
            'increment'
        ])
    }
}
</script>