import { create } from 'zustand'
import { IUserState } from '../types'

export interface UserStoreState {
  user: IUserState
  setUser: (user?: Partial<IUserState>) => void
}

const initialState: IUserState = {
  id: '',
  email: '',
  name: '',
  state: '',
}

export const useUserStore = create<UserStoreState>((set) => ({
  user: initialState,
  setUser: (user) => set({ user: { ...initialState, ...user } }),
}))
