import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TabState {
    currentTab: string;
    currentTabData: string;
    isNewTab: boolean;
    saved:boolean;
    error:string|null;
    isLoading:boolean;

}

const initialState: TabState = {
    currentTab: "",
    currentTabData: "",
    isNewTab: false,
    saved:false,
    error:null,
    isLoading:false
};

export const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        createNew: (state) => {
            state.currentTab ="untitled";
            state.currentTabData = "";
            state.isNewTab = true;
        },
        setCurrentTabData: (state, action: PayloadAction<string>) => {
            state.currentTabData = action.payload;
        },
        setIsNewTab: (state, action: PayloadAction<boolean>) => {
            state.isNewTab = action.payload;
        },
        setStatus:(state,action:PayloadAction<{saved:boolean,error:string|null}>)=>{
            state.saved=action.payload.saved;
            state.error=action.payload.error;
            state.isLoading=false;
        }
    },
});

export const { createNew,setCurrentTabData,setIsNewTab ,setStatus} = tabSlice.actions

export default tabSlice.reducer