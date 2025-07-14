<template>
  <Teleport to="body">
    <div v-if="visible" class="toast">
      <div :class="['alert', typeClass]">
        <span>{{ message }}</span>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useToastState } from '@/composables/toast.js';
const { visible, message, typeClass } = useToastState();
</script>
