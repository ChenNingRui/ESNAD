<template>
  <div id="EventRegisterPage">
    <div class="card">
      <div class="card-content">
        <div class="columns is-centered">
          <div class="column is-half">
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

            <!-- Start Date -->
            <div class="field">
              <label class="label">Start date:</label>
            </div>

            <!-- end Date -->
            <div class="field">
              <label class="label">End date:</label>
            </div>

            <!-- 	Responsible -->
            <div class="field">
              <label class="label">Main Responsible:</label>
            </div>

            <!-- Is VIS Memeber? -->
            <div class="field">
              <label class="label">Is VIS Memeber?</label>
              <div class="control">
                <i-switch size="large" v-model="isVIS">
                  <span slot="open">YES</span>
                  <span slot="close">NO</span>
                </i-switch>
              </div>
            </div>

            <!-- isVIS == true -->
            <template v-if="isVIS">
              <!-- ESNcard Number -->
              <div class="field">
                <label class="label">ESNcard Number</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="ESNcard Number" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-address-card"></i>
                  </span>
                </div>
              </div>
            </template>

            <!-- isVIS == false -->
            <template v-else>
              <!-- t-number -->
              <div class="field">
                <label class="label">T-Number</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" name="firstname" placeholder="T-Number" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-address-card"></i>
                  </span>
                  <p
                    class="help is-danger"
                  >If you had registered temporary member before, you just need to input your T-Number</p>
                </div>
              </div>
            </template>

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
    </div>
  </div>
</template>

<script>
export default {
  name: "EventRegisterPage",
  data() {
    return {
      isVIS: true
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
