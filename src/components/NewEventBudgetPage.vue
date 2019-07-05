<template>
  <div id="NewEventBudgetPage">
    <div class="card">
      <div class="card-content">
        <!-- Event Name -->
        <div class="field">
          <label class="label">Event's Name</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Date -->
        <div class="field">
          <label class="label">Date:</label>
        </div>

        <!-- 	Responsible -->
        <div class="field">
          <label class="label">Main Responsible:</label>
        </div>

        <!-- Cost  Result-->
        <div class="field">
          <label class="label">Cost Result:</label>
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
            :pagination-options="{enabled: false}"
            :sort-options="{enabled: false}"
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
                    <select>
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
            :pagination-options="{enabled: true,mode: 'records'}"
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
                    <select>
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

        <!-- Submit button -->
        <div class="field">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
        </div>

        <!-- end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cashLogDialog",
  components: {},
  methods: {
    onEditBtnClick() {
      this.isEdit = this.isEdit ? false : true;
    },
    onRowEditClick() {}
  },
  data() {
    return {
      isEdit: false,
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
        },
        {
          label: "Action",
          field: "action"
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
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      costsRows: []
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
