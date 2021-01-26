import { render, screen, cleanup } from '@testing-library/react';
import App from './App';


afterEach(cleanup);


describe("Renders App Component", () => {

  test('renders App header', () => {
    render(<App/>);
    const headerElement = screen.getByText(/Hello Wolrd!/i);
    expect(headerElement).toBeInTheDocument();
  });
  test('renders App header data testid', () => {
    render(<App/>);
    const testid = screen.getByTestId("header");
    expect(testid).toBeInTheDocument();
  });
  test('renders App input item', () => {
    render(<App/>);
    const inputelement = screen.getByPlaceholderText("hello hi");
    expect(inputelement).toBeInTheDocument();
    expect(inputelement).toBeRequired();
    expect(inputelement).toHaveClass("myInput");
  });
  test('App should render list items', () => {
    render(<App />);
    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass("animals");
    expect(listItems.length).toEqual(5);
  });
  
})
