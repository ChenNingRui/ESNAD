<template>
  <div id="cashLogDialog">
    <div class="card">
      <div class="card-content">
        <!-- Timestamp -->
        <div class="field">
          <label class="label">Timestamp: {{timestamp}}</label>
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
          <textarea class="textarea" placeholder="Description">Office Hours</textarea>
        </div>

        <!-- counting sheet -->
        <div class="field">
          <label class="label">Counting Sheet</label>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{enabled: true,mode: 'records'}"
            :sort-options="{
                enabled: false,
            }"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'beforeQuantity'">
                <input class="input" type="text" placeholder="Before Quantity">
              </span>
              <span v-else-if="props.column.field == 'afterQuantity'">
                <input class="input" type="text" placeholder="After Quantity">
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- Refund and others -->
        <div class="field">
          <label class="label">Refund and others</label>
          <textarea class="textarea" placeholder="Description">
Refund and others (during sign-up): 
Description \ Income \ Expenses
Bank, refund and others (outside of sign-up):
Description \ Income \ Expenses
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cashLogDialog",
  components: {},
  data() {
    return {
      timestamp: "10 31st 2011",
      beforeCounting: "34532",
      afterCounting: "3243255",
      incomingAndOutgoings: "-23",
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
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
