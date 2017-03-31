import React, { Component } from 'react';
import { connect } from 'react-redux';

import headerGraphic from './eyes.jpg';
import './quotes.css';
import './win98.css';
import QuoteSubmission from "../quoteSubmission/component";
import QuoteItem from "../quoteItem/component";
import { loadQuotes, upVote, downVote, closeEyes, doneClosingEyes } from "./actions"

class App extends Component {
  componentWillMount() {
    this.props.loadQuotes();
  }

  render() {
    return (
      <div className="win98">
        <div className="window">
          <div className="header">
            eyes.exe
            <div className="buttons">
              {!this.props.angryEyes && <button onClick={() => this.props.closeEyes()}>X</button>}
            </div>
          </div>
          <div id="eyesContainer" className={`eyes-container ${this.props.angryEyes}`}>
            <img id="eyesImage" src={headerGraphic} alt="I see your soul." />
          </div>
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
    quotes: state.quotes.quotes,
    angryEyes: state.quotes.angryEyes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeEyes: () => {
      dispatch(closeEyes());
      setTimeout(() => dispatch(doneClosingEyes()), 6000);
    },
    loadQuotes: () => dispatch(loadQuotes()),
    onUpVote: index => dispatch(upVote(index)),
    onDownVote: index => dispatch(downVote(index))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
