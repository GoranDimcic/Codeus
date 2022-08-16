import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import useGamesStore from "../store/games"
import { StyledCart } from "../styles/CartPage"

const Cart = () => {
    const cart = useGamesStore(state => state.cart)
    const setCart = useGamesStore(state => state.setCart)

    useEffect(() => {
        ApiClient.get("/cart/").then((cartResponse) => {
            setCart(cartResponse.data.data);
        })
    }, [])

    const onchange = () => {
        ApiClient.get("/cart/").then((cartResponse) => {
            setCart(cartResponse.data.data);
        })
    }

    const checkout = () => {
        ApiClient.put("/cart/")
        setCart([])
    }

    const totalSum = cart.reduce(
        (previousValue, currentValue) => previousValue + parseFloat(currentValue.price), 0
    )

    const cartGames = cart.map(game => (
        <SingleGame game={game} onchange={onchange} key={game.id} />
    ))

    return (
        <>
            <StyledCart>
                {
                    cart.length > 0 ?
                        <p>Total: {cart.length} item(s) in cart</p>
                        :
                        <p>There is no items in cart.</p>
                }
                {cart.length > 0 && <Button onClick={() => { checkout() }} text={`Checkout $${totalSum}`}></Button>}
            </StyledCart>
            {cartGames}
        </>
    )
}

export default Cart
