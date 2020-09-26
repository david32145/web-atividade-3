<template>
  <div id="list-todo-container" class="container">
    <h2>Todos</h2>
    <div v-for="todo in todos" :key="todo.id" class="card mb-2">
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <p class="card-text"><strong>Id: </strong>{{todo.id}}</p>
            </div>
            <div class="col-3">
              <p class="card-text"><strong>UserId: </strong>{{todo.userId}}</p>
            </div>
            <div class="col-3">
              <p class="card-text"><strong>Completed</strong></p>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12">
              <p class="card-text"><strong>Title: </strong>{{todo.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import httpClient from '../providers/httpClient';

export default {
  name: "todo-list",
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    httpClient.get("/todos")
      .then(response => {
        this.todos = response.data.filter(todo => todo.userId === 2 && todo.completed)
      })
      .catch(() => {
        alert('An error ocurrent on load data')
      })
  }
};
</script>

<style>
#list-todo-container {
  max-width: 1000px;
  margin-top: 40px;
}
</style>