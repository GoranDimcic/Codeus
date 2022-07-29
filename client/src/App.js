import Favorite from "./Pages/Favorite"
import Header from "./components/Header"
import Cart from "./Pages/Cart"
import Game from "./Pages/Game"
import Inline from "./components/Inline"
import Search from "./Pages/Search"
import Browse from "./Pages/Browse"
import Footer from "./components/Footer"
import FirstPage from "./Pages/FirstPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import useAuthStore from "./store/auth.js"
import Wrapper from "./components/Wrapper"

const App = () => {
  const { token } = useAuthStore()
  return (
    <>
      <BrowserRouter>
        <Header />
        <Inline />
        <Wrapper>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/game" element={<Game />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App