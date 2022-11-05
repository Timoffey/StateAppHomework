<template>
  <div class="list">
    <div
        v-for="(item, i) in filteredItems"
        :key="i"
        class="item"
    >
      <StateListItem :item="item"/>
    </div>
  </div>
</template>
<script>
import StateListItem from '@/components/StateListItem';

export default {
  components: {StateListItem},
  props: {
    items: Array,
    filter: String
  },
  name: 'StateList',
  computed: {
    filteredItems() {
      return this.filter ?
          this.items.filter(item => item.state.toLowerCase().includes(this.filter.toLowerCase())) :
          this.items;
    }
  }
};
</script>
<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
