import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header.js', () => {
  it.only('Should render the proper component', () => {
    const component = shallow(<Header />)

    console.log(component.debug());
  })
})
