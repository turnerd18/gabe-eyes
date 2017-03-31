const apiRoot = process.env.NODE_ENV === 'development'
  ? 'http://localhost:54850/api'
  : '/api';

export const getQuotes = () => {
  return fetch(`${apiRoot}/quote`)
    .then(response => response.json());
};

export const postQuote = quote => {
  return fetch(`${apiRoot}/quote`,
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
  return fetch(`${apiRoot}/quote/upvote/${id}`)
    .then(response => response.json());
};

export const downVote = id => {
  return fetch(`${apiRoot}/quote/downvote/${id}`)
    .then(response => response.json());
};
