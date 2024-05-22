<template>
  <div ref="plotlyChart" class="chart"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Plotly from "plotly.js-dist";
import { useAdditionStore } from "../stores/store.js";

const plotlyChart = ref(null);
const store = useAdditionStore();

const updateChart = () => {
  const latestResults = store.additionResults.slice(-5);
  const xData = latestResults.map((_, index) => index + 1);

  const data = [
    {
      x: xData,
      y: latestResults,
      type: "scatter",
    },
  ];

  const layout = {
    title: "Line and Scatter Plot",
    xaxis: {
      title: "Operation Number",
      range: [0, 100],
    },
    yaxis: {
      title: "Result of Addition Operation",
      range: [Math.min(...latestResults, 0), Math.max(...latestResults, 100)],
    },
  };

  Plotly.newPlot(plotlyChart.value, data, layout, {
    responsive: true,
  });
};

onMounted(() => {
  updateChart();
});

watch(
  () => store.additionResults,
  () => {
    updateChart();
  },
  { deep: true }
);
</script>
<style lang="scss" scoped>
.chart {
  width: 30%;
}
@media (max-width: 768px) {
  .chart {
    width: 300px; /* Adjust for smaller screens */
  }
}
</style>
