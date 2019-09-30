import React from "react";
import { Button } from "./Button";

let group1 = ["AC", "+/-", "%", "+"]
let group2 = ["7", "8", "9", "X"]
let group3 = ["4", "5", "6", "-"]
let group4 = ["1", "2", "3", "+"]
let group5 = ["0", ".", "="]

let renderGroup = (group) => <div>{group.map((name) => <Button name={name} />)}</div>

export const ButtonPanel = () =>
  <div>
    {renderGroup(group1)}
    {renderGroup(group2)}
    {renderGroup(group3)}
    {renderGroup(group4)}
    {renderGroup(group5)}
  </div>