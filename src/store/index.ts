import { IUserInfo } from '@/api/types/common';
import { createStore } from 'vuex'
import { setItem,getItem } from "@/utils/storage"
import {USER} from "@/utils/constans"

const state={
  user:getItem<IUserInfo>(USER)
}

export type  State = typeof state;

// 创建一个新的 store 实例
const store = createStore<State>({
  state,
  mutations: {
    setUser (state,user) {
      state.user=user;
      setItem(USER,state.user);
    }
  }
})

export default store