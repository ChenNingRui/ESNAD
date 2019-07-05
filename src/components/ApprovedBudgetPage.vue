<template>
  <div id="approvedBudgetPage">
    <div class="card">
      <div class="card-content">
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{enabled: true,mode: 'records'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'action'">
              <a
                class="fas fa-info"
                title="edit"
                style="margin:5px;"
                v-on:click="onRowCheckClick(props.row)"
              />
              <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)"/>
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
    <Modal
      fullscreen
      v-model="isDetailCheckDialogPopup"
      title="Budget Detail "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-cancel="onCancelBtnClick"
    >
      <ApprovedBudgetDetailDialog/>
    </Modal>
  </div>
</template>

<script>
import ApprovedBudgetDetailDialog from "./ApprovedBudgetDetailDialog";

export default {
  name: "approvedBudgetPage",
  components: {
    ApprovedBudgetDetailDialog
  },
  methods: {
    onRowEditClick() {},
    onRowCheckClick(params) {
      this.isDetailCheckDialogPopup = true;
      return params;
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
      isDetailCheckDialogPopup: false,
      columns: [
        {
          label: "Title",
          field: "title",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Date",
          field: "date",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MM Do YYYY",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Responsible",
          field: "responsible",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Total Cost",
          field: "totalCost"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          title: "white party",
          date: "2011-10-31:9: 35 am",
          responsible: "Chen",
          lastName: "Ningrui",
          totalCost: "3000kr"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
