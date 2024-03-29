import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { Spinner } from 'react-bootstrap';



const ImageWrapper = styled.div`
  position: relative;
//   width: 100%;
//   height: 50vw;

height: 250px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;



const Placeholder = styled.div`
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  `;

const StyledImage = styled.img`
overflow:hidden;
height: 100%;
width: auto;
transition-duration: 0.5s;
`;


const LazyImage = ({ src, alt }) => {
    const refPlaceholder = React.useRef();

    const removePlaceholder = () => {
        refPlaceholder.current.remove();
    };

    return (
        <ImageWrapper>
            <Placeholder ref={refPlaceholder} >
                <Spinner animation="border" size="lg" />
            </Placeholder>
            <LazyLoad
                style={{
                    "width": "auto",
                    "height": "100%"
                }}
            >
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
