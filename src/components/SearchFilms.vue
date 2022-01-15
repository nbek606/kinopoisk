<template>
   <div class="search">
      <input 
         v-model="keyword"
         class="search__input"
         placeholder="Фильмы"
      >
      <button 
         class="search__button"
         @click="sendToSearch"
      >
         Поиск
      </button>
   </div>
</template>
<script>

import { mapActions } from 'vuex'

export default {
   name: 'SearchFilm',
   data () {
      return {
         keyword: ""
      }
   },
   methods: {
      ...mapActions([
         'search',
         'loaderOn',
         'loaderOff'
      ]),
      sendToSearch () {
         this.loaderOn()

         this.search({ 
            keyword: this.keyword,
            page: 1 
         }).then(() => {
            this.loaderOff()
         })
      }
   }
}
</script>
<style lang="scss" scoped>
   .search {
      width: 600px;
      display: flex;
      margin: 20px auto;

      &__input {
         display: block;
         -webkit-box-sizing: border-box;
         box-sizing: border-box;
         width: 100%;
         margin: 0;
         padding: 8px 0 8px 16px;
         font-family: Graphik Kinopoisk LC Web,Arial,Tahoma,Verdana,sans-serif;
         font-size: 15px;
         outline: none;
         background: transparent;
         color: $inputTextColor;
         border: 1px solid $inputBorderColor;
      }

      &__button {
         background-color: $buttonBackround;
         color: $buttonTextColor;
         cursor: pointer;
         border-radius: 0;
         border: none;
         padding: 8px 16px;
         transition: all 0.5s;

         &:hover {
            background-color: $buttonHoverBackround;
            letter-spacing: 1px;
         }
      }
   }
</style>