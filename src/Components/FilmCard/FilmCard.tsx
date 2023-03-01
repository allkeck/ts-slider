import * as React from 'react';
import './FilmCard.css';

type FilmCardProps = {
    slideName: string,
};

export const FilmCard = ({slideName}: FilmCardProps) => {
    return (
        <a className='film-link' href='#'>
            <span>{ slideName }</span>
        </a>
    )
};
