import React from "react"
import PropTypes from "prop-types"
import Formsy from "formsy-react"

const Form = React.forwardRef(({ children, ...rest }, ref) => (
  <Formsy {...rest} ref={ref}>
    {children}
  </Formsy>
))

Form.propTypes = {
  children: PropTypes.array.isRequired
}

export default Form
