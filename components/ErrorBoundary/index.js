import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

class ErrorBoundary extends React.Component {
  static handleReload() {
    window.location.reload()
  }

  state = { hasError: false }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return (
        <>
          <h2 className="text-center text-white font-bold mt-5" role="alert">
            Something went wrong
          </h2>
          <p className="text-center mt-5">
            <Button primary onClick={e => ErrorBoundary.handleReload(e)}>
              Reload
            </Button>
          </p>
        </>
      )
    }
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element
  ]).isRequired
}

export default ErrorBoundary
