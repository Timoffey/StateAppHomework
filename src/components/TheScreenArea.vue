<template>
  <div>
    <table>
      <tbody>
      <tr>
        <th>State name</th>
        <td>{{ stateName }}</td>
      </tr>
      <tr>
        <th>Overall population</th>
        <td :class="{equal:isSumsEqual}">{{ population }}</td>
      </tr>
      <tr>
        <th>Number of counties</th>
        <td>{{ counties }}</td>
      </tr>
      </tbody>
    </table>

    <div>
      <h3>Counties</h3>
      <TheScreenAreaCounties :counties="countiesList"/>
    </div>

    <table>
      <tbody>
        <tr>
          <th>Total counties population</th>
          <td :class="{equal:isSumsEqual}">{{ totalCountiesPopulation }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import TheScreenAreaCounties from '@/components/TheScreenAreaCounties';

export default {
  name: 'TheScreenArea',
  components: {TheScreenAreaCounties},
  computed: {
    ...mapGetters(['getDisplayInfo']),
    stateName() {
      return this.getDisplayInfo.state;
    },
    population() {
      return this.getDisplayInfo.population;
    },
    counties() {
      return this.getDisplayInfo.counties;
    },
    countiesList() {
      return this.getDisplayInfo.countiesList;
    },
    totalCountiesPopulation() {
      return this.getDisplayInfo.countiesList.reduce((total, county) => total += county.population, 0);
    },
    isSumsEqual() {
      return this.population === this.totalCountiesPopulation;
    }


  }
};
</script>
<style scoped lang="scss">
@import "@/assets/stylesheets/table";
h3 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0;
}
.equal {
  display: flex;
  justify-content: space-between;
  &::before{
    content: 'equal';
    align-self: center;
    font-size: 0.8rem;
    font-weight: bold;
    color: green;
    border: 1px solid green;
    border-radius: 2rem;
    padding: 0 0.3rem;
  }
}
</style>
