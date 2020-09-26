<template>
  <div id="list-comment-container" class="container">
    <h2>Comments</h2>
    <div v-for="comment in comments" :key="comment.id" class="card mb-2">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <p class="card-text"><strong>Id: </strong>{{comment.id}}</p>
            </div>
            <div class="col-2">
              <p class="card-text"><strong>PostId: </strong>{{comment.postId}}</p>
            </div>
            <div class="col-4">
              <p class="card-text"><strong>Name: </strong> {{comment.name}}</p>
            </div>
             <div class="col-4">
              <p class="card-text"><strong>Email: </strong> {{comment.email}}</p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <p class="card-text">{{comment.body}}</p>
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
  name: "comment-list",
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    httpClient.get("/comments")
      .then(response => {
        this.comments = response.data.filter(comment => Number(comment.id) % 2 === 0)
      })
      .catch(() => {
        alert('An error ocurrent on load data')
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