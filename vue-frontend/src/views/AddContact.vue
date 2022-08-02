<template>
  <div class="container d-flex justify-content-center mt-5">
    <b-card style="max-width: 32rem">
      <h3 class="text-center">Create New Contact</h3>
      <div class="submit-form p-3" @submit="saveContact">
        <div class="form-group">
          <label for="title">Name</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="form.name"
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="description">Phone</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="form.phone"
            name="phone"
          />
        </div>
        <div class="form-group">
          <label for="description">Email</label>
          <input
            type="email"
            class="form-control"
            required
            v-model="form.email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="description">Address</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="form.address"
            name="address"
          />
        </div>
        <div class="mt-3 text-center">
          <b-button size="sm" v-on:click="this.goBack()" class="mx-2">
            Back
          </b-button>
          <b-button
            variant="success"
            size="sm"
            @click="saveContact"
            class="mx-2"
          >
            Submit
          </b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import DataService from "../services/DataServices";

export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
      isError: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    saveContact() {
      DataService.create(this.form)
        .then((res) => {
          if (res.data.success) {
            alert("Contact Created Successfuly");
            this.$router.push("/");
          }
        })
        .catch((err) => {
          alert(err.message);
          this.isError = true;
        });
    },
  },
};
</script>
