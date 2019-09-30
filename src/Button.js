import React from "react";
import PropTypes from "prop-types"
export const Button=(props)=>
<button>
  {props.name}
</button>

Button.propTypes={
  name:PropTypes.string.isRequired
}
