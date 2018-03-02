<template>
  <div class='vuestic-chart'>
    <pie-chart :options="options" :data="data" v-if="type === 'pie'"></pie-chart>
    <donut-chart :options="options" :data="data" v-if="type === 'donut'"></donut-chart>
    <bubble-chart :options="options" :data="data" v-if="type === 'bubble'"></bubble-chart>
    <line-chart :options="options" :data="data" v-if="type === 'line'"></line-chart>
    <horizontal-bar-chart :options="options" :data="data" v-if="type === 'horizontal-bar'"></horizontal-bar-chart>
    <vertical-bar-chart :options="options" :data="data" v-if="type === 'vertical-bar'"></vertical-bar-chart>
  </div>
</template>

<script>
  import PieChart from './chart-types/PieChart.vue'
  import BubbleChart from './chart-types/BubbleChart.vue'
  import DonutChart from './chart-types/DonutChart.vue'
  import HorizontalBarChart from './chart-types/HorizontalBarChart.vue'
  import VerticalBarChart from './chart-types/VerticalBarChart.vue'
  import LineChart from './chart-types/LineChart.vue'

  export default {
    name: 'vuestic-chart',
    props: ['data', 'options', 'type'],
    components: {
      PieChart,
      LineChart,
      VerticalBarChart,
      HorizontalBarChart,
      DonutChart,
      BubbleChart
    }
  }
</script>

<style lang='scss'>
  @import '~sass/variables';

  .vuestic-chart {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      height: 100%;
      width: 100%;
    }

    canvas {
      width: 100%;
      height: auto;
    }
  }
</style>
