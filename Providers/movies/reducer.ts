import { MovieActionEnum } from "./actions";
import { IMovieStateContext } from "./context";

export function MovieReducer(incomingState: IMovieStateContext, action: ReduxActions.Action<IMovieStateContext>): IMovieStateContext {

    const { type, payload } = action;

    switch (type) {
        
        case MovieActionEnum.getMovieDetailsRequest:   
          return {...incomingState,...payload}    
          
        
            
             default:
                return incomingState;
    }
}





