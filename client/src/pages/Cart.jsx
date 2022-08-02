import { useEffect, useState } from "react"
import ApiClient from "../api/axios"
import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import { StyledCart } from "../styles/CartPage"

const Cart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        ApiClient.get("/cart/").then((cartResponse) => {
            setCart(cartResponse.data.message);
        })
    }, [])

    const cartGames = cart.map(game => (
        <SingleGame game={game} button1="Add to favorite" button2="Remove from cart" />
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
                {cart.length > 0 && <Button button1={"Checkout $45"}></Button>}
            </StyledCart>
            {cartGames}
        </>
    )
}

export default Cart
