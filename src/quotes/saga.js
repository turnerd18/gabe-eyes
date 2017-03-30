import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import * as api from '../api';
import { 
    ADD_QUOTE, LOAD_QUOTES, UP_VOTE, DOWN_VOTE,
    loadQuotes as loadQuotesAction, loadedQuotes,
    upVote as upVoteAction, downVote as downVoteAction
} from './actions';

function* upVote({id}) {
    yield call(api.upVote, id);
    yield put(loadQuotesAction());
}

function* downVote({id}) {
    yield call(api.downVote, id);
    yield put(loadQuotesAction());
}

function* addQuote(action) {
    yield call(api.postQuote, { text: action.quoteText, upVotes: 0, downVotes: 0 });
    yield put(loadQuotesAction());
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadQuotes(action) {
    try {
        const quotes = yield call(api.getQuotes);
        yield put(loadedQuotes(quotes));
    } catch (e) {
        // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* quotes() {
    yield takeLatest(LOAD_QUOTES, loadQuotes);
    yield takeEvery(ADD_QUOTE, addQuote);
    yield takeEvery(UP_VOTE, upVote);
    yield takeEvery(DOWN_VOTE, downVote);
}

export default quotes;