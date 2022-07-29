import SingleGame from "../components/SingleGame"

const Favorite = () => {
    return (
        <>
            <p>Total: 3 item(s) in favorites</p>
            <div>
                <SingleGame text1="Add to cart" text2="Remove from favorite"/>
                <SingleGame text1="Add to cart" text2="Remove from favorite"/>
                <SingleGame text1="Add to cart" text2="Remove from favorite"/>
            </div>
        </>
    )
}

export default Favorite
