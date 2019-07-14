<template>
  <div id="workersProfileDialog">
    <div class="card">
      <div class="card-content">
        <!-- First Name -->
        <div class="field">
          <label class="label">First Name</label>
        </div>

        <!-- Last Name -->
        <div class="field">
          <label class="label">Last Name</label>
        </div>

        <!-- Date of Birth -->
        <div class="field">
          <label class="label">Date of Birth</label>
        </div>

        <!-- Gender -->
        <div class="field">
          <label class="label">Gender</label>
        </div>

        <!-- Email address -->
        <div class="field">
          <label class="label">Email</label>
        </div>

        <!-- phone number -->
        <div class="field">
          <label class="label">Phone</label>
        </div>

        <!-- Dietary Preferences -->
        <div class="field">
          <label class="label">Dietary Preferences</label>
        </div>

        <div class="field">
          <label class="label">Benefit</label>
          <vue-good-table :columns="columns" :rows="rows">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'action'">
                <span v-if="props.row.got">
                  <a
                    class="fas fa-hand-holding"
                    title="unpayed"
                    style="margin:10px;"
                    v-on:click="onRowEditClick(props.row)"
                  ></a>
                </span>
                <span v-else>
                  <a
                    class="fas fa-hand-holding-usd"
                    title="payed"
                    style="margin:10px;"
                    v-on:click="onRowEditClick(props.row)"
                  />
                </span>

                <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)" />
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workersProfileDialog",
  components: {},
  methods: {
    onRowEditClick(value) {
      value.got = value.got ? false : true;
    }
  },
  data() {
    return {
      columns: [
        {
          label: "Event",
          field: "event"
        },
        {
          label: "Date",
          field: "date",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MM Do YYYY"
        },
        {
          label: "Benefit",
          field: "benefit"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          event: "white party",
          date: "2011-10-31",
          benefit: "ticket",
          got: true
        },
        {
          event: "white party",
          date: "2011-10-31",
          benefit: "ticket",
          got: true
        }
      ]
    };
  }
};
</script>
