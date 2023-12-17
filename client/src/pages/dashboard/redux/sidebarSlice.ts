import {createSlice} from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
    name :'colorSidbar',
    initialState:{value:[]},
    reducers:{
        addToColorSidebar:(state,action)=>{
            state.value = action.payload || 'bg-indigo-200';
        },
       
    }
})

export const {addToColorSidebar} =sidebarSlice.actions;
export default sidebarSlice.reducer;