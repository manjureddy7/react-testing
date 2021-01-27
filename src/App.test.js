import { render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from './App';
import LocationDisplay from './components/LoactionDisplay'

import '@testing-library/jest-dom/extend-expect'


afterEach(cleanup);


describe("Renders App Component", () => {

  test('renders App header', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <App />
    </Router>);
    const headerElement = screen.getByText(/Hello Wolrd!/i);
    expect(headerElement).toBeInTheDocument();
  });
  test('renders App header data testid', () => {
    render(<App/>);
    const testid = screen.getByTestId("header");
    expect(testid).toBeInTheDocument();
  });
  test('renders App input item', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <App />
    </Router>);
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/User Input/i), leftClick)
    const inputelement = screen.getByPlaceholderText("hello hi");
    expect(inputelement).toBeInTheDocument();
    expect(inputelement).toBeRequired();
    expect(inputelement).toHaveClass("myInput");
  });
  test('App should render list items', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <App />
    </Router>);
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Items/i))
    const listElement = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass("animals");
    expect(listItems.length).toEqual(5);
  });
  // test('App should render No match found if no route matches', () => {
  //   const history = createMemoryHistory();
  //   const route = '/some-bad-route'
  //   history.push(route)
  //   render(<Router history={history}>
  //     <App />
  //   </Router>);
  //   expect(screen.getByText(/No Match Found/i)).toBeInTheDocument()
  // });
  test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    render(
      <Router history={history}>
        <LocationDisplay />
      </Router>
    )
  
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })
  
})
