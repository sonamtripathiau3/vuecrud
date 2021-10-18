export default {
    addUser(state, payload) {
        console.log("hello",payload)
        console.log(payload.data)
        let skip =5*(payload.payload-1)
        console.log(skip)
        let limit = skip+5;
        let newData=[]
        newData=payload.data.slice(skip,limit)
        console.log(newData)
        // state.users=payload
        state.users=newData
},
    deleteUser(state,id){
        console.log("id",id)
        state.users = state.users.filter((user) => {
            return user.id!=id;
        });
}
}