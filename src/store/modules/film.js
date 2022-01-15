import FilmsApiService from '@/api/FilmsApiService'

const state = {
   listFilms: false,
   searchStatus: false
}

const getters = {
   getListFilms: state => state.listFilms,
   searchStatus: state => state.searchStatus
}

const actions = {
   search ({ commit }, { keyword, page }) {
      return FilmsApiService.sendToSearch(keyword, page)
             .then((response) => {
                commit('setListFilms', response.data)
                commit('setSearchStatus', true)
             }).catch(() => {})
   },

   listRequest ({ commit }, request) {
     return FilmsApiService[request.type](request.page)
            .then((response) => {
               commit('setListFilms', response.data)
               commit('setSearchStatus', false)
            }).catch(() => {})
   }
}

const mutations = {
   setListFilms: (state, data) => { state.listFilms = data },
   setSearchStatus: (state, value) => { state.searchStatus = value}
}

export default{
   state,
   getters,
   actions,
   mutations
}