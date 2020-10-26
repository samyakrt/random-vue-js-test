<template>
    <div class="">
        <h4>this is user base component {{money | moneyFormat}}</h4>
            <input type="text" v-model="search">
        <ul>
            <li v-for="(fruit,index) in filteredFruits" :key="index" >
                {{fruit}}
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import {Mixin} from './fruitMixin';

export default {
    mixins:[Mixin]
}
</script>