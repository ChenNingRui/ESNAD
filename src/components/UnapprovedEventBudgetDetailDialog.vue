<template>
  <div id="UnapprovedEventBudgetDetailDialog">
    <div class="card">
      <div class="card-content">
        <!-- Before Counting -->
        <div class="field">
          <label class="label">Title: {{title}}</label>
        </div>

        <!-- Before Counting -->
        <div class="field">
          <label class="label">Date: {{date}}</label>
        </div>

        <!-- Before Counting -->
        <div class="field">
          <label class="label">Responsible: {{responsible}}</label>
        </div>

        <!-- Before Counting -->
        <div class="field">
          <label class="label">Total Cost: {{totalCost}}</label>
        </div>

        <!-- Revenues sheet -->
        <div class="field">
          <label class="label">Revenues</label>
          <vue-good-table
            :columns="revenuesColumns"
            :rows="revenuesRows"
            :pagination-options="{enabled: false}"
            :sort-options="{enabled: false}"
          >
            <!-- Total Revenues: -->
            <div div slot="table-actions" style="margin:5px;">
              <label class="label">Total Revenues In SEK: {{totalRevenues}}</label>
            </div>
          </vue-good-table>
        </div>

        <!-- Costs sheet -->
        <div class="field">
          <label class="label">Costs</label>
          <vue-good-table
            :columns="costsColumns"
            :rows="costsRows"
            :pagination-options="{enabled: true,mode: 'records'}"
          >
            <div div slot="table-actions" style="margin:5px;">
              <label class="label">Total Costs In SEK: {{totalCosts}}</label>
            </div>
          </vue-good-table>
        </div>

        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <a class="button is-success is-outlined">Approve</a>
            </div>

            <div class="level-item">
              <a class="button is-danger is-outlined">Disapprove</a>
            </div>

            <div class="level-item">
              <a class="button is-warning is-outlined">Abstain</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnapprovedEventBudgetDetailDialog",
  components: {},
  methods: {
    onConfirmBtnClick() {
      this.$Message.info("Clicked ok");
    },
    onCancelBtnClick() {
      this.$Message.info("Clicked cancel");
    }
  },
  data() {
    return {
      title: "white party",
      date: "10 31st 2011",
      responsible: "chen",
      totalCost: "123",
      totalRevenues: 0,
      totalCosts: 0,
      revenuesColumns: [
        {
          label: "Item",
          field: "item"
        },
        {
          label: "Unit",
          field: "unit"
        },
        {
          label: "Price/Unit",
          field: "priceUnit"
        },
        {
          label: "Currency",
          field: "currency"
        },
        {
          label: "Price/Unit in SEK",
          field: "priceInSEK"
        },
        {
          label: "Note",
          field: "note"
        }
      ],
      revenuesRows: [
        {
          item: 987426,
          priceUnit: "2011-10-31:9: 35 am",
          currency: "Chen",
          priceInSEK: "Ningrui",
          note: "1231"
        }
      ],
      costsColumns: [
        {
          label: "Item",
          field: "item"
        },
        {
          label: "Unit",
          field: "unit"
        },
        {
          label: "Price/Unit",
          field: "priceUnit"
        },
        {
          label: "Currency",
          field: "currency"
        },
        {
          label: "Price/Unit in SEK",
          field: "priceInSEK"
        },
        {
          label: "Note",
          field: "note"
        }
      ],
      costsRows: []
    };
  }
};
</script>
