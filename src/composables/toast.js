import { ref, computed } from 'vue';

const visible = ref(false);
const message = ref('');
const type = ref('info'); // 'info', 'success', 'error'
let timer = null;

export const showToast = (msg, duration = 2, toastType) => {
  message.value = msg;
  type.value = toastType;
  visible.value = true;

  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    visible.value = false;
    message.value = '';
  }, duration * 1000);
};

export const useToastState = () => {
  return {
    visible,
    message,
    typeClass: computed(() => {
      if (type.value === 'success') return 'alert-success';
      if (type.value === 'error') return 'alert-error';
      return 'alert-info';
    }),
  };
};
