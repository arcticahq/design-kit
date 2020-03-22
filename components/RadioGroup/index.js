import React from "react"
import { withFormsy, propTypes } from "formsy-react"

class RadioGroup extends React.Component {
  state = { blurred: false }

  changeValue = value => {
    const { setValue } = this.props
    setValue(value)
    this.setState({ value })
  }

  handleBlur = () => this.setState({ blurred: true })

  handleFocus = () => this.setState({ blurred: false })

  render() {
    const { items, showError, getErrorMessage, name } = this.props
    const { blurred, value } = this.state

    const className = `form-group ${showError() ? `error` : ``}`
    const errorMessage = blurred ? getErrorMessage() : ``

    return (
      <div className={className}>
        {items.map(item => (
          <div key={item.toString()}>
            <label htmlFor={item.toString()}>
              <input
                type="radio"
                name={name}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={() => this.changeValue(item)}
                checked={value === item}
                value={item.toString()}
                id={item.toString()}
              />
              {item.toString()}
            </label>
          </div>
        ))}
        <span className="validation-error">{errorMessage}</span>
      </div>
    )
  }
}

RadioGroup.propTypes = {
  ...propTypes
}

RadioGroup.defaultProps = {
  type: `text`
}

export default RadioGroup
export const FormsyRadioGroup = withFormsy(RadioGroup)
