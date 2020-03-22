import React from "react"
import { mount } from "enzyme"
import Textarea from "."

describe(`Textarea`, () => {
  let props
  let mountedComponent
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Textarea {...props} />)
    }
    return mountedComponent
  }

  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation(init => [init, setState])

  beforeEach(() => {
    props = {
      name: `message`,
      title: `Your message`,
      rows: 6,
      required: true,
      showRequired: () => true,
      isPristine: () => true,
      showError: jest.fn(),
      getErrorMessage: jest.fn(),
      setValue: jest.fn(),
      getValue: jest.fn(),
      isValid: jest.fn(),
      isFormSubmitted: jest.fn()
    }
    mountedComponent = undefined
  })

  it(`renders an Textarea correctly`, () => {
    expect(wrapper()).toMatchSnapshot()
  })

  it("Checks for errors when the input is blurred", () => {
    wrapper()
      .find("textarea")
      .simulate("focus")
      .simulate("blur")
    // expect(setState).toHaveBeenCalledWith(true)
    expect(props.getErrorMessage).toBeCalled()
  })

  // shows an error when invalid

  // clears errror when valid

  it("Calls setValue() when the input is changed", () => {
    wrapper()
      .find("textarea")
      .simulate("change", { target: { value: "Some message" } })
    expect(props.setValue).toBeCalled()
  })

  // does not contain required label or text when not required
})
