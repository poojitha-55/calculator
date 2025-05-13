import React, { Component } from 'react';

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="keypad">
        {[
          "(", "del", ")", "C",
          "1", "2", "3", "+",
          "4", "5", "6", "-",
          "7", "8", "9", "*",
          ".", "0", "=", "/"
        ].map((btn) => (
          <button key={btn} name={btn} onClick={e => this.props.onClick(e.target.name)}>
            {btn === '*' ? '×' : btn === '/' ? '÷' : btn}
          </button>
        ))}
      </div>
    );
  }
}

export default KeyPadComponent;
