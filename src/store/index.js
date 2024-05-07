import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            console.log("store toggle clicked")
            state.showCounter = !state.showCounter;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.amount;
        }
    }
});

const initialAuthState = { isAutheriesed: false };
const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAutheriesed = true;
        },
        logout(state) {
            state.isAutheriesed = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});
export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions
export default store;
