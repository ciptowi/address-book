<template>
  <div class="container d-flex justify-content-center mt-5">
    <b-card v-if="!openConfirm" style="max-width: 52rem">
      <template #header>
        <h4 class="mb-0">Detail Contact</h4>
      </template>
      <b-card-text>
        <b-table-simple>
          <b-tbody>
            <b-tr>
              <b-th>Name :</b-th>
              <b-td>{{ contact.name }}</b-td>
            </b-tr>
            <b-tr>
              <b-th>Phone :</b-th>
              <b-td>{{ contact.phone }}</b-td>
            </b-tr>
            <b-tr>
              <b-th>Email :</b-th>
              <b-td>{{ contact.email }}</b-td>
            </b-tr>
            <b-tr>
              <b-th>Address :</b-th>
              <b-td>{{ contact.address }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card-text>
      <template #footer>
        <b-button size="sm" class="mx-1" @click="goBack()">Back</b-button>
        <b-button variant="warning" size="sm" class="mx-1" @click="goToEdit()"
          >Edit</b-button
        >
        <b-button
          variant="danger"
          size="sm"
          class="mx-1"
          @click="openConfirm = true"
          >Delete</b-button
        >
      </template>
    </b-card>
    <div v-if="openConfirm" class="text-center mt-5">
      <p><strong id="form-confirm-label">Are you sure, Delete it?</strong></p>
      <br />
      <div class="d-flex justify-content-center" style="column-gap: 5%">
        <b-button
          variant="outline-primary"
          class="mr-2"
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
      id: this.$route.params.id,
      contact: {},
      isError: false,
      openConfirm: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    getContactById() {
      DataService.get(this.id)
        .then((res) => {
          this.contact = res.data.data;
        })
        .catch(() => (this.isError = true));
    },
    goToEdit() {
      this.$router.push(`/edit/${this.id}`);
    },
    deleteContact() {
      DataService.delete(this.id)
        .then((res) => {
          if (res.data.success) {
            alert("Contact Deleted");
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
