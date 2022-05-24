<template>
  <div>
    <MainHeader></MainHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "./components/common/MainHeader.vue";

export default {
  component: {
    MainHeader,
  },
  components: { MainHeader },
};
</script>

<style></style>
