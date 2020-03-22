import React from "react"
import { mount } from "enzyme"
import Input from "."

describe(`Input`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Input {...props} />)
    }
    return mountedComponent
  }

  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation(init => [init, setState])

  beforeEach(() => {
    props = {
      name: `name`,
      title: `Your name`,
      type: `text`,
      required: true,
      showRequired: () => true,
      isPristine: () => true,
      isValid: jest.fn(),
      isFormSubmitted: jest.fn(),
      getValue: jest.fn(),
      setValue: jest.fn(),
      showError: jest.fn(),
      getErrorMessage: jest.fn()
    }
    mountedComponent = undefined
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it(`renders an Input correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })

  it("Checks for errors when the input is blurred", () => {
    wrapper()
      .find("input")
      .simulate("focus")
      .simulate("blur")
    expect(props.getErrorMessage).toBeCalled()
    // expect(setState).toHaveBeenCalledWith(true);
  })

  // shows an error when invalid

  // clears errror when valid

  it("Calls setValue() when the input is changed", () => {
    wrapper()
      .find("input")
      .simulate("change", { target: { value: "My name" } })
    expect(props.setValue).toBeCalled()
  })

  // does not contain required label or text when not required
})
