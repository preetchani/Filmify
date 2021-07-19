import React from 'react';

import { Image } from './Thumb.styles';

const Thumb = ({image, movieId,clickable})=>(
    <div>
        <Image src={image} alt="movie-thumb0"/>
    </div>
);

export default Thumb;