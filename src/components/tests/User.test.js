import { render, screen, cleanup, waitForElementToBeRemoved } from "@testing-library/react";
import User from '../User';
import useUserDetails from '../../Hooks/getUser';

jest.mock("../../Hooks/getUser");

afterEach(cleanup);

describe('Should render User Component', () => {
    test('should have loading text before getting user details', async() => {
        // jest.mock('../../Hooks/getUser', () => {
        //     return jest.fn(() => ({
        //       user: null,
        //       error: ''
        //     }))
        // });
        useUserDetails.mockReturnValue({
            user: null,
            error: ''
        })
        render(<User />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        //await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });
    test('should have name & email', async() => {
        // jest.mock('../../Hooks/getUser', () => {
        //     return jest.fn(() => ({
        //       user: {name: "Manoj", email:"mail@test.com"},
        //       error: ''
        //     }))
        // });
        useUserDetails.mockReturnValue({
            user: {name:"Manoj", email:"test@test.com"},
            error: ''
        })
        render(<User />);
        const name = await screen.findByText('Manoj');
        expect(name).toBeInTheDocument();
        const email = await screen.findByText('test@test.com');
        expect(email).toBeInTheDocument();
    });

    test("User may throw Error", async() => {
        useUserDetails.mockReturnValue({
            user: null,
            error: 'Oops!!'
        });
        render(<User />);
        const error = await screen.findByText('Oops!!');
        expect(error).toBeInTheDocument();
    })
});

// https://chanonroy.medium.com/mocking-hooks-for-testing-with-jest-and-react-testing-library-d34505616d12#:~:text=Mocking%20that%20a%20hook%20method%20was%20called&text=As%20with%20our%20first%20example,assert%20things%20in%20our%20tests.&text=Other%20helpful%20jest%20methods%20to,toBeCalledWith()%20and%20toHaveBeenCalledTimes().
// follow above article to see how to test custom hook inside component


// BETTER EXAMPLE BELOW
// https://www.richardkotze.com/coding/mocking-react-hooks-unit-testing-jest