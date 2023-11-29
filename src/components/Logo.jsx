import React from 'react'
import PropTypes from 'prop-types'

export const Logo = ({ src, alt, className, ...rest }) => {
  return <img src={src} alt={alt} className={className} {...rest} />
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

Logo.defaultProps = {
  src: '/images/logo.png',
  alt: 'Company Logo',
}
