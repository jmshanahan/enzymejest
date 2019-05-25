import React from 'react';
import Form from '../Form';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import '../../enzyme.config';
import api from '../api';
const updateInput = (wrapper, instance, newValue) => {
  const input = wrapper.find(instance);
  input.simulate('change', { currentTarget: { value: newValue } });
  return wrapper.find(instance);
};
describe('<Form Component>', () => {
  test('received promotions default is true', () => {
    const wrapper = shallow(<Form />);
    const promotionInput = wrapper.find('[data-testid="checked"]');
    expect(promotionInput.props().checked).toBeTruthy();
  });
  test('allows user to fill out form', () => {
    const wrapper = shallow(<Form />);
    const nameInput = updateInput(wrapper, '[data-testid="name"]', 'Joseph');
    const emailInput = updateInput(
      wrapper,
      '[data-testid="email"]',
      'joe@gmail.com'
    );
    const numberInput = updateInput(
      wrapper,
      '[data-testid="number"]',
      '387347'
    );
    wrapper.find('[data-testid="checked"]').simulate('click');
    expect(nameInput.props().value).toMatch(/Joseph/);
    expect(emailInput.props().value).toMatch(/joe@gmail.com/);
    expect(numberInput.props().value).toMatch(/387347/);
    expect(wrapper.find('[data-testid="checked"]').props().checked).toBeFalsy();
  });
  test('submits the form', () => {
    jest
      .spyOn(api, 'addUser')
      .mockImplementation(() => Promise.resolve({ data: 'New User Added' }));
    const wrapper = shallow(<Form />);
    const nameInput = updateInput(wrapper, '[data-testid="name"]', 'Joseph');
    const emailInput = updateInput(
      wrapper,
      '[data-testid="email"]',
      'joe@gmail.com'
    );
    const numberInput = updateInput(
      wrapper,
      '[data-testid="number"]',
      '387347'
    );
    wrapper
      .find('[data-testid="addUserForm"]')
      .simulate('submit', { preventDefault: () => {} });
    expect(api.addUser).toHaveBeenCalledWith(
      'Joseph',
      'joe@gmail.com',
      '387347'
    );
  });
  test.skip('matches saved snapshot', () => {
    const wrapper = shallow(<Form />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
