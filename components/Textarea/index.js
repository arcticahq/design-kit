import React from "react"
import { withFormsy, propTypes } from "formsy-react"
import AGTextarea from "react-textarea-autosize"
import classnames from "classnames"

class Textarea extends React.Component {
  state = {
    blurred: false
  }

  render() {
    const {
      getValue,
      setValue,
      placeholder,
      rows,
      required,
      isValid,
      isFormSubmitted,
      getErrorMessage,
      name,
      title,
      style,
      maxLength
    } = this.props
    const { blurred } = this.state

    const errorMessage =
      (blurred && !isValid()) || (!isValid() && isFormSubmitted())

    const inputClass = classnames(
      "appearance-none h-20 mt-2 block w-full bg-gray-100 text-gray-800 border rounded-lg py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500",
      { "border-red-600": errorMessage }
    )
    const labelClass = classnames(
      "block uppercase tracking-wide text-black text-xs font-bold",
      { "text-red-600": errorMessage }
    )
    const errorClass = "text-red-600 text-xs italic absolute -mt-2"

    return (
      <>
        <label className={labelClass} htmlFor={name}>
          {title}
          {!required && <span className="text-gray-600"> (optional)</span>}
          <AGTextarea
            aria-required={required}
            aria-invalid={!!errorMessage}
            className={inputClass}
            style={style}
            onFocus={() => this.setState({ blurred: false })}
            onBlur={() => this.setState({ blurred: true })}
            onChange={e => setValue(e.target.value)}
            name={name}
            id={name}
            required={required}
            value={getValue() || ``}
            placeholder={placeholder}
            minRows={rows}
            maxLength={maxLength}
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

Textarea.propTypes = {
  ...propTypes
}

export default Textarea
export const FormsyTextarea = withFormsy(Textarea)
