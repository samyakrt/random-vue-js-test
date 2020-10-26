<template>
    <div>
        user detail {{$route.params.id}}

        <span class="text-danger">{{$route.query.locale}}</span>

        <div style="height:700px"></div>
        <div id="data">
            {{$route.query}}
        </div>
    </div>
</template>