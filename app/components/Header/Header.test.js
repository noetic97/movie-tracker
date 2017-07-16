import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header.js', () => {
  it.only('Should render the proper component', () => {
    const props = {
      "loggedIn": true,
      "userData": {
        "data": {
          "email": "tman2272@aol.com",
          "password": "password",
          "name": "Taylor"
    }
  }
}

    const component = shallow(<Header userData={props.userData}/>)

    expect(component.find('header').length).toBe(1);
  })
})
