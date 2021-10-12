import axios from "axios"
export const loadUsers = ({ commit }) => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            commit("addUser",res.data)
        })
  }
export const deleteUser=({commit},payload)=>{
    commit("deleteUser", payload)
}