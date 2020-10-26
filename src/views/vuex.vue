<template>
    <div>
        <Counter />        
        <Value />
    </div>
</template>

<script>
import Counter  from '@/components/vuex-test/counter.vue';
import Value  from '@/components/vuex-test/value.vue';
export default {
    components : {
        Counter,
        Value
    }
}
</script>