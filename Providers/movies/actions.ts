import {createAction} from 'redux-actions';
import { IMovie, IMovieStateContext} from './context';
export enum MovieActionEnum{
    getMovieDetailsRequest='GET_MOVIE',
    
}
export const getMovieDetailsRequestAction = createAction<IMovieStateContext, Array<IMovie>>(MovieActionEnum.getMovieDetailsRequest,(fetchedMovie)=>({fetchedMovie}));
