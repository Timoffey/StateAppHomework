<template>
  <table>
    <thead>
    <tr>
      <th>County</th>
      <th>Population</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(county, i) of counties" :key="i">
      <td>{{ county.county }}</td>
      <td>{{ county.population }}</td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'TheScreenAreaCounties',
  props: {
    counties: Array
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/stylesheets/table";
</style>
