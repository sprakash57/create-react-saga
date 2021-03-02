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
            city: 'Wisokyburgh',
            street: 'Victor Plains'
          },
          phone: '777-777'
        }
      ],
      loading: false,
      message: '',
    },
    fetchUsers: jest.fn()
  }

  afterEach(() => {
    cleanup();
  })

  it('Should render main container', () => {
    const { container } = render(<App {...data} />);
    expect(container.querySelector(".t-center")).toBeTruthy();
  });

  it('Should render <Button /> component', () => {
    const { getByTestId } = render(<App {...data} />);
    expect(getByTestId("succss-btn")).toBeTruthy();
  });

  it('Should display `Loading...` if API call is pending', () => {
    const newState = { ...data.state, loading: true }
    const props = { ...data, state: newState }
    const { getByText } = render(<App {...props} />);
    expect(getByText('Loading...')).toBeTruthy();
  });
});
