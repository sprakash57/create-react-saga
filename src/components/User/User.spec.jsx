import User from './index.jsx';

describe("User", () => {
    const mockUser = {
        name: 'john doe',
        email: '',
        address: { city: '', street: '' },
        phone: ''
    }
    test("Should render user card on the screen", () => {
        const { getByText, asFragment } = render(<User user={mockUser} />);
        expect(getByText('Name: john doe')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
})