<template>
  <div id="cashBookPage">
    <div class="card">
      <div class="card-content">
        <div>
          <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
        </div>
        <div>
          <nav class="level">
            <p class="level-right has-text-centered">
              <a class="button is-primary is-medium" @click="onAddLogBtnClick">Add New Log</a>
            </p>
          </nav>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{
            enabled: true,
            mode: 'records'}"
          >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'action'">
                <a
                  class="fas fa-info"
                  title="info"
                  style="margin:5px;"
                  v-on:click="onRowEditClick(props.row)"
                />
                <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)"/>
              </span>
            </template>
          </vue-good-table>
        </div>
        <Modal
          fullscreen
          v-model="isCashLogDialogPopup"
          title="Edit Cashbook Log"
          ok-text="Confirm"
          cancel-text="Cancel"
          :styles="{top: '20px'}"
          @on-ok="onConfirmBtnClick"
          @on-cancel="onCancelBtnClick"
        >
          <CashLogDialog/>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import CashLogDialog from "./CashLogDialog.vue";
export default {
  name: "cashBookPage",
  components: {
    CashLogDialog
  },
  methods: {
    onAddLogBtnClick() {
      this.isCashLogDialogPopup = true;
    },
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
    this.chartSettings = {
      showLine: ["Sum"]
    };
    return {
      isCashLogDialogPopup: false,
      chartData: {
        columns: ["Date", "Income", "Expense", "Sum"],
        rows: [
          {
            Date: "1/1",
            Income: 1393,
            Expense: 942,
            Sum: 1093
          },
          {
            Date: "1/2",
            Income: 3530,
            Expense: 765,
            Sum: 3230
          },
          {
            Date: "1/3",
            Income: 2923,
            Expense: 124,
            Sum: 2623
          },
          {
            Date: "1/4",
            Income: 1723,
            Expense: 324,
            Sum: 1423
          },
          {
            Date: "1/5",
            Income: 3792,
            Expense: 3245,
            Sum: 3492
          },
          {
            Date: "1/6",
            Income: 4593,
            Expense: 561,
            Sum: 4293
          }
        ]
      },
      columns: [
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
          label: "Description",
          field: "description",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "TotalCash",
          field: "totalCash",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          date: "2011-10-31:9: 35 am",
          responsible: "Lotti Biro & Alex Stern",
          description: "Proof count",
          totalCash: "32,448"
        }
      ]
    };
  }
};
</script>
