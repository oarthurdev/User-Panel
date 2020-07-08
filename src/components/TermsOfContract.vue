<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Dialog</md-dialog-title>
        <md-tab md-label="Terms Of Contract">
          <p>TOS</p>
        </md-tab>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: 'TermsOfContract',
  data: () => ({
    showDialog: false
  })
}
</script>

<style lang="scss" scoped>
  .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  }
</style>
