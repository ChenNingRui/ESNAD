<template>
  <div id="UnapprovedEventBudgetPage">
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
      <UnapprovedEventBudgetDetailDialog />
    </Modal>
  </div>
</template>

<script>
import UnapprovedEventBudgetDetailDialog from "./UnapprovedEventBudgetDetailDialog";

export default {
  name: "UnapprovedEventBudgetPage",
  components: {
    UnapprovedEventBudgetDetailDialog
  },
  methods: {
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
          label: "Main Responsible",
          field: "mainResponsible",
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
          mainResponsible: "Chen",
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
