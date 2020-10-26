<template>
    <div class="alert alert-success text-center">
        <h1>That's Correct!</h1>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
    </div>
</template>
<style>

</style>
<script>
import {EventBus } from '@/main';

    export default{
        methods: {
            onNextQuestion() {
                EventBus.$emit('confirmed');
            }
        }
    }
</script>
