import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserState {
    name: string
}

const initialState: UserState[] = []

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            state.push({ name: action.payload })
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            const index = state.findIndex(user => user.name === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
        }
    }
})

// Exportar las acciones generadas
export const { addUser, deleteUser } = userSlice.actions

// Exportar el reducer
export default userSlice.reducer

// Selector para obtener todos los usuarios
export const selectUsers = (state: RootState) => state.users