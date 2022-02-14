import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { Spinner } from 'react-bootstrap';



const ImageWrapper = styled.div`
position: relative;
min-height:100%;
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
height: 100%;
width: auto;
transition-duration: 0.5s;
`;


const LazyImagePage = ({ src, alt }) => {
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
                    "width": "100%",
                    "height": "auto%"
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

LazyImagePage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default LazyImagePage;
