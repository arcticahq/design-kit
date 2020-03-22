import React from "react"
import { shallow } from "enzyme"
import Select from "."

describe(`Select`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(<Select {...props} />)
    }
    return mountedComponent
  }

  beforeEach(() => {
    props = {
      name: `type`,
      title: `Select`,
      options: [
        { title: `Freelance`, value: `freelance` },
        { title: `Contact Opportunity`, value: `contract` },
        { title: `Other`, value: `other` }
      ],
      required: true,
      showRequired: () => true,
      isPristine: () => true,
      showError: () => jest.fn(),
      getErrorMessage: () => jest.fn(),
      setValue: () => jest.fn(),
      getValue: () => jest.fn()
    }
    mountedComponent = undefined
  })

  it(`renders an Select correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })
})
