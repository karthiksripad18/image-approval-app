import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ApprovedImagesContainer, ApprovedImageTitle, ImageContainer, CloseIcon } from './ApprovedImages.elements';
import { useSelector, useDispatch } from 'react-redux';
import {APPROVED_IMAGES_REMOVE_IMAGE} from '../../redux/actions/actionTypes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    }
}

const ApprovedImages = () => {
    const approvedImages = useSelector(state => state.approvedImages);
    const dispatch = useDispatch();
    return (
        <ApprovedImagesContainer
            
        >
            <ApprovedImageTitle>
                APPROVED IMAGES ({approvedImages.length})
            </ApprovedImageTitle>
            <Carousel
                responsive={responsive}
                containerClass="carousel-container"
                // customRightArrow={<CustomRightArrow />}
            >
                {
                    approvedImages.length > 0?
                    approvedImages.map (
                        image => (
                        <ImageContainer key={image.id}>
                            <img src={image.urls.thumb} alt="" width="60" height="40" />
                            <CloseIcon onClick={() => dispatch({type: APPROVED_IMAGES_REMOVE_IMAGE, payload: {id: image.id}})}>
                                <FontAwesomeIcon icon={faTimes} color={"white"} size={"xs"} />
                            </CloseIcon>
                        </ImageContainer>
                        )
                    )
                    :
                    <ImageContainer background={"#cfcfcf"}>
                        <FontAwesomeIcon icon={faPlus} color={"gray"} size={"1x"} />
                    </ImageContainer>
                }
            </Carousel>
        </ApprovedImagesContainer>
    )
}

export default ApprovedImages;
