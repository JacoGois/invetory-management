import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tooltip } from '@chakra-ui/react'
import { RoundedSpinnerIcon } from '../RoundedSpinnerIcon'

export const ButtonAction = ({ className, isDisabled, isLoading, onClick, icon, labelTooltip, bg, text, ...rest }) => {
  const buttonClasses = classNames(`p-2 z-20 ${bg} ${text} rounded-lg`, className, {
    'transition ease-in-out duration-300 delay-50 hover:bg-gray-200': !isDisabled,
    'opacity-40 cursor-not-allowed': isDisabled,
    'flex gap-2 items-center min-w-min': isLoading,
  })
  return (
    <Tooltip hasArrow label={labelTooltip}>
      <button type='button' className={buttonClasses} onClick={onClick} disabled={isDisabled} {...rest}>
        {isLoading && <RoundedSpinnerIcon stroke='#000' />}
        {!isLoading && icon}
      </button>
    </Tooltip>
  )
}

ButtonAction.propTypes = {
  className: PropTypes.string,
  labelTooltip: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

ButtonAction.defaultProps = {
  type: 'button',
  labelTooltip: '',
  isLoading: false,
  bg: '',
  text: '',
  isDisabled: false,
  onClick: () => {},
}
