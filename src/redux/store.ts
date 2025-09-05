import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";

 const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
 })

 export type Rootstate = ReturnType<typeof store.getState>
 export type AppDispatch = typeof store.dispatch