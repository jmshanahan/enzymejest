import React from 'react';
import '../../enzyme.config';
import Play from '../Play';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App shallow rendering', () => {
  it('should render app', () => {
    const wrapper = shallow(<Play />, {
      context: {},
      disableLifecycleMethods: true
    });
    expect(
      wrapper
        .find('h1')
        .first()
        .text()
    ).toBe('Playtime');
    // console.log(wrapper.debug());
  });
});
