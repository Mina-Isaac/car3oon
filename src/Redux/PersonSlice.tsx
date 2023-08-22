import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Person } from "../types";
import { RootState } from "./Store";
import axios from "axios";



export const getData=createAsyncThunk('person/info',async()=>{
const res=await axios.get('https://randomuser.me/api/?results=2');
return res.data.results
})

const dataStored: Person[] = []
export const personSlice = createSlice({
  name: 'persons',
  initialState:{
    list:dataStored,
    loading:false,
    error:true
  },
  reducers: {
  },
  
  extraReducers:(builder)=>{
    builder.addCase(getData.pending,state=>{
       state.loading=true
       
    })
  .addCase(getData.fulfilled,(state,action:PayloadAction<Person[]>)=>{
    state.list.push(...action.payload)
    state.loading=false
  })
  .addCase(getData.rejected,state=>{
    state.error=true
  })
  }
  });



export const {} = personSlice.actions;
export const selectPerson = (state: RootState) => state.persons;
export default personSlice.reducer;