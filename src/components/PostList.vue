<template>
  <div id="list-comment-container" class="container">
    <h2>Posts</h2>
    <div v-for="post in posts" :key="post.id" class="card mb-2">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <p class="card-text"><strong>Id: </strong>{{post.id}}</p>
            </div>
            <div class="col-4">
              <p class="card-text"><strong>UserId: </strong>{{post.userId}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p class="card-text"><strong>Title: </strong> {{post.title}}</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <p class="card-text">{{post.body}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import httpClient from "../providers/httpClient";

export default {
  name: "post-list",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    httpClient.get("/posts")
      .then(response => {
        this.posts = response.data.filter(post => Number(post.id) % 2 === 1)
      })
      .catch(() => {
        alert("An error ocurrent on load data");
      })
  },
};
</script>

<style>
#list-comment-container {
  max-width: 1000px;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>