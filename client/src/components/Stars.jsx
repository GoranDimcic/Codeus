import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Stars = (props) => {
  const [hoveredStars, setHoveredStars] = useState(0);

  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <StyledStar
        size={props.size}
        src={
          i <= props.selectedRating
            ? "../images/star-filled.png"
            : "../images/star-empty.png"
        }
        onMouseEnter={() => setHoveredStars(i)}
        opacity={i <= hoveredStars ? 0.5 : 1}
        key={i}
        onClick={() => !props.disabled && props.handleClick(i)}
      ></StyledStar>
    );
  }
  return (
    <StyledStars
      className={props.className}
      onMouseOut={() => setHoveredStars(0)}
      disabled={props.disabled}
    >
      {stars}
    </StyledStars>
  );
};

Stars.propTypes = {
  size: PropTypes.number,
  selectedRating: PropTypes.number,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};

const StyledStars = styled.div`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  display: flex;
  padding: 0.6rem 0;
  img {
    width: 30px;
    margin-left: 20px;
  }
  img:nth-child(1) {
    margin-left: 0;
  }
`;

const StyledStar = styled.img`
  max-width: ${(props) => props.size || 1.5}rem;
  max-height: ${(props) => props.size || 1.5}rem;
  opacity: ${(props) => props.opacity || 1};
`;

export default Stars;
