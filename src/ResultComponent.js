import React, { Component } from 'react';

class ResultComponent extends Component {
  render() {
    const { result } = this.props; 
    return (
      <div className="result">
        {result}
      </div>
    );
  }
}

export default ResultComponent;
