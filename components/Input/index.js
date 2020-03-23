import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { withFormsy, propTypes } from "formsy-react"

class Input extends React.Component {
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
      required
    } = this.props
    const { blurred } = this.state

    const errorMessage =
      (blurred && !isValid()) || (!isValid() && isFormSubmitted())

    const inputClass = classnames(
      "appearance-none mt-2 mb-6 block w-full bg-gray-100 text-gray-900 border rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500",
      { "border-red-600": errorMessage }
    )
    const labelClass = classnames(
      "block uppercase tracking-wide text-black text-xs font-bold",
      { "text-red-600": errorMessage }
    )
    const errorClass = "text-red-600 text-xs italic absolute -mt-6"

    return (
      <>
        <label className={labelClass} htmlFor={name}>
          {title}
          {!required && <span className="text-gray-600"> (optional)</span>}
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

Input.propTypes = {
  ...propTypes,
  type: PropTypes.string
}

Input.defaultProps = { type: `text` }

export default Input
export const FormsyInput = withFormsy(Input)
