import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import { StyleMargin } from "../styles"
import { StyledCart } from "../styles/CartPage"

const Cart = () => {
    return (
        <StyleMargin>
            <StyledCart>
                <p>Total: 3 item(s) in cart</p>
                <Button text1="Checkout $45"></Button>
            </StyledCart>
            <div>
                <SingleGame text1="Add to favorite" text2="Remove from cart" />
                <SingleGame text1="Add to favorite" text2="Remove from cart" />
                <SingleGame text1="Add to favorite" text2="Remove from cart" />
            </div>
        </StyleMargin>
    )
}

export default Cart
