<template>
  <div id="ApprovedEventBudgetDetailDialog">
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

        <!-- edit button -->
        <div class="field">
          <div class="control">
            <button class="button is-warning" @click="onEditBtnClick">Edit</button>
          </div>
        </div>

        <template>
          <span v-if="isEdit">
            <!-- Subject -->
            <div class="field">
              <div class="control">
                <div class="select">
                  <select>
                    <option>Revenue</option>
                    <option>Cost</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Currency -->
            <div class="field">
              <div class="control">
                <div class="select">
                  <select>
                    <option>SEK</option>
                    <option>EUR</option>
                    <option>DKK</option>
                    <option>NOK</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- item -->
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Item" />
              </div>
            </div>

            <!-- Unit -->
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  onkeyup="this.value=this.value.replace(/\D/g,'')"
                  placeholder="Unit"
                />
              </div>
            </div>

            <!-- Price/Unit -->
            <div class="field">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  onkeyup="this.value=this.value.replace(/\D/g,'')"
                  placeholder="Price/Unit"
                />
              </div>
            </div>

            <!-- note -->
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Note"></textarea>
              </div>
            </div>

            <!-- add button -->
            <div class="field">
              <div class="control">
                <button class="button is-info">Add</button>
              </div>
            </div>

            <!-- end -->
          </span>
        </template>

        <!-- Revenues sheet -->
        <div class="field">
          <label class="label">Revenues</label>
          <vue-good-table
            :columns="revenuesColumns"
            :rows="revenuesRows"
            :pagination-options="{
            enabled: true,
            mode: 'records'}"
          >
            <!-- Total Revenues: -->
            <div div slot="table-actions" style="margin:5px;">
              <label class="label">Total Revenues In SEK: {{totalRevenues}}</label>
            </div>

            <template slot="table-row" slot-scope="props">
              <span v-if="isEdit">
                <span v-if="props.column.field == 'item'">
                  <input class="input" type="text" v-model="props.row.item" />
                </span>
                <span v-if="props.column.field == 'unit'">
                  <input
                    class="input"
                    type="text"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                    v-model="props.row.unit"
                  />
                </span>
                <span v-if="props.column.field == 'priceUnit'">
                  <input
                    class="input"
                    type="text"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                    v-model="props.row.priceUnit"
                  />
                </span>
                <span v-if="props.column.field == 'note'">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    wrap="hard"
                    style="word-wrap : break-word;"
                    v-model="props.row.note"
                  ></textarea>
                </span>
                <span v-if="props.column.field == 'priceInSEK'">
                  <label>{{props.row.priceInSEK}}</label>
                </span>
                <span v-if="props.column.field == 'currency'">
                  <div class="select">
                    <select v-model="props.row.currency">
                      <option>SEK</option>
                      <option>EUR</option>
                      <option>DKK</option>
                      <option>NOK</option>
                      <option>USD</option>
                      <option>GBP</option>
                    </select>
                  </div>
                </span>
              </span>
              <span v-else>
                <span v-if="props.column.field == 'item'">
                  <label>{{props.row.item}}</label>
                </span>
                <span v-if="props.column.field == 'unit'">
                  <label>{{props.row.unit}}</label>
                </span>
                <span v-if="props.column.field == 'priceUnit'">
                  <label>{{props.row.priceUnit}}</label>
                </span>
                <span v-if="props.column.field == 'currency'">
                  <label>{{props.row.currency}}</label>
                </span>
                <span v-if="props.column.field == 'note'">
                  <label>{{props.row.note}}</label>
                </span>
                <span v-if="props.column.field == 'priceInSEK'">
                  <label>{{props.row.priceInSEK}}</label>
                </span>
              </span>

              <span v-if="props.column.field == 'action'">
                <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)" />
              </span>
            </template>
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
            <template slot="table-row" slot-scope="props">
              <span v-if="isEdit">
                <span v-if="props.column.field == 'item'">
                  <input class="input" type="text" v-model="props.row.item" />
                </span>
                <span v-if="props.column.field == 'unit'">
                  <input
                    class="input"
                    type="text"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                    v-model="props.row.unit"
                  />
                </span>
                <span v-if="props.column.field == 'priceUnit'">
                  <input
                    class="input"
                    type="text"
                    onkeyup="this.value=this.value.replace(/\D/g,'')"
                    v-model="props.row.priceUnit"
                  />
                </span>
                <span v-if="props.column.field == 'note'">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    wrap="hard"
                    style="word-wrap : break-word;"
                    v-model="props.row.note"
                  ></textarea>
                </span>
                <span v-if="props.column.field == 'priceInSEK'">
                  <label>{{props.row.priceInSEK}}</label>
                </span>
                <span v-if="props.column.field == 'currency'">
                  <div class="select">
                    <select v-model="props.row.currency">
                      <option>SEK</option>
                      <option>EUR</option>
                      <option>DKK</option>
                      <option>NOK</option>
                      <option>USD</option>
                      <option>GBP</option>
                    </select>
                  </div>
                </span>
              </span>
              <span v-else>
                <span v-if="props.column.field == 'item'">
                  <label>{{props.row.item}}</label>
                </span>
                <span v-if="props.column.field == 'unit'">
                  <label>{{props.row.unit}}</label>
                </span>
                <span v-if="props.column.field == 'priceUnit'">
                  <label>{{props.row.priceUnit}}</label>
                </span>
                <span v-if="props.column.field == 'currency'">
                  <label>{{props.row.currency}}</label>
                </span>
                <span v-if="props.column.field == 'note'">
                  <label>{{props.row.note}}</label>
                </span>
                <span v-if="props.column.field == 'priceInSEK'">
                  <label>{{props.row.priceInSEK}}</label>
                </span>
              </span>

              <span v-if="props.column.field == 'action'">
                <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)" />
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
  name: "ApprovedEventBudgetDetailDialog",
  components: {},
  methods: {
    onRowEditClick() {},
    onEditBtnClick() {
      this.isEdit = this.isEdit ? false : true;
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
      isEdit: false,
      title: "white party",
      date: "10 31st 2011",
      mainResponsible: "chen",
      subResponsible: "Ling Xiao Mike",
      totalCosts: "123",
      totalRevenues: 0,
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
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      revenuesRows: [
        {
          item: 987426,
          unit: 2,
          priceUnit: "2011-10-31:9: 35 am",
          currency: "SEK",
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
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      costsRows: [
        {
          item: 987426,
          unit: 2,
          priceUnit: "2011-10-31:9: 35 am",
          currency: "Chen",
          priceInSEK: "Ningrui",
          note: "1231"
        }
      ]
    };
  }
};
</script>
