import axios from "axios"
export const loadUsers = ({ commit }) => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            commit("addUsers",res.data)
        })
  }