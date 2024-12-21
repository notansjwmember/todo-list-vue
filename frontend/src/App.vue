<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div class="flex flex-grow">
      <Sidebar />
      <main class="flex-grow p-3">
        <router-view></router-view>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<style></style>
