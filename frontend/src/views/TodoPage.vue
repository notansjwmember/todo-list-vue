<script setup>
import axios from "axios";
import { ref } from "vue";
import Popup from "../components/Popup.vue";
import { IconMoodPuzzled, IconPlus } from "@tabler/icons-vue";
import { useQuery } from "@tanstack/vue-query";
import { IconSizes } from "../utils/IconSizes";

const apiUrl = import.meta.env.VITE_API_URL;
const todoUrl = `${apiUrl}/api/todos`;

const showPopup = ref(false);

const fetchTodos = async () => {
  const response = await axios.get(todoUrl);
  return response.data;
};

const createTodo = async (data) => {
  const response = await axios.post(todoUrl, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const {
  data: todos,
  isLoading,
  isError,
} = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos,
  onSuccess: (data) => {
    todoStore.setTodos(data);
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error fetching todos</div>
    <div v-else-if="todos.length === 0" class="grid gap-2.5 place-items-center">
      <IconMoodPuzzled size="86" stroke="1.8" />
      <div class="text-center">
        <h3 class="font-black text-xl">Uh-oh, something is missing</h3>
        <p>Hmm, it looks like you don't have any todos yet</p>
      </div>
      <button
        type="button"
        @click="showPopup = true"
        class="flex items-center gap-1.5 border border-slate-300 rounded-md text-xs px-2 py-1.5"
      >
        <IconPlus :size="IconSizes.XXS" color="#334155" />
        New todo
      </button>
    </div>
    <div v-else>
      <p>{{ todos.length }} todos</p>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
        </li>
      </ul>
    </div>
  </div>

  <Popup :isVisible="showPopup" @update:isVisible="showPopup = $event">
    <div class="flex flex-col gap-3">
      <h2 class="font-bold">Create a new Todo</h2>
      <form class="grid gap-3">
        <div class="form-item">
          <label for="">Name this task</label>
          <input
            type="text"
            class="outline-none p-1.5 text-sm rounded-md bg-slate-50 border border-slate-300"
          />
        </div>
        <div class="form-item">
          <label for="">What is this task about?</label>
          <textarea
            class="outline-none p-1.5 text-sm rounded-md bg-slate-50 border border-slate-300 w-72 h-32 resize-none"
          />
        </div>
        <div class="line"></div>
        <div class="button-container">
          <button type="button" @click="showPopup = false" class="secondary-btn">
            Cancel
          </button>
          <button type="button" class="primary-btn">Continue</button>
        </div>
      </form>
    </div>
  </Popup>
</template>
