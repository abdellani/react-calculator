import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  let { result } = props;
  if (result === undefined) {
    result = '0';
  }
  return (
    <div>
      <input value={result} style={{ textAlign: 'right' }} readOnly />
    </div>
  );
};
// Display.defaultProps = {
//   result: '0',
// };
Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
