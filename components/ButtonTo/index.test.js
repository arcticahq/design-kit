import React from "react"
import { shallow } from "enzyme"
import ButtonTo from "."

describe(`ButtonTo`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<ButtonTo {...props}>Contact</ButtonTo>)
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {
      to: `/contact/`
    }
    mountedComponent = undefined
  })

  it(`renders a ButtonTo correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })
})
