import {CHANGE_QUOTE} from './actions';

const newQuote = (state = '', action) => {
    switch (action.type) {
        case CHANGE_QUOTE:
            return action.quoteText;
        default: 
            return state;
    }
};

export default newQuote;
