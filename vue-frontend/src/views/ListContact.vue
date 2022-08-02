<template>
  <div class="container">
    <h1>List Contact</h1>
    <button v-on:click="this.goToCreate()" class="btn btn-success mx-2">
      Create New
    </button>

    <table v-if="!this.openConfirm" class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="contact.id">
          <th>{{ index++ }}</th>
          <td>{{ contact.name }}</td>
          <td>{{ contact.phone }}</td>
          <td>
            <b-button
              size="sm"
              class="mx-1"
              variant="primary"
              @click="goToDetail(contact.id)"
              >View</b-button
            >
            <button
              v-on:click="this.goToEdit(contact.id)"
              class="btn btn-sm btn-warning mx-2"
            >
              Edit
            </button>
            <b-button
              size="sm"
              class="mx-1"
              variant="danger"
              @click="askDelete(contact.id)"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="this.isError" class="d-flex justify-content-center mb-5">
      <h3 class="text-danger">Erorr Fetching data</h3>
    </div>
    <div
      v-if="this.contacts.length < 1"
      class="d-flex justify-content-center mt-5"
    >
      <b-spinner></b-spinner>
    </div>
    <div v-if="openConfirm" class="text-center mt-5">
      <p><strong id="form-confirm-label">Are you sure, Delete it?</strong></p>
      <br />
      <div class="d-flex justify-content-center" style="column-gap: 5%">
        <b-button
          variant="outline-primary"
          class="mr-3"
          @click="this.openConfirm = false"
        >
          Cancel
        </b-button>
        <b-button @click="deleteContact" variant="outline-danger">OK</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataServices";

export default {
  data() {
    return {
      contacts: [],
      isError: false,
      openConfirm: false,
      idSelected: 0,
    };
  },
  methods: {
    getContact() {
      DataService.getAll()
        .then((res) => {
          this.contacts = res.data.data;
        })
        .catch((err) => {
          console.log(err.message);
          this.isError = true;
        });
    },
    goToCreate() {
      this.$router.push("/add");
    },
    goToDetail(id) {
      this.$router.push(`/view/${id}`);
    },
    goToEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
    askDelete(id) {
      this.idSelected = id;
      this.openConfirm = true;
    },
    deleteContact() {
      this.openConfirm = false;
      DataService.delete(this.idSelected)
        .then(() => {
          alert("Contact Deleted");
          this.getContact();
        })
        .catch(() => (this.isError = true));
    },
  },
  mounted() {
    this.getContact();
  },
};
</script>
