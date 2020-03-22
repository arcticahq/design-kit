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
  styles,
  shouldRise,
  ...rest
}) => {
  const buttonClass = classnames({
    [styles.button]: true,
    rise: shouldRise,
    "bg-indigo-600": !disabled && !transparent,
    [styles.primary]: primary,
    "bg-white relative": !transparent,
    [styles.transparent]: transparent,
    [styles.disabled]: disabled,
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
  rise: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  styles: PropTypes.object
}

Button.defaultProps = {
  noink: false,
  className: null,
  type: "button",
  transparent: false,
  disabled: false,
  primary: false,
  rise: true,
  styles: {
    button:
      "focus:outline-none inline-block text-black text-xs py-3 px-4 rounded-full font-semibold uppercase cursor-pointer",
    primary: "text-white",
    disabled: "cursor-not-allowed bg-indigo-200",
    transparent: "bg-transparent"
  }
}

export default Button
