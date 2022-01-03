<template v-for="topic in topicModelList">
  <button v-on:click="this.addTopic()">Ajouter un topic</button>
  <div id="topic-{{topic.id}}-container">
    <topic model="{{topic}}"></topic>
    <button v-on:click="this.removeTopic(topic.id)">Supprimer le topic</button>
  </div>
</template>

<script>
export default {
  name: "topic-handler",
  data(){
    return {
      topicModelList: [Object.create(TopicModel, {
        id: 0
      })]
    };
  },
  methods(){
    return {
      addTopic(){},
      removeTopic(id){}
    };
  },
  components() {
    "topic"
  },
}
</script>

<style scoped>

</style>