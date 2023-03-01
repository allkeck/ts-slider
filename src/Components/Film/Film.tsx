import * as React from 'react';
import { getFilms } from '../../dataLayer/filmsApi';
import { FilmCard } from '../FilmCard/FilmCard';

export const Film = () => {
    return (
        <>
            {getFilms().map((filmName, index) => <FilmCard key={index} slideName={filmName.name} />)}
        </>
    )
};