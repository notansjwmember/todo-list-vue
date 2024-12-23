<template>
  <transition name="overlay-fade">
    <div
      v-if="isVisible"
      @click="closeModal"
      class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div
        @click.stop
        class="bg-white text-slate-900 p-2.5 rounded-md shadow-md max-w-min popup-scale"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isVisible: { type: Boolean, required: true },
});

const emit = defineEmits(["update:isVisible"]);

const closeModal = () => {
  emit("update:isVisible", false);
};
</script>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.35, 0, 0.19, 1);
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

.overlay-fade-enter-active > .popup-scale,
.overlay-fade-leave-active > .popup-scale {
  transition: transform 0.3s cubic-bezier(0.54, -0.58, 0.14, 1.18),
    opacity 0.5s cubic-bezier(0.35, 0, 0.19, 1);
}
.overlay-fade-enter-from > .popup-scale,
.overlay-fade-leave-to > .popup-scale {
  transform: scale(0.85);
  opacity: 0;
}
.overlay-fade-enter-to > .popup-scale,
.overlay-fade-leave-from > .popup-scale {
  transform: scale(1);
  opacity: 1;
}
</style>
