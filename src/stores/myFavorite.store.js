import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';
import { showToast } from '@/composables/toast.js';

export const useMyFavoriteStore = defineStore('myfavorite', () => {
  const myFavorite = ref([]);

  const setFavoriteStorage = (favorites) => {
    localStorage.setItem('myFavorite', JSON.stringify(favorites));
  };

  const addMyFavorite = (found) => {
    if (found && !myFavorite.value.some((item) => item.sno === found.sno)) {
      myFavorite.value.push({ ...found });
      setFavoriteStorage(myFavorite.value);
      showToast(`${found.sna} 已加入我的最愛`, 2, 'success');
    } else {
      showToast(`${found.sna} 我的最愛已存在`, 2, 'error');
    }
  };

  const removeMyFavorite = (sno) => {
    const idx = myFavorite.value.findIndex((item) => item.sno === sno);
    if (idx > -1) {
      const [removed] = myFavorite.value.splice(idx, 1);
      setFavoriteStorage(myFavorite.value);
      showToast(`${removed?.sna}已移除我的最愛`, 2, 'success');
    }
  };

  const getMyFavorite = () => {
    myFavorite.value = JSON.parse(localStorage.getItem('myFavorite')) || [];
  };

  return { myFavorite, addMyFavorite, removeMyFavorite, getMyFavorite };
});
