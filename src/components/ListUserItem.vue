<template>
  <div class="card mb-2">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col-1">
            <p class="card-text"><strong>Id: </strong>{{user.id}}</p>
          </div>
          <div class="col-3">
            <p class="card-text"><strong>Name: </strong>{{user.name}}</p>
          </div>
          <div class="col-3">
            <p class="card-text"><strong>Username: </strong>{{user.username}}</p>
          </div>
          <div class="col-5">
            <p class="card-text"><strong>Email: </strong> {{user.email}}</p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-7">
            <p class="card-text">
              <strong>Address: </strong> {{address}}
            </p>
          </div>
          <div class="col-2">
            <p class="card-text"><strong>Lat: </strong>{{user.address.geo.lat}}</p>
          </div>
          <div class="col-2">
            <p class="card-text"><strong>lng: </strong>{{user.address.geo.lng}}</p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-4">
            <p class="card-text">
              <strong>Phone: </strong>{{user.phone}}
            </p>
          </div>
          <div class="col-4">
            <p class="card-text">
              <strong>Website: </strong
              ><a :href="'https:' + user.website">{{user.website}}</a>
            </p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12">
            <p class="card-text">
              <strong>Company: </strong> {{company}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-user-item",
  props: ["user"],
  computed: {
    address() {
      return `${this.user.address.street}, ${this.user.address.suite}, ${this.user.address.city}.`;
    },
    company() {
      return `${this.user.company.name}, ${this.user.company.catchPhrase}, ${this.user.company.bs}.`;
    }
  }
};
</script>