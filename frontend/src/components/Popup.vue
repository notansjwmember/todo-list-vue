<template>
  <!-- <transition name="overlay-fade"> -->
    <div
      v-if="isVisible"
      @click="closeModal"
      class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <transition
        enter-active-class="popup-scale popup-opacity"
        enter-from-class="popup-scale-enter popup-opacity-enter"
        leave-active-class="popup-scale popup-opacity"
        leave-to-class="popup-scale-leave popup-opacity-leave"
      >
        <div
          v-if="isVisible"
          @click.stop
          class="bg-slate-100 text-slate-900 p-4 rounded-md shadow-md w-64"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  <!-- </transition> -->
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

.popup-scale-enter-active,
.popup-scale-leave-active {
  transition:
    transform 0.3s cubic-bezier(0.54, -0.58, 0.14, 1.18),
    opacity 0.3s cubic-bezier(0.35, 0, 0.19, 1);
}
.popup-scale-enter-from,
.popup-scale-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
.popup-scale-enter-to,
.popup-scale-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
