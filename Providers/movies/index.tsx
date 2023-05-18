import React, { FC, PropsWithChildren, useContext, useReducer, useState } from 'react';
import { MovieReducer } from './reducer';
import {
    IMovie,
    INITIAL_STATE,
    MovieActionContext,
    MovieStateContext,
} from './context';
import {
    getMovieDetailsRequestAction,
} from './actions';
import { useGet } from 'restful-react';

const MovieProvider:FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);
    
    const getMovies = async () => {
    const { data: IMovie } = useGet({
        path: 'Movie/GetAll' ,
    });

    dispatch(getMovieDetailsRequestAction(IMovie.result));
}

    return (
        <MovieStateContext.Provider value={state}>
            <MovieActionContext.Provider
                value={{
                    getMovies,
                   
                }}
            >
                {children}
            </MovieActionContext.Provider>
        </MovieStateContext.Provider>
    );
};

function useMovieState() {
    const context = useContext(MovieStateContext);
    if (!context) {
        throw new Error('useMovieState must be used within a MovieProvider');
    }
    return context;
}

function useMovieAction() {
    const context = useContext(MovieActionContext);
    if (context === undefined) {
        throw new Error('useMovieState must be used within a MovieProvider');
    }
    return context;
}

function useMovie() {
    return {
        ...useMovieState(),
        ...useMovieAction(),
    };
}
export { MovieProvider, useMovie };
    function createMovieRequestAction(result: any): import("redux-actions").Action<import("./context").IMovieStateContext> {
        throw new Error('Function not implemented.');
    }