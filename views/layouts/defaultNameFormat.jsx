import React from 'react';

class DefaultNameFormat extends React.Component {
  render() {
    return (
      <span>
        {`${this.props.fn} ${this.props.ln}`}
      </span>
    )
  }
}

module.exports = DefaultNameFormat;
