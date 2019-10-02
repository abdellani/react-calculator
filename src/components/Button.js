import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, width } = props;
  return (
    <button
      type="button"
      className={[
        (color) ? 'white' : undefined,
        (width) ? 'double-size' : undefined,
      ].join(' ')}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  width: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  color: false,
};

export default Button;
