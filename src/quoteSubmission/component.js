import React, { Component } from "react";
import { connect } from 'react-redux';

import { changeQuote } from './actions';
import { addQuote } from '../quotes/actions';

class QuoteSubmission extends Component {
    submitQuote() {
        this.props.onSubmit(this.state.quote);
        this.setState({ quote: '' });
    }
    render() {
        return (
            <div className="window">
                <div className="header">
                    Enter a Quote
                </div>
                <div className="content">
                    Out of the mouth of Gabe
                        <p>
                            <input type="text"
                                style={{width:"100%"}}
                                value={this.props.text}
                                onChange={event => this.props.onChangeText(event.target.value)} 
                                placeholder="Insert prophetic wisdom here." />
                        </p>

                        <div className="buttons" style={{"text-align":"right"}}>
                            <button onClick={() => this.props.onSubmitQuote(this.props.text)}>Submit</button>
                            &nbsp;
                            <button onClick={() => this.props.onCancelQuote()}>Cancel</button>
                        </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        text: state.newQuote
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCancelQuote: () => dispatch(changeQuote("")),
        onChangeText: quoteText => dispatch(changeQuote(quoteText)),
        onSubmitQuote: quoteText => {
            if (!quoteText) return;

            dispatch(addQuote(quoteText));
            dispatch(changeQuote(''));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteSubmission);