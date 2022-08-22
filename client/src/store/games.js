import create from "zustand";
import ApiClient from "../api/axios";

const useGamesStore = create((set) => ({
  favorites: [],
  cart: [],

  setFavorites: (favorites) => {
    set({ favorites: favorites });
  },
  setCart: (cart) => {
    set({ cart: cart });
  },

  addToFavorites: async (game) => {
    await ApiClient.post("/favorite/", { gameId: game.id });
    await ApiClient.get("/favorite/").then((favoriteResponse) => {
      set({ favorites: favoriteResponse.data.data });
    });
  },

  removeFromFavorites: async (game) => {
    await ApiClient.delete(`/favorite/${game.id}`);
    await ApiClient.get("/favorite/").then((favoriteResponse) => {
      set({ favorites: favoriteResponse.data.data });
    });
  },

  addToCart: async (game) => {
    await ApiClient.post("/cart/", { gameId: game.id, price: game.price });
    await ApiClient.get("/cart/").then((cartResonse) => {
      set({ cart: cartResonse.data.data });
    });
  },

  removeFromCart: async (game) => {
    await ApiClient.delete(`/cart/${game.id}`);
    await ApiClient.get("/cart/").then((cartResonse) => {
      set({ cart: cartResonse.data.data });
    });
  },
}));

export default useGamesStore;
