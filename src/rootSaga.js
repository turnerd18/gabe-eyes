import { fork } from 'redux-saga/effects';

import quotes from './quotes/saga';

function* saga() {
    yield fork(quotes);
}

export default saga;