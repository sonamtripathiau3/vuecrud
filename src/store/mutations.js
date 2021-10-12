export default {
    addUser(state, payload) {
        console.log("hello",payload)
        state.users=payload
},
    deleteUser(state,id){
        console.log("id",id)
        state.users = state.users.filter((user) => {
            return user.id!=id;
        });
}
}