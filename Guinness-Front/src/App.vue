<template>
  <div>
    <MainHeader></MainHeader>
    <router-view></router-view>
    <router-link to="/postadd" class="create-button">+</router-link>
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

<style>
.create-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  right: 40px;
  bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  background: rgb(255, 210, 98);
  border: 3px solid white;
}
</style>
