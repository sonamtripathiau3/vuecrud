import axios from "axios"
export const loadUsers = async({ commit }, payload) => {
   let data = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
           return res.data
        })
        commit("addUser",{data,payload})
  }
export const deleteUser=({commit},payload)=>{
    commit("deleteUser", payload)
}