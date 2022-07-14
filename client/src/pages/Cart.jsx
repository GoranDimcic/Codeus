import SingleGame from "../components/SingleGame"
import { ChildDiv, StyledButton } from "../styledComponent"
import { StyleCart } from "../styledComponent/CartPage"

const Cart = () => {
    return (
        <StyleCart>
            <ChildDiv>
                Total: 3 item(s) in cart<StyledButton>Chechout $45</StyledButton>
            </ChildDiv>
            <div className="all games in cart">
                <SingleGame />
                <SingleGame />
            </div>
        </StyleCart>
    )
}

export default Cart
