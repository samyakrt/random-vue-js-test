<template>
    <div>
        <span class="text-info">the value of counter {{doubleCounter}}</span>
        <span class="text d-block text-info">No. of  {{stringCounter}} clicks</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed : {
        ...mapGetters([
            'stringCounter',
            `doubleCounter`
        ])
    }
}
</script>