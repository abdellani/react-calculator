import React from 'react';
import Button from './Button';

const group1 = ['AC', '+/-', '%', '÷'];
const group2 = ['7', '8', '9', 'X'];
const group3 = ['4', '5', '6', '-'];
const group4 = ['1', '2', '3', '+'];
const group5 = ['0', '.', '='];


const renderGroup = (group,handleClick) => (
  <div>
    {
      group.map((name, index) => (
        <Button
          key={name}
          name={name}
          color={(index === group.length - 1) ? undefined : true}
          width={(name === '0')}
          clickHandler={handleClick}
        />
      ))
    }
  </div>
);

const ButtonPanel = (props) => {
  let handleClick=(buttonName)=> props.clickHandler(buttonName)
  return (
    <div className="button-panel">
      {renderGroup(group1,handleClick)}
      {renderGroup(group2,handleClick)}
      {renderGroup(group3,handleClick)}
      {renderGroup(group4,handleClick)}
      {renderGroup(group5,handleClick)}
    </div>
  );
}
export default ButtonPanel;
