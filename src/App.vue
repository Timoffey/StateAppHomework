<template>
  <div class="viewport">
    <AppInput class="filter" />
    <StateList class="firstList scrollable" :items="states" />
    <StateList class="secondList scrollable" :items="states" :filter="getFilter" />
    <TheScreenArea class="display scrollable" v-if="getDisplayInfo"/>
  </div>
</template>

<script>
import StateList from '@/components/StateList';
import TheScreenArea from '@/components/TheScreenArea';
import AppInput from '@/components/AppInput';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {StateList, TheScreenArea, AppInput},

  data: () => ({
    states: [],
    currentInfo: {}
  }),
  async beforeMount() {
    await this.fetchStates();
    this.states = this.getStates;
  },
  computed:{
    ...mapGetters(['getDisplayInfo', 'getFilter', 'getStates']),
  },
  methods: {
    ...mapActions(['fetchStates']),
  },
};
</script>

<style scoped lang="scss">
.viewport {
  display: grid;
  grid-template-areas:
      "firstList secondList filter"
      "firstList secondList display";
  grid-template-columns: 1fr 1fr 2fr;
  gap: 1rem;

  border: 3px silver double;
  padding: 0 5px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.scrollable {
  height: 550px;
  overflow: auto;
  &.display {
    height: 500px;
  }
}
.filter {
  grid-area: filter;
}
.firstList {
  grid-area: firstList;
}
.secondList {
  grid-area: secondList;
}
.display {
  grid-area: display;
}
</style>
