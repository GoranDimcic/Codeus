import GamePreview from "../components/GamePreview"
import Header from "../components/Header"
import Inline from "../components/Inline"
import { ChildDiv, ParentDiv, StyledButton } from "../styledComponent"

const Cart = () => {
    return (
        <div>
            <Header />
            <Inline />
            <ParentDiv>
                <ChildDiv>
                    Total: 3 item(s) in favorites
                </ChildDiv>
                <ChildDiv>
                    <StyledButton>Chechout $45</StyledButton>
                </ChildDiv>
            </ParentDiv>
            <div className="skup igara">
                <GamePreview />
                <GamePreview />
            </div>
        </div>
    )
}

export default Cart
