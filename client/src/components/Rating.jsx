import { useState } from "react";
import PropTypes from "prop-types";
import Stars from "./Stars";

const Rating = (props) => {
    const [ratingDisabled, setRatingDisabled] = useState(false);
    const handleClick = async (ratingNum) => {
        setRatingDisabled(true);
        if (props.userRating && ratingNum === props.userRating) {
            await props.removeRatingHandler(props.gameId);
        } else {
            await props.addRatingHandler(props.gameId, ratingNum);
        }
        setRatingDisabled(false);
    };
    return (
        <Stars
            handleClick={handleClick}
            size={props.size}
            selectedRating={props.userRating ? props.userRating : props.rating}
            className={props.className}
            disabled={ratingDisabled}
        />
    );

};

Rating.propTypes = {
    size: PropTypes.number,
    addRatingHandler: PropTypes.func,
    removeRatingHandler: PropTypes.func,
    rating: PropTypes.number,
    userRating: PropTypes.number,
    gameId: PropTypes.number,
};

export default Rating;