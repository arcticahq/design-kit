import React from "react"
import PropTypes from "prop-types"
import Ink from "react-ink"
import classnames from "classnames"

const Button = ({
  noink,
  type,
  children,
  className,
  primary,
  transparent,
  disabled,
  ...rest
}) => {
  const buttonClass = classnames({
    "focus:outline-none inline-block text-black text-xs py-3 px-4 rounded-full font-semibold uppercase cursor-pointer": true,
    "bg-indigo-600 rise": !disabled && !transparent,
    "text-white": primary,
    "bg-white relative": !transparent,
    "bg-transparent": transparent,
    "cursor-not-allowed bg-indigo-200": disabled,
    [className]: className && true
  })

  const formNoValidate = type === "submit" && true

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      formNoValidate={formNoValidate}
      className={buttonClass}
      {...rest}
    >
      {!noink && <Ink />}
      {children}
    </button>
  )
}

Button.propTypes = {
  noink: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Button.defaultProps = {
  noink: false,
  className: null,
  type: "button",
  transparent: false,
  disabled: false,
  primary: false
}

export default Button
