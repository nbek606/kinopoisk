<template>
    <div class="container"> 
        <!--Search-->
        <SearchFilms />
        <!--SearchResultList-->
        <SearchFilmsResultList 
          v-if="searchStatus"
        />
        <!--Top Films-->
        <TopFilms 
          v-if="!searchStatus"
        />
    </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import SearchFilms from '@/components/SearchFilms.vue'
  import SearchFilmsResultList from '@/components/SearchFilmsResultList.vue'
  import TopFilms from '@/components/TopFilms.vue'

  export default {
    name: 'Home',
    components: {
      SearchFilms,
      SearchFilmsResultList,
      TopFilms
    },
    computed: {
        ...mapGetters([
          'searchStatus'
        ])
    }
  }
</script>
