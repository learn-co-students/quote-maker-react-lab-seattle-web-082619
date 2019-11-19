export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId) ++quote.votes;
        return quote;
      });
    case "DOWNVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) --quote.votes;
        return quote;
      });
    case "REMOVE_QUOTE":
      //Not Working
      // return state.map(quote => {
      //   if (quote.id !== action.quoteId) return quote;
      // });

      //Working
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
};
