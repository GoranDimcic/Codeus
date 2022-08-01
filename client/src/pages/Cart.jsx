import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import { StyledCart } from "../styles/CartPage"

const Cart = () => {
    return (
        <>
            <StyledCart>
                <p>Total: 3 item(s) in cart</p>
                <Button button1="Checkout $45"></Button>
            </StyledCart>
            <div>
                <SingleGame button1="Add to favorite" button2="Remove from cart" />
                <SingleGame button1="Add to favorite" button2="Remove from cart" />
                <SingleGame button1="Add to favorite" button2="Remove from cart" />
            </div>
        </>
    )
}

export default Cart
