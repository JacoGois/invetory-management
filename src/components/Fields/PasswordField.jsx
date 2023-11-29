import classNames from 'classnames'
import { InputPassword } from '../InputPassword'
import { Label } from '../Label'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { FieldMessage } from '../FieldMessage'

export const PasswordField = ({
  label,
  name,
  id,
  errorMessage,
  onChange,
  value,
  isDisabled,
  className,
  noMargins,
  ...rest
}) => {
  const isInvalid = errorMessage !== ''
  const isDisabledClassName = isDisabled ? 'text-gray-100 opacity-30' : ''

  return (
    <div className={classNames({ 'mb-3': !noMargins }, className)}>
      <Label text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <InputPassword
        name={name}
        id={id ?? name}
        onChange={onChange}
        isInvalid={isInvalid}
        value={value}
        isDisabled={isDisabled}
        className={twMerge(isDisabledClassName)}
        {...rest}
      />
      {isInvalid && <FieldMessage message={errorMessage} />}
    </div>
  )
}

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  noMargins: PropTypes.bool,
  background: PropTypes.bool,
}

PasswordField.defaultProps = {
  className: '',
  isDisabled: false,
  errorMessage: '',
  noMargins: false,
  background: false,
}
