<template>
   <div class="top__films">

   <div class="top__films__header font-weight">
         Топ 250 фильмов
   </div>

   <div class="top__films__list">   
      <ListFilms
         @send-page="getFilms"
         :get-list-films="getListFilms"
      />
   </div>
   </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import ListFilms from '@/components/ListFilms.vue'

export default {
   name: 'TopFilms',
   components: {
      ListFilms
   },
   
   mounted () {
      this.getFilms()
   },

   computed: {
      ...mapGetters([
         'getListFilms'
      ])
   },

   methods: {
      ...mapActions([
         'listRequest',
         'loaderOn',
         'loaderOff'
      ]),
      getFilms (page = 1) {
         this.loaderOn()

         this.listRequest({ 
            page: page,
            type: 'getByTop'
         }).then(() => {
            this.loaderOff()
         })
      }
   }
}
</script>
<style lang="scss" scoped>
   .top__films {
      &__header {
         width: 100%;
         padding: 5px 0;
         background-color: $gray;
      }
   }
</style>