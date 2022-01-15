<template>
   <div class="search__result__list">
      <div class="search__result__list__header">
         <div class="search__result__list__header__item">
            <span class="search__result__list__header__item__title">
               поиск:
            </span>
            <span class="search__result__list__header__item__value">
               {{ keyword }}
            </span>
         </div>
         <div class="search__result__list__header__item">
            <span class="search__result__list__header__item__title">
               результаты:
            </span>
            <span class="search__result__list__header__item__value">
               {{ searchFilmsCountResult }}
            </span>
         </div>
      </div>
      <div v-if="!emptyList">
         <ListFilms
            @send-page="sendPage"
            :get-list-films="getListFilms"
         />
      </div>
   </div>
</template>
<script>

import ListFilms from '@/components/ListFilms.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
   name: 'SearchFilmsResultList',
   components: {
      ListFilms
   },
   computed: {
      ...mapGetters([
         'getListFilms'
      ]),

      keyword () {
         return this.getListFilms.keyword
      },

      emptyList () {
         if (this.getListFilms && this.getListFilms.films.length)
            return false
         else 
            return true
      },

      searchFilmsCountResult () {
         return this.getListFilms.searchFilmsCountResult
      },
   },
   methods: {
      ...mapActions([
         'search',
         'loaderOn',
         'loaderOff'
      ]),
      sendPage (page) {
         this.loaderOn()

         this.search({ 
            keyword:this.keyword, 
            page: page
         }).then(() => {
            this.loaderOff()
         })
      }
   }
}
</script>
<style lang="scss" scoped>
   .search__result__list {
      margin: auto;
      width: 1000px;

      &__header {
         display: flex;
         width: 100%;
         padding: 5px 0;
         background-color: $gray;

         &__item {
            padding: 0 20px;
            font-size: 15px;

            &__title {
               color: $dark;
            }

            &__value {
               color: $dark;
               font-weight: 600;
            }
         }
      }
   }
</style>