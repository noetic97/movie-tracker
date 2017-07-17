import React from 'react';
import { shallow, mount  } from 'enzyme';
import Register from './Register';

describe('Register.js', () => {

  const component = shallow(<Register  />)

  it('should render the proper component', () => {
    expect(component.find('.register-component').length).toEqual(1)
  })

  it('Should run a function on form submission', () => {
    const mockFn = jest.fn();
    const component = shallow(<Register regCreds={mockFn}/>);
    const submitBtn = component.find('form');

    expect(mockFn).toHaveBeenCalledTimes(0)

    submitBtn.simulate('submit', {
      preventDefault: () =>{}
    });
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it.skip('should update state of input on change', () => {
    const input1 = component.find('.input-name');
    const input2 = component.find('.input-email');
    const input3 = component.find('.input-password').first();
    const input4 = component.find('.input-password').last();

    expect(component.state().name).toBe('')
    expect(component.state().email).toBe('')
    expect(component.state().password).toBe('')
    expect(component.state().passwordVerify).toBe('')

    input1.simulate('change', {target: {value: 'Tyler Durden'}});
    input2.simulate('change', {target: {value: 'DontDropTheSoap@aol.com'}});
    input3.simulate('change', {target: {value: 'BassmentRulez'}});
    input4.simulate('change', {target: {value: 'BassmentRulez'}});

    expect(component.state().name).toBe('Tyler Durden')
    expect(component.state().email).toBe('DontDropTheSoap@aol.com')
    expect(component.state().password).toBe('BassmentRulez')
    expect(component.state().passwordVerify).toBe('BassmentRulez')
  })
})
