<template>
  <q-page class="column items-center justify-center">
    <q-select
      v-model="selectedLayout"
      :options="layoutOptions"
      label="Select Layout"
      outlined
      class="q-mb-md"
    />
    <div class="row q-gutter-x-xl">
      <InputsCard @formSubmitted="handleFormSubmit" ref="inputsCard" />
      <ResultsCard
        :addition="results?.addition"
        :multiplication="results?.multiplication"
      />
    </div>
    <q-btn
      @click="triggerSubmit"
      label="Execute"
      color="positive"
      class="q-px-xl q-ma-lg"
      size="lg"
    />
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";
import InputsCard from "../components/InputsCard.vue";
import ResultsCard from "../components/ResultsCard.vue";
import WizardComponent from "../components/WizardComponent.vue";

defineOptions({
  name: "IndexPage",
});

const layoutOptions = [
  { value: "layout1", label: "Layout 1" },
  { value: "layout2", label: "Layout 2" },
  { value: "layout3", label: "Layout 3" },
  { value: "layout4", label: "Layout 4" },
];

const selectedLayout = ref(layoutOptions[0].value);

const results = ref(null);
const inputsCard = ref(null);

const handleFormSubmit = (data) => {
  results.value = data;
};

const triggerSubmit = () => {
  inputsCard.value.submitForm();
};

// const getLayoutClasses = () => {
//   switch (selectedLayout.value) {
//     case "layout1":
//       return "row items-center justify-between q-gutter-x-xl";
//     case "layout2":
//       return "column items-start justify-between q-gutter-y-xl";
//     case "layout3":
//       return "row items-end justify-center";
//     case "layout4":
//       return "row items-center justify-evenly";
//     default:
//       return "column items-center justify-center";
//   }
// };

watch(selectedLayout, (newVal) => {
  console.log("Layout changed to:", newVal); // Debugging
});
</script>
