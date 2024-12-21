<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div class="flex flex-grow">
      <Sidebar />
      <div class="flex-grow">
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<style></style>
