import { createContext } from "react";


export interface IMovie {
    id?: string,
    title: string,
    duration: string,
    starring: string,
    genre: string,
    file?: any,
}

export const INITIAL_STATE: IMovieStateContext={
    fetchedMovie:[],
}

export interface IMovieStateContext {
    readonly fetchedMovie?:Array<IMovie>;
    readonly searchedMovie?:IMovie[];
    readonly filteredMovie?:IMovie;
    readonly countedMovie?:number;
}

export interface IMovieActionContext{
    getMovies?:() => void;
    
}

const MovieStateContext = createContext<IMovieStateContext>(INITIAL_STATE);

const MovieActionContext = createContext<IMovieActionContext>(undefined);

export {MovieStateContext, MovieActionContext};