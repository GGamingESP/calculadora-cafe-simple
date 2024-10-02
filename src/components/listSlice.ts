import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface listState {
    username: string,
    date: string
};

const initialState: listState[] = [];

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addtoList: (state, action: PayloadAction<{ username: string; date: string }>) => {
            state.push(action.payload)
        },
        deletefromList: (state, action: PayloadAction<{username: string, date: string}>) => {
            const index = state.findIndex(user => user.username === action.payload.username)
            if (index !== -1) {
                state.splice(index, 1)
            }
        }
    }
})

// Exporta las acciones para que puedan ser utilizadas en tu componente
export const { addtoList, deletefromList }  = listSlice.actions;

// Crea un selector para acceder al estado
export const selectList = (state: RootState) => state.list;

// Exporta el reducer para que sea utilizado en la configuración del store
export default listSlice.reducer;
