<template>
  <div class="container">
    <header><h1>개인정보 수정</h1></header>
    <change-info-step-1
      @submitForm="submitForm"
      :step="step"
      v-if="step == 1"
    ></change-info-step-1>
    <change-info-step-2 v-else-if="step == 2"></change-info-step-2>
  </div>
</template>

<script>
import ChangeInfoStep1 from "../components/ChangeInfoStep1.vue";
import ChangeInfoStep2 from "../components/ChangeInfoStep2.vue";
export default {
  components: { ChangeInfoStep1, ChangeInfoStep2 },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    submitForm(step) {
      this.step = step;
    },
  },
};
</script>

<style>
@import "@/assets/css/common.css";
</style>
