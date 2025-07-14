<template>
  <div class="flex justify-center items-center mt-5">
    <div
      class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
      <h2 class="text-2xl font-bold">Youbike</h2>

      <legend class="fieldset-legend">搜尋關鍵字</legend>
      <div
        :class="[
          { tooltip: searchText ? false : true },
          'tooltip-open tooltip-error',
        ]"
        data-tip="請輸入搜尋關鍵字"
      >
        <input
          type="text"
          v-model.trim="searchText"
          class="input"
          placeholder="請輸入標題"
          :disabled="ubike.loading ? true : false"
          @keyup.enter.prevent="infoStore.Search(searchText)"
        />
      </div>
      <div class="mt-5">
        <button
          :class="[
            'btn',
            { 'btn-disabled': ubike.loading ? true : false },
            'btn-outline btn-primary',
          ]"
          :disabled="!canSearch"
          @click.prevent="infoStore.Search(searchText)"
        >
          <span v-if="ubike.loading" class="loading loading-spinner"></span>
          {{ ubike.loading ? '' : '查詢' }}
        </button>
        <button
          :class="[
            'btn',
            { 'btn-disabled': ubike.loading ? true : false },
            'btn-dash btn-error text-2sm ml-2',
          ]"
          @click.prevent="update"
        >
          <span v-if="ubike.loading" class="loading loading-spinner"></span>
          {{ ubike.loading ? '' : '重新整理資料' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useGetInfoStore } from '@/stores';

const infoStore = useGetInfoStore();
const { ubike } = storeToRefs(infoStore);

const searchText = ref('復興南路');

const canSearch = computed(() => {
  return searchText.value != '';
});

const update = async () => {
  await infoStore.getData();
  await infoStore.Search(searchText.value);
};

onMounted(() => {
  update();
});
</script>

<style scoped></style>
