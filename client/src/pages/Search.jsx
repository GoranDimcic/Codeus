import Button from "../components/Button"
import SingleGame from "../components/SingleGame"
import StarImg from "../components/StarImg"
import { StyleMargin } from "../styles"
import {
    StyleGameTypeAndPrice, StyleFilter, StyleInput,
    StyleLoadMore, StyleMiddle, StylePlatform, StyleSearch
} from "../styles/SearchPage"


const Search = () => {
    return (
        <StyleMargin>
            <StyleSearch>
                <StyleInput></StyleInput>
                <Button text1="Search" />
            </StyleSearch>
            <StyleFilter>
                <StyleGameTypeAndPrice>
                    <div>Role-playing</div>
                    <div>Real time strategy</div>
                    <div>Racing</div>
                    <div>Simulation</div>
                    <div>Action</div>
                    <div>Adventure</div>
                </StyleGameTypeAndPrice>
                <StyleMiddle>
                    <StylePlatform>
                        <div>Mac oc</div>
                        <div>Windows</div>
                        <div>Linux</div>
                    </StylePlatform>
                    <StarImg />
                </StyleMiddle>
                <StyleGameTypeAndPrice>
                    <div>Free</div>
                    <div>Under $5</div>
                    <div>From $5 - $10</div>
                    <div>From $10 - $30</div>
                    <div>Over $30</div>
                </StyleGameTypeAndPrice>
            </StyleFilter>
            <div>
                <SingleGame text1="Add to favorite" text2="Add to cart $15" />
                <SingleGame text1="Add to favorite" text2="Add to cart $15" />
                <SingleGame text1="Add to favorite" text2="Add to cart $15" />
            </div>
            <StyleLoadMore>
                <Button text1="Loan more" />
            </StyleLoadMore>
        </StyleMargin>
    )
}

export default Search
