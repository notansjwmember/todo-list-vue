<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div class="flex flex-grow">
      <nav class="w-2/12 p-4 flex flex-col gap-4 bg-slate-50 text-slate-900">
        <div class="flex items-center gap-2">
          <IconPolygon size="36" />
          <h1 class="font-black text-lg">Ta(sk)rub</h1>
        </div>
        <ul class="flex flex-col gap-1">
          <router-link to="/">Dashboard</router-link>
          <router-link to="/todos">Todos</router-link>
        </ul>
      </nav>
      <div class="flex-grow">
        <router-view></router-view>
      </div>
    </div>
    <footer class="flex justify-center content-center p-1 bg-slate-900 text-slate-300">
      <p>Made with &lt;3 by Caenar</p>
    </footer>
  </div>
</template>

<script setup>
import { IconPolygon } from "@tabler/icons-vue";
</script>

<style></style>
