<template>
  <div class="container">
    <ul class="list-group">
      <slot></slot>
      <router-link
        :to="userLink(user.id)"
        tag="li"
        class="list-group-item"
        v-for="user in users"
        :key="user.id"
      >
        <a>{{user.name}}</a>
      </router-link>
    </ul>
    <router-view></router-view>
    <router-view name="top-header">Not Found</router-view>
    <div class="full_screen">

    </div>

    <div id="next" class="mt-5 alert alert-info">
      this is next container
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "samyak"
        },
        {
          id: 2,
          name: "company"
        }
      ]
    };
  },
  methods: {
    userLink(id) {
      return {
            name: "user-detail",
            params: { id },
            query: { locale: "en", q: 100 },
             hash: "#next"
        };
    }
  }
};
</script>

<style  scoped>
.full_screen {
  height : 110vh;
}
</style>