import {combineReducers} from 'redux';

import quotes from './quotes/reducer';
import newQuote from './quoteSubmission/reducer';

const reducer = combineReducers({
    quotes,
    newQuote
});

export default reducer;