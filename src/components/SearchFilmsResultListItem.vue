<template>
   <div class="item__film">
      <div class="float-left item__film__left">
         <div class="item__film__left__img" v-if="film.posterUrl">
            <img :src="film.posterUrl" >
         </div>
         <div class="item__film__left__description">
            <div class="item__film__left__description__group">
               <div class="item__film__left__description__group__item">
                  <!---link to details film-->
                  <span 
                     class="text-link font-weight" 
                     v-if="film.nameRu"
                     @click="sendToDetails"
                  >
                     {{ film.nameRu }}
                  </span>

                  <span class="text-danger" v-if="film.year">
                     {{ film.year }}
                  </span>
               </div>

               <div class="item__film__left__description__group__item">
                  <span class="text-gray" v-if="film.nameEn">
                     {{ film.nameEn }},
                  </span>
                  <span class="text-gray font-weight" v-if="film.filmLength">
                     {{ film.filmLength }}
                  </span>
               </div>
            </div>

            <div class="item__film__left__description__group">
               <div class="item__film__left__description__group__item">
                  <span class="text-gray" v-if="country">
                     {{ country }},
                  </span>
                  <span class="text-gray">
                     реж. Нурбек
                  </span>
               </div>
               <div 
                  class="item__film__left__description__group__item"
                  v-if="film.genres.length"
               >
                  (
                  <span 
                     class="text-gray"
                     v-for="(item, index) in film.genres"
                     :key="index"
                  >
                     {{  film.genres[index + 1] ? item.genre + ',' : item.genre + ''}}
                  </span>
                  )
               </div>
            </div>
            <div class="item__film__left__description__group">
                  <div 
                     class="item__film__rating" 
                     v-if="film.rating != 'null'"
                  >
                     {{ film.rating }}
                  </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>

import { NameRoute } from '@/router/router-utils'

export default {
   name: 'SearchFilmsResultListItem',

   props: {
      film: {
         type: [Object, Array],
         required: true
      },
      serialNumber: {
         type: Number,
         required: true
      }
   },

   computed: {
      country () {
         if (this.film.countries.length === 0) 
            return null

         return this.film.countries[0].country
      },
   },
   methods: {
      sendToDetails () {
         this.$router.push({
            name: NameRoute.DetailsFilm,
            params: {
               id: this.film.filmId
            }
         })
      }
   }

}
</script>

<style lang="scss" scoped>
   .item__film {
      height: 150px;
      display: flex;
      padding: 20px 20px;
      border-bottom: 1px solid $light-gray;

      &__rating {
         width: 30px;
         font-size: 15px;
         padding: 5px;
         background-color: $danger;
         border-radius: 5px;
         font-weight: 600;
         color: $white;
      }
      
      &__left {
         display: flex;
         
         &__description {
            font-size: 14px;

            &__group {
               margin-bottom: 10px;

               &__item {
                  text-align: left;
                  margin-top: 2px;

                  span {
                     margin-right: 5px;
                  }
               }
            }
         }

         &__counter {
            color: $dark;
            width: 20px;
         }
         &__img {
            width: 100px;
            height: 150px;
            margin-right: 10px;

            img {
               width: 100%;
               height: 100%;
            }
         }
      }
   }
</style>