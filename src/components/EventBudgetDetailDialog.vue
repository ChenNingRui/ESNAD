<template>
  <div id="EventBudgetDetailDialog">
    <div class="card">
      <div class="card-content">
        <!-- Title -->
        <div class="field">
          <label class="label">Title: {{title}}</label>
        </div>

        <!-- Start Date -->
        <div class="field">
          <label class="label">Start date:</label>
        </div>

        <!-- end Date -->
        <div class="field">
          <label class="label">End date:</label>
        </div>

        <!-- main Responsible -->
        <div class="field">
          <label class="label">Main Responsible: {{mainResponsible}}</label>
        </div>

        <!-- sub Responsible -->
        <div class="field">
          <label class="label">Sub Responsible: {{subResponsible}}</label>
        </div>

        <!-- Total Costs -->
        <div class="field">
          <label class="label">Total Costs: {{totalCosts}}</label>
        </div>

        <!-- Revenues sheet -->
        <div class="field">
          <label class="label">Revenues</label>
          <vue-good-table
            :columns="costsColumns"
            :rows="costsRows"
            :pagination-options="{
            enabled: true,
            mode: 'records'}"
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
            :pagination-options="{
            enabled: true,
            mode: 'records'}"
          >
            <div div slot="table-actions" style="margin:5px;">
              <label class="label">Total Costs In SEK: {{totalCosts}}</label>
            </div>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventBudgetDetailDialog",
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
      mainResponsible: "Chen",
      subResponsible: "Ling Xiao Mike",
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
