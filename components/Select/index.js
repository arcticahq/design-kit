import React from "react"
import { withFormsy, propTypes } from "formsy-react"

import styles from "./index.module.css"

class Select extends React.Component {
  state = {
    blurred: false
  }

  render() {
    const {
      name,
      title,
      showError,
      getErrorMessage,
      showRequired,
      isPristine,
      getValue,
      setValue,
      options,
      required
    } = this.props
    const { blurred } = this.state

    const className = `form-group ${showError() ? "error" : ""}`
    const requiredClass = showRequired() && !isPristine() ? `required` : ``
    const errorMessage = blurred ? getErrorMessage() : ``

    const selectOptions = options.map(option => (
      <option key={option.title + option.value} value={option.value}>
        {option.title}
      </option>
    ))

    return (
      <div className={className}>
        <label className={requiredClass} htmlFor={name}>
          {title} {required && <span className="required">*</span>}
          <select
            className={styles.select}
            name={name}
            id={name}
            onChange={e => setValue(e.currentTarget.value)}
            value={getValue()}
          >
            {selectOptions}
          </select>
        </label>
        <span className="validation-error">{errorMessage}</span>
      </div>
    )
  }
}

Select.propTypes = {
  ...propTypes
}

export default Select
export const FormsySelect = withFormsy(Select)
