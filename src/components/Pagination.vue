<template>
   <div class="pagination">
      <div 
         class="pagination__item" 
         v-if="prevPage > 0"
         @click="send(1)"
      >
         Первый
      </div>

      <div 
         class="pagination__item" 
         v-if="prevPage > 0"
         @click="send(prevPage)"
      >
         {{ prevPage }}
      </div>

      <div 
         class="pagination__item current"
          @click="send(currentPage)"
      >
         {{ currentPage }}
      </div>

      <div 
         class="pagination__item" 
         v-if="nextPage > 1 && nextPage < lastPage + 1"
         @click="send(nextPage)"
      >
         {{ nextPage }}
      </div>

      <div 
         class="pagination__item" 
         v-if="currentPage !== lastPage"
         @click="send(lastPage)"
      >
         Последний
      </div>
   </div>
</template>
<script>
export default {
   name: "Pagination",
   props: {
      lastPage: {
         type: Number,
         default: 0
      },
      currentPage: {
         type: Number,
         default: 1
      }
   },
   computed: {
      prevPage () {
         return this.currentPage - 1
      },
      nextPage () {
         return this.currentPage + 1
      }
   },
   methods: {
      send(page) {
         this.$emit('send-page', page)
      }
   }
}
</script>
<style lang="scss" scoped>
   .pagination {
      margin-bottom: 20px;
      display: flex;
      margin:40px 20px;

      &__item {
         padding: 5px 10px;
         background-color: $light-dark;
         margin-left: 5px;
         color:$white;
         cursor: pointer;

         &:hover {
            background-color: $dark;
         }
      }

      .current {
         background-color: $dark-blue;
      }
   }
</style>