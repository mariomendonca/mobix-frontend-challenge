import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./services/users";

interface UserState {
  value: User
}

const initialUserState = { value: {} } as UserState
const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login: (state: UserState, action: PayloadAction<User>) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialUserState
    }
  }
})

const initialFilterState = { value: [] }
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setTypes: (state: any, action) => {
      state.value = action.payload
    }
  }
})

export const { login, logout } = userSlice.actions
export const { setTypes } = filterSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    filter: filterSlice.reducer
  }
})
