<template>

</template>

<script>
import TopicModel from "./TopicModel";

export default {
  name: "topic",
  data() {
    return {
      model: Object.create(TopicModel)
    };
  },
  components: function () {
    return {
      qa
    };
  }
}
</script>

<style scoped>

</style>