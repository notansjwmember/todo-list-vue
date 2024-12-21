<template>
  <nav class="w-64 p-3 flex flex-col gap-5 bg-slate-50 text-slate-900">
    <div class="px-2 flex items-center gap-2">
      <IconMoodNeutral :size="IconSizes.XL" />
      <h1 class="font-black text-base leading-none">Ta(sk)rub</h1>
    </div>
    <ul class="flex-grow flex flex-col gap-7 justify-between text-sm">
      <div class="flex flex-col gap-7">
        <div class="flex flex-col gap-0.5">
          <button type="button" class="nav-item">
            <IconSearch :size="IconSizes.SMALL" />
            Search
          </button>
          <router-link to="/">
            <p
              class="nav-item"
              :class="{
                'bg-slate-200 text-indigo-600': route.path === '/',
              }"
            >
              <IconHome :size="IconSizes.SMALL" />
              Home
            </p>
          </router-link>
          <router-link to="/todos">
            <p
              class="nav-item"
              :class="{
                'bg-slate-200 text-indigo-600': route.path === '/todos',
              }"
            >
              <IconNote :size="IconSizes.SMALL" />
              Todos
            </p>
          </router-link>
        </div>
        <div class="grid gap-1">
          <h2 class="px-2 uppercase text-xs mb-2">Categories</h2>
          <li v-for="item in categoryItems" :key="item.path" class="nav-item">
            <component :is="item.icon" :size="IconSizes.SMALL" />
            <span>{{ item.label }}</span>
          </li>
        </div>
        <div class="grid gap-1">
          <div v-for="item in otherItems" :key="item.path">
            <router-link :to="item.path">
              <p class="nav-item">
                <component :is="item.icon" :size="IconSizes.SMALL" />
                {{ item.label }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="px-2 py-1.5 w-full text-left flex justify-between items-center cursor-pointer transition-all duration-150 rounded-md"
      >
        <div>
          <h3>Caenar Arteta</h3>
          <p class="text-xs text-gray-500">kaiserlaconfiture@gmail.com</p>
        </div>
        <IconDotsVertical size="16" color="gray" />
      </button>
    </ul>
  </nav>
</template>

<script setup>
import {
  IconBriefcase,
  IconCalendar,
  IconDotsVertical,
  IconExclamationCircle,
  IconHelp,
  IconHome,
  IconMoodNeutral,
  IconNote,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
} from "@tabler/icons-vue";
import { useRoute } from "vue-router";
import { IconSizes } from "../utils/IconSizes";

const route = useRoute();

const categoryItems = [
  { path: "/work", icon: IconBriefcase, label: "Work" },
  { path: "/personal", icon: IconUser, label: "Personal" },
  {
    path: "/important",
    icon: IconExclamationCircle,
    label: "Important",
  },
];

const otherItems = [
  { path: "/calendar", icon: IconCalendar, label: "Calendar" },
  { path: "/settings", icon: IconSettings, label: "Settings" },
  { path: "/trash", icon: IconTrash, label: "Trash" },
  { path: "/help", icon: IconHelp, label: "Help" },
];
</script>
