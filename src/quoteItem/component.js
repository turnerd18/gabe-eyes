import React, { Component, PropTypes } from "react";

class QuoteItem extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        upVotes: PropTypes.number.isRequired,
        downVotes: PropTypes.number.isRequired,
        onUpVote: PropTypes.func.isRequired,
        onDownVote: PropTypes.func.isRequired
    }

    render() {
        const { text, upVotes, downVotes } = this.props;

        return (
            <div className="quoteItem">
                <button onClick={this.props.onUpVote}>
                    &#x1F44D;&#xFE0E;
                    <span>{upVotes}</span>
                </button>

                <button onClick={this.props.onDownVote}>
                    &#x1F44E;&#xFE0E;
                    <span>{downVotes}</span>
                </button>
                &nbsp;<span>{text}</span>

            </div>
        );
    }
}

export default QuoteItem;