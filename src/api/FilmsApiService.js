import { api } from '@/plugins/api'

const uri_v2_2 = '/v2.2/films' 
const uri_v2_1 = '/v2.1/films'


export default class FilmsApiService  {
   static getById = (id) => {
      return api(uri_v2_2 + '/' + id, 'get')
   }

   static getByTop = (page = 1) => {
      return api(uri_v2_2 + '/top?page=' + page, 'get')
   }

   static sendToSearch = (keywords, page = 1) => {
      return api(uri_v2_1 + '/search-by-keyword?keyword=' + keywords + '&page=' + page, 'get')
   }

   static getFimVideos = (id) => {
      return api(uri_v2_2 + '/' + id + '/videos')
   }
}