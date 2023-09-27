<script>
export default {
  id: "UserPage",
  props: {
    args: Array
  },
  mounted: function () {
    console.log(this.args);
  }
}
</script>

<template class="user-page">
  <div>
    <h1>{{this.args}}</h1>
  </div>
</template>

<style scoped>

</style>