import axios from 'axios'

export const CatService = {
  async getAll() {
    const response = await axios.get('http://localhost:1115/catItem')

    return response.data
  },


  async getById(id) {
    const response = await axios.get(`http://localhost:1115/catItem?id=${id}`)

    return response.data[0]
  },

}