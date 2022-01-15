<template>
   <div class="result__list">
      <div class="result__list__data">
         <SearchFilmsResultListItem 
            v-for="(film, index) in list" 
            :key="index"
            :film="film"
            :serial-number="index"
         />
      </div>
      <div class="result__list__pagination" v-if="pagesCount > 1 ">
         <Pagination 
            :last-page="pagesCount"
            :current-page="currentPage"
            @send-page="sendPage"
            
         />
      </div>
   </div>
</template>
<script>

import SearchFilmsResultListItem from '@/components/SearchFilmsResultListItem.vue'
import Pagination from '@/components/Pagination'

export default {
   name: 'ListFilms',
   components: {
      SearchFilmsResultListItem,
      Pagination
   },
   props: {
      getListFilms: {
         type: [Array, Object, Boolean],
         required: true
      }
   },
   data () {
      return {
         currentPage: 1
      }
   },
   computed: {
      list () {
         if (!this.getListFilms) return []
         
         return this.getListFilms.films
      },

      emptyList () {
         if (this.list.length)
            return true
         else 
            return false
      },

      pagesCount () {
         /* Ограничение со стороны сервера, максимальное количество страниц => 20 */
         if (this.getListFilms.pagesCount >= 20) {
            return 20
         }
         
         return this.getListFilms.pagesCount
      }
   },
   methods: {
      sendPage (page) {
       
         if (page !== this.pagesCount + 1) {
            this.currentPage = page
         }

         this.$emit('send-page', page)
      }
   }
}
</script>