import React from 'react';
import Button from './Button';

const group1 = ['AC', '+/-', '%', '+'];
const group2 = ['7', '8', '9', 'X'];
const group3 = ['4', '5', '6', '-'];
const group4 = ['1', '2', '3', '+'];
const group5 = ['0', '.', '='];

const renderGroup = group => <div>{group.map((name) => <Button name={name} />)}</div>;

const ButtonPanel = () => (
  <div className="button-panel">
    {renderGroup(group1)}
    {renderGroup(group2)}
    {renderGroup(group3)}
    {renderGroup(group4)}
    {renderGroup(group5)}
  </div>
);
export default ButtonPanel;
