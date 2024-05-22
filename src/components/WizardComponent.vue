<template>
  <q-page>
    <input
      type="radio"
      id="layout1"
      value="layout1"
      v-model="selectedLayout"
      name="layoutGroup"
      class="layout-radio"
    />
    <input
      type="radio"
      id="layout2"
      value="layout2"
      v-model="selectedLayout"
      name="layoutGroup"
      class="layout-radio"
    />
    <input
      type="radio"
      id="layout3"
      value="layout3"
      v-model="selectedLayout"
      name="layoutGroup"
      class="layout-radio"
    />
    <input
      type="radio"
      id="layout4"
      value="layout4"
      v-model="selectedLayout"
      name="layoutGroup"
      class="layout-radio"
    />

    <div>
      <h4 class="text-center">Pick a layout.</h4>
      <div class="wizard">
        <label for="layout1">
          <q-card class="option" tabindex="0" v-ripple>
            <h6 class="text-center">Layout 1</h6>
            <q-card-section>
              <div class="option-content">
                <div>
                  <h6 class="text-center">Inputs</h6>
                  <div class="empty-container1"></div>
                </div>
                <div>
                  <h6 class="text-center">Outputs</h6>
                  <div class="empty-container1"></div>
                </div>
              </div>
              <div class="button">Button</div>
            </q-card-section>
          </q-card>
        </label>
        <label for="layout2">
          <q-card class="option" tabindex="0" v-ripple>
            <h6 class="text-center">Layout 2</h6>
            <q-card-section>
              <div class="option-content2">
                <div>
                  <h6 class="text-center">Inputs</h6>
                  <div class="empty-container2"></div>
                </div>
                <div>
                  <h6 class="text-center">Outputs</h6>
                  <div class="empty-container2"></div>
                </div>
                <div class="button">Button</div>
              </div>
            </q-card-section>
          </q-card>
        </label>
        <label for="layout3">
          <q-card class="option" tabindex="0" v-ripple>
            <h6 class="text-center">Layout 3</h6>
            <q-card-section class="flex q-gutter-x-lg">
              <div class="option-content2">
                <div>
                  <h6 class="text-center">Inputs</h6>
                  <div class="empty-container2"></div>
                </div>
                <div>
                  <h6 class="text-center">Outputs</h6>
                  <div class="empty-container2"></div>
                </div>
              </div>
              <div class="vertical-button">Button</div>
            </q-card-section>
          </q-card>
        </label>
        <label for="layout4">
          <q-card class="option" tabindex="0" v-ripple>
            <h6 class="text-center">Layout 4</h6>
            <q-card-section class="flex q-gutter-x-lg">
              <div class="option-content2">
                <div>
                  <h6 class="text-center">Inputs</h6>
                  <div class="empty-container2"></div>
                </div>
                <div>
                  <h6 class="text-center">Outputs</h6>
                  <div class="empty-container2"></div>
                </div>
                <div class="button">Button</div>
              </div>
              <div class="vertical-button">Graph</div>
            </q-card-section>
          </q-card>
        </label>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";

const savedLayout = localStorage.getItem("selectedLayout");

const selectedLayout = ref(savedLayout || null);

watch(selectedLayout, (newValue) => {
  localStorage.setItem("selectedLayout", newValue);
  location.reload();
});
</script>

<style lang="scss" scoped>
.layout-radio {
  appearance: none;
}

.wizard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  border: 1px solid gray;
  padding: 2rem;
  margin-top: 1rem;
  box-sizing: border-box;
}

.option {
  border: 1px solid gray;
  padding: 1rem;
  cursor: pointer;
}

.option:hover {
  border-color: blue;
  outline: none;
}

.option-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.option-content2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.empty-container1 {
  width: 150px;
  height: 200px;
  background-color: lightgrey;
}

.empty-container2 {
  width: 200px;
  height: 50px;
  background-color: lightgrey;
}

.button {
  border: 2px solid gray;
  width: 100px;
  text-align: center;
  margin-top: 0.5rem;
}

.vertical-button {
  border: 2px solid gray;
  text-align: center;
  flex-grow: 1;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .wizard {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.7rem;
  }
  .empty-container1 {
    width: 100px;
    height: 100px;
    background-color: lightgrey;
  }
  .empty-container2 {
    width: 150px;
    height: 50px;
    background-color: lightgrey;
  }
}
</style>
