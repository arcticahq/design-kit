import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Ink from "react-ink"
import classnames from "classnames"

const ButtonTo = ({ href, to, children, className, isInline, primary }) => {
  const buttonClass = classnames({
    "relative text-black text-xs bg-white py-3 px-4 rounded-full font-semibold uppercase rise hover:text-black": true,
    "inline-block": !isInline,
    inline: isInline,
    "bg-indigo-600 text-white hover:text-white": primary,
    [className]: className && true
  })

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="external noreferrer noopener"
        className={buttonClass}
      >
        <Ink />
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={buttonClass}>
      <Ink />
      {children}
    </Link>
  )
}

ButtonTo.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  isInline: PropTypes.bool,
  primary: PropTypes.bool
}

ButtonTo.defaultProps = {
  href: null,
  to: null,
  isInline: false,
  primary: false,
  className: null
}

export default ButtonTo
