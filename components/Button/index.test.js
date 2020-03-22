import React from "react"
import { shallow } from "enzyme"
import Button from "."

describe(`Button`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Button {...props}>Submit</Button>)
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {
      type: `submit`
    }
    mountedComponent = undefined
  })

  it(`renders a submit Button correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })
})
