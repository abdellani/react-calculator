import React from 'react';
import '../scss/application.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const newState = calculate({ ...this.state }, buttonName);
    this.setState(newState);
  }

  render() {
    let result;
    const { next, total } = this.state;
    if (next !== null) {
      result = next;
    } else if (total !== null) {
      result = total;
    }
    return (
      <div className="calculator">
        <Display
          result={result}
        />
        <ButtonPanel clickHandler={(buttonName) => this.handleClick(buttonName)} />
      </div>
    );
  }
}
