import React from 'react';
import '../../enzyme.config';
import { shallow } from 'enzyme';
import Link from '../Link';
describe('<Link/> ', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    expect(wrapper.props().href).toBe('www.google.com');
  });
  it('returns null with true hide block', () => {
    const wrapper = shallow(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull();
  });
});
