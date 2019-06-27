<template>
  <div id="cashLogDialog">
    <div class="card">
      <div class="card-content">
        <!-- Date -->
        <div class="field">
          <label class="label">Date: {{date}}</label>
        </div>

        <!-- Before Counting -->
        <div class="field">
          <label class="label">Before Counting: {{beforeCounting}}</label>
        </div>

        <!-- After Counting -->
        <div class="field">
          <label class="label">After Counting: {{afterCounting}}</label>
        </div>

        <!-- incoming and outgoings -->
        <div class="field">
          <label class="label">Incoming and Outgoings: {{incomingAndOutgoings}}</label>
        </div>

        <!-- 	Responsible -->
        <div class="field">
          <label class="label">Responsible</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" name="Responsible" placeholder="Responsible">
            <span class="icon is-small is-left">
              <i class="fas fa-users"></i>
            </span>
          </div>
        </div>

        <!-- Description -->
        <div class="field">
          <label class="label">Description</label>
          <input class="input" type="text" placeholder="Description" value="Office Hour">
        </div>

        <!-- counting sheet -->
        <div class="field">
          <label class="label">Counting Sheet</label>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{enabled: false}"
            :sort-options="{enabled: false}"
          >
            >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'beforeQuantity'">
                <input
                  class="input"
                  type="text"
                  onkeyup="this.value=this.value.replace(/\D/g,'')"
                  placeholder="Before Quantity"
                >
              </span>
              <span v-else-if="props.column.field == 'afterQuantity'">
                <input
                  class="input"
                  type="text"
                  onkeyup="this.value=this.value.replace(/\D/g,'')"
                  placeholder="After Quantity"
                >
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- Bank, refund and others -->
        <div class="field">
          <label class="label">Bank, refund and others</label>
          <div class="select">
            <select v-model="status">
              <option>During Signup</option>
              <option>Outside of Signup</option>
            </select>
          </div>
        </div>

        <!-- What, date and name -->
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="What, date and name" v-model="reason">
          </div>
        </div>

        <!-- Cash In -->
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              onkeyup="this.value=this.value.replace(/\D/g,'')"
              placeholder="Cash In"
              v-model="income"
            >
          </div>
        </div>

        <!-- Cash Out -->
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              onkeyup="this.value=this.value.replace(/\D/g,'')"
              placeholder="Cash Out"
              v-model="expense"
            >
          </div>
        </div>

        <!-- Add button -->
        <div class="field">
          <div class="control">
            <a class="button is-info" @click="onAddBtnClick()">Add</a>
          </div>
        </div>

        <!-- Bank, refund and others table -->
        <div class="field">
          <vue-good-table
            :columns="balenceColumns"
            :rows="balenceRows"
            :pagination-options="{enabled: true,mode: 'records'}"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'action'">
                <a
                  class="fas fa-trash"
                  title="remove"
                  style="margin:5px;"
                  v-on:click="onRowEditClick(props.row)"
                />
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cashLogDialog",
  components: {},
  methods: {
    onRowEditClick(props) {
      if (props.timestamp === "undefined") return;
      for (let i = 0, length = this.balenceRows.length; i < length; i++) {
        let element = this.balenceRows[i];
        if (
          element.timestamp !== "undefined" &&
          element.timestamp === props.timestamp
        ) {
          this.balenceRows.splice(i, 1);
          return;
        }
      }
    },
    onAddBtnClick() {
      let item = new Object();
      item.reason = this.reason;
      item.status = this.status;
      item.income = this.income;
      item.expense = this.expense;
      item.timestamp = new Date().getTime();
      this.balenceRows.push(item);
    }
  },
  data() {
    return {
      date: "10 31st 2011",
      beforeCounting: "34532",
      afterCounting: "3243255",
      incomingAndOutgoings: "-23",
      status: "During Signup",
      reason: "",
      income: "",
      expense: "",
      columns: [
        {
          label: "Units",
          field: "units"
        },
        {
          label: "Quantity(Before Counting)",
          field: "beforeQuantity"
        },
        {
          label: "Quantity(After Counting)",
          field: "afterQuantity"
        }
      ],
      rows: [
        {
          units: "kr 1.00"
        },
        {
          units: "kr 2.00"
        },
        {
          units: "kr 5.00"
        },
        {
          units: "kr 10.00"
        },
        {
          units: "kr 20.00"
        },
        {
          units: "kr 50.00"
        },
        {
          units: "kr 100.00"
        },
        {
          units: "kr 200.00"
        },
        {
          units: "kr 500.00"
        },
        {
          units: "kr 1,000.00"
        }
      ],
      balenceColumns: [
        {
          label: "Status",
          field: "status"
        },
        {
          label: "What, date and name",
          field: "reason"
        },
        {
          label: "Cash in",
          field: "income"
        },
        {
          label: "Cash out",
          field: "expense"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      balenceRows: []
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
