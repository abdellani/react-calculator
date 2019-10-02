import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name, color, width, clickHandler,
  } = props;

  return (
    <button
      type="button"
      className={[
        color,
        (width) ? 'double-size' : undefined,
      ].join(' ')}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
