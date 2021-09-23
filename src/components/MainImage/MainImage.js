import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainImageContainer } from './MainImage.elements';
import {fetchImage} from '../../redux/actions/actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';

const MainImage = () => {
    const dispatch = useDispatch();
    const { image, loading } = useSelector(state => state.mainImage);
    return (
        <>
            {
                loading?
                <MainImageContainer background={"#cfcfcf"}>
                    <ReactLoading type={'spin'} color={'gray'} height={75} width={75} />
                </MainImageContainer>
                :
                (
                    Object.keys(image).length === 0?
                    <MainImageContainer background={"#cfcfcf"}>
                        <FontAwesomeIcon onClick={ () => dispatch(fetchImage())} icon={faPlus} color={"gray"} size={"5x"} />
                    </MainImageContainer>
                    :
                    <MainImageContainer background={image.urls}></MainImageContainer>
                )
            }
        </>
    )
}

export default MainImage;
