import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vw;
`;



const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  `;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LazyImage = ({ src, alt }) => {
    const refPlaceholder = React.useRef();

    const removePlaceholder = () => {
        refPlaceholder.current.remove();
    };

    return (
        <ImageWrapper>
            <Placeholder ref={refPlaceholder} />
            <LazyLoad>
                <StyledImage
                    onLoad={removePlaceholder}
                    onError={removePlaceholder}
                    src={src}
                />
            </LazyLoad>
        </ImageWrapper>
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default LazyImage;
