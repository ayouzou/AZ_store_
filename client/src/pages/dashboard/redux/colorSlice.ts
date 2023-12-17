import {createSlice} from '@reduxjs/toolkit'

const colorSlice = createSlice({
    name :'color',
    initialState:{value:[]},
    reducers:{
        addToColor:(state,action)=>{
            state.value = action.payload || 'bg-indigo-200';
        },

    }
})

export const {addToColor} =colorSlice.actions;
export default colorSlice.reducer;