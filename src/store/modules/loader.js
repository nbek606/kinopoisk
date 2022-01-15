
const state = {
   loader: false,
}

const getters = {
   loader: state => state.loader
}

const actions = {
   loaderOn ({ commit }) {
      commit('loaderEdit', true)
   },

   loaderOff ({ commit }) {
      commit('loaderEdit', false)
   }
}

const mutations = {
  loaderEdit: (state, value) => {
     state.loader = value
  }
}

export default{
   state,
   getters,
   actions,
   mutations
}