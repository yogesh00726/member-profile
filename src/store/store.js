import { configureStore } from '@reduxjs/toolkit'
import memberReducer from "./member";

const reducer = {
  member: memberReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
