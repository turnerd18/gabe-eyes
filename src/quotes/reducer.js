import { LOADED_QUOTES } from "./actions"

const quotesReducer = (state = [], action) => {
    switch (action.type) {
        case LOADED_QUOTES:
            return action.quotes;            
        default:
            return state;
    }
};

export default quotesReducer;
