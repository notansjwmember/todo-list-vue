<script setup>
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchTodos = async () => {
  const response = await axios.get(`${apiUrl}/api/todos`);
  return response.data;
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
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error fetching todos</div>
    <div v-else>
      <p>{{ todos.length }} todos</p>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
