import React from 'react';
import '../../enzyme.config';
import Home from '../Home';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App shallow rendering', () => {
  it('should render app', () => {
    const wrapper = shallow(<Home />, {
      context: {},
      disableLifecycleMethods: true
    });
    expect(
      wrapper
        .find('h1')
        .first()
        .text()
    ).toBe('Welcome to React');
    // console.log(wrapper.debug());
  });
  it('matches the snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('on button click changes p text', () => {
    const wrapper = shallow(<Home />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });
  it('on input change, title changes text', () => {
    const wrapper = shallow(<Home />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toBe('');
    input.simulate('change', { currentTarget: { value: 'Tyler' } });
    expect(wrapper.find('h2').text()).toBe('Tyler');
  });
  it('updates className on new state', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.blue').length).toBe(1);
    wrapper.setState({ mainColor: 'red' });
    expect(wrapper.find('.blue').length).toBe(0);
    expect(wrapper.find('.red').length).toBe(1);
  });
  it('calls componentDidMount', () => {
    jest.spyOn(Home.prototype, 'componentDidMount');
    const wrapper = shallow(<Home />);
    expect(Home.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toMatch(/componentDidMount/);
  });
  it('setProps calls componentWillReceiveProps', () => {
    jest.spyOn(Home.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<Home />);
    wrapper.setProps({ hide: true });
    expect(Home.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
    expect(Home.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
  });
  it('handleStrings function returns correctly', () => {
    const wrapper = shallow(<Home />);
    const trueReturn = wrapper.instance().handleStrings('Hello World');
    const falseReturn = wrapper.instance().handleStrings('');
    expect(trueReturn).toBeTruthy();
    expect(falseReturn).toBeFalsy();
  });
});
describe('App mount rendering ', () => {
  it('should render app', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
    wrapper.unmount();
  });
  it('matches the snapshot', () => {
    const wrapper = mount(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
