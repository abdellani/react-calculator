import React from "react"
import PropTypes from 'prop-types'; 

export const Display= (props) =><div>
  <input value={props.result} style={{textAlign:"right"}} readOnly/>
</div>

Display.defaultProps={
  result:"0"
}
Display.propTypes={
  result:PropTypes.string.isRequired
}