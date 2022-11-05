<template>
  <div class="filter">
    <input
        type="text"
        placeholder="Search state..."
        @keyup="filter"
        ref="input"
    />
    <div
        v-if="getFilter"
        class="clear"
        @click="clear"
    >+</div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'AppInput',
  computed: {
    ...mapGetters(['getFilter']),
  },
  methods: {
    ...mapActions(['applyFilter', 'clearFilter']),
    filter(event) {
      this.applyFilter(event.target.value);
    },
    clear() {
      this.$refs.input.value='';
      this.clearFilter();
    }
  }
};
</script>
<style scoped lang="scss">
.filter{
  width: 50%;
  justify-self: end;
  input {
    width: 100%;
    box-sizing: border-box;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid silver;
    &:focus {
      outline: none;
    }
  }
  .clear {
    position: absolute;
    cursor: pointer;
    top: 5px;
    right: 10px;
    transform: rotate(45deg);
    font-size: 1.5rem;
  }
}

</style>
