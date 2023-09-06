import type { Module } from 'vuex';
import { Units, conversion } from '../../utilities/unitConversion';
import { rulerInit, unitsBind } from '../../utilities/settings';
export type Dashboard = {
  age: number | null;
  height: number | null;
  weight: number | null;
  gender: string;
  unitHeight: string;
  unitWeight: string;
  photo: string;
  skin: string;
  preferences: Array<string>;
};

const dashboard: Module<Dashboard, unknown> = {
  state() {
    return {
      age: null,
      gender: '',
      height: null,
      weight: null,
      unitHeight: 'cm',
      unitWeight: 'kg',
      photo: '',
      skin: '',
      preferences: [],
    };
  },
  getters: {
    age: (state) => state.age,
    height: (state) => state.height,
    weight: (state) => state.weight,
    gender: (state) => state.gender,
    unitWeight: (state) => state.unitWeight,
    unitHeight: (state) => state.unitHeight,
    photo: (state) => state.photo,
    skin: (state) => state.skin,
    preferences: (state) => state.preferences,
  },
  mutations: {
    setAge(state, payload: number) {
      state.age = payload;
    },
    setHeight(state, payload: number) {
      state.height = payload;
    },
    setGender(state, payload: string) {
      state.gender = payload;
    },
    setUnitHeight(state, payload: Units) {
      state.unitHeight = payload;
    },
    setUnitWeight(state, payload: Units) {
      state.unitWeight = payload;
    },
    setWeight(state, payload: number) {
      state.weight = payload;
    },
    setPhoto(state, payload: string) {
      state.photo = payload;
    },
    setSkin(state, payload: string) {
      state.skin = payload;
    },
    setPreference(state, payload: Array<string>) {
      state.preferences = payload;
    },
  },
  actions: {
    changeUnit(context, { unit, value }) {
      for (const key in unitsBind) {
        if (unitsBind[key].includes(unit) && context.getters.unitHeight !== unit && context.getters.unitWeight !== unit) {
          context.commit(`setUnit${key}`, unit);
          context.commit(`set${key}`, conversion(unit, value));
          break;
        }
      }
    },
    changeGender(context, gender:string) {
      context.commit('setGender', gender);
      context.commit('setHeight', null);
      context.commit('setWeight', null);
    },
    addPreference(context, payload: string): void {
      if (context.getters.preferences.includes(payload)) {
        context.commit(
          'setPreference',
          context.getters.preferences.filter((item: string) => item !== payload)
        );
      } else {
        context.commit(
          'setPreference',
          [...context.getters.preferences, payload]
        );
      }
    },
  },
};

export default dashboard;
