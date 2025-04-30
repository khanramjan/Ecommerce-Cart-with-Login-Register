import { createSlice } from "@reduxjs/toolkit";

const LoginSlice=createSlice({
    name: 'login',
    initialState:{
        isLoggedIn:false,
    },
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn=true;
        },
        logout:(state,action)=>{
            state.isLoggedIn=false;
        }
    }
})
export const {login,logout}=LoginSlice.actions;
export default LoginSlice.reducer;