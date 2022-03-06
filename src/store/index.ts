import { createStore } from 'vuex'

interface State {
  count:number
}

// 创建一个新的 store 实例
const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store