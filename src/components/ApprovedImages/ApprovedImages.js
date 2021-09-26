import React from 'react';
import "react-multi-carousel/lib/styles.css";
import { CarouselContainer, ApprovedImageTitle, ImageContainer, CloseIcon } from './ApprovedImages.elements';
import { useSelector, useDispatch } from 'react-redux';
import {APPROVED_IMAGES_REMOVE_IMAGE} from '../../redux/actions/actionTypes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    }
}

const ApprovedImages = () => {
    const approvedImages = useSelector(state => state.approvedImages);
    const dispatch = useDispatch();
    return (
        <>
            <ApprovedImageTitle>
                approved images ({approvedImages.length})
            </ApprovedImageTitle>
            <CarouselContainer
                responsive={responsive}
                containerClass="carousel-container"
            >
                {
                    approvedImages.length > 0?
                        approvedImages.map (
                            ({id, url : {smallSize}, description}) => (
                            <ImageContainer key={id}>
                                <img src={smallSize} alt={description} width="75" height="50" />
                                <CloseIcon onClick={() => dispatch({type: APPROVED_IMAGES_REMOVE_IMAGE, payload: {id: id}})}>
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
            </CarouselContainer>
        </>
    )
}

export default ApprovedImages;
