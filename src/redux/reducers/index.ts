import { createSlice } from "@reduxjs/toolkit"

export interface AppStore {
    data: Record<string, any>
    user: Record<string, any>
    coins: number
}
const initialState: AppStore = {
    data: {},
    user: {},
    coins: 0
}
export const appReducer = createSlice({
    name: "appDatas",
    initialState,
    reducers: {
        increaseCoins: (state, action) => {
            state.coins += action.payload
        },
        decreaseCoins: (state, action) => {
            state.coins -= action.payload
        },

        // set data
        setData: (state, action) => {
            state.data = action.payload
        },
        // set user
        setUser: (state, action) => {
            state.user = action.payload
        }
    }

})

export const { decreaseCoins, increaseCoins, setData, setUser } = appReducer.actions

export default appReducer.reducer