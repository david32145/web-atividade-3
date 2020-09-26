<template>
  <div id="list-users-container" class="container">
    <h2>Users</h2>
    <list-user-item v-for="user in users" :key="user.id" :user="user"></list-user-item>
  </div>
</template>

<script>
import ListUserItem from "./ListUserItem";
import httpClient from '../providers/httpClient';

export default {
  components: {
    ListUserItem,
  },
  data(){
    return {
      users: []
    }
  },
  name: "list-users",
  mounted() {
    httpClient.get("/users")
      .then(response => {
        this.users = response.data.slice(0, 5);
      })
      .catch(() => {
        alert('An error ocurrent on load data')
      })
  }
};
</script>

<style>
#list-users-container {
  max-width: 1000px;
  margin-top: 40px;
}
</style>