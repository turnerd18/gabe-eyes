export const CHANGE_QUOTE = 'CHANGE_QUOTE';

export const changeQuote = quoteText => {
    return {
        type: CHANGE_QUOTE,
        quoteText
    };
};
