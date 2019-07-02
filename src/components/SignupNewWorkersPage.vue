<template>
  <div id="signupNewWorkersPage">
    <div id="SignupFormPage">
      <div class="card">
        <div class="card-content">
          <div class="columns is-centered">
            <div class="column is-half">
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
                    <input class="input" type="text" placeholder="ESNcard Number">
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
                    <input class="input" type="text" name="firstname" placeholder="T-Number">
                    <span class="icon is-small is-left">
                      <i class="fas fa-address-card"></i>
                    </span>
                    <p
                      class="help is-danger"
                    >If you had registered temporary member before, you just need to input your T-Number</p>
                  </div>
                </div>
              </template>

              <!-- Submit button -->
              <div class="field">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
              </div>
              <!-- end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signupNewWorkersPage",
  components: {},
  methods: {},
  data() {
    return {
      isVIS: true
    };
  }
};
</script>
