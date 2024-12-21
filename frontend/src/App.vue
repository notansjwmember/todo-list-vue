<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div class="flex flex-grow">
      <nav class="w-64 p-3 flex flex-col gap-8 bg-slate-50 text-slate-900">
        <div class="flex items-center gap-2">
          <IconMoodNeutral size="24" />
          <h1 class="font-black text-base leading-none">Ta(sk)rub</h1>
        </div>
        <ul class="flex-grow flex flex-col gap-7 text-sm">
          <div class="flex flex-col gap-0.5">
            <button
              type="button"
              class="px-2 py-1.5 w-full text-left cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
            >
              Search
            </button>
            <router-link to="/">
              <p
                class="px-2 py-1.5 cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
                :class="{
                  'bg-slate-200 text-indigo-600': route.path === '/',
                }"
              >
                Home
              </p>
            </router-link>
            <router-link to="/todos">
              <p
                class="px-2 py-1.5 cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
                :class="{
                  'bg-slate-200 text-indigo-600': route.path === '/todos',
                }"
              >
                Todos
              </p>
            </router-link>
          </div>
          <div class="grid gap-1">
            <h2 class="px-2 uppercase text-xs mb-2">Categories</h2>
            <div
              v-for="item in categoryItems"
              class="px-2 py-1.5 cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
            >
              <li>{{ item.label }}</li>
            </div>
          </div>
          <div>
            <router-link to="/settings">
              <p
                class="px-2 py-1.5 w-full text-left cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
              >
                Calendar
              </p>
            </router-link>
            <router-link to="/settings">
              <p
                class="px-2 py-1.5 w-full text-left cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
              >
                Settings
              </p>
            </router-link>
            <router-link to="/settings">
              <p
                class="px-2 py-1.5 w-full text-left cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
              >
                Trash
              </p>
            </router-link>
            <router-link to="/settings">
              <p
                class="px-2 py-1.5 w-full text-left cursor-pointer transition-all duration-150 rounded-md hover:bg-slate-200"
              >
                Help
              </p>
            </router-link>
          </div>
          <div class="px-2 py-1.5">
            <h3>Caenar Arteta</h3>
            <p class="text-xs text-gray-500">kaiserlaconfiture@gmail.com</p>
          </div>
        </ul>
      </nav>
      <div class="flex-grow">
        <router-view></router-view>
      </div>
    </div>
    <footer
      class="flex justify-center content-center p-1.5 bg-slate-900 text-slate-300 text-xs"
    >
      <p>
        <span class="text-indigo-300">&copy; Ta(sk)rub, 2024.</span> Made with
        <span class="text-red-300">&lt;3</span> by Caenar Arteta.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { IconMoodNeutral } from "@tabler/icons-vue";
import { useRoute } from "vue-router";

const route = useRoute();

const categoryItems = [
  { path: "/work", label: "Work" },
  { path: "/personal", label: "Personal" },
  { path: "/important", label: "Important" },
];
</script>

<style></style>
