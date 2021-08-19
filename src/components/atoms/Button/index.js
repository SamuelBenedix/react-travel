import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  return (
    <button to={props.href} style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onclick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
  href: propTypes.string,
  style: propTypes.string,
  isPrimary: propTypes.bool,
};

export default Button;
