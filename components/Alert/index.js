import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Alert = ({
  children,
  type,
  badge,
  className,
  alertClassDefault,
  alertClassError,
  alertClassSuccess,
  alertClassInfo,
  badgeClassDefault,
  badgeClassError,
  badgeClassSuccess
}) => {
  const alertClass = classnames({
    [alertClassDefault]: true,
    [alertClassError]: type === "error",
    [alertClassSuccess]: type === "success",
    [alertClassInfo]: type === "info",
    [className]: className && true
  })

  const badgeClass = classnames({
    [badgeClassDefault]: true,
    [badgeClassError]: type === "error",
    [badgeClassSuccess]: type === "success"
  })

  return (
    <div className={alertClass} role="alert">
      {type !== "info" && badge && <span className={badgeClass}>{type}</span>}
      <span className="font-semibold mr-2 text-sm text-left flex-auto">
        {children}
      </span>
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  badge: PropTypes.bool,
  className: PropTypes.string,
  alertClassDefault: PropTypes.string,
  alertClassError: PropTypes.string,
  alertClassSuccess: PropTypes.string,
  alertClassInfo: PropTypes.string,
  badgeClassDefault: PropTypes.string,
  badgeClassError: PropTypes.string,
  badgeClassSuccess: PropTypes.string
}

Alert.defaultProps = {
  className: null,
  badge: true,
  alertClassDefault:
    "text-center p-3 items-center text-black leading-none rounded-full flex",
  alertClassError: "bg-red-200",
  alertClassSuccess: "bg-green-200",
  alertClassInfo: "bg-indigo-100",
  badgeClassDefault:
    "flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3 text-white",
  badgeClassError: "bg-red-600",
  badgeClassSuccess: "bg-green-600"
}

export default Alert
