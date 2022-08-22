import create from "zustand";

const useAuthStore = create((set) => ({
  token: "",
  setToken: (token) => {
    set({ token: token });
    localStorage.setItem("token", token);
  },
  deleteToken: () => {
    set({ token: "" });
    localStorage.removeItem("token");
  },
}));

export default useAuthStore;
