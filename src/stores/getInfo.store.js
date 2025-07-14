import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';
import { apiUbike } from '../api';
import { showToast } from '@/composables/toast.js';

export const useGetInfoStore = defineStore('getInfo', () => {
  const initalUbike = ref([]);
  const ubike = ref([]);

  const getData = async () => {
    ubike.value = { loading: true };
    try {
      const res = await apiUbike();
      initalUbike.value = res.data;
      console.log(initalUbike.value);
      showToast('取得資料成功', 2, 'info');
    } catch (err) {
      const error = err?.message || '發生錯誤';
      initalUbike.value = { err: error };
      console.log(error);
    }
  };

  const Search = (searchText) => {
    try {
      const data = initalUbike.value;
      ubike.value = data.filter(
        (d) =>
          d['ar']?.includes(searchText) ||
          d['sarea']?.includes(searchText) ||
          d['sna']?.includes(searchText)
      );
      showToast('搜尋成功', 2, 'info');
    } catch (err) {
      const error = err.message || '發生錯誤';
      ubike.value = { err: error };
      console.log(error);
    }
  };

  return { initalUbike, ubike, getData, Search };
});
