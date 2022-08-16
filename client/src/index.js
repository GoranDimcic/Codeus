import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiClient from './api/axios';
import useGamesStore from './store/games';
import useAuthStore from './store/auth';

export const initialFetch = async () => {
  if (localStorage.getItem("token")) {
    useAuthStore.setState({ token: localStorage.getItem("token") })

    ApiClient.get(`/favorite`, {
      params: {
        perPage: 3
      }
    }).then(favoritesResponse => {
      useGamesStore.setState({ favorites: favoritesResponse.data.data });
    })

    ApiClient.get("/cart/").then((cartResponse) => {
      useGamesStore.setState({ cart: cartResponse.data.data });
    })
  }
}

initialFetch().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />
  );
})

reportWebVitals();
