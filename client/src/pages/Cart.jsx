import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import { StyleMargin } from "../styles"
import { StyledCart } from "../styles/CartPage"

const Cart = () => {
    return (
        <StyleMargin>
            <StyledCart>
                <p>Total: 3 item(s) in cart</p>
                <Button text="Checkout $45"></Button>
            </StyledCart>
            <div>
                <SingleGame />
                <SingleGame />
                <SingleGame />
            </div>
        </StyleMargin>
    )
}

export default Cart
