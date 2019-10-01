import React from 'react';
import '../scss/application.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
