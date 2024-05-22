<template>
  <q-card square bordered class="shadow-2 q-px-xl q-py-lg" id="input-card">
    <q-card-section>
      <q-form @submit.prevent="submitForm" class="q-gutter-y-md">
        <div v-for="(input, key) in items" :key="key">
          <h5
            v-if="input.type === 'header'"
            class="text-center"
            :style="{
              backgroundColor: input['bg-color'],
              color: '#fff',
            }"
          >
            {{ input.label }}
          </h5>
          <q-input
            v-if="input.type === 'input'"
            v-model="formData.inputs[key]"
            :label="input.label"
            :disabled="input.disabled"
            outlined
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import axios from "axios";

const emit = defineEmits(["formSubmitted"]);

const formData = ref({
  inputs: {
    ID1: "",
    ID2: "",
  },
});

const items = ref([]);
const addition = ref(0);
const multiplication = ref(0);

const fetchInputs = async () => {
  const firestoreBaseUrl =
    "https://chart-app-43e6c-default-rtdb.europe-west1.firebasedatabase.app/inputs.json";
  try {
    const response = await axios.get(firestoreBaseUrl);
    items.value = response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

const submitForm = () => {
  const x = parseFloat(formData.value.inputs.ID1);
  const y = parseFloat(formData.value.inputs.ID2);

  if (!isNaN(x) && !isNaN(y)) {
    addition.value = x + y;
    multiplication.value = x * y;
    emit("formSubmitted", {
      addition: addition.value,
      multiplication: multiplication.value,
    });
  } else {
    console.error("Invalid input values");
  }
};

onMounted(() => {
  fetchInputs();
});

defineExpose({
  submitForm,
});
</script>
