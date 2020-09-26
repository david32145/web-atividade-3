<template>
  <div id="list-todo-container" class="container">
    <h2>Photos</h2>
    <div class="gallery">
      <img v-for="photo in photos" :key="photo.id" :src="photo.url" />
    </div>
  </div>
</template>

<script>
import httpClient from "../providers/httpClient";

export default {
  name: "photo-list",
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    httpClient
      .get("/photos")
      .then((response) => {
        this.photos = response.data.filter((photo) => photo.albumId === 3);
      })
      .catch(() => {
        alert("An error ocurrent on load data");
      });
  },
};
</script>

<style>
#list-todo-container {
  max-width: 1000px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.gallery {
  width: 1000px;
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px 150px;
  row-gap: 20px;
  column-gap: 15px;
}

.gallery img {
  width: 150px;
  height: 150px;
}
</style>