import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
      <input className="display" value={result} style={{ textAlign: 'right' }} readOnly />
  );
};
Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
