import React from 'react';
import ReactDOM from 'react-dom';
import '../../enzyme.config';
import App from '../App';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App shallow rendering', () => {
  it('should render app', () => {
    const wrapper = shallow(<App />, {
      context: {},
      disableLifecycleMethods: true
    });
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
    // console.log(wrapper.debug());
  });
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('on button click changes p text', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('No!');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });
  it('on input change, title changes text', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toBe('');
    input.simulate('change', { currentTarget: { value: 'Tyler' } });
    expect(wrapper.find('h2').text()).toBe('Tyler');
  });
  it('updates className on new state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.blue').length).toBe(1);
    wrapper.setState({ mainColor: 'red' });
    expect(wrapper.find('.blue').length).toBe(0);
    expect(wrapper.find('.red').length).toBe(1);
  });
  it('calls componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toMatch(/componentDidMount/);
  });
  it('setProps calls componentWillReceiveProps', () => {
    jest.spyOn(App.prototype, 'componentWillReceiveProps');
    const wrapper = shallow(<App />);
    wrapper.setProps({ hide: true });
    expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
    expect(App.prototype.componentWillReceiveProps.mock.calls.length).toBe(1);
  });
  it('handleStrings function returns correctly', () => {
    const wrapper = shallow(<App />);
    const trueReturn = wrapper.instance().handleStrings('Hello World');
    const falseReturn = wrapper.instance().handleStrings('');
    expect(trueReturn).toBeTruthy();
    expect(falseReturn).toBeFalsy();
  });
});
describe('App mount rendering ', () => {
  it('should render app', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
    wrapper.unmount();
  });
  it('matches the snapshot', () => {
    const wrapper = mount(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
