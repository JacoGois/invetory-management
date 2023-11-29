import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const Toggle = ({ isToggled, onChange }) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => setIsChecked(isToggled), [isToggled])

  const handleToggle = () => {
    setIsChecked(!isChecked)
    onChange(!isChecked)
  }

  const buttonClasses = classNames('flex transition-colors duration-300 items-center justify-start w-12 h-4 rounded-full px-1', {
    'bg-primary': isChecked,
    'bg-gray-200': !isChecked,
  })

  const innerCircleClasses = classNames('w-3 h-3 bg-white rounded-full transition-all duration-300 ease-in-out transform', {
    'translate-x-4': isChecked,
    'translate-x-0': !isChecked,
  })

  return (
    <button type='button' className={buttonClasses} onClick={handleToggle}>
      <span className={innerCircleClasses} />
    </button>
  )
}

Toggle.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

Toggle.defaultProps = {
  isToggled: false,
  onChange: () => {},
}
