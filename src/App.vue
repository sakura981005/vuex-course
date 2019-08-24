<template>
  <div id="app">
    <p>{{count}}</p>
    <p>{{todos}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: {
    ...mapState(["count", "todos"])
  }
  // computed: mapState({
  //   count:state => state.count,
  //   todos:state => state.todos,
  // })
  // count() {
  //   return this.$store.state.count;
  // },
  // todos() {
  //   return this.$store.state.todos;
  // }
};
</script>

<style>
</style>
