import create from 'zustand'
import ApiClient from '../api/axios'

const useGamesStore = create(
    (set) => ({
        favorites: [],
        cart: [],

        setFavorites: favorites => {
            set({ favorites: favorites })
        },
        setCarts: carts => {
            set({ carts: carts })
        },

        addToFavorites: async (game) => {
            ApiClient.post("/favorite/", { gameId: game.id }).then(() =>
                set(state => ({
                    favorites: [...state.favorites, game]
                }))
            ).catch(e => console.log("Game is already in favorite: ", e))

        },

        removeFromFavorites: async (game) => {
            ApiClient.delete(`/favorite/${game.id}`).then(() =>
                set(state => ({
                    favorites: [...state.favorites.filter(fav => fav.id !== game.id)]
                }))
            ).catch(e => console.log("Game is not in favorite: ", e))
        },

        addToCart: async (game) => {
            ApiClient.post("/cart/", { gameId: game.id, price: game.price }).then(() =>
                set(state => ({
                    cart: [...state.cart, game]
                }))
            ).catch(e => console.log("Game is already in cart: ", e))
        },
        
        removeFromCart: async (game) => {
            ApiClient.delete(`/cart/${game.id}`).then(() =>
                set(state => ({
                    cart: [...state.cart.filter(cart => cart.id !== game.id)]
                }))
            ).catch(e => console.log("Game is not in cart: ", e))
        }
    })
)

export default useGamesStore