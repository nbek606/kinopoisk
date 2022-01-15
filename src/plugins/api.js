import axios from 'axios'

export const api = (uri, method = 'get', data = {}) => {
   // Create a custom axios instance
   const api = axios.create({
         headers: {
            'X-API-KEY': '268eac93-d5d1-4d80-b5ea-8aba93320a5c',
            'Content-Type': 'application/json',
      },
    })

  // Set baseURL to something different
  api.defaults.baseURL = `https://kinopoiskapiunofficial.tech/api`

  // In our project there will be only get requests 
  if (method == 'get') {
    return api[method](uri)
  }

  return api[method](uri, data)

}