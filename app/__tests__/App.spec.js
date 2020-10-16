import React from 'react';
import { App } from '../App';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import User from '../components/User';

const initialState = {
  users: [
    {
      id: 1,
      name: 'john',
      email: 'johndoe@mail.com',
      address: {
        street: 'lorem',
        city: 'ipsum',
      },
      phone: '777-777',
    },
  ],
  loading: false,
  message: '',
};

let wrapper;

const mockFetchUsers = jest.fn();

describe('Test suite App Component', () => {
  beforeAll(() => {
    wrapper = mount(<App state={initialState} fetchUsers={mockFetchUsers} />);
  });

  test('Should render properly', () => {
    expect(wrapper).toBeDefined();
  });

  test('Should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Should render user component', () => {
    const user = wrapper.find(User);
    expect(user).toHaveLength(1);
  });

  test('Should call mock load users function', () => {
    wrapper.find('button').simulate('click');
    expect(mockFetchUsers.mock.calls.length).toBe(1);
  });
});
