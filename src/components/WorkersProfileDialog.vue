<template>
  <div id="workersProfileDialog">
    <div class="card">
      <div class="card-content">
        <!-- First Name -->
        <div class="field">
          <label class="label">First Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              name="firstname"
              placeholder="hint - The name or names that come before your family name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-signature"></i>
            </span>
          </div>
        </div>

        <!-- Last Name -->
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              name="lastname"
              placeholder="hint - Your Family's Name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-signature"></i>
            </span>
          </div>
        </div>

        <!-- Date of Birth -->
        <div class="field">
          <label class="label">Date of Birth</label>
          <div class="control">
            <DatePicker type="date" placeholder="Select date" style="width: 250px"></DatePicker>
          </div>
        </div>

        <!-- Gender -->
        <div class="control">
          <label class="label">Gender</label>
          <div class="select">
            <select>
              <option name="gender">Male</option>
              <option name="gender">Female</option>
              <option name="gender">They</option>
              <option name="gender">Prefer not to say</option>
            </select>
          </div>
        </div>

        <!-- Email address -->
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="e.g. hello@mail.com" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <!-- phone number -->
        <div class="field">
          <label class="label">Phone</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="e.g. +46 7xx xx xxxx"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </div>
        </div>

        <!-- Dietary Preferences -->
        <div class="field">
          <label class="label">Dietary Preferences</label>
          <div class="control">
            <textarea class="textarea" placeholder="hint-Something you cannot eat"></textarea>
          </div>
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
        }
      ]
    };
  }
};
</script>
