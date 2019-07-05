<template>
  <div id="newBudgetPage">
    <div class="card">
      <div class="card-content">
        <!-- Date -->
        <div class="field">
          <label class="label">Date</label>
          <div class="control">
            <DatePicker type="date" placeholder="Date" style="width: 250px"></DatePicker>
          </div>
        </div>

        <!-- Title -->
        <div class="field">
          <label class="label">Title</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Title" value="Event" />
            <span class="icon is-small is-left">
              <i class="fas fa-shopping-cart"></i>
            </span>
          </div>
        </div>

        <!-- 	Responsible -->
        <div class="field">
          <label class="label">Responsible</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" name="Responsible" placeholder="Responsible" />
            <span class="icon is-small is-left">
              <i class="fas fa-users"></i>
            </span>
          </div>
        </div>

        <!-- Item Adding -->
        <!-- edit -->
        <template>
          <span v-if="isEdit">
            <!-- item-->
            <div class="field">
              <label class="label">Item's Name</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  name="Item"
                  placeholder="Item's Name"
                  v-model="item"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>

            <!-- units -->
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  v-model="units"
                  class="input"
                  type="text"
                  name="Units"
                  onkeyup="this.value=this.value.replace(/\D/g,'')"
                  placeholder="Units"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-coins"></i>
                </span>
              </div>
            </div>

            <!-- Price/Unit -->
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  v-model="price"
                  class="input"
                  type="text"
                  onkeyup="this.value=this.value.replace(/\D/g,'')"
                  placeholder="Price/Unit"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-dollar-sign"></i>
                </span>
              </div>
            </div>

            <!-- note -->
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Note" v-model="note"></textarea>
              </div>
            </div>

            <!-- Add button -->
            <div class="field">
              <div class="control">
                <a class="button is-info" @click="onAddBtnClick()">Add</a>
              </div>
            </div>
          </span>
        </template>

        <!-- incoming and outgoings -->
        <div class="field">
          <label class="label">Total Costs: {{totalCosts}}</label>
        </div>

        <!-- Bank, refund and others table -->
        <div class="field">
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :pagination-options="{enabled: true,mode: 'records'}"
          >
            <!-- edit button -->
            <div slot="table-actions" style="margin:10px;">
              <button class="button is-warning" @click="onEditBtnClick">Edit</button>
            </div>
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'action'">
                <a
                  class="fas fa-trash"
                  title="remove"
                  style="margin:10px;"
                  v-on:click="onRowEditClick(props.row)"
                />
              </span>
            </template>
          </vue-good-table>
        </div>

        <!-- submit button -->
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>

        <!-- end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newBudgetPage",
  components: {},
  methods: {
    onEditBtnClick() {
      this.isEdit = this.isEdit ? false : true;
    },
    onRowEditClick(props) {
      if (props.item === "undefined") return;
      for (let i = 0, length = this.rows.length; i < length; i++) {
        let element = this.rows[i];
        if (
          element.item !== "undefined" &&
          element.item === props.item &&
          element.units === props.units &&
          element.price === props.price &&
          element.note === props.note
        ) {
          this.rows.splice(i, 1);
          return;
        }
      }
    },
    onAddBtnClick() {
      let obj = new Object();
      obj.item = this.item;
      obj.units = this.units;
      obj.price = this.price;
      obj.note = this.note;
      obj.total = this.price * this.units;
      this.rows.push(obj);
      return;
    }
  },
  data() {
    return {
      isEdit: false,
      item: "",
      units: "",
      price: "",
      note: "",
      totalCosts: 0,
      columns: [
        {
          label: "Item's Name",
          field: "item"
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
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: []
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
