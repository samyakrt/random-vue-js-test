<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <router-link to="/user" tag="a" class="nav-link" active-class="active">User</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/" class="nav-link" exact active-class="active" tag="a">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" exact active-class="active" tag="a">Dashboard</router-link>
        </li>
    </ul>
</template>