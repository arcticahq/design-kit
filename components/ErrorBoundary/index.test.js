import React from "react"
import { shallow } from "enzyme"
import ErrorBoundary from "."

describe(`ErrorBoundary`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <ErrorBoundary {...props}>{props.children}</ErrorBoundary>
      )
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {
      children: <div>Hello</div>
    }
    mountedComponent = undefined
  })

  it(`renders a ErrorBoundary correctly`, () => {
    wrapper().setState({ hasError: true })
    expect(wrapper()).toMatchSnapshot()
  })
})
