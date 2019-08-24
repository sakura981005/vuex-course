<template>
  <div id="app">
    <button @click="decrementCount(2)">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>

    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
};
</script>

<style>
</style>
