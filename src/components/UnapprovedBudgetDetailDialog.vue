<template>
  <div id="unapprovedBudgetDetailDialog">
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

        <div class="field">
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
            enabled: true,
            mode: 'records'}"
          ></vue-good-table>
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
  name: "unapprovedBudgetDetailDialog",
  components: {},
  methods: {
    onRowEditClick() {
      this.isCashLogDialogPopup = true;
    },
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
      columns: [
        {
          label: "Item's Name",
          field: "itemName"
        },
        {
          label: "Unit",
          field: "unit"
        },
        {
          label: "Price",
          field: "price"
        },
        {
          label: "Total",
          field: "total"
        },
        {
          label: "Note",
          field: "note"
        }
      ],
      rows: [
        {
          itemName: "apple",
          unit: "3",
          price: "3",
          total: "9",
          note: "abc"
        }
      ]
    };
  }
};
</script>
