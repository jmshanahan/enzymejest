import React from 'react';
import '../../enzyme.config';
import Incrementer from '../Incrementer';
import { shallow, mount } from 'enzyme';

describe('Increment component', () => {
  it('should render app', () => {
    const wrapper = shallow(<Incrementer />, {
      context: {},
      disableLifecycleMethods: true
    });
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  });
});
