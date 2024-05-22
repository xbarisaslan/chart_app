<template>
  <q-page class="row items-center justify-center">
    <q-page-container
      v-if="selectedLayout"
      class="page-container"
      :class="{
        'page-container-row': selectedLayout === 'layout3',
        'page-container-column': selectedLayout !== 'layout3',
      }"
    >
      <q-page-container
        class="card-container"
        :class="{
          'card-container-row': selectedLayout === 'layout1',
          'card-container-column': selectedLayout !== 'layout1',
        }"
      >
        <InputsCard @formSubmitted="handleFormSubmit" ref="inputsCard" />
        <ResultsCard
          :addition="results?.addition"
          :multiplication="results?.multiplication"
          @chartActivated="chartActivated = !chartActivated"
        />
      </q-page-container>

      <q-btn
        @click="triggerSubmit"
        label="Execute"
        color="positive"
        class="q-px-xl q-ma-lg"
        :class="{
          button: selectedLayout === 'layout1',
        }"
      />
    </q-page-container>

    <PlotlyChart v-if="chartActivated" />
    <WizardComponent v-if="!selectedLayout" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useAdditionStore } from "../stores/store.js";
import InputsCard from "../components/InputsCard.vue";
import ResultsCard from "../components/ResultsCard.vue";
import PlotlyChart from "../components/PlotlyChart.vue";
import WizardComponent from "../components/WizardComponent.vue";

defineOptions({
  name: "IndexPage",
});

const results = ref(null);
const inputsCard = ref(null);
const chartActivated = ref(false);

const selectedLayout = localStorage.getItem("selectedLayout");

const handleFormSubmit = (data) => {
  results.value = data;
  useAdditionStore().addAdditionResult(data.addition);
};

const triggerSubmit = () => {
  inputsCard.value.submitForm();
};
</script>

<style scoped lang="scss">
.chart-container {
  overflow: auto; /* Or overflow: scroll; */
}

.card-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 1rem 0 1rem;
  max-width: 800px;
}

.card-container-row {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-container-column {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-container {
  display: flex;
  gap: 1rem;
  margin: 1rem 1rem 0 1rem;
  max-width: 800px;
}

.page-container-row {
  flex-direction: row;
  justify-content: center;
}

.page-container-column {
  flex-direction: column;
}

.button {
  width: 45%;
  margin-top: 0;
}

@media (max-width: 600px) {
  .card-container {
    flex-direction: column;
  }
}
</style>
