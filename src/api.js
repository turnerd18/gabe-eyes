export const getQuotes = () => {
  return fetch('http://localhost:53064/api/quote')
    .then(response => response.json());
};

export const postQuote = (quote) => {
  return fetch('http://localhost:53064/api/quote',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(quote)
    })
    .then(response => response.json());
};

export const upVote = id => {
  return fetch(`http://localhost:53064/api/quote/upvote/${id}`)
    .then(response => response.json());
};

export const downVote = id => {
  return fetch(`http://localhost:53064/api/quote/downvote/${id}`)
    .then(response => response.json());
};
