import create from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set) => ({
            token: [],
            setToken: token => set({ token: token })
        }),
        {
            name: 'authStorage',
            getStorage: () => sessionStorage,
        }
    )
)

export default useAuthStore