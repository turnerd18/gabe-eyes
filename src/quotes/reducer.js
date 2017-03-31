import { LOADED_QUOTES, CLOSE_EYES, DONE_CLOSING_EYES } from "./actions"

const quotesReducer = (state = { quotes: [] }, action) => {
    switch (action.type) {
        case LOADED_QUOTES:
            return {
                quotes: action.quotes
            };
        case CLOSE_EYES:
            return {
                ...state,
                angryEyes: 'angry-eyes'
            };
        case DONE_CLOSING_EYES:
            return {
                quotes: state.quotes
            };
        default:
            return state;
    }
};

export default quotesReducer;
