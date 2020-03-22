import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { withFormsy, propTypes } from "formsy-react"

class BaseInput extends React.Component {
  state = { blurred: false }

  render() {
    const {
      isValid,
      isFormSubmitted,
      getErrorMessage,
      getValue,
      setValue,
      name,
      title,
      type,
      required,
      styles
    } = this.props
    const { blurred } = this.state

    const errorMessage =
      (blurred && !isValid()) || (!isValid() && isFormSubmitted())

    const inputClass = classnames(styles.input, {
      [styles.input]: errorMessage
    })
    const labelClass = classnames(styles.labelClass, {
      [styles.labelError]: errorMessage
    })
    const { errorClass } = styles

    return (
      <>
        <label className={labelClass} htmlFor={name}>
          {title}
          {!required && <span className={styles.optional}> (optional)</span>}
          <input
            aria-required={required}
            aria-invalid={!!errorMessage}
            onFocus={() => this.setState({ blurred: false })}
            onBlur={() => this.setState({ blurred: true })}
            onChange={e => setValue(e.target.value)}
            value={getValue() || ``}
            name={name}
            className={inputClass}
            required={required}
            id={name}
            type={type}
          />
        </label>
        {errorMessage && (
          <p role="alert" className={errorClass}>
            {getErrorMessage()}
          </p>
        )}
      </>
    )
  }
}

BaseInput.propTypes = {
  ...propTypes,
  type: PropTypes.string,
  styles: PropTypes.object
}

BaseInput.defaultProps = {
  type: `text`,
  styles: {
    input:
      "appearance-none mt-2 mb-6 block w-full bg-gray-100 text-gray-darker border py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-400",
    inputError: "border-red-600",
    label: "block uppercase tracking-wide text-black text-xs font-bold",
    labelError: "text-red-600",
    error: "text-red-600 text-xs italic absolute -mt-6",
    optional: "text-gray-600"
  }
}

export default BaseInput
export const FormsyInput = withFormsy(BaseInput)
