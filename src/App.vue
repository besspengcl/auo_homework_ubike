<template>
  <RouterView />
  <toast />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { toast } from '@/components';
</script>

<style scoped></style>
