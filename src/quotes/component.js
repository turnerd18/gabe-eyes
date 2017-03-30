import React, { Component } from 'react';
import { connect } from 'react-redux';

import headerGraphic from './eyes.jpg';
import './App.css';
import './win98.css';
import QuoteSubmission from "../quoteSubmission/component";
import QuoteItem from "../quoteItem/component";
import { loadQuotes, upVote, downVote } from "./actions"

class App extends Component {
  componentWillMount() {
    this.props.loadQuotes();
  }

  render() {
    return (
      <div className="win98">
        <div className="window">
          <div className="header">eyes.exe</div>
          <p><img src={headerGraphic} alt="I see your soul." width="100%" /></p>
        </div>
        <br />
        <QuoteSubmission />
        <br />
        <div className="window">
          <div className="header">
            Quotes
            </div>
          <div className="content">
            {this.props.quotes.map((quote) =>
              <QuoteItem key={quote.id} {...quote}
                onUpVote={() => this.props.onUpVote(quote.id)}
                onDownVote={() => this.props.onDownVote(quote.id)}
              />
            )}
          </div>

        </div>
        <div>
          <span>{this.props.quotes.length} quotes</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuotes: () => dispatch(loadQuotes()),
    onUpVote: index => dispatch(upVote(index)),
    onDownVote: index => dispatch(downVote(index))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
