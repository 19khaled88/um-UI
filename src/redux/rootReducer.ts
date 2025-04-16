import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

// Define action type
interface Action {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

// Define initial state type
interface ExampleState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

const exmpleReducer = (state:ExampleState ={},action:Action):ExampleState =>{
    switch(action.type){
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    exmple:exmpleReducer
});


export const reducer = {
    [baseApi.reducerPath]:baseApi.reducer
}


