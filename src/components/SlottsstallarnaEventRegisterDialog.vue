<template>
  <div id="slottsstallarnaEventRegisterDialog">
    <div class="card">
      <div class="card-content">
        <div class="columns is-centered">
          <div class="column is-half">
            <!-- Date -->
            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <DatePicker type="date" placeholder="Date" style="width: 250px"></DatePicker>
              </div>
            </div>
            <!-- Event -->
            <div class="field">
              <label class="label">Event Name</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Event Name">
                <span class="icon is-small is-left">
                  <i class="far fa-calendar-alt"></i>
                </span>
              </div>
            </div>

            <!-- benefit -->
            <div class="field">
              <label class="label">Benefit</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Benefit">
                <span class="icon is-small is-left">
                  <i class="fas fa-money-bill"></i>
                </span>
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
  name: "slottsstallarnaEventRegisterDialog"
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
