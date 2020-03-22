import React from "react"
import { withFormsy, propTypes } from "formsy-react"

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { blurred: false }
  }

  handleBlur = () => this.setState({ blurred: true })

  handleFocus = () => this.setState({ blurred: false })

  render() {
    const {
      name,
      title,
      required,
      showError,
      getErrorMessage,
      setValue,
      getValue
    } = this.props
    const { blurred } = this.state

    const className = `form-group ${showError() ? `error` : ``}`
    const errorMessage = blurred ? getErrorMessage() : ``

    return (
      <div className={className}>
        <label htmlFor={name}>
          {title} {!required && <span className="optional">(optional)</span>}
          <input
            type="checkbox"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={e => setValue(e.currentTarget.checked)}
            checked={getValue() === true}
            name={name}
            id={name}
          />
        </label>
        <span className="validation-error">{errorMessage}</span>
      </div>
    )
  }
}

Checkbox.propTypes = {
  ...propTypes
}

Checkbox.defaultProps = {
  type: `checkbox`
}

export default Checkbox
export const FormsyCheckbox = withFormsy(Checkbox)
