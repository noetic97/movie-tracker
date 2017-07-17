import React from 'react';
import { shallow, mount  } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('Should render the proper component', () => {
    const component = shallow(<Login />);

    expect(component.find('.login-component').length).toEqual(1);
    expect(component.find('input').length).toEqual(2);
  })

  it('Should run a function on form submission', () => {
    const mockFn = jest.fn();
    const component = shallow(<Login submitCreds={mockFn}/>);
    const submitBtn = component.find('form');

    expect(mockFn).toHaveBeenCalledTimes(0);

    submitBtn.simulate('submit', {
      preventDefault: () =>{}
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
