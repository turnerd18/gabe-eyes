export const LOAD_QUOTES = 'LOAD_QUOTES';
export const LOADED_QUOTES = 'LOADED_QUOTES';
export const ADD_QUOTE = 'ADD_QUOTE';
export const UP_VOTE = 'UP_VOTE';
export const DOWN_VOTE = 'DOWN_VOTE';
export const CLOSE_EYES = "CLOSE_EYES";
export const DONE_CLOSING_EYES = 'DONE_CLOSING_EYES';

export const loadQuotes = () => {
    return {
        type: LOAD_QUOTES
    };
};

export const loadedQuotes = quotes => {
    return {
        type: LOADED_QUOTES,
        quotes
    };
};

export const addQuote = quoteText => {
    return {
        type: ADD_QUOTE,
        quoteText
    };
};

export const upVote = id => {
    return {
        type: UP_VOTE,
        id
    };
};

export const downVote = id => {
    return {
        type: DOWN_VOTE,
        id
    };
};

export const closeEyes = () => {
    return {
        type:CLOSE_EYES
    };
};

export const doneClosingEyes = () => {
    return {
        type: DONE_CLOSING_EYES
    };
};