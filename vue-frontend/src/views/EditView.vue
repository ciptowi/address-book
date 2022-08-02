<template>
  <div class="container d-flex justify-content-center mt-5">
    <b-card style="max-width: 32rem">
      <h3 class="text-center">Edit Contact</h3>
      <div class="submit-form p-3">
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
            @click="updateContact()"
            class="mx-2"
          >
            Update
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
      id: this.$route.params.id,
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
    getContactById() {
      DataService.get(this.id)
        .then((res) => {
          this.form = res.data.data;
        })
        .catch(() => (this.isError = true));
    },
    updateContact() {
      DataService.update(this.id, this.form)
        .then((res) => {
          if (res.data.success) {
            alert("Contact Updated");
            this.$router.push("/");
          }
        })
        .catch(() => (this.isError = true));
    },
  },
  mounted() {
    this.getContactById();
  },
};
</script>
