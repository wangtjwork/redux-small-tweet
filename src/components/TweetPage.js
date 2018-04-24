import React, { Component } from 'react';
import { connect } from 'react-redux';

class TweetPage extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        TweetPage
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, tweets, users }, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
  }
}

export default connect(mapStateToProps)(TweetPage);
