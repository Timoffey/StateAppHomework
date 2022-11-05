<template>
  <div
      class="card"
      :class="{highlighted}"
      @dblclick="highlight"
      @click="showInfo"
  >
    <span>{{ item.state }}</span>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

let timer = null;
export default {
  name: 'StateListItem',
  props: {item: Object},

  data: () => ({
    highlighted: false,
  }),
  methods: {
    ...mapActions(['setInfo']),
    highlight() {
      clearTimeout(timer);
      this.highlighted = !this.highlighted;
    },
    showInfo() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.setInfo(this.item);
      }, 300);
    }
  }
};
</script>

<style scoped lang="scss">

.card {
  background-color: #73b466;
  border-radius: 8px;
  width: 300px;
  font-size: 1.5rem;
  padding: 0.5rem;
  text-align: center;
  color: white;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;

  &.highlighted {
    background-color: #93f584;
    color: #333;
  }
}
</style>
