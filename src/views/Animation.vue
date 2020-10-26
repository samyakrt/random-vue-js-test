<template>
    <div>
        <transition name="flip" mode="out-in">
            <component :is="mode"></component>
        </transition>
    </div>
</template>

<script>
import Answer from '../components/animation/Answer';
import Question from '../components/animation/Question';
import {EventBus } from '@/main';

export default {

data() {

return  {
    show:false,
    mode : 'Question'
}
},
components : {
    Answer,
    Question
},

created () {
    EventBus.$on('answered',(data) => {
        this.show = true;
        this.mode = 'Answer'
    });

    EventBus.$on('confirmed',() => {
        this.show = false;
        this.mode="Question"
    })
}
}
</script>


<style scoped>

.flip-enter {
/* opacity: 0; */
transform : rotateY(90deg);
}
.flip-enter-active {
    /* transition :opacity 1s ease-in forwards; */
    transition: transform .5s;

}

.flip-leave {
transform : rotateY(0deg);
}
.flip-leave-active {

      transition: transform .5s;
      transform : rotateY(90deg);
}
</style>