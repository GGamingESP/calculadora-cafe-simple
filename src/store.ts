import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./components/userSlice"
import listReducer from "./components/listSlice"

export const store = configureStore({
    reducer: {
        users: userReducer,
        list: listReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch