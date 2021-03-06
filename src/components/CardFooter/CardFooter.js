import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addToRejectedImages, addToApprovedImages} from '../../redux/actions/actions';
import {Button} from '../../globalStyles';
import {CardFooterContainer, CardFooterText, ButtonsContainer, ErrorText } from './CardFooter.elements';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';

const CardFooter = () => {
    const dispatch = useDispatch();
    const { image, error } = useSelector(state => state.mainImage);
    return (
        <CardFooterContainer>
            {
                error?
                <ErrorText data-testid="error-text">{error}</ErrorText>
                :
                (
                    !image.id?
                    <CardFooterText>
                        Click on the + in order to get image recommendations
                    </CardFooterText>
                    :
                    <ButtonsContainer>
                        <Button onClick={ () => dispatch(addToRejectedImages(image.id))} backgroundColor="#454545">
                            <FontAwesomeIcon icon={faTimes} color={"white"} size={"lg"} />
                        </Button>
                        <Button onClick= { () => dispatch(addToApprovedImages(image)) } backgroundColor="#3b55e6">
                            <FontAwesomeIcon icon={faCheck} color={"white"} size={"lg"} />
                        </Button>
                    </ButtonsContainer>
                )
            }    
        </CardFooterContainer>
    )
}

export default CardFooter;
