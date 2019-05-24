import React from 'react';
import { spy } from 'sinon';
import '../../enzyme.config';
import { shallow, mount } from 'enzyme';
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
  it('calls componentDidMount', () => {
    // jest.spyOn(Link.prototype, 'componentDidMount');
    //Using sinon
    const componentDidMountSpy = spy(Link.prototype, 'componentDidMount');

    mount(<Link />);
    expect(Link.prototype.componentDidMount.calledOnce).toBeTruthy();
    componentDidMountSpy.restore();
  });
});
