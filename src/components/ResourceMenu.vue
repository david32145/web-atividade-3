<template>
  <div class="mt-2 menu-container">
    <div class="menu-content">
      <div>
        <router-link to="/users" role="buttom" class="btn btn-primary">List Users</router-link>
      </div>
      <div>
        <router-link to="/todos" role="buttom" class="btn btn-primary">List Todos</router-link>
      </div>
      <div>
        <router-link to="/photos" role="buttom" class="btn btn-primary">List Photos</router-link>
      </div>
      <div>
        <router-link to="/comments" role="buttom" class="btn btn-primary">List Comments</router-link>
      </div>
      <div>
        <router-link to="/posts" role="buttom" class="btn btn-primary">List Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resource-menu'
}
</script>

<style>
.menu-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
}

.menu-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>