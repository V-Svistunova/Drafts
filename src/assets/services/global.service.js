import axios from 'axios'

export const GlobalService = {

  async getAll() {
    const response = await axios.get('http://localhost:3000/settings')

    return response.data[0]
  },

  async getHeadmenu() {
    const response = await axios.get('http://localhost:3000/headMenu?active=true')

    return response.data
  },

  async getHeaderMenu() {
    const response = await axios.get('http://localhost:3000/headerMenu?active=true')

    return response.data
  },

}