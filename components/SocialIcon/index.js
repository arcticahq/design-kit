import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

const SocialIcon = ({ icon, url, network, size, title, className }) => (
  <a
    style={{ color: `#fff` }}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    aria-label={`${title} on ${network}`}
    key={icon}
  >
    <Icon icon={icon} size={size} />
  </a>
)

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  network: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string.isRequired
}

SocialIcon.defaultProps = {
  size: 16,
  className: undefined
}

export default SocialIcon
