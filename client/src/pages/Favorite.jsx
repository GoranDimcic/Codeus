import GamePreview from "../components/GamePreview"
import Header from "../components/Header"
import Inline from "../components/Inline"

const Favorite = () => {
    return (
        <div>
            <Header />
            <Inline />
            <div>
                <div>
                    Total: 3 item(s) in favorites
                </div>
            </div>
            <div>
                <GamePreview />
                <GamePreview />
            </div>
        </div>
    )
}

export default Favorite
