import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  let { result } = props;
  if (result === undefined) {
    result = '0';
  }
  return (
      <input id="display" value={result} style={{ textAlign: 'right' }} readOnly />
  );
};
Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
