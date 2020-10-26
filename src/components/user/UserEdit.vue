<template>
    <div>
        user of {{$route.params.id}} id
    </div>
</template>
<script>
export default {
    
    created() {
        console.log(`created`)
    }
}
</script>