import { cleanup } from '@testing-library/react';
import { App } from '../App';

describe('<App />', () => {
  const data = {
    state: {
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
    },
    fetchUsers: jest.fn()
  }
  const getComponent = (props) => render(<App {...props} />);

  afterEach(() => {
    cleanup();
  })

  it('Should snapshots match', () => {
    const mounted = <App state={initialState} fetchUsers={mockFetchUsers} />;
    expect(toJson(mounted)).toMatchSnapshot();
  });

  it('Should render main container', () => {
    const { container } = getComponent(data);
    expect(container.querySelector(".t-center")).toBeTruthy();
  });

  it('Should render <Button /> component', () => {
    const { getByTestId } = getComponent(data);
    expect(getByTestId("succss-btn")).toBeTruthy();
  });

  it('Should display `Loading...` if API call is pending', () => {
    const newState = { ...data.state, loading: true }
    const props = { ...data, state: newState }
    const { getByText } = getComponent(props);
    expect(getByText('Loading...')).toBeTruthy();
  });

});
