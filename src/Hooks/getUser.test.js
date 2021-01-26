import { renderHook } from "@testing-library/react-hooks";
import useUserDetails from './getUser';

const MOCK_DATA = {name:"MANOJ REDDY", email:"mj@mj.com"}

afterEach(() => {
    global.fetch.mockClear();
});
  
afterAll(() => {
    global.fetch.mockRestore();
});

//=====> MOCK, EXECUTE & ASSERT <=======//

describe('Test Fetching User details', () => {
   it('should fetch user details', async () => {

    // Mock API
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
        })
    );
    
    // Execute
    const { result, waitForNextUpdate } = renderHook(() =>
        useUserDetails()
    );
    await waitForNextUpdate();

     // Assert
    expect(result.current).toEqual({ user: { name: 'MANOJ REDDY', email: 'mj@mj.com' }, error: '' });
   });

   it("should catch error", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject("oops, error occured!"),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
        useUserDetails()
    );

    await waitForNextUpdate();
    expect(result.current).toEqual({
      user: null,
      error: "oops, error occured!",
    });
  });
});

// https://levelup.gitconnected.com/testing-a-custom-react-hook-21ae732228b7

// Follow above link to get started on how to mock custom fetch hooks