<template>
    <div class="error-page">
        <div class="text-message">
            <h3 class="text-code">404</h3>
            <p class="message">Page Not Found</p>
        </div>
    </div>
</template>

<style scoped>
.error-page{
    height:calc(100vh - 40px);
    background-color:#567FA8;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.text-message{
    color:#fff;
    text-align: center;
}

.message {
    font-size:30px;
}
/* .text-message {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
} */

</style>