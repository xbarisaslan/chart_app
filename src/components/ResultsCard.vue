<template>
  <q-card square bordered class="shadow-2 q-px-xl q-py-lg">
    <q-card-section>
      <q-form>
        <div v-for="(output, key) in outputs" :key="key">
          <h5
            v-if="output.type === 'header'"
            class="text-center"
            :style="{
              backgroundColor: output['bg-color'],
              color: '#fff',
            }"
          >
            {{ output.label }}
          </h5>
          <q-input
            v-if="output.type === 'textfield'"
            :label="output.label"
            v-model="outputValues.outputs[key]"
            :disabled="output.disabled"
            outlined
            :style="{
              backgroundColor: output['bg-color'],
            }"
          />
          <q-card-actions>
            <q-btn
              v-if="output.type === 'button' && selectedLayout === 'layout4'"
              @click="toggleChart"
              :label="chartVisible ? output.label2 : output.label"
              :color="chartVisible ? output['bg-color2'] : output['bg-color']"
              class="full-width"
            />
          </q-card-actions>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { onMounted, ref, watch, defineProps, defineEmits } from "vue";
import axios from "axios";

const props = defineProps({
  addition: {
    require: true,
  },
  multiplication: {
    require: true,
  },
});

const outputs = ref([]);
const chartVisible = ref(false);

const emit = defineEmits(["chartActivated"]);

const toggleChart = () => {
  chartVisible.value = !chartVisible.value;
  emit("chartActivated");
};

const fetchOutputs = async () => {
  const firestoreBaseUrl =
    "https://chart-app-43e6c-default-rtdb.europe-west1.firebasedatabase.app/outputs.json";
  try {
    const response = await axios.get(firestoreBaseUrl);
    outputs.value = response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

const outputValues = ref({
  outputs: {
    ID1: props.addition,
    ID2: props.multiplication,
  },
});

const selectedLayout = localStorage.getItem("selectedLayout");

onMounted(() => {
  fetchOutputs();
});

watch(
  () => [props.addition, props.multiplication],
  ([newAddition, newMultiplication]) => {
    outputValues.value.outputs.ID1 = newAddition;
    outputValues.value.outputs.ID2 = newMultiplication;
  }
);
</script>

<style lang="scss" scoped></style>
