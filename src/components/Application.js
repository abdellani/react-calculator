import React from 'react';
import '../scss/application.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }
  handleClick(buttonName){
    console.log(calculate({...this.state},buttonName))    
    this.setState(calculate({...this.state},buttonName))

  }

  render() {
    return (
      <div className="calculator">
        <Display 
        result={
          (this.state.next!==null)?this.state.next:
          (this.state.total!==null)?this.state.total:
          undefined
          } 
        />
        <ButtonPanel clickHandler={(buttonName)=>this.handleClick(buttonName)}/>
      </div>
    );
  }
}
