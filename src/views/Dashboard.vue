<template>
    <div class="dashboard">
        <h2>Dashboard vuew</h2>

        <button @click="logout">logout</button>
                    <input type="text" v-model="search">
        <ul>
            <li v-for="(fruit,index) in filteredFruits" :key="index" >
                {{fruit}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";
import {Mixin} from '@/components/user/fruitMixin';

export default {
    mixins:[Mixin],
    data() {

        return {
            email:''
        }
    },
    async mounted() {
        // const {data} = await axios.get('api/user');
        // console.log(res);
        // this.email = data.email;
    },

    methods: {
        async logout() {
            await axios.post('/logout');
            this.$router.push({name:'home'})
        }
    }

}
</script>