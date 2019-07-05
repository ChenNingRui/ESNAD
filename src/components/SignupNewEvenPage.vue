<template>
  <div id="SignupNewEvenPage">
    <div class="card">
      <div class="card-content">
        <div class="columns is-centered">
          <div class="column is-half">
            <!-- Event Name -->
            <div class="field">
              <label class="label">Event's Name</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" name="EventName" placeholder="Event's Name ">
                <span class="icon is-small is-left">
                  <i class="fas fa-camera-retro"></i>
                </span>
              </div>
            </div>

            <!-- Main Responsible -->
            <div class="field">
              <label class="label">Main Responsible</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  name="MainResponsible"
                  placeholder="Main Responsible"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-crown"></i>
                </span>
              </div>
            </div>

            <!-- Sub Responsible -->
            <div class="field">
              <label class="label">Sub Responsible</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  name="SubResponsible"
                  placeholder="Sub Responsible"
                >
                <span class="icon is-small is-left">
                  <i class="fas fa-chess-knight"></i>
                </span>
              </div>
            </div>

            <!-- Date-->
            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <DatePicker type="date" placeholder="Select date" style="width: 250px"></DatePicker>
              </div>
            </div>

            <!--Note -->
            <div class="field">
              <label class="label">Note</label>
              <div class="control">
                <textarea class="textarea" placeholder="Note"></textarea>
              </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupNewEvenPage",
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
