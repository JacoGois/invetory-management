import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { InputText } from './InputText'

export const InputPassword = ({ name, className, value, onChange, isInvalid, ...rest }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='flex relative'>
      <InputText
        type={visible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        isInvalid={isInvalid}
        {...rest}
      />
      <button
        type='button'
        onClick={() => setVisible(!visible)}
        className={classNames('absolute cursor-pointer right-[8px] top-[8.5px]')}
      >
        {visible ? (
          <AiOutlineEye size={25} className={isInvalid && 'text-negative'} />
        ) : (
          <AiOutlineEyeInvisible size={25} className={isInvalid && 'text-negative'} />
        )}
      </button>
    </div>
  )
}

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
}
