import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import colorSlice from "../../../dashboard/redux/colorSlice";
import colorSidebar from "../../../dashboard/redux/sidebarSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer ,persistStore} from "redux-persist" 
const persistConfig={
    key:"root",
    storage,
}

 const rootReducer =combineReducers({
    
        cart:cartSlice,
        color:colorSlice,
        colorSidbar:colorSidebar,
    

})

const persistedReducer =persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer:persistedReducer
})
export const persistor =persistStore(store)
export default {store ,persistor}