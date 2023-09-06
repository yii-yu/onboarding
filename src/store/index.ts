import type { InjectionKey } from 'vue';
import { createStore } from 'vuex';

import type { Store } from 'vuex';
import modules from './modules';
import type { Dashboard } from './modules/dashboard';

export type RootState = {
  dashboard: Dashboard;
};

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules,
});