import React from 'react';
import MainImage from '../MainImage/MainImage';
import CardFooter from '../CardFooter/CardFooter';
import { CardContainer, CardTitle } from './Card.elements';
import {HorizontalLine} from '../../globalStyles';
import ApprovedImages from '../ApprovedImages/ApprovedImages';

const Card = () => {
    return (
        <CardContainer>
            <CardTitle>image approval application</CardTitle>
            <ApprovedImages />
            <HorizontalLine />
            <MainImage />
            <HorizontalLine />
            <CardFooter />
        </CardContainer>
    )
}

export default Card;
