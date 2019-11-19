import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upvoteQuote, downvoteQuote, removeQuote } from "../actions/quotes";

class Quotes extends Component {
  renderQuoteCards = () => {
    return this.props.quotes.map(quote => {
      return (
        <QuoteCard
          key={quote.id}
          quote={quote}
          upvoteQuote={this.props.upvoteQuote}
          downvoteQuote={this.props.downvoteQuote}
          removeQuote={this.props.removeQuote}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{this.renderQuoteCards()}</div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state => ({ quotes: state.quotes }), {
  upvoteQuote,
  downvoteQuote,
  removeQuote
})(Quotes);
