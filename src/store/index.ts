import { createPinia } from 'pinia';

const store = createPinia();
export { store };

export { useGlobalData } from '@/store/modules/globalStore';
