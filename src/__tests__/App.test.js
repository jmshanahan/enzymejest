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
