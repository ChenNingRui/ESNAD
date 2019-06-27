<template>
  <div id="cashBookPage">
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
      showLine: ["下单用户"]
    };
    return {
      isCashLogDialogPopup: false,
      chartData: {
        columns: ["日期", "访问用户1", "访问用户2", "下单用户", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户1: 1393,
            访问用户2: 942,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: "1/2",
            访问用户1: 3530,
            访问用户2: 765,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: "1/3",
            访问用户1: 2923,
            访问用户2: 124,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: "1/4",
            访问用户1: 1723,
            访问用户2: 324,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: "1/5",
            访问用户1: 3792,
            访问用户2: 3245,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: "1/6",
            访问用户1: 4593,
            访问用户2: 561,
            下单用户: 4293,
            下单率: 0.78
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
